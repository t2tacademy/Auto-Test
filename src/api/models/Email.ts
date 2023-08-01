
export class  Email {
    user_name: string;
    user_email: string;
    message: string;


    constructor(user_name: string, user_email: string, message: string) {
        this.user_name = user_name;
        this.user_email = user_email;
        this.message = message;
    }
}
