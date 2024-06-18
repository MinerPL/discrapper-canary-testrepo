"use strict";
let i;
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(442837),
  d = n(433517),
  c = n(570140),
  E = n(981631);
let I = "GameLibraryViewStore",
  T = E.sHY.ASCENDING,
  h = E.iEv.LAST_PLAYED,
  S = !1,
  f = u().debounce(() => {
    S = !1, A.emitChange()
  }, 200);
class N extends(a = _.ZP.Store) {
  initialize() {
    var e;
    let t = null !== (e = d.K.get(I)) && void 0 !== e ? e : {};
    null != t.sortDirection && null != t.sortKey && (T = t.sortDirection, h = t.sortKey)
  }
  get sortDirection() {
    return T
  }
  get sortKey() {
    return h
  }
  get activeRowKey() {
    return i
  }
  get isNavigatingByKeyboard() {
    return S
  }
}
o = "GameLibraryViewStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o;
let A = new N(c.Z, {
  LIBRARY_TABLE_SORT_UPDATE: function(e) {
    let {
      direction: t,
      key: n
    } = e;
    T = t, h = n, d.K.set(I, {
      sortDirection: T,
      sortKey: h
    })
  },
  LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
    let {
      key: t,
      isKeyboardEvent: n
    } = e;
    n && (S = !0, f()), i = t
  }
});
t.Z = A