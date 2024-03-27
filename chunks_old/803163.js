"use strict";
n.r(t), n.d(t, {
  showMFASuccessModal: function() {
    return _
  },
  default: function() {
    return f
  }
}), n("70102"), n("222007");
var i = n("37983"),
  a = n("884691"),
  o = n("627929"),
  l = n("77078"),
  r = n("430713"),
  s = n("663657"),
  d = n("49111"),
  c = n("782340");

function u(e) {
  let {
    onError: t,
    onSuccess: n,
    PasswordConfirm: l,
    ...s
  } = e, [u, E] = a.useState("");
  return (0, i.jsx)(l, {
    ...s,
    handleSubmit: e => r.default.enableMFAStart(e),
    onError: e => {
      var i;
      if (("object" == typeof(i = e) && null != i && (0, o.hasOwnProperty)(i, "code") && "number" == typeof i.code ? i.code : 0) === d.AbortCodes.MFA_INVALID_SECRET) n(u), s.onClose();
      else t(e)
    },
    onPasswordChange: E,
    title: c.default.Messages.TWO_FA_ENABLE,
    actionText: c.default.Messages.CONTINUE,
    skipErrorMsgAbortCode: d.AbortCodes.MFA_INVALID_SECRET
  })
}

function E(e, t) {
  return new Promise(a => {
    (0, l.openModalLazy)(async () => {
      let {
        default: o
      } = await n.el("936380").then(n.bind(n, "936380"));
      return n => (0, i.jsx)(o, {
        ...n,
        password: e,
        emailToken: t,
        handleEnableMFASuccess: a
      })
    })
  })
}

function _() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("184504").then(n.bind(n, "184504"));
      return n => (0, i.jsx)(t, {
        ...n,
        isTotp: e
      })
    }, {
      onCloseCallback: t,
      onCloseRequest: d.NOOP_NULL
    })
  })
}
var f = {
  enableMFA: async function e() {
    let e = await new Promise((e, t) => {
      (0, l.openModalLazy)(async () => {
        let {
          default: a
        } = await n.el("583227").then(n.bind(n, "583227"));
        return n => (0, i.jsx)(u, {
          ...n,
          onSuccess: e,
          onError: t,
          PasswordConfirm: a
        })
      })
    });
    if ((0, s.isMfaEmailVerificationEnabled)()) {
      var t;
      let a = await (t = e, new Promise(e => {
        (0, l.openModalLazy)(async () => {
          let {
            default: a
          } = await n.el("644512").then(n.bind(n, "644512"));
          return n => (0, i.jsx)(a, {
            ...n,
            onFormSubmit: async e => await r.default.verifyEmailCode(e),
            onResend: async () => {
              await r.default.resendEmailCode(t)
            },
            onSuccess: e,
            headerText: c.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
            confirmButtonText: c.default.Messages.NEXT
          })
        })
      }));
      await E(e, null == a ? void 0 : a.token)
    } else await E(e);
    await _()
  }
}