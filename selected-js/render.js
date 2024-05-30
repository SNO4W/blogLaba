// Отрисовка страницы статьи
export function renderArticleDetail(article) {
    const articleDetail = document.getElementById('article-detail');
    articleDetail.innerHTML = `
        <h1>${article.title}</h1>
        <p>${article.body}</p>
    `;
}

// Отрисовка комментариев 
export function renderComments(comments) {
    const commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '<h2>Comments</h2>';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
            <strong>${comment.name}</strong>: ${comment.body}
        `;
        commentsContainer.appendChild(commentElement);
    });
}
