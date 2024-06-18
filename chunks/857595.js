"use strict";
n.d(t, {
  Ej: function() {
    return O
  },
  Nc: function() {
    return f
  },
  Nv: function() {
    return v
  },
  Qj: function() {
    return E
  },
  TX: function() {
    return R
  },
  Uv: function() {
    return L
  },
  ZZ: function() {
    return d
  },
  Zt: function() {
    return A
  },
  cq: function() {
    return c
  },
  eN: function() {
    return g
  },
  f1: function() {
    return T
  },
  gs: function() {
    return C
  },
  lq: function() {
    return h
  },
  o2: function() {
    return N
  },
  oL: function() {
    return _
  },
  qz: function() {
    return m
  },
  r_: function() {
    return S
  },
  rf: function() {
    return I
  },
  u1: function() {
    return p
  }
});
var i = n(570140),
  r = n(153867),
  s = n(626135),
  o = n(607070),
  a = n(981631),
  l = n(969943),
  u = n(611480);

function _(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_FONT_SIZE",
    fontSize: e
  })
}

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
    messageGroupSpacing: e
  })
}

function c(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_ZOOM",
    zoom: e
  })
}

function E() {
  i.Z.dispatch({
    type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE"
  }), s.default.track(a.rMx.KEYBOARD_MODE_TOGGLED, {
    enabled: !0
  })
}

function I() {
  i.Z.dispatch({
    type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE"
  }), s.default.track(a.rMx.KEYBOARD_MODE_TOGGLED, {
    enabled: !1
  })
}

function T() {
  i.Z.dispatch({
    type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE"
  })
}

function h() {
  i.Z.dispatch({
    type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE"
  })
}

function S() {
  i.Z.dispatch({
    type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN"
  })
}

function f(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
    systemPrefersReducedMotion: e
  })
}

function N(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_SATURATION",
    saturation: e
  })
}

function A(e) {
  let t = o.Z.useReducedMotion;
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
    prefersReducedMotion: e
  });
  let n = o.Z.useReducedMotion;
  !t && n ? r.ZP.applySettingsOverride({
    gifAutoPlay: {
      value: !1,
      reasonKey: l.mX.REDUCED_MOTION
    },
    animateEmoji: {
      value: !1,
      reasonKey: l.mX.REDUCED_MOTION
    },
    animateStickers: {
      value: u.yr.ANIMATE_ON_INTERACTION,
      reasonKey: l.mX.REDUCED_MOTION_STICKERS
    }
  }) : t && !n && r.ZP.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers")
}

function m(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
    syncForcedColors: e
  })
}

function O(e, t) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
    systemPrefersColorScheme: e,
    systemForcedColors: t
  })
}

function R(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
    systemPrefersContrast: e
  })
}

function C(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
    alwaysShowLinkDecorations: e
  })
}

function p(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_ROLE_STYLE",
    roleStyle: e
  }), s.default.track(a.rMx.ROLE_STYLE_SETTING_UPDATED, {
    role_style: e
  })
}

function g() {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE"
  })
}

function L() {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE"
  })
}

function v(e) {
  i.Z.dispatch({
    type: "ACCESSIBILITY_SET_HIDE_TAGS",
    hideTags: e
  })
}