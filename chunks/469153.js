"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("718017"),
  s = n("442837"),
  i = n("481060"),
  r = n("607070"),
  o = n("689938"),
  u = n("530691"),
  d = n("420311");
let c = () => (0, a.jsxs)("div", {
  className: d.toast,
  children: [(0, a.jsx)(i.Spinner, {
    type: i.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
    className: u.loadingSpinner
  }), (0, a.jsx)(i.Text, {
    color: "header-primary",
    variant: "text-md/normal",
    children: o.default.Messages.CONTENT_INVENTORY_MESSAGE_SENDING
  })]
});
t.default = e => {
  let {
    shown: t,
    sent: n,
    className: u
  } = e, d = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), f = (0, l.useTransition)(t, {
    from: {
      transform: d ? "translateY(0)" : "translateY(16px)",
      opacity: 0
    },
    enter: {
      transform: "translateY(0)",
      opacity: 1
    },
    leave: {
      transform: d ? "translateY(0)" : "translateY(16px)",
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    },
    delay: 200
  });
  return (0, a.jsx)(a.Fragment, {
    children: f((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: u,
      style: e,
      children: n ? (0, a.jsx)(i.Toast, {
        message: o.default.Messages.CONTENT_INVENTORY_MESSAGE_SENT,
        type: i.ToastType.SUCCESS,
        id: "success_message_toast"
      }) : (0, a.jsx)(i.Toast, {
        message: "",
        type: i.ToastType.CUSTOM,
        id: "custom_loading_message_toast",
        options: {
          component: (0, a.jsx)(c, {})
        }
      })
    }))
  })
}