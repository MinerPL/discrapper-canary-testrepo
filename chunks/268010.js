"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250");
n("470079");
var l = n("5192"),
  s = n("561308"),
  i = n("69259"),
  r = n("438226"),
  o = n("644810"),
  u = n("206295"),
  d = n("335326"),
  c = n("43205"),
  f = n("591853"),
  h = n("206583"),
  m = n("689938"),
  p = n("522791");
let E = (e, t, n) => {
    let a = m.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      s = l.default.getName(t.guild_id, t.id, n),
      i = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: i,
      userName: s,
      episodeDescription: e.extra.media_assets_large_text
    }).replaceAll("*", "")
  },
  C = (e, t, n) => {
    let a = m.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      s = l.default.getName(t.guild_id, t.id, n),
      i = e.extra.media_title;
    return a.format({
      userName: s,
      mediaTitle: i,
      episodeDescription: e.extra.media_assets_large_text
    })
  },
  g = (e, t) => m.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: l,
    requestId: m
  } = e, {
    user: S,
    mediaImageSrc: _
  } = (0, d.useWatchContentData)(l), {
    primaryColor: T,
    secondaryColor: I
  } = (0, u.default)(_);
  if (null == S) return null;
  let A = async e => {
    try {
      let t = await (0, o.generateWatchContentImage)({
        entry: l,
        mediaImageSrc: _,
        avatarSrc: S.getAvatarURL(n.guild_id, 128),
        description: E(l, n, S),
        timestamp: (0, s.formatEntryTimestamp)(l, Date.now()),
        colors: [T, I]
      });
      await (0, r.sendContentImageReply)({
        user: S,
        altText: g(l, S),
        file: t,
        reply: e
      }), (0, i.trackInteraction)(h.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: l,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: m
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(f.Popout, {
    children: [(0, a.jsx)(f.PopoutHero, {
      backgroundImgSrc: _,
      children: (0, a.jsxs)("div", {
        className: p.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(f.PopoutAvatar, {
            user: S,
            guildId: n.guild_id
          }), (0, a.jsx)(f.PopoutTitle, {
            children: C(l, n, S)
          })]
        }), (0, a.jsx)(c.ContentImage, {
          size: 80,
          src: _,
          className: p.contentImage
        })]
      })
    }), (0, a.jsx)(f.PopoutReactor, {
      onMessageReact: A,
      user: S,
      channel: n
    })]
  })
}