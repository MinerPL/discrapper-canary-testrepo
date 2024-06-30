n.d(t, {
    U: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), l = n(542094), s = n(689938), r = n(706374);
function o(e) {
    let {
            action: t,
            onClick: n
        } = e, o = t === l.JS.JOIN ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY, c = t === l.JS.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
    return (0, i.jsx)('div', {
        className: r.activityOverlay,
        children: (0, i.jsx)(a.Button, {
            className: r.actionButton,
            onClick: n,
            size: a.Button.Sizes.MEDIUM,
            color: c,
            children: o
        })
    });
}
