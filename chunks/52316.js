e.exports = function (e) {
    let t = {
            variants: [e.COMMENT('--', '$'), e.COMMENT(/\{-/, /-\}/, { contains: ['self'] })]
        },
        n = {
            className: 'type',
            begin: "\\b[A-Z][\\w']*",
            relevance: 0
        },
        r = {
            begin: '\\(',
            end: '\\)',
            illegal: '"',
            contains: [
                {
                    className: 'type',
                    begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
                },
                t
            ]
        },
        i = {
            begin: /\{/,
            end: /\}/,
            contains: r.contains
        },
        o = {
            className: 'string',
            begin: "'\\\\?.",
            end: "'",
            illegal: '.'
        };
    return {
        name: 'Elm',
        keywords: ['let', 'in', 'if', 'then', 'else', 'case', 'of', 'where', 'module', 'import', 'exposing', 'type', 'alias', 'as', 'infix', 'infixl', 'infixr', 'port', 'effect', 'command', 'subscription'],
        contains: [
            {
                beginKeywords: 'port effect module',
                end: 'exposing',
                keywords: 'port effect module where command subscription exposing',
                contains: [r, t],
                illegal: '\\W\\.|;'
            },
            {
                begin: 'import',
                end: '$',
                keywords: 'import as exposing',
                contains: [r, t],
                illegal: '\\W\\.|;'
            },
            {
                begin: 'type',
                end: '$',
                keywords: 'type alias',
                contains: [n, r, i, t]
            },
            {
                beginKeywords: 'infix infixl infixr',
                end: '$',
                contains: [e.C_NUMBER_MODE, t]
            },
            {
                begin: 'port',
                end: '$',
                keywords: 'port',
                contains: [t]
            },
            o,
            e.QUOTE_STRING_MODE,
            e.C_NUMBER_MODE,
            n,
            e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
            t,
            { begin: '->|<-' }
        ],
        illegal: /;/
    };
};
