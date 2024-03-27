"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("222007");
var n = l("884691"),
  a = l("446674"),
  s = l("913144"),
  i = l("820542"),
  r = l("870691"),
  d = l("282109"),
  o = l("629220"),
  u = l("986003"),
  c = l("49111");

function h(e) {
  s.default.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function f(e) {
  let t = (0, a.useStateFromStores)([d.default], () => d.default.getPendingChannelUpdates(e));
  n.useEffect(() => (h(e), () => h(e)), [e]), n.useEffect(() => {
    null != t && (0, o.updateOptInChannelsBatched)(e, t)
  }, [e, t]);
  let l = n.useCallback((e, t, l) => {
    let n = d.default.isChannelOptedIn(e, t),
      a = t === l;
    !n && r.default.isCollapsed(l) && null != l && (0, i.categoryExpand)(l), (0, u.hasNotSetUpChannelOptIn)(e) ? a ? (0, u.optIntoAllChannelsForExistingMember)(e, {
      include: new Set([t])
    }) : (0, u.optIntoAllChannelsForExistingMember)(e, {
      exclude: new Set([t])
    }) : (0, o.updateOptInChannelsImmediate)(e, t, !n, {
      section: c.AnalyticsSections.CHANNEL_BROWSER
    })
  }, []);
  return {
    onChannelClick: l
  }
}