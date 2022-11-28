interface dataUser {
    dataUser: {
      accessToken: string;
      expiresIn: number;
      id?: string;
      name: string;
      lastname: string;
      username: string;
      password: string;
      role: string;
      money?: number;
      urlImg?: string;
  };
}

export default dataUser;
