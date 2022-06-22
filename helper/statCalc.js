export const favoriteArticle = (articles, property) => {
    const mostVotes = [ ...articles ].sort((a, b) => b[ property ] - a[ property ])
    return mostVotes[ 0 ]
}
