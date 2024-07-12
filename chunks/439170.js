n.d(t, {
  CR: function() {
return C;
  },
  oL: function() {
return y;
  },
  so: function() {
return r;
  }
}), n(724458), n(653041), n(47120);
var r, i, a, o = n(392711),
  s = n.n(o),
  l = n(108131),
  u = n.n(l),
  c = n(149765),
  d = n(442837),
  _ = n(570140),
  E = n(353926),
  f = n(700785),
  h = n(199902),
  p = n(314897),
  m = n(592125),
  I = n(650774),
  T = n(271383),
  g = n(430824),
  S = n(158776),
  A = n(885110),
  N = n(594174),
  v = n(981631),
  O = n(689938);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let C = 'everyone',
  y = 0;

function D(e, t, n, r) {
  switch (t) {
case v.Skl.ONLINE:
case v.Skl.OFFLINE:
case v.Skl.UNKNOWN:
  return {
    type: 'GROUP',
      key: t,
      id: t,
      get title() {
        switch (t) {
          case v.Skl.ONLINE:
            return O.Z.Messages.STATUS_ONLINE;
          case v.Skl.OFFLINE:
            return O.Z.Messages.STATUS_OFFLINE;
          default:
            return O.Z.Messages.STATUS_UNKNOWN;
        }
      },
      count: n,
      index: r
  };
default:
  let i = g.Z.getGuild(e),
    a = null != i ? g.Z.getRole(i.id, t) : null;
  return {
    type: 'GROUP',
      key: t,
      id: t,
      title: null != a ? a.name : '',
      count: n,
      index: r
  };
  }
}

function L(e, t, n) {
  let r = n === p.default.getId(),
i = S.Z.isMobileOnline(n),
a = r ? A.Z.getStatus() : S.Z.getStatus(n, e),
o = r ? A.Z.getActivities() : S.Z.getActivities(n, e),
s = h.Z.getStreamForUser(n, e),
l = N.default.getUser(n);
  return null == l ? null : {
type: 'MEMBER',
...T.ZP.getMember(e, n),
user: l,
status: a,
activities: o,
applicationStream: s,
isOwner: t === n,
isMobileOnline: i
  };
}

function b(e) {
  let t = m.Z.getChannel(e);
  return null == t ? C : null == t.memberListId ? function(e) {
return f.oz(v.Plq.VIEW_CHANNEL, e) ? C : u().v3(s()(e.permissionOverwrites).reduce((e, t) => {
  let {
    id: n,
    allow: r,
    deny: i
  } = t;
  return c.e$(r, v.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(n)) : c.e$(i, v.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(n)), e;
}, []).sort().join(',')).toString();
  }(t) : t.memberListId;
}
(a = r || (r = {})).GROUP = 'GROUP', a.MEMBER = 'MEMBER', a.CONTENT_INVENTORY = 'CONTENT_INVENTORY', a.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP', a.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY';
class M {
  updateOwnerId() {
let e = g.Z.getGuild(this.guildId);
if (null == e)
  return !1;
let t = f.iJ(e);
return this.ownerId !== t && (this.ownerId = t, !0);
  }
  setGroups(e) {
let t = 0;
this.groups = e.map(e => {
  var n;
  let r = t,
    i = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
  return t += i + 1, D(this.guildId, e.id, i, r);
}), this.rows.length = t;
  }
  sync(e, t) {
let [n] = e;
t.forEach((e, t) => this.update(n + t, e));
  }
  invalidate(e) {
let [t, n] = e;
for (let e = t; e <= n; e++) {
  let t = this.rows[e];
  if (null == t)
    break;
  delete this.rows[e], 'MEMBER' === t.type && delete this.members[t.user.id];
}
this.version++;
  }
  insert(e, t) {
let {
  group: n,
  member: r
} = t;
if (null != n)
  this.rows.splice(e, 0, D(this.guildId, n.id, n.count));
else if (null != r) {
  let t = L(this.guildId, this.ownerId, r.user.id);
  if (null == t)
    return;
  this.rows.splice(e, 0, t), this.members[r.user.id] = t;
}
this.version++;
  }
  update(e, t) {
let {
  group: n,
  member: r
} = t, i = this.rows[e];
if (null != i && 'MEMBER' === i.type && delete this.members[i.user.id], null != n)
  this.rows[e] = D(this.guildId, n.id, n.count);
else if (null != r) {
  let t = L(this.guildId, this.ownerId, r.user.id);
  if (null == t)
    return;
  this.rows[e] = t, this.members[r.user.id] = t;
}
this.version++;
  }
  delete(e) {
let t = this.rows[e];
if (null != t)
  'MEMBER' === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++;
  }
  rebuildMember(e) {
let t = this.members[e];
if (null != t)
  Object.assign(t, L(this.guildId, this.ownerId, e)), this.version++;
  }
  rebuildMembers() {
let e = Object.keys(this.members);
for (let t = 0; t < e.length; t++) {
  let n = e[t];
  this.rebuildMember(n);
}
  }
  constructor(e, t) {
R(this, 'guildId', void 0), R(this, 'listId', void 0), R(this, 'ownerId', void 0), R(this, 'rows', []), R(this, 'groups', []), R(this, 'members', {}), R(this, 'version', 0), this.guildId = e, this.listId = t, this.updateOwnerId();
  }
}
let P = new class e {
  get(e, t) {
let n = this._guildLists[e];
null == n && (n = this._guildLists[e] = {});
let r = n[t];
return null == r && ((r = new M(e, t)).setGroups([{
  id: v.Skl.UNKNOWN,
  count: 0
}]), n[t] = r), r;
  }
  forEach(e, t) {
if (null == e)
  s().forEach(this._guildLists, e => {
    s().forEach(e, t);
  });
else {
  let n = this._guildLists[e];
  null != n && s().forEach(n, t);
}
  }
  delete(e) {
delete this._guildLists[e];
  }
  reset() {
this._guildLists = {};
  }
  constructor() {
R(this, '_guildLists', {});
  }
}();

