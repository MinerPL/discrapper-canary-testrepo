var n = s(570140),
  a = s(352954),
  i = s(689938);

function r(e) {
  n.Z.dispatch({
type: 'SECURE_FRAMES_SETTINGS_UPDATE',
persistentCodesEnabled: e
  });
}
t.Z = {
  updateSettings: function(e) {
let {
  persistentCodesEnabled: t
} = e;
if (t) {
  r(t);
  return;
}
a.Z.openSecureFramesUpdateConfirmation({
  title: i.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
  subtitle: i.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
  onConfirm: () => {
    r(t);
  }
});
  }
};