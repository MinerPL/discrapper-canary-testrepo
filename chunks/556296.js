let r;
n.d(t, {
  E: function() {
return L;
  }
}), n(724458), n(653041), n(47120), n(757143);
var i, a = n(879443),
  o = n.n(a),
  s = n(414861),
  l = n.n(s),
  u = n(348327),
  c = n.n(u),
  d = n(392711),
  _ = n.n(d),
  E = n(442837),
  f = n(570140),
  h = n(714338),
  p = n(710845),
  m = n(658785),
  I = n(131951),
  T = n(626135),
  g = n(358085),
  S = n(998502),
  A = n(13140),
  N = n(808506),
  v = n(981631),
  O = n(356659),
  R = n(710111),
  C = n(444675);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let D = new p.Z('KeybindsStore'),
  L = {
id: '1000',
action: v.kg4.TOGGLE_MUTE,
shortcut: (0, A.Kd)('mod+shift+m'),
enabled: !0,
managed: !0,
params: {}
  },
  b = {},
  M = {},
  P = 0,
  U = !0,
  w = {},
  x = !1,
  G = [
v.kg4.PUSH_TO_TALK,
v.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET
  ];

function k() {
  let {
showKeybindIndicators: e
  } = m.Z.getCurrentConfig({
location: 'KeybindsStore'
  });
  null == _().find(M, e => L.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !x && U && e && (H(L), x = !0);
}

function B() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  (x || e) && (V(L.id), x = !1);
}

function F(e) {
  let {
showKeybindIndicators: t
  } = e;
  t ? k() : B(!0);
}

function V(e) {
  if (g.isPlatformEmbedded)
S.ZP.inputEventUnregister(parseInt(e, 10));
  else if (b[e]) {
let t = M[e],
  n = w[t.action];
(null == n ? void 0 : n.isPressed) === !0 && C.nextTick(() => n.onTrigger(!1, t)), b[e].reset(), b[e] = null;
  }
}

function H(e) {
  if (!U || __OVERLAY__)
return;
  let {
shortcut: t,
action: n,
enabled: r
  } = e;
  if ('' === t || null == t || n === v.kg4.UNASSIGNED || !r)
return;
  if (null == w[n]) {
D.error('[kb store] KeybindStore: Looking for callback action '.concat(n, ' but it doesn\'t exist in this version. Skipping'));
return;
  }
  let i = e.id,
a = w[n].keyEvents;
  e.action === v.kg4.TOGGLE_MUTE && B(), ! function(e, t, n, r) {
if (g.isPlatformEmbedded)
  S.ZP.inputEventRegister(parseInt(e), t, n, r);
else {
  V(e);
  let i = l()(new(o())(document));
  r.keyup && i.bindGlobal((0, A.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, A.BB)(t), () => n(!0), 'keydown'), b[e] = i;
}
  }(i, t, e => function(e, t) {
let n = e === L.id ? L : M[e];
null != n && w[n.action].onTrigger(t, n);
  }(i, e), {
focused: !0,
blurred: !0,
keydown: !1,
keyup: !1,
...a
  }), h.Z.validateKeybind((0, A.BB)(e.shortcut));
}

function Z(e) {
  let t = {
id: P.toString(),
enabled: !0,
action: v.kg4.UNASSIGNED,
shortcut: [],
managed: !1,
params: {},
...e
  };
  return M = {
...M,
[t.id]: t
  }, P += 1, t;
}

function Y(e) {
  V(e.id), M = {
...M
  }, delete M[e.id], e.action === v.kg4.TOGGLE_MUTE && k();
}

function j(e) {
  let {
keybind: t
  } = e;
  M = {
...M,
[t.id]: t
  }, !__OVERLAY__ && (T.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
keybind_action: t.action,
keybind_is_bound: !0,
keybind_has_shortcut: t.shortcut.length > 0
  }), t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? T.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
hotkey: t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, A.BB)(t.shortcut) : null
  }) : t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && T.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
text_activation_hotkey: t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, A.BB)(t.shortcut) : null
  })), H(t);
}

