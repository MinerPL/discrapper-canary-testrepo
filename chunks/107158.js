e.exports = function (e) {
    let t = 'true false yes no null',
        n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
        r = {
            className: 'string',
            relevance: 0,
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /"/,
                    end: /"/
                },
                { begin: /\S+/ }
            ],
            contains: [
                e.BACKSLASH_ESCAPE,
                {
                    className: 'template-variable',
                    variants: [
                        {
                            begin: /\{\{/,
                            end: /\}\}/
                        },
                        {
                            begin: /%\{/,
                            end: /\}/
                        }
                    ]
                }
            ]
        },
        i = e.inherit(r, {
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /"/,
                    end: /"/
                },
                { begin: /[^\s,{}[\]]+/ }
            ]
        }),
        a = {
            end: ',',
            endsWithParent: !0,
            excludeEnd: !0,
            keywords: t,
            relevance: 0
        },
        s = [
            {
                className: 'attr',
                variants: [{ begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' }, { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' }, { begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" }]
            },
            {
                className: 'meta',
                begin: '^---\\s*$',
                relevance: 10
            },
            {
                className: 'string',
                begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
            },
            {
                begin: '<%[%=-]?',
                end: '[%-]?%>',
                subLanguage: 'ruby',
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            },
            {
                className: 'type',
                begin: '!\\w+!' + n
            },
            {
                className: 'type',
                begin: '!<' + n + '>'
            },
            {
                className: 'type',
                begin: '!' + n
            },
            {
                className: 'type',
                begin: '!!' + n
            },
            {
                className: 'meta',
                begin: '&' + e.UNDERSCORE_IDENT_RE + '$'
            },
            {
                className: 'meta',
                begin: '\\*' + e.UNDERSCORE_IDENT_RE + '$'
            },
            {
                className: 'bullet',
                begin: '-(?=[ ]|$)',
                relevance: 0
            },
            e.HASH_COMMENT_MODE,
            {
                beginKeywords: t,
                keywords: { literal: t }
            },
            {
                className: 'number',
                begin: '\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b'
            },
            {
                className: 'number',
                begin: e.C_NUMBER_RE + '\\b',
                relevance: 0
            },
            {
                begin: /\{/,
                end: /\}/,
                contains: [a],
                illegal: '\\n',
                relevance: 0
            },
            {
                begin: '\\[',
                end: '\\]',
                contains: [a],
                illegal: '\\n',
                relevance: 0
            },
            r
        ],
        o = [...s];
    return (
        o.pop(),
        o.push(i),
        (a.contains = o),
        {
            name: 'YAML',
            case_insensitive: !0,
            aliases: ['yml'],
            contains: s
        }
    );
};
