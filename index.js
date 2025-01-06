document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabButton');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and tab contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Add active class to the clicked tab and corresponding tab content
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});

document.addEventListener('scroll', function() {
    const element = document.querySelector('.slide-in-element');
    const elementPosition = element.getBoundingClientRect().top;
    const viewHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (elementPosition < viewHeight) {
        element.classList.add('animate');
    }
});

let articles =["Caratteri gotici, miniature dipinte su pergamena e una rilegatura in pregiata pelle rossa con incisa una piccola scritta dorata: Liber Novus. Quest’insolito aspetto da manoscritto medievale ammanta l’esercizio di “immaginazione attiva” che coinvolse Jung dal 1913 al 1930. Il taglio fortemente esoterico del contenuto, in armonia con la forma, rende difficile la categorizzazione di questo scritto che, da un’analisi superficiale, si palesa come il delirio ragionato di un dotto uomo di mezza età. Beh, si tratta esattamente di questo. Dopo aver a lungo frequentato l’irrazionalismo di fine Ottocento, nonché il taoismo e la mistica cristiana, lo psicanalista svizzero sancì definitivamente la rottura con Freud e con la sua negativizzazione dell’inconscio. Tuttavia, quello di Jung non fu solamente un allontanamento dalle teorie freudiane, bensì una presa di distanza radicale dagli assiomi che la modernità si era posta. Le immagini, le voci, i sussulti dell’inconscio (o per meglio dire, dello spirito del profondo) non significano nulla alla mente razionale dell’uomo moderno. Il primato della ragione è stato posto a fondamento vita umana. Il pensiero-giudizio vince ed impera sull’aspetto irrazionale e volitivo dell’uomo."];

var topArticlesContainer = document.getElementById("topArticlesContainer");

for (i =0; i< articles.length; i++ ){
    var articleContainer = document.createElement("div");
    articleContainer.style.width="900px";
    articleContainer.style.height="200px";
    articleContainer.style.borderColor="rgb(0,0,0)"
    articleContainer.style.borderWidth="2px";
    articleContainer.style.borderStyle="inset";
    articleContainer.style.marginTop="5px";
    articleContainer.style.backgroundColor="rgba(255, 0, 0, 0)";

    var artTitle = document.createElement("p");
    artTitle.style.margin="5px";
    artTitle.style.fontFamily="altoneBold";
    artTitle.style.fontSize="19px";
    artTitle.textContent="Caratteri gotici";

    var artContent = document.createElement("p");
    artContent.style.fontFamily="altone";
    artContent.style.margin="10px";
    artContent.style.fontSize="12px";
    artContent.style.color="rgba(0, 0, 0, 0.62)";
    artContent.textContent=articles[i]

    var artAuth = document.createElement("p");
    artAuth.style.margin="5px";
    artAuth.style.fontFamily="altoneBold";
    artAuth.style.fontSize="10px";
    artAuth.textContent="Raimondo Katte";



    
    articleContainer.appendChild(artTitle);
    articleContainer.appendChild(artContent);
    articleContainer.appendChild(artAuth);
    topArticlesContainer.appendChild(articleContainer);
}


