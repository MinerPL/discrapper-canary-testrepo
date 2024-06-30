n.d(t, {
    Z: function () {
        return l;
    }
}), n(47120);
var i = n(470079), a = n(81063);
let s = [
    'embedded_cover',
    'embedded_background'
];
function l(e) {
    let {
            applicationId: t,
            size: n,
            names: l = s
        } = e, [r, o] = i.useState(null), [c, d] = i.useState(!0), u = (0, a.getAssetImage)(t, r, n);
    return i.useEffect(() => {
        (0, a.getAssets)(t).then(e => {
            for (let [t, n] of (d(!1), Object.entries(e)))
                if (null != n && '' !== n.id && l.includes(n.name)) {
                    o(n.id);
                    return;
                }
        });
    }, [t]), {
        url: u,
        state: c ? 'loading' : null != u ? 'fetched' : 'not-found'
    };
}
