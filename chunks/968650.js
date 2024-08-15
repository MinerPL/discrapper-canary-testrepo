n.r(i);
var t = n(735250);
n(470079);
var d = n(481060);
i.default = e => {
  let {
entry: i,
transitionState: n,
requestId: r
  } = e;
  return (0, t.jsxs)(d.ModalRoot, {
size: d.ModalSize.DYNAMIC,
transitionState: n,
children: [
  (0, t.jsx)(d.ModalHeader, {
    children: (0, t.jsx)(d.Heading, {
      variant: 'heading-md/semibold',
      children: 'Debugging entry: '.concat(i.id)
    })
  }),
  (0, t.jsx)(d.ModalContent, {
    children: (0, t.jsx)('div', {
      style: {
        userSelect: 'text',
        padding: '16px'
      },
      children: (0, t.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: (0, t.jsx)('pre', {
          children: JSON.stringify({
            entry: i,
            requestId: r
          }, null, 2)
        })
      })
    })
  })
]
  });
};