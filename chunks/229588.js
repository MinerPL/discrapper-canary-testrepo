"use strict";
n.d(t, {
  f: function() {
    return c
  }
});
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = !1,
  _ = null,
  d = null;

function c(e) {
  E({
    locale: e
  })
}

function E(e) {
  let {
    locale: t
  } = e;
  u = !0, _ = t
}
class I extends(o = a.ZP.Store) {
  isLoading() {
    return u
  }
  getError() {
    return d
  }
}
s = "I18nLoaderStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new I(l.Z, {
  I18N_LOAD_START: E,
  I18N_LOAD_SUCCESS: function(e) {
    let {
      locale: t
    } = e;
    t === _ && (u = !1, d = null, _ = null)
  },
  I18N_LOAD_ERROR: function(e) {
    let {
      error: t,
      locale: n
    } = e;
    n === _ && (u = !1, d = null != t ? t : null, _ = null)
  }
})