"use strict";
n.r(t), n.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return R
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
  C = n("124150"),
  S = n("735201"),
  I = n("957255"),
  m = n("833781"),
  p = n("572182"),
  T = n("201952"),
  g = n("718517"),
  A = n("427459"),
  N = n("49111");

function R(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: a
    } = (0, i.useStateFromStoresObject)([S.default], () => ({
      appliedGuildBoosts: S.default.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: S.default.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: s,
      isGracePeriodVisible: R
    } = (0, i.useStateFromStoresObject)([m.default], () => ({
      lastDismissedGracePeriod: m.default.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: m.default.isVisible(n)
    })),
    O = (0, i.useStateFromStores)([_.default], () => _.default.isVisible(e)),
    v = (0, i.useStateFromStores)([T.default], () => T.default.isVisible(e)),
    L = (0, i.useStateFromStores)([I.default], () => I.default.can(N.Permissions.ADMINISTRATOR, e)),
    M = null != s && Date.now() - s <= N.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    P = null != e ? e.premiumSubscriberCount : 0,
    y = (0, A.getGuildTierFromAppliedBoostCount)(P, n) !== N.BoostedGuildTiers.NONE,
    D = null != a && Date.now() - a <= 432e5,
    x = !D && !M && L && y,
    b = (0, d.useGuildHasLiveChannelNotice)(n),
    U = (0, i.useStateFromStores)([p.default], () => p.default.isVisible(e)),
    G = E.default.useShouldShowChannelNotice(n),
    j = (0, h.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: w
    } = (0, f.useHubStudyGroupExperiment)(e),
    k = j.length > 0,
    F = w && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.HUB)),
    {
      canSeeUpcomingEventsNotices: B
    } = u.default.useExperiment({
      guildId: n,
      location: "useVisibleConnectedNotice"
    }, {
      autoTrackExposure: !1
    }),
    H = (0, c.useGuildUpcomingEventsNotice)(n),
    V = (0, i.useStateFromStores)([C.default], () => null != C.default.getActiveGuildSignUp(n));
  if (l.useEffect(() => {
      o.default.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return x && (e = window.setTimeout(() => {
        null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
      }, 30 * Math.random() * g.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, x]), O) return 0;
  if (R) return 1;
  if (v) return 2;
  else if (b || B && null != H) return 3;
  else if (U) return 4;
  else if (G) return 5;
  else if (k) return 6;
  else if (F) return 7;
  else if (V) return 8;
  return null
}(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", a[a.SIGNUP = 8] = "SIGNUP"