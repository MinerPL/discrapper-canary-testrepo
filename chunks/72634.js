"use strict";
n.r(t), n.d(t, {
  useMultipleSelectionState: function() {
    return a
  },
  SelectionManager: function() {
    return u
  }
}), n("222007"), n("424973");
var r = n("708966"),
  i = n("884691"),
  o = n("846794");
class s extends Set {
  constructor(e, t, n) {
    super(e), e instanceof s ? (this.anchorKey = t || e.anchorKey, this.currentKey = n || e.currentKey) : (this.anchorKey = t, this.currentKey = n)
  }
}

function a(e) {
  let {
    selectionMode: t = "none",
    disallowEmptySelection: n,
    allowDuplicateSelectionEvents: o,
    selectionBehavior: a = "toggle",
    disabledBehavior: u = "all"
  } = e, d = (0, i.useRef)(!1), [, l] = (0, i.useState)(!1), f = (0, i.useRef)(null), p = (0, i.useRef)(null), [, h] = (0, i.useState)(null), v = (0, i.useMemo)(() => c(e.selectedKeys), [e.selectedKeys]), g = (0, i.useMemo)(() => c(e.defaultSelectedKeys, new s), [e.defaultSelectedKeys]), [b, m] = (0, r.useControlledState)(v, g, e.onSelectionChange), y = (0, i.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), [x, w] = (0, i.useState)(a);
  "replace" === a && "toggle" === x && "object" == typeof b && 0 === b.size && w("replace");
  let S = (0, i.useRef)(a);
  return (0, i.useEffect)(() => {
    a !== S.current && (w(a), S.current = a)
  }, [a]), {
    selectionMode: t,
    disallowEmptySelection: n,
    selectionBehavior: x,
    setSelectionBehavior: w,
    get isFocused() {
      return d.current
    },
    setFocused(e) {
      d.current = e, l(e)
    },
    get focusedKey() {
      return f.current
    },
    get childFocusStrategy() {
      return p.current
    },
    setFocusedKey(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "first";
      f.current = e, p.current = t, h(e)
    },
    selectedKeys: b,
    setSelectedKeys(e) {
      (o || ! function(e, t) {
        if (e.size !== t.size) return !1;
        for (let n of e)
          if (!t.has(n)) return !1;
        return !0
      }(e, b)) && m(e)
    },
    disabledKeys: y,
    disabledBehavior: u
  }
}

