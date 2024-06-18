"use strict";
n.d(t, {
  Mg: function() {
    return d
  },
  eD: function() {
    return i
  },
  g8: function() {
    return _
  },
  qQ: function() {
    return c
  }
}), n(47120), n(536091);
var i, r, s = n(512722),
  o = n.n(s),
  a = n(392711);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function u() {
  return Math.floor(4294967296 * Math.random())
}(r = i || (i = {})).ROOT = "root", r.FOLDER = "folder", r.GUILD = "guild";
class _ {
  getSnapshot() {
    return {
      root: this.root,
      nodes: this.nodes
    }
  }
  loadSnapshot(e) {
    this.root = e.root, this.nodes = e.nodes, this.version++
  }
  moveNextTo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    this._pluckNode(e);
    let i = null != t.parentId ? this.nodes[t.parentId] : this.root,
      r = i.children.indexOf(t);
    return o()(!("folder" === e.type && "folder" === i.type), "[GUILDS TREE] Tried moving a folder (".concat(e.id, ") inside of another folder (").concat(i.id, ")")), o()(r >= 0, "[GUILDS TREE] target node (".concat(t.id, ") did not exist within its specified parent (").concat(t.parentId, ")")), i.children = [...i.children], i.children.splice(r + (n ? 1 : 0), 0, e), e.parentId = i.id, this.version++, this
  }
  moveInto(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    this._pluckNode(e);
    let i = n ? t.children.length : 0;
    return t.children = [...t.children], t.children.splice(i, 0, e), e.parentId = t.id, this.version++, this
  }
  addNode(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root,
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return o()("root" !== e.type, "[GUILDS TREE] Tried adding another root node into the tree"), o()(null != e.id, "[GUILDS TREE] Tried adding a node without an id"), o()(null == this.nodes[e.id], "[GUILDS TREE] Tried adding a node that already exists (".concat(e.id, ")")), this.nodes[e.id] = e, this.version++, this.moveInto(e, t, n)
  }
  removeNode(e) {
    return o()(e !== this.root, "[GUILDS TREE] Tried removing the root node from the tree"), o()(null != e.id, "[GUILDS TREE] Tried removing a node without an id"), this._pluckNode(e), e.parentId = void 0, delete this.nodes[e.id], this.version++, this
  }
  replaceNode(e, t) {
    o()(e !== this.root, "[GUILDS TREE] Tried replacing the root node of the tree"), o()(null != e.id, "[GUILDS TREE] Tried replacing a node without an id"), o()(null != t.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id"), o()("root" !== t.type, "[GUILDS TREE] Tried adding another root node into the tree");
    let n = null != e.parentId ? this.nodes[e.parentId] : this.root,
      i = n.children.indexOf(e);
    return o()(i >= 0, "[GUILDS TREE] existing node (".concat(e.id, ") did not exist within its specified parent (").concat(e.parentId, ")")), n.children = [...n.children], n.children.splice(i, 1, t), t.parentId = n.id, e.parentId = void 0, delete this.nodes[e.id], this.nodes[t.id] = t, this.version++, this
  }
  cloneNode(e) {
    return (0, a.clone)(e)
  }
  convertToFolder(e) {
    let t = u();
    for (; null != this.getNode(t);) t = u();
    let n = {
      type: "folder",
      id: t,
      expanded: !1,
      children: []
    };
    return this.replaceNode(e, n), this.removeNode(e), this.addNode(e, n, !1), this.version++, n
  }
  allNodes() {
    return Object.values(this.nodes)
  }
  getNode(e) {
    return this.nodes[e]
  }
  getRoots() {
    return this.root.children
  }
  get size() {
    return this.allNodes().length
  }
  sortedGuildNodes() {
    return function e(t) {
      return "guild" === t.type ? [t] : null == t.children ? [] : t.children.map(t => e(t)).flat()
    }(this.root)
  }
  _pluckNode(e) {
    let t = null != e.parentId ? this.nodes[e.parentId] : this.root;
    o()(null != t, "[GUILDS TREE] source node (".concat(e.id, ") had a parent id (").concat(e.parentId, ") which doesn't exist in the tree"));
    let n = t.children;
    o()(null != n, "[GUILDS TREE] source node (".concat(e.id, ") had a parent id (").concat(e.parentId, ") which contains no children")), t.children = n.filter(t => t !== e), e.parentId = void 0, this.version++
  }
  constructor() {
    l(this, "root", void 0), l(this, "nodes", void 0), l(this, "version", void 0), this.root = {
      type: "root",
      children: []
    }, this.nodes = {}, this.version = 0
  }
}

function d(e, t) {
  return {
    type: "guild",
    id: e,
    parentId: t,
    children: [],
    unavailable: !1
  }
}

function c(e, t, n) {
  var i, r, s;
  return {
    type: "folder",
    id: e.folderId,
    parentId: t,
    name: null !== (i = e.folderName) && void 0 !== i ? i : void 0,
    color: null !== (r = e.folderColor) && void 0 !== r ? r : void 0,
    expanded: null != n ? n : null !== (s = e.expanded) && void 0 !== s && s,
    children: []
  }
}