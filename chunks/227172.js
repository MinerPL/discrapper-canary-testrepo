"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("706454"),
  r = n("192918"),
  o = n("22211"),
  u = n("561308"),
  d = n("919394"),
  c = n("438226"),
  f = n("206295"),
  h = n("91140"),
  m = n("297781"),
  p = n("591853"),
  E = n("689938");
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: C,
    closePopout: g
  } = e, {
    applicationImageSrc: S,
    user: _
  } = (0, h.useGamingContentData)(n), {
    primaryColor: T,
    secondaryColor: I
  } = (0, f.default)(S), A = (0, s.useStateFromStores)([i.default], () => i.default.locale), {
    streamPreviewUrl: N,
    channel: v
  } = (0, o.default)(n), {
    displayParticipants: x,
    participant1: M,
    participant2: R,
    numOtherParticipants: y
  } = (0, r.default)(n, 3), L = l.useCallback(e => {
    if (null == S || null == t || null == _) return;
    let a = y > 0 ? (0, c.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [M, R],
      countOthers: y
    }) : (0, c.formatCanvasDescription)(n, t, _);
    return (0, d.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: S,
      avatarSrcs: x.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, u.formatEntryTimestamp)(n, A),
      colors: [T, I],
      channelId: e
    })
  }, [S, t, x, n, A, y, M, R, T, I, _]);
  if (null == _) return null;
  let O = (0, a.jsx)(m.BadgesContainer, {
      location: m.BadgeLocation.POPOUT,
      children: h.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    j = null == N ? (0, a.jsx)(p.PopoutContent, {
      thumbnailSrc: S,
      channel: t,
      userDescription: (0, u.isEntryActive)(n) ? E.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : E.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: O,
      entry: n
    }) : (0, a.jsx)(p.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: N,
      title: n.extra.game_name,
      badges: O,
      userDescription: E.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n
    });
  return (0, a.jsxs)(p.Popout, {
    children: [j, (0, a.jsx)(p.PopoutInteractionsContainer, {
      children: null != v ? (0, a.jsx)(p.VoiceChannelPopoutReactor, {
        closePopout: g,
        user: _,
        channel: t,
        generateReactionImage: L,
        reactionImageAltText: (0, c.getContentAltText)(n, _),
        entry: n,
        requestId: C,
        voiceChannel: v,
        isStreaming: null != N
      }) : (0, a.jsx)(p.PopoutReactor, {
        closePopout: g,
        user: _,
        channel: t,
        generateReactionImage: L,
        reactionImageAltText: (0, c.getContentAltText)(n, _),
        entry: n,
        requestId: C
      })
    })]
  })
}