function c(e, t) {
  return e ? "all" === e ? "all" : new s(e) : t
}
class u {
  get selectionMode() {
    return this.state.selectionMode
  }
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection
  }
  get selectionBehavior() {
    return this.state.selectionBehavior
  }
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e)
  }
  get isFocused() {
    return this.state.isFocused
  }
  setFocused(e) {
    this.state.setFocused(e)
  }
  get focusedKey() {
    return this.state.focusedKey
  }
  get childFocusStrategy() {
    return this.state.childFocusStrategy
  }
  setFocusedKey(e, t) {
    (null == e || this.collection.getItem(e)) && this.state.setFocusedKey(e, t)
  }
  get selectedKeys() {
    return "all" === this.state.selectedKeys ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys
  }
  get rawSelection() {
    return this.state.selectedKeys
  }
  isSelected(e) {
    return "none" !== this.state.selectionMode && (e = this.getKey(e), "all" === this.state.selectedKeys ? this.canSelectItem(e) : this.state.selectedKeys.has(e))
  }
  get isEmpty() {
    return "all" !== this.state.selectedKeys && 0 === this.state.selectedKeys.size
  }
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if ("all" === this.state.selectedKeys) return !0;
    if (null != this._isSelectAll) return this._isSelectAll;
    let e = this.getSelectAllKeys(),
      t = this.state.selectedKeys;
    return this._isSelectAll = e.every(e => t.has(e)), this._isSelectAll
  }
  get firstSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let n = this.collection.getItem(t);
      (!e || n && 0 > (0, o.compareNodeOrder)(this.collection, n, e)) && (e = n)
    }
    return null == e ? void 0 : e.key
  }
  get lastSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let n = this.collection.getItem(t);
      (!e || n && (0, o.compareNodeOrder)(this.collection, n, e) > 0) && (e = n)
    }
    return null == e ? void 0 : e.key
  }
  get disabledKeys() {
    return this.state.disabledKeys
  }
  get disabledBehavior() {
    return this.state.disabledBehavior
  }
  extendSelection(e) {
    let t;
    if ("none" !== this.selectionMode) {
      if ("single" === this.selectionMode) {
        this.replaceSelection(e);
        return
      }
      if (e = this.getKey(e), "all" === this.state.selectedKeys) t = new s([e], e, e);
      else {
        let n = this.state.selectedKeys,
          r = n.anchorKey || e;
        for (let i of (t = new s(n, r, e), this.getKeyRange(r, n.currentKey || e))) t.delete(i);
        for (let n of this.getKeyRange(e, r)) this.canSelectItem(n) && t.add(n)
      }
      this.state.setSelectedKeys(t)
    }
  }
  getKeyRange(e, t) {
    let n = this.collection.getItem(e),
      r = this.collection.getItem(t);
    if (n && r) return 0 >= (0, o.compareNodeOrder)(this.collection, n, r) ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e);
    return []
  }
  getKeyRangeInternal(e, t) {
    let n = [],
      r = e;
    for (; r;) {
      let e = this.collection.getItem(r);
      if ((e && "item" === e.type || "cell" === e.type && this.allowsCellSelection) && n.push(r), r === t) return n;
      r = this.collection.getKeyAfter(r)
    }
    return []
  }
  getKey(e) {
    let t = this.collection.getItem(e);
    if (!t || "cell" === t.type && this.allowsCellSelection) return e;
    for (;
      "item" !== t.type && null != t.parentKey;) t = this.collection.getItem(t.parentKey);
    return t && "item" === t.type ? t.key : null
  }
  toggleSelection(e) {
    if ("none" === this.selectionMode) return;
    if ("single" === this.selectionMode && !this.isSelected(e)) {
      this.replaceSelection(e);
      return
    }
    if (null == (e = this.getKey(e))) return;
    let t = new s("all" === this.state.selectedKeys ? this.getSelectAllKeys() : this.state.selectedKeys);
    t.has(e) ? t.delete(e) : this.canSelectItem(e) && (t.add(e), t.anchorKey = e, t.currentKey = e), (!this.disallowEmptySelection || 0 !== t.size) && this.state.setSelectedKeys(t)
  }
  replaceSelection(e) {
    if ("none" === this.selectionMode || null == (e = this.getKey(e))) return;
    let t = this.canSelectItem(e) ? new s([e], e, e) : new s;
    this.state.setSelectedKeys(t)
  }
  setSelectedKeys(e) {
    if ("none" === this.selectionMode) return;
    let t = new s;
    for (let n of e)
      if (null != (n = this.getKey(n)) && (t.add(n), "single" === this.selectionMode)) break;
    this.state.setSelectedKeys(t)
  }
  getSelectAllKeys() {
    let e = [],
      t = n => {
        for (; n;) {
          if (this.canSelectItem(n)) {
            let r = this.collection.getItem(n);
            "item" === r.type && e.push(n), r.hasChildNodes && (this.allowsCellSelection || "item" !== r.type) && t((0, o.getFirstItem)((0, o.getChildNodes)(r, this.collection)).key)
          }
          n = this.collection.getKeyAfter(n)
        }
      };
    return t(this.collection.getFirstKey()), e
  }
  selectAll() {
    !this.isSelectAll && "multiple" === this.selectionMode && this.state.setSelectedKeys("all")
  }
  clearSelection() {
    !this.disallowEmptySelection && ("all" === this.state.selectedKeys || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new s)
  }
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll()
  }
  select(e, t) {
    "none" !== this.selectionMode && ("single" === this.selectionMode ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : "toggle" === this.selectionBehavior || t && ("touch" === t.pointerType || "virtual" === t.pointerType) ? this.toggleSelection(e) : this.replaceSelection(e))
  }
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys) return !0;
    let t = this.selectedKeys;
    if (e.size !== t.size) return !1;
    for (let n of e)
      if (!t.has(n)) return !1;
    for (let n of t)
      if (!e.has(n)) return !1;
    return !0
  }
  canSelectItem(e) {
    if ("none" === this.state.selectionMode || this.state.disabledKeys.has(e)) return !1;
    let t = this.collection.getItem(e);
    return !!t && ("cell" !== t.type || !!this.allowsCellSelection) || !1
  }
  isDisabled(e) {
    return this.state.disabledKeys.has(e) && "all" === this.state.disabledBehavior
  }
  isLink(e) {
    var t, n;
    return !!(null === (n = this.collection.getItem(e)) || void 0 === n ? void 0 : null === (t = n.props) || void 0 === t ? void 0 : t.href)
  }
  constructor(e, t, n) {
    var r;
    this.collection = e, this.state = t, this.allowsCellSelection = null !== (r = null == n ? void 0 : n.allowsCellSelection) && void 0 !== r && r, this._isSelectAll = null
  }
}