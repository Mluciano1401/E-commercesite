 interface UserToken{
    accessToken: string;
    expiresIn: number;
    id: string;
    lastname: string;
    money?: number;
    name: string;
    role: string;
    urlImg: string;
    username: string;
}

export default UserToken;
