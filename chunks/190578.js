function t(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function n(e) {
    return r('(?=', e, ')');
}
function r(...e) {
    return e.map((e) => t(e)).join('');
}
function i(...e) {
    return (
        '(' +
        ((function (e) {
            let t = e[e.length - 1];
            return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
        })(e).capture
            ? ''
            : '?:') +
        e.map((e) => t(e)).join('|') +
        ')'
    );
}
let a = (e) => r(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    s = ['Protocol', 'Type'].map(a),
    o = ['init', 'self'].map(a),
    l = ['Any', 'Self'],
    u = ['actor', 'any', 'associatedtype', 'async', 'await', /as\?/, /as!/, 'as', 'break', 'case', 'catch', 'class', 'continue', 'convenience', 'default', 'defer', 'deinit', 'didSet', 'distributed', 'do', 'dynamic', 'else', 'enum', 'extension', 'fallthrough', /fileprivate\(set\)/, 'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'indirect', 'infix', /init\?/, /init!/, 'inout', /internal\(set\)/, 'internal', 'in', 'is', 'isolated', 'nonisolated', 'lazy', 'let', 'mutating', 'nonmutating', /open\(set\)/, 'open', 'operator', 'optional', 'override', 'postfix', 'precedencegroup', 'prefix', /private\(set\)/, 'private', 'protocol', /public\(set\)/, 'public', 'repeat', 'required', 'rethrows', 'return', 'set', 'some', 'static', 'struct', 'subscript', 'super', 'switch', 'throws', 'throw', /try\?/, /try!/, 'try', 'typealias', /unowned\(safe\)/, /unowned\(unsafe\)/, 'unowned', 'var', 'weak', 'where', 'while', 'willSet'],
    c = ['false', 'nil', 'true'],
    d = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
    _ = ['#colorLiteral', '#column', '#dsohandle', '#else', '#elseif', '#endif', '#error', '#file', '#fileID', '#fileLiteral', '#filePath', '#function', '#if', '#imageLiteral', '#keyPath', '#line', '#selector', '#sourceLocation', '#warn_unqualified_access', '#warning'],
    E = ['abs', 'all', 'any', 'assert', 'assertionFailure', 'debugPrint', 'dump', 'fatalError', 'getVaList', 'isKnownUniquelyReferenced', 'max', 'min', 'numericCast', 'pointwiseMax', 'pointwiseMin', 'precondition', 'preconditionFailure', 'print', 'readLine', 'repeatElement', 'sequence', 'stride', 'swap', 'swift_unboxFromSwiftValueWithType', 'transcode', 'type', 'unsafeBitCast', 'unsafeDowncast', 'withExtendedLifetime', 'withUnsafeMutablePointer', 'withUnsafePointer', 'withVaList', 'withoutActuallyEscaping', 'zip'],
    f = i(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    h = i(f, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    p = r(f, h, '*'),
    m = i(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    I = i(m, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    T = r(m, I, '*'),
    g = r(/[A-Z]/, I, '*'),
    S = ['autoclosure', r(/convention\(/, i('swift', 'block', 'c'), /\)/), 'discardableResult', 'dynamicCallable', 'dynamicMemberLookup', 'escaping', 'frozen', 'GKInspectable', 'IBAction', 'IBDesignable', 'IBInspectable', 'IBOutlet', 'IBSegueAction', 'inlinable', 'main', 'nonobjc', 'NSApplicationMain', 'NSCopying', 'NSManaged', r(/objc\(/, T, /\)/), 'objc', 'objcMembers', 'propertyWrapper', 'requires_stored_property_inits', 'resultBuilder', 'testable', 'UIApplicationMain', 'unknown', 'usableFromInline'],
    A = ['iOS', 'iOSApplicationExtension', 'macOS', 'macOSApplicationExtension', 'macCatalyst', 'macCatalystApplicationExtension', 'watchOS', 'watchOSApplicationExtension', 'tvOS', 'tvOSApplicationExtension', 'swift'];
e.exports = function (e) {
    let t = {
            match: /\s+/,
            relevance: 0
        },
        f = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        m = [e.C_LINE_COMMENT_MODE, f],
        N = {
            match: [/\./, i(...s, ...o)],
            className: { 2: 'keyword' }
        },
        v = {
            match: r(/\./, i(...u)),
            relevance: 0
        },
        O = u.filter((e) => 'string' == typeof e).concat(['_|0']),
        R = {
            variants: [
                {
                    className: 'keyword',
                    match: i(
                        ...u
                            .filter((e) => 'string' != typeof e)
                            .concat(l)
                            .map(a),
                        ...o
                    )
                }
            ]
        },
        C = {
            $pattern: i(/\b\w+/, /#\w+/),
            keyword: O.concat(_),
            literal: c
        },
        y = [N, v, R],
        D = {
            match: r(/\./, i(...E)),
            relevance: 0
        },
        L = [
            D,
            {
                className: 'built_in',
                match: r(/\b/, i(...E), /(?=\()/)
            }
        ],
        b = {
            match: /->/,
            relevance: 0
        },
        M = [
            b,
            {
                className: 'operator',
                relevance: 0,
                variants: [{ match: p }, { match: `\\.(\\.|${h})+` }]
            }
        ],
        P = '([0-9]_*)+',
        U = '([0-9a-fA-F]_*)+',
        w = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${P})(\\.(${P}))?([eE][+-]?(${P}))?\\b` }, { match: `\\b0x(${U})(\\.(${U}))?([pP][+-]?(${P}))?\\b` }, { match: /\b0o([0-7]_*)+\b/ }, { match: /\b0b([01]_*)+\b/ }]
        },
        x = (e = '') => ({
            className: 'subst',
            variants: [{ match: r(/\\/, e, /[0\\tnr"']/) }, { match: r(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
        }),
        G = (e = '') => ({
            className: 'subst',
            match: r(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
        }),
        k = (e = '') => ({
            className: 'subst',
            label: 'interpol',
            begin: r(/\\/, e, /\(/),
            end: /\)/
        }),
        B = (e = '') => ({
            begin: r(e, /"""/),
            end: r(/"""/, e),
            contains: [x(e), G(e), k(e)]
        }),
        F = (e = '') => ({
            begin: r(e, /"/),
            end: r(/"/, e),
            contains: [x(e), k(e)]
        }),
        V = {
            className: 'string',
            variants: [B(), B('#'), B('##'), B('###'), F(), F('#'), F('##'), F('###')]
        },
        H = { match: r(/`/, T, /`/) },
        Z = [
            H,
            {
                className: 'variable',
                match: /\$\d+/
            },
            {
                className: 'variable',
                match: `\\$${I}+`
            }
        ],
        Y = {
            match: /(@|#(un)?)available/,
            className: 'keyword',
            starts: {
                contains: [
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: A,
                        contains: [...M, w, V]
                    }
                ]
            }
        },
        j = {
            className: 'keyword',
            match: r(/@/, i(...S))
        },
        W = [
            Y,
            j,
            {
                className: 'meta',
                match: r(/@/, T)
            }
        ],
        K = {
            match: n(/\b[A-Z]/),
            relevance: 0,
            contains: [
                {
                    className: 'type',
                    match: r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, I, '+')
                },
                {
                    className: 'type',
                    match: g,
                    relevance: 0
                },
                {
                    match: /[?!]+/,
                    relevance: 0
                },
                {
                    match: /\.\.\./,
                    relevance: 0
                },
                {
                    match: r(/\s+&\s+/, n(g)),
                    relevance: 0
                }
            ]
        },
        z = {
            begin: /</,
            end: />/,
            keywords: C,
            contains: [...m, ...y, ...W, b, K]
        };
    K.contains.push(z);
    let q = {
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            keywords: C,
            contains: [
                'self',
                {
                    match: r(T, /\s*:/),
                    keywords: '_|0',
                    relevance: 0
                },
                ...m,
                ...y,
                ...L,
                ...M,
                w,
                V,
                ...Z,
                ...W,
                K
            ]
        },
        Q = {
            begin: /</,
            end: />/,
            contains: [...m, K]
        },
        X = {
            begin: /\(/,
            end: /\)/,
            keywords: C,
            contains: [
                {
                    begin: i(n(r(T, /\s*:/)), n(r(T, /\s+/, T, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [
                        {
                            className: 'keyword',
                            match: /\b_\b/
                        },
                        {
                            className: 'params',
                            match: T
                        }
                    ]
                },
                ...m,
                ...y,
                ...M,
                w,
                V,
                ...W,
                K,
                q
            ],
            endsParent: !0,
            illegal: /["']/
        },
        $ = {
            match: [/func/, /\s+/, i(H.match, T, p)],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [Q, X, t],
            illegal: [/\[/, /%/]
        },
        J = {
            begin: [/precedencegroup/, /\s+/, g],
            className: {
                1: 'keyword',
                3: 'title'
            },
            contains: [K],
            keywords: [...d, ...c],
            end: /}/
        };
    for (let e of V.variants) {
        let t = e.contains.find((e) => 'interpol' === e.label);
        t.keywords = C;
        let n = [...y, ...L, ...M, w, V, ...Z];
        t.contains = [
            ...n,
            {
                begin: /\(/,
                end: /\)/,
                contains: ['self', ...n]
            }
        ];
    }
    return {
        name: 'Swift',
        keywords: C,
        contains: [
            ...m,
            $,
            {
                match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                className: { 1: 'keyword' },
                contains: [Q, X, t],
                illegal: /\[|%/
            },
            {
                beginKeywords: 'struct protocol class extension enum actor',
                end: '\\{',
                excludeEnd: !0,
                keywords: C,
                contains: [
                    e.inherit(e.TITLE_MODE, {
                        className: 'title.class',
                        begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                    }),
                    ...y
                ]
            },
            {
                match: [/operator/, /\s+/, p],
                className: {
                    1: 'keyword',
                    3: 'title'
                }
            },
            J,
            {
                beginKeywords: 'import',
                end: /$/,
                contains: [...m],
                relevance: 0
            },
            ...y,
            ...L,
            ...M,
            w,
            V,
            ...Z,
            ...W,
            K,
            q
        ]
    };
};
