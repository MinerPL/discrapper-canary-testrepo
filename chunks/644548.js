"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("70956"),
  r = n("5192"),
  o = n("561308"),
  u = n("919394"),
  d = n("206295"),
  c = n("555672"),
  f = n("297781"),
  h = n("591853"),
  m = n("689938");
let p = (e, t, n, a) => {
    let l = function(e) {
        if (e === s.AggregateRange.WEEK) return m.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
      }(a),
      i = r.default.getName(t.guild_id, t.id, n),
      o = e.extra.game_name;
    return l.plainFormat({
      gameName: o,
      userName: i
    }).replaceAll("*", "")
  },
  E = (e, t) => m.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: r
  } = e, {
    applicationImageSrc: C,
    user: g
  } = (0, c.useGamingContentData)(n), {
    primaryColor: S,
    secondaryColor: _
  } = (0, d.default)(C), T = (0, o.getEntryDuration)(n), I = (0, o.getAggregateRange)(n), A = l.useCallback(e => {
    if (null != g && null != T && null != I && (0, c.isAllowedRange)(I)) return (0, u.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: C,
      avatarSrc: g.getAvatarURL(t.guild_id, 128),
      description: p(n, t, g, I),
      timestamp: m.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
        hours: Math.round(T / i.default.Seconds.HOUR)
      }),
      colors: [S, _],
      channelId: e
    })
  }, [C, t, T, n, S, I, _, g]);
  return null != g && null != T && null != I && (0, c.isAllowedRange)(I) ? (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: C,
      channel: t,
      entry: n,
      userDescription: m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: (0, a.jsx)(f.BadgesContainer, {
        location: f.BadgeLocation.POPOUT,
        children: c.TOP_GAME_BADGES.map((e, t) => (0, a.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, a.jsx)(h.PopoutInteractionsContainer, {
      children: (0, a.jsx)(h.PopoutReactor, {
        closePopout: r,
        user: g,
        channel: t,
        generateReactionImage: A,
        reactionImageAltText: E(n, g),
        entry: n,
        requestId: s
      })
    })]
  }) : null
}