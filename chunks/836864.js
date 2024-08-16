t.d(s, {
    N: function () {
        return c;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(646963),
    i = t(302454),
    r = t.n(i),
    o = t(481060);
let l = { toString: () => '' },
    c = new a.IntlManagerReact('en-US', {
        _: () => l,
        i: (e) => (0, n.jsx)('em', { children: e }),
        b: (e) => (0, n.jsx)('strong', { children: e }),
        p: (e) => (0, n.jsx)('p', { children: e }),
        code: (e) => (0, n.jsx)('code', { children: e }),
        link: (e) => {
            let [s, ...t] = e,
                a = {};
            return (
                'string' == typeof s ? (a.href = r().sanitizeUrl(s)) : (a.onClick = s),
                (0, n.jsx)(o.Anchor, {
                    ...a,
                    children: t
                })
            );
        }
    });
