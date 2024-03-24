"use strict";
n.r(t), n.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return N
  }
});
var a, s, l = n("884691"),
  i = n("446674"),
  r = n("583367"),
  o = n("933326"),
  u = n("73675"),
  d = n("568500"),
  c = n("534222"),
  f = n("341563"),
  E = n("702411"),
  h = n("991254"),
  _ = n("226511"),
  C = n("735201"),
  S = n("957255"),
  I = n("833781"),
  m = n("572182"),
  p = n("201952"),
  T = n("718517"),
  g = n("427459"),
  A = n("49111");

function N(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : A.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: a
    } = (0, i.useStateFromStoresObject)([C.default], () => ({
      appliedGuildBoosts: C.default.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: C.default.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: s,
      isGracePeriodVisible: N
    } = (0, i.useStateFromStoresObject)([I.default], () => ({
      lastDismissedGracePeriod: I.default.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: I.default.isVisible(n)
    })),
    R = (0, i.useStateFromStores)([_.default], () => _.default.isVisible(e)),
    O = (0, i.useStateFromStores)([p.default], () => p.default.isVisible(e)),
    v = (0, i.useStateFromStores)([S.default], () => S.default.can(A.Permissions.ADMINISTRATOR, e)),
    L = null != s && Date.now() - s <= A.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    M = null != e ? e.premiumSubscriberCount : 0,
    P = (0, g.getGuildTierFromAppliedBoostCount)(M, n) !== A.BoostedGuildTiers.NONE,
    y = null != a && Date.now() - a <= 432e5,
    D = !y && !L && v && P,
    x = (0, d.useGuildHasLiveChannelNotice)(n),
    b = (0, i.useStateFromStores)([m.default], () => m.default.isVisible(e)),
    U = E.default.useShouldShowChannelNotice(n),
    G = (0, h.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: j
    } = (0, f.useHubStudyGroupExperiment)(e),
    w = G.length > 0,
    k = j && !(null == e ? void 0 : e.hasFeature(A.GuildFeatures.HUB)),
    {
      canSeeUpcomingEventsNotices: F
    } = u.default.useExperiment({
      guildId: n,
      location: "useVisibleConnectedNotice"
    }, {
      autoTrackExposure: !1
    }),
    B = (0, c.useGuildUpcomingEventsNotice)(n);
  if (l.useEffect(() => {
      o.default.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return D && (e = window.setTimeout(() => {
        null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
      }, 30 * Math.random() * T.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, D]), R) return 0;
  if (N) return 1;
  if (O) return 2;
  else if (x || F && null != B) return 3;
  else if (b) return 4;
  else if (U) return 5;
  else if (w) return 6;
  else if (k) return 7;
  return null
}(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM"