n.d(t, {
  W: function() {
return c;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(481060),
  s = n(689938),
  r = n(381881),
  o = n(560580);

function c(e) {
  let {
header: t,
description: n,
onDismiss: c,
buttons: d,
dismissible: u = !0
  } = e, h = a.useCallback(() => {
null == c || c();
  }, [c]);
  return (0, i.jsxs)('div', {
className: r.safetyBanner,
children: [
  (0, i.jsxs)('div', {
    className: r.shieldAndHeading,
    children: [
      (0, i.jsx)('img', {
        className: r.safetyShieldIcon,
        src: o,
        alt: ''
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(l.Heading, {
            variant: 'heading-md/semibold',
            color: 'text-primary',
            children: t
          }),
          (0, i.jsx)(l.Text, {
            variant: 'text-sm/normal',
            color: 'text-primary',
            children: n
          })
        ]
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: r.buttons,
    children: null == d ? void 0 : d.map((e, t) => {
      var n;
      return (0, i.jsx)(l.Button, {
        size: null !== (n = e.size) && void 0 !== n ? n : l.Button.Sizes.SMALL,
        color: e.color,
        'aria-label': e.text,
        onClick: e.onclick,
        className: r.ctaButton,
        children: e.text
      }, t);
    })
  }),
  u ? (0, i.jsx)(l.Clickable, {
    className: r.closeButton,
    onClick: h,
    role: 'button',
    'aria-label': s.Z.Messages.DISMISS,
    children: (0, i.jsx)(l.CloseSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: r.closeButton
    })
  }) : null
]
  });
}