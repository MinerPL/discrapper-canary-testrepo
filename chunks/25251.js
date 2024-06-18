"use strict";
let i, r;
var s, o, a, l, u = n(392711),
  _ = n(442837),
  d = n(570140),
  c = n(358085),
  E = n(729436);
let I = [],
  T = !1;
let h = I,
  S = {},
  f = null;
let N = 0,
  A = e => {
    h = (0, u.cloneDeep)(e);
    let t = {};
    h.forEach(e => {
      t[e.id] = (0, c.isAndroid)() ? (0, E.Q)(e) : e
    }), S = t
  },
  m = () => {
    T = !1, A(I), f = null, r = void 0
  };
class O extends(l = _.ZP.Store) {
  get isFetching() {
    return T
  }
  get fetchError() {
    return i
  }
  get profileEffects() {
    return h
  }
  get tryItOutId() {
    return f
  }
  canFetch() {
    return null == r || Date.now() >= r
  }
  hasFetched() {
    return null != r && null == i
  }
  getProfileEffectById(e) {
    return null != e ? S[e] : void 0
  }
}
a = "ProfileEffectStore", (o = "displayName") in(s = O) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new O(d.Z, {
  USER_PROFILE_EFFECTS_FETCH: () => {
    T = !0
  },
  USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
    let {
      profileEffects: t
    } = e;
    T = !1, i = void 0, r = Date.now() + 3e5, N = 0, A(0 === t.length ? I : t)
  },
  USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    T = !1, i = t, r = Date.now() + Math.min(6e4 * 2 ** N, 36e5), ++N, A(I)
  },
  PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
    let {
      id: t
    } = e;
    f = t
  },
  LOGOUT: e => {
    m()
  }
})