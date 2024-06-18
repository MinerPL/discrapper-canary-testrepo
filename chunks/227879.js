"use strict";
n.d(t, {
  RM: function() {
    return t$
  },
  X2: function() {
    return tZ
  },
  bL: function() {
    return tK
  },
  iA: function() {
    return tz
  },
  sg: function() {
    return tV
  },
  xD: function() {
    return tG
  }
});
var r = n(230012),
  i = n(75520),
  a = n(612001),
  o = n(706682),
  s = n(182823),
  u = n(283004),
  c = n(473873),
  l = n(616073),
  d = n(219560),
  f = n(297821),
  p = n(448253),
  h = n(823867),
  m = n(753264),
  g = n(148836),
  _ = n(795250),
  b = n(975994),
  v = n(608773),
  y = n(358049),
  E = n(912059),
  S = n(370225),
  x = n(470210),
  w = n(930423),
  C = n(652222),
  T = n(247674),
  D = n(917177),
  M = n(158005),
  O = n(159257),
  A = n(363964),
  k = n(681772),
  R = n(711792),
  N = n(640900),
  I = n(242550),
  L = n(414948),
  P = n(470079),
  B = n(430370),
  F = n(699581),
  U = n(31178),
  j = n(903646),
  Y = n(33412),
  z = n(988501),
  H = n(897145),
  G = n(437296),
  V = n(850559),
  $ = n(687379),
  Z = n(984102),
  K = n(552145),
  W = n(677263),
  q = n(423902),
  Q = n(28693),
  X = n(483729),
  J = n(235574),
  ee = n(772566),
  et = n(343015);
class en {
  get childNodes() {
    throw Error("childNodes is not supported")
  }
  clone() {
    let e = new en(this.type, this.key);
    return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e
  }
  constructor(e, t) {
    (0, B._)(this, "value", null), (0, B._)(this, "level", 0), (0, B._)(this, "hasChildNodes", !1), (0, B._)(this, "rendered", null), (0, B._)(this, "textValue", ""), (0, B._)(this, "aria-label", void 0), (0, B._)(this, "index", 0), (0, B._)(this, "parentKey", null), (0, B._)(this, "prevKey", null), (0, B._)(this, "nextKey", null), (0, B._)(this, "firstChildKey", null), (0, B._)(this, "lastChildKey", null), (0, B._)(this, "props", {}), this.type = e, this.key = t
  }
}
let er = Symbol.iterator;
class ei {
  *[er]() {
    let e = this.firstChild;
    for (; e;) yield e, e = e.nextSibling
  }
  get firstChild() {
    return this._firstChild
  }
  set firstChild(e) {
    this._firstChild = e, this.ownerDocument.markDirty(this)
  }
  get lastChild() {
    return this._lastChild
  }
  set lastChild(e) {
    this._lastChild = e, this.ownerDocument.markDirty(this)
  }
  get previousSibling() {
    return this._previousSibling
  }
  set previousSibling(e) {
    this._previousSibling = e, this.ownerDocument.markDirty(this)
  }
  get nextSibling() {
    return this._nextSibling
  }
  set nextSibling(e) {
    this._nextSibling = e, this.ownerDocument.markDirty(this)
  }
  get parentNode() {
    return this._parentNode
  }
  set parentNode(e) {
    this._parentNode = e, this.ownerDocument.markDirty(this)
  }
  appendChild(e) {
    this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
  }
  insertBefore(e, t) {
    if (null == t) return this.appendChild(e);
    this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), e.nextSibling = t, e.previousSibling = t.previousSibling, e.index = t.index, this.firstChild === t ? this.firstChild = e : t.previousSibling && (t.previousSibling.nextSibling = e), t.previousSibling = e, e.parentNode = t.parentNode;
    let n = t;
    for (; n;) n.index++, n = n.nextSibling;
    e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
  }
  removeChild(e) {
    if (e.parentNode !== this) return;
    this.ownerDocument.startTransaction();
    let t = e.nextSibling;
    for (; t;) t.index--, t = t.nextSibling;
    e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.removeNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
  }
  addEventListener() {}
  removeEventListener() {}
  constructor(e) {
    (0, B._)(this, "_firstChild", null), (0, B._)(this, "_lastChild", null), (0, B._)(this, "_previousSibling", null), (0, B._)(this, "_nextSibling", null), (0, B._)(this, "_parentNode", null), this.ownerDocument = e
  }
}
let ea = 0;
class eo extends ei {
  get index() {
    return this._index
  }
  set index(e) {
    this._index = e, this.ownerDocument.markDirty(this)
  }
  get level() {
    return this.parentNode instanceof eo ? this.parentNode.level + ("item" === this.node.type ? 1 : 0) : 0
  }
  updateNode() {
    var e, t, n, r, i, a, o, s;
    let u = this.ownerDocument.getMutableNode(this);
    u.index = this.index, u.level = this.level, u.parentKey = this.parentNode instanceof eo ? this.parentNode.node.key : null, u.prevKey = null !== (i = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== i ? i : null, u.nextKey = null !== (a = null === (t = this.nextSibling) || void 0 === t ? void 0 : t.node.key) && void 0 !== a ? a : null, u.hasChildNodes = !!this.firstChild, u.firstChildKey = null !== (o = null === (n = this.firstChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== o ? o : null, u.lastChildKey = null !== (s = null === (r = this.lastChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== s ? s : null
  }
  setProps(e, t, n) {
    let r = this.ownerDocument.getMutableNode(this),
      {
        value: i,
        textValue: a,
        id: o,
        ...s
      } = e;
    if (s.ref = t, r.props = s, r.rendered = n, r.value = i, r.textValue = a || ("string" == typeof n ? n : "") || e["aria-label"] || "", null != o && o !== r.key) {
      if (this.hasSetProps) throw Error("Cannot change the id of an item");
      r.key = o
    }!this.hasSetProps && (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), this.hasSetProps = !0), this.ownerDocument.queueUpdate()
  }
  get style() {
    return {}
  }
  hasAttribute() {}
  setAttribute() {}
  setAttributeNS() {}
  removeAttribute() {}
  constructor(e, t) {
    super(t), (0, B._)(this, "nodeType", 8), (0, B._)(this, "_index", 0), (0, B._)(this, "hasSetProps", !1), this.node = new en(e, `react-aria-${++ea}`), this.ownerDocument.startTransaction()
  }
}
let es = Symbol.iterator;
class eu {
  get size() {
    return this.keyMap.size
  }
  getKeys() {
    return this.keyMap.keys()
  }*[es]() {
    let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
    for (; e;) yield e, e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0
  }
  getChildren(e) {
    let t = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let n = t.get(e),
          r = (null == n ? void 0 : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
        for (; r;) yield r, r = null != r.nextKey ? t.get(r.nextKey) : void 0
      }
    }
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if (null != t.prevKey) {
      var n;
      for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey;) t = this.keyMap.get(t.lastChildKey);
      return null !== (n = null == t ? void 0 : t.key) && void 0 !== n ? n : null
    }
    return t.parentKey
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if ("item" !== t.type && null != t.firstChildKey) return t.firstChildKey;
    for (; t;) {
      if (null != t.nextKey) return t.nextKey;
      if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
      else break
    }
    return null
  }
  getFirstKey() {
    return this.firstKey
  }
  getLastKey() {
    var e;
    let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
    for (;
      (null == t ? void 0 : t.lastChildKey) != null;) t = this.keyMap.get(t.lastChildKey);
    return null !== (e = null == t ? void 0 : t.key) && void 0 !== e ? e : null
  }
  getItem(e) {
    var t;
    return null !== (t = this.keyMap.get(e)) && void 0 !== t ? t : null
  }
  at() {
    throw Error("Not implemented")
  }
  clone() {
    let e = new this.constructor;
    return e.keyMap = new Map(this.keyMap), e.firstKey = this.firstKey, e.lastKey = this.lastKey, e
  }
  addNode(e) {
    if (this.frozen) throw Error("Cannot add a node to a frozen collection");
    this.keyMap.set(e.key, e)
  }
  removeNode(e) {
    if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
    this.keyMap.delete(e)
  }
  commit(e, t) {
    if (this.frozen) throw Error("Cannot commit a frozen collection");
    this.firstKey = e, this.lastKey = t, this.frozen = !0
  }
  constructor() {
    (0, B._)(this, "keyMap", new Map), (0, B._)(this, "firstKey", null), (0, B._)(this, "lastKey", null), (0, B._)(this, "frozen", !1)
  }
}
class ec extends ei {
  createElement(e) {
    return new eo(e, this)
  }
  getMutableNode(e) {
    let t = e.node;
    return !this.mutatedNodes.has(e) && (t = e.node.clone(), this.mutatedNodes.add(e), e.node = t), this.markDirty(e), t
  }
  getMutableCollection() {
    return !this.collectionMutated && (this.collection = this.collection.clone(), this.collectionMutated = !0), this.collection
  }
  markDirty(e) {
    this.dirtyNodes.add(e)
  }
  startTransaction() {
    this.transactionCount++
  }
  endTransaction() {
    this.transactionCount--
  }
  addNode(e) {
    let t = this.getMutableCollection();
    if (!t.getItem(e.node.key))
      for (let n of (t.addNode(e.node), e)) this.addNode(n);
    this.markDirty(e)
  }
  removeNode(e) {
    for (let t of e) t.parentNode = null, this.removeNode(t);
    this.getMutableCollection().removeNode(e.node.key), this.markDirty(e)
  }
  getCollection() {
    if (this.transactionCount > 0) return this.collection;
    for (let e of this.dirtyNodes) e instanceof eo && e.parentNode && e.updateNode();
    if (this.dirtyNodes.clear(), this.mutatedNodes.size) {
      var e, t, n, r;
      let i = this.getMutableCollection();
      for (let e of this.mutatedNodes) e.parentNode && i.addNode(e.node);
      i.commit(null !== (n = null === (e = this.firstChild) || void 0 === e ? void 0 : e.node.key) && void 0 !== n ? n : null, null !== (r = null === (t = this.lastChild) || void 0 === t ? void 0 : t.node.key) && void 0 !== r ? r : null), this.mutatedNodes.clear()
    }
    return this.collectionMutated = !1, this.collection
  }
  queueUpdate() {
    if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0))
      for (let e of this.subscriptions) e()
  }
  subscribe(e) {
    return this.subscriptions.add(e), () => this.subscriptions.delete(e)
  }
  constructor(e) {
    super(null), (0, B._)(this, "nodeType", 11), (0, B._)(this, "ownerDocument", this), (0, B._)(this, "dirtyNodes", new Set), (0, B._)(this, "mutatedNodes", new Set), (0, B._)(this, "subscriptions", new Set), (0, B._)(this, "transactionCount", 0), this.collection = e, this.collectionMutated = !0
  }
}

