"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("446674"),
  o = s("583227"),
  i = s("599417"),
  r = s("878720"),
  d = s("330387"),
  u = s("697218"),
  h = s("419522"),
  c = s("892313"),
  p = s("782340"),
  f = a.forwardRef(function(e, t) {
    let {
      onAddedPhone: s,
      onClose: f,
      transitionState: m,
      reason: C
    } = e, g = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), y = (0, l.useStateFromStores)([d.default], () => d.default.getAction()), [N, x] = a.useState(null), [E, R] = a.useState(null), [S, v] = a.useState(null), [P, j] = a.useState(!1), I = a.useCallback(async e => {
      j(!0);
      try {
        c.default.isPhoneReverification(g, y) ? await r.default.beginReverifyPhone(e, C) : await r.default.beginAddPhone(e, C), v(null), x(e)
      } catch (e) {
        v(new i.default(e))
      }
      j(!1)
    }, [g, C, y]), _ = a.useCallback(async e => {
      if (null != N && null != g) {
        j(!0);
        try {
          let {
            token: t
          } = await r.default.verifyPhone(N, e);
          v(null), R(t)
        } catch (e) {
          v(new i.default(e))
        }
        j(!1)
      }
    }, [g, N]), k = a.useCallback(async e => {
      null != E && (c.default.isPhoneReverification(g, y) ? await r.default.reverifyPhone(E, e, C) : await r.default.addPhone(E, e, C), null == s || s(), f())
    }, [s, f, E, C, g, y]);
    return null != E ? (0, n.jsx)(o.default, {
      onClose: f,
      transitionState: m,
      title: p.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
      handleSubmit: k
    }) : (0, n.jsx)(h.default, {
      onClose: f,
      transitionState: m,
      error: null == S ? void 0 : S.getAnyErrorMessage(),
      working: P,
      validPhone: null != N,
      onAddPhone: I,
      onVerifyPhone: _
    })
  })