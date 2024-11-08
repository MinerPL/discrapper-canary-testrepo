e.exports = function (e) {
    let t = e.regex,
        n = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }]
        },
        r = e.COMMENT();
    r.variants = [
        {
            begin: /;/,
            end: /$/
        },
        {
            begin: /#/,
            end: /$/
        }
    ];
    let i = {
            className: 'variable',
            variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }]
        },
        a = {
            className: 'literal',
            begin: /\bon|off|true|false|yes|no\b/
        },
        s = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
                {
                    begin: "'''",
                    end: "'''",
                    relevance: 10
                },
                {
                    begin: '"""',
                    end: '"""',
                    relevance: 10
                },
                {
                    begin: '"',
                    end: '"'
                },
                {
                    begin: "'",
                    end: "'"
                }
            ]
        },
        o = t.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
    return {
        name: 'TOML, also INI',
        aliases: ['toml'],
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
            r,
            {
                className: 'section',
                begin: /\[+/,
                end: /\]+/
            },
            {
                begin: t.concat(o, '(\\s*\\.\\s*', o, ')*', t.lookahead(/\s*=\s*[^#\s]/)),
                className: 'attr',
                starts: {
                    end: /$/,
                    contains: [
                        r,
                        {
                            begin: /\[/,
                            end: /\]/,
                            contains: [r, a, i, s, n, 'self'],
                            relevance: 0
                        },
                        a,
                        i,
                        s,
                        n
                    ]
                }
            }
        ]
    };
};
