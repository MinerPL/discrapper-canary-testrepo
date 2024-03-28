"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("442837"),
  i = a("481060"),
  n = a("812206"),
  o = a("285952"),
  r = a("63063"),
  d = a("981631"),
  N = a("689938"),
  c = a("483608");
let u = r.default.getArticleURL(d.HelpdeskArticles.MISSING_ENTITLEMENT);
t.default = s.default.connectStores([n.default], e => {
  let {
    applicationId: t
  } = e;
  return {
    application: n.default.getApplication(t)
  }
})(function(e) {
  let {
    application: t,
    transitionState: a,
    onClose: s
  } = e;
  return (0, l.jsxs)(i.ModalRoot, {
    transitionState: a,
    size: i.ModalSize.MEDIUM,
    children: [(0, l.jsxs)(i.ModalHeader, {
      align: o.default.Align.CENTER,
      justify: o.default.Justify.BETWEEN,
      children: [(0, l.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H4,
        children: null != t ? N.default.Messages.MISSING_ENTITLEMENT_MODAL_HEADER.format({
          applicationName: t.name
        }) : N.default.Messages.MISSING_ENTITLEMENT_MODAL_HEADER_UNKNOWN_APPLICATION
      }), (0, l.jsx)(i.ModalCloseButton, {
        onClick: s
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      children: [(0, l.jsx)("div", {
        className: c.missingEntitlementImage
      }), (0, l.jsx)(i.Text, {
        className: c.text,
        variant: "text-md/normal",
        children: null != t ? N.default.Messages.MISSING_ENTITLEMENT_MODAL_BODY.format({
          applicationName: t.name,
          supportArticleURL: u
        }) : N.default.Messages.MISSING_ENTITLEMENT_MODAL_BODY_UNKNOWN_APPLICATION.format({
          supportArticleURL: u
        })
      })]
    }), (0, l.jsx)(i.ModalFooter, {
      children: (0, l.jsx)(i.Button, {
        onClick: s,
        children: N.default.Messages.OKAY
      })
    })]
  })
})