"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("239091"),
  i = n("906732"),
  r = n("158776"),
  o = n("171368"),
  u = n("944546"),
  d = n("981631");
t.default = e => {
  let {
    connection: t,
    channelId: c
  } = e, {
    user: f
  } = t, h = f.isNonUserBot(), m = (0, l.useStateFromStores)([r.default], () => h ? null : r.default.getStatus(f.id)), {
    analyticsLocations: p
  } = (0, i.default)();
  return (0, a.jsx)(u.FriendRow, {
    user: f,
    status: null != m ? m : d.StatusTypes.UNKNOWN,
    onSelect: () => {
      (0, o.openUserProfileModal)({
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
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("69220")]).then(n.bind(n, "881351"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: l
        })
      })
    }
  })
}