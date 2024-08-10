l.d(t, {
  Z: function() {
return h;
  }
});
var n = l(735250),
  a = l(470079),
  o = l(498607),
  s = l.n(o),
  i = l(399606),
  r = l(481060),
  C = l(203893),
  c = l(910693),
  d = l(893966),
  u = l(527379),
  m = l(981631),
  _ = l(689938),
  E = l(368187);

function h(e) {
  let {
guildId: t,
onClose: l
  } = e, o = (0, i.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], s()), h = (0, c.dW)(t), M = a.useCallback(() => {
!o.requireUnusualDmActivity && h(c.aY.UNUSUAL_DM_ACTIVITY), (0, u.Dr)(t, {
  ...o,
  requireUnusualDmActivity: !o.requireUnusualDmActivity
});
  }, [
t,
o,
h
  ]), x = a.useCallback(() => {
!o.requireCommunicationDisabled && h(c.aY.COMMUNICATION_DISABLED), (0, u.Dr)(t, {
  ...o,
  requireCommunicationDisabled: !o.requireCommunicationDisabled
});
  }, [
t,
o,
h
  ]), b = a.useCallback(() => {
!o.requireUnusualAccountActivity && h(c.aY.UNUSUAL_ACCOUNT_ACTIVITY), (0, u.Dr)(t, {
  ...o,
  requireUnusualAccountActivity: !o.requireUnusualAccountActivity
});
  }, [
t,
o,
h
  ]), T = a.useCallback(() => {
!o.requireUsernameQuarantined && h(c.aY.USERNAME_QUARANTINED), (0, u.Dr)(t, {
  ...o,
  requireUsernameQuarantined: !o.requireUsernameQuarantined
});
  }, [
t,
o,
h
  ]);
  return (0, n.jsx)(r.Menu, {
navId: 'member-safety-flags',
onClose: l,
'aria-label': _.Z.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
onSelect: m.dG4,
children: (0, n.jsxs)(r.MenuGroup, {
  children: [
    (0, n.jsx)(r.MenuCheckboxItem, {
      id: 'toggle-require-unusual-dm-activity',
      label: (0, n.jsxs)('div', {
        className: E.checkboxLabel,
        children: [
          (0, n.jsx)(r.ChatWarningIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: E.unusualDMLabelIcon
          }),
          _.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY
        ]
      }),
      action: M,
      checked: o.requireUnusualDmActivity
    }),
    (0, n.jsx)(r.MenuCheckboxItem, {
      id: 'toggle-require-communication-disabled',
      label: (0, n.jsxs)('div', {
        className: E.checkboxLabel,
        children: [
          (0, n.jsx)(r.ClockWarningIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: E.timeoutLabelIcon
          }),
          _.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED
        ]
      }),
      action: x,
      checked: o.requireCommunicationDisabled
    }),
    (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(r.MenuCheckboxItem, {
          id: 'toggle-require-unusual-account-activity',
          label: (0, n.jsxs)('div', {
            className: E.checkboxLabel,
            children: [
              (0, n.jsx)(C.Z, {
                width: 16,
                height: 16,
                className: E.unusualAccountActivityLabelIcon
              }),
              _.Z.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY
            ]
          }),
          action: b,
          checked: o.requireUnusualAccountActivity
        }),
        (0, n.jsx)(r.MenuCheckboxItem, {
          id: 'toggle-require-username-quarantined',
          label: (0, n.jsxs)('div', {
            className: E.checkboxLabel,
            children: [
              (0, n.jsx)(r.ChatXIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 16,
                height: 16,
                className: E.quarantinedLabelIcon
              }),
              _.Z.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED
            ]
          }),
          action: T,
          checked: o.requireUsernameQuarantined
        })
      ]
    })
  ]
})
  });
}