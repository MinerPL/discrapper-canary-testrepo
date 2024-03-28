"use strict";
E.r(t), E("724458"), E("47120"), E("653041");
var _ = E("133080"),
  T = E("412788"),
  n = E("594174"),
  I = E("709054"),
  s = E("280570"),
  a = E("735079"),
  i = E("546791"),
  A = E("292352");

function r(e, t, E) {
  return t in e ? Object.defineProperty(e, t, {
    value: E,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = E, e
}
let u = null,
  l = null,
  C = {},
  o = f(),
  d = Y(),
  N = null,
  S = function() {
    var e, t, E, _;
    return (null === (t = window) || void 0 === t ? void 0 : null === (e = t.location) || void 0 === e ? void 0 : e.pathname) === A.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_MY_FAMILY ? A.FamilyCenterSubPages.REQUESTS : (null === (_ = window) || void 0 === _ ? void 0 : null === (E = _.location) || void 0 === E ? void 0 : E.pathname) === A.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS ? A.FamilyCenterSubPages.SETTINGS : A.FamilyCenterSubPages.ACTIVITY
  }(),
  R = !1,
  M = !1,
  L = null,
  D = null,
  c = {};

function f() {
  return {
    [A.TeenActionDisplayType.USER_ADD]: {},
    [A.TeenActionDisplayType.GUILD_ADD]: {},
    [A.TeenActionDisplayType.USER_INTERACTION]: {},
    [A.TeenActionDisplayType.GUILD_INTERACTION]: {},
    [A.TeenActionDisplayType.USER_CALLED]: {}
  }
}

function Y() {
  return {
    [A.TeenActionDisplayType.USER_ADD]: 0,
    [A.TeenActionDisplayType.GUILD_ADD]: 0,
    [A.TeenActionDisplayType.USER_INTERACTION]: 0,
    [A.TeenActionDisplayType.GUILD_INTERACTION]: 0,
    [A.TeenActionDisplayType.USER_CALLED]: 0
  }
}

function O() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t = arguments.length > 1 ? arguments[1] : void 0;
  return C = e.length > 0 ? e.reduce((e, t) => ({
    ...e,
    [t.user_id]: t
  }), {}) : {}
}

function y(e) {
  void 0 !== e && (d = e)
}

function F(e, t) {
  let E = t ? o : f();
  return o = e.reduce((e, t) => {
    let _ = t.display_type;
    return void 0 !== E[_] && void 0 === E[_][t.event_id] && (e[_][t.event_id] = t), e
  }, E)
}

function p(e) {
  c = e.reduce((e, t) => ({
    ...e,
    [t.id]: new a.FamilyCenterGuild(t)
  }), c)
}

function U() {
  M = !0
}

function g(e) {
  let {
    linkedUsers: t,
    familyCenterTeenActivity: E
  } = e, {
    actions: _,
    guilds: T,
    totals: n,
    teenId: s,
    rangeStartId: a
  } = E;
  u = s, l = a, F(_), y(n), p(T), O(t), M = !1, L = I.default.fromTimestamp(Date.now()), R = !0
}

function P(e) {
  let {
    linkedUsers: t
  } = e;
  O(t)
}

function m(e) {
  let {
    linkedUsers: t
  } = e;
  O(t)
}

function V(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (void 0 === t) return;
  let {
    actions: E,
    totals: _,
    guilds: T,
    teenId: n,
    rangeStartId: s
  } = t;
  u = n, l = s, F(E), y(_), p(T), M = !1, L = I.default.fromTimestamp(Date.now())
}

function G(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    actions: E,
    guilds: _
  } = t;
  F(E, !0), p(_)
}

function v(e) {
  let {
    linkedUsers: t
  } = e;
  O(t)
}

function H(e) {
  let {
    linkedUsers: t
  } = e;
  O(t, !0)
}

function h(e) {
  let {
    linkCode: t
  } = e;
  N = t
}

function b(e) {
  let {
    tab: t
  } = e;
  S = t
}

function w(e) {
  let {
    user: t
  } = e;
  if (void 0 === t.linked_users) return;
  let E = n.default.getUsers();
  t.linked_users.some(e => {
    let {
      user_id: t
    } = e;
    return void 0 === E[t]
  }) && t.linked_users.length > Object.keys(C).length ? s.default.fetchLinkedUsers() : O(t.linked_users)
}

function k(e) {
  var t;
  let {
    countryCode: E
  } = e;
  null != E && (D = null !== (t = (0, _.getCountryCodeByAlpha2)(E)) && void 0 !== t ? t : null)
}

function Q() {
  u = null, l = null, C = {}, o = f(), d = Y(), c = {}, M = !1, L = null
}
class K extends T.default {
  initialize() {
    this.waitFor(n.default)
  }
  loadCache() {
    let e = this.readSnapshot(K.LATEST_SNAPSHOT_VERSION);
    if (null != e) O(e.linkedUsers), p(e.guilds), F(e.teenActivity), d = e.teenActivityTotals.reduce((e, t) => {
      let [E, _] = t.split(":"), T = (0, i.displayTypeFromString)(E);
      return void 0 === T ? e : {
        ...e,
        [T]: parseInt(_, 10)
      }
    }, Y())
  }
  takeSnapshot() {
    return {
      version: K.LATEST_SNAPSHOT_VERSION,
      data: {
        linkedUsers: Object.values(C),
        teenActivityTotals: Object.entries(d).map(e => {
          let [t, E] = e;
          return "".concat(t, ":").concat(E)
        }),
        teenActivity: function() {
          let e = [];
          return Object.entries(o).forEach(t => {
            let [E, _] = t;
            e.push(...Object.values(_))
          }), e
        }(),
        guilds: Object.values(c)
      }
    }
  }
  getSelectedTeenId() {
    return u
  }
  getLinkedUsers() {
    return C
  }
  getLinkTimestamp(e) {
    var t;
    let E = C[e];
    return null == E ? null : null !== (t = E.updated_at) && void 0 !== t ? t : E.created_at
  }
  getRangeStartTimestamp() {
    return null == l ? null : I.default.extractTimestamp(l)
  }
  getActionsForDisplayType(e) {
    return Object.values(o[e])
  }
  getTotalForDisplayType(e) {
    return d[e]
  }
  getLinkCode() {
    return N
  }
  getGuild(e) {
    return c[e]
  }
  getSelectedTab() {
    return S
  }
  getStartId() {
    return l
  }
  getIsInitialized() {
    return R
  }
  getUserCountry() {
    return D
  }
  isLoading() {
    return M
  }
  canRefetch() {
    return null === L || I.default.age(L) > A.FAMILY_CENTER_REFETCH_COOLDOWN
  }
  constructor() {
    super({
      CURRENT_USER_UPDATE: w,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      FAMILY_CENTER_INITIAL_LOAD: g,
      FAMILY_CENTER_FETCH_START: U,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: P,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: V,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: m,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: v,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: H,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: h,
      FAMILY_CENTER_HANDLE_TAB_SELECT: b,
      SET_LOCATION_METADATA: k,
      LOGOUT: Q
    })
  }
}
r(K, "displayName", "FamilyCenterStore"), r(K, "LATEST_SNAPSHOT_VERSION", 3), t.default = new K