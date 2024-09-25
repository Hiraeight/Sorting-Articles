import React from 'react';

function Articles({ articles, sortType }) {

    const sortedArticles = [...articles].sort((a,b) => {
        if (sortType === 'mostUpvoted') {
            return b.upvotes - a.upvotes;
        } else if (sortType === 'mostRecent') {
            return new Date(b.date) - new Date(a.date);
        }
        return 0;
    });
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {sortedArticles.map((article, index) => (
                        <tr data-testid="article" key={index}>
                            <td data-testid="article-title">{article.title}</td>
                            <td data-testid="article-upvotes">{article.upvotes}</td>
                            <td data-testid="article-date">{new Date(article.date).toLocaleDateString()}</td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
