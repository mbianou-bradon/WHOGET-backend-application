export interface AskType {
    message: string,
    category:string,
    image?:string[],
    duration: number,
    visibility: boolean,
    location: string
    report: number,
    user: string,
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