"use strict";
t.d(s, {
  O4: function() {
    return T
  },
  OA: function() {
    return I
  },
  Wu: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(399606),
  a = t(481060),
  r = t(312913),
  o = t(45966),
  c = t(637853),
  d = t(983135),
  u = t(208665),
  E = t(290511),
  _ = t(689938);

function I(e, s) {
  let t = (0, l.Wu)([u.Z], () => (0, c.kl)(e, s, u.Z.editedOnboardingPrompts));
  return [(0, l.Wu)([u.Z], () => (0, c.kl)(e, s, u.Z.editedOnboardingPrompts, c.V7)), t]
}

function T(e) {
  let s = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
    [t, n] = function(e) {
      let s = (0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e)));
      return [(0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), c.V7)), s]
    }(e);
  return !!s && n.length >= E.md && t.length >= E.X
}

function N(e) {
  let {
    guildId: s,
    className: t
  } = e, c = (0, r.UQ)(s).advancedModeAllowed, u = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(s)), I = i.useCallback(() => {
    let e = u ? E.Un.ONBOARDING_DEFAULT : E.Un.ONBOARDING_ADVANCED;
    u ? (0, a.openModal)(t => (0, n.jsx)(a.ConfirmModal, {
      header: _.Z.Messages.ONBOARDING_DEFAULT_MODE_HEADER,
      confirmText: _.Z.Messages.DISABLE,
      cancelText: _.Z.Messages.CANCEL,
      confirmButtonColor: a.Button.Colors.BRAND,
      onConfirm: () => (0, d.Ts)(s, e),
      ...t,
      children: (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        children: _.Z.Messages.ONBOARDING_DEFAULT_MODE_DESCRIPTION
      })
    })) : (0, a.openModal)(t => (0, n.jsx)(a.ConfirmModal, {
      header: _.Z.Messages.ONBOARDING_ADVANCED_MODE_HEADER,
      confirmText: _.Z.Messages.ONBOARDING_ADVANCED_MODE_ENABLE,
      cancelText: _.Z.Messages.CANCEL,
      confirmButtonColor: a.Button.Colors.BRAND,
      onConfirm: () => (0, d.Ts)(s, e),
      ...t,
      children: (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        children: _.Z.Messages.ONBOARDING_ADVANCED_MODE_DESCRIPTION
      })
    }))
  }, [s, u]);
  return c ? (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsx)(a.Anchor, {
      onClick: I,
      children: (0, n.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: u ? _.Z.Messages.ONBOARDING_DEFAULT_MODE_TOGGLE : _.Z.Messages.ONBOARDING_ADVANCED_MODE_TOGGLE
      })
    })
  }) : null
}