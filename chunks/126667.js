"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("446674"),
  l = s("77078"),
  o = s("437822"),
  r = s("152584"),
  d = s("648661"),
  h = s("330387"),
  u = s("790618"),
  m = s("697218"),
  c = s("67211"),
  f = s("892313"),
  g = s("49111"),
  E = s("782340"),
  p = e => {
    let {
      transitionState: t,
      onClose: s
    } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getErrors()), I = (0, i.useStateFromStores)([u.default], () => u.default.getFormState()), C = (0, i.useStateFromStores)([m.default], () => m.default.getCurrentUser()), R = (0, i.useStateFromStores)([h.default], () => h.default.getAction()), _ = !f.default.isEmailReverification(R), [v, M] = n.useState(!0), S = I === g.FormStates.SUBMITTING;

    function T(e) {
      var t, s;
      return null !== (s = null == p ? void 0 : null === (t = p[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : ""
    }
    let A = T("email"),
      N = T("password");
    return (0, a.jsx)(c.default, {
      transitionState: t,
      email: null == C ? void 0 : C.email,
      emailError: A,
      passwordError: N,
      submitting: S,
      canResend: v && !S && (null == C ? void 0 : C.email) != null && 0 === A.length && 0 === N.length,
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