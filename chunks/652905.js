"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("686130"), n("781738");
var a = n("37983");
n("884691");
var l = n("387111"),
  s = n("476774"),
  i = n("773808"),
  r = n("909346"),
  u = n("873235"),
  o = n("674567"),
  d = n("55413"),
  c = n("911589"),
  f = n("142853"),
  h = n("709377"),
  m = n("782340"),
  p = n("782689");
let E = (e, t, n) => {
    let a = m.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      s = l.default.getName(t.guild_id, t.id, n),
      i = e.extra.media_title,
      r = a.plainFormat({
        mediaTitle: i,
        userName: s
      });
    return r.replaceAll("*", "")
  },
  g = (e, t, n) => {
    let a = m.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      s = l.default.getName(t.guild_id, t.id, n),
      i = e.extra.media_title;
    return a.format({
      userName: s,
      mediaTitle: i
    })
  },
  S = (e, t) => m.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
var C = e => {
  let {
    closePopout: t,
    channel: n,
    entry: l,
    requestId: m
  } = e, {
    user: C,
    mediaImageSrc: _
  } = (0, d.useWatchContentData)(l), {
    primaryColor: I,
    secondaryColor: T
  } = (0, o.default)(_);
  if (null == C) return null;
  let v = async e => {
    try {
      let t = await (0, u.generateWatchContentImage)({
        entry: l,
        mediaImageSrc: _,
        avatarSrc: C.getAvatarURL(n.guild_id, 128),
        description: E(l, n, C),
        timestamp: (0, s.formatEntryTimestamp)(l, Date.now()),
        colors: [I, T]
      });
      await (0, r.sendContentImageReply)({
        user: C,
        altText: S(l, C),
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
            user: C,
            guildId: n.guild_id
          }), (0, a.jsx)(f.PopoutTitle, {
            children: g(l, n, C)
          })]
        }), (0, a.jsx)(c.ContentImage, {
          size: 80,
          src: _,
          className: p.contentImage
        })]
      })
    }), (0, a.jsx)(f.PopoutReactor, {
      onMessageReact: v,
      user: C,
      channel: n
    })]
  })
}