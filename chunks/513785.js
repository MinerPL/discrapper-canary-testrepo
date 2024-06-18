"use strict";
n.d(t, {
  M: function() {
    return r
  }
});
var i, r, s, o = n(442837),
  a = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
let u = {
    userTenureRewardStatusByRewardId: {},
    lastFetchTimeMs: null,
    fetchState: 0
  },
  _ = u;
class d extends(s = o.ZP.PersistedStore) {
  initialize(e) {
    _ = {
      ..._,
      ...null != e ? e : {}
    }
  }
  getState() {
    return _
  }
  getFetchState() {
    return _.fetchState
  }
  getTenureRewardStatusForRewardId(e) {
    return _.userTenureRewardStatusByRewardId[e]
  }
}
l(d, "displayName", "TenureRewardStore"), l(d, "persistKey", "TenureRewardStore"), t.Z = new d(a.Z, {
  USER_TENURE_REWARD_SYNC_START: function() {
    _.fetchState = 1
  },
  USER_TENURE_REWARD_SYNC_SUCCESS: function(e) {
    let {
      userTenureRewardStatus: t
    } = e;
    if (null != t) {
      let e = {};
      t.forEach(t => {
        null != t.next_tenure_reward_id && (e[t.next_tenure_reward_id] = t)
      }), _.userTenureRewardStatusByRewardId = e
    } else _.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId;
    _.lastFetchTimeMs = Date.now(), _.fetchState = 2
  },
  USER_TENURE_REWARD_STATUS_RESET: function() {
    _.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId
  },
  USER_TENURE_REWARD_STATUS_DELETE: function(e) {
    let {
      tenureRewardIds: t
    } = e;
    t.forEach(e => {
      delete _.userTenureRewardStatusByRewardId[e]
    })
  },
  LOGOUT: function() {
    _ = u
  }
})