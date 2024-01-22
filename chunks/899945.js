"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("77078"),
  c = n("421963"),
  o = n("659500"),
  s = n("158945"),
  p = n("49111"),
  d = n("782340"),
  l = n("352630"),
  u = n("954035");
let h = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

function f(e) {
  let {
    onClose: t,
    onCaptchaVerify: n,
    onReject: f,
    transitionState: v,
    headerText: m,
    bodyText: y,
    rqtoken: E,
    ...C
  } = e, R = (0, s.default)(f);
  return (r.useEffect(() => {
    o.ComponentDispatch.subscribe(p.ComponentActions.LAYER_POP_ESCAPE_KEY, t)
  }, [t]), null != v && h.has(v)) ? (0, a.jsx)(i.ModalRoot, {
    transitionState: v,
    "aria-label": "CAPTCHA",
    className: l.modal,
    children: (0, a.jsxs)(i.ModalContent, {
      className: l.container,
      children: [(0, a.jsx)(i.ModalCloseButton, {
        className: l.close,
        onClick: t
      }), (0, a.jsx)("div", {
        className: l.content,
        children: v !== i.ModalTransitionState.ENTERED ? (0, a.jsx)(i.Spinner, {
          type: i.Spinner.Type.SPINNING_CIRCLE
        }) : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)("img", {
              src: u,
              alt: ""
            })
          }), (0, a.jsx)("div", {
            className: l.title,
            "aria-hidden": !0,
            children: null != m ? m : d.default.Messages.GENERIC_CAPTCHA_HEADER
          }), (0, a.jsx)("div", {
            children: null != y ? y : d.default.Messages.GENERIC_CAPTCHA_DESCRIPTION
          }), (0, a.jsx)("div", {
            className: l.captchaContainer,
            children: (0, a.jsx)(c.default, {
              onVerify: e => {
                R(), n(e, E), t()
              },
              ...C
            })
          })]
        })
      })]
    })
  }) : null
}