n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(493683),
    l = n(726521),
    r = n(718538),
    o = n(868807),
    c = n(689938);
function u(e) {
    let { channel: t, buttonSize: n = a.ButtonSizes.TINY, className: u, onReportClick: d, onReportSubmit: h, onMouseEnter: m, onMouseLeave: p } = e,
        { error: _, loaded: E } = (0, o.a)(t),
        f = t.isDM() ? t.getRecipientId() : null,
        C = (0, r.V)(t.id, f);
    if (null == C && (E || _)) return null;
    let g = () => {
        null == h || h(), s.Z.closePrivateChannel(t.id);
    };
    return (0, i.jsx)(a.Button, {
        className: u,
        size: n,
        color: a.Button.Colors.RED,
        disabled: null == C,
        onClick: (e) => {
            e.stopPropagation(), null == d || d(), null != C && (0, l.WL)(C, g);
        },
        onMouseEnter: m,
        onMouseLeave: p,
        children: c.Z.Messages.REPORT
    });
}
