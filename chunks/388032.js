t.d(s, {
    NW: function () {
        return l;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(948537),
    i = t(302454),
    r = t.n(i),
    o = t(424395);
let l = new a.IntlManagerReact('en-US', {
    $_: () => o.w,
    $i: (e) => (0, n.jsx)('em', { children: e }),
    $b: (e) => (0, n.jsx)('strong', { children: e }),
    $p: (e) => (0, n.jsx)('p', { children: e }),
    $code: (e) => (0, n.jsx)('code', { children: e }),
    $link: (e) => {
        let [s, ...a] = e,
            { Anchor: i } = t(756715),
            o = {};
        return (
            'string' == typeof s ? (o.href = r().sanitizeUrl(s)) : (o.onClick = s),
            (0, n.jsx)(i, {
                ...o,
                children: a
            })
        );
    }
});
