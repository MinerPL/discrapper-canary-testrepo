"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("481060"),
  c = n("841074"),
  o = n("585483"),
  s = n("637538"),
  p = n("981631"),
  d = n("689938"),
  l = n("246010"),
  h = n("480781");
let u = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

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
  }, [t]), null != v && u.has(v)) ? (0, a.jsx)(i.ModalRoot, {
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
              src: h,
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