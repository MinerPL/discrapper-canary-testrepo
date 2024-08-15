n.r(s), n.d(s, {
  default: function() {
return M;
  }
}), n(47120);
var o = n(735250),
  c = n(470079),
  r = n(481060),
  t = n(369994),
  a = n(781208),
  S = n(689938),
  _ = n(270877);

function M(e) {
  let {
guildId: s,
transitionState: n,
onClose: M
  } = e, [i, l] = c.useState([]), I = c.useCallback(() => {
(0, t.KK)(s, i), (0, t.C4)(s), M();
  }, [
s,
M,
i
  ]), C = c.useCallback(e => () => {
l(s => s.includes(e) ? s.filter(s => s !== e) : [
  ...s,
  e
]);
  }, []), A = c.useCallback(() => {
open(a.RI);
  }, []);
  return (0, o.jsxs)(r.ModalRoot, {
transitionState: n,
size: r.ModalSize.SMALL,
children: [
  (0, o.jsx)(r.ModalHeader, {
    separator: !1,
    children: (0, o.jsx)(r.Heading, {
      color: 'header-primary',
      variant: 'heading-md/semibold',
      children: S.Z.Messages.GUILD_REPORT_RAID_MODAL_TITLE
    })
  }),
  (0, o.jsxs)(r.ModalContent, {
    children: [
      (0, o.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: S.Z.Messages.GUILD_REPORT_RAID_MODAL_DESCRIPTION_CLICKABLE.format({
          onClick: A
        })
      }),
      (0, o.jsx)('div', {
        className: _.mainCheckboxContainer,
        children: a.Ud.map(e => (0, o.jsxs)(r.Clickable, {
          className: _.checkboxContainer,
          onClick: C(e),
          children: [
            (0, o.jsx)(r.Checkbox, {
              type: r.Checkbox.Types.INVERTED,
              className: _.checkbox,
              value: i.includes(e),
              displayOnly: !0
            }),
            (0, o.jsx)(r.Text, {
              variant: 'text-sm/normal',
              children: (0, a.$l)(e)
            })
          ]
        }, e))
      })
    ]
  }),
  (0, o.jsxs)(r.ModalFooter, {
    children: [
      (0, o.jsx)(r.Button, {
        onClick: I,
        color: r.Button.Colors.BRAND,
        look: r.Button.Looks.FILLED,
        children: S.Z.Messages.SUBMIT
      }),
      (0, o.jsx)(r.Button, {
        onClick: M,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        children: S.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}