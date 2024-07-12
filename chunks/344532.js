n(724458);
var r, i = n(442837),
  a = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let s = {},
  l = null,
  u = null;

function c(e, t) {
  null == t ? e in s && delete s[e] : null != e && (s[e] = t);
}

function d(e) {
  let {
user: t
  } = e;
  u = t.id;
}
class _ extends(r = i.ZP.PersistedStore) {
  initialize(e) {
null != e && (s = e);
  }
  requiredActions(e) {
var t;
return null !== (t = s[e]) && void 0 !== t ? t : null;
  }
  requiredActionsIncludes(e, t) {
let n = this.requiredActions(e);
return null != n && t.reduce((e, t) => e || n.includes(t), !1);
  }
  wasLoginAttemptedInSession(e) {
return l === e;
  }
  getState() {
return s;
  }
}
o(_, 'displayName', 'LoginRequiredActionStore'), o(_, 'persistKey', 'LoginRequiredActionStore'), t.Z = new _(a.Z, {
  LOGIN_ATTEMPTED: function(e) {
let {
  required_actions: t,
  user_id: n
} = e;
c(l = n, t);
  },
  CONNECTION_OPEN: d,
  CURRENT_USER_UPDATE: d,
  LOGOUT: function(e) {
let {
  isSwitchingAccount: t
} = e;
!t && null != u && c(u, null);
  },
  PASSWORD_UPDATED: function(e) {
let {
  userId: t
} = e;
c(t, null);
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
let {
  userId: t
} = e;
c(t, null);
  }
});