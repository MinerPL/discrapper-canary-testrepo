let r, i;
n.d(t, {
  q: function() {
return a;
  }
}), n(653041);
var a, o, s, l = n(213919),
  u = n(442837),
  c = n(570140),
  d = n(990492),
  _ = n(988965),
  E = n(71509);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(s = a || (a = {}))[s.INVALID = 0] = 'INVALID', s[s.VALIDATING = 1] = 'VALIDATING', s[s.VALID = 2] = 'VALID';
let h = [],
  p = !1;

function m(e) {
  h = h.filter(t => {
let {
  id: n
} = t;
return n !== e;
  }), l.removeToken(e);
}

function I(e, t) {
  let n = h.slice(),
r = n.find(t => {
  let {
    id: n
  } = t;
  return n === e;
});
  null != r && (r.tokenStatus = t, h = n);
}
class T extends(o = u.ZP.PersistedStore) {
  initialize(e) {
if (null != e) {
  var t;
  h = null !== (t = e.users) && void 0 !== t ? t : [], i = e.canUseMultiAccountMobile;
}
  }
  getCanUseMultiAccountMobile() {
return i;
  }
  getState() {
return {
  users: h,
  canUseMultiAccountMobile: i
};
  }
  getUsers() {
return h;
  }
  getValidUsers() {
return h.filter(e => {
  let {
    tokenStatus: t
  } = e;
  return 0 !== t;
});
  }
  getHasLoggedInAccounts() {
return h.length > 0;
  }
  getIsValidatingUsers() {
return h.some(e => {
  let {
    tokenStatus: t
  } = e;
  return 1 === t;
});
  }
  get canUseMultiAccountNotifications() {
return this.getCanUseMultiAccountMobile() && _.N.getCurrentConfig({
  location: '09e468_1'
}, {
  autoTrackExposure: !1
}).isMultiAccountMobileNotificationsEnabled;
  }
  get isSwitchingAccount() {
return p;
  }
}
f(T, 'displayName', 'MultiAccountStore'), f(T, 'persistKey', 'MultiAccountStore'), f(T, 'migrations', [e => {
  if (null != e) {
var t;
return {
  users: null !== (t = e.users) && void 0 !== t ? t : [],
  canUseMultiAccountMobile: !1
};
  }
  return {
users: [],
canUseMultiAccountMobile: !1
  };
}]), t.Z = new T(c.Z, {
  CONNECTION_OPEN: function(e) {
let {
  user: t
} = e;
r = t.id, p = !1;
let n = h.slice(),
  i = n.findIndex(e => {
    let {
      id: n
    } = e;
    return n === t.id;
  });
i > -1 ? (h[i].avatar = t.avatar, h[i].username = t.username, h[i].discriminator = t.discriminator, h[i].tokenStatus = 2) : n.push({
  id: t.id,
  avatar: t.avatar,
  username: t.username,
  discriminator: t.discriminator,
  tokenStatus: 2,
  pushSyncToken: null
}), (h = n).length > E.$H && h.splice(E.$H).forEach(e => {
  let {
    id: t
  } = e;
  m(t);
});
  },
  LOGOUT: function(e) {
p = !!e.isSwitchingAccount, !e.isSwitchingAccount && (h = h.filter(e => {
  let {
    id: t
  } = e;
  return t !== r;
})), r = null;
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: e => I(e.userId, 1),
  MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: e => I(e.userId, 2),
  MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: e => I(e.userId, 0),
  MULTI_ACCOUNT_REMOVE_ACCOUNT: e => m(e.userId),
  MULTI_ACCOUNT_MOVE_ACCOUNT: function(e) {
let {
  from: t,
  to: n
} = e;
h = (0, d.aB)(h, t, n);
  },
  CURRENT_USER_UPDATE: function(e) {
let {
  user: t
} = e, n = h.slice(), r = n.find(e => {
  let {
    id: n
  } = e;
  return n === t.id;
});
null != r && (r.avatar = t.avatar, r.username = t.username, r.discriminator = t.discriminator, h = n);
  },
  MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: function(e) {
let {
  multiAccountMobileExperimentEnabled: t
} = e;
i = t;
  },
  MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function(e) {
let {
  userId: t,
  pushSyncToken: n
} = e;
h = h.map(e => e.id === t ? {
  ...e,
  pushSyncToken: n
} : e);
  },
  MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function(e) {
let {
  invalidPushSyncTokens: t
} = e;
h = h.map(e => null != e.pushSyncToken && t.includes(e.pushSyncToken) ? {
  ...e,
  pushSyncToken: null
} : e);
  }
});