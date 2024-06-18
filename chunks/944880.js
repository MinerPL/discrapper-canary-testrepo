"use strict";
n(47120);
var i = n(913527),
  r = n.n(i),
  s = n(570140),
  o = n(147913),
  a = n(959546),
  l = n(594174),
  u = n(580130),
  _ = n(111361),
  d = n(470918),
  c = n(595878),
  E = n(513785),
  I = n(106255),
  T = n(474936),
  h = n(735825);
let S = null,
  f = !1;

function N(e) {
  let t = a.Z.createFromServer(e.entitlement);
  (0, I._k)(t) ? A({
    forceRefresh: !0
  }): (0, I.YE)(t) && null != E.Z.getTenureRewardStatusForRewardId(t.skuId) && s.Z.dispatch({
    type: "USER_TENURE_REWARD_STATUS_DELETE",
    tenureRewardIds: [t.skuId]
  })
}

function A() {
  let {
    forceRefresh: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  O();
  let t = u.Z.getForApplication(T.RQ),
    n = (0, I.kG)(t),
    i = (0, I.MR)([h.Ft.FREE_GUILD_BOOST_1_MONTH, h.Ft.FREE_GUILD_BOOST_3_MONTHS], t),
    o = l.default.getCurrentUser();
  if (!(0, _.M5)(o, T.p9.TIER_2) && null == n) {
    null != o && s.Z.dispatch({
      type: "USER_TENURE_REWARD_STATUS_RESET"
    });
    return
  }
  if (!!(0, c.d)({
      location: "tenure_reward_manager"
    }))
    if ((!0 === e || function(e) {
        if (E.Z.getFetchState() !== E.M.FETCHED) return !0;
        let t = (0, I.LA)();
        return null != t && null != e && e.id !== t.user_id || function() {
          let e = E.Z.getState();
          return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 12096e5
        }() || function() {
          var e;
          let t = null !== (e = E.Z.getTenureRewardStatusForRewardId(h.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : E.Z.getTenureRewardStatusForRewardId(h.Ft.FREE_GUILD_BOOST_3_MONTHS);
          return null != t && null != t.redeemable_at && 0 >= r()(t.redeemable_at).diff(r().utc(), "seconds")
        }()
      }(o)) && null == i) m();
    else {
      let e = u.Z.getForApplication(T.RQ);
      if (null == e) return;
      let t = Array.from(e).filter(e => null != E.Z.getTenureRewardStatusForRewardId(e.skuId)).map(e => e.skuId);
      t.length > 0 && s.Z.dispatch({
        type: "USER_TENURE_REWARD_STATUS_DELETE",
        tenureRewardIds: t
      })
    }
}
async function m() {
  if (!f) f = !0, await d.V(), f = !1, s.Z.wait(() => (function() {
    var e;
    if (O(), E.Z.getFetchState() !== E.M.FETCHED || f) return;
    let t = null !== (e = E.Z.getTenureRewardStatusForRewardId(h.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : E.Z.getTenureRewardStatusForRewardId(h.Ft.FREE_GUILD_BOOST_3_MONTHS);
    if ((null == t ? void 0 : t.redeemable_at) == null) return;
    let n = (null == t ? void 0 : t.redeemable_at) != null ? new Date(t.redeemable_at).getTime() - Date.now() : null;
    null != n && n > 0 && (S = setTimeout(A, n))
  })())
}

function O() {
  clearTimeout(S), S = null
}

function R() {
  O()
}

function C() {
  A()
}
class p extends o.Z {
  forceRefreshIfOutdated() {
    let e = E.Z.getState();
    null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 864e5 && A({
      forceRefresh: !0
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: C,
      CONNECTION_CLOSED: R,
      ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => A(),
      ENTITLEMENT_CREATE: N,
      ENTITLEMENT_UPDATE: () => A(),
      ENTITLEMENT_DELETE: () => A(),
      LOGOUT: O
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new p