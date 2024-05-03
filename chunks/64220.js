"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("921944"),
  r = n("689938"),
  o = n("540767");

function u(e) {
  let {
    markAsDismissed: t
  } = e;
  return s.useEffect(() => {
    let e = setTimeout(() => {
      t(i.ContentDismissActionType.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), (0, a.jsxs)(l.Clickable, {
    className: o.container,
    onClick: () => {
      t(i.ContentDismissActionType.USER_DISMISS)
    },
    children: [(0, a.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "always-white",
      children: r.default.Messages.PROFILE_LOOKING_GOOD_TOOLTIP_TEXT
    }), (0, a.jsx)("div", {
      className: o.pointer
    })]
  })
}

function d(e) {
  let {
    children: t,
    markAsDismissed: n
  } = e, [i, r] = s.useState(!1);
  return s.useEffect(() => {
    let e = setTimeout(() => {
      r(!0)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [r]), (0, a.jsx)(l.Popout, {
    position: "top",
    align: "left",
    shouldShow: i,
    renderPopout: () => (0, a.jsx)(u, {
      markAsDismissed: n
    }),
    children: t
  })
}