"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("5192"),
  i = n("561308"),
  r = n("69259"),
  o = n("919394"),
  u = n("438226"),
  d = n("206295"),
  c = n("91140"),
  f = n("43205"),
  h = n("591853"),
  m = n("206583"),
  p = n("689938"),
  E = n("522791");
let C = e => {
    let t = (0, i.isEntryActive)(e);
    return (0, i.isEntryNew)(e) ? t ? p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  g = (e, t, n) => {
    let a = C(e),
      l = s.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return a.plainFormat({
      gameName: i,
      userName: l
    }).replaceAll("*", "")
  },
  S = (e, t, n) => {
    let a = C(e),
      l = s.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return a.format({
      userName: l,
      gameName: i
    })
  },
  _ = (e, t) => p.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: s,
    requestId: p
  } = e, {
    applicationImageSrc: C,
    user: T
  } = (0, c.useGamingContentData)(s), {
    primaryColor: I,
    secondaryColor: A
  } = (0, d.default)(C);
  if (null == T) return null;
  let v = async e => {
    try {
      let t = await (0, o.generateGamingContentImage)({
        entry: s,
        applicationImageSrc: C,
        avatarSrc: T.getAvatarURL(n.guild_id, 128),
        description: g(s, n, T),
        timestamp: (0, i.formatEntryTimestamp)(s, Date.now()),
        colors: [I, A]
      });
      await (0, u.sendContentImageReply)({
        file: t,
        user: T,
        altText: _(s, T),
        reply: e
      }), (0, r.trackInteraction)(m.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: s,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: p
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsxs)(h.PopoutHero, {
      backgroundImgSrc: C,
      children: [(0, a.jsxs)("div", {
        className: E.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(h.PopoutAvatar, {
            user: T,
            guildId: n.guild_id
          }), (0, a.jsx)(h.PopoutTitle, {
            children: S(s, n, T)
          })]
        }), (0, a.jsx)(f.ContentImage, {
          size: 80,
          src: C,
          className: E.contentImage
        })]
      }), (0, a.jsx)(c.ContentRowBadges, {
        className: E.badgeContainer,
        entry: s,
        textColor: "always-white",
        iconColor: l.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(h.PopoutReactor, {
      onMessageReact: v,
      user: T,
      channel: n
    })]
  })
}