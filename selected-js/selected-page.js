// // Выбранная статья
// async function getArticleDetails(id) {
//     const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
//     const data = await response.json();
//     return data.data;
// }

// // Комментарий
// async function getComments(postId) {
//     const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`);
//     const data = await response.json();
//     return data.data;
// }

// // Отрисовка страницы статьи
// function renderArticleDetail(article) {
//     const articleDetail = document.getElementById('article-detail');
//     articleDetail.innerHTML = `
//         <h1>${article.title}</h1>
//         <p>${article.body}</p>
//     `;
// }

// // Отрисовка комментариев 
// function renderComments(comments) {
//     const commentsContainer = document.getElementById('comments');
//     commentsContainer.innerHTML = '<h2>Comments</h2>';
//     comments.forEach(comment => {
//         const commentElement = document.createElement('div');
//         commentElement.innerHTML = `
//             <strong>${comment.name}</strong>: ${comment.body}
//         `;
//         commentsContainer.appendChild(commentElement);
//     });
// }

// // Получение query параметра айди
// const queryParams = new URLSearchParams(window.location.search);
// const postId = queryParams.get('id');

// // Получение данных
// getArticleDetails(postId)
//     .then(article => {
//         renderArticleDetail(article);
//         // Получение комментариев
//         return getComments(postId);
//     })
//     .then(comments => renderComments(comments))
//     .catch(error => console.error('Error:', error));

// document.getElementById('back-button').addEventListener('click', () => {
//     window.history.back(); 
// });

import { getArticleDetails, getComments } from './article.js';
import { renderArticleDetail, renderComments } from './render.js';

const queryParams = new URLSearchParams(window.location.search);
const postId = queryParams.get('id');

getArticleDetails(postId)
    .then(article => {
        renderArticleDetail(article);
        return getComments(postId);
    })
    .then(comments => renderComments(comments))
    .catch(error => console.error('Error:', error));

document.getElementById('back-button').addEventListener('click', () => {
    window.history.back(); 
});