function el(e) {
  let {
    children: t,
    items: n,
    idScope: r,
    addIdAndValue: i
  } = e, a = (0, P.useMemo)(() => new WeakMap, []);
  return (0, P.useMemo)(() => {
    if (!n || "function" != typeof t) return t;
    {
      let s = [];
      for (let u of n) {
        let n = a.get(u);
        if (!n) {
          if (null == (n = t(u)).key) {
            var e, o;
            let t = null !== (o = null !== (e = n.props.id) && void 0 !== e ? e : u.key) && void 0 !== o ? o : u.id;
            if (null == t) throw Error("Could not determine key for item");
            r && (t = r + ":" + t), n = (0, P.cloneElement)(n, i ? {
              key: t,
              id: t,
              value: u
            } : {
              key: t
            })
          }
          a.set(u, n)
        }
        s.push(n)
      }
      return s
    }
  }, [t, n, a, r, i])
}

function ed(e) {
  return el({
    ...e,
    addIdAndValue: !0
  })
}
let ef = (0, P.createContext)(!1);

function ep(e, t) {
  let n = (0, P.useMemo)(() => new ec(t || new eu), [t]),
    i = (0, P.useCallback)(e => n.subscribe(e), [n]),
    a = (0, P.useCallback)(() => n.getCollection(), [n]),
    o = (0, U.useSyncExternalStore)(i, a, a),
    s = ed(e),
    u = (0, P.useMemo)(() => P.createElement(ef.Provider, {
      value: !0
    }, s), [s]);
  return {
    portal: (0, r.Av)() ? null : (0, F.createPortal)(u, n),
    collection: o
  }
}

function eh(e, t, n) {
  let r = (0, P.useContext)(ef);
  return (n = em(t, n, t.children), r) ? P.createElement(e, {
    ref: n
  }) : null
}

function em(e, t, n) {
  return (0, P.useCallback)(r => {
    null == r || r.setProps(e, t, n)
  }, [e, t, n])
}
let eg = (0, P.forwardRef)(function(e, t) {
    return P.createElement("item", {
      ref: em(e, t, e.children)
    })
  }),
  e_ = (0, P.createContext)(null),
  eb = (0, P.createContext)(null),
  ev = Symbol("callback"),
  ey = Symbol("default");

function eE({
  values: e,
  children: t
}) {
  for (let [n, r] of e) t = P.createElement(n.Provider, {
    value: r
  }, t);
  return t
}

function eS(e) {
  let {
    className: t,
    style: n,
    children: r,
    defaultClassName: i,
    defaultChildren: a,
    values: o
  } = e;
  return (0, P.useMemo)(() => {
    let e, s, u;
    return e = "function" == typeof t ? t(o) : t, s = "function" == typeof n ? n(o) : n, {
      className: null != e ? e : i,
      style: s,
      children: u = "function" == typeof r ? r(o) : null == r ? a : r
    }
  }, [t, n, r, i, a, o])
}

function ex(e, t, n) {
  let r = (0, P.useContext)(n) || {};
  if ("slots" in r && r.slots) {
    if (!e.slot && !r.slots[ey]) throw Error("A slot prop is required");
    let t = e.slot || ey;
    if (!r.slots[t]) throw Error(`Invalid slot "${e.slot}". Valid slot names are ` + new Intl.ListFormat().format(Object.keys(r.slots).map(e => `"${e}"`)) + ".");
    r = r.slots[t]
  }
  let {
    ref: i,
    [ev]: a,
    ...o
  } = r, s = (0, L.B3)((0, L.lq)(t, i)), u = (0, L.dG)(o, e);
  return (0, P.useEffect)(() => {
    a && a(e)
  }, [a, e]), [u, s]
}

function ew() {
  let [e, t] = (0, P.useState)(!0), n = (0, P.useRef)(!1), r = (0, P.useCallback)(e => {
    n.current = !0, t(!!e)
  }, []);
  return (0, L.bt)(() => {
    !n.current && t(!1)
  }, []), [r, e]
}

function eC(e, t = !0) {
  let [n, r] = (0, P.useState)(!0);
  return eD(e, n && t, (0, P.useCallback)(() => r(!1), [])), n && t
}

function eT(e, t) {
  let [n, r] = (0, P.useState)(!1), i = (0, P.useRef)("idle");
  return !t && e.current && "idle" === i.current && (n = !0, r(!0), i.current = "exiting"), !e.current && "exited" === i.current && (i.current = "idle"), eD(e, n, (0, P.useCallback)(() => {
    i.current = "exited", r(!1)
  }, [])), n
}

