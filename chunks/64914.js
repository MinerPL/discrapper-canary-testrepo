s.d(t, {
  Z: function() {
return S;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(401430),
  l = s(921801),
  c = s(695103),
  d = s(998502),
  _ = s(695346),
  E = s(399970),
  u = s(726985),
  T = s(981631),
  I = s(689938);

function S() {
  let [e] = a.useState(() => d.ZP.getEnableHardwareAcceleration()), t = _.bm.useSetting(), s = _.Sb.useSetting(), S = (0, i.e7)([c.Z], () => c.Z.testModeApplicationId), N = a.useCallback(e => {
_.bm.updateSetting(!e);
  }, []), C = a.useCallback(e => {
e ? (0, r.openModal)(e => (0, n.jsx)(E.Z, {
  ...e
})) : o.mc();
  }, []), m = a.useCallback(e => {
(0, r.openModal)(t => (0, n.jsx)(r.ConfirmModal, {
  header: I.Z.Messages.SWITCH_HARDWARE_ACCELERATION,
  confirmText: I.Z.Messages.OKAY,
  cancelText: I.Z.Messages.CANCEL,
  onConfirm: () => d.ZP.setEnableHardwareAcceleration(e),
  ...t,
  children: (0, n.jsx)(r.Text, {
    variant: 'text-sm/normal',
    children: I.Z.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
  })
}));
  }, []);
  return (0, n.jsxs)(r.FormSection, {
tag: r.FormTitleTags.H1,
title: I.Z.Messages.SETTINGS_ADVANCED,
children: [
  (0, n.jsx)(l.F, {
    setting: u.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
    children: (0, n.jsx)(r.FormSwitch, {
      value: s,
      onChange: _.Sb.updateSetting,
      note: I.Z.Messages.DEVELOPER_MODE_HELP_TEXT.format({
        apiDocsUrl: T.EYA.API_DOCS
      }),
      children: I.Z.Messages.DEVELOPER_MODE
    })
  }),
  (0, n.jsx)(l.F, {
    setting: u.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
    children: (0, n.jsx)(r.FormSwitch, {
      value: e,
      onChange: m,
      note: I.Z.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
      children: I.Z.Messages.HARDWARE_ACCELERATION
    })
  }),
  (0, n.jsx)(l.F, {
    setting: u.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
    children: (0, n.jsx)(r.FormSwitch, {
      value: !t,
      onChange: N,
      note: I.Z.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
      children: I.Z.Messages.USER_SETTINGS_SHOW_LIBRARY
    })
  }),
  (0, n.jsx)(l.F, {
    setting: u.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
    children: (0, n.jsx)(r.FormSwitch, {
      value: null != S,
      note: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
      onChange: C,
      children: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE
    })
  })
]
  });
}