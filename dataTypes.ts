export interface AskType {
    message: string,
    category:string,
    image?:string[],
    duration: number,
    visibility: boolean,
    location: string
    report: number,
    userId: string,
    userName: string,
    userProfile: string,
    userEmail: string,
    userPhone: string,
    userWhatsapp: string
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