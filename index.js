
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





document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabButton');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bt = document.querySelector('.bottomPanelButton');
    const tabs = document.querySelectorAll('.tabButton');
    const tabContents = document.querySelectorAll('.tab-content');

   
    
        bt.addEventListener('click', () => {
            
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            document.getElementById("tabtBt").classList.add('active');
            document.getElementById("tabAbt").classList.add('active');
            console.log("triggered");
        });
    });

/*
document.addEventListener('scroll', function() {
    const element = document.querySelector('.topArticlesContainer');
    const element2 = document.querySelector('.suggestedLinkContainer');
    const elementPosition = element.getBoundingClientRect().top;
    const element2Position = element2.getBoundingClientRect().top;
    const viewHeight = window.innerHeight;

    if (elementPosition < viewHeight) {
        element.classList.add('animate');
    }
    if (element2Position < viewHeight) {
        element2.classList.add('animate');
    }
});*/

// THIS SHOULD NOT BE WORKING BUT IT DOES
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.topArticlesContainer, .suggestedLinkContainer');
  const element = document.querySelector('.topArticlesContainer');
    const element2 = document.querySelector('.suggestedLinkContainer');
  console.log("Elements found:", elements); // Debugging

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          console.log("Entry detected:", entry.target, "isIntersecting:", entry.isIntersecting); 

          if (true) {
            element.classList.add('animate');
              entry.target.classList.add('animate');
             // console.log("Animating:", entry.target); 
          }
      });
  }, { threshold: 0.01 });

  elements.forEach(element => {
      observer.observe(element);
      console.log("Observing:", element); 
  });
});




document.addEventListener('scroll', function() {
    const elements =  document.querySelectorAll('.articleContainer');
    

    const element2 =  document.getElementById("tabEv");
    //const element3 = document.getElementById("articlesPageContainer");
    const viewHeight = window.innerHeight;
 
    for (i =0;i<elements.length;i++){
        pos=elements[0].getBoundingClientRect().top;
        if (pos < viewHeight && element2.classList.contains('active') ) {
            elements[i].classList.add('animate');
        }

    }

    
   

    
   /* else{
        element.classList.remove('animate');

    }*/
});

