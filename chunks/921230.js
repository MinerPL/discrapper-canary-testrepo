"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("905423"),
  r = n("430824"),
  o = n("451478"),
  u = n("727258"),
  d = n("61634"),
  c = n("325257");

function f(e) {
  let {
    guildId: t
  } = e, n = a.useMemo(() => (0, u.createGuildNode)(t), [t]), f = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t)), h = (0, s.useStateFromStores)([o.default], () => o.default.isFocused()), C = t === (0, i.default)(e => {
    let {
      guildId: t
    } = e;
    return t
  }), p = (0, d.default)(t);
  return null == f ? null : (0, l.jsx)(c.default, {
    guildNode: n,
    guild: f,
    animatable: h,
    selected: C,
    draggable: !1,
    mediaState: p
  })
}