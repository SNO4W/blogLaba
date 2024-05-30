// // Получение query параметра page из адресной строки
// const pageParams = new URLSearchParams(window.location.search);
// const currentPage = parseInt(pageParams.get('page')) || 1;

// // Список статей
// async function getArticles(page) {
//     const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
//     const data = await response.json();
//     return data.data;
// }

// // Отрисовка списка статей
// function renderArticles(articles) {
//     const articlesList = document.getElementById('articles-list');
//     articlesList.innerHTML = '';
//     articles.forEach(article => {
//         const articleLink = document.createElement('a');
//         articleLink.href = `selected-page.html?id=${article.id}`;
//         articleLink.textContent = article.title;
//         articleLink.classList.add('d-block', 'mb-2');
//         articlesList.appendChild(articleLink);
//     });
// }

// // Отрисовка навигации
// function renderPagination(totalPages, currentPage) {
//     const paginationList = document.getElementById('pagination-list');
//     paginationList.innerHTML = ''; // Очистим список перед обновлением

//     // Кнопка "Previous"
//     const previousPageItem = document.createElement('li');
//     previousPageItem.classList.add('page-item');
//     const previousPageLink = document.createElement('a');
//     previousPageLink.classList.add('page-link');
//     previousPageLink.href = `main-page.html?page=${currentPage - 1}`;
//     previousPageLink.setAttribute('aria-label', 'Previous');
//     previousPageLink.innerHTML = '<span aria-hidden="true">&laquo;</span>';
//     previousPageItem.appendChild(previousPageLink);
//     paginationList.appendChild(previousPageItem);

//     // Номера страниц
//     for (let i = 1; i <= totalPages; i++) {
//         const pageItem = document.createElement('li');
//         pageItem.classList.add('page-item');
//         const pageLink = document.createElement('a');
//         pageLink.classList.add('page-link');
//         pageLink.href = `main-page.html?page=${i}`;
//         pageLink.textContent = i;
//         if (i === currentPage) {
//             pageItem.classList.add('active');
//         }
//         pageItem.appendChild(pageLink);
//         paginationList.appendChild(pageItem);
//     }

//     // Кнопка "Next"
//     const nextPageItem = document.createElement('li');
//     nextPageItem.classList.add('page-item');
//     const nextPageLink = document.createElement('a');
//     nextPageLink.classList.add('page-link');
//     nextPageLink.href = `main-page.html?page=${currentPage + 1}`;
//     nextPageLink.setAttribute('aria-label', 'Next');
//     nextPageLink.innerHTML = '<span aria-hidden="true">&raquo;</span>';
//     nextPageItem.appendChild(nextPageLink);
//     paginationList.appendChild(nextPageItem);
// }

// // Получение списка статей
// getArticles(currentPage)
//     .then(articles => {
//         renderArticles(articles);
//         renderPagination(10, currentPage); 
//     })

import { getArticles } from './api.js';
import { renderArticles, renderPagination } from './render.js';

// Получение query параметра page из адресной строки
const pageParams = new URLSearchParams(window.location.search);
const currentPage = parseInt(pageParams.get('page')) || 1;

// Получение списка статей
getArticles(currentPage)
    .then(articles => {
        renderArticles(articles);
        renderPagination(10, currentPage); 
    });
