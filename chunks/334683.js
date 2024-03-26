"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var l = n("884691"),
  u = n("446674"),
  i = n("817963"),
  a = n("923959"),
  r = n("305961"),
  d = n("957255"),
  s = n("49111"),
  o = (e, t) => {
    let n = (0, u.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
      {
        canCreateGuildEvent: o
      } = (0, i.useManageResourcePermissions)(n),
      c = (0, u.useStateFromStores)([a.default], () => a.default.getChannels(e)[a.GUILD_VOCAL_CHANNELS_KEY], [e]),
      f = l.useMemo(() => null != t ? c.filter(e => {
        let {
          channel: n
        } = e;
        return n.type === t
      }) : c, [c, t]),
      E = (0, u.useStateFromStores)([d.default], () => {
        if (d.default.can(s.Permissions.ADMINISTRATOR, n) || o) return !0;
        for (let {
            channel: e
          }
          of f) {
          let {
            canCreateGuildEvent: t
          } = (0, i.getManageResourcePermissions)(e);
          if (t) return !0
        }
        return !1
      }, [f, n, o]);
    return E
  }