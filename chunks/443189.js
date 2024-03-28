"use strict";
s.r(a), s.d(a, {
  default: function() {
    return C
  }
});
var t = s("735250"),
  n = s("470079"),
  c = s("481060"),
  r = s("153124"),
  l = s("626135"),
  i = s("981631"),
  o = s("689938"),
  d = s("733502"),
  u = s("963705");

function C(e) {
  let {
    source: a,
    onClose: s,
    transitionState: C
  } = e;
  n.useEffect(() => {
    l.default.track(i.AnalyticEvents.OPEN_MODAL, {
      type: i.AnalyticsSections.CONTACT_SYNC_NC_MODAL,
      source: {
        location: a
      }
    })
  }, [a]);
  let N = (0, r.useUID)();
  return (0, t.jsxs)(c.ModalRoot, {
    className: d.contactSync,
    transitionState: C,
    "aria-labelledby": N,
    children: [(0, t.jsx)(c.ModalCloseButton, {
      onClick: s,
      className: d.modalCloseButton
    }), (0, t.jsxs)("div", {
      className: d.inner,
      children: [(0, t.jsx)(c.Heading, {
        variant: "heading-xl/extrabold",
        color: "header-primary",
        className: d.header,
        children: o.default.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_TITLE
      }), (0, t.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: o.default.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_BODY
      })]
    }), (0, t.jsx)("div", {
      className: d.container,
      children: (0, t.jsx)("img", {
        alt: "",
        src: u
      })
    })]
  })
}