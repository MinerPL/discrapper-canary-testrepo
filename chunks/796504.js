"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var r = l("735250"),
  n = l("470079"),
  a = l("442837"),
  u = l("481060"),
  s = l("668274"),
  i = l("807693"),
  o = l("285952"),
  d = l("729035"),
  c = l("689938"),
  f = l("661350");

function h(e) {
  var t;
  let {
    eulaId: l,
    transitionState: h,
    onClose: p
  } = e, g = (0, a.useStateFromStores)([i.default], () => i.default.getEULA(l));
  n.useEffect(() => {
    (0, s.fetchEULA)(l)
  }, [l]);
  let m = null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : c.default.Messages.LOADING,
    b = null != g ? (0, r.jsx)(d.default, {
      children: g.content,
      className: f.markdown
    }) : (0, r.jsx)(u.Spinner, {
      className: f.spinner
    });
  return (0, r.jsxs)(u.ModalRoot, {
    transitionState: h,
    size: u.ModalSize.SMALL,
    "aria-label": m,
    children: [(0, r.jsxs)(u.ModalHeader, {
      justify: o.default.Justify.BETWEEN,
      children: [(0, r.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: m
      }), (0, r.jsx)(u.ModalCloseButton, {
        onClick: p
      })]
    }), (0, r.jsx)(u.ModalContent, {
      children: b
    })]
  })
}