n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(699516),
    r = n(697451);
function l(e) {
    let { message: t, channel: n, compact: l } = e,
        o = (0, a.e7)([s.Z], () => null != t.interaction && s.Z.isBlocked(t.interaction.user.id), [t.interaction]);
    return (0, i.jsx)(r.Z, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: o
    });
}
function o(e, t, n) {
    return null != e.interaction && '' !== e.interaction.displayName
        ? (0, i.jsx)(l, {
              message: e,
              channel: t,
              compact: n
          })
        : null;
}
