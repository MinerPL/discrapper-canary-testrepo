"use strict";
let i;
n(411104), n(47120), n(653041);
var r = n(348327),
  s = n.n(r),
  o = n(512722),
  a = n.n(o),
  l = n(727258),
  u = n(41776),
  _ = n(581883),
  d = n(251625),
  c = n(823379),
  E = n(664915),
  I = n(486472),
  T = n(271383),
  h = n(430824),
  S = n(412788),
  f = n(9156),
  N = n(594174);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let m = new l.g8;

function O(e) {
  switch (e.type) {
    case l.eD.FOLDER:
      return {
        folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(e => e.id)
      };
    case l.eD.GUILD:
      return {
        folderId: void 0, guildIds: [e.id]
      };
    default:
      throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
  }
}

function R(e, t) {
  let n = m;
  if (m = new l.g8, 0 === e.length && t.length > 0)
    for (let e of t) m.addNode((0, l.Mg)(e));
  else
    for (let t of e)
      if (0 !== t.guildIds.length) {
        if (null == t.folderId) m.addNode((0, l.Mg)(t.guildIds[0]));
        else {
          let e = (0, l.qQ)(t, void 0, E.Z.isFolderExpanded(t.folderId));
          for (let n of (m.addNode(e), t.guildIds)) m.addNode((0, l.Mg)(n), e)
        }
      } for (let e of m.allNodes()) e.type === l.eD.GUILD && (u.Z.isLurking(e.id) || T.ZP.isCurrentUserGuest(e.id) || null == h.Z.getGuild(e.id) && !I.Z.isUnavailable(e.id)) && m.removeNode(e);
  for (let e of Object.values(m.nodes)) e.type === l.eD.FOLDER && 0 === e.children.length && m.removeNode(e);
  return ! function(e, t) {
    for (let n in h.Z.getGuilds()) e(n) && !u.Z.isLurking(n) && !T.ZP.isCurrentUserGuest(n) && t(n)
  }(e => null == m.nodes[e], e => m.addNode((0, l.Mg)(e), m.root, !1)), !s()(n, m)
}

