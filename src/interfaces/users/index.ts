export interface IUser {
    id: string
    name: string
    email: string
    number: string
    createdAt: Date
}

export interface IUserCreate {
    name: string
    email: string
    number: string
    password: string
}

export interface IUserLogin{
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
    number?: string
}