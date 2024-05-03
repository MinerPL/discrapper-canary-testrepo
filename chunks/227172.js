"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("706454"),
  r = n("22211"),
  o = n("561308"),
  u = n("919394"),
  d = n("438226"),
  c = n("206295"),
  f = n("91140"),
  h = n("297781"),
  m = n("591853"),
  p = n("689938");
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: E,
    closePopout: C
  } = e, {
    applicationImageSrc: g,
    user: S
  } = (0, f.useGamingContentData)(n), {
    primaryColor: _,
    secondaryColor: T
  } = (0, c.default)(g), I = (0, s.useStateFromStores)([i.default], () => i.default.locale), {
    streamPreviewUrl: A,
    channel: N
  } = (0, r.default)(n), v = l.useCallback(e => {
    if (null != g && null != t && null != S) return (0, u.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: g,
      avatarSrc: S.getAvatarURL(t.guild_id, 128),
      description: (0, d.formatCanvasDescription)(n, t, S),
      timestamp: (0, o.formatEntryTimestamp)(n, I),
      colors: [_, T],
      channelId: e
    })
  }, [g, t, n, I, _, T, S]);
  if (null == S) return null;
  let x = (0, a.jsx)(h.BadgesContainer, {
      location: h.BadgeLocation.POPOUT,
      children: f.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    M = null == A ? (0, a.jsx)(m.PopoutContent, {
      thumbnailSrc: g,
      channel: t,
      userDescription: (0, o.isEntryActive)(n) ? p.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : p.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: x,
      entry: n
    }) : (0, a.jsx)(m.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: A,
      title: n.extra.game_name,
      badges: x,
      userDescription: p.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n
    });
  return (0, a.jsxs)(m.Popout, {
    children: [M, (0, a.jsx)(m.PopoutInteractionsContainer, {
      children: null != N ? (0, a.jsx)(m.VoiceChannelPopoutReactor, {
        closePopout: C,
        user: S,
        channel: t,
        generateReactionImage: v,
        reactionImageAltText: (0, d.getContentAltText)(n, S),
        entry: n,
        requestId: E,
        voiceChannel: N,
        isStreaming: null != A
      }) : (0, a.jsx)(m.PopoutReactor, {
        closePopout: C,
        user: S,
        channel: t,
        generateReactionImage: v,
        reactionImageAltText: (0, d.getContentAltText)(n, S),
        entry: n,
        requestId: E
      })
    })]
  })
}