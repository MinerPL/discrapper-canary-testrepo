var t = { exports: {} };
function n(e) {
    return (
        e instanceof Map
            ? (e.clear =
                  e.delete =
                  e.set =
                      function () {
                          throw Error('map is read-only');
                      })
            : e instanceof Set &&
              (e.add =
                  e.clear =
                  e.delete =
                      function () {
                          throw Error('set is read-only');
                      }),
        Object.freeze(e),
        Object.getOwnPropertyNames(e).forEach(function (t) {
            var r = e[t];
            'object' == typeof r && !Object.isFrozen(r) && n(r);
        }),
        e
    );
}
(t.exports = n), (t.exports.default = n);
class r {
    constructor(e) {
        void 0 === e.data && (e.data = {}), (this.data = e.data), (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
        this.isMatchIgnored = !0;
    }
}
function i(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}
function a(e, ...t) {
    let n = Object.create(null);
    for (let t in e) n[t] = e[t];
    return (
        t.forEach(function (e) {
            for (let t in e) n[t] = e[t];
        }),
        n
    );
}
let s = (e) => !!e.scope || (e.sublanguage && e.language),
    o = (e, { prefix: t }) => {
        if (e.includes('.')) {
            let n = e.split('.');
            return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${'_'.repeat(t + 1)}`)].join(' ');
        }
        return `${t}${e}`;
    };
class l {
    constructor(e, t) {
        (this.buffer = ''), (this.classPrefix = t.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += i(e);
    }
    openNode(e) {
        if (!s(e)) return;
        let t = '';
        (t = e.sublanguage ? `language-${e.language}` : o(e.scope, { prefix: this.classPrefix })), this.span(t);
    }
    closeNode(e) {
        s(e) && (this.buffer += '</span>');
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let u = (e = {}) => {
    let t = { children: [] };
    return Object.assign(t, e), t;
};
class c {
    constructor() {
        (this.rootNode = u()), (this.stack = [this.rootNode]);
    }
    get top() {
        return this.stack[this.stack.length - 1];
    }
    get root() {
        return this.rootNode;
    }
    add(e) {
        this.top.children.push(e);
    }
    openNode(e) {
        let t = u({ scope: e });
        this.add(t), this.stack.push(t);
    }
    closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
        for (; this.closeNode(); );
    }
    toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
        return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, t) {
        return 'string' == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
    }
    static _collapse(e) {
        if ('string' != typeof e)
            e.children &&
                (e.children.every((e) => 'string' == typeof e)
                    ? (e.children = [e.children.join('')])
                    : e.children.forEach((e) => {
                          c._collapse(e);
                      }));
    }
}
class d extends c {
    constructor(e) {
        super(), (this.options = e);
    }
    addKeyword(e, t) {
        if ('' !== e) this.openNode(t), this.addText(e), this.closeNode();
    }
    addText(e) {
        if ('' !== e) this.add(e);
    }
    addSublanguage(e, t) {
        let n = e.root;
        (n.sublanguage = !0), (n.language = t), this.add(n);
    }
    toHTML() {
        return new l(this, this.options).value();
    }
    finalize() {
        return !0;
    }
}
function _(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function E(e) {
    return p('(?=', e, ')');
}
function f(e) {
    return p('(?:', e, ')*');
}
function h(e) {
    return p('(?:', e, ')?');
}
function p(...e) {
    return e.map((e) => _(e)).join('');
}
function m(...e) {
    return (
        '(' +
        ((function (e) {
            let t = e[e.length - 1];
            return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
        })(e).capture
            ? ''
            : '?:') +
        e.map((e) => _(e)).join('|') +
        ')'
    );
}
function I(e) {
    return RegExp(e.toString() + '|').exec('').length - 1;
}
let T = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function g(e, { joinWith: t }) {
    let n = 0;
    return e
        .map((e) => {
            let t = (n += 1),
                r = _(e),
                i = '';
            for (; r.length > 0; ) {
                let e = T.exec(r);
                if (!e) {
                    i += r;
                    break;
                }
                (i += r.substring(0, e.index)), (r = r.substring(e.index + e[0].length)), '\\' === e[0][0] && e[1] ? (i += '\\' + String(Number(e[1]) + t)) : ((i += e[0]), '(' === e[0] && n++);
            }
            return i;
        })
        .map((e) => `(${e})`)
        .join(t);
}
let S = '[a-zA-Z]\\w*',
    A = '[a-zA-Z_]\\w*',
    N = '\\b\\d+(\\.\\d+)?',
    v = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    O = '\\b(0b[01]+)',
    R = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
    },
    C = function (e, t, n = {}) {
        let r = a(
            {
                scope: 'comment',
                begin: e,
                end: t,
                contains: []
            },
            n
        );
        r.contains.push({
            scope: 'doctag',
            begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0
        });
        let i = m('I', 'a', 'is', 'so', 'us', 'to', 'at', 'if', 'in', 'it', 'on', /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return r.contains.push({ begin: p(/[ ]+/, '(', i, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), r;
    },
    y = C('//', '$'),
    D = C('/\\*', '\\*/'),
    L = C('#', '$');
var b = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: S,
    UNDERSCORE_IDENT_RE: A,
    NUMBER_RE: N,
    C_NUMBER_RE: v,
    BINARY_NUMBER_RE: O,
    RE_STARTERS_RE: '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    SHEBANG: (e = {}) => {
        let t = /^#![ ]*\//;
        return (
            e.binary && (e.begin = p(t, /.*\b/, e.binary, /\b.*/)),
            a(
                {
                    scope: 'meta',
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    'on:begin': (e, t) => {
                        0 !== e.index && t.ignoreMatch();
                    }
                },
                e
            )
        );
    },
    BACKSLASH_ESCAPE: R,
    APOS_STRING_MODE: {
        scope: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n',
        contains: [R]
    },
    QUOTE_STRING_MODE: {
        scope: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [R]
    },
    PHRASAL_WORDS_MODE: { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ },
    COMMENT: C,
    C_LINE_COMMENT_MODE: y,
    C_BLOCK_COMMENT_MODE: D,
    HASH_COMMENT_MODE: L,
    NUMBER_MODE: {
        scope: 'number',
        begin: N,
        relevance: 0
    },
    C_NUMBER_MODE: {
        scope: 'number',
        begin: v,
        relevance: 0
    },
    BINARY_NUMBER_MODE: {
        scope: 'number',
        begin: O,
        relevance: 0
    },
    REGEXP_MODE: {
        begin: /(?=\/[^/\n]*\/)/,
        contains: [
            {
                scope: 'regexp',
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [
                    R,
                    {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [R]
                    }
                ]
            }
        ]
    },
    TITLE_MODE: {
        scope: 'title',
        begin: S,
        relevance: 0
    },
    UNDERSCORE_TITLE_MODE: {
        scope: 'title',
        begin: A,
        relevance: 0
    },
    METHOD_GUARD: {
        begin: '\\.\\s*' + A,
        relevance: 0
    },
    END_SAME_AS_BEGIN: function (e) {
        return Object.assign(e, {
            'on:begin': (e, t) => {
                t.data._beginMatch = e[1];
            },
            'on:end': (e, t) => {
                t.data._beginMatch !== e[1] && t.ignoreMatch();
            }
        });
    }
});
function M(e, t) {
    '.' === e.input[e.index - 1] && t.ignoreMatch();
}
function P(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function U(e, t) {
    if (!!t) e.beginKeywords && ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'), (e.__beforeBegin = M), (e.keywords = e.keywords || e.beginKeywords), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
}
function w(e, t) {
    Array.isArray(e.illegal) && (e.illegal = m(...e.illegal));
}
function x(e, t) {
    if (e.match) {
        if (e.begin || e.end) throw Error('begin & end are not supported with match');
        (e.begin = e.match), delete e.match;
    }
}
function G(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
}
let k = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error('beforeMatch cannot be used with starts');
        let n = Object.assign({}, e);
        Object.keys(e).forEach((t) => {
            delete e[t];
        }),
            (e.keywords = n.keywords),
            (e.begin = p(n.beforeMatch, E(n.begin))),
            (e.starts = {
                relevance: 0,
                contains: [Object.assign(n, { endsParent: !0 })]
            }),
            (e.relevance = 0),
            delete n.beforeMatch;
    },
    B = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    F = {},
    V = (e) => {
        console.error(e);
    },
    H = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
    },
    Z = (e, t) => {
        !F[`${e}/${t}`] && (console.log(`Deprecated as of ${e}. ${t}`), (F[`${e}/${t}`] = !0));
    },
    Y = Error();
function j(e, t, { key: n }) {
    let r = 0,
        i = e[n],
        a = {},
        s = {};
    for (let e = 1; e <= t.length; e++) (s[e + r] = i[e]), (a[e + r] = !0), (r += I(t[e - 1]));
    (e[n] = s), (e[n]._emit = a), (e[n]._multi = !0);
}
function W(e) {
    var t;
    (t = e).scope && 'object' == typeof t.scope && null !== t.scope && ((t.beginScope = t.scope), delete t.scope),
        'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }),
        'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
        !(function (e) {
            if (Array.isArray(e.begin)) {
                if (e.skip || e.excludeBegin || e.returnBegin) throw (V('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), Y);
                if ('object' != typeof e.beginScope || null === e.beginScope) throw (V('beginScope must be object'), Y);
                j(e, e.begin, { key: 'beginScope' }), (e.begin = g(e.begin, { joinWith: '' }));
            }
        })(e),
        !(function (e) {
            if (Array.isArray(e.end)) {
                if (e.skip || e.excludeEnd || e.returnEnd) throw (V('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Y);
                if ('object' != typeof e.endScope || null === e.endScope) throw (V('endScope must be object'), Y);
                j(e, e.end, { key: 'endScope' }), (e.end = g(e.end, { joinWith: '' }));
            }
        })(e);
}
class K extends Error {
    constructor(e, t) {
        super(e), (this.name = 'HTMLInjectionError'), (this.html = t);
    }
}
let z = Symbol('nomatch');
var q = (function (e) {
    let n = Object.create(null),
        s = Object.create(null),
        o = [],
        l = !0,
        u = "Could not find the language '{}', did you forget to load/include a language module?",
        c = {
            disableAutodetect: !0,
            name: 'Plain text',
            contains: []
        },
        T = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: 'hljs-',
            cssSelector: 'pre code',
            languages: null,
            __emitter: d
        };
    function S(e) {
        return T.noHighlightRe.test(e);
    }
    function A(e, t, n) {
        let r = '',
            i = '';
        'object' == typeof t ? ((r = e), (n = t.ignoreIllegals), (i = t.language)) : (Z('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), Z('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), (i = e), (r = t)), void 0 === n && (n = !0);
        let a = {
            code: r,
            language: i
        };
        M('before:highlight', a);
        let s = a.result ? a.result : N(a.language, a.code, n);
        return (s.code = a.code), M('after:highlight', s), s;
    }
    function N(e, t, s, o) {
        let c = Object.create(null);
        function d() {
            if (!R.keywords) {
                D.addText(L);
                return;
            }
            let e = 0;
            R.keywordPatternRe.lastIndex = 0;
            let t = R.keywordPatternRe.exec(L),
                n = '';
            for (; t; ) {
                var r, i;
                n += L.substring(e, t.index);
                let a = S.case_insensitive ? t[0].toLowerCase() : t[0];
                let s = ((r = R), (i = a), r.keywords[i]);
                if (s) {
                    let [e, r] = s;
                    if ((D.addText(n), (n = ''), (c[a] = (c[a] || 0) + 1), c[a] <= 7 && (b += r), e.startsWith('_'))) n += t[0];
                    else {
                        let n = S.classNameAliases[e] || e;
                        D.addKeyword(t[0], n);
                    }
                } else n += t[0];
                (e = R.keywordPatternRe.lastIndex), (t = R.keywordPatternRe.exec(L));
            }
            (n += L.substring(e)), D.addText(n);
        }
        function E() {
            null != R.subLanguage
                ? !(function () {
                      if ('' === L) return;
                      let e = null;
                      if ('string' == typeof R.subLanguage) {
                          if (!n[R.subLanguage]) {
                              D.addText(L);
                              return;
                          }
                          (e = N(R.subLanguage, L, !0, C[R.subLanguage])), (C[R.subLanguage] = e._top);
                      } else e = v(L, R.subLanguage.length ? R.subLanguage : null);
                      R.relevance > 0 && (b += e.relevance), D.addSublanguage(e._emitter, e.language);
                  })()
                : d(),
                (L = '');
        }
        function f(e, t) {
            let n = 1,
                r = t.length - 1;
            for (; n <= r; ) {
                if (!e._emit[n]) {
                    n++;
                    continue;
                }
                let r = S.classNameAliases[e[n]] || e[n],
                    i = t[n];
                r ? D.addKeyword(i, r) : ((L = i), d(), (L = '')), n++;
            }
        }
        function h(e, t) {
            return e.scope && 'string' == typeof e.scope && D.openNode(S.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (D.addKeyword(L, S.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (L = '')) : e.beginScope._multi && (f(e.beginScope, t), (L = ''))), (R = Object.create(e, { parent: { value: R } }));
        }
        let p = {};
        function m(n, i) {
            let a = i && i[0];
            if (((L += n), null == a)) return E(), 0;
            if ('begin' === p.type && 'end' === i.type && p.index === i.index && '' === a) {
                if (((L += t.slice(i.index, i.index + 1)), !l)) {
                    let t = Error(`0 width match regex (${e})`);
                    throw ((t.languageName = e), (t.badRule = p.rule), t);
                }
                return 1;
            }
            if (((p = i), 'begin' === i.type))
                return (function (e) {
                    let t = e[0],
                        n = e.rule,
                        i = new r(n);
                    for (let r of [n.__beforeBegin, n['on:begin']])
                        if (r && (r(e, i), i.isMatchIgnored)) {
                            var a;
                            return (a = t), 0 === R.matcher.regexIndex ? ((L += a[0]), 1) : ((H = !0), 0);
                        }
                    return n.skip ? (L += t) : (n.excludeBegin && (L += t), E(), !n.returnBegin && !n.excludeBegin && (L = t)), h(n, e), n.returnBegin ? 0 : t.length;
                })(i);
            if ('illegal' !== i.type || s) {
                if ('end' === i.type) {
                    let e = (function (e) {
                        let n = e[0],
                            i = t.substring(e.index),
                            a = (function e(t, n, i) {
                                let a = (function (e, t) {
                                    let n = e && e.exec(t);
                                    return n && 0 === n.index;
                                })(t.endRe, i);
                                if (a) {
                                    if (t['on:end']) {
                                        let e = new r(t);
                                        t['on:end'](n, e), e.isMatchIgnored && (a = !1);
                                    }
                                    if (a) {
                                        for (; t.endsParent && t.parent; ) t = t.parent;
                                        return t;
                                    }
                                }
                                if (t.endsWithParent) return e(t.parent, n, i);
                            })(R, e, i);
                        if (!a) return z;
                        let s = R;
                        R.endScope && R.endScope._wrap ? (E(), D.addKeyword(n, R.endScope._wrap)) : R.endScope && R.endScope._multi ? (E(), f(R.endScope, e)) : s.skip ? (L += n) : (!(s.returnEnd || s.excludeEnd) && (L += n), E(), s.excludeEnd && (L = n));
                        do R.scope && D.closeNode(), !R.skip && !R.subLanguage && (b += R.relevance), (R = R.parent);
                        while (R !== a.parent);
                        return a.starts && h(a.starts, e), s.returnEnd ? 0 : n.length;
                    })(i);
                    if (e !== z) return e;
                }
            } else {
                let e = Error('Illegal lexeme "' + a + '" for mode "' + (R.scope || '<unnamed>') + '"');
                throw ((e.mode = R), e);
            }
            if ('illegal' === i.type && '' === a) return 1;
            if (F > 100000 && F > 3 * i.index) throw Error('potential infinite loop, way more iterations than matches');
            return (L += a), a.length;
        }
        let S = y(e);
        if (!S) throw (V(u.replace('{}', e)), Error('Unknown language: "' + e + '"'));
        let A = (function (e) {
                function t(t, n) {
                    return RegExp(_(t), 'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (n ? 'g' : ''));
                }
                class n {
                    constructor() {
                        (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
                    }
                    addRule(e, t) {
                        (t.position = this.position++), (this.matchIndexes[this.matchAt] = t), this.regexes.push([t, e]), (this.matchAt += I(e) + 1);
                    }
                    compile() {
                        0 === this.regexes.length && (this.exec = () => null);
                        let e = this.regexes.map((e) => e[1]);
                        (this.matcherRe = t(g(e, { joinWith: '|' }), !0)), (this.lastIndex = 0);
                    }
                    exec(e) {
                        this.matcherRe.lastIndex = this.lastIndex;
                        let t = this.matcherRe.exec(e);
                        if (!t) return null;
                        let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                            r = this.matchIndexes[n];
                        return t.splice(0, n), Object.assign(t, r);
                    }
                }
                class r {
                    constructor() {
                        (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
                    }
                    getMatcher(e) {
                        if (this.multiRegexes[e]) return this.multiRegexes[e];
                        let t = new n();
                        return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), (this.multiRegexes[e] = t), t;
                    }
                    resumingScanAtSamePosition() {
                        return 0 !== this.regexIndex;
                    }
                    considerAll() {
                        this.regexIndex = 0;
                    }
                    addRule(e, t) {
                        this.rules.push([e, t]), 'begin' === t.type && this.count++;
                    }
                    exec(e) {
                        let t = this.getMatcher(this.regexIndex);
                        t.lastIndex = this.lastIndex;
                        let n = t.exec(e);
                        if (this.resumingScanAtSamePosition()) {
                            if (n && n.index === this.lastIndex);
                            else {
                                let t = this.getMatcher(0);
                                (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
                            }
                        }
                        return n && ((this.regexIndex += n.position + 1), this.regexIndex === this.count && this.considerAll()), n;
                    }
                }
                if ((!e.compilerExtensions && (e.compilerExtensions = []), e.contains && e.contains.includes('self'))) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
                return (
                    (e.classNameAliases = a(e.classNameAliases || {})),
                    (function n(i, s) {
                        if (i.isCompiled) return i;
                        [P, x, W, k].forEach((e) => e(i, s)), e.compilerExtensions.forEach((e) => e(i, s)), (i.__beforeBegin = null), [U, w, G].forEach((e) => e(i, s)), (i.isCompiled = !0);
                        let o = null;
                        return (
                            'object' == typeof i.keywords && i.keywords.$pattern && ((i.keywords = Object.assign({}, i.keywords)), (o = i.keywords.$pattern), delete i.keywords.$pattern),
                            (o = o || /\w+/),
                            i.keywords &&
                                (i.keywords = (function e(t, n, r = 'keyword') {
                                    let i = Object.create(null);
                                    return (
                                        'string' == typeof t
                                            ? a(r, t.split(' '))
                                            : Array.isArray(t)
                                              ? a(r, t)
                                              : Object.keys(t).forEach(function (r) {
                                                    Object.assign(i, e(t[r], n, r));
                                                }),
                                        i
                                    );
                                    function a(e, t) {
                                        n && (t = t.map((e) => e.toLowerCase())),
                                            t.forEach(function (t) {
                                                let n = t.split('|');
                                                i[n[0]] = [
                                                    e,
                                                    (function (e, t) {
                                                        return t
                                                            ? Number(t)
                                                            : (function (e) {
                                                                    return B.includes(e.toLowerCase());
                                                                })(e)
                                                              ? 0
                                                              : 1;
                                                    })(n[0], n[1])
                                                ];
                                            });
                                    }
                                })(i.keywords, e.case_insensitive)),
                            (i.keywordPatternRe = t(o, !0)),
                            s && (!i.begin && (i.begin = /\B|\b/), (i.beginRe = t(i.begin)), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (i.endRe = t(i.end)), (i.terminatorEnd = _(i.end) || ''), i.endsWithParent && s.terminatorEnd && (i.terminatorEnd += (i.end ? '|' : '') + s.terminatorEnd)),
                            i.illegal && (i.illegalRe = t(i.illegal)),
                            !i.contains && (i.contains = []),
                            (i.contains = [].concat(
                                ...i.contains.map(function (e) {
                                    return (function (e) {
                                        return (e.variants &&
                                            !e.cachedVariants &&
                                            (e.cachedVariants = e.variants.map(function (t) {
                                                return a(e, { variants: null }, t);
                                            })),
                                        e.cachedVariants)
                                            ? e.cachedVariants
                                            : (function e(t) {
                                                    return !!t && (t.endsWithParent || e(t.starts));
                                                })(e)
                                              ? a(e, { starts: e.starts ? a(e.starts) : null })
                                              : Object.isFrozen(e)
                                                ? a(e)
                                                : e;
                                    })('self' === e ? i : e);
                                })
                            )),
                            i.contains.forEach(function (e) {
                                n(e, i);
                            }),
                            i.starts && n(i.starts, s),
                            (i.matcher = (function (e) {
                                let t = new r();
                                return (
                                    e.contains.forEach((e) =>
                                        t.addRule(e.begin, {
                                            rule: e,
                                            type: 'begin'
                                        })
                                    ),
                                    e.terminatorEnd && t.addRule(e.terminatorEnd, { type: 'end' }),
                                    e.illegal && t.addRule(e.illegal, { type: 'illegal' }),
                                    t
                                );
                            })(i)),
                            i
                        );
                    })(e)
                );
            })(S),
            O = '',
            R = o || A,
            C = {},
            D = new T.__emitter(T);
        !(function () {
            let e = [];
            for (let t = R; t !== S; t = t.parent) t.scope && e.unshift(t.scope);
            e.forEach((e) => D.openNode(e));
        })();
        let L = '',
            b = 0,
            M = 0,
            F = 0,
            H = !1;
        try {
            for (R.matcher.considerAll(); ; ) {
                F++, H ? (H = !1) : R.matcher.considerAll(), (R.matcher.lastIndex = M);
                let e = R.matcher.exec(t);
                if (!e) break;
                let n = t.substring(M, e.index),
                    r = m(n, e);
                M = e.index + r;
            }
            return (
                m(t.substring(M)),
                D.closeAllNodes(),
                D.finalize(),
                (O = D.toHTML()),
                {
                    language: e,
                    value: O,
                    relevance: b,
                    illegal: !1,
                    _emitter: D,
                    _top: R
                }
            );
        } catch (n) {
            if (n.message && n.message.includes('Illegal'))
                return {
                    language: e,
                    value: i(t),
                    illegal: !0,
                    relevance: 0,
                    _illegalBy: {
                        message: n.message,
                        index: M,
                        context: t.slice(M - 100, M + 100),
                        mode: n.mode,
                        resultSoFar: O
                    },
                    _emitter: D
                };
            if (l)
                return {
                    language: e,
                    value: i(t),
                    illegal: !1,
                    relevance: 0,
                    errorRaised: n,
                    _emitter: D,
                    _top: R
                };
            else throw n;
        }
    }
    function v(e, t) {
        t = t || T.languages || Object.keys(n);
        let r = (function (e) {
                let t = {
                    value: i(e),
                    illegal: !1,
                    relevance: 0,
                    _top: c,
                    _emitter: new T.__emitter(T)
                };
                return t._emitter.addText(e), t;
            })(e),
            a = t
                .filter(y)
                .filter(L)
                .map((t) => N(t, e, !1));
        a.unshift(r);
        let [s, o] = a.sort((e, t) => {
            if (e.relevance !== t.relevance) return t.relevance - e.relevance;
            if (e.language && t.language) {
                if (y(e.language).supersetOf === t.language) return 1;
                if (y(t.language).supersetOf === e.language) return -1;
            }
            return 0;
        });
        return (s.secondBest = o), s;
    }
    function O(e) {
        let t = null,
            n = (function (e) {
                let t = e.className + ' ';
                t += e.parentNode ? e.parentNode.className : '';
                let n = T.languageDetectRe.exec(t);
                if (n) {
                    let t = y(n[1]);
                    return !t && (H(u.replace('{}', n[1])), H('Falling back to no-highlight mode for this block.', e)), t ? n[1] : 'no-highlight';
                }
                return t.split(/\s+/).find((e) => S(e) || y(e));
            })(e);
        if (S(n)) return;
        if (
            (M('before:highlightElement', {
                el: e,
                language: n
            }),
            e.children.length > 0 && (!T.ignoreUnescapedHTML && (console.warn('One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'), console.warn('https://github.com/highlightjs/highlight.js/wiki/security'), console.warn('The element with unescaped HTML:'), console.warn(e)), T.throwUnescapedHTML))
        )
            throw new K('One of your code blocks includes unescaped HTML.', e.innerHTML);
        let r = (t = e).textContent,
            i = n
                ? A(r, {
                      language: n,
                      ignoreIllegals: !0
                  })
                : v(r);
        (e.innerHTML = i.value),
            !(function (e, t, n) {
                let r = (t && s[t]) || n;
                e.classList.add('hljs'), e.classList.add(`language-${r}`);
            })(e, n, i.language),
            (e.result = {
                language: i.language,
                re: i.relevance,
                relevance: i.relevance
            }),
            i.secondBest &&
                (e.secondBest = {
                    language: i.secondBest.language,
                    relevance: i.secondBest.relevance
                }),
            M('after:highlightElement', {
                el: e,
                result: i,
                text: r
            });
    }
    let R = !1;
    function C() {
        if ('loading' === document.readyState) {
            R = !0;
            return;
        }
        document.querySelectorAll(T.cssSelector).forEach(O);
    }
    'undefined' != typeof window &&
        window.addEventListener &&
        window.addEventListener(
            'DOMContentLoaded',
            function () {
                R && C();
            },
            !1
        );
    function y(e) {
        return n[(e = (e || '').toLowerCase())] || n[s[e]];
    }
    function D(e, { languageName: t }) {
        'string' == typeof e && (e = [e]),
            e.forEach((e) => {
                s[e.toLowerCase()] = t;
            });
    }
    function L(e) {
        let t = y(e);
        return t && !t.disableAutodetect;
    }
    function M(e, t) {
        o.forEach(function (n) {
            n[e] && n[e](t);
        });
    }
    for (let r in (Object.assign(e, {
        highlight: A,
        highlightAuto: v,
        highlightAll: C,
        highlightElement: O,
        highlightBlock: function (e) {
            return Z('10.7.0', 'highlightBlock will be removed entirely in v12.0'), Z('10.7.0', 'Please use highlightElement now.'), O(e);
        },
        configure: function (e) {
            T = a(T, e);
        },
        initHighlighting: () => {
            C(), Z('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
        },
        initHighlightingOnLoad: function () {
            C(), Z('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
        },
        registerLanguage: function (t, r) {
            let i = null;
            try {
                i = r(e);
            } catch (e) {
                if ((V("Language definition for '{}' could not be registered.".replace('{}', t)), l)) V(e);
                else throw e;
                i = c;
            }
            !i.name && (i.name = t), (n[t] = i), (i.rawDefinition = r.bind(null, e)), i.aliases && D(i.aliases, { languageName: t });
        },
        unregisterLanguage: function (e) {
            for (let t of (delete n[e], Object.keys(s))) s[t] === e && delete s[t];
        },
        listLanguages: function () {
            return Object.keys(n);
        },
        getLanguage: y,
        registerAliases: D,
        autoDetection: L,
        inherit: a,
        addPlugin: function (e) {
            var t;
            (t = e)['before:highlightBlock'] &&
                !t['before:highlightElement'] &&
                (t['before:highlightElement'] = (e) => {
                    t['before:highlightBlock'](Object.assign({ block: e.el }, e));
                }),
                t['after:highlightBlock'] &&
                    !t['after:highlightElement'] &&
                    (t['after:highlightElement'] = (e) => {
                        t['after:highlightBlock'](Object.assign({ block: e.el }, e));
                    }),
                o.push(e);
        }
    }),
    (e.debugMode = function () {
        l = !1;
    }),
    (e.safeMode = function () {
        l = !0;
    }),
    (e.versionString = '11.7.0'),
    (e.regex = {
        concat: p,
        lookahead: E,
        either: m,
        optional: h,
        anyNumberOfTimes: f
    }),
    b))
        'object' == typeof b[r] && t.exports(b[r]);
    return Object.assign(e, b), e;
})({});
(e.exports = q), (q.HighlightJS = q), (q.default = q);
