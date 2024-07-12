let i;
n(47120), n(724458), n(653041);
var a, l, s, r, o = n(392711),
  c = n.n(o),
  d = n(442837),
  u = n(570140),
  h = n(279779),
  p = n(353926),
  m = n(60349),
  _ = n(814443),
  f = n(428598),
  E = n(131704),
  C = n(624138),
  g = n(51144),
  I = n(592125),
  x = n(580005),
  T = n(699516),
  v = n(594174),
  N = n(981631);
let S = !1,
  Z = '',
  A = 0,
  M = [],
  b = !1,
  R = new Set(),
  j = null;

function L() {
  Z = '', A = 0, M = [], R = new Set(), S = !1, j = null;
}

function P(e) {
  Z = e, A = 0, O();
}

function O() {
  if (!S)
return !1;
  let e = I.Z.getChannel(j);
  if (0 === Z.trim().length)
return null != i && i.clearQuery(), M = function(e) {
  let t = T.Z.getFriendIDs();
  return (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
    let n = v.default.getUser(t);
    return null == n ? e : (e.push({
      user: n
    }), e);
  }, []).sort(D);
}(e), !0;
  let t = null != e ? e.recipients : [];
  return null != i && i.setQuery(Z, {
friends: !0
  }, t, function() {
let e = x.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof E.mn && e.isDM()),
  t = Math.max(...e.map(e => {
    let {
      id: t
    } = e;
    return x.Z.getScoreWithoutFetchingLatest(t);
  })),
  n = {};
return e.forEach(e => {
  let i = x.Z.getScoreWithoutFetchingLatest(e.id),
    a = e.getRecipientId(),
    l = T.Z.isFriend(a) ? 0.2 : 0,
    s = null != I.Z.getDMFromUserId(a) ? 0.1 : 0;
  n[a] = 1 + i / t + l + s;
}), n;
  }()), !1;
}

function y() {
  if (!S)
return !1;
  let e = b;
  return (b = c().some(T.Z.getRelationships(), e => e === N.OGo.FRIEND)) !== e;
}

function D(e, t) {
  return m.Z.getCurrentConfig({
location: 'dm_store'
  }, {
autoTrackExposure: !1
  }).useV2 ? function(e, t) {
var n, i, a, l;
let s = null !== (a = null === (n = f.Z.getUserAffinity(e.user.id)) || void 0 === n ? void 0 : n.dmProbability) && void 0 !== a ? a : 0;
return (null !== (l = null === (i = f.Z.getUserAffinity(t.user.id)) || void 0 === i ? void 0 : i.dmProbability) && void 0 !== l ? l : 0) - s;
  }(e, t) : m.Z.getCurrentConfig({
location: 'dm_store'
  }, {
autoTrackExposure: !1
  }).useV1 ? function(e, t) {
var n, i, a, l;
let s = null !== (a = null === (n = _.Z.getUserAffinity(e.user.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== a ? a : 0;
return (null !== (l = null === (i = _.Z.getUserAffinity(t.user.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== l ? l : 0) - s;
  }(e, t) : (0, C._I)(g.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, C._I)(g.ZP.getName(t.user).toLocaleLowerCase()));
}

function k(e) {
  let {
results: t
  } = e;
  if (!!S && '' !== Z)
M = t.map(e => {
  let {
    id: t
  } = e;
  return {
    user: v.default.getUser(t)
  };
}).filter(e => null != e.user), V.emitChange();
}

function U() {
  return null != i && (i.destroy(), i = null), h.Z.getSearchContext(k, 1000);
}

function w(e) {
  if (e.key !== N.vTt)
return !1;
  S = !0, y(), i = U(), j = null, P('');
}

function B(e) {
  if (e.key !== N.vTt)
return !1;
  H();
}

function H() {
  null != i && (i.destroy(), i = null), L();
}
class G extends(a = d.ZP.Store) {
  initialize() {
this.waitFor(v.default, I.Z, T.Z, p.Z), this.syncWith([
  v.default,
  I.Z
], O), this.syncWith([T.Z], y);
  }
  getResults() {
return M;
  }
  hasFriends() {
return b;
  }
  getSelectedUsers() {
return R;
  }
  getQuery() {
return Z;
  }
  getState() {
return {
  query: Z,
  selectedRow: A,
  selectedUsers: R,
  results: M,
  hasFriends: b
};
  }
}
r = 'PrivateChannelRecipientsInviteStore', (s = 'displayName') in(l = G) ? Object.defineProperty(l, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = r;
let V = new G(u.Z, {
  CONNECTION_OPEN: function() {
L();
  },
  CHANNEL_SELECT: function(e) {
let {
  guildId: t,
  channelId: n
} = e;
if (null != t)
  return !1;
let i = S;
return L(), S = i, j = n, O();
  },
  MODAL_PUSH: w,
  SHOW_ACTION_SHEET: w,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
S = !0, y(), i = U(), j = e.channelId, P('');
  },
  MODAL_POP: B,
  HIDE_ACTION_SHEET: B,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
j = e.channelId, P(e.query);
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
A = e.row;
  },
  PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
let {
  userId: t
} = e;
R.add(t), R = new Set(R);
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
let {
  userId: t
} = e;
R.delete(t), R = new Set(R);
  }
});
t.Z = V;