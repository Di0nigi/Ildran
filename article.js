class Article{
    constructor(title,content,owner,date,path,len=300){
        this.title=title;
        this.content=content;
        this.owner=owner;
        this.date=date;
        this.path=path;
        this.prev=this.createPreview(len);
    }
    createPreview(len){
        return this.content.slice(0,len)+"...";


    }
}

const queryParams = new URLSearchParams(window.location.search);
        const path = queryParams.get('string'); // Get the value of 'string'
        console.log(path);
       

