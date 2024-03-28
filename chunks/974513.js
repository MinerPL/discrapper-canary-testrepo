"use strict";
s.r(t), s.d(t, {
  AdvancedModeToggle: function() {
    return S
  },
  useAdvancedModeReady: function() {
    return T
  },
  useEditedChattableDefaultChannelsWithQuestions: function() {
    return I
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("399606"),
  i = s("481060"),
  r = s("312913"),
  o = s("45966"),
  d = s("637853"),
  u = s("983135"),
  c = s("208665"),
  E = s("290511"),
  _ = s("689938");

function I(e, t) {
  let s = (0, n.useStateFromStoresArray)([c.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, t, c.default.editedOnboardingPrompts));
  return [(0, n.useStateFromStoresArray)([c.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, t, c.default.editedOnboardingPrompts, d.isChattableChannelId)), s]
}

function T(e) {
  let t = (0, n.useStateFromStores)([o.default], () => o.default.isAdvancedMode(e)),
    [s, a] = function(e) {
      let t = (0, n.useStateFromStoresArray)([o.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, o.default.getDefaultChannelIds(e), o.default.getOnboardingPrompts(e)));
      return [(0, n.useStateFromStoresArray)([o.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, o.default.getDefaultChannelIds(e), o.default.getOnboardingPrompts(e), d.isChattableChannelId)), t]
    }(e);
  return !!t && a.length >= E.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING && s.length >= E.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
}

function S(e) {
  let {
    guildId: t,
    className: s
  } = e, d = (0, r.useAdvancedModeExperiment)(t).advancedModeAllowed, c = (0, n.useStateFromStores)([o.default], () => o.default.isAdvancedMode(t)), I = l.useCallback(() => {
    let e = c ? E.GuildOnboardingMode.ONBOARDING_DEFAULT : E.GuildOnboardingMode.ONBOARDING_ADVANCED;
    c ? (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
      header: _.default.Messages.ONBOARDING_DEFAULT_MODE_HEADER,
      confirmText: _.default.Messages.DISABLE,
      cancelText: _.default.Messages.CANCEL,
      confirmButtonColor: i.Button.Colors.BRAND,
      onConfirm: () => (0, u.toggleAdvancedSettings)(t, e),
      ...s,
      children: (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: _.default.Messages.ONBOARDING_DEFAULT_MODE_DESCRIPTION
      })
    })) : (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
      header: _.default.Messages.ONBOARDING_ADVANCED_MODE_HEADER,
      confirmText: _.default.Messages.ONBOARDING_ADVANCED_MODE_ENABLE,
      cancelText: _.default.Messages.CANCEL,
      confirmButtonColor: i.Button.Colors.BRAND,
      onConfirm: () => (0, u.toggleAdvancedSettings)(t, e),
      ...s,
      children: (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: _.default.Messages.ONBOARDING_ADVANCED_MODE_DESCRIPTION
      })
    }))
  }, [t, c]);
  return d ? (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsx)(i.Anchor, {
      onClick: I,
      children: (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: c ? _.default.Messages.ONBOARDING_DEFAULT_MODE_TOGGLE : _.default.Messages.ONBOARDING_ADVANCED_MODE_TOGGLE
      })
    })
  }) : null
}