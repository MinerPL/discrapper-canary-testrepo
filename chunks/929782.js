n.r(t), n.d(t, {
  enable: function() {
return T;
  },
  isNotSupported: function() {
return m;
  },
  trackToggleSelfMute: function() {
return g;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(570140),
  o = n(710845),
  s = n(131951),
  l = n(556296),
  u = n(451478),
  c = n(626135),
  d = n(554174),
  _ = n(981631),
  E = n(761274),
  f = n(689938);
let h = new o.Z('AudioActionCreators');

function p() {
  (0, i.openModalLazy)(async () => {
let {
  default: e
} = await n.e('82935').then(n.bind(n, 431583));
return t => (0, r.jsx)(e, {
  source: 'Unsupported Browser',
  ...t
});
  });
}

function m() {
  return !s.Z.isSupported() && ((0, i.openModal)(e => (0, r.jsx)(i.ConfirmModal, {
header: f.Z.Messages.UNSUPPORTED_BROWSER,
confirmText: f.Z.Messages.DOWNLOAD_APP,
cancelText: f.Z.Messages.CANCEL,
onConfirm: p,
confirmButtonColor: i.Button.Colors.BRAND,
...e,
children: (0, r.jsx)(i.Text, {
  variant: 'text-md/normal',
  children: f.Z.Messages.UNSUPPORTED_BROWSER_DETAILS
})
  })), !0);
}

function I(e) {
  c.default.track(_.rMx.PERMISSIONS_ACKED, {
type: 'audio',
action: e
  });
}

function T() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return m() ? Promise.resolve(!1) : (c.default.track(_.rMx.PERMISSIONS_REQUESTED, {
type: 'audio'
  }), s.Z.getMediaEngine().enable().then(() => {
a.Z.dispatch({
  type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
  enabled: !0,
  unmute: e
}), I(E.PQ.ACCEPTED);
  }, e => {
switch (e) {
  case _.ETv.NO_DEVICES_FOUND:
    I(E.PQ.NO_DEVICES);
    break;
  case _.ETv.PERMISSION_DENIED:
    I(E.PQ.DENIED);
    break;
  case _.ETv.PERMISSION_DISMISSED:
    I(E.PQ.DISMISSED);
    break;
  default:
    I(E.PQ.ERROR), h.warn('unknown getUserMedia error: '.concat(e));
}
  }).then(() => !0));
}

function g(e) {
  let {
usedKeybind: t = !1
  } = e, n = l.Z.getKeybindForAction(_.kg4.TOGGLE_MUTE, !1, !0);
  c.default.track(_.rMx.INPUT_MUTE_TOGGLED, {
enabled: !s.Z.isSelfMute(),
custom_keybind_assigned: null != n && n.id !== l.E.id,
used_keybind: t,
app_in_focus: u.Z.isFocused(),
overlay_activated: null != (0, d.Z)()
  });
}