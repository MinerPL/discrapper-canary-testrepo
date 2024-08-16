e.exports = function (e) {
    let t = e.regex,
        n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
        r = ['and', 'as', 'assert', 'async', 'await', 'break', 'case', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'match', 'nonlocal|10', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'],
        i = {
            $pattern: /[A-Za-z]\w+|__\w+__/,
            keyword: r,
            built_in: ['__import__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip'],
            literal: ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'],
            type: ['Any', 'Callable', 'Coroutine', 'Dict', 'List', 'Literal', 'Generic', 'Optional', 'Sequence', 'Set', 'Tuple', 'Type', 'Union']
        },
        a = {
            className: 'meta',
            begin: /^(>>>|\.\.\.) /
        },
        s = {
            className: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: i,
            illegal: /#/
        },
        o = {
            begin: /\{\{/,
            relevance: 0
        },
        l = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
                {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, a],
                    relevance: 10
                },
                {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, a],
                    relevance: 10
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, a, o, s]
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, a, o, s]
                },
                {
                    begin: /([uU]|[rR])'/,
                    end: /'/,
                    relevance: 10
                },
                {
                    begin: /([uU]|[rR])"/,
                    end: /"/,
                    relevance: 10
                },
                {
                    begin: /([bB]|[bB][rR]|[rR][bB])'/,
                    end: /'/
                },
                {
                    begin: /([bB]|[bB][rR]|[rR][bB])"/,
                    end: /"/
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])'/,
                    end: /'/,
                    contains: [e.BACKSLASH_ESCAPE, o, s]
                },
                {
                    begin: /([fF][rR]|[rR][fF]|[fF])"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, o, s]
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE
            ]
        },
        u = '[0-9](_?[0-9])*',
        c = `(\\b(${u}))?\\.(${u})|\\b(${u})\\.`,
        d = `\\b|${r.join('|')}`,
        _ = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: `(\\b(${u})|(${c}))[eE][+-]?(${u})[jJ]?(?=${d})` }, { begin: `(${c})[jJ]?` }, { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})` }, { begin: `\\b0[bB](_?[01])+[lL]?(?=${d})` }, { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})` }, { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})` }, { begin: `\\b(${u})[jJ](?=${d})` }]
        },
        E = {
            className: 'comment',
            begin: t.lookahead(/# type:/),
            end: /$/,
            keywords: i,
            contains: [
                { begin: /# type:/ },
                {
                    begin: /#/,
                    end: /\b\B/,
                    endsWithParent: !0
                }
            ]
        },
        f = {
            className: 'params',
            variants: [
                {
                    className: '',
                    begin: /\(\s*\)/,
                    skip: !0
                },
                {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: i,
                    contains: ['self', a, _, l, e.HASH_COMMENT_MODE]
                }
            ]
        };
    return (
        (s.contains = [l, _, a]),
        {
            name: 'Python',
            aliases: ['py', 'gyp', 'ipython'],
            unicodeRegex: !0,
            keywords: i,
            illegal: /(<\/|->|\?)|=>/,
            contains: [
                a,
                _,
                { begin: /\bself\b/ },
                {
                    beginKeywords: 'if',
                    relevance: 0
                },
                l,
                E,
                e.HASH_COMMENT_MODE,
                {
                    match: [/\bdef/, /\s+/, n],
                    scope: {
                        1: 'keyword',
                        3: 'title.function'
                    },
                    contains: [f]
                },
                {
                    variants: [
                        {
                            match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/]
                        },
                        {
                            match: [/\bclass/, /\s+/, n]
                        }
                    ],
                    scope: {
                        1: 'keyword',
                        3: 'title.class',
                        6: 'title.class.inherited'
                    }
                },
                {
                    className: 'meta',
                    begin: /^[\t ]*@/,
                    end: /(?=#)|$/,
                    contains: [_, f, l]
                }
            ]
        }
    );
};
