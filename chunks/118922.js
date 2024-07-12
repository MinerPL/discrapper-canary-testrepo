t.r(e), t.d(e, {
  IconVariant: function() {
return o;
  },
  default: function() {
return d;
  }
}), t(47120);
var o, r, a = t(735250),
  i = t(470079),
  c = t(481060),
  s = t(689938),
  l = t(183935);
(r = o || (o = {})).DANGER = 'danger', r.WARNING = 'warning';

function d(n) {
  let {
transitionState: e,
onClose: t,
title: o,
body: r,
cta: d,
closeLabel: u,
onConfirm: h,
iconVariant: x = 'warning'
  } = n, [g, I] = i.useState(!1), f = null != o ? o : s.Z.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE;
  return (0, a.jsxs)(c.ModalRoot, {
size: c.ModalSize.DYNAMIC,
transitionState: e,
'aria-label': f,
children: [
  (0, a.jsxs)(c.ModalContent, {
    className: l.content,
    children: [
      (0, a.jsxs)('div', {
        className: l.header,
        children: [
          (0, a.jsx)(c.CircleExclamationPointIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 20,
            height: 20,
            className: function(n) {
              switch (n) {
                case 'danger':
                  return l.dangerIcon;
                case 'warning':
                  return l.warningIcon;
              }
            }(x)
          }),
          (0, a.jsx)(c.Spacer, {
            size: 8,
            horizontal: !0
          }),
          (0, a.jsx)(c.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            children: f
          })
        ]
      }),
      (0, a.jsx)(c.Spacer, {
        size: 12
      }),
      (0, a.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'text-muted',
        children: r
      })
    ]
  }),
  (0, a.jsxs)(c.ModalFooter, {
    children: [
      (0, a.jsx)(c.Button, {
        color: c.Button.Colors.BRAND,
        onClick: () => {
          I(!0);
          try {
            h(), t();
          } finally {
            I(!1);
          }
        },
        submitting: g,
        children: d
      }),
      (0, a.jsx)(c.Spacer, {
        size: 12,
        horizontal: !0
      }),
      null != u && (0, a.jsx)(c.Button, {
        color: c.Button.Colors.PRIMARY,
        look: c.Button.Looks.OUTLINED,
        onClick: t,
        children: u
      })
    ]
  })
]
  });
}