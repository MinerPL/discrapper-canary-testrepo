n.d(t, {
  oW: function() {
return f;
  },
  p: function() {
return E;
  }
});
var r = n(381499),
  i = n(668781),
  a = n(246133),
  s = n(695346),
  o = n(675478),
  l = n(885110),
  u = n(626135),
  c = n(621600),
  d = n(981631),
  _ = n(689938);

function E() {
  let e = s.QZ.useSetting(),
t = s.fv.useSetting();
  return e && ('0' === t || new Date(Number(t)).getTime() - new Date().getTime() > 0);
}

function f(e, t) {
  let n = s.QZ.getSetting();
  o.hW.updateAsync('notifications', n => {
n.quietMode = r.D5.create({
  value: e
}), n.focusModeExpiresAtMs = e && null != t ? ''.concat(Date.now() + t) : '0';
  }, o.fy.INFREQUENT_USER_ACTION), u.default.track(d.rMx.NOTIFICATION_SETTINGS_UPDATED, {
update_type: c.Ib.ACCOUNT,
quiet_mode_enabled: e,
quiet_mode_enabled_old: n
  }), l.Z.getStatus() === d.Skl.DND && e && null == t && i.Z.show({
title: _.Z.Messages.QUIET_MODE_WHILE_DND_UPSELL_TITLE,
body: _.Z.Messages.QUIET_MODE_WHILE_DND_UPSELL_BODY,
cancelText: _.Z.Messages.NO_THANKS,
confirmText: _.Z.Messages.OKAY,
onConfirm: () => {
  (0, a.Z)(d.Skl.ONLINE);
}
  });
}