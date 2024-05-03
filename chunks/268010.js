"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("706454"),
  r = n("5192"),
  o = n("561308"),
  u = n("644810"),
  d = n("206295"),
  c = n("335326"),
  f = n("297781"),
  h = n("591853"),
  m = n("689938");
let p = (e, t, n) => {
    let a = m.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = r.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: s,
      userName: l,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  E = (e, t) => m.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: r,
    closePopout: C
  } = e, {
    user: g,
    mediaImageSrc: S,
    episodeDescription: _
  } = (0, c.useWatchContentData)(n), {
    primaryColor: T,
    secondaryColor: I
  } = (0, d.default)(S), A = (0, s.useStateFromStores)([i.default], () => i.default.locale), N = l.useCallback(e => {
    if (null != g && null != S) return (0, u.generateWatchContentImage)({
      entry: n,
      mediaImageSrc: S,
      avatarSrc: g.getAvatarURL(t.guild_id, 128),
      description: p(n, t, g),
      timestamp: (0, o.formatEntryTimestamp)(n, A),
      episodeDescription: _,
      colors: [T, I],
      channelId: e
    })
  }, [t, n, _, A, S, T, I, g]);
  return null == g ? null : (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: S,
      channel: t,
      entry: n,
      userDescription: (0, o.isEntryActive)(n) ? m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
      title: n.extra.media_title,
      subtitle: n.extra.media_subtitle,
      badges: (0, a.jsx)(f.BadgesContainer, {
        location: f.BadgeLocation.POPOUT,
        children: c.WATCH_BADGES.map((e, t) => (0, a.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, a.jsx)(h.PopoutInteractionsContainer, {
      children: (0, a.jsx)(h.PopoutReactor, {
        closePopout: C,
        user: g,
        channel: t,
        generateReactionImage: N,
        reactionImageAltText: E(n, g),
        entry: n,
        requestId: r
      })
    })]
  })
}