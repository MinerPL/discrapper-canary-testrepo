"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var l = i("470079"),
  s = i("512722"),
  u = i.n(s),
  a = i("442837"),
  d = i("430824"),
  n = i("771845"),
  r = i("594174");

function o(e) {
  let {
    isGuildIncluded: t,
    selectedGuildId: i
  } = e, s = (0, a.useStateFromStores)([n.default], () => n.default.getFlattenedGuildIds()), o = (0, a.useStateFromStores)([d.default], () => d.default.getGuilds()), c = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser());
  return {
    options: l.useMemo(() => null == c ? [] : (null == t ? s : s.filter(e => {
      let i = o[e];
      return u()(null != i, "guild should not be null"), t(i, c)
    })).map(e => {
      let t = o[e];
      return u()(null != t, "guild should not be null"), {
        label: t.name,
        value: t.id
      }
    }), [s, o, c, t]),
    selectedGuild: null == i ? void 0 : o[i]
  }
}