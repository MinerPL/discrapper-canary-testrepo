e.exports = function (e) {
    let t = e.regex.either(...['(?:NeedsTeXFormat|RequirePackage|GetIdInfo)', 'Provides(?:Expl)?(?:Package|Class|File)', '(?:DeclareOption|ProcessOptions)', '(?:documentclass|usepackage|input|include)', 'makeat(?:letter|other)', 'ExplSyntax(?:On|Off)', '(?:new|renew|provide)?command', '(?:re)newenvironment', '(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand', '(?:New|Renew|Provide|Declare)DocumentEnvironment', '(?:(?:e|g|x)?def|let)', '(?:begin|end)', '(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)', 'caption', '(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)', '(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)', '(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)', '(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)', '(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)', '(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)'].map((e) => e + '(?![a-zA-Z@:_])')),
        n = new RegExp(['(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*', '[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}', '[qs]__?[a-zA-Z](?:_?[a-zA-Z])+', 'use(?:_i)?:[a-zA-Z]*', '(?:else|fi|or):', '(?:if|cs|exp):w', '(?:hbox|vbox):n', '::[a-zA-Z]_unbraced', '::[a-zA-Z:]'].map((e) => e + '(?![a-zA-Z:_])').join('|')),
        r = [{ begin: /\^{6}[0-9a-f]{6}/ }, { begin: /\^{5}[0-9a-f]{5}/ }, { begin: /\^{4}[0-9a-f]{4}/ }, { begin: /\^{3}[0-9a-f]{3}/ }, { begin: /\^{2}[0-9a-f]{2}/ }, { begin: /\^{2}[\u0000-\u007f]/ }],
        i = [
            {
                className: 'keyword',
                begin: /\\/,
                relevance: 0,
                contains: [
                    {
                        endsParent: !0,
                        begin: t
                    },
                    {
                        endsParent: !0,
                        begin: n
                    },
                    {
                        endsParent: !0,
                        variants: r
                    },
                    {
                        endsParent: !0,
                        relevance: 0,
                        variants: [{ begin: /[a-zA-Z@]+/ }, { begin: /[^a-zA-Z@]?/ }]
                    }
                ]
            },
            {
                className: 'params',
                relevance: 0,
                begin: /#+\d?/
            },
            { variants: r },
            {
                className: 'built_in',
                relevance: 0,
                begin: /[$&^_]/
            },
            {
                className: 'meta',
                begin: /% ?!(T[eE]X|tex|BIB|bib)/,
                end: '$',
                relevance: 10
            },
            e.COMMENT('%', '$', { relevance: 0 })
        ],
        o = {
            begin: /\{/,
            end: /\}/,
            relevance: 0,
            contains: ['self', ...i]
        },
        a = e.inherit(o, {
            relevance: 0,
            endsParent: !0,
            contains: [o, ...i]
        }),
        s = {
            begin: /\s+/,
            relevance: 0
        },
        l = [a],
        c = [
            {
                begin: /\[/,
                end: /\]/,
                endsParent: !0,
                relevance: 0,
                contains: [o, ...i]
            }
        ],
        u = function (e, t) {
            return {
                contains: [s],
                starts: {
                    relevance: 0,
                    contains: e,
                    starts: t
                }
            };
        },
        d = function (e, t) {
            return {
                begin: '\\\\' + e + '(?![a-zA-Z@:_])',
                keywords: {
                    $pattern: /\\[a-zA-Z]+/,
                    keyword: '\\' + e
                },
                relevance: 0,
                contains: [s],
                starts: t
            };
        },
        f = function (t, n) {
            return e.inherit(
                {
                    begin: '\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{' + t + '\\})',
                    keywords: {
                        $pattern: /\\[a-zA-Z]+/,
                        keyword: '\\begin'
                    },
                    relevance: 0
                },
                u(l, n)
            );
        },
        _ = (t = 'string') =>
            e.END_SAME_AS_BEGIN({
                className: t,
                begin: /(.|\r?\n)/,
                end: /(.|\r?\n)/,
                excludeBegin: !0,
                excludeEnd: !0,
                endsParent: !0
            }),
        p = function (e) {
            return {
                className: 'string',
                end: '(?=\\\\end\\{' + e + '\\})'
            };
        },
        h = (e = 'string') => ({
            relevance: 0,
            begin: /\{/,
            starts: {
                endsParent: !0,
                contains: [
                    {
                        className: e,
                        end: /(?=\})/,
                        endsParent: !0,
                        contains: [
                            {
                                begin: /\{/,
                                end: /\}/,
                                relevance: 0,
                                contains: ['self']
                            }
                        ]
                    }
                ]
            }
        });
    return {
        name: 'LaTeX',
        aliases: ['tex'],
        contains: [
            ...['verb', 'lstinline'].map((e) => d(e, { contains: [_()] })),
            d('mint', u(l, { contains: [_()] })),
            d(
                'mintinline',
                u(l, {
                    contains: [h(), _()]
                })
            ),
            d('url', {
                contains: [h('link'), h('link')]
            }),
            d('hyperref', { contains: [h('link')] }),
            d('href', u(c, { contains: [h('link')] })),
            ...[].concat(...['', '\\*'].map((e) => [f('verbatim' + e, p('verbatim' + e)), f('filecontents' + e, u(l, p('filecontents' + e))), ...['', 'B', 'L'].map((t) => f(t + 'Verbatim' + e, u(c, p(t + 'Verbatim' + e))))])),
            f('minted', u(c, u(l, p('minted')))),
            ...i
        ]
    };
};
