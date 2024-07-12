n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(568154),
  o = n(703656),
  c = n(430824),
  d = n(449934),
  u = n(768581),
  _ = n(693546),
  h = n(863249),
  E = n(944163),
  I = n(246364),
  m = n(937111),
  g = n(523924),
  p = n(390500),
  T = n(200305),
  S = n(981631),
  C = n(898625),
  f = n(689938),
  N = n(131147);
t.Z = e => {
  var t;
  let n, A;
  let {
guildId: Z,
inviteCode: L
  } = e, [v, O] = s.useState(C.hO.INITIAL), R = (0, a.e7)([E.Z], () => E.Z.get(Z)), x = (0, a.e7)([m.Z], () => m.Z.getRequest(Z)), b = (0, a.e7)([c.Z], () => c.Z.getGuild(Z)), {
hasFetchedRequestToJoinGuilds: P,
guildPreviewDisabled: M
  } = (0, a.cj)([m.Z], () => ({
hasFetchedRequestToJoinGuilds: m.Z.hasFetchedRequestToJoinGuilds,
guildPreviewDisabled: m.Z.getJoinRequestGuild(Z)
  }));
  s.useEffect(() => {
null != b && (0, o.uL)(S.Z5c.CHANNEL(Z));
  }, [
b,
Z
  ]), s.useEffect(() => {
!P && _.Z.fetchRequestToJoinGuilds();
  }, [P]);
  let D = s.useCallback(e => {
  O(t => Math.max(t, e));
}, []),
y = async e => {
  await h.Z.submitVerificationForm(Z, e);
}, j = () => {
  _.Z.resetGuildJoinRequest(Z);
};
  let U = (n = f.Z.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
  name: null == M ? void 0 : M.toString()
}), A = () => {
  O(Math.max(v, C.hO.FILLING)), _.Z.removeGuildJoinRequest(Z), (0, o.uL)(S.Z5c.ME);
}, () => {
  (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
    header: f.Z.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
    cancelText: f.Z.Messages.NEVERMIND,
    onConfirm: A,
    confirmText: f.Z.Messages.YES_TEXT,
    confirmButtonColor: r.Button.Colors.RED,
    ...e,
    children: (0, i.jsx)(r.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: n
    })
  }));
}),
G = (null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.splash) != null ? u.ZP.getGuildSplashURL({
  id: R.guild.id,
  splash: R.guild.splash
}) : (0, d.gK)();
  return (0, i.jsx)('div', {
className: N.page,
children: (0, i.jsxs)(l.Z, {
  embedded: !0,
  splash: G,
  waveState: v,
  showLogo: !1,
  updateWaveState: D,
  children: [
    (0, i.jsx)('div', {
      className: N.dragRegion
    }),
    (0, i.jsx)('div', {
      className: N.contentWrapper,
      children: (() => {
        switch (null == x ? void 0 : x.applicationStatus) {
          case I.wB.SUBMITTED:
            return (0, i.jsx)(p.Z, {
              onWithdrawApplication: U,
              guild: M
            });
          case I.wB.REJECTED:
            return (0, i.jsx)(g.Z, {
              reapplyText: f.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
              onReapply: j,
              confirmText: f.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
              onWithdrawApplication: U,
              rejectionReason: null == x ? void 0 : x.rejectionReason,
              guild: M
            });
          default:
            return (0, i.jsx)(T.Z, {
              guildId: Z,
              inviteCode: L,
              onComplete: y
            });
        }
      })()
    })
  ]
})
  });
};