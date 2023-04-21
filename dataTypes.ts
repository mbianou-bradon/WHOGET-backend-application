export interface AskType {
    message: string,
    category:string,
    image?:string
    duration: number,
    visibility: boolean
}

export interface categoryType {
    name: string
}

export interface UserType {
    username: string,
    profileImage: string,
    category: string[],
    ban: boolean
}