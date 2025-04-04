e.exports = function (e) {
    let t = 'if eq ne lt lte gt gte select default math sep';
    return {
        name: 'Dust',
        aliases: ['dst'],
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
            {
                className: 'template-tag',
                begin: /\{[#\/]/,
                end: /\}/,
                illegal: /;/,
                contains: [
                    {
                        className: 'name',
                        begin: /[a-zA-Z\.-]+/,
                        starts: {
                            endsWithParent: !0,
                            relevance: 0,
                            contains: [e.QUOTE_STRING_MODE]
                        }
                    }
                ]
            },
            {
                className: 'template-variable',
                begin: /\{/,
                end: /\}/,
                illegal: /;/,
                keywords: t
            }
        ]
    };
};
