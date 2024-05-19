"use strict";
n.r(t), n.d(t, {
  GuildBrowseChannelsRow: function() {
    return L
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("399606"),
  i = n("524437"),
  r = n("692547"),
  o = n("239091"),
  u = n("605236"),
  d = n("45966"),
  c = n("31445"),
  f = n("22082"),
  h = n("703656"),
  m = n("306680"),
  C = n("648414"),
  p = n("26290"),
  g = n("709054"),
  E = n("540126"),
  _ = n("434479"),
  S = n("981631"),
  I = n("176505"),
  N = n("490897"),
  T = n("689938"),
  A = n("658609");

function L(e) {
  let {
    guild: t,
    selected: L
  } = e, v = (0, c.default)(t), x = (0, u.useIsDismissibleContentDismissed)(i.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX), R = (0, s.useStateFromStoresArray)([f.default], () => Array.from(f.default.getNewChannelIds(t.id)).filter(e => f.default.shouldIndicateNewChannel(t.id, e))), M = (0, s.useStateFromStores)([m.default], () => m.default.hasUnread(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), y = R.length > E.MAX_NEW_CHANNELS_TO_SHOW, O = (0, s.useStateFromStores)([d.default, m.default], () => {
    let e = d.default.lastFetchedAt(t.id),
      n = m.default.lastMessageId(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    if (null == n) return !1;
    let l = g.default.extractTimestamp(n);
    return null != e && e > l
  }), D = a.useCallback(() => {
    (0, h.transitionTo)(S.Routes.CHANNEL(t.id, v ? I.StaticChannelRoute.CUSTOMIZE_COMMUNITY : I.StaticChannelRoute.CHANNEL_BROWSER))
  }, [t.id, v]), b = a.useCallback(e => {
    (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("8926").then(n.bind(n, "156673"));
      return n => (0, l.jsx)(e, {
        ...n,
        guild: t
      })
    })
  }, [t]), j = null;
  return (!x || M || y) && !L && !O && (j = (0, l.jsx)(p.TextBadge, {
    color: r.default.unsafe_rawColors.BRAND_260.css,
    text: T.default.Messages.NEW,
    className: A.newChannel
  })), (0, l.jsx)(_.BasicChannelRow, {
    id: "channels-".concat(t.id),
    renderIcon: e => (0, l.jsx)(C.default, {
      className: e
    }),
    text: v ? T.default.Messages.CHANNELS_AND_ROLES : T.default.Messages.CHANNEL_BROWSER_TITLE,
    selected: L,
    onClick: D,
    onContextMenu: b,
    trailing: j
  })
}