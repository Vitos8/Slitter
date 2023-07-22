export type DataLogin = {
     email: string;
     password: string;
};

export type DataRegister = {
     email: string;
     name: string;
     userName: string;
     password: string;
};

export type UserType = {
     bio: string | null;
     coverImage: string | null;
     createdAt: string;
     email: string;
     emailVerified: string | null;
     followingIds: string[] | [];
     hasNotification: string | null;
     hashedPassword: string;
     id: string;
     image: string | null;
     name: string;
     profileImage: string | null;
     updatedAt: string;
     username: string;
};
