"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(168232),
  a = n(474936);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = "OverridePremiumTypeStore",
  _ = {
    premiumTypeOverride: a.F_,
    premiumTypeActual: a.F_,
    createdAtOverride: a.Zh
  };

function d(e) {
  let {
    user: t
  } = e;
  _.premiumTypeActual = (0, o.G)(t.premium_type)
}
class c extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      _.premiumTypeActual = null == e ? void 0 : e.premiumTypeActual, _.premiumTypeOverride = null == e ? void 0 : e.premiumTypeOverride, null != e.createdAtOverride ? _.createdAtOverride = new Date(e.createdAtOverride) : _.createdAtOverride = a.Zh;
      return
    }
    _.premiumTypeOverride = a.F_, _.createdAtOverride = a.Zh
  }
  getPremiumTypeOverride() {
    return _.premiumTypeOverride
  }
  getPremiumTypeActual() {
    return _.premiumTypeActual
  }
  getCreatedAtOverride() {
    return _.createdAtOverride
  }
  getState() {
    return _
  }
  get premiumType() {
    return _.premiumTypeOverride
  }
}
l(c, "displayName", u), l(c, "persistKey", u), l(c, "migrations", [e => {
  if ((null == e ? void 0 : e.createdAtOverride) == null) return {
    ...e,
    createdAtOverride: a.Zh
  }
}]), t.Z = new c(s.Z, {
  SET_PREMIUM_TYPE_OVERRIDE: function(e) {
    let {
      premiumType: t
    } = e;
    _.premiumTypeOverride = t
  },
  SET_CREATED_AT_OVERRIDE: function(e) {
    let {
      createdAt: t
    } = e;
    _.createdAtOverride = t
  },
  CURRENT_USER_UPDATE: d,
  CONNECTION_OPEN: d
})