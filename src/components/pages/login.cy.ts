describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("/"); 
    });
  
    it("should render the login form", () => {
      cy.get("h1").contains("Login" );
      cy.get("input[name='email']").should("exist");
      cy.get("input[name='password']").should("exist");
      cy.get("button[type='submit']").contains("Login");
    });
  
    it("should allow the user to type in the email and password fields", () => {
      cy.get("input[name='email']")
        .type("test@example.com")
        .should("have.value", "test@example.com");
  
      cy.get("input[name='password']")
        .type("password123")
        .should("have.value", "password123");
    });
  
    it("should show an alert if a Google user tries logging in with email", () => {
      cy.intercept("GET", "/api/users?email=test@example.com", {
        statusCode: 200,
        body: [{ email: "test@example.com", isGoogleUser: true }],
      }).as("getUser");
  
      cy.get("input[name='email']").type("test@example.com");
      cy.get("button[type='submit']").click(); 
      cy.on("window:alert", (txt) => {
        expect(txt).to.contain("You have signed in with Google before. Please log in using Google.");
      });
    });
  
    it("should show an error if user credentials are incorrect", () => {
      cy.intercept("GET", "/api/users?email=wrong@example.com", {
        statusCode: 200,
        body: [],
      }).as("getUser");
  
      cy.get("input[name='email']").type("wrong@example.com");
      cy.get("input[name='password']").type("wrongpassword");
      cy.get("button[type='submit']").click();
  
      cy.on("window:alert", (txt) => {
        expect(txt).to.contain("Invalid credentials");
      });
    });
  
    it("should login successfully with correct credentials", () => {
      cy.intercept("GET", "/api/users?email=correct@example.com", {
        statusCode: 200,
        body: [{ id: 1, email: "correct@example.com", password: "password123", isGoogleUser: false }],
      }).as("getUser");
  
      cy.get("input[name='email']").type("correct@example.com");
      cy.get("input[name='password']").type("password123");
      cy.get("button[type='submit']").click();
  
      cy.wait("@getUser");
      cy.url().should("include", "/UserListPage");
    });
  
    it("should allow login via Google button", () => {
      cy.get("button").contains("Sign in with Google").click();
    });
  });
  