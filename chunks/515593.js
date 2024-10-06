n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(607070),
    o = n(594174),
    l = n(801719);
function u(e) {
    let { size: t, className: n } = e,
        u = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        c = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        d = (0, l.Z)(t);
    return null == d
        ? null
        : (0, r.jsx)(a.AnimatedAvatar, {
              'aria-label': null == u ? void 0 : u.username,
              size: t,
              className: n,
              src: null == u ? void 0 : u.getAvatarURL(void 0, (0, a.getAvatarSize)(t), !c),
              avatarDecoration: d
          });
}
