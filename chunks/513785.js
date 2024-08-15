n.d(t, {
  M: function() {
return i;
  }
});
var r, i, a, s = n(442837),
  o = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(r = i || (i = {}))[r.NOT_FETCHED = 0] = 'NOT_FETCHED', r[r.FETCHING = 1] = 'FETCHING', r[r.FETCHED = 2] = 'FETCHED';
let u = {
userTenureRewardStatusByRewardId: {},
lastFetchTimeMs: null,
fetchState: 0
  },
  c = u;
class d extends(a = s.ZP.PersistedStore) {
  initialize(e) {
c = {
  ...c,
  ...null != e ? e : {}
};
  }
  getState() {
return c;
  }
  getFetchState() {
return c.fetchState;
  }
  getTenureRewardStatusForRewardId(e) {
return c.userTenureRewardStatusByRewardId[e];
  }
}
l(d, 'displayName', 'TenureRewardStore'), l(d, 'persistKey', 'TenureRewardStore'), t.Z = new d(o.Z, {
  USER_TENURE_REWARD_SYNC_START: function() {
c.fetchState = 1;
  },
  USER_TENURE_REWARD_SYNC_SUCCESS: function(e) {
let {
  userTenureRewardStatus: t
} = e;
if (null != t) {
  let e = {};
  t.forEach(t => {
    null != t.next_tenure_reward_id && (e[t.next_tenure_reward_id] = t);
  }), c.userTenureRewardStatusByRewardId = e;
} else
  c.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId;
c.lastFetchTimeMs = Date.now(), c.fetchState = 2;
  },
  USER_TENURE_REWARD_STATUS_RESET: function() {
c.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId;
  },
  USER_TENURE_REWARD_STATUS_DELETE: function(e) {
let {
  tenureRewardIds: t
} = e;
t.forEach(e => {
  delete c.userTenureRewardStatusByRewardId[e];
});
  },
  LOGOUT: function() {
c = u;
  }
});