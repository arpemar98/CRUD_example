export class Comment {
    public id:string;
    public postId:string;
    public name:string;
    public email:string;
    public body:string;

    constructor(){
        this.id="";
        this.postId="";
        this.name="";
        this.email="";
        this.body="";
    }
}
