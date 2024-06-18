"use strict";
let i;
n.d(t, {
  E: function() {
    return M
  }
}), n(724458), n(653041), n(47120), n(757143);
var r, s = n(879443),
  o = n.n(s),
  a = n(414861),
  l = n.n(a),
  u = n(348327),
  _ = n.n(u),
  d = n(392711),
  c = n.n(d),
  E = n(442837),
  I = n(570140),
  T = n(714338),
  h = n(710845),
  S = n(658785),
  f = n(131951),
  N = n(626135),
  A = n(358085),
  m = n(998502),
  O = n(13140),
  R = n(808506),
  C = n(981631),
  p = n(356659),
  g = n(710111),
  L = n(444675);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let D = new h.Z("KeybindsStore"),
  M = {
    id: "1000",
    action: C.kg4.TOGGLE_MUTE,
    shortcut: (0, O.Kd)("mod+shift+m"),
    enabled: !0,
    managed: !0,
    params: {}
  },
  P = {},
  y = {},
  U = 0,
  b = !0,
  G = {},
  w = !1,
  k = [C.kg4.PUSH_TO_TALK, C.kg4.TOGGLE_OVERLAY_INPUT_LOCK, C.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

function B() {
  let {
    showKeybindIndicators: e
  } = S.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  null == c().find(y, e => M.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !w && b && e && (H(M), w = !0)
}

function x() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  (w || e) && (Z(M.id), w = !1)
}

function V(e) {
  let {
    showKeybindIndicators: t
  } = e;
  t ? B() : x(!0)
}

function Z(e) {
  if (A.isPlatformEmbedded) m.ZP.inputEventUnregister(parseInt(e, 10));
  else if (P[e]) {
    let t = y[e],
      n = G[t.action];
    (null == n ? void 0 : n.isPressed) === !0 && L.nextTick(() => n.onTrigger(!1, t)), P[e].reset(), P[e] = null
  }
}

function H(e) {
  if (!b || __OVERLAY__) return;
  let {
    shortcut: t,
    action: n,
    enabled: i
  } = e;
  if ("" === t || null == t || n === C.kg4.UNASSIGNED || !i) return;
  if (null == G[n]) {
    D.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
    return
  }
  let r = e.id,
    s = G[n].keyEvents;
  e.action === C.kg4.TOGGLE_MUTE && x(), ! function(e, t, n, i) {
    if (A.isPlatformEmbedded) m.ZP.inputEventRegister(parseInt(e), t, n, i);
    else {
      Z(e);
      let r = l()(new(o())(document));
      i.keyup && r.bindGlobal((0, O.BB)(t), () => n(!1), "keyup"), i.keydown && r.bindGlobal((0, O.BB)(t), () => n(!0), "keydown"), P[e] = r
    }
  }(r, t, e => (function(e, t) {
    let n = e === M.id ? M : y[e];
    null != n && G[n.action].onTrigger(t, n)
  })(r, e), {
    focused: !0,
    blurred: !0,
    keydown: !1,
    keyup: !1,
    ...s
  }), T.Z.validateKeybind((0, O.BB)(e.shortcut))
}

function F(e) {
  let t = {
    id: U.toString(),
    enabled: !0,
    action: C.kg4.UNASSIGNED,
    shortcut: [],
    managed: !1,
    params: {},
    ...e
  };
  return y = {
    ...y,
    [t.id]: t
  }, U += 1, t
}

function Y(e) {
  Z(e.id), y = {
    ...y
  }, delete y[e.id], e.action === C.kg4.TOGGLE_MUTE && B()
}

function j(e) {
  let {
    keybind: t
  } = e;
  y = {
    ...y,
    [t.id]: t
  }, !__OVERLAY__ && (N.default.track(C.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
    keybind_action: t.action,
    keybind_is_bound: !0,
    keybind_has_shortcut: t.shortcut.length > 0
  }), t.action === C.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? N.default.track(C.rMx.OVERLAY_SETTINGS_UPDATED, {
    hotkey: t.action === C.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, O.BB)(t.shortcut) : null
  }) : t.action === C.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && N.default.track(C.rMx.OVERLAY_SETTINGS_UPDATED, {
    text_activation_hotkey: t.action === C.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, O.BB)(t.shortcut) : null
  })), H(t)
}

