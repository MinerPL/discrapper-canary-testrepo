"use strict";
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(594174),
  c = n(981631);
let E = c.QZA.CLOSED,
  I = null,
  T = null,
  h = {},
  S = {},
  f = {},
  N = null,
  A = null,
  m = !1,
  O = !1,
  R = null,
  C = null,
  p = null,
  g = [],
  L = null,
  v = null;

function D(e) {
  var t, n, i, r, s, o;
  let a = d.default.getCurrentUser();
  if (null == a) return M();
  T = null !== (t = e.section) && void 0 !== t ? t : T, L = null !== (n = e.section) && void 0 !== n ? n : T, null != e.subsection && null != T && (h[T] = e.subsection), null != e.scrollPosition && null != T && (S[T] = e.scrollPosition), O = !!e.openWithoutBackstack, E = c.QZA.OPEN, f = {}, A = {
    ...N = {
      [c.oAB.ACCOUNT]: {
        userId: a.id,
        username: a.username,
        discriminator: a.discriminator,
        email: a.email,
        avatar: a.avatar,
        password: "",
        newPassword: null,
        claimed: a.isClaimed()
      }
    }
  }, C = null !== (i = e.onClose) && void 0 !== i ? i : null, p = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, g = null !== (s = e.analyticsLocations) && void 0 !== s ? s : [], v = null !== (o = e.impressionSource) && void 0 !== o ? o : null
}

function M() {
  E = c.QZA.CLOSED, m = !1, N = null, L = null, A = null, I = null, T = null, h = {}, S = {}, C = null, p = null, g = [], v = null
}

function P() {
  E = c.QZA.OPEN, f = {}
}
class y extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(d.default)
  }
  hasChanges() {
    return null != A && null != N && (!!this.isOpen() || R === c.cII.USER_SETTINGS) && !l().isEqual(A, N)
  }
  isOpen() {
    return m
  }
  getPreviousSection() {
    return I
  }
  getSection() {
    return T
  }
  getSubsection() {
    return null != T ? h[T] : null
  }
  getScrollPosition() {
    return null != T ? S[T] : null
  }
  shouldOpenWithoutBackstack() {
    return O
  }
  getProps() {
    return {
      submitting: E === c.QZA.SUBMITTING,
      section: T,
      subsection: null != T ? h[T] : null,
      scrollPosition: null != T ? S[T] : null,
      settings: A,
      errors: f,
      hasChanges: this.hasChanges(),
      openWithoutBackstack: O,
      analyticsLocation: p,
      analyticsLocations: g,
      initialSection: L,
      impressionSource: v
    }
  }
  get onClose() {
    return C
  }
}
s = "UserSettingsModalStore", (r = "displayName") in(i = y) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new y(_.Z, {
  USER_SETTINGS_MODAL_OPEN: function(e) {
    m = !0, D(e)
  },
  USER_SETTINGS_MODAL_INIT: D,
  USER_SETTINGS_MODAL_CLOSE: M,
  LOGOUT: M,
  USER_SETTINGS_MODAL_SUBMIT: function() {
    E = c.QZA.SUBMITTING
  },
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
    var t;
    if (E !== c.QZA.SUBMITTING) return !1;
    E = c.QZA.OPEN, T = c.oAB.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
    var t;
    I = T, T = e.section, p = null, g = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (h[T] = e.subsection)
  },
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
    let {
      forSection: t
    } = e;
    null != t ? delete h[t] : null != T && delete h[T]
  },
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
    let {
      forSection: t
    } = e;
    null != t ? delete S[t] : null != T && delete S[T]
  },
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
    let {
      settings: t
    } = e;
    null == A && (A = {});
    let n = A[c.oAB.ACCOUNT];
    A[c.oAB.ACCOUNT] = {
      ...n,
      ...t
    }
  },
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: P,
  USER_SETTINGS_MODAL_RESET: function() {
    let e = d.default.getCurrentUser();
    P(), null != e && (A = {
      ...N = {
        [c.oAB.ACCOUNT]: {
          userId: e.id,
          username: e.username,
          discriminator: e.discriminator,
          email: e.email,
          avatar: e.avatar,
          password: "",
          newPassword: null,
          claimed: e.isClaimed()
        }
      }
    })
  },
  DRAWER_SELECT_TAB: function(e) {
    return R = e.tab, null == T && R === c.cII.USER_SETTINGS && D({
      type: "USER_SETTINGS_MODAL_INIT",
      section: null,
      subsection: null,
      scrollPosition: null,
      openWithoutBackstack: !1
    })
  }
})