//let articles =["Caratteri gotici, miniature dipinte su pergamena e una rilegatura in pregiata pelle rossa con incisa una piccola scritta dorata: Liber Novus. Quest’insolito aspetto da manoscritto medievale ammanta l’esercizio di “immaginazione attiva” che coinvolse Jung dal 1913 al 1930. Il taglio fortemente esoterico del contenuto, in armonia con la forma, rende difficile la categorizzazione di questo scritto che, da un’analisi superficiale, si palesa come il delirio ragionato di un dotto uomo di mezza età. Beh, si tratta esattamente di questo. Dopo aver a lungo frequentato l’irrazionalismo di fine Ottocento, nonché il taoismo e la mistica cristiana, lo psicanalista svizzero sancì definitivamente la rottura con Freud e con la sua negativizzazione dell’inconscio. Tuttavia, quello di Jung non fu solamente un allontanamento dalle teorie freudiane, bensì una presa di distanza radicale dagli assiomi che la modernità si era posta. Le immagini, le voci, i sussulti dell’inconscio (o per meglio dire, dello spirito del profondo) non significano nulla alla mente razionale dell’uomo moderno. Il primato della ragione è stato posto a fondamento vita umana. Il pensiero-giudizio vince ed impera sull’aspetto irrazionale e volitivo dell’uomo.","Caratteri gotici, miniature dipinte su pergamena e una rilegatura in pregiata pelle rossa con incisa una piccola scritta dorata: Liber Novus. Quest’insolito aspetto da manoscritto medievale ammanta l’esercizio di “immaginazione attiva” che coinvolse Jung dal 1913 al 1930. Il taglio fortemente esoterico del contenuto, in armonia con la forma, rende difficile la categorizzazione di questo scritto che, da un’analisi superficiale, si palesa come il delirio ragionato di un dotto uomo di mezza età. Beh, si tratta esattamente di questo. Dopo aver a lungo frequentato l’irrazionalismo di fine Ottocento, nonché il taoismo e la mistica cristiana, lo psicanalista svizzero sancì definitivamente la rottura con Freud e con la sua negativizzazione dell’inconscio. Tuttavia, quello di Jung non fu solamente un allontanamento dalle teorie freudiane, bensì una presa di distanza radicale dagli assiomi che la modernità si era posta. Le immagini, le voci, i sussulti dell’inconscio (o per meglio dire, dello spirito del profondo) non significano nulla alla mente razionale dell’uomo moderno. Il primato della ragione è stato posto a fondamento vita umana. Il pensiero-giudizio vince ed impera sull’aspetto irrazionale e volitivo dell’uomo.","Caratteri gotici, miniature dipinte su pergamena e una rilegatura in pregiata pelle rossa con incisa una piccola scritta dorata: Liber Novus. Quest’insolito aspetto da manoscritto medievale ammanta l’esercizio di “immaginazione attiva” che coinvolse Jung dal 1913 al 1930. Il taglio fortemente esoterico del contenuto, in armonia con la forma, rende difficile la categorizzazione di questo scritto che, da un’analisi superficiale, si palesa come il delirio ragionato di un dotto uomo di mezza età. Beh, si tratta esattamente di questo. Dopo aver a lungo frequentato l’irrazionalismo di fine Ottocento, nonché il taoismo e la mistica cristiana, lo psicanalista svizzero sancì definitivamente la rottura con Freud e con la sua negativizzazione dell’inconscio. Tuttavia, quello di Jung non fu solamente un allontanamento dalle teorie freudiane, bensì una presa di distanza radicale dagli assiomi che la modernità si era posta. Le immagini, le voci, i sussulti dell’inconscio (o per meglio dire, dello spirito del profondo) non significano nulla alla mente razionale dell’uomo moderno. Il primato della ragione è stato posto a fondamento vita umana. Il pensiero-giudizio vince ed impera sull’aspetto irrazionale e volitivo dell’uomo.","Caratteri gotici, miniature dipinte su pergamena e una rilegatura in pregiata pelle rossa con incisa una piccola scritta dorata: Liber Novus. Quest’insolito aspetto da manoscritto medievale ammanta l’esercizio di “immaginazione attiva” che coinvolse Jung dal 1913 al 1930. Il taglio fortemente esoterico del contenuto, in armonia con la forma, rende difficile la categorizzazione di questo scritto che, da un’analisi superficiale, si palesa come il delirio ragionato di un dotto uomo di mezza età. Beh, si tratta esattamente di questo. Dopo aver a lungo frequentato l’irrazionalismo di fine Ottocento, nonché il taoismo e la mistica cristiana, lo psicanalista svizzero sancì definitivamente la rottura con Freud e con la sua negativizzazione dell’inconscio. Tuttavia, quello di Jung non fu solamente un allontanamento dalle teorie freudiane, bensì una presa di distanza radicale dagli assiomi che la modernità si era posta. Le immagini, le voci, i sussulti dell’inconscio (o per meglio dire, dello spirito del profondo) non significano nulla alla mente razionale dell’uomo moderno. Il primato della ragione è stato posto a fondamento vita umana. Il pensiero-giudizio vince ed impera sull’aspetto irrazionale e volitivo dell’uomo.","Caratteri gotici, miniature dipinte su pergamena e una rilegatura in pregiata pelle rossa con incisa una piccola scritta dorata: Liber Novus. Quest’insolito aspetto da manoscritto medievale ammanta l’esercizio di “immaginazione attiva” che coinvolse Jung dal 1913 al 1930. Il taglio fortemente esoterico del contenuto, in armonia con la forma, rende difficile la categorizzazione di questo scritto che, da un’analisi superficiale, si palesa come il delirio ragionato di un dotto uomo di mezza età. Beh, si tratta esattamente di questo. Dopo aver a lungo frequentato l’irrazionalismo di fine Ottocento, nonché il taoismo e la mistica cristiana, lo psicanalista svizzero sancì definitivamente la rottura con Freud e con la sua negativizzazione dell’inconscio. Tuttavia, quello di Jung non fu solamente un allontanamento dalle teorie freudiane, bensì una presa di distanza radicale dagli assiomi che la modernità si era posta. Le immagini, le voci, i sussulti dell’inconscio (o per meglio dire, dello spirito del profondo) non significano nulla alla mente razionale dell’uomo moderno. Il primato della ragione è stato posto a fondamento vita umana. Il pensiero-giudizio vince ed impera sull’aspetto irrazionale e volitivo dell’uomo."];
let articlesPaths =["articles/SampleArticle.txt","articles/SampleArticle.txt","articles/SampleArticle.txt","articles/SampleArticle.txt","articles/SampleArticle.txt"];
var articles=[];

