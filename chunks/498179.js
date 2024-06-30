n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(283595), r = n(55563), o = n(780570), c = n(701560), d = n(785547);
function u(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: u = s.Button.Sizes.LARGE,
            color: _,
            customDisabledColor: E,
            hideNotLaunchable: m,
            tooltipPosition: I,
            onClick: T,
            className: h,
            source: N,
            hover: f,
            innerClassName: p
        } = e, C = {
            fullWidth: n,
            size: u,
            color: _,
            customDisabledColor: E,
            tooltipPosition: I,
            onClick: T,
            className: h,
            hover: f,
            innerClassName: p
        }, g = (0, a.e7)([l.Z], () => l.Z.getActiveLibraryApplication(t.id)), S = null != g ? g.sku.id : null, A = null != S ? S : t.primarySkuId, x = (0, a.e7)([r.Z], () => null != A && !r.Z.didFetchingSkuFail(A));
    return null != g && (0, o.Je)(g) ? (0, i.jsx)(d.Z, {
        ...C,
        libraryApplication: g,
        source: N
    }) : x ? (0, i.jsx)('div', { children: 'deprecated!' }) : (0, i.jsx)(c.Z, {
        ...C,
        hideNotLaunchable: m,
        applicationId: t.id
    });
}
