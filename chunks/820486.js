n.d(t, {
  X: function() {
return A;
  }
});
var i, a = n(392711),
  s = n.n(a),
  r = n(442837),
  l = n(570140),
  o = n(846027),
  c = n(581883),
  d = n(358085),
  u = n(131951),
  _ = n(981631),
  E = n(65154);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = {},
  I = m,
  g = !1,
  p = {},
  T = {},
  S = {},
  f = {
id: null,
justChanged: !1
  },
  C = {
id: null,
justChanged: !1
  },
  N = /\(([^)]+)\)/;

function A(e) {
  if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
let t = e.name.match(N);
if (null != t)
  return t[1];
  }
  return e.name;
}

function v(e, t, n) {
  return null == e || e.displayName !== t ? {
displayName: t,
type: n
  } : e.type === _.QyF.INPUT && n === _.QyF.OUTPUT || e.type === _.QyF.OUTPUT && n === _.QyF.INPUT ? {
displayName: t,
type: _.QyF.INPUT_AND_OUTPUT
  } : e;
}
class Z extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
this.waitFor(u.Z, c.Z), I = null != e ? e : m;
  }
  getUserAgnosticState() {
return I;
  }
  get initialized() {
return g;
  }
  get lastDeviceConnected() {
return S;
  }
  get inputDevices() {
return p;
  }
  get lastInputSystemDevice() {
return f;
  }
  get outputDevices() {
return T;
  }
  get lastOutputSystemDevice() {
return C;
  }
}
h(Z, 'displayName', 'ConnectedDeviceStore'), h(Z, 'persistKey', 'ConnectedDeviceStore'), t.Z = new Z(l.Z, {
  MEDIA_ENGINE_DEVICES: function(e) {
let {
  inputDevices: t,
  outputDevices: n
} = e, i = {};
f.justChanged = !1, t.forEach(e => {
  if (i[A(e)] = e.id, e.id === E.w5) {
    var t;
    let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
    n !== f.id && (f.justChanged = !0), f.id = n;
  }
});
let a = {};
if (C.justChanged = !1, n.forEach(e => {
    if (a[A(e)] = e.id, e.id === E.w5) {
      var t;
      let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
      n !== C.id && (C.justChanged = !0), C.id = n;
    }
  }), !g) {
  p = i, T = a, g = !0;
  return;
}
let r = Object.keys(p),
  l = Object.keys(i),
  o = Object.keys(T),
  c = Object.keys(a),
  d = s().difference(r, l),
  u = s().difference(o, c);
return d.length > 0 || u.length > 0 ? S = {} : (s().difference(l, r).forEach(e => {
  S[e] = v(S[e], e, _.QyF.INPUT);
}), s().difference(c, o).forEach(e => {
  S[e] = v(S[e], e, _.QyF.OUTPUT);
})), !(s().isEqual(r, l) && s().isEqual(o, c)) && (p = i, T = a, !0);
  },
  CONNECTED_DEVICE_SET: function(e) {
let {
  displayName: t,
  connectedDevicePreference: n,
  location: i
} = e;
! function(e, t, n) {
  if (t === _.aVf.INPUT || t === _.aVf.INPUT_AND_OUTPUT) {
    let t = p[e];
    null != t && l.Z.wait(() => o.Z.setInputDevice(t, n));
  }
  if (t === _.aVf.OUTPUT || t === _.aVf.INPUT_AND_OUTPUT) {
    let t = T[e];
    l.Z.wait(() => o.Z.setOutputDevice(t, n));
  }
}(t, n, i), delete S[t];
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
let {
  displayName: t
} = e;
delete S[t];
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
S = {}, I = {
  neverShowModal: !0
};
  }
});