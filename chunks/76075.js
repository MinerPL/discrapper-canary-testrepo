o.r(e);
var a = o(735250);
o(470079);
var t = o(442837),
  i = o(481060),
  r = o(100527),
  s = o(970606),
  l = o(271383),
  c = o(430824),
  u = o(594174),
  d = o(153124),
  f = o(693546),
  _ = o(305325),
  m = o(937111),
  b = o(702286),
  I = o(523924),
  C = o(981631),
  E = o(689938);
e.default = function(n) {
  let {
guildId: e,
transitionState: o,
...R
  } = n, p = (0, d.Dt)(), N = (0, t.e7)([m.Z], () => m.Z.getRequest(e), [e]), g = (0, t.e7)([c.Z], () => c.Z.getGuild(e), [e]), h = (0, t.e7)([u.default], () => {
var n;
return null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  }), A = (0, t.e7)([l.ZP], () => null != h ? l.ZP.getMember(e, h) : null, [
h,
e
  ]), B = async () => {
var n;
if (null !== (n = null == g ? void 0 : g.hasFeature(C.oNc.CLAN)) && void 0 !== n && n && (0, s.Vr)({
    guildId: e,
    source: r.Z.CLAN_REAPPLY
  }), null == g ? void 0 : g.hasFeature(C.oNc.PREVIEW_ENABLED)) {
  try {
    await f.Z.removeGuildJoinRequest(e);
  } catch (n) {
    throw n;
  }
  R.onClose(), (0, _.hk)(e);
} else
  f.Z.resetGuildJoinRequest(e);
  };
  return (0, a.jsx)(i.ModalRoot, {
size: i.ModalSize.DYNAMIC,
transitionState: o,
'aria-labelledby': p,
children: (0, a.jsx)(I.Z, {
  ...R,
  headerId: p,
  reapplyText: E.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
  onReapply: B,
  confirmText: E.Z.Messages.OKAY,
  onWithdrawApplication: () => {
    R.onClose(), null == A && (0, b.Z)();
  },
  rejectionReason: null == N ? void 0 : N.rejectionReason,
  guild: g
})
  });
};