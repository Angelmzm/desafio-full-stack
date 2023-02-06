export interface IContact {
    id: string
    name: string
    email: string
    number: string
    createdAt: Date
    userId:string 
}

export interface IContactCreate {
    name: string
    email: string
    number: string
}

export interface IContactUpdate {
    name?: string
    email?: string
    number?: string
}