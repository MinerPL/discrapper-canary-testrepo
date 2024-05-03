"use strict";
a.r(t);
var s = a("735250");
a("470079");
var l = a("442837"),
  n = a("481060"),
  i = a("271383"),
  o = a("430824"),
  r = a("594174"),
  u = a("153124"),
  d = a("693546"),
  c = a("305325"),
  f = a("937111"),
  E = a("702286"),
  I = a("523924"),
  R = a("981631"),
  m = a("689938");
t.default = function(e) {
  let {
    guildId: t,
    transitionState: a,
    ..._
  } = e, C = (0, u.useUID)(), N = (0, l.useStateFromStores)([f.default], () => f.default.getRequest(t), [t]), M = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t), [t]), h = (0, l.useStateFromStores)([r.default], () => {
    var e;
    return null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
  }), A = (0, l.useStateFromStores)([i.default], () => null != h ? i.default.getMember(t, h) : null, [h, t]), T = async () => {
    if (null == M ? void 0 : M.hasFeature(R.GuildFeatures.PREVIEW_ENABLED)) {
      try {
        await d.default.removeGuildJoinRequest(t)
      } catch (e) {
        throw e
      }
      _.onClose(), (0, c.openMemberVerificationModal)(t)
    } else d.default.resetGuildJoinRequest(t)
  };
  return (0, s.jsx)(n.ModalRoot, {
    size: n.ModalSize.DYNAMIC,
    transitionState: a,
    "aria-labelledby": C,
    children: (0, s.jsx)(I.default, {
      ..._,
      headerId: C,
      reapplyText: m.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
      onReapply: T,
      confirmText: m.default.Messages.OKAY,
      onWithdrawApplication: () => {
        _.onClose(), null == A && (0, E.default)()
      },
      rejectionReason: null == N ? void 0 : N.rejectionReason,
      guild: M
    })
  })
}