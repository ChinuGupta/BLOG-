
export type AuthContextType = {
    user: User | null;
    isLoggedIn: boolean;
    login: (id: number, email: string) => void;
    logout: () => void;
    googleLogin: () => void;
};


// User Type
export type User = {
    id: string;
    email: string;
    password: string | null;
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
    id: string;
    userId: string;
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
}

//headerbutton props

export type TextProps = {
    title: string
    className?: string
    to: string
}


//imputfieldcomponent type
export interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    className: string;
}

//Button props
export type Buttonprops = {
    text: string,
    className?: string,
    onClick?: () => void
}