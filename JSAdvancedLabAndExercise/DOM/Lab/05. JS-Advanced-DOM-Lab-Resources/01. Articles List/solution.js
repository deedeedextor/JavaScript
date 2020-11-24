function createArticle() {
	
    let titleElement = document
    .getElementById("createTitle");
    let contentElement = document
    .getElementById("createContent");
    let articles = document
    .getElementById("articles");

    let article = document
    .createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    if (titleElement.value !== '' && contentElement.value !== '') {
        h3.innerHTML = titleElement.value;
        titleElement.value = '';
        p.innerHTML = contentElement.value;
        contentElement.value = '';

        article.appendChild(h3);
        article.appendChild(p);

        articles.appendChild(article);
    }
}