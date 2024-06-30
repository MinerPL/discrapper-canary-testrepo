var a, n, i = r(735250), o = r(470079), l = r(120356), c = r.n(l), s = r(302454), d = r.n(s), u = r(663993), h = r(772096), m = r(428595), g = r(532901), p = r(378720), b = r(755864), f = r(520076);
function y(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}
let x = new RegExp('https?://'.concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ''));
function k(e) {
    return 'string' == typeof e.content ? e.content : C(e.content);
}
let v = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
            react(e, t, r) {
                let a = 'h'.concat(e.level);
                return (0, i.jsx)(p.Z, {
                    tag: a,
                    children: t(e.content, r)
                }, r.key);
            }
        },
        paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, r) => (0, i.jsx)('div', {
                className: b.paragraph,
                children: t(e.content, r)
            }, r.key)
        },
        strong: {
            ...d().defaultRules.strong,
            order: 6
        },
        em: {
            ...d().defaultRules.em,
            order: 6
        },
        u: {
            ...d().defaultRules.u,
            order: 5
        },
        del: {
            ...d().defaultRules.del,
            order: 6
        },
        link: {
            ...h.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, r) => (0, i.jsx)('blockquote', {
                className: b.blockquote,
                children: k(e)
            }, r.key)
        },
        image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, r) {
                let a = d().defaultRules.image;
                if (null == a || null == a.match)
                    return !1;
                let n = a.match(e, t, r);
                if (null != n && Array.isArray(n) && n.length >= 3) {
                    let e = n[2];
                    if ('string' == typeof e)
                        return null != e.match(x) ? n : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, r) => (0, i.jsx)('code', {
                className: b.codeInline,
                children: k(e)
            }, r.key)
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, a) {
                let n = () => (0, i.jsx)('pre', {
                    children: (0, i.jsx)('code', {
                        className: c()(f.scrollbarGhostHairline, 'hljs'),
                        children: k(e)
                    })
                }, a.key);
                return (0, i.jsx)(u.GI, {
                    createPromise: () => Promise.resolve().then(r.bind(r, 364964)),
                    webpackId: 364964,
                    renderFallback: n,
                    render: t => {
                        if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content)
                            return n();
                        {
                            let r = t.highlight(e.lang, e.content, !0);
                            return null == r ? n() : (0, i.jsx)('pre', {
                                children: (0, i.jsx)('code', {
                                    className: c()(f.scrollbarGhostHairline, 'hljs', r.language),
                                    dangerouslySetInnerHTML: { __html: r.value }
                                })
                            }, a.key);
                        }
                    }
                }, a.key);
            }
        }
    }, _ = d().parserFor(v), C = d().reactFor(d().ruleOutput(v, 'react'));
class w extends (n = o.PureComponent) {
    render() {
        let {
                className: e,
                children: t,
                state: r,
                parser: a,
                output: n
            } = this.props, o = n(a(''.concat(t, '\n\n'), {
                inline: !1,
                ...r
            }));
        return (0, i.jsx)('div', {
            className: c()(b.markdown, e),
            children: o
        });
    }
}
y(w, 'rules', v), y(w, 'defaultProps', {
    parser: _,
    output: C
}), t.Z = w;
