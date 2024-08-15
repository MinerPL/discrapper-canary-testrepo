t.d(a, {
  L: function() {
return c;
  }
});
var n = t(735250);
t(470079);
var r = t(481060),
  s = t(600164),
  o = t(689938),
  l = t(564510);

function c(e) {
  let {
onClose: a,
img: t,
title: c,
body: i,
content: d
  } = e;
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(r.ModalHeader, {
    direction: s.Z.Direction.VERTICAL,
    className: l.header,
    separator: !1,
    children: [
      (0, n.jsx)('div', {
        className: l.illustration,
        children: t
      }),
      (0, n.jsx)(r.Heading, {
        className: l.title,
        variant: 'heading-xl/extrabold',
        children: c
      }),
      (0, n.jsx)(r.ModalCloseButton, {
        className: l.closeButton,
        onClick: a
      })
    ]
  }),
  (0, n.jsxs)(r.ModalContent, {
    className: l.body,
    paddingFix: !1,
    children: [
      (0, n.jsx)(r.Text, {
        tag: 'p',
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: i
      }),
      d
    ]
  }),
  (0, n.jsx)(r.ModalFooter, {
    className: l.footer,
    children: (0, n.jsx)(r.Button, {
      className: l.footerButton,
      color: r.Button.Colors.BRAND,
      onClick: a,
      children: o.Z.Messages.DONE
    })
  })
]
  });
}