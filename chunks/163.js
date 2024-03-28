"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("47120");
var n = l("470079"),
  a = l("442837"),
  s = l("570140"),
  i = l("211739"),
  r = l("680089"),
  d = l("9156"),
  o = l("152376"),
  u = l("724213"),
  c = l("981631");

function h(e) {
  s.default.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function f(e) {
  let t = (0, a.useStateFromStores)([d.default], () => d.default.getPendingChannelUpdates(e));
  return n.useEffect(() => (h(e), () => h(e)), [e]), n.useEffect(() => {
    null != t && (0, o.updateOptInChannelsBatched)(e, t)
  }, [e, t]), {
    onChannelClick: n.useCallback((e, t, l) => {
      let n = d.default.isChannelOptedIn(e, t),
        a = t === l;
      !n && r.default.isCollapsed(l) && null != l && (0, i.categoryExpand)(l), (0, u.hasNotSetUpChannelOptIn)(e) ? a ? (0, u.optIntoAllChannelsForExistingMember)(e, {
        include: new Set([t])
      }) : (0, u.optIntoAllChannelsForExistingMember)(e, {
        exclude: new Set([t])
      }) : (0, o.updateOptInChannelsImmediate)(e, t, !n, {
        section: c.AnalyticsSections.CHANNEL_BROWSER
      })
    }, [])
  }
}