function W(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return null == _().find(M, t => t.action === e && (!n || t.managed === n)) && (H(Z({
action: e,
enabled: !0,
shortcut: (0, A.Kd)(t),
managed: !0,
params: {}
  })), !0);
}
let K = [
  function() {
let e = I.Z.getShortcuts();
return _().each(M, t => {
  t.action === v.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && Y(t);
}), _().reduce(I.Z.getShortcuts(), (e, t, n) => {
  let r = _().find(M, e => e.action === v.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
  if (null == r)
    H(Z({
      action: v.kg4.PUSH_TO_TALK,
      enabled: !0,
      shortcut: t,
      managed: !0,
      params: {},
      context: n
    }));
  else {
    if (null == t)
      return e || !1;
    j({
      keybind: {
        ...r,
        shortcut: 'string' == typeof t ? (0, A.Kd)(t) : t,
        context: n
      }
    });
  }
  return !0;
}, !1);
  },
  function() {
return !!N.Z.enabled && W(v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
  },
  function() {
return !!N.Z.enabled && W(v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
  },
  function() {
return W(v.kg4.SOUNDBOARD_HOLD, R.D_, !1);
  },
  function() {
return W(v.kg4.SAVE_CLIP, O.D_);
  }
];

function z() {
  return k(), K.reduce((e, t) => t() || e, !1);
}
h.Z.setGetKeybindList(() => {
  let e = [];
  for (let t in M) {
if (!!M.hasOwnProperty(t))
  e.push((0, A.BB)(M[t].shortcut));
  }
  let {
showKeybindIndicators: t
  } = m.Z.getCurrentConfig({
location: 'KeybindsStore'
  });
  return t && e.push((0, A.BB)(L.shortcut)), e;
});
class q extends(i = E.ZP.DeviceSettingsStore) {
  initialize(e) {
!__OVERLAY__ && this.waitFor(I.Z, N.Z), M = null != e ? e : {};
  }
  getUserAgnosticState() {
return M;
  }
  hasKeybind(e, t, n) {
for (let r in M)
  for (let i of M[r].shortcut)
    if (i[0] === e && i[1] === t && (void 0 === n || n === i[2]))
      return !0;
return !1;
  }
  hasExactKeybind(e) {
for (let t in M) {
  let n = M[t];
  if (_().isEqual(n.shortcut, e))
    return !0;
}
return !1;
  }
  getKeybindForAction(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  {
    showKeybindIndicators: r
  } = m.Z.getCurrentConfig({
    location: 'KeybindsStore'
  }),
  i = _().find(M, r => r.action === e && (!t || r.managed) && (!n || r.shortcut.length > 0 && r.enabled));
return null != i ? i : r && e === v.kg4.TOGGLE_MUTE ? L : null;
  }
  getOverlayKeybind() {
return this.getKeybindForAction(v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
  }
  getOverlayChatKeybind() {
return this.getKeybindForAction(v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
  }
}
y(q, 'displayName', 'KeybindsStore'), y(q, 'persistKey', 'keybinds'), y(q, 'migrations', [
  function() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
  {
    v: t,
    keybinds: n = e
  } = e;
return _().reduce(n, (e, n, r) => isNaN(parseInt(n.id, 10)) || n.id !== r ? e : ((null == t || t < 2) && ('string' == typeof n.shortcut ? (n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down'), n.shortcut = (0, A.Kd)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [
  ...e,
  (0, A.dU)()
] : e)), e[r] = n, e), {});
  },
  e => e,
  e => {
let {
  keybinds: t = e
} = e;
return _().reduce(t, (e, t, n) => {
  if ((0, g.isLinux)() && t.action === v.kg4.SOUNDBOARD_HOLD) {
    let n = t.shortcut.map(e => e[1]),
      r = (0, A.Kd)('`').map(e => e[1]);
    if (c()(n, r))
      return e;
  }
  return {
    ...e,
    [n]: t
  };
}, {});
  },
  e => {
let t = {};
for (let r in e) {
  let i = e[r];
  if (null != i) {
    if (null == i.params || null == i.enabled) {
      var n;
      i = {
        ...i,
        enabled: !1 !== i.enabled,
        params: null !== (n = i.params) && void 0 !== n ? n : {}
      };
    }
    t[r] = i;
  }
}
return t;
  },
  e => _().reduce(e, (e, t, n) => t.action === v.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : {
...e,
[n]: t
  }, {})
]), t.Z = new q(f.Z, {
  CONNECTION_OPEN: z,
  AUDIO_SET_MODE: z,
  OVERLAY_SET_ENABLED: z,
  RPC_APP_CONNECTED: z,
  RPC_APP_DISCONNECTED: z,
  KEYBINDS_ADD_KEYBIND: function(e) {
let {
  keybind: t
} = e;
H(Z(t));
  },
  KEYBINDS_DELETE_KEYBIND: function(e) {
let {
  id: t
} = e, n = M[t];
!__OVERLAY__ && T.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
  keybind_action: n.action,
  keybind_is_bound: !1,
  keybind_has_shortcut: !1
}), null != n && Y(n);
  },
  KEYBINDS_SET_KEYBIND: j,
  KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
let {
  enable: t
} = e;
U = t, t ? (h.Z.enable(), _().forEach(M, H), k()) : (h.Z.disable(), _().forEach(M, e => V(e.id)), B());
  },
  KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
let {
  keybinds: t
} = e;
w = t, b = {}, P = 0, Object.values(M).filter(e => G.includes(e.action) && e.managed).length !== G.length && z(), _().forEach(M, e => {
  P = Math.max(parseInt(e.id, 10), P) + 1;
  try {
    H(e);
  } catch (t) {
    D.error('Failed to register keybind', e, t);
  }
}), U = !0, null == r && (r = m.Z.subscribe({
  location: 'KeybindsStore'
}, F));
  }
});