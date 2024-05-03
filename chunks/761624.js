"use strict";
t.r(s);
var i = t("735250"),
  n = t("470079"),
  a = t("481060"),
  c = t("239091"),
  l = t("547280"),
  d = t("689938");
s.default = function(e) {
  let {
    signupTarget: s,
    onSelect: t
  } = e, o = n.useCallback(() => {
    (0, l.dismissSignUp)(s.key, s.dismissibleContent)
  }, [s]);
  return (0, i.jsx)(a.Menu, {
    navId: "signup-button-context",
    onClose: c.closeContextMenu,
    "aria-label": d.default.Messages.DISMISS,
    onSelect: t,
    children: (0, i.jsx)(a.MenuGroup, {
      children: (0, i.jsx)(a.MenuItem, {
        id: "dismiss",
        label: d.default.Messages.DISMISS,
        action: o
      })
    })
  })
}