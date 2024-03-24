"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("686130"), n("781738");
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("387111"),
  i = n("476774"),
  r = n("773808"),
  u = n("868875"),
  o = n("909346"),
  d = n("674567"),
  c = n("356980"),
  f = n("911589"),
  h = n("142853"),
  m = n("709377"),
  p = n("782340"),
  E = n("782689");
let g = e => {
    let t = (0, i.isEntryActive)(e),
      n = (0, i.isEntryNew)(e);
    return n ? t ? p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  S = (e, t, n) => {
    let a = g(e),
      l = s.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name,
      r = a.plainFormat({
        gameName: i,
        userName: l
      });
    return r.replaceAll("*", "")
  },
  C = (e, t, n) => {
    let a = g(e),
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
var I = e => {
  let {
    closePopout: t,
    channel: n,
    entry: s,
    requestId: p
  } = e, {
    applicationImageSrc: g,
    user: I
  } = (0, c.useGamingContentData)(s), {
    primaryColor: T,
    secondaryColor: v
  } = (0, d.default)(g);
  if (null == I) return null;
  let x = async e => {
    try {
      let t = await (0, u.generateGamingContentImage)({
        entry: s,
        applicationImageSrc: g,
        avatarSrc: I.getAvatarURL(n.guild_id, 128),
        description: S(s, n, I),
        timestamp: (0, i.formatEntryTimestamp)(s, Date.now()),
        colors: [T, v]
      });
      await (0, o.sendContentImageReply)({
        file: t,
        user: I,
        altText: _(s, I),
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
      backgroundImgSrc: g,
      children: [(0, a.jsxs)("div", {
        className: E.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(h.PopoutAvatar, {
            user: I,
            guildId: n.guild_id
          }), (0, a.jsx)(h.PopoutTitle, {
            children: C(s, n, I)
          })]
        }), (0, a.jsx)(f.ContentImage, {
          size: 80,
          src: g,
          className: E.contentImage
        })]
      }), (0, a.jsx)(c.ContentRowBadges, {
        className: E.badgeContainer,
        entry: s,
        textColor: "always-white",
        iconColor: l.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(h.PopoutReactor, {
      onMessageReact: x,
      user: I,
      channel: n
    })]
  })
}