function C() {
  var e, t, n;
  return R(null !== (t = _.Z.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = _.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
}

function p() {
  var e, t;
  let n = _.Z.getGuildFolders();
  return !(null != i && s()(i, n)) && R(null != (i = n) ? i : [], null !== (t = null === (e = _.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
}

function g(e) {
  let {
    sourceId: t,
    targetId: n,
    moveToBelow: i,
    combine: r
  } = e, s = m.getNode(t), o = m.getNode(n);
  if (null == s || null == o) return !1;
  if (a()(!(r && s.type === l.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(s.id, " with another guilds list item")), a()(!(r && null != o.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(o.id, " that's already inside of a folder")), a()(!(s.type === l.eD.FOLDER && null != o.parentId), "[SORTED GUILDS] Can't move a folder ".concat(s.id, " to inside of another folder ").concat(o.parentId)), r) {
    let e = o.type !== l.eD.FOLDER ? m.convertToFolder(o) : o;
    m.moveInto(s, e, i)
  } else m.moveNextTo(s, o, i)
}

function L(e) {
  let {
    sourceIds: t,
    name: n
  } = e, i = t.shift();
  if (null == i) return !1;
  let r = m.getNode(i);
  if (null == r) return !1;
  let s = m.convertToFolder(r);
  s.name = n, t.forEach(e => {
    let t = m.getNode(e);
    null != t && m.moveInto(t, s, !0)
  })
}

function v(e) {
  let {
    targetId: t,
    sourceIds: n,
    ...i
  } = e, r = m.getNode(t);
  if (null == r || r.type !== l.eD.FOLDER) return !1;
  let s = "" === i.name ? void 0 : i.name;
  if (s !== r.name) {
    let e = m.cloneNode(r);
    a()(e.id === r.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = s, m.replaceNode(r, e)
  }
  let o = m.getNode(t);
  if (null == o) return !1;
  let u = o.children.map(e => e.id).filter(c.lm),
    _ = new Set(u),
    d = new Set(n),
    E = new Set([...u].filter(e => !d.has(e)));
  n.filter(e => !_.has(e)).forEach(e => {
    let t = m.getNode(e);
    null != t && m.moveInto(t, o, !0)
  }), E.forEach(e => {
    let t = m.getNode(e);
    null != t && m.moveNextTo(t, o, !0)
  })
}

function D(e) {
  let {
    targetId: t
  } = e, n = m.getNode(t);
  if (null == n || n.type !== l.eD.FOLDER) return !1;
  n.children.map(e => e.id).filter(c.lm).forEach(e => {
    let t = m.getNode(e);
    null != t && m.moveNextTo(t, n, !0)
  })
}

function M(e) {
  let {
    guildId: t,
    joinedAt: n,
    user: i
  } = e, r = N.default.getCurrentUser(), s = h.Z.getGuild(t);
  if ((null == r ? void 0 : r.id) !== i.id || null == s) return !1;
  let o = "string" == typeof n ? new Date(n) : n;
  return o !== s.joinedAt && null != o && C()
}

function P(e) {
  let {
    folderId: t
  } = e, n = m.getNode(t), i = E.Z.isFolderExpanded(t);
  if (null == n || n.type !== l.eD.FOLDER || n.expanded === i) return !1;
  b(n, i)
}

function y(e) {
  let {
    folderId: t,
    expanded: n
  } = e, i = m.getNode(t);
  if (null == i || i.type !== l.eD.FOLDER || i.expanded === n) return !1;
  b(i, n)
}

function U() {
  for (let e of m.allNodes()) e.type === l.eD.FOLDER && e.expanded && b(e, !1)
}

function b(e, t) {
  let n = m.cloneNode(e);
  a()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."), n.expanded = t, m.replaceNode(e, n)
}
let G = (0, d.oH)((e, t) => e.sortedGuildNodes().map(e => e.id)),
  w = (0, d.oH)((e, t) => e.getRoots().map(O)),
  k = (0, d.oH)((e, t) => {
    let n = [];
    return ! function e(t) {
      switch (t.type) {
        case l.eD.FOLDER:
        case l.eD.GUILD:
          n.push(t)
      }
      for (let n of t.children) e(n)
    }(e.root), n
  }),
  B = (0, d.oH)((e, t) => e.root.children.map(O));
class x extends S.Z {
  initialize() {
    this.waitFor(h.Z, f.ZP, _.Z, I.Z, u.Z, E.Z)
  }
  getGuildsTree() {
    return m
  }
  getGuildFolders() {
    return w(m, m.version)
  }
  getGuildFolderById(e) {
    return this.getGuildFolders().find(t => t.folderId === e)
  }
  getFlattenedGuildIds() {
    return G(m, m.version)
  }
  getFlattenedGuildFolderList() {
    return k(m, m.version)
  }
  getCompatibleGuildFolders() {
    return B(m, m.version)
  }
  getFastListGuildFolders() {
    return m.getRoots()
  }
  takeSnapshot() {
    return {
      version: x.LATEST_SNAPSHOT_VERSION,
      data: {
        tree: m.getSnapshot()
      }
    }
  }
  constructor() {
    super({
      CONNECTION_OPEN: C,
      OVERLAY_INITIALIZE: C,
      CACHE_LOADED: () => this.loadCache(),
      GUILD_CREATE: C,
      GUILD_DELETE: C,
      GUILD_MEMBER_ADD: M,
      USER_SETTINGS_PROTO_UPDATE: p,
      GUILD_MOVE_BY_ID: g,
      GUILD_FOLDER_CREATE_LOCAL: L,
      GUILD_FOLDER_EDIT_LOCAL: v,
      GUILD_FOLDER_DELETE_LOCAL: D,
      TOGGLE_GUILD_FOLDER_EXPAND: P,
      SET_GUILD_FOLDER_EXPANDED: y,
      GUILD_FOLDER_COLLAPSE: U
    }), A(this, "loadCache", () => {
      let e = this.readSnapshot(x.LATEST_SNAPSHOT_VERSION),
        t = null == e ? void 0 : e.tree;
      if (null != t)
        for (let e of ((m = new l.g8).loadSnapshot(t), m.allNodes())) e.type === l.eD.FOLDER && (e.expanded = E.Z.isFolderExpanded(e.id))
    })
  }
}
A(x, "displayName", "SortedGuildStore"), A(x, "LATEST_SNAPSHOT_VERSION", 1), t.ZP = new x