e.r(t), e.d(t, {
  default: function() {
return l;
  }
}), e(47120);
var a = e(735250),
  i = e(470079),
  o = e(481060),
  r = e(53365),
  c = e(377176),
  s = e(689938),
  u = e(686485);

function l(n) {
  let {
guildId: t,
transitionState: e,
onClose: l
  } = n, [T, _] = i.useState(!1), [E, N] = i.useState(!1), R = async () => {
_(!0);
try {
  await (0, r.zo)(t), l();
} finally {
  _(!1);
}
  }, A = s.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
  return (0, a.jsxs)(o.ModalRoot, {
className: u.__invalid_container,
size: o.ModalSize.DYNAMIC,
transitionState: e,
'aria-label': A,
children: [
  (0, a.jsxs)(o.ModalContent, {
    className: u.content,
    children: [
      (0, a.jsxs)('div', {
        className: u.header,
        children: [
          (0, a.jsx)(o.CircleExclamationPointIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 20,
            height: 20,
            className: u.warningIcon
          }),
          (0, a.jsx)(o.Spacer, {
            size: 8,
            horizontal: !0
          }),
          (0, a.jsx)(o.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            children: A
          })
        ]
      }),
      (0, a.jsx)(o.Spacer, {
        size: 12
      }),
      (0, a.jsx)(o.Text, {
        variant: 'text-md/normal',
        color: 'text-muted',
        className: u.__invalid_body,
        children: s.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY
      }),
      (0, a.jsx)(o.Spacer, {
        size: 28
      }),
      (0, a.jsx)(o.Checkbox, {
        onChange: () => {
          N(n => !n);
        },
        size: 20,
        type: o.Checkbox.Types.INVERTED,
        value: E,
        children: (0, a.jsx)(o.Text, {
          variant: 'text-md/normal',
          color: 'header-secondary',
          children: (0, c.f)()
        })
      })
    ]
  }),
  (0, a.jsxs)(o.ModalFooter, {
    children: [
      (0, a.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        disabled: !E,
        onClick: R,
        submitting: T,
        children: s.Z.Messages.CONFIRM
      }),
      (0, a.jsx)(o.Spacer, {
        size: 12,
        horizontal: !0
      }),
      (0, a.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.OUTLINED,
        onClick: l,
        children: s.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}