function U() {
  P.reset();
}
let w = [];

function x() {
  let e = h.Z.getAllApplicationStreams(),
t = w.concat(e);
  w = e, t.forEach(e => {
P.forEach(null, t => t.rebuildMember(e.ownerId));
  });
}

function G() {
  let e = p.default.getId();
  P.forEach(null, t => t.rebuildMember(e));
}
class k extends(i = d.ZP.Store) {
  initialize() {
this.waitFor(N.default, g.Z, m.Z, T.ZP, S.Z, A.Z, p.default, I.Z, h.Z, E.Z), this.syncWith([A.Z], G), this.syncWith([h.Z], x);
  }
  getProps(e, t) {
let n = P.get(e, b(t));
return {
  listId: ''.concat(n.guildId, ':').concat(n.listId),
  groups: n.groups,
  rows: n.rows,
  version: n.version
};
  }
  getRows(e, t) {
return P.get(e, b(t)).rows;
  }
}
R(k, 'displayName', 'ChannelMemberStore'), t.ZP = new k(_.Z, {
  CONNECTION_OPEN: U,
  OVERLAY_INITIALIZE: U,
  GUILD_MEMBER_LIST_UPDATE: function(e) {
let t = P.get(e.guildId, e.id);
e.ops.forEach(e => {
  switch (e.op) {
    case 'SYNC':
      t.sync(e.range, e.items);
      break;
    case 'INVALIDATE':
      t.invalidate(e.range);
      break;
    case 'INSERT':
      t.insert(e.index, e.item);
      break;
    case 'UPDATE':
      t.update(e.index, e.item);
      break;
    case 'DELETE':
      t.delete(e.index);
  }
}), t.setGroups(e.groups);
  },
  GUILD_UPDATE: function(e) {
let {
  guild: t
} = e;
P.forEach(t.id, e => {
  e.updateOwnerId() && e.rebuildMembers();
});
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
P.delete(t.id);
  },
  GUILD_ROLE_UPDATE: function(e) {
let {
  guildId: t
} = e;
P.forEach(t, e => e.rebuildMembers());
  },
  GUILD_MEMBER_UPDATE: function(e) {
let {
  guildId: t,
  user: n
} = e;
P.forEach(t, e => e.rebuildMember(n.id));
  },
  CHANNEL_UPDATES: function() {
return !0;
  }
});