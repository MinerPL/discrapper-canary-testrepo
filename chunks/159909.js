n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(481060),
    l = n(125268),
    r = n(673125),
    o = n(871499),
    c = n(304388),
    u = n(689938);
function d() {
    let e = (0, a.e7)([r.Z], () => !r.Z.visibleOverlayCanvas);
    return (0, i.jsx)(c.Z, {
        renderPopout: () => null,
        children: (t) => {
            let { ...n } = t;
            return (0, i.jsx)(o.Z, {
                ...n,
                label: u.Z.Messages.SHARED_CANVAS_HIDE_OVERLAY_DRAWINGS,
                isActive: e,
                iconComponent: s.EyeIcon,
                onClick: l.LT
            });
        }
    });
}
