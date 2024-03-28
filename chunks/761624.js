"use strict";
i.r(s);
var t = i("735250"),
  n = i("470079"),
  a = i("481060"),
  l = i("239091"),
  o = i("547280"),
  d = i("689938");
s.default = function(e) {
  let {
    signupTarget: s,
    onSelect: i
  } = e, c = n.useCallback(() => {
    (0, o.dismissSignUp)(s.key)
  }, [s]);
  return (0, t.jsx)(a.Menu, {
    navId: "signup-button-context",
    onClose: l.closeContextMenu,
    "aria-label": d.default.Messages.DISMISS,
    onSelect: i,
    children: (0, t.jsx)(a.MenuGroup, {
      children: (0, t.jsx)(a.MenuItem, {
        id: "dismiss",
        label: d.default.Messages.DISMISS,
        action: c
      })
    })
  })
}