e.exports = function (e) {
    let t = e.regex,
        n = ['div', 'mod', 'in', 'and', 'or', 'not', 'xor', 'asserterror', 'begin', 'case', 'do', 'downto', 'else', 'end', 'exit', 'for', 'local', 'if', 'of', 'repeat', 'then', 'to', 'until', 'while', 'with', 'var'],
        r = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, { relevance: 0 }), e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })],
        i = {
            className: 'string',
            begin: /'/,
            end: /'/,
            contains: [{ begin: /''/ }]
        },
        a = {
            className: 'string',
            begin: /(#\d+)+/
        },
        s = {
            match: [/procedure/, /\s+/, /[a-zA-Z_][\w@]*/, /\s*/],
            scope: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [
                {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    keywords: n,
                    contains: [i, a, e.NUMBER_MODE]
                },
                ...r
            ]
        },
        o = {
            match: [/OBJECT/, /\s+/, t.either('Table', 'Form', 'Report', 'Dataport', 'Codeunit', 'XMLport', 'MenuSuite', 'Page', 'Query'), /\s+/, /\d+/, /\s+(?=[^\s])/, /.*/, /$/],
            relevance: 3,
            scope: {
                1: 'keyword',
                3: 'type',
                5: 'number',
                7: 'title'
            }
        };
    return {
        name: 'C/AL',
        case_insensitive: !0,
        keywords: {
            keyword: n,
            literal: 'false true'
        },
        illegal: /\/\*/,
        contains: [
            {
                match: /[\w]+(?=\=)/,
                scope: 'attribute',
                relevance: 0
            },
            i,
            a,
            {
                className: 'number',
                begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
                relevance: 0
            },
            {
                className: 'string',
                begin: '"',
                end: '"'
            },
            e.NUMBER_MODE,
            o,
            s
        ]
    };
};
