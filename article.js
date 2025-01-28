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


function getContent(article) {
    return new Promise((resolve, reject) => {
        const promises = []; 
          const fetchPromise = fetch(article)
            .then(response => {
              if (!response.ok) {
                throw new Error('File not found');
              }
              return response.text(); 
            })
            .then(data => {
              const lines = data.split(/\r?\n/);
              var tit = lines[0];
              var aut = lines[1];
              var date = lines[2];
              var content="";
              lines.forEach((lines,ind)=>{
                  if(ind>2){
                      content+=lines;
                  }
              });
              var art = new Article(tit,content,aut,date,article);
              resolve(art);
              
              
              
            })
            .catch(error => {
              console.error('Error fetching the file:', error);
            });
          
          
      });
    }


const queryParams = new URLSearchParams(window.location.search);
const articlePath = queryParams.get('string'); // Get the value of 'string'
//console.log(path);

getContent(articlePath).then(art=>{

    var titleContainer = document.getElementById("titleContainer");
    var authorContainer = document.getElementById("authorContainer");
    var contentContainer = document.getElementById("textContainer");


    titleContainer.style.width="100vw";
    titleContainer.style.height="30vh";
    titleContainer.style.margin="0px";
    titleContainer.style.padding="0px";
    titleContainer.style.display="flex";
    titleContainer.style.flexDirection="row";
    titleContainer.style.justifyContent="left";
    //titleContainer.style.alignContent="start";
    titleContainer.style.backgroundColor="rgba(255, 255, 255, 0)";
    var title = document.createElement("p");
    title.textContent=art.title;
    title.style.fontFamily="altoneBold";
    title.style.fontSize="200px";
    title.style.color="rgb(0,0,0)";
    title.style.margin="0px";
    //title.style.textAlign="center";

    var homeButton = document.createElement("button");
    homeButton.style.height="5vh";
    homeButton.style.width="5vw";
    homeButton.style.margin="0px";
    homeButton.style.borderRadius="0px";
    
    homeButton.style.boxShadow="-2px 2px 3px rgba(0, 0, 0, 0.3)";
    //homeButton.style.background="linear-gradient(to right,  rgb(220, 255, 253),rgb(182, 187, 255),rgb(239, 173, 255))";
    homeButton.style.background="none";
    //homeButton.style.backgroundColor="rgb(239, 173, 255)";

    homeButton.style.borderWidth="1px";
    homeButton.style.borderTopWidth="0px";
    homeButton.style.borderLeftWidth="0px";
    homeButton.textContent="Home";
    homeButton.style.fontFamily="altoneBold";
    homeButton.style.fontSize="10px"
    homeButton.style.position="absolute";

    homeButton.addEventListener("click", function() {
        var newPageUrl = "index.html";
        window.location.href = newPageUrl;
        console.log("clicked");
    });

    titleContainer.appendChild(homeButton);
    titleContainer.appendChild(title);
    
    


    authorContainer.style.width="100vw";
    authorContainer.style.height="5vh";
    authorContainer.style.paddingLeft="15px";
    authorContainer.style.backgroundColor="rgba(255, 255, 255, 0)";
    authorContainer.style.display="flex";
    authorContainer.style.flexDirection="row";
    authorContainer.style.justifyContent="space-between";
    //authorContainer.style.padding="10px";
    var author = document.createElement("p");
    author.textContent=art.owner;
    author.style.fontFamily="altone";
    author.style.fontSize="20px";
    author.style.color="rgb(0,0,0)";
    author.style.margin="0px";
    //author.style.marginTop="-10px";


    var date = document.createElement("p");
    date.style.width="9vw";
    date.textContent=art.date;
    date.style.fontFamily="neue";
    date.style.fontSize="18px";
    date.style.color="rgb(0, 0, 0)";
    date.style.margin="0px";

    
    authorContainer.appendChild(author);
    authorContainer.appendChild(date);

    contentContainer.style.width="100vw";
    contentContainer.style.height ="auto";
    contentContainer.style.background="linear-gradient(to left,  rgb(220, 255, 253),rgb(182, 187, 255),rgb(239, 173, 255))";
    contentContainer.style.display="flex";
    contentContainer.style.justifyContent="center";
    contentContainer.style.paddingTop="25px";


    var content = document.createElement("p");
    content.style.width="70vw";
    content.textContent=art.content;
    content.style.fontFamily="neue";
    content.style.fontSize="20px";
    content.style.color="rgb(0, 0, 0)";
    content.style.margin="0px";
    content.style.padding="10px";
    //content.style.backgroundColor="rgb(255, 255, 255)";
    //content.style.background="linear-gradient(to left,  rgb(220, 255, 253),rgb(182, 187, 255),rgb(239, 173, 255))"
    content.style.borderStyle="inset";
    content.style.borderWidth="0px";
    content.style.borderRadius="0px";
    content.style.borderColor="rgb(0, 0, 0)";
    //content.style.boxShadow="-5px 5px 10px rgba(0, 0, 0, 0.3)";
    content.style.padding="0px";
    content.style.textAlign="justify";
    content.style.lineHeight="35px";

    

    contentContainer.appendChild(content);









    







})
       