function eD(e, t, n) {
  let r = (0, P.useRef)(null);
  t && e.current && (r.current = window.getComputedStyle(e.current).animation), (0, L.bt)(() => {
    if (t && e.current) {
      let t = window.getComputedStyle(e.current);
      if ("none" !== t.animationName && t.animation !== r.current) {
        let t = i => {
            i.target === e.current && (r.removeEventListener("animationend", t), F.flushSync(() => {
              n()
            }))
          },
          r = e.current;
        return r.addEventListener("animationend", t), () => {
          r.removeEventListener("animationend", t)
        }
      }
      n()
    }
  }, [e, t, n])
}
let eM = (0, P.createContext)(!1),
  eO = (0, P.createContext)({}),
  eA = (0, P.createContext)(null),
  ek = (0, P.createContext)(null);

function eR({
  node: e,
  isCurrent: t,
  isDisabled: n
}) {
  var r;
  return P.createElement("li", {
    ...(0, L.zL)(e.props),
    style: e.props.style,
    className: null !== (r = e.props.className) && void 0 !== r ? r : "react-aria-Item"
  }, P.createElement(eE, {
    values: [
      [eA, {
        "aria-current": t ? "page" : null,
        isDisabled: n || t
      }],
      [eO, t ? {
        "aria-current": "page"
      } : null]
    ]
  }, e.rendered))
}
let eN = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
  eI = (0, P.createContext)({}),
  eL = (0, P.createContext)({}),
  eP = (0, P.createContext)({}),
  eB = (0, P.createContext)({}),
  eF = (0, P.createContext)(null),
  eU = (0, P.createContext)(null),
  ej = (0, P.forwardRef)(function(e, t) {
    let {
      children: n,
      style: r,
      className: i
    } = e, {
      headerProps: a,
      weekDays: o
    } = (0, P.useContext)(eU);
    return P.createElement("thead", {
      ...(0, L.zL)(e),
      ...a,
      ref: t,
      style: r,
      className: i || "react-aria-CalendarGridHeader"
    }, P.createElement("tr", null, o.map((e, t) => P.cloneElement(n(e), {
      key: t
    }))))
  }),
  eY = (0, P.forwardRef)(function(e, t) {
    let {
      children: n,
      style: r,
      className: i
    } = e;
    return P.createElement("th", {
      ...(0, L.zL)(e),
      ref: t,
      style: r,
      className: i || "react-aria-CalendarHeaderCell"
    }, n)
  }),
  ez = (0, P.forwardRef)(function(e, t) {
    let {
      children: n,
      style: r,
      className: i
    } = e, a = (0, P.useContext)(eF), {
      startDate: o
    } = (0, P.useContext)(eU), {
      locale: s
    } = (0, l.bU)(), u = (0, j.Rn)(o, s);
    return P.createElement("tbody", {
      ...(0, L.zL)(e),
      ref: t,
      style: r,
      className: i || "react-aria-CalendarGridBody"
    }, [...Array(u).keys()].map(e => P.createElement("tr", {
      key: e
    }, a.getDatesInWeek(e, o).map((e, t) => e ? P.cloneElement(n(e), {
      key: t
    }) : P.createElement("td", {
      key: t
    })))))
  }),
  eH = (0, P.createContext)({}),
  eG = (0, P.createContext)(null),
  eV = (0, P.createContext)(null),
  e$ = (0, P.createContext)(null),
  eZ = (0, P.createContext)({}),
  eK = (0, P.createContext)(null),
  eW = (0, P.forwardRef)(function(e, t) {
    let {
      render: n
    } = (0, P.useContext)(eK);
    return P.createElement(P.Fragment, null, n(e, t))
  }),
  eq = (0, P.createContext)({}),
  eQ = (0, P.forwardRef)(function(e, t) {
    [e, t] = ex(e, t, eq);
    let n = eh("header", e, t);
    return n ? n : P.createElement("header", {
      className: "react-aria-Header",
      ...e,
      ref: t
    }, e.children)
  }),
  eX = (0, P.createContext)({}),
  eJ = (0, P.forwardRef)(function(e, t) {
    [e, t] = ex(e, t, eX);
    let {
      elementType: n,
      orientation: r,
      style: i,
      className: a
    } = e, o = n || "hr";
    "hr" === o && "vertical" === r && (o = "div");
    let {
      separatorProps: s
    } = (0, h.z)({
      elementType: n,
      orientation: r
    }), u = eh("separator", e, t);
    return u ? u : P.createElement(o, {
      ...(0, L.zL)(e),
      ...s,
      style: i,
      className: null != a ? a : "react-aria-Separator",
      ref: t,
      slot: e.slot
    })
  }),
  e0 = (0, P.createContext)(null),
  e1 = (0, P.createContext)(null);

function e2({
  props: e,
  listBoxRef: t
}) {
  let {
    portal: n,
    collection: r
  } = ep(e);
  e = {
    ...e,
    collection: r,
    children: null,
    items: null
  };
  let i = (0, G.n_)(e);
  return P.createElement(P.Fragment, null, n, P.createElement(e3, {
    state: i,
    props: e,
    listBoxRef: t
  }))
}

function e3({
  state: e,
  props: t,
  listBoxRef: n
}) {
  let r, i, a, {
      dragAndDropHooks: u
    } = t,
    {
      collection: c,
      selectionManager: l
    } = e,
    d = !!(null == u ? void 0 : u.useDraggableCollectionState),
    f = !!(null == u ? void 0 : u.useDroppableCollectionState),
    {
      listBoxProps: p
    } = (0, m.co)({
      ...t,
      shouldSelectOnPressUp: d || t.shouldSelectOnPressUp
    }, e, n),
    h = el({
      items: c,
      children: e => {
        switch (e.type) {
          case "section":
            return P.createElement(e4, {
              section: e
            });
          case "separator":
            return P.createElement(eJ, e.props);
          case "item":
            return P.createElement(e6, {
              item: e
            });
          default:
            throw Error("Unsupported node type in Menu: " + e.type)
        }
      }
    }),
    _ = (0, P.useRef)(d),
    b = (0, P.useRef)(f);
  _.current !== d && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), b.current !== f && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  let v = !1,
    y = null,
    E = (0, P.useRef)(null);
  if (d && u) {
    r = u.useDraggableCollectionState({
      collection: c,
      selectionManager: l,
      preview: u.renderDragPreview ? E : void 0
    }), u.useDraggableCollection({}, r, n);
    let e = u.DragPreview;
    y = u.renderDragPreview ? P.createElement(e, {
      ref: E
    }, u.renderDragPreview) : null
  }
  if (f && u) {
    i = u.useDroppableCollectionState({
      collection: c,
      selectionManager: l
    });
    let e = t.keyboardDelegate || new g.dp(c, "selection" === l.disabledBehavior ? new Set : l.disabledKeys, n),
      r = u.dropTargetDelegate || new u.ListDropTargetDelegate(c, n);
    a = u.useDroppableCollection({
      keyboardDelegate: e,
      dropTargetDelegate: r
    }, i, n), v = i.isDropTarget({
      type: "root"
    })
  }
  let {
    focusProps: S,
    isFocused: x,
    isFocusVisible: w
  } = (0, o.Fx)(), C = eS({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-ListBox",
    values: {
      isDropTarget: v,
      isEmpty: 0 === e.collection.size,
      isFocused: x,
      isFocusVisible: w
    }
  }), T = null;
  return 0 === e.collection.size && t.renderEmptyState && (T = P.createElement("div", {
    role: "option",
    style: {
      display: "contents"
    }
  }, t.renderEmptyState())), P.createElement(o.MT, null, P.createElement("div", {
    ...(0, L.zL)(t),
    ...(0, s.dG)(p, S, null == a ? void 0 : a.collectionProps),
    ...C,
    ref: n,
    slot: t.slot,
    "data-drop-target": v || void 0,
    "data-empty": 0 === e.collection.size || void 0,
    "data-focused": x || void 0,
    "data-focus-visible": w || void 0
  }, P.createElement(eE, {
    values: [
      [e1, {
        state: e,
        shouldFocusOnHover: t.shouldFocusOnHover,
        dragAndDropHooks: u,
        dragState: r,
        dropState: i
      }],
      [eX, {
        elementType: "li"
      }],
      [eK, {
        render: e5
      }]
    ]
  }, h), T, y))
}

