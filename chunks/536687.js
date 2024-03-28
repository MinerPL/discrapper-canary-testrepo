"use strict";
n.r(t), n.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return O
  }
});
var a, s, l = n("470079"),
  i = n("442837"),
  r = n("179360"),
  o = n("963202"),
  u = n("897285"),
  d = n("780294"),
  c = n("300213"),
  f = n("554747"),
  E = n("499137"),
  h = n("929507"),
  _ = n("270144"),
  C = n("400271"),
  m = n("678513"),
  S = n("899667"),
  I = n("496675"),
  p = n("541566"),
  T = n("192513"),
  g = n("255791"),
  A = n("70956"),
  N = n("267642"),
  v = n("981631");

function O(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : v.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: a
    } = (0, i.useStateFromStoresObject)([S.default], () => ({
      appliedGuildBoosts: S.default.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: S.default.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: s,
      isGracePeriodVisible: O
    } = (0, i.useStateFromStoresObject)([p.default], () => ({
      lastDismissedGracePeriod: p.default.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: p.default.isVisible(n)
    })),
    R = (0, i.useStateFromStores)([C.default], () => C.default.isVisible(e)),
    L = (0, i.useStateFromStores)([g.default], () => g.default.isVisible(e)),
    P = (0, i.useStateFromStores)([I.default], () => I.default.can(v.Permissions.ADMINISTRATOR, e)),
    M = null != s && Date.now() - s <= v.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    y = null != e ? e.premiumSubscriberCount : 0,
    D = (0, N.getGuildTierFromAppliedBoostCount)(y, n) !== v.BoostedGuildTiers.NONE,
    b = null != a && Date.now() - a <= 432e5,
    x = !b && !M && P && D,
    U = (0, c.useGuildHasLiveChannelNotice)(n),
    j = (0, i.useStateFromStores)([T.default], () => T.default.isVisible(e)),
    G = h.default.useShouldShowChannelNotice(n),
    w = (0, _.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: k
    } = (0, E.useHubStudyGroupExperiment)(e),
    F = w.length > 0,
    B = k && !(null == e ? void 0 : e.hasFeature(v.GuildFeatures.HUB)),
    {
      enableClanCreation: H
    } = o.ClanExperiment.useExperiment({
      location: "useVisibleConnectedNotice"
    }),
    {
      canSeeUpcomingEventsNotices: V
    } = d.default.useExperiment({
      guildId: n,
      location: "useVisibleConnectedNotice"
    }, {
      autoTrackExposure: !1
    }),
    Y = (0, f.useGuildUpcomingEventsNotice)(n),
    W = (0, i.useStateFromStores)([m.default], () => null != m.default.getActiveGuildSignUp(n));
  if (l.useEffect(() => {
      u.default.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return x && (e = window.setTimeout(() => {
        null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
      }, 30 * Math.random() * A.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, x]), R) return 0;
  if (O) return 1;
  if (L) return 2;
  else if (U || V && null != Y) return 3;
  else if (j) return 4;
  else if (G) return 5;
  else if (F) return 6;
  else if (B) return 7;
  else if (W) return 8;
  else if (P && H) return 9;
  return null
}(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", a[a.SIGNUP = 8] = "SIGNUP", a[a.CLAN_UPSELL = 9] = "CLAN_UPSELL"