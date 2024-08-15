n.d(t, {
  Ej: function() {
return A;
  },
  Nc: function() {
return I;
  },
  Nv: function() {
return y;
  },
  Qj: function() {
return E;
  },
  TX: function() {
return N;
  },
  Uv: function() {
return C;
  },
  ZZ: function() {
return d;
  },
  Zt: function() {
return g;
  },
  cq: function() {
return _;
  },
  eN: function() {
return R;
  },
  f1: function() {
return h;
  },
  gs: function() {
return v;
  },
  lq: function() {
return p;
  },
  o2: function() {
return T;
  },
  oL: function() {
return c;
  },
  qz: function() {
return S;
  },
  r_: function() {
return m;
  },
  rf: function() {
return f;
  },
  u1: function() {
return O;
  }
});
var r = n(570140),
  i = n(153867),
  a = n(626135),
  s = n(607070),
  o = n(981631),
  l = n(969943),
  u = n(611480);

function c(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_FONT_SIZE',
fontSize: e
  });
}

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING',
messageGroupSpacing: e
  });
}

function _(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_ZOOM',
zoom: e
  });
}

function E() {
  r.Z.dispatch({
type: 'ACCESSIBILITY_KEYBOARD_MODE_ENABLE'
  }), a.default.track(o.rMx.KEYBOARD_MODE_TOGGLED, {
enabled: !0
  });
}

function f() {
  r.Z.dispatch({
type: 'ACCESSIBILITY_KEYBOARD_MODE_DISABLE'
  }), a.default.track(o.rMx.KEYBOARD_MODE_TOGGLED, {
enabled: !1
  });
}

function h() {
  r.Z.dispatch({
type: 'ACCESSIBILITY_DESATURATE_ROLES_TOGGLE'
  });
}

function p() {
  r.Z.dispatch({
type: 'ACCESSIBILITY_DARK_SIDEBAR_TOGGLE'
  });
}

function m() {
  r.Z.dispatch({
type: 'KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN'
  });
}

function I(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED',
systemPrefersReducedMotion: e
  });
}

function T(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_SATURATION',
saturation: e
  });
}

function g(e) {
  let t = s.Z.useReducedMotion;
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION',
prefersReducedMotion: e
  });
  let n = s.Z.useReducedMotion;
  !t && n ? i.ZP.applySettingsOverride({
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
  }) : t && !n && i.ZP.clearSettingsOverride('gifAutoPlay', 'animateEmoji', 'animateStickers');
}

function S(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_SYNC_FORCED_COLORS',
syncForcedColors: e
  });
}

function A(e, t) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED',
systemPrefersColorScheme: e,
systemForcedColors: t
  });
}

function N(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED',
systemPrefersContrast: e
  });
}

function v(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS',
alwaysShowLinkDecorations: e
  });
}

function O(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_ROLE_STYLE',
roleStyle: e
  }), a.default.track(o.rMx.ROLE_STYLE_SETTING_UPDATED, {
role_style: e
  });
}

function R() {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE'
  });
}

function C() {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE'
  });
}

function y(e) {
  r.Z.dispatch({
type: 'ACCESSIBILITY_SET_HIDE_TAGS',
hideTags: e
  });
}