"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("442837"),
  r = n("594174"),
  o = n("823379"),
  u = n("5192"),
  d = n("561308"),
  c = n("256726"),
  f = n("206295"),
  h = n("278399"),
  m = n("297781"),
  p = n("591853"),
  E = n("410441"),
  C = n("689938");
let g = (e, t, n, a) => {
    let l = function(e) {
        if (e === s.AggregateRange.WEEK) return C.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT
      }(a),
      i = u.default.getName(t.guild_id, t.id, n),
      r = e.extra.artist.name;
    return l.plainFormat({
      artist: r,
      userName: i
    }).replaceAll("*", "")
  },
  S = (e, t) => C.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
    username: t.username,
    artist: e.extra.artist.name
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: u
  } = e, {
    parent_title: _,
    provider: T,
    image_url: I
  } = n.extra.media, A = n.extra.artist.name, N = (0, i.useStateFromStores)([r.default], () => r.default.getUser(n.author_id)), {
    primaryColor: v,
    secondaryColor: x
  } = (0, f.default)(I), M = (0, d.getEntryDuration)(n), R = (0, d.getAggregateRange)(n), y = l.useCallback(() => {
    if (null == N || null == M || !(0, o.isIn)(R, h.ALLOWED_RANGES)) return;
    let e = g(n, t, N, R);
    return (0, c.generateListenContentImage)({
      user: N,
      channel: t,
      mediaImageSrc: I,
      artist: A,
      description: e,
      colors: [v, x],
      badges: (0, c.getTopArtistImageBadges)(n)
    })
  }, [I, A, t, M, n, v, R, x, N]);
  return null != N && null != M && (0, o.isIn)(R, h.ALLOWED_RANGES) ? (0, a.jsxs)(p.Popout, {
    children: [(0, a.jsx)(p.PopoutContent, {
      thumbnailSrc: I,
      channel: t,
      entry: n,
      headerIcons: (0, a.jsx)(E.default, {
        provider: T
      }),
      userDescription: C.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
      title: _,
      subtitle: A,
      badges: (0, a.jsx)(m.BadgesContainer, {
        location: m.BadgeLocation.POPOUT,
        children: h.TOP_ARTIST_BADGES.map((e, t) => (0, a.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, a.jsx)(p.PopoutInteractionsContainer, {
      children: (0, a.jsx)(p.PopoutReactor, {
        closePopout: u,
        user: N,
        channel: t,
        generateReactionImage: y,
        reactionImageAltText: S(n, N),
        entry: n,
        requestId: s
      })
    })]
  }) : null
}