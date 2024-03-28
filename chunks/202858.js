"use strict";
s.r(t), s.d(t, {
  showMFASuccessModal: function() {
    return E
  }
}), s("411104"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("283693"),
  i = s("481060"),
  r = s("816814"),
  o = s("200483"),
  d = s("981631"),
  u = s("689938");

function c(e) {
  let {
    onError: t,
    onSuccess: s,
    PasswordConfirm: i,
    ...o
  } = e, [c, S] = n.useState("");
  return (0, a.jsx)(i, {
    ...o,
    handleSubmit: e => r.default.enableMFAStart(e),
    onError: e => {
      var a;
      if (("object" == typeof(a = e) && null != a && (0, l.hasOwnProperty)(a, "code") && "number" == typeof a.code ? a.code : 0) === d.AbortCodes.MFA_INVALID_SECRET) s(c), o.onClose();
      else t(e)
    },
    onPasswordChange: S,
    title: u.default.Messages.TWO_FA_ENABLE,
    actionText: u.default.Messages.CONTINUE,
    skipErrorMsgAbortCode: d.AbortCodes.MFA_INVALID_SECRET
  })
}

function S(e, t) {
  return new Promise(n => {
    (0, i.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([s.e("49237"), s.e("99387"), s.e("73422"), s.e("23746")]).then(s.bind(s, "837651"));
      return s => (0, a.jsx)(l, {
        ...s,
        password: e,
        emailToken: t,
        handleEnableMFASuccess: n
      })
    })
  })
}

function E() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, i.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([s.e("49237"), s.e("99387"), s.e("76540"), s.e("95422")]).then(s.bind(s, "628908"));
      return s => (0, a.jsx)(t, {
        ...s,
        isTotp: e
      })
    }, {
      onCloseCallback: t,
      onCloseRequest: d.NOOP_NULL
    })
  })
}
async function T() {
  let e = await new Promise((e, t) => {
    (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([s.e("99387"), s.e("24642")]).then(s.bind(s, "279837"));
      return s => (0, a.jsx)(c, {
        ...s,
        onSuccess: e,
        onError: t,
        PasswordConfirm: n
      })
    })
  });
  if ((0, o.isMfaEmailVerificationEnabled)()) {
    var t;
    let n = await (t = e, new Promise(e => {
      (0, i.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([s.e("99387"), s.e("94566")]).then(s.bind(s, "965072"));
        return s => (0, a.jsx)(n, {
          ...s,
          onFormSubmit: async e => await r.default.verifyEmailCode(e),
          onResend: async () => {
            await r.default.resendEmailCode(t)
          },
          onSuccess: e,
          headerText: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
          confirmButtonText: u.default.Messages.NEXT
        })
      })
    }));
    await S(e, null == n ? void 0 : n.token)
  } else await S(e);
  await E()
}
t.default = {
  enableMFA: T
}