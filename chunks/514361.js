let r, i;
n(47120);
var a, s = n(442837),
  o = n(704215),
  l = n(570140),
  u = n(605236),
  c = n(238514),
  d = n(781391),
  _ = n(210887),
  E = n(740492),
  f = n(695346),
  h = n(581883),
  p = n(131704),
  m = n(592125),
  I = n(594174),
  T = n(74538),
  g = n(51144),
  S = n(47760),
  A = n(469115),
  N = n(874893);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let O = !1,
  R = !0,
  C = !1;

function y() {
  O = !0;
}

function D() {
  R && (r = void 0), C = !1, O = !1;
}
let L = () => {
R = !T.ZP.canUseClientThemes(I.default.getCurrentUser());
  },
  b = () => {
let e = f.L1.getSetting().backgroundGradientPresetId;
if (c.Z.shouldSync('appearance')) {
  if (null == e) {
    null != r && (r = void 0);
    return;
  }
  r = A.qt[e];
}
  },
  M = () => {
if (!c.Z.shouldSync('appearance'))
  return;
let e = f.L1.getSetting().backgroundGradientPresetId;
if (E.ZP.useSystemTheme === N.K.ON && null != e && (0, d.hi)(N.K.OFF), null == e) {
  null != r && (r = void 0);
  return;
}
let t = A.qt[e],
  n = (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id);
if (null != t && !n)
  r = t;
  };
class P extends(a = s.ZP.PersistedStore) {
  initialize(e) {
null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? A.qt[e.gradientPresetId] : void 0), this.waitFor(I.default, _.Z, m.Z, c.Z, h.Z), this.syncWith([I.default], L), this.syncWith([c.Z], b), this.syncWith([h.Z], M);
  }
  getState() {
return R ? {} : {
  gradientPresetId: null == r ? void 0 : r.id
};
  }
  get gradientPreset() {
return r;
  }
  getLinearGradient() {
return null == this.gradientPreset ? null : (0, S.VK)(this.gradientPreset);
  }
  get isEditorOpen() {
return O;
  }
  get isPreview() {
return R;
  }
  get isCoachmark() {
return C;
  }
  get mobilePendingThemeIndex() {
return i;
  }
  constructor(...e) {
super(...e), v(this, 'migrations', [e => {
  var t;
  return {
    gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
  };
}]);
  }
}
v(P, 'displayName', 'ClientThemesBackgroundStore'), v(P, 'persistKey', 'ClientThemesBackgroundStore'), t.Z = new P(l.Z, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: e => {
let {
  presetId: t
} = e;
if (null == t) {
  r = void 0;
  return;
}
r = A.qt[t];
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: e => {
let {
  mobileThemesIndex: t
} = e;
if (null == t) {
  i = void 0;
  return;
}
i = t;
  },
  CLIENT_THEMES_EDITOR_OPEN: e => {
(function() {
  O = !0;
}());
  },
  CLIENT_THEMES_EDITOR_CLOSE: e => {
D();
  },
  RESET_PREVIEW_CLIENT_THEME: e => {
r = void 0;
  },
  CHANNEL_SELECT: e => {
let {
  channelId: t,
  guildId: n
} = e, r = I.default.getCurrentUser();
if (null == t || null == n || (0, u.un)(o.z.CLIENT_THEMES_COACHMARK) || !(0, g.Fc)(r))
  return;
let i = m.Z.getChannel(t);
null != i && (0, p.zi)(i.type) && (C = !0, function() {
  O = !0;
}());
  },
  LOGOUT: function() {
D();
  }
});