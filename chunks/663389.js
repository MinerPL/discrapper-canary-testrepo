var r, i, a, s, o = n(392711),
  l = n.n(o),
  u = n(442837),
  c = n(570140),
  d = n(594174),
  _ = n(981631);
let E = _.QZA.CLOSED,
  f = null,
  h = null,
  p = {},
  m = {},
  I = {},
  T = null,
  g = null,
  S = !1,
  A = !1,
  N = null,
  v = null,
  O = null,
  R = [],
  C = null,
  y = null;

function D(e) {
  var t, n, r, i, a, s;
  let o = d.default.getCurrentUser();
  if (null == o)
return L();
  h = null !== (t = e.section) && void 0 !== t ? t : h, C = null !== (n = e.section) && void 0 !== n ? n : h, null != e.subsection && null != h && (p[h] = e.subsection), null != e.scrollPosition && null != h && (m[h] = e.scrollPosition), A = !!e.openWithoutBackstack, E = _.QZA.OPEN, I = {}, g = {
...T = {
  [_.oAB.ACCOUNT]: {
    userId: o.id,
    username: o.username,
    discriminator: o.discriminator,
    email: o.email,
    avatar: o.avatar,
    password: '',
    newPassword: null,
    claimed: o.isClaimed()
  }
}
  }, v = null !== (r = e.onClose) && void 0 !== r ? r : null, O = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, R = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], y = null !== (s = e.impressionSource) && void 0 !== s ? s : null;
}

function L() {
  E = _.QZA.CLOSED, S = !1, T = null, C = null, g = null, f = null, h = null, p = {}, m = {}, v = null, O = null, R = [], y = null;
}

function b() {
  E = _.QZA.OPEN, I = {};
}
class M extends(s = u.ZP.Store) {
  initialize() {
this.waitFor(d.default);
  }
  hasChanges() {
return null != g && null != T && (!!this.isOpen() || N === _.cII.USER_SETTINGS) && !l().isEqual(g, T);
  }
  isOpen() {
return S;
  }
  getPreviousSection() {
return f;
  }
  getSection() {
return h;
  }
  getSubsection() {
return null != h ? p[h] : null;
  }
  getScrollPosition() {
return null != h ? m[h] : null;
  }
  shouldOpenWithoutBackstack() {
return A;
  }
  getProps() {
return {
  submitting: E === _.QZA.SUBMITTING,
  section: h,
  subsection: null != h ? p[h] : null,
  scrollPosition: null != h ? m[h] : null,
  settings: g,
  errors: I,
  hasChanges: this.hasChanges(),
  openWithoutBackstack: A,
  analyticsLocation: O,
  analyticsLocations: R,
  initialSection: C,
  impressionSource: y
};
  }
  get onClose() {
return v;
  }
}
a = 'UserSettingsModalStore', (i = 'displayName') in(r = M) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new M(c.Z, {
  USER_SETTINGS_MODAL_OPEN: function(e) {
S = !0, D(e);
  },
  USER_SETTINGS_MODAL_INIT: D,
  USER_SETTINGS_MODAL_CLOSE: L,
  LOGOUT: L,
  USER_SETTINGS_MODAL_SUBMIT: function() {
E = _.QZA.SUBMITTING;
  },
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
var t;
if (E !== _.QZA.SUBMITTING)
  return !1;
E = _.QZA.OPEN, h = _.oAB.ACCOUNT, I = null !== (t = e.errors) && void 0 !== t ? t : {};
  },
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
var t;
f = h, h = e.section, O = null, R = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (p[h] = e.subsection);
  },
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
let {
  forSection: t
} = e;
null != t ? delete p[t] : null != h && delete p[h];
  },
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
let {
  forSection: t
} = e;
null != t ? delete m[t] : null != h && delete m[h];
  },
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
let {
  settings: t
} = e;
null == g && (g = {});
let n = g[_.oAB.ACCOUNT];
g[_.oAB.ACCOUNT] = {
  ...n,
  ...t
};
  },
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: b,
  USER_SETTINGS_MODAL_RESET: function() {
let e = d.default.getCurrentUser();
b(), null != e && (g = {
  ...T = {
    [_.oAB.ACCOUNT]: {
      userId: e.id,
      username: e.username,
      discriminator: e.discriminator,
      email: e.email,
      avatar: e.avatar,
      password: '',
      newPassword: null,
      claimed: e.isClaimed()
    }
  }
});
  },
  DRAWER_SELECT_TAB: function(e) {
return N = e.tab, null == h && N === _.cII.USER_SETTINGS && D({
  type: 'USER_SETTINGS_MODAL_INIT',
  section: null,
  subsection: null,
  scrollPosition: null,
  openWithoutBackstack: !1
});
  }
});