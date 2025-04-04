e.exports = function (e) {
    let t = e.regex,
        n = {
            className: 'string',
            begin: /"(""|[^/n])"C\b/
        },
        r = {
            className: 'string',
            begin: /"/,
            end: /"/,
            illegal: /\n/,
            contains: [{ begin: /""/ }]
        },
        i = /\d{1,2}\/\d{1,2}\/\d{4}/,
        o = /\d{4}-\d{1,2}-\d{1,2}/,
        a = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
        s = /\d{1,2}(:\d{1,2}){1,2}/,
        l = {
            className: 'literal',
            variants: [{ begin: t.concat(/# */, t.either(o, i), / *#/) }, { begin: t.concat(/# */, s, / *#/) }, { begin: t.concat(/# */, a, / *#/) }, { begin: t.concat(/# */, t.either(o, i), / +/, t.either(a, s), / *#/) }]
        },
        c = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/ }, { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ }, { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ }, { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ }, { begin: /&B[01_]+((U?[SIL])|[%&])?/ }]
        },
        u = {
            className: 'label',
            begin: /^\w+:/
        },
        d = e.COMMENT(/'''/, /$/, {
            contains: [
                {
                    className: 'doctag',
                    begin: /<\/?/,
                    end: />/
                }
            ]
        }),
        f = e.COMMENT(null, /$/, {
            variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }]
        }),
        _ = {
            className: 'meta',
            begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
            end: /$/,
            keywords: { keyword: 'const disable else elseif enable end externalsource if region then' },
            contains: [f]
        };
    return {
        name: 'Visual Basic .NET',
        aliases: ['vb'],
        case_insensitive: !0,
        classNameAliases: { label: 'symbol' },
        keywords: {
            keyword: 'addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield',
            built_in: 'addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort',
            type: 'boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort',
            literal: 'true false nothing'
        },
        illegal: '//|\\{|\\}|endif|gosub|variant|wend|^\\$ ',
        contains: [n, r, l, c, u, d, f, _]
    };
};
