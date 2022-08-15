interface User {
    id?: string;
    name: string;
    lastname: string;
    username: string;
    password: string;
    role: string;
    money?: number;
    urlImg?: string;
}

export default User;