/*function getText(artList) {
    for (ind=0; ind<artList.length;ind++){
        path=artList[ind];
    fetch (path)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(data => {
            articles.push(data);
            console.log(articles[0]);
            console.log("reached");
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });}
        return artList;
        
    
}*/
function getText(artList) {
    
    return new Promise((resolve, reject) => {
      const promises = []; 
      
      for (let ind = 0; ind < artList.length; ind++) {
        const path = artList[ind];
        const fetchPromise = fetch(path)
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
            var art = new Article(tit,content,aut,date,path);
            articles.push(art);
            
            
          })
          .catch(error => {
            console.error('Error fetching the file:', error);
          });
        
        promises.push(fetchPromise); 
      }
  
    
      Promise.all(promises)
        .then(() => {
          
          resolve(articles); 
        })
        .catch(error => {

          reject(error);
        });
    });
  }


    getText(articlesPaths)
        .then(data=>{
    
        var topArticlesContainer = document.getElementById("topArticlesContainer");
        topArticlesContainer.className="topArticlesContainer";
        //topArticlesContainer.style.width="55vw";
        topArticlesContainer.style.height="100vh";

        /*topArticlesContainer.style.display="flex";
        topArticlesContainer.style.alignItems="center";*/
        var title3 = document.createElement("p");
        title3.className="title3";
        title3.textContent="Ultimi pezzi";
        

        topArticlesContainer.style.display="flex";
        topArticlesContainer.style.flexDirection="column";
        topArticlesContainer.style.overflowY="scroll";


        topArticlesContainer.style.borderTopRightRadius="15px";
        topArticlesContainer.style.borderBottomRightRadius="15px";
        topArticlesContainer.style.justifyItems="left";
        //topArticlesContainer.style.gridTemplateColumns ="repeat(1, 1fr)";
        topArticlesContainer.appendChild(title3);
        for (i =0; (i< data.length && i<3); i++ ){
        console.log("eo");
        var articleBt = document.createElement("button");
        articleBt.style.border="none";
        articleBt.style.background="none";
        articleBt.style.width="45vw";
        articleBt.style.height="40vh";
        (function(i) {
        articleBt.addEventListener("click", function() {
                var newPageUrl = "article.html?string=" + data[i].path;
                window.location.href = newPageUrl;
                })})(i);
            

        var articleContainer = document.createElement("div");
        

        articleContainer.style.borderColor="rgb(0,0,0)"
        articleContainer.style.borderWidth="2px";
        articleContainer.style.borderStyle="inset";
        articleContainer.style.borderRadius="5px"
        articleContainer.style.marginTop="20px";
        articleContainer.style.boxShadow="-5px 5px 10px rgba(0, 0, 0, 0.3)";
        //articleContainer.style.backgroundColor="rgba(255, 4, 251, 0.29)";
        articleContainer.style.background="linear-gradient(to left,  rgb(220, 255, 253),rgb(182, 187, 255),rgb(239, 173, 255))";
        articleContainer.className="articleContainerHome";
        
        var artDate = document.createElement("p");
        artDate.style.fontFamily="neue";
        artDate.style.margin="5px";
        artDate.style.fontSize="8px";
        artDate.style.color="rgba(84, 84, 84, 0.62)";
        artDate.textContent=data[i].date;

        var artTitle = document.createElement("p");
        artTitle.style.margin="5px";
        artTitle.style.fontFamily="altoneBold";
        artTitle.style.fontSize="35px";
        artTitle.textContent=data[i].title;

        var artContent = document.createElement("p");
        artContent.style.fontFamily="neue";
        artContent.style.margin="10px";
        artContent.style.fontSize="20px";
        artContent.style.color="rgba(0, 0, 0, 0.62)";
        artContent.textContent=data[i].prev;

        var artAuth = document.createElement("p");
        artAuth.style.margin="5px";
        artAuth.style.fontFamily="altoneBold";
        artAuth.style.fontSize="10px";
        artAuth.textContent=data[i].owner;



        articleContainer.appendChild(artDate);
        articleContainer.appendChild(artTitle);
        articleContainer.appendChild(artContent);
        articleContainer.appendChild(artAuth);
        articleBt.appendChild(articleContainer);
        topArticlesContainer.appendChild(articleBt);
        }})
        .catch(error => {
          console.log("Error:", error);
        });

