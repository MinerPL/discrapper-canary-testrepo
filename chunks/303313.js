"use strict";
a.r(s), a.d(s, {
  default: function() {
    return M
  }
}), a("653041"), a("47120");
var t = a("735250");
a("470079");
var r = a("149765"),
  i = a("481060"),
  o = a("995648"),
  n = a("422559"),
  d = a("689938"),
  l = a("36748");

function M(e) {
  let {
    defaultMemberPermissions: s,
    onClose: a,
    transitionState: M
  } = e, c = [];
  for (let e of n.OrderedPermissions) r.has(s, e) && c.push(e);
  return (0, t.jsxs)(i.ModalRoot, {
    size: i.ModalSize.DYNAMIC,
    "aria-label": d.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_ARIA_LABEL,
    transitionState: M,
    children: [(0, t.jsx)(i.ModalHeader, {
      separator: !1,
      children: (0, t.jsx)(i.Heading, {
        className: l.header,
        variant: "heading-xl/semibold",
        children: d.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_HEADER
      })
    }), (0, t.jsx)(i.ModalContent, {
      children: (0, t.jsx)(o.default, {
        className: l.permissionList,
        grantedPermissions: c
      })
    }), (0, t.jsx)(i.ModalFooter, {
      className: l.footer,
      children: (0, t.jsx)(i.Button, {
        size: i.ButtonSizes.MEDIUM,
        onClick: a,
        color: i.ButtonColors.BRAND,
        children: d.default.Messages.DONE
      })
    })]
  })
}