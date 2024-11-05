n.d(t, {
    U: function () {
        return c;
    },
    Z: function () {
        return d;
    }
}),
    n(47120),
    n(390547),
    n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(887490),
    o = n(631853),
    l = n(896061),
    u = n(705418);
let c = {
    strong: o.bold,
    em: o.italics,
    u: o.underline,
    s: o.strikethrough,
    inlineCode: o.inlineCode,
    link: o.fakeLink,
    url: o.fakeLink,
    autolink: o.fakeLink,
    silentPrefix: o.fakeLink,
    spoiler: a()(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, o.spoiler),
    staticRouteLink: o.fakeLink,
    syntaxBefore: o.syntaxBefore,
    syntaxAfter: o.syntaxAfter,
    codeBlockText: o.codeBlockText,
    codeBlockSyntax: o.codeBlockSyntax,
    codeBlockLang: o.codeBlockLang,
    subtext: o.subtext
};
function d(e, t) {
    let n;
    let { attributes: i, children: u, leaf: d, text: f } = t,
        _ = !1,
        [h] = s.bN.node(e, s.C0.parent(s.bN.findPath(e, f)));
    switch (s.bN.isEditor(h) ? 'editor' : h.type) {
        case 'line':
        case 'blockQuote': {
            _ = void 0;
            let e = Object.entries(d)
                .filter((e) => {
                    let [t] = e;
                    return 'text' !== t;
                })
                .flatMap((e) => {
                    let [t, n] = e;
                    if ('hljsTypes' === t) return n;
                    if (!0 === n) {
                        if ((('codeBlockLang' === t || 'codeBlockSyntax' === t) && (_ = !1), t.startsWith('before_') || t.startsWith('after_'))) return [o[t]];
                        if (t in c) return [c[t]];
                        throw Error('Slate: Unknown decoration attribute: '.concat(t));
                    }
                })
                .filter((e) => null != e)
                .join(' ');
            n = a()(e, { [o.syntaxOverride]: '||' === d.text || '\\' === d.text });
        }
    }
    return (
        (n = a()(n, { [l.emptyText]: '' === f.text })),
        (0, r.jsx)('span', {
            ...i,
            className: n,
            spellCheck: _,
            children: u
        })
    );
}
