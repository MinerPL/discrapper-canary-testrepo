"use strict";
n.r(t), n.d(t, {
  GuildVerificationPopoutTypes: function() {
    return a
  }
});
var l, a, s = n("735250");
n("470079");
var i = n("442837"),
  r = n("481060"),
  o = n("893776"),
  u = n("391650"),
  d = n("144114"),
  c = n("607744"),
  f = n("594174"),
  h = n("153124"),
  p = n("981631"),
  m = n("815660"),
  C = n("689938"),
  g = n("563797");
(l = a || (a = {}))[l.VOICE = 0] = "VOICE";
t.default = e => {
  let {
    type: t,
    guildId: l,
    closePopout: a
  } = e, E = (0, h.useUID)(), {
    notClaimed: _,
    notEmailVerified: S,
    notPhoneVerified: I,
    newAccount: N,
    newMember: T
  } = (0, i.useStateFromStores)([c.default], () => c.default.getCheck(l), [l]), A = 0 === t ? C.default.Messages.GUILD_VERIFICATION_VOICE_HEADER : null, L = null, v = null;
  return (0 === t && (_ ? (L = C.default.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED, v = C.default.Messages.CLAIM_ACCOUNT) : I ? (L = C.default.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED, v = C.default.Messages.VERIFY_PHONE) : S ? (L = C.default.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED, v = C.default.Messages.RESEND_VERIFICATION_EMAIL) : T ? (L = C.default.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
    min: p.VerificationCriteria.MEMBER_AGE
  }), v = C.default.Messages.OKAY) : N && (L = C.default.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
    min: p.VerificationCriteria.ACCOUNT_AGE
  }), v = C.default.Messages.OKAY)), null == A || null == L) ? null : (0, s.jsxs)(r.Dialog, {
    className: g.container,
    "aria-labelledby": E,
    children: [(0, s.jsx)("img", {
      alt: "",
      className: g.image,
      src: n("64395")
    }), (0, s.jsxs)("div", {
      className: g.content,
      children: [(0, s.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: E,
        children: A
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: L
      }), (0, s.jsxs)("div", {
        className: g.buttonContainer,
        children: [null != v ? (0, s.jsx)(r.Button, {
          onClick: () => {
            _ ? u.openClaimAccountModal() : I ? (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("7954")]).then(n.bind(n, "607018"));
              return t => (0, s.jsx)(e, {
                reason: d.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                ...t
              })
            }, {
              modalKey: m.PHONE_VERIFICATION_MODAL_KEY
            }) : S && (o.default.verifyResend(), (0, r.openModal)(e => {
              var t;
              return (0, s.jsx)(r.ConfirmModal, {
                header: C.default.Messages.VERIFICATION_EMAIL_TITLE,
                confirmText: C.default.Messages.OKAY,
                confirmButtonColor: r.Button.Colors.BRAND,
                ...e,
                children: (0, s.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.VERIFICATION_EMAIL_BODY.format({
                    email: null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.email
                  })
                })
              })
            })), a()
          },
          className: g.primaryButton,
          children: v
        }) : null, _ || I || S ? (0, s.jsx)(r.Button, {
          onClick: a,
          look: r.Button.Looks.BLANK,
          className: g.cancel,
          children: C.default.Messages.NEVERMIND
        }) : null]
      })]
    })]
  })
}