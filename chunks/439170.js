"use strict";
n.d(t, {
  CR: function() {
    return D
  },
  oL: function() {
    return M
  },
  so: function() {
    return i
  }
}), n(724458), n(653041), n(47120);
var i, r, s, o = n(392711),
  a = n.n(o),
  l = n(108131),
  u = n.n(l),
  _ = n(149765),
  d = n(442837),
  c = n(570140),
  E = n(353926),
  I = n(280234),
  T = n(653733),
  h = n(700785),
  S = n(199902),
  f = n(314897),
  N = n(592125),
  A = n(650774),
  m = n(271383),
  O = n(430824),
  R = n(158776),
  C = n(885110),
  p = n(594174),
  g = n(981631),
  L = n(689938);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let D = "everyone",
  M = 0;

function P(e, t, n, i) {
  switch (t) {
    case g.Skl.ONLINE:
    case g.Skl.OFFLINE:
    case g.Skl.UNKNOWN:
      return {
        type: "GROUP", key: t, id: t, get title() {
          switch (t) {
            case g.Skl.ONLINE:
              return L.Z.Messages.STATUS_ONLINE;
            case g.Skl.OFFLINE:
              return L.Z.Messages.STATUS_OFFLINE;
            default:
              return L.Z.Messages.STATUS_UNKNOWN
          }
        }, count: n, index: i
      };
    case "recently-online":
      return {
        type: "GROUP", key: t, id: t, get title() {
          return L.Z.Messages.RECENTLY_ONLINE
        }, count: n, index: i
      };
    default:
      let r = O.Z.getGuild(e),
        s = null != r ? O.Z.getRole(r.id, t) : null;
      return {
        type: "GROUP", key: t, id: t, title: null != s ? s.name : "", count: n, index: i
      }
  }
}

function y(e, t, n) {
  let i = n === f.default.getId(),
    r = R.Z.isMobileOnline(n),
    s = i ? C.Z.getStatus() : R.Z.getStatus(n, e),
    o = i ? C.Z.getActivities() : R.Z.getActivities(n, e),
    a = S.Z.getStreamForUser(n, e),
    l = p.default.getUser(n),
    u = R.Z.getLastOnlineTimestamp(n),
    {
      isRecentlyOnlineShowable: _
    } = (0, I.$)(u);
  return null == l ? null : {
    type: "MEMBER",
    ...m.ZP.getMember(e, n),
    user: l,
    status: s,
    activities: o,
    applicationStream: a,
    isOwner: t === n,
    isMobileOnline: r,
    lastOnlineTimestamp: _ ? u : void 0
  }
}

