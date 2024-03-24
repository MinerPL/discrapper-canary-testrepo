"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("272030"),
  i = n("685665"),
  r = n("824563"),
  u = n("401642"),
  o = n("69682"),
  d = n("49111"),
  c = e => {
    let {
      connection: t,
      channelId: c
    } = e, {
      user: f
    } = t, h = f.isNonUserBot(), m = (0, l.useStateFromStores)([r.default], () => h ? null : r.default.getStatus(f.id)), {
      analyticsLocations: p
    } = (0, i.default)();
    return (0, a.jsx)(o.FriendRow, {
      user: f,
      status: null != m ? m : d.StatusTypes.UNKNOWN,
      onSelect: () => {
        (0, u.openUserProfileModal)({
          channelId: c,
          userId: f.id,
          sourceAnalyticsLocations: p,
          analyticsLocation: {
            section: d.AnalyticsSections.DM_PROFILE
          }
        })
      },
      onContextMenu: e => {
        var t, l;
        return t = e, l = f, void(0, s.openContextMenuLazy)(t, async () => {
          let {
            default: e
          } = await n.el("406784").then(n.bind(n, "406784"));
          return t => (0, a.jsx)(e, {
            ...t,
            user: l
          })
        })
      }
    })
  }