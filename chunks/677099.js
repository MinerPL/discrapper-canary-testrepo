"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("70102"), n("222007");
var s = n("714617"),
  r = n.n(s),
  a = n("627445"),
  o = n.n(a),
  l = n("674644"),
  u = n("267567"),
  d = n("374363"),
  c = n("117362"),
  f = n("449008"),
  _ = n("341542"),
  h = n("26989"),
  g = n("305961"),
  m = n("455079"),
  E = n("282109"),
  p = n("697218");
let v = new l.GuildsTree;

function S(e) {
  switch (e.type) {
    case l.GuildsNodeType.FOLDER:
      return {
        folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(e => e.id)
      };
    case l.GuildsNodeType.GUILD:
      return {
        folderId: void 0, guildIds: [e.id]
      };
    default:
      throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
  }
}

function T(e, t) {
  let n = v;
  if (v = new l.GuildsTree, 0 === e.length && t.length > 0)
    for (let e of t) v.addNode((0, l.createGuildNode)(e));
  else
    for (let t of e)
      if (0 !== t.guildIds.length) {
        if (null == t.folderId) v.addNode((0, l.createGuildNode)(t.guildIds[0]));
        else {
          let e = (0, l.createFolderNode)(t);
          for (let n of (v.addNode(e), t.guildIds)) v.addNode((0, l.createGuildNode)(n), e)
        }
      } for (let e of v.allNodes()) e.type === l.GuildsNodeType.GUILD && (u.default.isLurking(e.id) || h.default.isCurrentUserGuest(e.id) || null == g.default.getGuild(e.id) && !_.default.isUnavailable(e.id)) && v.removeNode(e);
  for (let e of Object.values(v.nodes)) e.type === l.GuildsNodeType.FOLDER && 0 === e.children.length && v.removeNode(e);
  return ! function(e, t) {
    for (let n in g.default.getGuilds()) e(n) && !u.default.isLurking(n) && !h.default.isCurrentUserGuest(n) && t(n)
  }(e => null == v.nodes[e], e => v.addNode((0, l.createGuildNode)(e), v.root, !1)), !r(n, v)
}

function I() {
  var e, t, n;
  return T(null !== (t = d.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
}

function C() {
  var e, t;
  let n = d.default.getGuildFolders();
  return !(null != i && r(i, n)) && T(null != (i = n) ? i : [], null !== (t = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
}

function A(e) {
  let {
    sourceId: t,
    targetId: n,
    moveToBelow: i,
    combine: s
  } = e, r = v.getNode(t), a = v.getNode(n);
  if (null == r || null == a) return !1;
  if (o(!(s && r.type === l.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(r.id, " with another guilds list item")), o(!(s && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), o(!(r.type === l.GuildsNodeType.FOLDER && null != a.parentId), "[SORTED GUILDS] Can't move a folder ".concat(r.id, " to inside of another folder ").concat(a.parentId)), s) {
    let e = a.type !== l.GuildsNodeType.FOLDER ? v.convertToFolder(a) : a;
    v.moveInto(r, e, i)
  } else v.moveNextTo(r, a, i)
}

function y(e) {
  let {
    sourceIds: t,
    name: n
  } = e, i = t.shift();
  if (null == i) return !1;
  let s = v.getNode(i);
  if (null == s) return !1;
  let r = v.convertToFolder(s);
  r.name = n, t.forEach(e => {
    let t = v.getNode(e);
    null != t && v.moveInto(t, r, !0)
  })
}

function N(e) {
  let {
    targetId: t,
    sourceIds: n,
    ...i
  } = e, s = v.getNode(t);
  if (null == s || s.type !== l.GuildsNodeType.FOLDER) return !1;
  let r = "" === i.name ? void 0 : i.name;
  if (r !== s.name) {
    let e = v.cloneNode(s);
    o(e.id === s.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = r, v.replaceNode(s, e)
  }
  let a = v.getNode(t);
  if (null == a) return !1;
  let u = a.children.map(e => e.id).filter(f.isNotNullish),
    d = new Set(u),
    c = new Set(n),
    _ = new Set([...u].filter(e => !c.has(e))),
    h = n.filter(e => !d.has(e));
  h.forEach(e => {
    let t = v.getNode(e);
    null != t && v.moveInto(t, a, !0)
  }), _.forEach(e => {
    let t = v.getNode(e);
    null != t && v.moveNextTo(t, a, !0)
  })
}

function R(e) {
  let {
    targetId: t
  } = e, n = v.getNode(t);
  if (null == n || n.type !== l.GuildsNodeType.FOLDER) return !1;
  let i = n.children.map(e => e.id).filter(f.isNotNullish);
  i.forEach(e => {
    let t = v.getNode(e);
    null != t && v.moveNextTo(t, n, !0)
  })
}

function O(e) {
  let {
    guildId: t,
    joinedAt: n,
    user: i
  } = e, s = p.default.getCurrentUser(), r = g.default.getGuild(t);
  if ((null == s ? void 0 : s.id) !== i.id || null == r) return !1;
  let a = "string" == typeof n ? new Date(n) : n;
  return a !== r.joinedAt && null != a && I()
}
let D = (0, c.cachedFunction)((e, t) => e.sortedGuildNodes().map(e => e.id)),
  P = (0, c.cachedFunction)((e, t) => e.getRoots().map(S));
class b extends m.default {
  getGuildsTree() {
    return v
  }
  getGuildFolders() {
    return P(v, v.version)
  }
  getGuildFolderById(e) {
    return this.getGuildFolders().find(t => t.folderId === e)
  }
  getFlattenedGuildIds() {
    return D(v, v.version)
  }
  getCompatibleGuildFolders() {
    return v.root.children.map(S)
  }
  takeSnapshot() {
    return {
      version: b.LATEST_SNAPSHOT_VERSION,
      data: {
        tree: v.getSnapshot()
      }
    }
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(b.LATEST_SNAPSHOT_VERSION),
        t = null == e ? void 0 : e.tree;
      null != t && (v = new l.GuildsTree).loadSnapshot(t)
    }, this.registerActionHandlers({
      CONNECTION_OPEN: I,
      OVERLAY_INITIALIZE: I,
      CACHE_LOADED_LAZY: this.loadCache,
      GUILD_CREATE: I,
      GUILD_DELETE: I,
      GUILD_MEMBER_ADD: O,
      USER_SETTINGS_PROTO_UPDATE: C,
      GUILD_MOVE_BY_ID: A,
      GUILD_FOLDER_CREATE_LOCAL: y,
      GUILD_FOLDER_EDIT_LOCAL: N,
      GUILD_FOLDER_DELETE_LOCAL: R
    }), this.waitFor(g.default, E.default, d.default, _.default, u.default)
  }
}
b.displayName = "SortedGuildStore", b.LATEST_SNAPSHOT_VERSION = 1;
var L = new b