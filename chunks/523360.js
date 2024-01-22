"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983"),
  r = n("884691"),
  a = n("446674"),
  u = n("77078"),
  o = n("133457"),
  d = n("784736"),
  c = n("145131"),
  s = n("9074"),
  i = n("782340"),
  f = n("639420");

function h(e) {
  var t;
  let {
    eulaId: n,
    transitionState: h,
    onClose: p
  } = e, m = (0, a.useStateFromStores)([d.default], () => d.default.getEULA(n));
  r.useEffect(() => {
    (0, o.fetchEULA)(n)
  }, [n]);
  let g = null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : i.default.Messages.LOADING,
    y = null != m ? (0, l.jsx)(s.default, {
      children: m.content,
      className: f.markdown
    }) : (0, l.jsx)(u.Spinner, {
      className: f.spinner
    });
  return (0, l.jsxs)(u.ModalRoot, {
    transitionState: h,
    size: u.ModalSize.SMALL,
    "aria-label": g,
    children: [(0, l.jsxs)(u.ModalHeader, {
      justify: c.default.Justify.BETWEEN,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: g
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: p
      })]
    }), (0, l.jsx)(u.ModalContent, {
      children: y
    })]
  })
}