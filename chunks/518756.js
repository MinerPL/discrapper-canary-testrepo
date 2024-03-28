"use strict";
t.r(n), t("47120");
var l = t("470079"),
  i = t("442837"),
  a = t("889161"),
  s = t("984933"),
  r = t("430824"),
  u = t("496675"),
  d = t("981631");
n.default = (e, n) => {
  let t = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
    {
      canCreateGuildEvent: c
    } = (0, a.useManageResourcePermissions)(t),
    o = (0, i.useStateFromStores)([s.default], () => s.default.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY], [e]),
    f = l.useMemo(() => null != n ? o.filter(e => {
      let {
        channel: t
      } = e;
      return t.type === n
    }) : o, [o, n]);
  return (0, i.useStateFromStores)([u.default], () => {
    if (u.default.can(d.Permissions.ADMINISTRATOR, t) || c) return !0;
    for (let {
        channel: e
      }
      of f) {
      let {
        canCreateGuildEvent: n
      } = (0, a.getManageResourcePermissions)(e);
      if (n) return !0
    }
    return !1
  }, [f, t, c])
}