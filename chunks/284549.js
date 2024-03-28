"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("481060"),
  o = s("893776"),
  r = s("809206"),
  d = s("155433"),
  h = s("23434"),
  u = s("25990"),
  m = s("594174"),
  c = s("201092"),
  f = s("1964"),
  g = s("981631"),
  E = s("689938");
t.default = e => {
  let {
    transitionState: t,
    onClose: s
  } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getErrors()), I = (0, i.useStateFromStores)([u.default], () => u.default.getFormState()), R = (0, i.useStateFromStores)([m.default], () => m.default.getCurrentUser()), C = (0, i.useStateFromStores)([h.default], () => h.default.getAction()), _ = !f.default.isEmailReverification(C), [v, M] = n.useState(!0), S = I === g.FormStates.SUBMITTING;

  function T(e) {
    var t, s;
    return null !== (s = null == p ? void 0 : null === (t = p[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : ""
  }
  let A = T("email"),
    N = T("password");
  return (0, a.jsx)(c.default, {
    transitionState: t,
    email: null == R ? void 0 : R.email,
    emailError: A,
    passwordError: N,
    submitting: S,
    canResend: v && !S && (null == R ? void 0 : R.email) != null && 0 === A.length && 0 === N.length,
    canChange: _,
    onChangeEmailClick: function() {
      M(!1)
    },
    onVerify: function(e, t) {
      (0, r.saveAccountChanges)({
        email: e,
        password: t
      }).then(e => {
        if (!(null == e ? void 0 : e.ok)) {
          var t;
          (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? (0, d.showInvalidUsernameToast)() : 0 === N.length && 0 === A.length && (0, l.showToast)((0, l.createToast)(E.default.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
        }
      }), M(!0)
    },
    onResend: function() {
      o.default.verifyResend()
    },
    onClose: s
  })
}