function e4({
  section: e,
  className: t,
  style: n,
  ...r
}) {
  var i, a, o;
  let {
    state: s
  } = (0, P.useContext)(e1), [u, c] = ew(), {
    headingProps: l,
    groupProps: d
  } = (0, m.TV)({
    heading: c,
    "aria-label": null !== (o = e["aria-label"]) && void 0 !== o ? o : void 0
  }), f = el({
    items: s.collection.getChildren(e.key),
    children: e => {
      switch (e.type) {
        case "header": {
          let {
            ref: t,
            ...n
          } = e.props;
          return P.createElement(eQ, {
            ...l,
            ...n,
            ref: (0, L.lq)(u, t)
          }, e.rendered)
        }
        case "item":
          return P.createElement(e6, {
            item: e
          });
        default:
          throw Error("Unsupported element type in Section: " + e.type)
      }
    }
  });
  return P.createElement("section", {
    ...(0, L.zL)(r),
    ...d,
    className: t || (null === (i = e.props) || void 0 === i ? void 0 : i.className) || "react-aria-Section",
    style: n || (null === (a = e.props) || void 0 === a ? void 0 : a.style),
    ref: e.props.ref
  }, f)
}

function e6({
  item: e
}) {
  let t = (0, L.B3)(e.props.ref),
    {
      state: n,
      shouldFocusOnHover: r,
      dragAndDropHooks: i,
      dragState: o,
      dropState: u
    } = (0, P.useContext)(e1),
    {
      optionProps: c,
      labelProps: l,
      descriptionProps: d,
      ...f
    } = (0, m.Fv)({
      key: e.key
    }, n, t),
    {
      hoverProps: p,
      isHovered: h
    } = (0, a.XI)({
      isDisabled: r || !f.allowsSelection && !f.hasAction
    });
  r && (p = {}, h = f.isFocused);
  let g = null;
  o && i && (g = i.useDraggableItem({
    key: e.key
  }, o));
  let _ = null;
  u && i && (_ = i.useDroppableItem({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, u, t));
  let b = e.props,
    v = o && o.isDragging(e.key),
    y = eS({
      ...b,
      id: void 0,
      children: e.rendered,
      defaultClassName: "react-aria-Item",
      values: {
        ...f,
        isHovered: h,
        selectionMode: n.selectionManager.selectionMode,
        selectionBehavior: n.selectionManager.selectionBehavior,
        allowsDragging: !!o,
        isDragging: v,
        isDropTarget: null == _ ? void 0 : _.isDropTarget
      }
    }),
    E = (null == i ? void 0 : i.renderDropIndicator) || (e => P.createElement(eW, {
      target: e
    }));
  return (0, P.useEffect)(() => {
    !e.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
  }, [e.textValue]), P.createElement(P.Fragment, null, (null == i ? void 0 : i.useDropIndicator) && E({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), P.createElement("div", {
    ...(0, s.dG)((0, L.zL)(b), c, p, null == g ? void 0 : g.dragProps, null == _ ? void 0 : _.dropProps),
    ...y,
    ref: t,
    "data-hovered": h || void 0,
    "data-focused": f.isFocused || void 0,
    "data-focus-visible": f.isFocusVisible || void 0,
    "data-pressed": f.isPressed || void 0,
    "data-dragging": v || void 0,
    "data-drop-target": (null == _ ? void 0 : _.isDropTarget) || void 0
  }, P.createElement(eE, {
    values: [
      [eL, {
        slots: {
          label: l,
          description: d
        }
      }]
    ]
  }, y.children)), (null == i ? void 0 : i.useDropIndicator) && null == n.collection.getKeyAfter(e.key) && E({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }))
}

function e5(e, t) {
  t = (0, L.B3)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, P.useContext)(e1), {
    dropIndicatorProps: i,
    isHidden: a,
    isDropTarget: o
  } = n.useDropIndicator(e, r, t);
  return a ? null : P.createElement(e8, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    ref: t
  })
}
let e8 = (0, P.forwardRef)(function(e, t) {
    let {
      dropIndicatorProps: n,
      isDropTarget: r,
      ...i
    } = e, a = eS({
      ...i,
      defaultClassName: "react-aria-DropIndicator",
      values: {
        isDropTarget: r
      }
    });
    return P.createElement("div", {
      ...n,
      ...a,
      role: "option",
      ref: t,
      "data-drop-target": r || void 0
    })
  }),
  e9 = (0, P.createContext)(null),
  e7 = (0, P.createContext)(null);

function te({
  state: e,
  isExiting: t,
  ...n
}) {
  var r;
  let {
    popoverProps: i,
    underlayProps: a,
    arrowProps: o,
    placement: s
  } = (0, _.Sv)({
    ...n,
    offset: null !== (r = n.offset) && void 0 !== r ? r : 8
  }, e), u = n.popoverRef, c = eC(u, !!s), l = eS({
    ...n,
    defaultClassName: "react-aria-Popover",
    values: {
      placement: s,
      isEntering: c,
      isExiting: t
    }
  }), d = {
    ...l.style,
    ...i.style
  };
  return P.createElement(_.aV, null, !n.isNonModal && P.createElement("div", {
    ...a,
    style: {
      position: "fixed",
      inset: 0
    }
  }), P.createElement("div", {
    ...(0, L.dG)((0, L.zL)(n), i),
    ...l,
    ref: u,
    slot: n.slot,
    style: d,
    "data-placement": s,
    "data-entering": c || void 0,
    "data-exiting": t || void 0
  }, !n.isNonModal && P.createElement(_.U4, {
    onDismiss: e.close
  }), P.createElement(e9.Provider, {
    value: {
      arrowProps: o,
      placement: s
    }
  }, l.children), P.createElement(_.U4, {
    onDismiss: e.close
  })))
}
let tt = (0, P.createContext)(null),
  tn = (0, P.createContext)(null),
  tr = (0, P.createContext)(null),
  ti = (0, P.createContext)(null),
  ta = (0, P.createContext)(null),
  to = (0, P.createContext)(null),
  ts = (0, P.createContext)(null),
  tu = (0, P.forwardRef)((e, t) => {
    var n;
    let r = (0, P.useContext)(to),
      i = null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : (0, Z.d)(e),
      a = (0, L.B3)(t),
      o = (0, P.useRef)(null),
      s = eT(a, i.isOpen),
      u = eT(o, i.isOpen),
      c = s || u;
    return i.isOpen || c ? P.createElement(tc, {
      ...e,
      state: i,
      isExiting: c,
      overlayRef: a,
      modalRef: o
    }) : null
  });

