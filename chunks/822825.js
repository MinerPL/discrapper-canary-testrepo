"use strict";
E.r(t), E.d(t, {
  default: function() {
    return K
  }
}), E("808653"), E("222007"), E("424973");
var _ = E("988415"),
  T = E("455079"),
  n = E("697218"),
  I = E("299039"),
  s = E("544556"),
  a = E("138505"),
  A = E("117933"),
  i = E("922832");
let r = null,
  u = null,
  C = {},
  l = c(),
  o = f(),
  d = null,
  N = function() {
    var e, t, E, _;
    return (null === (t = window) || void 0 === t ? void 0 : null === (e = t.location) || void 0 === e ? void 0 : e.pathname) === i.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_MY_FAMILY ? i.FamilyCenterSubPages.REQUESTS : (null === (_ = window) || void 0 === _ ? void 0 : null === (E = _.location) || void 0 === E ? void 0 : E.pathname) === i.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS ? i.FamilyCenterSubPages.SETTINGS : i.FamilyCenterSubPages.ACTIVITY
  }(),
  S = !1,
  R = !1,
  M = null,
  L = null,
  D = {};

function c() {
  return {
    [i.TeenActionDisplayType.USER_ADD]: {},
    [i.TeenActionDisplayType.GUILD_ADD]: {},
    [i.TeenActionDisplayType.USER_INTERACTION]: {},
    [i.TeenActionDisplayType.GUILD_INTERACTION]: {},
    [i.TeenActionDisplayType.USER_CALLED]: {}
  }
}

function f() {
  return {
    [i.TeenActionDisplayType.USER_ADD]: 0,
    [i.TeenActionDisplayType.GUILD_ADD]: 0,
    [i.TeenActionDisplayType.USER_INTERACTION]: 0,
    [i.TeenActionDisplayType.GUILD_INTERACTION]: 0,
    [i.TeenActionDisplayType.USER_CALLED]: 0
  }
}

function Y() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t = arguments.length > 1 ? arguments[1] : void 0;
  return C = e.length > 0 ? e.reduce((e, t) => ({
    ...e,
    [t.user_id]: t
  }), {}) : {}
}

function O(e) {
  void 0 !== e && (o = e)
}

function y(e, t) {
  let E = t ? l : c();
  return l = e.reduce((e, t) => {
    let _ = t.display_type;
    return void 0 !== E[_] && void 0 === E[_][t.event_id] && (e[_][t.event_id] = t), e
  }, E)
}

function F(e) {
  D = e.reduce((e, t) => ({
    ...e,
    [t.id]: new a.FamilyCenterGuild(t)
  }), D)
}

function p() {
  R = !0
}

function U(e) {
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
  r = s, u = a, y(_), O(n), F(T), Y(t), R = !1, M = I.default.fromTimestamp(Date.now()), S = !0
}

function g(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t)
}

function P(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t)
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
  r = n, u = s, y(E), O(_), F(T), R = !1, M = I.default.fromTimestamp(Date.now())
}

function m(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    actions: E,
    guilds: _
  } = t;
  y(E, !0), F(_)
}

function G(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t)
}

function v(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t, !0)
}

function H(e) {
  let {
    linkCode: t
  } = e;
  d = t
}

function h(e) {
  let {
    tab: t
  } = e;
  N = t
}

function k(e) {
  let {
    user: t
  } = e;
  if (void 0 === t.linked_users) return;
  let E = n.default.getUsers(),
    _ = t.linked_users.some(e => {
      let {
        user_id: t
      } = e;
      return void 0 === E[t]
    });
  _ && t.linked_users.length > Object.keys(C).length ? s.default.fetchLinkedUsers() : Y(t.linked_users)
}

function w(e) {
  var t;
  let {
    countryCode: E
  } = e;
  null != E && (L = null !== (t = (0, _.getCountryCodeByAlpha2)(E)) && void 0 !== t ? t : null)
}

function Q() {
  r = null, u = null, C = {}, l = c(), o = f(), D = {}, R = !1, M = null
}
class b extends T.default {
  initialize() {
    this.waitFor(n.default)
  }
  loadCache() {
    let e = this.readSnapshot(b.LATEST_SNAPSHOT_VERSION);
    if (null != e) Y(e.linkedUsers), F(e.guilds), y(e.teenActivity), o = e.teenActivityTotals.reduce((e, t) => {
      let [E, _] = t.split(":"), T = (0, A.displayTypeFromString)(E);
      return void 0 === T ? e : {
        ...e,
        [T]: parseInt(_, 10)
      }
    }, f())
  }
  takeSnapshot() {
    return {
      version: b.LATEST_SNAPSHOT_VERSION,
      data: {
        linkedUsers: Object.values(C),
        teenActivityTotals: Object.entries(o).map(e => {
          let [t, E] = e;
          return "".concat(t, ":").concat(E)
        }),
        teenActivity: function() {
          let e = [];
          return Object.entries(l).forEach(t => {
            let [E, _] = t;
            e.push(...Object.values(_))
          }), e
        }(),
        guilds: Object.values(D)
      }
    }
  }
  getSelectedTeenId() {
    return r
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
    return null == u ? null : I.default.extractTimestamp(u)
  }
  getActionsForDisplayType(e) {
    return Object.values(l[e])
  }
  getTotalForDisplayType(e) {
    return o[e]
  }
  getLinkCode() {
    return d
  }
  getGuild(e) {
    return D[e]
  }
  getSelectedTab() {
    return N
  }
  getStartId() {
    return u
  }
  getIsInitialized() {
    return S
  }
  getUserCountry() {
    return L
  }
  isLoading() {
    return R
  }
  canRefetch() {
    return null === M || I.default.age(M) > i.FAMILY_CENTER_REFETCH_COOLDOWN
  }
  constructor() {
    super({
      CURRENT_USER_UPDATE: k,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      FAMILY_CENTER_INITIAL_LOAD: U,
      FAMILY_CENTER_FETCH_START: p,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: g,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: V,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: m,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: P,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: G,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: v,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: H,
      FAMILY_CENTER_HANDLE_TAB_SELECT: h,
      SET_LOCATION_METADATA: w,
      LOGOUT: Q
    })
  }
}
b.displayName = "FamilyCenterStore", b.LATEST_SNAPSHOT_VERSION = 3;
var K = new b