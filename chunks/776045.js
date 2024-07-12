t.r(A), t.d(A, {
  IconVariant: function() {
return n;
  },
  default: function() {
return d;
  }
}), t(47120);
var n, a, r = t(735250),
  s = t(470079),
  o = t(481060),
  l = t(689938),
  i = t(547102);
(a = n || (n = {})).DANGER = 'danger', a.WARNING = 'warning';

function d(e) {
  let {
transitionState: A,
onClose: t,
title: n,
body: a,
cta: d,
closeLabel: c,
onConfirm: u,
iconVariant: C = 'warning'
  } = e, [g, T] = s.useState(!1), p = async () => {
T(!0);
try {
  await u(), t();
} finally {
  T(!1);
}
  }, h = null != n ? n : l.Z.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, r.jsxs)(o.ModalRoot, {
className: i.__invalid_container,
size: o.ModalSize.DYNAMIC,
transitionState: A,
'aria-label': h,
children: [
  (0, r.jsxs)(o.ModalContent, {
    className: i.content,
    children: [
      (0, r.jsxs)('div', {
        className: i.header,
        children: [
          (0, r.jsx)(o.CircleExclamationPointIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 20,
            height: 20,
            className: function(e) {
              switch (e) {
                case 'danger':
                  return i.dangerIcon;
                case 'warning':
                  return i.warningIcon;
              }
            }(C)
          }),
          (0, r.jsx)(o.Spacer, {
            size: 8,
            horizontal: !0
          }),
          (0, r.jsx)(o.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            children: h
          })
        ]
      }),
      (0, r.jsx)(o.Spacer, {
        size: 12
      }),
      (0, r.jsx)(o.Text, {
        variant: 'text-md/normal',
        color: 'text-muted',
        className: i.__invalid_body,
        children: a
      })
    ]
  }),
  (0, r.jsxs)(o.ModalFooter, {
    children: [
      (0, r.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        onClick: p,
        submitting: g,
        children: d
      }),
      (0, r.jsx)(o.Spacer, {
        size: 12,
        horizontal: !0
      }),
      null != c && (0, r.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.OUTLINED,
        onClick: t,
        children: c
      })
    ]
  })
]
  });
}