let linkList = ["https://it.wikipedia.org/wiki/Intelligenza_artificiale"];

var suggestedLinkContainer = document.getElementById("suggestedLinkContainer");
suggestedLinkContainer.style.position="relative";

suggestedLinkContainer.className="suggestedLinkContainer";


suggestedLinkContainer.style.height="100vh";

suggestedLinkContainer.style.overflowY="scroll";

suggestedLinkContainer.style.backgroundColor="rgba(200, 200, 200, 0)";

suggestedLinkContainer.style.display="flex";

suggestedLinkContainer.style.alignItems="left";

var titleLinks = document.createElement("p");
titleLinks.className="titleLinks";
titleLinks.style.marginTop="20px";
titleLinks.innerHTML = 'Articoli e fonti <br> per approfondire';
titleLinks.style.fontFamily="altoneBold";
titleLinks.style.fontSize="60%";


suggestedLinkContainer.appendChild(titleLinks);
var linksContainer = document.createElement("div");
linksContainer.classList="linksContainer";

//linksContainer.style.width="45vw";
linksContainer.style.borderStyle="inset";
linksContainer.style.borderColor="rgb(0,0,0)";
linksContainer.style.borderWidth="2px";
linksContainer.style.borderRadius="5px"
linksContainer.style.boxShadow="-5px 5px 10px rgba(0, 0, 0, 0.3)";
linksContainer.style.padding="15px";
linksContainer.display="flex";
linksContainer.alignItems="center";
linksContainer.style.background="linear-gradient(to left,  rgb(220, 255, 253),rgb(182, 187, 255),rgb(239, 173, 255))";

for (j =0; j< linkList.length; j++ ){
    var link = document.createElement("p");
    link.className="linkS";
    link.innerHTML = `
        <h1>What is AI:</h1>
        <p>${linkList[j]}</p>`;
    link.style.fontFamily="altone";
    link.style.fontSize="10px";
    link.style.color="rgb(0, 0, 0)";
    
    link.addEventListener('click', function() {
        window.location.replace = linkList[j];
      });
    linksContainer.appendChild(link);
    


}

suggestedLinkContainer.appendChild(linksContainer);











// articles page 

var allArticles=[];


function getTextArticlesPage(artList) {
    
    return new Promise((resolve, reject) => {
      const promises = []; 
      
      for (let ind = 0; ind < artList.length; ind++) {
        const path = artList[ind];
        const fetchPromise = fetch(path)
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
            var art = new Article(tit,content,aut,date,path);
            art.prev=art.createPreview(1000);
            allArticles.push(art);
            
            
          })
          .catch(error => {
            console.error('Error fetching the file:', error);
          });
        
        promises.push(fetchPromise); 
      }
  
    
      Promise.all(promises)
        .then(() => {
          
          resolve(allArticles); 
        })
        .catch(error => {

          reject(error);
        });
    });
  }









