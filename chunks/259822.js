e.exports = function (e) {
    let t = {
            className: 'attr',
            begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
            relevance: 1.01
        },
        n = {
            match: /[{}[\],:]/,
            className: 'punctuation',
            relevance: 0
        },
        r = ['true', 'false', 'null'],
        i = {
            scope: 'literal',
            beginKeywords: r.join(' ')
        };
    return {
        name: 'JSON',
        aliases: ['jsonc'],
        keywords: { literal: r },
        contains: [t, n, e.QUOTE_STRING_MODE, i, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        illegal: '\\S'
    };
};
