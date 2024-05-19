"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("692547"),
  r = n("338745"),
  o = n("706454"),
  u = n("5192"),
  d = n("561308"),
  c = n("644810"),
  f = n("206295"),
  h = n("335326"),
  m = n("297781"),
  p = n("591853"),
  E = n("689938");
let C = (e, t, n) => {
    let a = E.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = u.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: s,
      userName: l,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  g = (e, t) => E.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: u,
    closePopout: S
  } = e, {
    user: _,
    mediaImageSrc: T,
    episodeDescription: I
  } = (0, h.useWatchContentData)(n), {
    primaryColor: A,
    secondaryColor: N
  } = (0, f.default)(T), v = (0, s.useStateFromStores)([o.default], () => o.default.locale), x = l.useCallback(e => {
    if (null != _ && null != T) return (0, c.generateWatchContentImage)({
      entry: n,
      mediaImageSrc: T,
      avatarSrc: _.getAvatarURL(t.guild_id, 128),
      description: C(n, t, _),
      timestamp: (0, d.formatEntryTimestamp)(n, v),
      episodeDescription: I,
      colors: [A, N],
      channelId: e
    })
  }, [t, n, I, v, T, A, N, _]);
  return null == _ ? null : (0, a.jsxs)(p.Popout, {
    children: [(0, a.jsx)(p.PopoutContent, {
      thumbnailSrc: T,
      channel: t,
      entry: n,
      userDescription: (0, d.isEntryActive)(n) ? E.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : E.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
      title: n.extra.media_title,
      subtitle: n.extra.media_subtitle,
      headerIcons: (0, a.jsx)(r.CrunchyrollNeutralIcon, {
        width: 16,
        height: 16,
        color: i.default.colors.CONTENT_INVENTORY_OVERLAY_UI_MOD
      }),
      badges: (0, a.jsx)(m.BadgesContainer, {
        location: m.BadgeLocation.POPOUT,
        children: h.WATCH_BADGES.map((e, t) => (0, a.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, a.jsx)(p.PopoutInteractionsContainer, {
      children: (0, a.jsx)(p.PopoutReactor, {
        closePopout: S,
        user: _,
        channel: t,
        generateReactionImage: x,
        reactionImageAltText: g(n, _),
        entry: n,
        requestId: u
      })
    })]
  })
}