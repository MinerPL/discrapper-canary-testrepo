"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("692547"),
  i = n("481060"),
  r = n("619915"),
  o = n("456269"),
  u = n("921711"),
  d = n("71275"),
  c = n("601070"),
  f = n("430824"),
  h = n("496675"),
  m = n("306680"),
  C = n("979651"),
  p = n("26290"),
  g = n("968358"),
  E = n("790901"),
  _ = n("714794"),
  S = n("355363"),
  I = n("687352"),
  N = n("135724"),
  T = n("25601"),
  A = n("981631"),
  L = n("490897"),
  v = n("689938"),
  x = n("658609");

function R(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: R,
    isChannelCollapsed: M,
    voiceStates: y,
    enableConnectedUserLimit: O,
    enableActivities: D,
    isSubscriptionGated: b,
    needSubscriptionToAccess: j,
    isNewChannel: P,
    muted: G,
    resolvedUnreadSetting: U
  } = e, w = (0, a.useStateFromStores)([m.default], () => m.default.getMentionCount(n.id)), B = (0, r.default)(n), F = (0, a.useStateFromStores)([h.default], () => !h.default.can(A.Permissions.CONNECT, n)), H = (0, a.useStateFromStores)([C.default], () => C.default.hasVideo(n.id)), V = (0, d.useStageHasMedia)(n.id) && n.isGuildStageVoice(), k = (0, S.default)({
    channel: n,
    locked: F,
    video: H || V,
    selected: R
  }), Y = (0, a.useStateFromStores)([c.default], () => c.default.getNewThreadCount(n.guild_id, n.id)), W = (0, o.useUnreadThreadsCountForParent)(n.guild_id, n.id), K = (0, a.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(A.GuildFeatures.COMMUNITY)) && void 0 !== t && t
  });
  if ((0, _.default)(w)) return (0, l.jsx)(T.default, {
    mentionsCount: w
  });
  if ((0, u.showPremiumChannelIconButton)(b)) return (0, l.jsx)(u.default, {
    locked: j
  });
  if (P) return (0, l.jsx)(p.TextBadge, {
    text: v.default.Messages.NEW,
    color: s.default.unsafe_rawColors.BRAND_260.css,
    className: x.newChannel
  });
  if (!G && U === L.UnreadSetting.ALL_MESSAGES && n.isForumLikeChannel() && null != Y && Y > 0) return (0, l.jsx)(i.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: v.default.Messages.CHANNEL_NEW_POSTS_LABEL.format({
      count: (0, p.getBadgeCountString)(Y)
    })
  });
  if (!G && n.isForumLikeChannel() && null != W && W > 0) return (0, l.jsx)(i.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, p.getBadgeCountString)(W)
  });
  let z = null !== (t = null == y ? void 0 : y.length) && void 0 !== t ? t : 0;
  return null != O && O && k ? (0, l.jsx)(N.default, {
    userCount: z,
    video: H || V,
    channel: n
  }) : M && (0, g.hasStream)(y) && K ? (0, l.jsx)(p.TextBadge, {
    text: v.default.Messages.LIVE,
    color: s.default.unsafe_rawColors.RED_400.css
  }) : null != D && D && (0, E.showChannelItemEmbeddedActivities)(B) ? (0, l.jsx)(I.default, {
    embeddedApps: B,
    muted: G
  }) : null
}