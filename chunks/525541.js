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
    r = n(213010),
    o = n(718538),
    c = n(689938);
function u(e) {
    let { otherUserId: t, channel: n, buttonSize: u = a.ButtonSizes.TINY, className: d, buttonText: h, navigateAwayOnReportSuccess: m = !0, onReportClick: p, onReportSubmit: _, onMouseEnter: f, onMouseLeave: E } = e,
        g = (0, r.Q)(t),
        C = (0, o.V)(n.id, t);
    if (!g || null == C) return null;
    let I = () => {
        null == _ || _(), s.Z.closePrivateChannel(n.id, m);
    };
    return (0, i.jsx)(a.Button, {
        className: d,
        size: u,
        color: a.Button.Colors.RED,
        disabled: null == C,
        onClick: () => {
            null == p || p(), (0, l.WL)(C, I);
        },
        onMouseEnter: f,
        onMouseLeave: E,
        children: null != h ? h : c.Z.Messages.REPORT_SPAM
    });
}
