"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("442837"),
  n = a("481060"),
  i = a("100527"),
  o = a("970606"),
  r = a("271383"),
  u = a("430824"),
  d = a("594174"),
  c = a("153124"),
  f = a("693546"),
  E = a("305325"),
  I = a("937111"),
  R = a("702286"),
  m = a("523924"),
  C = a("981631"),
  _ = a("689938");
t.default = function(e) {
  let {
    guildId: t,
    transitionState: a,
    ...A
  } = e, N = (0, c.useUID)(), h = (0, s.useStateFromStores)([I.default], () => I.default.getRequest(t), [t]), M = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), T = (0, s.useStateFromStores)([d.default], () => {
    var e;
    return null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
  }), v = (0, s.useStateFromStores)([r.default], () => null != T ? r.default.getMember(t, T) : null, [T, t]), g = async () => {
    var e;
    if (null !== (e = null == M ? void 0 : M.hasFeature(C.GuildFeatures.CLAN)) && void 0 !== e && e && (0, o.trackClanApplyToJoinViewed)({
        guildId: t,
        source: i.default.CLAN_REAPPLY
      }), null == M ? void 0 : M.hasFeature(C.GuildFeatures.PREVIEW_ENABLED)) {
      try {
        await f.default.removeGuildJoinRequest(t)
      } catch (e) {
        throw e
      }
      A.onClose(), (0, E.openMemberVerificationModal)(t)
    } else f.default.resetGuildJoinRequest(t)
  };
  return (0, l.jsx)(n.ModalRoot, {
    size: n.ModalSize.DYNAMIC,
    transitionState: a,
    "aria-labelledby": N,
    children: (0, l.jsx)(m.default, {
      ...A,
      headerId: N,
      reapplyText: _.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
      onReapply: g,
      confirmText: _.default.Messages.OKAY,
      onWithdrawApplication: () => {
        A.onClose(), null == v && (0, R.default)()
      },
      rejectionReason: null == h ? void 0 : h.rejectionReason,
      guild: M
    })
  })
}