"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var r = n("37983"),
  l = n("884691"),
  a = n("446674"),
  u = n("77078"),
  o = n("133457"),
  d = n("784736"),
  c = n("145131"),
  s = n("9074"),
  i = n("782340"),
  f = n("733676");

function h(e) {
  var t;
  let {
    eulaId: n,
    transitionState: h,
    onClose: p
  } = e, m = (0, a.useStateFromStores)([d.default], () => d.default.getEULA(n));
  l.useEffect(() => {
    (0, o.fetchEULA)(n)
  }, [n]);
  let g = null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : i.default.Messages.LOADING,
    y = null != m ? (0, r.jsx)(s.default, {
      children: m.content,
      className: f.markdown
    }) : (0, r.jsx)(u.Spinner, {
      className: f.spinner
    });
  return (0, r.jsxs)(u.ModalRoot, {
    transitionState: h,
    size: u.ModalSize.SMALL,
    "aria-label": g,
    children: [(0, r.jsxs)(u.ModalHeader, {
      justify: c.default.Justify.BETWEEN,
      children: [(0, r.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: g
      }), (0, r.jsx)(u.ModalCloseButton, {
        onClick: p
      })]
    }), (0, r.jsx)(u.ModalContent, {
      children: y
    })]
  })
}