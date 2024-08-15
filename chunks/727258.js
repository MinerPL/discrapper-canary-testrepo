n.d(t, {
  Mg: function() {
return d;
  },
  eD: function() {
return r;
  },
  g8: function() {
return c;
  },
  qQ: function() {
return _;
  }
}), n(47120), n(536091);
var r, i, a = n(512722),
  s = n.n(a),
  o = n(392711);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function u() {
  return Math.floor(4294967296 * Math.random());
}
(i = r || (r = {})).ROOT = 'root', i.FOLDER = 'folder', i.GUILD = 'guild';
class c {
  getSnapshot() {
return {
  root: this.root,
  nodes: this.nodes
};
  }
  loadSnapshot(e) {
this.root = e.root, this.nodes = e.nodes, this.version++;
  }
  moveNextTo(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
this._pluckNode(e);
let r = null != t.parentId ? this.nodes[t.parentId] : this.root,
  i = r.children.indexOf(t);
return s()(!('folder' === e.type && 'folder' === r.type), '[GUILDS TREE] Tried moving a folder ('.concat(e.id, ') inside of another folder (').concat(r.id, ')')), s()(i >= 0, '[GUILDS TREE] target node ('.concat(t.id, ') did not exist within its specified parent (').concat(t.parentId, ')')), r.children = [...r.children], r.children.splice(i + (n ? 1 : 0), 0, e), e.parentId = r.id, this.version++, this;
  }
  moveInto(e, t) {
let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
this._pluckNode(e);
let r = n ? t.children.length : 0;
return t.children = [...t.children], t.children.splice(r, 0, e), e.parentId = t.id, this.version++, this;
  }
  addNode(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root,
  n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
return s()('root' !== e.type, '[GUILDS TREE] Tried adding another root node into the tree'), s()(null != e.id, '[GUILDS TREE] Tried adding a node without an id'), s()(null == this.nodes[e.id], '[GUILDS TREE] Tried adding a node that already exists ('.concat(e.id, ')')), this.nodes[e.id] = e, this.version++, this.moveInto(e, t, n);
  }
  removeNode(e) {
return s()(e !== this.root, '[GUILDS TREE] Tried removing the root node from the tree'), s()(null != e.id, '[GUILDS TREE] Tried removing a node without an id'), this._pluckNode(e), e.parentId = void 0, delete this.nodes[e.id], this.version++, this;
  }
  replaceNode(e, t) {
s()(e !== this.root, '[GUILDS TREE] Tried replacing the root node of the tree'), s()(null != e.id, '[GUILDS TREE] Tried replacing a node without an id'), s()(null != t.id, '[GUILDS TREE] Tried replacing a node with one that does not have an id'), s()('root' !== t.type, '[GUILDS TREE] Tried adding another root node into the tree');
let n = null != e.parentId ? this.nodes[e.parentId] : this.root,
  r = n.children.indexOf(e);
return s()(r >= 0, '[GUILDS TREE] existing node ('.concat(e.id, ') did not exist within its specified parent (').concat(e.parentId, ')')), n.children = [...n.children], n.children.splice(r, 1, t), t.parentId = n.id, e.parentId = void 0, delete this.nodes[e.id], this.nodes[t.id] = t, this.version++, this;
  }
  cloneNode(e) {
return (0, o.clone)(e);
  }
  convertToFolder(e) {
let t = u();
for (; null != this.getNode(t);)
  t = u();
let n = {
  type: 'folder',
  id: t,
  expanded: !1,
  children: []
};
return this.replaceNode(e, n), this.removeNode(e), this.addNode(e, n, !1), this.version++, n;
  }
  allNodes() {
return Object.values(this.nodes);
  }
  getNode(e) {
return this.nodes[e];
  }
  getRoots() {
return this.root.children;
  }
  get size() {
return this.allNodes().length;
  }
  sortedGuildNodes() {
return function e(t) {
  return 'guild' === t.type ? [t] : null == t.children ? [] : t.children.map(t => e(t)).flat();
}(this.root);
  }
  _pluckNode(e) {
let t = null != e.parentId ? this.nodes[e.parentId] : this.root;
s()(null != t, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ') which doesn\'t exist in the tree'));
let n = t.children;
s()(null != n, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ') which contains no children')), t.children = n.filter(t => t !== e), e.parentId = void 0, this.version++;
  }
  constructor() {
l(this, 'root', void 0), l(this, 'nodes', void 0), l(this, 'version', void 0), this.root = {
  type: 'root',
  children: []
}, this.nodes = {}, this.version = 0;
  }
}

function d(e, t) {
  return {
type: 'guild',
id: e,
parentId: t,
children: [],
unavailable: !1
  };
}

function _(e, t, n) {
  var r, i, a;
  return {
type: 'folder',
id: e.folderId,
parentId: t,
name: null !== (r = e.folderName) && void 0 !== r ? r : void 0,
color: null !== (i = e.folderColor) && void 0 !== i ? i : void 0,
expanded: null != n ? n : null !== (a = e.expanded) && void 0 !== a && a,
children: []
  };
}