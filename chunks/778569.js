n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var a = n(470079),
    i = n(81063);
let l = ['embedded_cover', 'embedded_background'];
function s(e) {
    let { applicationId: t, size: n, names: s = l } = e,
        [r, o] = a.useState(null),
        [c, d] = a.useState(!0),
        u = (0, i.getAssetImage)(t, r, n);
    return (
        a.useEffect(() => {
            (0, i.getAssets)(t).then((e) => {
                for (let [t, n] of (d(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && s.includes(n.name)) {
                        o(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: u,
            state: c ? 'loading' : null != u ? 'fetched' : 'not-found'
        }
    );
}
