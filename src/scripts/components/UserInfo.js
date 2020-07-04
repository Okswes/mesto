export class UserInfo{
    constructor({name, prof}){
        this._name = name;
        this._prof = prof;
    }

    getUserInfo(){
        const userInfo = {
            name: this._name.textContent,
            prof: this._prof.textContent
        }
        return userInfo;
    }

    setUserInfo(input){
        this._name.textContent = input.author;
        this._prof.textContent = input.job;
    }
}