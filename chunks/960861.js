n.d(t, {
  UB: function() {
return L;
  },
  Uc: function() {
return l;
  }
});
var i, a, s, r, l, o, c = n(470079),
  d = n(442837),
  u = n(570140),
  _ = n(872810),
  h = n(998594),
  E = n(592125),
  I = n(430824),
  m = n(131951),
  g = n(496675),
  p = n(944486),
  T = n(382182),
  S = n(74299),
  f = n(65154);
(i = l || (l = {}))[i.Present = 0] = 'Present', i[i.Update = 1] = 'Update', i[i.Cancel = 2] = 'Cancel', i[i.Error = 3] = 'Error';
let C = 0,
  N = {};

function A() {
  return m.Z.supports(f.AN.NATIVE_SCREENSHARE_PICKER);
}

function v() {
  return A() && h.Z.getCurrentConfig({
location: 'NativeScreenSharePickerStore_enabled'
  }, {
autoTrackExposure: !1
  }).enableSystemPicker;
}

function Z() {
  var e, t;
  null === (t = m.Z.getMediaEngine()) || void 0 === t || null === (e = t.releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t);
}

function L() {
  return (0, c.useEffect)(() => (C++, () => {
0 == --C && Z();
  }), []);
}

function O(e) {
  if (v()) {
var t, n;
Z();
let i = E.Z.getChannel(e),
  a = null != i && (0, S.Z)(m.Z) && (0, T.JL)(i, I.Z, g.Z, !1);
null === (n = m.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, a);
  }
}

function R() {
  Z(), O(p.Z.getVoiceChannelId());
}
class x extends(o = d.ZP.Store) {
  initialize() {
this.syncWith([
  m.Z,
  p.Z,
  E.Z,
  I.Z,
  g.Z
], R), h.Z.subscribe({
  location: 'NativeScreenSharePickerStore_initialize'
}, R);
  }
  supported() {
return A();
  }
  enabled() {
return v();
  }
  presentPicker(e) {
var t, n;
N = {
  lastPickerAction: 0
}, null === (n = m.Z.getMediaEngine()) || void 0 === n || null === (t = n.presentNativeScreenSharePicker) || void 0 === t || t.call(n, e);
  }
  releasePickerStream() {
Z();
  }
  getPickerState() {
return N;
  }
}
r = 'NativeScreenSharePickerStore', (s = 'displayName') in(a = x) ? Object.defineProperty(a, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = r;
t.ZP = new x(u.Z, {
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: function(e) {
let {
  existing: t
} = e;
if (N = {
    lastPickerAction: 1
  }, 0 === C && !t) {
  let e = E.Z.getChannel(p.Z.getVoiceChannelId());
  null != e && (0, S.Z)(m.Z) && (0, T.JL)(e, I.Z, g.Z, !1) && (0, _.WH)(e.getGuildId(), e.id, {
    sourceId: 'prepicked:0'
  });
}
  },
  NATIVE_SCREEN_SHARE_PICKER_CANCEL: function(e) {
let {} = e;
N = {
  lastPickerAction: 2
};
  },
  NATIVE_SCREEN_SHARE_PICKER_ERROR: function(e) {
let {
  error: t
} = e;
N = {
  lastPickerAction: 3,
  lastPickerError: t
};
  },
  VOICE_CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
O(t);
  }
});