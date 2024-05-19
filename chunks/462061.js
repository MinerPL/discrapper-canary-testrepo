"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("475179"),
  d = n("763520"),
  c = n("358221"),
  f = n("414910"),
  h = n("928518"),
  m = n("204197"),
  p = n("314897"),
  E = n("271383"),
  C = n("131951"),
  g = n("451478"),
  S = n("783259"),
  _ = n("40300"),
  T = n("5192"),
  I = n("44136"),
  A = n("981631"),
  N = n("65154"),
  v = n("689938"),
  x = n("61707");
let M = o.AvatarSizes.SIZE_80,
  R = o.AvatarSizes.SIZE_40;

function y(e) {
  let {
    participant: t,
    channel: n,
    inCall: s,
    width: o,
    paused: y,
    selected: L,
    fit: O,
    onVideoResize: j,
    blocked: P,
    noVideoRender: D = !1,
    pulseSpeakingIndicator: b = !1
  } = e, U = C.default.getVideoComponent(), F = (0, r.useStateFromStores)([p.default], () => p.default.getId()), {
    user: w,
    streamId: k,
    speaking: B
  } = t, H = w.id === F, G = (0, I.default)(t), V = (0, r.useStateFromStores)([g.default], () => g.default.isFocused()), W = (0, r.useStateFromStores)([h.default], () => h.default.getWindowFocused(A.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), Y = (0, r.useStateFromStores)([C.default], () => null != w.id && C.default.isLocalVideoDisabled(w.id, (0, f.default)(t.type)), [w.id, t.type]), z = (0, r.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(n.guild_id, w.id)), K = T.default.getName(n.getGuildId(), n.id, w) + (z ? " ".concat(v.default.Messages.GUEST_NAME_SUFFIX) : ""), Z = B && (W || V), q = o < 124 ? R : M, {
    avatarSrc: X,
    avatarDecorationSrc: Q
  } = (0, m.default)({
    user: w,
    guildId: n.guild_id,
    size: q,
    animateOnHover: !Z
  }), J = (0, r.useStateFromStores)([c.default], () => c.default.getSelectedParticipant(n.id));
  return (l.useEffect(() => {
    n.isGuildStageVoice() && !G && (null == J ? void 0 : J.id) === w.id && u.default.selectParticipant(n.id, null)
  }, [G]), s && !Y && !D && G && !L && null != U && C.default.supports(N.Features.VIDEO)) ? (0, a.jsx)(_.default, {
    onResize: j,
    wrapperClassName: x.videoWrapper,
    className: x.content,
    mirror: H,
    streamId: k,
    videoComponent: U,
    fit: O,
    paused: y,
    videoSpinnerContext: w.id === F ? d.VideoSpinnerContext.SELF_VIDEO : d.VideoSpinnerContext.REMOTE_VIDEO,
    userId: w.id
  }, k) : (0, a.jsx)("div", {
    className: i()(x.content, {
      [x.blockedAvatar]: P
    }),
    children: (0, a.jsx)(S.default, {
      "aria-label": K,
      src: X,
      avatarDecoration: Q,
      backgroundSrc: w.getAvatarURL(n.guild_id, 80),
      size: q,
      pulseSpeakingIndicator: b,
      speaking: B,
      userId: w.id
    })
  })
}