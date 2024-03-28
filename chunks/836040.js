"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("451478"),
  r = n("727258"),
  o = n("325257"),
  u = n("981631");

function d(e) {
  let {
    guild: t,
    invite: n
  } = e, d = a.useMemo(() => (0, r.createGuildNode)(t.id), [t.id]), c = (0, s.useStateFromStores)([i.default], () => i.default.isFocused());
  return null == t ? null : (0, l.jsx)(o.default, {
    guildNode: d,
    guild: t,
    animatable: c,
    draggable: !1,
    contextMenu: () => {},
    selected: !0,
    route: u.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
  })
}