function U(e) {
  let t = N.Z.getChannel(e);
  return null == t ? D : null == t.memberListId ? function(e) {
    return h.oz(g.Plq.VIEW_CHANNEL, e) ? D : u().v3(a()(e.permissionOverwrites).reduce((e, t) => {
      let {
        id: n,
        allow: i,
        deny: r
      } = t;
      return _.e$(i, g.Plq.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : _.e$(r, g.Plq.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
    }, []).sort().join(",")).toString()
  }(t) : t.memberListId
}(s = i || (i = {})).GROUP = "GROUP", s.MEMBER = "MEMBER", s.CONTENT_INVENTORY = "CONTENT_INVENTORY", s.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP", s.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY";
class b {
  updateOwnerId() {
    let e = O.Z.getGuild(this.guildId);
    if (null == e) return !1;
    let t = h.iJ(e);
    return this.ownerId !== t && (this.ownerId = t, !0)
  }
  setGroups(e) {
    let t = 0;
    this.groups = e.map(e => {
      var n;
      let i = t,
        r = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
      return t += r + 1, P(this.guildId, e.id, r, i)
    }), this.rows.length = t
  }
  sync(e, t) {
    let [n] = e;
    t.forEach((e, t) => this.update(n + t, e))
  }
  invalidate(e) {
    let [t, n] = e;
    for (let e = t; e <= n; e++) {
      let t = this.rows[e];
      if (null == t) break;
      delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
    }
    this.version++
  }
  insert(e, t) {
    let {
      group: n,
      member: i
    } = t;
    if (null != n) this.rows.splice(e, 0, P(this.guildId, n.id, n.count));
    else if (null != i) {
      let t = y(this.guildId, this.ownerId, i.user.id);
      if (null == t) return;
      this.rows.splice(e, 0, t), this.members[i.user.id] = t
    }
    this.version++
  }
  update(e, t) {
    let {
      group: n,
      member: i
    } = t, r = this.rows[e];
    if (null != r && "MEMBER" === r.type && delete this.members[r.user.id], null != n) this.rows[e] = P(this.guildId, n.id, n.count);
    else if (null != i) {
      let t = y(this.guildId, this.ownerId, i.user.id);
      if (null == t) return;
      this.rows[e] = t, this.members[i.user.id] = t
    }
    this.version++
  }
  delete(e) {
    let t = this.rows[e];
    if (null != t) "MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++
  }
  rebuildMember(e, t) {
    let n = this.members[e];
    if (null != n) Object.assign(n, y(this.guildId, this.ownerId, e)), t && this.syncRecentlyOfflineList(), this.version++
  }
  rebuildMembers() {
    let e = Object.keys(this.members);
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      this.rebuildMember(n, t === e.length)
    }
  }
  syncRecentlyOfflineList() {
    var e, t;
    let {
      isRecentlyOnlineUIEnabled: n
    } = (0, T.h)(this.guildId);
    if (!n || this.rows.length >= 99) {
      this.experimentalGroups = [], this.experimentalRows = [];
      return
    }
    let i = [],
      r = [],
      s = this.rows.findIndex(e => null != e && "GROUP" === e.type && e.id === g.Skl.OFFLINE);
    if (s < 0) {
      this.experimentalGroups = [], this.experimentalRows = [];
      return
    }
    let o = [];
    for (let e = 0; e < s; e++) o.push(this.rows[e]);
    for (let e = s; e < this.rows.length; e++) {
      let t = this.rows[e];
      if (null != t && "MEMBER" === t.type) {
        if (t.status === g.Skl.OFFLINE && null != t.lastOnlineTimestamp) {
          let e = {
            ...t
          };
          i.push(e)
        } else(t.status === g.Skl.OFFLINE || t.status === g.Skl.INVISIBLE) && r.push({
          ...t
        })
      }
    }
    i.sort((e, t) => {
      var n, i;
      return (null !== (n = t.lastOnlineTimestamp) && void 0 !== n ? n : 0) - (null !== (i = e.lastOnlineTimestamp) && void 0 !== i ? i : 0)
    });
    let a = [...this.groups];
    if (a = a.filter(e => e.id !== g.Skl.OFFLINE), i.length > 0) {
      let t = a[a.length - 1],
        n = null != t ? (null !== (e = t.index) && void 0 !== e ? e : 0) + t.count + 1 : 0,
        r = P(this.guildId, "recently-online", i.length, n);
      a.push(r), o.push(r), o.push(...i)
    }
    if (r.length > 0) {
      let e = a[a.length - 1],
        n = null != e ? (null !== (t = e.index) && void 0 !== t ? t : 0) + e.count + 1 : 0,
        i = P(this.guildId, g.Skl.OFFLINE, r.length, n);
      a.push(i), o.push(i), o.push(...r)
    }
    this.experimentalGroups = a, this.experimentalRows = o
  }
  constructor(e, t) {
    v(this, "guildId", void 0), v(this, "listId", void 0), v(this, "ownerId", void 0), v(this, "rows", []), v(this, "experimentalRows", []), v(this, "groups", []), v(this, "experimentalGroups", []), v(this, "members", {}), v(this, "version", 0), this.guildId = e, this.listId = t, this.updateOwnerId()
  }
}
let G = new class e {
  get(e, t) {
    let n = this._guildLists[e];
    null == n && (n = this._guildLists[e] = {});
    let i = n[t];
    return null == i && ((i = new b(e, t)).setGroups([{
      id: g.Skl.UNKNOWN,
      count: 0
    }]), n[t] = i), i
  }
  forEach(e, t) {
    if (null == e) a().forEach(this._guildLists, e => {
      a().forEach(e, t)
    });
    else {
      let n = this._guildLists[e];
      null != n && a().forEach(n, t)
    }
  }
  delete(e) {
    delete this._guildLists[e]
  }
  reset() {
    this._guildLists = {}
  }
  constructor() {
    v(this, "_guildLists", {})
  }
};

function w() {
  G.reset()
}
let k = [];

function B() {
  let e = S.Z.getAllApplicationStreams(),
    t = k.concat(e);
  k = e, t.forEach(e => {
    G.forEach(null, t => t.rebuildMember(e.ownerId, !0))
  })
}

function x() {
  let e = f.default.getId();
  G.forEach(null, t => t.rebuildMember(e, !0))
}
class V extends(r = d.ZP.Store) {
  initialize() {
    this.waitFor(p.default, O.Z, N.Z, m.ZP, R.Z, C.Z, f.default, A.Z, S.Z, E.Z), this.syncWith([C.Z], x), this.syncWith([S.Z], B)
  }
  getProps(e, t) {
    let n = G.get(e, U(t));
    return n.experimentalRows.length > 0 && n.experimentalGroups.length > 0 ? {
      listId: "".concat(n.guildId, ":").concat(n.listId),
      groups: n.experimentalGroups,
      rows: n.experimentalRows,
      version: n.version,
      isRecentlyOnlineEnabled: !0
    } : {
      listId: "".concat(n.guildId, ":").concat(n.listId),
      groups: n.groups,
      rows: n.rows,
      version: n.version,
      isRecentlyOnlineEnabled: !1
    }
  }
  getRows(e, t) {
    return G.get(e, U(t)).rows
  }
}
v(V, "displayName", "ChannelMemberStore"), t.ZP = new V(c.Z, {
  CONNECTION_OPEN: w,
  OVERLAY_INITIALIZE: w,
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let t = G.get(e.guildId, e.id);
    e.ops.forEach(e => {
      switch (e.op) {
        case "SYNC":
          t.sync(e.range, e.items);
          break;
        case "INVALIDATE":
          t.invalidate(e.range);
          break;
        case "INSERT":
          t.insert(e.index, e.item);
          break;
        case "UPDATE":
          t.update(e.index, e.item);
          break;
        case "DELETE":
          t.delete(e.index)
      }
    }), t.setGroups(e.groups), t.syncRecentlyOfflineList()
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e;
    G.forEach(t.id, e => {
      e.updateOwnerId() && e.rebuildMembers()
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    G.delete(t.id)
  },
  GUILD_ROLE_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    G.forEach(t, e => e.rebuildMembers())
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    G.forEach(t, e => e.rebuildMember(n.id, !0))
  },
  CHANNEL_UPDATES: function() {
    return !0
  }
})