n.d(t, {
  Z: function() {
return o;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  l = n(702804);

function o(e) {
  let {
message: t,
error: n,
onClick: a,
submitting: o,
className: c,
ctaMessage: d
  } = e;
  return (0, s.jsxs)('div', {
className: r()(l.container, c),
children: [
  (0, s.jsxs)('div', {
    className: l.textContainer,
    children: [
      (0, s.jsx)(i.CircleWarningIcon, {
        size: 'custom',
        width: 20,
        height: 20,
        color: 'currentColor',
        className: l.warningIcon
      }),
      (0, s.jsx)(i.Spacer, {
        size: 10,
        horizontal: !0
      }),
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(i.Spacer, {
            size: 1
          }),
          (0, s.jsx)(i.Text, {
            className: l.info,
            variant: 'text-sm/normal',
            children: t
          }),
          null != n && (0, s.jsx)(i.Text, {
            className: r()(l.info, l.error),
            variant: 'text-sm/normal',
            children: n
          })
        ]
      })
    ]
  }),
  (0, s.jsx)(i.Spacer, {
    size: 16,
    horizontal: !0
  }),
  (0, s.jsx)(i.Button, {
    className: l.undoButton,
    color: i.Button.Colors.LINK,
    look: i.Button.Looks.LINK,
    size: i.Button.Sizes.ICON,
    onClick: a,
    submitting: o,
    children: d
  })
]
  });
}