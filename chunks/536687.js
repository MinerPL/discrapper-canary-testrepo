"use strict";
n.r(t), n.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return v
  }
});
var a, s, l = n("470079"),
  i = n("442837"),
  r = n("179360"),
  o = n("963202"),
  u = n("897285"),
  d = n("300213"),
  c = n("554747"),
  f = n("499137"),
  E = n("929507"),
  h = n("270144"),
  _ = n("400271"),
  C = n("678513"),
  S = n("899667"),
  m = n("496675"),
  p = n("541566"),
  I = n("192513"),
  T = n("255791"),
  g = n("70956"),
  A = n("267642"),
  N = n("981631");

function v(e) {
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
      isGracePeriodVisible: v
    } = (0, i.useStateFromStoresObject)([p.default], () => ({
      lastDismissedGracePeriod: p.default.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: p.default.isVisible(n)
    })),
    R = (0, i.useStateFromStores)([_.default], () => _.default.isVisible(e)),
    L = (0, i.useStateFromStores)([T.default], () => T.default.isVisible(e)),
    O = (0, i.useStateFromStores)([m.default], () => m.default.can(N.Permissions.ADMINISTRATOR, e)),
    M = null != s && Date.now() - s <= N.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    P = null != e ? e.premiumSubscriberCount : 0,
    y = (0, A.getGuildTierFromAppliedBoostCount)(P, n) !== N.BoostedGuildTiers.NONE,
    x = null != a && Date.now() - a <= 432e5,
    D = !x && !M && O && y,
    b = (0, d.useGuildHasLiveChannelNotice)(n),
    U = (0, i.useStateFromStores)([I.default], () => I.default.isVisible(e)),
    j = E.default.useShouldShowChannelNotice(n),
    G = (0, h.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: w
    } = (0, f.useHubStudyGroupExperiment)(e),
    k = G.length > 0,
    F = w && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.HUB)),
    {
      enableClanCreation: B
    } = (0, o.useClanPrepilotExperiment)(e, "useVisibleConnectedNotice"),
    H = O && B && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.CLAN)),
    V = (0, c.useGuildUpcomingEventsNotice)(n),
    Y = (0, i.useStateFromStores)([C.default], () => null != C.default.getActiveGuildSignUp(n));
  if (l.useEffect(() => {
      u.default.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return D && (e = window.setTimeout(() => {
        null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
      }, 30 * Math.random() * g.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, D]), R) return 0;
  if (v) return 1;
  if (L) return 2;
  else if (b || null != V) return 3;
  else if (U) return 4;
  else if (j) return 5;
  else if (k) return 6;
  else if (F) return 7;
  else if (Y) return 8;
  else if (H) return 9;
  return null
}(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", a[a.SIGNUP = 8] = "SIGNUP", a[a.CLAN_UPSELL = 9] = "CLAN_UPSELL"