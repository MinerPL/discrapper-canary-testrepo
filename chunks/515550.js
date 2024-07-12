n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(230711),
  r = n(100527),
  l = n(906732),
  o = n(170671),
  c = n(981631),
  d = n(921944),
  u = n(689938),
  _ = n(893895);

function h(e) {
  let {
markAsDismissed: t
  } = e, {
analyticsLocations: n
  } = (0, l.ZP)(r.Z.APP_ICON_NEW_STYLES_COACHMARK);
  return (0, i.jsxs)('div', {
className: _.container,
children: [
  (0, i.jsx)('div', {
    className: _.banner
  }),
  (0, i.jsx)(s.Button, {
    'aria-label': u.Z.Messages.CLOSE,
    look: s.Button.Looks.BLANK,
    size: s.Button.Sizes.NONE,
    onClick: () => {
      t(d.L.USER_DISMISS);
    },
    className: _.closeButton,
    children: (0, i.jsx)(s.CloseSmallIcon, {
      size: 'xs',
      className: _.closeIcon,
      color: 'white'
    })
  }),
  (0, i.jsxs)('div', {
    className: _.body,
    children: [
      (0, i.jsx)(s.Heading, {
        variant: 'heading-md/extrabold',
        className: _.text,
        children: u.Z.Messages.APP_ICON_NEW_STYLES_HEADER
      }),
      (0, i.jsxs)('div', {
        className: _.poweredByNitroContainer,
        children: [
          (0, i.jsx)(o.Z, {
            className: _.icon,
            isSelected: !0
          }),
          (0, i.jsx)(s.Text, {
            variant: 'text-xxs/medium',
            className: _.text,
            children: u.Z.Messages.POWERED_BY_NITRO
          })
        ]
      }),
      (0, i.jsx)(s.Text, {
        variant: 'text-sm/medium',
        className: _.text,
        children: u.Z.Messages.APP_ICON_NEW_STYLES_BODY
      })
    ]
  }),
  (0, i.jsx)(s.Button, {
    className: _.cta,
    look: s.Button.Looks.FILLED,
    color: s.Button.Colors.CUSTOM,
    onClick: () => {
      t(d.L.TAKE_ACTION), a.Z.open(c.oAB.APPEARANCE, null, {
        openWithoutBackstack: !0,
        analyticsLocations: n
      });
    },
    children: u.Z.Messages.APP_ICON_NEW_STYLES_CTA
  }),
  (0, i.jsx)('div', {
    className: _.pointer
  })
]
  });
}