function tc(e) {
  let t = e.modalRef,
    {
      state: n
    } = e,
    {
      modalProps: r,
      underlayProps: i
    } = (0, _.NE)(e, n, t),
    a = eC(e.overlayRef),
    o = eS({
      ...e,
      defaultClassName: "react-aria-ModalOverlay",
      values: {
        isEntering: a,
        isExiting: e.isExiting
      }
    }),
    s = (0, L.nP)(),
    u = {
      ...o.style,
      "--visual-viewport-height": s.height + "px"
    };
  return P.createElement(_.aV, null, P.createElement("div", {
    ...(0, L.dG)((0, L.zL)(e), i),
    ...o,
    style: u,
    ref: e.overlayRef,
    "data-entering": a || void 0,
    "data-exiting": e.isExiting || void 0
  }, P.createElement(ts.Provider, {
    value: {
      modalProps: r,
      modalRef: t,
      state: n,
      isExiting: e.isExiting,
      isDismissable: e.isDismissable
    }
  }, o.children)))
}

function tl(e) {
  let {
    modalProps: t,
    modalRef: n,
    isExiting: r,
    isDismissable: i,
    state: a
  } = (0, P.useContext)(ts), o = (0, P.useMemo)(() => (0, L.lq)(e.modalRef, n), [e.modalRef, n]), s = (0, L.B3)(o), u = eC(s), c = eS({
    ...e,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: u,
      isExiting: r
    }
  });
  return P.createElement("div", {
    ...(0, L.dG)((0, L.zL)(e), t),
    ...c,
    ref: s,
    "data-entering": u || void 0,
    "data-exiting": r || void 0
  }, i && P.createElement(_.U4, {
    onDismiss: a.close
  }), c.children)
}
let td = (0, P.createContext)(null),
  tf = (0, P.createContext)({}),
  tp = (0, P.createContext)(null),
  th = (0, P.createContext)(null),
  tm = (0, P.createContext)(null),
  tg = (0, P.createContext)(null);

function t_({
  item: e
}) {
  let {
    state: t,
    dragAndDropHooks: n,
    dragState: r,
    dropState: i
  } = (0, P.useContext)(tg), u = (0, L.B3)(e.props.ref), {
    rowProps: c,
    gridCellProps: l,
    descriptionProps: d,
    ...p
  } = (0, E.Fb)({
    node: e,
    shouldSelectOnPressUp: !!r
  }, t, u), {
    hoverProps: h,
    isHovered: m
  } = (0, a.XI)({
    isDisabled: !p.allowsSelection && !p.hasAction
  }), {
    isFocusVisible: g,
    focusProps: _
  } = (0, o.Fx)(), {
    checkboxProps: b
  } = (0, E.fQ)({
    key: e.key
  }, t), v = null;
  r && n && (v = n.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, r));
  let y = null,
    S = (0, P.useRef)(null),
    {
      visuallyHiddenProps: x
    } = (0, f.S)();
  i && n && (y = n.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, i, S));
  let w = e.props,
    C = r && r.isDragging(e.key),
    T = eS({
      ...w,
      id: void 0,
      children: e.rendered,
      defaultClassName: "react-aria-Item",
      values: {
        ...p,
        isHovered: m,
        isFocusVisible: g,
        selectionMode: t.selectionManager.selectionMode,
        selectionBehavior: t.selectionManager.selectionBehavior,
        allowsDragging: !!r,
        isDragging: C,
        isDropTarget: null == y ? void 0 : y.isDropTarget
      }
    }),
    D = (null == n ? void 0 : n.renderDropIndicator) || (e => P.createElement(eW, {
      target: e
    })),
    M = (0, P.useRef)(null);
  return (0, P.useEffect)(() => {
    r && !M.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
  }, []), (0, P.useEffect)(() => {
    !e.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
  }, [e.textValue]), P.createElement(P.Fragment, null, (null == n ? void 0 : n.useDropIndicator) && D({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), y && !y.isHidden && P.createElement("div", {
    role: "row",
    style: {
      position: "absolute"
    }
  }, P.createElement("div", {
    role: "gridcell"
  }, P.createElement("div", {
    role: "button",
    ...x,
    ...null == y ? void 0 : y.dropIndicatorProps,
    ref: S
  }))), P.createElement("div", {
    ...(0, s.dG)((0, L.zL)(w), c, _, h, null == v ? void 0 : v.dragProps),
    ...T,
    ref: u,
    "data-hovered": m || void 0,
    "data-focused": p.isFocused || void 0,
    "data-focus-visible": g || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-dragging": C || void 0,
    "data-drop-target": (null == y ? void 0 : y.isDropTarget) || void 0
  }, P.createElement("div", l, P.createElement(eE, {
    values: [
      [e$, b],
      [eI, {
        slots: {
          [ey]: {},
          drag: {
            ...null == v ? void 0 : v.dragButtonProps,
            ref: M,
            style: {
              pointerEvents: "none"
            }
          }
        }
      }],
      [eL, {
        slots: {
          description: d
        }
      }]
    ]
  }, T.children))), (null == n ? void 0 : n.useDropIndicator) && null == t.collection.getKeyAfter(e.key) && D({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }))
}

