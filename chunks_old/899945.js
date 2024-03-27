"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  i = n("77078"),
  c = n("421963"),
  o = n("659500"),
  s = n("158945"),
  p = n("49111"),
  d = n("782340"),
  l = n("960786"),
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
  return (a.useEffect(() => {
    o.ComponentDispatch.subscribe(p.ComponentActions.LAYER_POP_ESCAPE_KEY, t)
  }, [t]), null != v && h.has(v)) ? (0, r.jsx)(i.ModalRoot, {
    transitionState: v,
    "aria-label": "CAPTCHA",
    className: l.modal,
    children: (0, r.jsxs)(i.ModalContent, {
      className: l.container,
      children: [(0, r.jsx)(i.ModalCloseButton, {
        className: l.close,
        onClick: t
      }), (0, r.jsx)("div", {
        className: l.content,
        children: v !== i.ModalTransitionState.ENTERED ? (0, r.jsx)(i.Spinner, {
          type: i.Spinner.Type.SPINNING_CIRCLE
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            children: (0, r.jsx)("img", {
              src: u,
              alt: ""
            })
          }), (0, r.jsx)("div", {
            className: l.title,
            "aria-hidden": !0,
            children: null != m ? m : d.default.Messages.GENERIC_CAPTCHA_HEADER
          }), (0, r.jsx)("div", {
            children: null != y ? y : d.default.Messages.GENERIC_CAPTCHA_DESCRIPTION
          }), (0, r.jsx)("div", {
            className: l.captchaContainer,
            children: (0, r.jsx)(c.default, {
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