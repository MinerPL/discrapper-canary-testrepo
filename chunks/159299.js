"use strict";
n.r(t), n("47120"), n("653041"), n("724458");
var a, l = n("392711"),
  s = n.n(l),
  i = n("442837"),
  r = n("570140"),
  o = n("592125"),
  u = n("271383"),
  d = n("797316"),
  c = n("158776"),
  f = n("885110"),
  h = n("594174"),
  m = n("823379"),
  p = n("700785"),
  E = n("709054"),
  C = n("51144"),
  g = n("981631");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {};
class T {
  rebuild(e) {
    this.version++, this.sections = {}, null != e && (this.allUserIds = new Set(e));
    let t = o.default.getChannel(this.parentId);
    s()(Array.from(this.allUserIds)).map(e => {
      let [n, a, l] = this.calculateNewState(e, t);
      return {
        userId: e,
        sectionId: n,
        displayName: a,
        canViewChannel: l
      }
    }).sort((e, t) => E.default.compare(e.userId, t.userId)).sortBy(e => e.displayName).forEach(e => {
      this.addUser(e.userId, e.sectionId, e.displayName, e.canViewChannel, !0)
    })
  }
  updateMultipleUserIds(e, t) {
    return (null == t || this.guildId === t) && 0 !== (e = e.filter(e => this.allUserIds.has(e))).length && (e.length > 50 ? this.rebuild() : e.forEach(e => this.updateUserId(e)), !0)
  }
  updateUserId(e) {
    if (!this.allUserIds.has(e)) return !1;
    let [t, n, a] = this.findOldState(e), [l, s, i] = this.calculateNewState(e, o.default.getChannel(this.parentId));
    return (t !== l || n !== s || a !== i) && (this.removeUserId(e, t), this.addUser(e, l, s, i), !0)
  }
  addUserId(e) {
    let [t, n, a] = this.calculateNewState(e, o.default.getChannel(this.parentId));
    this.addUser(e, t, n, a)
  }
  removeUserId(e, t) {
    if (this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t)) return !0;
    for (let t in this.sections)
      if (this.removeUserIdFromSection(e, t)) return !0;
    return !1
  }
  addUser(e, t, n, a, l) {
    this.allUserIds.add(e);
    let s = h.default.getUser(e);
    if (null == s || "" === s.username) return;
    !(t in this.sections) && (this.sections[t] = {
      sectionId: t,
      usersById: {},
      userIds: []
    });
    let i = this.sections[t];
    if (i.usersById[e] = {
        userId: e,
        displayName: n,
        canViewChannel: a
      }, l) i.userIds.push(e);
    else {
      let t = this.findUserIdSortedPosition(i, e, n);
      i.userIds.splice(t, 0, e)
    }
    this.version++
  }
  findUserIdSortedPosition(e, t, n) {
    let {
      userIds: a,
      usersById: l
    } = e;
    for (let e = 0; e < a.length; e++) {
      let s = a[e],
        i = l[s].displayName;
      if (i === n) {
        if (t < s) return e
      } else if (null == i) {
        if (null != n) return e
      } else if (null != n && n < i) return e
    }
    return a.length
  }
  removeUserIdFromSection(e, t) {
    let n = this.sections[t];
    return null != t && e in n.usersById && (delete n.usersById[e], n.userIds = n.userIds.filter(t => t !== e), this.version++, !0)
  }
  findOldState(e) {
    for (let t in this.sections) {
      let n = this.sections[t];
      if (e in n.usersById) {
        let a = n.usersById[e];
        return [t, a.displayName, a.canViewChannel]
      }
    }
    return [void 0, void 0, !1]
  }
  calculateNewState(e, t) {
    var n, a;
    let l = u.default.getMember(this.guildId, e),
      s = h.default.getUser(e),
      i = h.default.getCurrentUser(),
      r = (null == s ? void 0 : s.id) === (null == i ? void 0 : i.id) ? f.default.getStatus() : c.default.getStatus(e, this.guildId),
      o = null != s && null != t && p.can({
        permission: g.Permissions.VIEW_CHANNEL,
        user: s,
        context: t
      }),
      d = r !== g.StatusTypes.OFFLINE && r !== g.StatusTypes.INVISIBLE && r !== g.StatusTypes.UNKNOWN ? null !== (n = null == l ? void 0 : l.hoistRoleId) && void 0 !== n ? n : "online" : "offline",
      m = null !== (a = null == l ? void 0 : l.nick) && void 0 !== a ? a : C.default.getName(s);
    return [d, null == m ? void 0 : m.toLowerCase(), o]
  }
  constructor(e, t, n) {
    S(this, "guildId", void 0), S(this, "parentId", void 0), S(this, "threadId", void 0), S(this, "version", void 0), S(this, "sections", void 0), S(this, "allUserIds", void 0), this.guildId = e, this.parentId = t, this.threadId = n, this.version = 0, this.sections = {}, this.allUserIds = new Set
  }
}

