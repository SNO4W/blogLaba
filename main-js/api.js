// Список статей
export async function getArticles(page) {
    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
    const data = await response.json();
    return data.data;
}

// Комментарии к статье
export async function getComments(postId) {
    const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`);
    const data = await response.json();
    return data.data;
}
