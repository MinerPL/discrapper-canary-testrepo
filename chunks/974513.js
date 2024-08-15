n.d(t, {
  O4: function() {
return T;
  },
  OA: function() {
return E;
  },
  Wu: function() {
return m;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(399606),
  r = n(481060),
  l = n(312913),
  o = n(45966),
  c = n(637853),
  d = n(983135),
  u = n(208665),
  _ = n(290511),
  I = n(689938);

function E(e, t) {
  let n = (0, i.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts));
  return [
(0, i.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts, c.V7)),
n
  ];
}

function T(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
[n, s] = function(e) {
  let t = (0, i.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e)));
  return [
    (0, i.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), c.V7)),
    t
  ];
}(e);
  return !!t && s.length >= _.md && n.length >= _.X;
}

function m(e) {
  let {
guildId: t,
className: n
  } = e, c = (0, l.UQ)(t).advancedModeAllowed, u = (0, i.e7)([o.Z], () => o.Z.isAdvancedMode(t)), E = a.useCallback(() => {
let e = u ? _.Un.ONBOARDING_DEFAULT : _.Un.ONBOARDING_ADVANCED;
u ? (0, r.openModal)(n => (0, s.jsx)(r.ConfirmModal, {
  header: I.Z.Messages.ONBOARDING_DEFAULT_MODE_HEADER,
  confirmText: I.Z.Messages.DISABLE,
  cancelText: I.Z.Messages.CANCEL,
  confirmButtonColor: r.Button.Colors.BRAND,
  onConfirm: () => (0, d.Ts)(t, e),
  ...n,
  children: (0, s.jsx)(r.Text, {
    variant: 'text-md/normal',
    children: I.Z.Messages.ONBOARDING_DEFAULT_MODE_DESCRIPTION
  })
})) : (0, r.openModal)(n => (0, s.jsx)(r.ConfirmModal, {
  header: I.Z.Messages.ONBOARDING_ADVANCED_MODE_HEADER,
  confirmText: I.Z.Messages.ONBOARDING_ADVANCED_MODE_ENABLE,
  cancelText: I.Z.Messages.CANCEL,
  confirmButtonColor: r.Button.Colors.BRAND,
  onConfirm: () => (0, d.Ts)(t, e),
  ...n,
  children: (0, s.jsx)(r.Text, {
    variant: 'text-md/normal',
    children: I.Z.Messages.ONBOARDING_ADVANCED_MODE_DESCRIPTION
  })
}));
  }, [
t,
u
  ]);
  return c ? (0, s.jsx)('div', {
className: n,
children: (0, s.jsx)(r.Anchor, {
  onClick: E,
  children: (0, s.jsx)(r.Text, {
    variant: 'text-sm/medium',
    color: 'text-link',
    children: u ? I.Z.Messages.ONBOARDING_DEFAULT_MODE_TOGGLE : I.Z.Messages.ONBOARDING_ADVANCED_MODE_TOGGLE
  })
})
  }) : null;
}