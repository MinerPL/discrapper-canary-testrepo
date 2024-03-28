"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("442837"),
  i = s("279837"),
  o = s("479531"),
  r = s("144114"),
  u = s("23434"),
  d = s("594174"),
  h = s("585111"),
  c = s("1964"),
  p = s("689938");
t.default = a.forwardRef(function(e, t) {
  let {
    onAddedPhone: s,
    onClose: f,
    transitionState: m,
    reason: C
  } = e, g = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), y = (0, l.useStateFromStores)([u.default], () => u.default.getAction()), [N, x] = a.useState(null), [R, E] = a.useState(null), [S, P] = a.useState(null), [v, b] = a.useState(!1), j = a.useCallback(async e => {
    b(!0);
    try {
      c.default.isPhoneReverification(g, y) ? await r.default.beginReverifyPhone(e, C) : await r.default.beginAddPhone(e, C), P(null), x(e)
    } catch (e) {
      P(new o.default(e))
    }
    b(!1)
  }, [g, C, y]), I = a.useCallback(async e => {
    if (null != N && null != g) {
      b(!0);
      try {
        let {
          token: t
        } = await r.default.verifyPhone(N, e);
        P(null), E(t)
      } catch (e) {
        P(new o.default(e))
      }
      b(!1)
    }
  }, [g, N]), w = a.useCallback(async e => {
    null != R && (c.default.isPhoneReverification(g, y) ? await r.default.reverifyPhone(R, e, C) : await r.default.addPhone(R, e, C), null == s || s(), f())
  }, [s, f, R, C, g, y]);
  return null != R ? (0, n.jsx)(i.default, {
    onClose: f,
    transitionState: m,
    title: p.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
    handleSubmit: w
  }) : (0, n.jsx)(h.default, {
    onClose: f,
    transitionState: m,
    error: null == S ? void 0 : S.getAnyErrorMessage(),
    working: v,
    validPhone: null != N,
    onAddPhone: j,
    onVerifyPhone: I
  })
})