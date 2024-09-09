t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(873546),
    o = t(481060),
    l = t(993413),
    c = t(689938),
    d = t(308152);
function _(e) {
    let { children: s, className: t, layoutClassName: a, profilePreview: _, previewTitle: E } = e,
        u = () =>
            (0, n.jsx)(l.Z, {
                title: null != E ? E : c.Z.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                className: d.preview,
                children: _
            });
    return (0, n.jsx)('div', {
        className: t,
        children: (0, n.jsxs)(o.FormSection, {
            className: d.profileCustomizationSection,
            children: [
                r.tq && u(),
                (0, n.jsxs)('div', {
                    className: i()(d.baseLayout, a),
                    children: [s, !r.tq && u()]
                })
            ]
        })
    });
}
