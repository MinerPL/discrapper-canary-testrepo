let t = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends'],
    n = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    r = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'], ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
e.exports = function (e) {
    let i = {
            keyword: t.concat(['then', 'unless', 'until', 'loop', 'of', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not', 'it', 'that', 'otherwise', 'from', 'to', 'til', 'fallthrough', 'case', 'enum', 'native', 'list', 'map', '__hasProp', '__extends', '__slice', '__bind', '__indexOf']),
            literal: n.concat(['yes', 'no', 'on', 'off', 'it', 'that', 'void']),
            built_in: r.concat(['npm', 'print'])
        },
        a = '[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*',
        s = e.inherit(e.TITLE_MODE, { begin: a }),
        o = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: i
        },
        l = {
            className: 'subst',
            begin: /#[A-Za-z$_]/,
            end: /(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
            keywords: i
        },
        u = [
            e.BINARY_NUMBER_MODE,
            {
                className: 'number',
                begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
                relevance: 0,
                starts: {
                    end: '(\\s*/)?',
                    relevance: 0
                }
            },
            {
                className: 'string',
                variants: [
                    {
                        begin: /'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /'/,
                        end: /'/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, o, l]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, o, l]
                    },
                    {
                        begin: /\\/,
                        end: /(\s|$)/,
                        excludeEnd: !0
                    }
                ]
            },
            {
                className: 'regexp',
                variants: [
                    {
                        begin: '//',
                        end: '//[gim]*',
                        contains: [o, e.HASH_COMMENT_MODE]
                    },
                    { begin: /\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/ }
                ]
            },
            { begin: '@' + a },
            {
                begin: '``',
                end: '``',
                excludeBegin: !0,
                excludeEnd: !0,
                subLanguage: 'javascript'
            }
        ];
    o.contains = u;
    let c = {
        className: 'params',
        begin: '\\(',
        returnBegin: !0,
        contains: [
            {
                begin: /\(/,
                end: /\)/,
                keywords: i,
                contains: ['self'].concat(u)
            }
        ]
    };
    return {
        name: 'LiveScript',
        aliases: ['ls'],
        keywords: i,
        illegal: /\/\*/,
        contains: u.concat([
            e.COMMENT('\\/\\*', '\\*\\/'),
            e.HASH_COMMENT_MODE,
            { begin: '(#=>|=>|\\|>>|-?->|!->)' },
            {
                className: 'function',
                contains: [s, c],
                returnBegin: !0,
                variants: [
                    {
                        begin: '(' + a + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?',
                        end: '->\\*?'
                    },
                    {
                        begin: '(' + a + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?',
                        end: '[-~]{1,2}>\\*?'
                    },
                    {
                        begin: '(' + a + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?',
                        end: '!?[-~]{1,2}>\\*?'
                    }
                ]
            },
            {
                variants: [
                    {
                        match: [/class\s+/, a, /\s+extends\s+/, a]
                    },
                    {
                        match: [/class\s+/, a]
                    }
                ],
                scope: {
                    2: 'title.class',
                    4: 'title.class.inherited'
                },
                keywords: i
            },
            {
                begin: a + ':',
                end: ':',
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }
        ])
    };
};
