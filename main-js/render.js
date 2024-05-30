// Отрисовка списка статей
export function renderArticles(articles) {
    const articlesList = document.getElementById('articles-list');
    articlesList.innerHTML = '';
    articles.forEach(article => {
        const articleLink = document.createElement('a');
        articleLink.href = `selected-page.html?id=${article.id}`;
        articleLink.textContent = article.title;
        articleLink.classList.add('d-block', 'mb-2');
        articlesList.appendChild(articleLink);
    });
}

// Отрисовка навигации
export function renderPagination(totalPages, currentPage) {
    const paginationList = document.getElementById('pagination-list');
    paginationList.innerHTML = ''; // Очистим список перед обновлением

    // Кнопка "Previous"
    const previousPageItem = document.createElement('li');
    previousPageItem.classList.add('page-item');
    const previousPageLink = document.createElement('a');
    previousPageLink.classList.add('page-link');
    previousPageLink.href = `main-page.html?page=${currentPage - 1}`;
    previousPageLink.setAttribute('aria-label', 'Previous');
    previousPageLink.innerHTML = '<span aria-hidden="true">&laquo;</span>';
    previousPageItem.appendChild(previousPageLink);
    paginationList.appendChild(previousPageItem);

    // Номера страниц
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        const pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.href = `main-page.html?page=${i}`;
        pageLink.textContent = i;
        if (i === currentPage) {
            pageItem.classList.add('active');
        }
        pageItem.appendChild(pageLink);
        paginationList.appendChild(pageItem);
    }

    // Кнопка "Next"
    const nextPageItem = document.createElement('li');
    nextPageItem.classList.add('page-item');
    const nextPageLink = document.createElement('a');
    nextPageLink.classList.add('page-link');
    nextPageLink.href = `main-page.html?page=${currentPage + 1}`;
    nextPageLink.setAttribute('aria-label', 'Next');
    nextPageLink.innerHTML = '<span aria-hidden="true">&raquo;</span>';
    nextPageItem.appendChild(nextPageLink);
    paginationList.appendChild(nextPageItem);
}
