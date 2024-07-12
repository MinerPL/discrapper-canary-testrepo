n.d(t, {
  T: function() {
return R;
  },
  Z: function() {
return j;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(475179),
  d = n(763520),
  u = n(358221),
  h = n(414910),
  p = n(928518),
  m = n(204197),
  _ = n(470956),
  f = n(314897),
  E = n(271383),
  C = n(131951),
  g = n(451478),
  I = n(783259),
  x = n(40300),
  T = n(5192),
  v = n(44136),
  N = n(981631),
  S = n(65154),
  Z = n(689938),
  A = n(26864);
let M = o.AvatarSizes.SIZE_80,
  b = o.AvatarSizes.SIZE_40;

function R(e) {
  let {
channelId: t,
userId: n
  } = e;
  return (0, _.Eu)(t, n) ? (0, i.jsx)(o.Tooltip, {
text: Z.Z.Messages.NOTICE_USER_DISCONNECTED,
position: 'bottom',
color: o.TooltipColors.GREY,
children: e => (0, i.jsx)('div', {
  ...e,
  className: A.interactive,
  children: (0, i.jsx)(o.CircleExclamationPointIcon, {
    color: o.tokens.colors.STATUS_WARNING_BACKGROUND
  })
})
  }) : null;
}

function j(e) {
  let {
participant: t,
channel: n,
inCall: l,
width: o,
paused: _,
selected: R,
fit: j,
onVideoResize: L,
blocked: P,
noVideoRender: O = !1,
pulseSpeakingIndicator: y = !1
  } = e, D = C.Z.getVideoComponent(), k = (0, r.e7)([f.default], () => f.default.getId()), {
user: U,
streamId: w,
speaking: B
  } = t, H = U.id === k, G = (0, v.ZP)(t), V = (0, r.e7)([g.Z], () => g.Z.isFocused()), F = (0, r.e7)([p.Z], () => p.Z.getWindowFocused(N.KJ3.CHANNEL_CALL_POPOUT)), W = (0, r.e7)([C.Z], () => null != U.id && C.Z.isLocalVideoDisabled(U.id, (0, h.Z)(t.type)), [
U.id,
t.type
  ]), z = (0, r.e7)([E.ZP], () => E.ZP.isGuestOrLurker(n.guild_id, U.id)), Y = T.ZP.getName(n.getGuildId(), n.id, U) + (z ? ' '.concat(Z.Z.Messages.GUEST_NAME_SUFFIX) : ''), K = B && (F || V), q = o < 124 ? b : M, {
avatarSrc: X,
avatarDecorationSrc: Q
  } = (0, m.Z)({
user: U,
guildId: n.guild_id,
size: q,
animateOnHover: !K
  }), J = (0, r.e7)([u.Z], () => u.Z.getSelectedParticipant(n.id));
  return (a.useEffect(() => {
n.isGuildStageVoice() && !G && (null == J ? void 0 : J.id) === U.id && c.Z.selectParticipant(n.id, null);
  }, [G]), l && !W && !O && G && !R && null != D && C.Z.supports(S.AN.VIDEO)) ? (0, i.jsx)(x.Z, {
onResize: L,
wrapperClassName: A.videoWrapper,
className: A.content,
mirror: H,
streamId: w,
videoComponent: D,
fit: j,
paused: _,
videoSpinnerContext: U.id === k ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
userId: U.id
  }, w) : (0, i.jsx)('div', {
className: s()(A.content, {
  [A.blockedAvatar]: P
}),
children: (0, i.jsx)(I.Z, {
  'aria-label': Y,
  src: X,
  avatarDecoration: Q,
  backgroundSrc: U.getAvatarURL(n.guild_id, 80),
  size: q,
  pulseSpeakingIndicator: y,
  speaking: B,
  userId: U.id
})
  });
}