"use strict";
a.r(e);
var n = a("735250");
a("470079");
var d = a("442837"),
  i = a("481060"),
  s = a("812206"),
  t = a("922156"),
  o = a("285952"),
  u = a("63063"),
  r = a("689938"),
  c = a("469061");
e.default = l => {
  let {
    onClose: e,
    transitionState: a
  } = l, {
    error: h,
    applicationName: R
  } = (0, d.useStateFromStoresObject)([t.default, s.default], () => {
    let l = t.default.getLastError(),
      e = null;
    if (null != l && null != l.applicationId) {
      let a = s.default.getApplication(l.applicationId);
      null != a && (e = a.name)
    }
    return {
      error: l,
      applicationName: e
    }
  });
  return (0, n.jsxs)(i.ModalRoot, {
    transitionState: a,
    size: i.ModalSize.SMALL,
    "aria-label": r.default.Messages.DISPATCH_ERROR_MODAL_HEADER,
    children: [(0, n.jsxs)(i.ModalHeader, {
      justify: o.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, n.jsx)(o.default.Child, {
        grow: 1,
        children: (0, n.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: r.default.Messages.DISPATCH_ERROR_MODAL_HEADER
        })
      }), (0, n.jsx)(o.default.Child, {
        grow: 0,
        children: (0, n.jsx)(i.ModalCloseButton, {
          onClick: e
        })
      })]
    }), (0, n.jsx)(i.ModalContent, {
      children: (0, n.jsxs)("div", {
        className: c.body,
        children: [(0, n.jsx)("div", {
          children: r.default.Messages.DISPATCH_ERROR_MODAL_DESCRIPTION.format({
            link: "https://dis.gd/dispatch-error"
          })
        }), (0, n.jsx)("div", {
          className: c.supportCallToAction,
          children: r.default.Messages.DISPATCH_ERROR_MODAL_BODY
        }), (0, n.jsx)("div", {
          className: c.errorLabel,
          children: r.default.Messages.DISPATCH_ERROR_MODAL_ERROR_LABEL
        }), (0, n.jsx)("div", {
          className: c.errorDetails,
          children: (0, n.jsxs)("div", {
            children: [null != R ? "Game: ".concat(R, "\n") : null, (null == h ? void 0 : h.applicationId) != null ? "Game ID: ".concat(h.applicationId, "\n") : null, (null == h ? void 0 : h.branchId) != null && (null == h ? void 0 : h.applicationId) !== (null == h ? void 0 : h.branchId) ? "Branch ID: ".concat(null == h ? void 0 : h.branchId, "\n") : null, (null == h ? void 0 : h.code) != null ? "Error Code: ".concat(null == h ? void 0 : h.code, "\n") : null, (null == h ? void 0 : h.uuid) != null ? "Unique Case ID: ".concat(null == h ? void 0 : h.uuid) : null]
          })
        })]
      })
    }), (0, n.jsxs)(i.ModalFooter, {
      children: [(0, n.jsx)(i.Button, {
        onClick: () => {
          window.open(u.default.getSubmitRequestURL())
        },
        children: r.default.Messages.DISPATCH_ERROR_MODAL_OPEN_TICKET
      }), (0, n.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        onClick: e,
        color: c.closeLink,
        children: r.default.Messages.CLOSE
      })]
    })]
  })
}