function W(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return null == c().find(y, t => t.action === e && (!n || t.managed === n)) && (H(F({
    action: e,
    enabled: !0,
    shortcut: (0, O.Kd)(t),
    managed: !0,
    params: {}
  })), !0)
}
let K = [function() {
  let e = f.Z.getShortcuts();
  return c().each(y, t => {
    t.action === C.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && Y(t)
  }), c().reduce(f.Z.getShortcuts(), (e, t, n) => {
    let i = c().find(y, e => e.action === C.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
    if (null == i) H(F({
      action: C.kg4.PUSH_TO_TALK,
      enabled: !0,
      shortcut: t,
      managed: !0,
      params: {},
      context: n
    }));
    else {
      if (null == t) return e || !1;
      j({
        keybind: {
          ...i,
          shortcut: "string" == typeof t ? (0, O.Kd)(t) : t,
          context: n
        }
      })
    }
    return !0
  }, !1)
}, function() {
  return !!R.Z.enabled && W(C.kg4.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
}, function() {
  return !!R.Z.enabled && W(C.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
}, function() {
  return W(C.kg4.SOUNDBOARD_HOLD, g.D_, !1)
}, function() {
  return W(C.kg4.SAVE_CLIP, p.D_)
}];

function z() {
  return B(), K.reduce((e, t) => t() || e, !1)
}
T.Z.setGetKeybindList(() => {
  let e = [];
  for (let t in y) {
    if (!!y.hasOwnProperty(t)) e.push((0, O.BB)(y[t].shortcut))
  }
  let {
    showKeybindIndicators: t
  } = S.Z.getCurrentConfig({
    location: "KeybindsStore"
  });
  return t && e.push((0, O.BB)(M.shortcut)), e
});
class q extends(r = E.ZP.DeviceSettingsStore) {
  initialize(e) {
    !__OVERLAY__ && this.waitFor(f.Z, R.Z), y = null != e ? e : {}
  }
  getUserAgnosticState() {
    return y
  }
  hasKeybind(e, t, n) {
    for (let i in y)
      for (let r of y[i].shortcut)
        if (r[0] === e && r[1] === t && (void 0 === n || n === r[2])) return !0;
    return !1
  }
  hasExactKeybind(e) {
    for (let t in y) {
      let n = y[t];
      if (c().isEqual(n.shortcut, e)) return !0
    }
    return !1
  }
  getKeybindForAction(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      {
        showKeybindIndicators: i
      } = S.Z.getCurrentConfig({
        location: "KeybindsStore"
      }),
      r = c().find(y, i => i.action === e && (!t || i.managed) && (!n || i.shortcut.length > 0 && i.enabled));
    return null != r ? r : i && e === C.kg4.TOGGLE_MUTE ? M : null
  }
  getOverlayKeybind() {
    return this.getKeybindForAction(C.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0)
  }
  getOverlayChatKeybind() {
    return this.getKeybindForAction(C.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
  }
}
v(q, "displayName", "KeybindsStore"), v(q, "persistKey", "keybinds"), v(q, "migrations", [function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      v: t,
      keybinds: n = e
    } = e;
  return c().reduce(n, (e, n, i) => isNaN(parseInt(n.id, 10)) || n.id !== i ? e : ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, O.Kd)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, O.dU)()] : e)), e[i] = n, e), {})
}, e => e, e => {
  let {
    keybinds: t = e
  } = e;
  return c().reduce(t, (e, t, n) => {
    if ((0, A.isLinux)() && t.action === C.kg4.SOUNDBOARD_HOLD) {
      let n = t.shortcut.map(e => e[1]),
        i = (0, O.Kd)("`").map(e => e[1]);
      if (_()(n, i)) return e
    }
    return {
      ...e,
      [n]: t
    }
  }, {})
}, e => {
  let t = {};
  for (let i in e) {
    let r = e[i];
    if (null != r) {
      if (null == r.params || null == r.enabled) {
        var n;
        r = {
          ...r,
          enabled: !1 !== r.enabled,
          params: null !== (n = r.params) && void 0 !== n ? n : {}
        }
      }
      t[i] = r
    }
  }
  return t
}, e => c().reduce(e, (e, t, n) => t.action === C.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : {
  ...e,
  [n]: t
}, {})]), t.Z = new q(I.Z, {
  CONNECTION_OPEN: z,
  AUDIO_SET_MODE: z,
  OVERLAY_SET_ENABLED: z,
  RPC_APP_CONNECTED: z,
  RPC_APP_DISCONNECTED: z,
  KEYBINDS_ADD_KEYBIND: function(e) {
    let {
      keybind: t
    } = e;
    H(F(t))
  },
  KEYBINDS_DELETE_KEYBIND: function(e) {
    let {
      id: t
    } = e, n = y[t];
    !__OVERLAY__ && N.default.track(C.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
      keybind_action: n.action,
      keybind_is_bound: !1,
      keybind_has_shortcut: !1
    }), null != n && Y(n)
  },
  KEYBINDS_SET_KEYBIND: j,
  KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
    let {
      enable: t
    } = e;
    b = t, t ? (T.Z.enable(), c().forEach(y, H), B()) : (T.Z.disable(), c().forEach(y, e => Z(e.id)), x())
  },
  KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
    let {
      keybinds: t
    } = e;
    G = t, P = {}, U = 0, Object.values(y).filter(e => k.includes(e.action) && e.managed).length !== k.length && z(), c().forEach(y, e => {
      U = Math.max(parseInt(e.id, 10), U) + 1;
      try {
        H(e)
      } catch (t) {
        D.error("Failed to register keybind", e, t)
      }
    }), b = !0, null == i && (i = S.Z.subscribe({
      location: "KeybindsStore"
    }, V))
  }
})