function tb(e, t) {
  t = (0, L.B3)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, P.useContext)(tg), i = (0, P.useRef)(null), {
    dropIndicatorProps: a,
    isHidden: o,
    isDropTarget: s
  } = n.useDropIndicator(e, r, i);
  return o ? null : P.createElement(tv, {
    ...e,
    dropIndicatorProps: a,
    isDropTarget: s,
    buttonRef: i,
    ref: t
  })
}
let tv = (0, P.forwardRef)(function(e, t) {
  let {
    dropIndicatorProps: n,
    isDropTarget: r,
    buttonRef: i,
    ...a
  } = e, {
    visuallyHiddenProps: o
  } = (0, f.S)(), s = eS({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return P.createElement("div", {
    ...s,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, P.createElement("div", {
    role: "gridcell"
  }, P.createElement("div", {
    ...o,
    role: "button",
    ...n,
    ref: i
  })))
});

function ty() {
  let {
    dragAndDropHooks: e,
    dropState: t
  } = (0, P.useContext)(tg), n = (0, P.useRef)(null), {
    dropIndicatorProps: r
  } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, t, n), i = t.isDropTarget({
    type: "root"
  }), {
    visuallyHiddenProps: a
  } = (0, f.S)();
  return !i && r["aria-hidden"] ? null : P.createElement("div", {
    role: "row",
    "aria-hidden": r["aria-hidden"],
    style: {
      position: "absolute"
    }
  }, P.createElement("div", {
    role: "gridcell"
  }, P.createElement("div", {
    role: "button",
    ...a,
    ...r,
    ref: n
  })))
}
let tE = (0, P.createContext)({}),
  tS = (0, P.createContext)(null),
  tx = (0, P.createContext)(null);

function tw({
  props: e,
  collection: t,
  menuRef: n
}) {
  var r;
  let i = (0, K.D)({
      ...e,
      collection: t,
      children: void 0
    }),
    {
      menuProps: a
    } = (0, S.H9)(e, i, n),
    o = el({
      items: i.collection,
      children: e => {
        switch (e.type) {
          case "section":
            return P.createElement(tC, {
              section: e
            });
          case "separator":
            return P.createElement(eJ, e.props);
          case "item":
            return P.createElement(tT, {
              item: e
            });
          default:
            throw Error("Unsupported node type in Menu: " + e.type)
        }
      }
    });
  return P.createElement("div", {
    ...(0, L.zL)(e),
    ...a,
    ref: n,
    slot: e.slot,
    style: e.style,
    className: null !== (r = e.className) && void 0 !== r ? r : "react-aria-Menu"
  }, P.createElement(eE, {
    values: [
      [tx, i],
      [eX, {
        elementType: "div"
      }]
    ]
  }, o))
}

function tC({
  section: e,
  className: t,
  style: n,
  ...r
}) {
  var i, a, o;
  let s = (0, P.useContext)(tx),
    [u, c] = ew(),
    {
      headingProps: l,
      groupProps: d
    } = (0, S.x7)({
      heading: c,
      "aria-label": null !== (o = e["aria-label"]) && void 0 !== o ? o : void 0
    }),
    f = el({
      items: s.collection.getChildren(e.key),
      children: e => {
        switch (e.type) {
          case "header": {
            let {
              ref: t,
              ...n
            } = e.props;
            return P.createElement(eQ, {
              ...l,
              ...n,
              ref: (0, L.lq)(u, t)
            }, e.rendered)
          }
          case "item":
            return P.createElement(tT, {
              item: e
            });
          default:
            throw Error("Unsupported element type in Section: " + e.type)
        }
      }
    });
  return P.createElement("section", {
    ...(0, L.zL)(r),
    ...d,
    className: t || (null === (i = e.props) || void 0 === i ? void 0 : i.className) || "react-aria-Section",
    style: n || (null === (a = e.props) || void 0 === a ? void 0 : a.style),
    ref: e.props.ref
  }, f)
}

function tT({
  item: e
}) {
  let t = (0, P.useContext)(tx),
    n = (0, L.B3)(e.props.ref),
    {
      menuItemProps: r,
      labelProps: i,
      descriptionProps: a,
      keyboardShortcutProps: u,
      ...c
    } = (0, S.iX)({
      key: e.key
    }, t, n),
    l = e.props,
    {
      isFocusVisible: d,
      focusProps: f
    } = (0, o.Fx)(),
    p = eS({
      ...l,
      id: void 0,
      children: e.rendered,
      defaultClassName: "react-aria-Item",
      values: {
        ...c,
        isHovered: c.isFocused,
        isFocusVisible: d,
        selectionMode: t.selectionManager.selectionMode,
        selectionBehavior: t.selectionManager.selectionBehavior
      }
    }),
    h = (0, L.zL)(l);
  return delete h.id, P.createElement("div", {
    ...(0, s.dG)(h, r, f),
    ...p,
    ref: n,
    "data-hovered": c.isFocused || void 0,
    "data-focused": c.isFocused || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": c.isPressed || void 0
  }, P.createElement(eE, {
    values: [
      [eL, {
        slots: {
          label: i,
          description: a
        }
      }],
      [tE, u]
    ]
  }, p.children))
}
let tD = (0, P.createContext)(null),
  tM = (0, P.createContext)(null),
  tO = (0, P.createContext)(null),
  tA = (0, P.createContext)(null),
  tk = (0, P.createContext)(null),
  tR = (0, P.createContext)(null),
  tN = (0, P.createContext)(null),
  tI = (0, P.createContext)(null),
  tL = (0, P.createContext)(null),
  tP = (0, P.createContext)(null),
  tB = (0, P.createContext)(null),
  tF = Symbol.iterator;
class tU extends eu {
  addNode(e) {
    super.addNode(e), this.columnsDirty || (this.columnsDirty = "column" === e.type), "tableheader" === e.type && (this.head = e), "tablebody" === e.type && (this.body = e)
  }
  commit(e, t) {
    this.updateColumns(), super.commit(e, t)
  }
  updateColumns() {
    if (!this.columnsDirty) return;
    this.rowHeaderColumnKeys = new Set, this.columns = [];
    let e = new Map,
      t = n => {
        if ("column" === n.type) e.set(n.key, n), !n.hasChildNodes && (n.index = this.columns.length, this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
        for (let e of this.getChildren(n.key)) t(e)
      };
    for (let e of this.getChildren(this.head.key)) t(e);
    if (this.headerRows = (0, ee.GL)(e, this.columns), this.columnsDirty = !1, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
  }
  get columnCount() {
    return this.columns.length
  }
  get rows() {
    return [...this.getChildren(this.body.key)]
  }*[tF]() {
    yield* this.getChildren(this.body.key)
  }
  get size() {
    return [...this.getChildren(this.body.key)].length
  }
  getFirstKey() {
    var e;
    return null === (e = [...this.getChildren(this.body.key)][0]) || void 0 === e ? void 0 : e.key
  }
  getLastKey() {
    var e;
    let t = [...this.getChildren(this.body.key)];
    return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key
  }
  getKeyAfter(e) {
    var t;
    let n = this.getItem(e);
    return (null == n ? void 0 : n.type) === "column" ? null !== (t = n.nextKey) && void 0 !== t ? t : null : super.getKeyAfter(e)
  }
  getKeyBefore(e) {
    var t, n;
    let r = this.getItem(e);
    if ((null == r ? void 0 : r.type) === "column") return null !== (n = r.prevKey) && void 0 !== n ? n : null;
    let i = super.getKeyBefore(e);
    return null != i && (null === (t = this.getItem(i)) || void 0 === t ? void 0 : t.type) === "tablebody" ? null : i
  }
  getChildren(e) {
    if (!this.getItem(e)) {
      for (let t of this.headerRows)
        if (t.key === e) return t.childNodes
    }
    return super.getChildren(e)
  }
  clone() {
    let e = super.clone();
    return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e
  }
  getTextValue(e) {
    let t = this.getItem(e);
    if (!t) return "";
    if (t.textValue) return t.textValue;
    let n = this.rowHeaderColumnKeys,
      r = [];
    for (let t of this.getChildren(e)) {
      let e = this.columns[t.index];
      if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break
    }
    return r.join(" ")
  }
  constructor(...e) {
    super(...e), (0, B._)(this, "headerRows", []), (0, B._)(this, "columns", []), (0, B._)(this, "rowHeaderColumnKeys", new Set), (0, B._)(this, "head", new en("tableheader", -1)), (0, B._)(this, "body", new en("tablebody", -2)), (0, B._)(this, "columnsDirty", !0)
  }
}
let tj = (0, P.createContext)(null),
  tY = (0, P.createContext)(null),
  tz = (0, P.forwardRef)(function(e, t) {
    let n, r, i;
    [e, t] = ex(e, t, tj);
    let {
      portal: a,
      collection: u
    } = ep(e, (0, P.useMemo)(() => new tU, [])), c = (0, ee.oy)({
      ...e,
      collection: u,
      children: void 0
    }), {
      gridProps: l
    } = (0, k.x6)(e, c, t), {
      dragAndDropHooks: d
    } = e, f = c.selectionManager, p = !!(null == d ? void 0 : d.useDraggableCollectionState), h = !!(null == d ? void 0 : d.useDroppableCollectionState), m = (0, P.useRef)(p), _ = (0, P.useRef)(h);
    m.current !== p && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), _.current !== h && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
    let b = !1,
      v = null,
      y = (0, P.useRef)(null);
    if (p && d) {
      n = d.useDraggableCollectionState({
        collection: u,
        selectionManager: f,
        preview: d.renderDragPreview ? y : void 0
      }), d.useDraggableCollection({}, n, t);
      let e = d.DragPreview;
      v = d.renderDragPreview ? P.createElement(e, {
        ref: y
      }, d.renderDragPreview) : null
    }
    if (h && d) {
      r = d.useDroppableCollectionState({
        collection: u,
        selectionManager: f
      });
      let e = new g.dp(u, "selection" === f.disabledBehavior ? new Set : f.disabledKeys, t),
        n = d.dropTargetDelegate || new d.ListDropTargetDelegate(u, t);
      i = d.useDroppableCollection({
        keyboardDelegate: e,
        dropTargetDelegate: n
      }, r, t), b = r.isDropTarget({
        type: "root"
      })
    }
    let {
      focusProps: E,
      isFocused: S,
      isFocusVisible: x
    } = (0, o.Fx)(), w = eS({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-Table",
      values: {
        isDropTarget: b,
        isFocused: S,
        isFocusVisible: x
      }
    }), {
      selectionBehavior: C,
      selectionMode: T,
      disallowEmptySelection: D
    } = c.selectionManager, M = (0, P.useMemo)(() => ({
      selectionBehavior: "none" === T ? null : C,
      selectionMode: T,
      disallowEmptySelection: D,
      allowsDragging: p
    }), [C, T, D, p]);
    return P.createElement(P.Fragment, null, P.createElement(eE, {
      values: [
        [tY, {
          state: c,
          dragAndDropHooks: d,
          dragState: n,
          dropState: r
        }],
        [eK, {
          render: t1
        }]
      ]
    }, P.createElement(o.MT, null, P.createElement("table", {
      ...(0, L.zL)(e),
      ...w,
      ...(0, s.dG)(l, E, null == i ? void 0 : i.collectionProps),
      ref: t,
      slot: e.slot,
      "data-drop-target": b || void 0,
      "data-focused": S || void 0,
      "data-focus-visible": x || void 0
    }, P.createElement(tW, {
      collection: u
    }), P.createElement(tq, {
      collection: u,
      isDroppable: h
    }))), v), P.createElement(tH.Provider, {
      value: M
    }, a))
  }),
  tH = (0, P.createContext)(null),
  tG = (0, P.forwardRef)(function(e, t) {
    let n = ed({
        children: e.children,
        items: e.columns
      }),
      r = "function" == typeof e.children ? e.children : null;
    return P.createElement(eb.Provider, {
      value: r
    }, P.createElement("tableheader", {
      ref: em(e, t)
    }, n))
  }),
  tV = (0, P.forwardRef)(function(e, t) {
    var n;
    let r = (0, P.useContext)(eb),
      i = "function" == typeof r ? r : e.children,
      a = ed({
        children: e.title || e.childColumns ? i : null,
        items: e.childColumns
      });
    return P.createElement("column", {
      ref: em(e, t, null !== (n = e.title) && void 0 !== n ? n : e.children)
    }, a)
  }),
  t$ = (0, P.forwardRef)(function(e, t) {
    let n = ed(e);
    return P.createElement("tablebody", {
      ref: em(e, t)
    }, n)
  }),
  tZ = (0, P.forwardRef)(function(e, t) {
    let n = ed({
        children: e.children,
        items: e.columns,
        idScope: e.id
      }),
      r = (0, P.useMemo)(() => ({
        idScope: e.id
      }), [e.id]);
    return P.createElement("item", {
      ref: em(e, t)
    }, P.createElement(e_.Provider, {
      value: r
    }, n))
  }),
  tK = (0, P.forwardRef)(function(e, t) {
    return P.createElement("cell", {
      ref: em(e, t, e.children)
    })
  });

function tW({
  collection: e
}) {
  var t;
  let n = el({
      items: e.headerRows,
      children: (0, P.useCallback)(e => {
        if ("headerrow" === e.type) return P.createElement(tQ, {
          item: e
        });
        throw Error("Unsupported node type in TableHeader: " + e.type)
      }, [])
    }),
    {
      rowGroupProps: r
    } = (0, k.LA)();
  return P.createElement("thead", {
    ...(0, L.zL)(e.head.props),
    ...r,
    ref: e.head.props.ref,
    className: null !== (t = e.head.props.className) && void 0 !== t ? t : "react-aria-TableHeader",
    style: e.head.props.style
  }, n)
}

function tq({
  collection: e,
  isDroppable: t
}) {
  let n, r = el({
      items: e.rows,
      children: (0, P.useCallback)(e => {
        if ("item" === e.type) return P.createElement(tJ, {
          item: e
        });
        throw Error("Unsupported node type in TableBody: " + e.type)
      }, [])
    }),
    i = e.body.props,
    a = eS({
      ...i,
      id: void 0,
      children: void 0,
      defaultClassName: "react-aria-TableBody",
      values: {
        isEmpty: 0 === e.size
      }
    });
  0 === e.size && i.renderEmptyState && (n = P.createElement("tr", {
    role: "row"
  }, P.createElement("td", {
    role: "gridcell",
    colSpan: e.columnCount
  }, i.renderEmptyState())));
  let {
    rowGroupProps: o
  } = (0, k.LA)();
  return P.createElement("tbody", {
    ...(0, s.dG)((0, L.zL)(i), o),
    ...a,
    ref: e.body.props.ref,
    "data-empty": 0 === e.size || void 0
  }, t && P.createElement(t3, null), r, n)
}

function tQ({
  item: e
}) {
  let t = (0, P.useRef)(null),
    {
      state: n
    } = (0, P.useContext)(tY),
    {
      rowProps: r
    } = (0, k.Qm)({
      node: e
    }, n, t),
    {
      checkboxProps: i
    } = (0, k.jp)(n),
    a = el({
      items: n.collection.getChildren(e.key),
      children: e => {
        if ("column" === e.type) return P.createElement(tX, {
          column: e
        });
        throw Error("Unsupported node type in Row: " + e.type)
      }
    });
  return P.createElement("tr", {
    ...r,
    ref: t
  }, P.createElement(eE, {
    values: [
      [e$, {
        slots: {
          selection: i
        }
      }]
    ]
  }, a))
}

function tX({
  column: e
}) {
  var t;
  let n = (0, L.B3)(e.props.ref),
    {
      state: r
    } = (0, P.useContext)(tY),
    {
      columnHeaderProps: i
    } = (0, k.WY)({
      node: e
    }, r, n),
    {
      isFocused: a,
      isFocusVisible: u,
      focusProps: c
    } = (0, o.Fx)(),
    l = e.props,
    d = eS({
      ...l,
      id: void 0,
      children: e.rendered,
      defaultClassName: "react-aria-Column",
      values: {
        isFocused: a,
        isFocusVisible: u,
        allowsSorting: e.props.allowsSorting,
        sortDirection: (null === (t = r.sortDescriptor) || void 0 === t ? void 0 : t.column) === e.key ? r.sortDescriptor.direction : void 0
      }
    });
  return P.createElement("th", {
    ...(0, s.dG)((0, L.zL)(l), i, c),
    ...d,
    colSpan: e.colspan,
    ref: n,
    "data-focused": a || void 0,
    "data-focus-visible": u || void 0
  }, d.children)
}

function tJ({
  item: e
}) {
  let t, n, r = (0, L.B3)(e.props.ref),
    {
      state: i,
      dragAndDropHooks: u,
      dragState: c,
      dropState: l
    } = (0, P.useContext)(tY),
    {
      rowProps: d,
      ...p
    } = (0, k.U)({
      node: e,
      shouldSelectOnPressUp: !!c
    }, i, r),
    {
      isFocused: h,
      isFocusVisible: m,
      focusProps: g
    } = (0, o.Fx)(),
    {
      hoverProps: _,
      isHovered: b
    } = (0, a.XI)({
      isDisabled: !p.allowsSelection && !p.hasAction
    }),
    {
      checkboxProps: v
    } = (0, k.M$)({
      key: e.key
    }, i);
  c && u && (t = u.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, c));
  let y = (0, P.useRef)(null),
    {
      visuallyHiddenProps: E
    } = (0, f.S)();
  l && u && (n = u.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, l, y));
  let S = (null == u ? void 0 : u.renderDropIndicator) || (e => P.createElement(eW, {
      target: e
    })),
    x = (0, P.useRef)(null);
  (0, P.useEffect)(() => {
    c && !x.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
  }, []);
  let w = e.props,
    C = c && c.isDragging(e.key),
    T = eS({
      ...w,
      id: void 0,
      defaultClassName: "react-aria-Row",
      values: {
        ...p,
        isHovered: b,
        isFocused: h,
        isFocusVisible: m,
        selectionMode: i.selectionManager.selectionMode,
        selectionBehavior: i.selectionManager.selectionBehavior,
        isDragging: C,
        isDropTarget: null == n ? void 0 : n.isDropTarget
      }
    }),
    D = el({
      items: i.collection.getChildren(e.key),
      children: e => {
        if ("cell" === e.type) return P.createElement(t0, {
          cell: e
        });
        throw Error("Unsupported node type in Row: " + e.type)
      }
    });
  return P.createElement(P.Fragment, null, (null == u ? void 0 : u.useDropIndicator) && S({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), n && !n.isHidden && P.createElement("tr", {
    role: "row",
    style: {
      height: 0
    }
  }, P.createElement("td", {
    role: "gridcell",
    colSpan: i.collection.columnCount,
    style: {
      padding: 0
    }
  }, P.createElement("div", {
    role: "button",
    ...E,
    ...n.dropIndicatorProps,
    ref: y
  }))), P.createElement("tr", {
    ...(0, s.dG)((0, L.zL)(w), d, g, _, null == t ? void 0 : t.dragProps),
    ...T,
    ref: r,
    "data-hovered": b || void 0,
    "data-focused": p.isFocused || void 0,
    "data-focus-visible": m || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-dragging": C || void 0,
    "data-drop-target": (null == n ? void 0 : n.isDropTarget) || void 0
  }, P.createElement(eE, {
    values: [
      [e$, {
        slots: {
          selection: v
        }
      }],
      [eI, {
        slots: {
          [ey]: {},
          drag: {
            ...null == t ? void 0 : t.dragButtonProps,
            ref: x,
            style: {
              pointerEvents: "none"
            }
          }
        }
      }]
    ]
  }, D)), (null == u ? void 0 : u.useDropIndicator) && null == i.collection.getKeyAfter(e.key) && S({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }))
}

function t0({
  cell: e
}) {
  let t = (0, L.B3)(e.props.ref),
    {
      state: n,
      dragState: r
    } = (0, P.useContext)(tY);
  e.column = n.collection.columns[e.index];
  let {
    gridCellProps: i,
    isPressed: a
  } = (0, k.fs)({
    node: e,
    shouldSelectOnPressUp: !!r
  }, n, t), {
    isFocused: u,
    isFocusVisible: c,
    focusProps: l
  } = (0, o.Fx)(), d = e.props, f = eS({
    ...d,
    id: void 0,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: u,
      isFocusVisible: c,
      isPressed: a
    }
  });
  return P.createElement("td", {
    ...(0, s.dG)((0, L.zL)(d), i, l),
    ...f,
    ref: t,
    "data-focused": u || void 0,
    "data-focus-visible": c || void 0,
    "data-pressed": a || void 0
  }, f.children)
}

function t1(e, t) {
  t = (0, L.B3)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, P.useContext)(tY), i = (0, P.useRef)(null), {
    dropIndicatorProps: a,
    isHidden: o,
    isDropTarget: s
  } = n.useDropIndicator(e, r, i);
  return o ? null : P.createElement(t2, {
    ...e,
    dropIndicatorProps: a,
    isDropTarget: s,
    buttonRef: i,
    ref: t
  })
}
let t2 = (0, P.forwardRef)(function(e, t) {
  let {
    dropIndicatorProps: n,
    isDropTarget: r,
    buttonRef: i,
    ...a
  } = e, {
    state: o
  } = (0, P.useContext)(tY), {
    visuallyHiddenProps: s
  } = (0, f.S)(), u = eS({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return P.createElement("tr", {
    ...(0, L.zL)(e),
    ...u,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, P.createElement("td", {
    role: "gridcell",
    colSpan: o.collection.columnCount,
    style: {
      padding: 0
    }
  }, P.createElement("div", {
    ...s,
    role: "button",
    ...n,
    ref: i
  })))
});

function t3() {
  let {
    state: e,
    dragAndDropHooks: t,
    dropState: n
  } = (0, P.useContext)(tY), r = (0, P.useRef)(null), {
    dropIndicatorProps: i
  } = t.useDropIndicator({
    target: {
      type: "root"
    }
  }, n, r), a = n.isDropTarget({
    type: "root"
  }), {
    visuallyHiddenProps: o
  } = (0, f.S)();
  return !a && i["aria-hidden"] ? null : P.createElement("tr", {
    role: "row",
    "aria-hidden": i["aria-hidden"],
    style: {
      height: 0
    }
  }, P.createElement("td", {
    role: "gridcell",
    colSpan: e.collection.columnCount,
    style: {
      padding: 0
    }
  }, P.createElement("div", {
    role: "button",
    ...o,
    ...i,
    ref: r
  })))
}
let t4 = (0, P.createContext)(null),
  t6 = (0, P.createContext)(null);

function t5({
  item: e,
  state: t
}) {
  let {
    key: n
  } = e, r = (0, L.B3)(e.props.ref), {
    tabProps: i,
    isSelected: u,
    isDisabled: c,
    isPressed: l
  } = (0, R.xD)({
    key: n
  }, t, r), {
    focusProps: d,
    isFocused: f,
    isFocusVisible: p
  } = (0, o.Fx)(), {
    hoverProps: h,
    isHovered: m
  } = (0, a.XI)({
    isDisabled: c
  }), g = eS({
    ...e.props,
    children: e.rendered,
    defaultClassName: "react-aria-Tab",
    values: {
      isSelected: u,
      isDisabled: c,
      isFocused: f,
      isFocusVisible: p,
      isPressed: l,
      isHovered: m
    }
  }), _ = (0, L.zL)(e.props);
  return delete _.id, P.createElement("div", {
    ...(0, s.dG)(_, i, d, h, g),
    ref: r,
    "data-focus-visible": p || void 0,
    "data-pressed": l || void 0,
    "data-hovered": m || void 0
  })
}
let t8 = (0, P.createContext)(null),
  t9 = (0, P.createContext)({}),
  t7 = (0, P.createContext)(null);

function ne(e) {
  let {
    state: t,
    triggerRef: n,
    tooltipProps: r
  } = (0, P.useContext)(t7), i = (0, P.useRef)(null), {
    overlayProps: a,
    arrowProps: o,
    placement: u
  } = (0, _.tN)({
    placement: e.placement || "top",
    targetRef: n,
    overlayRef: i,
    offset: e.offset,
    crossOffset: e.crossOffset,
    isOpen: t.isOpen
  }), c = eC(i, !!u), l = eS({
    ...e,
    defaultClassName: "react-aria-Tooltip",
    values: {
      placement: u,
      isEntering: c,
      isExiting: e.isExiting
    }
  });
  e = (0, s.dG)(e, a);
  let {
    tooltipProps: d
  } = (0, I.l)(e, t);
  return P.createElement("div", {
    ...(0, s.dG)(r, d),
    ref: (0, L.lq)(i, e.tooltipRef),
    ...l,
    style: {
      ...l.style,
      ...a.style
    },
    "data-placement": u,
    "data-entering": c || void 0,
    "data-exiting": e.isExiting || void 0
  }, P.createElement(e9.Provider, {
    value: {
      arrowProps: o,
      placement: u
    }
  }, l.children))
}