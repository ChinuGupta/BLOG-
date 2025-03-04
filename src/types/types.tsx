export type AuthContextType = {

    isLoggedIn: boolean;
    login: (id: number, email: string) => void;
    logout: () => void;

};


// User Type
export type User = {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
    age: number;
    gender: string;
    bio: string;
    profilePicture: string;
    socialLinks: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    totalPosts: number;
    followers: number;
    following: number;
    subscriptionPlan: string;
    lastLogin: string;
};

// Blog Type
export type blogs = {
    id: number;
    userId: number;
    title: string;
    author: string;
    datePublished: string;
    category: string;
    content: string;
    tags: string[];
    comments: {
        username: string;
        comment: string;
        date: string;
    }[];
    likes: number;
};

//Card props type
export type CardProps = {
    blogs: blogs;
};

//headerbutton props

export type TextProps = {
    title: string
    className?: string
    to: string
}


//imputfieldcomponent type
export interface InputFieldProps {
    label: string;
    name:string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

