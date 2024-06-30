n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), l = n(493683), s = n(726521), r = n(718538), o = n(868807), c = n(689938);
function u(e) {
    let {
            channel: t,
            buttonSize: n = a.ButtonSizes.TINY,
            className: u,
            onReportClick: d,
            onReportSubmit: h,
            onMouseEnter: p,
            onMouseLeave: m
        } = e, {
            error: _,
            loaded: f
        } = (0, o.a)(t), E = t.isDM() ? t.getRecipientId() : null, C = (0, r.V)(t.id, E);
    if (null == C && (f || _))
        return null;
    let g = () => {
        null == h || h(), l.Z.closePrivateChannel(t.id);
    };
    return (0, i.jsx)(a.Button, {
        className: u,
        size: n,
        color: a.Button.Colors.RED,
        disabled: null == C,
        onClick: e => {
            e.stopPropagation(), null == d || d(), null != C && (0, s.WL)(C, g);
        },
        onMouseEnter: p,
        onMouseLeave: m,
        children: c.Z.Messages.REPORT
    });
}
