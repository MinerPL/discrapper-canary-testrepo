"use strict";
n.r(t), n.d(t, {
  ConfirmModal: function() {
    return d
  },
  DeclarativeConfirmModal: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(693789),
  l = n(260034),
  u = n(709692),
  _ = n(169935);

function d(e) {
  let t, n, {
      header: s,
      children: d,
      confirmText: c,
      cancelText: E,
      className: I,
      onConfirm: T,
      onCancel: h,
      onClose: S,
      onCloseCallback: f,
      bodyClassName: N,
      transitionState: A,
      loading: m = !1,
      confirmButtonColor: O = a.zx.Colors.RED,
      focusCancel: R = !1
    } = e,
    C = r.useRef(null);
  return r.useEffect(() => {
    !R && setTimeout(() => {
      var e;
      return null === (e = C.current) || void 0 === e ? void 0 : e.focus()
    }, 0)
  }, [R]), r.useLayoutEffect(() => () => null == f ? void 0 : f()), null != E && (t = (0, i.jsx)(a.zx, {
    type: "button",
    look: a.zx.Looks.LINK,
    color: a.zx.Colors.PRIMARY,
    disabled: m,
    onClick: () => {
      null == h || h(), S()
    },
    autoFocus: R,
    children: E
  })), null != c && (n = (0, i.jsx)(a.zx, {
    buttonRef: C,
    type: "submit",
    color: O,
    submitting: m,
    onClick: async () => {
      try {
        await (null == T ? void 0 : T()), S()
      } catch (e) {
        throw e
      }
    },
    autoFocus: !R,
    children: c
  })), (0, i.jsxs)(u.Y0, {
    className: I,
    transitionState: A,
    children: [null != s ? (0, i.jsx)(u.xB, {
      separator: !1,
      children: (0, i.jsx)(l.X, {
        variant: "heading-lg/semibold",
        children: s
      })
    }) : null, (0, i.jsx)(u.hz, {
      className: o()(_.content, N),
      children: d
    }), (0, i.jsxs)(u.mz, {
      children: [n, t]
    })]
  })
}

function c(e) {
  return (0, i.jsx)(u.u_, {
    onCloseRequest: e.dismissable ? e.onCancel : null,
    renderModal: t => (0, i.jsx)(d, {
      ...t,
      ...e
    })
  })
}