function I(e) {
  return A(e.user.id)
}

function A(e) {
  if (null == e) return !1;
  let t = !1;
  for (let n in _) _[n].updateUserId(e) && (t = !0);
  return t
}

function N(e) {
  let {
    guildId: t
  } = e, n = !1;
  for (let e in _) _[e].guildId === t && (_[e].rebuild(), n = !0);
  return n
}
class v extends(a = i.default.Store) {
  initialize() {
    this.waitFor(o.default, u.default, d.default, c.default, f.default, h.default), this.syncWith([d.default], () => {
      let e = d.default.getSubscribedThreadIds(),
        t = !1;
      for (let n in _) !e.has(n) && (delete _[n], t = !0);
      return t
    }), this.syncWith([f.default], () => {
      var e;
      return A(null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    })
  }
  getMemberListVersion(e) {
    var t;
    return null === (t = _[e]) || void 0 === t ? void 0 : t.version
  }
  getMemberListSections(e) {
    var t;
    return null === (t = _[e]) || void 0 === t ? void 0 : t.sections
  }
  canUserViewChannel(e, t, n) {
    var a, l;
    let s = _[e];
    if (null == s) return !1;
    let i = null === (a = s.sections[t]) || void 0 === a ? void 0 : a.usersById[n];
    return null !== (l = null == i ? void 0 : i.canViewChannel) && void 0 !== l && l
  }
}
S(v, "displayName", "ThreadMemberListStore"), t.default = new v(r.default, {
  CONNECTION_OPEN: function() {
    _ = {}
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    var t, n;
    if (!(e.id in _)) return !1;
    null === (t = e.addedMembers) || void 0 === t || t.forEach(t => {
      let {
        userId: n
      } = t;
      return _[e.id].addUserId(n)
    }), null === (n = e.removedMemberIds) || void 0 === n || n.forEach(t => _[e.id].removeUserId(t))
  },
  THREAD_UPDATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    if (!(n.id in _) || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived) !== !0) return !1;
    delete _[n.id]
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (!(t.id in _)) return !1;
    delete _[t.id]
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = new Set(t.map(e => e.id)), a = !1;
    for (let e in _) n.has(_[e].parentId) && (_[e].rebuild(), a = !0);
    return a
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      threadId: t,
      guildId: n,
      members: a
    } = e, l = o.default.getChannel(t), s = null == l ? void 0 : l.parent_id;
    null != s && (_[t] = new T(n, s, t), _[t].rebuild(a.map(e => e.user_id)))
  },
  USER_UPDATE: I,
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        user: t
      } = e;
      return A(t.id)
    }).some(e => e)
  },
  GUILD_MEMBER_ADD: I,
  GUILD_MEMBER_UPDATE: I,
  GUILD_MEMBER_REMOVE: I,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = s()(t).map(e => {
      var t;
      return null === (t = e.user) || void 0 === t ? void 0 : t.id
    }).filter(m.isNotNullish).uniq().value(), a = !1;
    for (let e in _) _[e].updateMultipleUserIds(n) && (a = !0);
    return a
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let {
      chunks: t
    } = e, n = !1;
    for (let {
        guildId: e,
        members: a
      }
      of t) {
      let t = a.map(e => e.user.id);
      for (let a in _) _[a].updateMultipleUserIds(t, e) && (n = !0)
    }
    return n
  },
  GUILD_ROLE_UPDATE: N,
  GUILD_ROLE_DELETE: N,
  PASSIVE_UPDATE_V1: function(e) {
    var t;
    return null === (t = e.members) || void 0 === t ? void 0 : t.reduce((e, t) => A(t.user.id) || e, !1)
  }
})