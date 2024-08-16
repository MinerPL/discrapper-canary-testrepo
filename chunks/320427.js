n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(481060),
    l = n(125268),
    r = n(673125),
    o = n(292793),
    c = n(871499),
    u = n(304388),
    d = n(689938);
function h() {
    let e = (0, a.e7)([r.Z], () => r.Z.getDrawMode()),
        t = (null == e ? void 0 : e.type) === o.W.LINE,
        n = () => {
            t ? (0, l.Bo)(null) : (0, l.Bo)({ type: o.W.LINE });
        };
    return (0, i.jsx)(u.Z, {
        renderPopout: () => null,
        children: (e) => {
            let { ...a } = e;
            return (0, i.jsx)(c.Z, {
                ...a,
                label: d.Z.Messages.SHARED_CANVAS_DRAW_MODE_LINE,
                isActive: t,
                iconComponent: s.PencilIcon,
                onClick: n
            });
        }
    });
}
