t.r(n), t.d(n, {
  default: function() {
return f;
  }
});
var r = t(735250),
  l = t(470079),
  a = t(442837),
  o = t(481060),
  c = t(668274),
  i = t(241209),
  s = t(807693),
  u = t(285952),
  d = t(689938),
  h = t(559318);

function f(e) {
  var n;
  let {
eulaId: t,
transitionState: f,
onClose: p
  } = e, g = (0, a.e7)([s.Z], () => s.Z.getEULA(t));
  l.useEffect(() => {
(0, c.N)(t);
  }, [t]);
  let m = null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : d.Z.Messages.LOADING,
b = null != g ? (0, r.jsx)(i.Z, {
  children: g.content,
  className: h.markdown
}) : (0, r.jsx)(o.Spinner, {
  className: h.spinner
});
  return (0, r.jsxs)(o.ModalRoot, {
transitionState: f,
size: o.ModalSize.SMALL,
'aria-label': m,
children: [
  (0, r.jsxs)(o.ModalHeader, {
    justify: u.Z.Justify.BETWEEN,
    children: [
      (0, r.jsx)(o.Heading, {
        variant: 'heading-lg/semibold',
        children: m
      }),
      (0, r.jsx)(o.ModalCloseButton, {
        onClick: p
      })
    ]
  }),
  (0, r.jsx)(o.ModalContent, {
    children: b
  })
]
  });
}