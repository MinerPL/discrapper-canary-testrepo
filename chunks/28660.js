n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r,
    i,
    a = n(470079),
    s = n(695346),
    o = n(768581);
function l(e) {
    let { displayProfile: t, size: n, canAnimate: r, pendingBanner: i } = e,
        l = s.QK.getSetting(),
        u = null == t ? void 0 : t.getPreviewBanner(i, r, n),
        [c, d] = (0, a.useState)((null == t ? void 0 : t.banner) == null ? 'COMPLETE' : 'SHOULD_LOAD');
    return (
        (0, a.useEffect)(() => {
            if (null == u || 'SHOULD_LOAD' !== c) return;
            d('LOADING');
            let e = new Image();
            (e.src = u), (e.onload = () => d('COMPLETE'));
        }, [u, c]),
        (0, a.useEffect)(() => {
            if (l) return;
            let e = null == t ? void 0 : t.getPreviewBanner(i, !0, n);
            if (null != e && !!(0, o.F8)(e)) new Image().src = e;
        }, [l, t, n, i]),
        {
            bannerSrc: u,
            status: c
        }
    );
}
((i = r || (r = {})).SHOULD_LOAD = 'SHOULD_LOAD'), (i.LOADING = 'LOADING'), (i.COMPLETE = 'COMPLETE');
