n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(699516), l = n(783709);
function r(e) {
    let {
            message: t,
            channel: n,
            compact: r
        } = e, o = (0, a.e7)([s.Z], () => null != t.interaction && s.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(l.Z, {
        message: t,
        channel: n,
        compact: r,
        isInteractionUserBlocked: o
    });
}
function o(e, t, n) {
    return null != e.interaction && '' !== e.interaction.displayName ? (0, i.jsx)(r, {
        message: e,
        channel: t,
        compact: n
    }) : null;
}
