// Выбранная статья
export async function getArticleDetails(id) {
    const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
    const data = await response.json();
    return data.data;
}

// Комментарий
export async function getComments(postId) {
    const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`);
    const data = await response.json();
    return data.data;
}