var articlesPageContainer = document.getElementById("articlesPageContainer");

articlesPageContainer.addEventListener("mouseenter",()=>{
  const elements =  document.querySelectorAll('.articleContainer');
    

  const element2 =  document.getElementById("tabEv");
  //const element3 = document.getElementById("articlesPageContainer");
  //const viewHeight = window.innerHeight;

  for (i =0;i<elements.length;i++){
      pos=elements[0].getBoundingClientRect().top;
      if (element2.classList.contains('active') ) {
          elements[i].classList.add('animate');
      }
    }

// comment

});



articlesPageContainer.style.width="100vw";
articlesPageContainer.style.height="100vh";
articlesPageContainer.style.display="flex";
articlesPageContainer.style.flexDirection="column";
articlesPageContainer.style.alignItems="center";
articlesPageContainer.style.overflowY="scroll";
articlesPageContainer.style.borderRadius="15px"
//articlesPageContainer.style.background="linear-gradient(to left,  rgb(220, 255, 253),rgb(182, 187, 255),rgb(239, 173, 255))";
//articlesPageContainer.style.backgroundColor="rgb(0,0,0)";


getTextArticlesPage(articlesPaths).then(arts=>{


    for (i =0; i< arts.length; i++ ){
        console.log(i);
        var articleBt = document.createElement("button");
        articleBt.style.border="none";
        articleBt.style.background="none";
        articleBt.style.width="80vw";
        articleBt.style.height="45vh";
        articleBt.style.marginTop="20px";
        articleBt.style.marginBottom="40px";
        (function(i) {
          articleBt.addEventListener("click", function() {
                  var newPageUrl = "article.html?string=" + arts[i].path;
                  window.location.href = newPageUrl;
                  })})(i);

        var articleContainer = document.createElement("div");
        articleContainer.style.margin="10px";
        articleContainer.className="articleContainer";
        articleContainer.style.alignItems="center";
        //articleContainer.style.width="80vw";
        //articleContainer.style.height="45vh";
        articleContainer.style.borderColor="rgb(0,0,0)"
        articleContainer.style.borderWidth="2px";
        articleContainer.style.borderStyle="inset";
        //articleContainer.style.marginTop="20px";
        articleContainer.style.background="linear-gradient(to right,  rgb(220, 255, 253),rgb(182, 187, 255),rgb(239, 173, 255))";
        articleContainer.overflowY="scroll";
        articleContainer.style.boxShadow="-5px 5px 10px rgba(0, 0, 0, 0.3)";
        articleContainer.style.borderRadius="5px";
    
        var artDate = document.createElement("p");
        artDate.style.fontFamily="neue";
        artDate.style.margin="5px";
        artDate.style.fontSize="16px";
        artDate.style.color="rgba(84, 84, 84, 0.62)";
        artDate.textContent=arts[i].date;
    
        var artTitle = document.createElement("p");
        artTitle.style.margin="5px";
        artTitle.style.fontFamily="altoneBold";
        artTitle.style.fontSize="70px";
        artTitle.textContent=arts[i].title;
    
        var artContent = document.createElement("p");
        artContent.style.fontFamily="neue";
        artContent.style.margin="10px";
        artContent.style.fontSize="20px";
        artContent.style.color="rgba(0, 0, 0, 0.62)";
        artContent.style.textAlign="center";
        artContent.textContent=arts[i].prev;
    
        var artAuth = document.createElement("p");
        artAuth.style.margin="5px";
        artAuth.style.fontFamily="altoneBold";
        artAuth.style.fontSize="20px";
        artAuth.textContent=arts[i].owner;
    
    
    
        articleContainer.appendChild(artDate);
        articleContainer.appendChild(artTitle);
        articleContainer.appendChild(artContent);
        articleContainer.appendChild(artAuth);
        articleBt.appendChild(articleContainer);
        articlesPageContainer.appendChild(articleBt);

        
    }

});


