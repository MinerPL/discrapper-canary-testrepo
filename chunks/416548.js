"use strict";
n.r(t), n.d(t, {
  GridKeyboardDelegate: function() {
    return p
  },
  useGrid: function() {
    return Q
  },
  useGridRowGroup: function() {
    return ee
  },
  useGridRow: function() {
    return et
  },
  useGridCell: function() {
    return en
  },
  useGridSelectionCheckbox: function() {
    return ei
  },
  useHighlightSelectionDescription: function() {
    return J
  },
  useGridSelectionAnnouncement: function() {
    return X
  }
}), n("222007"), n("424973");
var r = n("872834"),
  i = n("828761"),
  o = n("290895"),
  s = n("884691"),
  a = n("181551"),
  c = n("780095"),
  u = n("628364"),
  d = n("362561"),
  l = n("495912");

function f(e) {
  return e && e.__esModule ? e.default : e
}
class p {
  isCell(e) {
    return "cell" === e.type
  }
  isRow(e) {
    return "row" === e.type || "item" === e.type
  }
  findPreviousKey(e, t) {
    let n = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
    for (; null != n;) {
      let e = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
      n = this.collection.getKeyBefore(n)
    }
  }
  findNextKey(e, t) {
    let n = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
    for (; null != n;) {
      let e = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
      n = this.collection.getKeyAfter(n)
    }
  }
  getKeyBelow(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findNextKey(e)))) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return (0, r.getNthItem)((0, r.getChildNodes)(n, this.collection), t.index).key
      }
      if ("row" === this.focusMode) return e
    }
  }
  getKeyAbove(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findPreviousKey(e)))) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return (0, r.getNthItem)((0, r.getChildNodes)(n, this.collection), t.index).key
      }
      if ("row" === this.focusMode) return e
    }
  }
  getKeyRightOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let e = (0, r.getChildNodes)(t, this.collection);
        return "rtl" === this.direction ? (0, r.getLastItem)(e).key : (0, r.getFirstItem)(e).key
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey),
          i = (0, r.getChildNodes)(n, this.collection),
          o = "rtl" === this.direction ? (0, r.getNthItem)(i, t.index - 1) : (0, r.getNthItem)(i, t.index + 1);
        return o ? o.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e)
      }
    }
  }
  getKeyLeftOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let e = (0, r.getChildNodes)(t, this.collection);
        return "rtl" === this.direction ? (0, r.getFirstItem)(e).key : (0, r.getLastItem)(e).key
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey),
          i = (0, r.getChildNodes)(n, this.collection),
          o = "rtl" === this.direction ? (0, r.getNthItem)(i, t.index + 1) : (0, r.getNthItem)(i, t.index - 1);
        return o ? o.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e)
      }
    }
  }
  getFirstKey(e, t) {
    let n;
    if (null != e) {
      if (!(n = this.collection.getItem(e))) return;
      if (this.isCell(n) && !t) {
        let e = this.collection.getItem(n.parentKey);
        return (0, r.getFirstItem)((0, r.getChildNodes)(e, this.collection)).key
      }
    }
    if (null != (e = this.findNextKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
      let t = this.collection.getItem(e);
      e = (0, r.getFirstItem)((0, r.getChildNodes)(t, this.collection)).key
    }
    return e
  }
  getLastKey(e, t) {
    let n;
    if (null != e) {
      if (!(n = this.collection.getItem(e))) return;
      if (this.isCell(n) && !t) {
        let e = this.collection.getItem(n.parentKey),
          t = (0, r.getChildNodes)(e, this.collection);
        return (0, r.getLastItem)(t).key
      }
    }
    if (null != (e = this.findPreviousKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
      let t = this.collection.getItem(e),
        n = (0, r.getChildNodes)(t, this.collection);
      e = (0, r.getLastItem)(n).key
    }
    return e
  }
  getItem(e) {
    return this.ref.current.querySelector('[data-key="'.concat(e, '"]'))
  }
  getItemRect(e) {
    var t;
    if (this.layout) return null === (t = this.layout.getLayoutInfo(e)) || void 0 === t ? void 0 : t.rect;
    let n = this.getItem(e);
    if (n) return new i.Rect(n.offsetLeft, n.offsetTop, n.offsetWidth, n.offsetHeight)
  }
  getPageHeight() {
    var e, t, n;
    return this.layout ? null === (e = this.layout.virtualizer) || void 0 === e ? void 0 : e.visibleRect.height : null === (t = this.ref) || void 0 === t ? void 0 : null === (n = t.current) || void 0 === n ? void 0 : n.offsetHeight
  }
  getContentHeight() {
    var e, t;
    return this.layout ? this.layout.getContentSize().height : null === (e = this.ref) || void 0 === e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.scrollHeight
  }
  getKeyPageAbove(e) {
    let t = this.getItemRect(e);
    if (!t) return null;
    let n = Math.max(0, t.maxY - this.getPageHeight());
    for (; t && t.y > n;) e = this.getKeyAbove(e), t = this.getItemRect(e);
    return e
  }
  getKeyPageBelow(e) {
    let t = this.getItemRect(e);
    if (!t) return null;
    let n = this.getPageHeight(),
      r = Math.min(this.getContentHeight(), t.y + n);
    for (; t && t.maxY < r;) {
      let n = this.getKeyBelow(e);
      t = this.getItemRect(n), null != n && (e = n)
    }
    return e
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let n = this.collection,
      i = null != t ? t : this.getFirstKey(),
      o = n.getItem(i);
    "cell" === o.type && (i = o.parentKey);
    let s = !1;
    for (; null != i;) {
      let t = n.getItem(i);
      if (t.textValue) {
        let n = t.textValue.slice(0, e.length);
        if (0 === this.collator.compare(n, e)) {
          if (this.isRow(t) && "cell" === this.focusMode) return (0, r.getFirstItem)((0, r.getChildNodes)(t, this.collection)).key;
          return t.key
        }
      }
      null == (i = this.findNextKey(i)) && !s && (i = this.getFirstKey(), s = !0)
    }
    return null
  }
  constructor(e) {
    this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.ref = e.ref, this.direction = e.direction, this.collator = e.collator, this.layout = e.layout, this.focusMode = e.focusMode || "row"
  }
}
let h = new WeakMap;
var g = {},
  b = {},
  v = {},
  m = {},
  y = {},
  x = {},
  w = {},
  S = {},
  k = {},
  _ = {},
  E = {},
  M = {},
  D = {},
  C = {},
  P = {},
  T = {},
  A = {},
  R = {},
  I = {},
  O = {},
  j = {},
  N = {},
  L = {},
  F = {},
  B = {},
  z = {},
  K = {},
  V = {},
  U = {},
  q = {},
  H = {},
  G = {},
  W = {},
  Z = {},
  Y = {};

function X(e, t) {
  var n;
  let {
    getRowText: r = e => {
      var r, i, o;
      return null !== (n = null === (i = (r = t.collection).getTextValue) || void 0 === i ? void 0 : i.call(r, e)) && void 0 !== n ? n : null === (o = t.collection.getItem(e)) || void 0 === o ? void 0 : o.textValue
    }
  } = e, i = (0, a.useLocalizedStringFormatter)(f(g)), c = t.selectionManager.rawSelection, u = (0, s.useRef)(c);
  (0, o.useUpdateEffect)(() => {
    var e;
    if (!t.selectionManager.isFocused) {
      u.current = c;
      return
    }
    let n = $(c, u.current),
      o = $(u.current, c),
      s = "replace" === t.selectionManager.selectionBehavior,
      a = [];
    if (1 === t.selectionManager.selectedKeys.size && s) {
      if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
        let e = r(t.selectionManager.selectedKeys.keys().next().value);
        e && a.push(i.format("selectedItem", {
          item: e
        }))
      }
    } else if (1 === n.size && 0 === o.size) {
      let e = r(n.keys().next().value);
      e && a.push(i.format("selectedItem", {
        item: e
      }))
    } else if (1 === o.size && 0 === n.size && t.collection.getItem(o.keys().next().value)) {
      let e = r(o.keys().next().value);
      e && a.push(i.format("deselectedItem", {
        item: e
      }))
    }
    "multiple" === t.selectionManager.selectionMode && (0 === a.length || "all" === c || c.size > 1 || "all" === u.current || (null === (e = u.current) || void 0 === e ? void 0 : e.size) > 1) && a.push("all" === c ? i.format("selectedAll") : i.format("selectedCount", {
      count: c.size
    })), a.length > 0 && (0, d.announce)(a.join(" ")), u.current = c
  }, [c])
}

function $(e, t) {
  let n = new Set;
  if ("all" === e || "all" === t) return n;
  for (let r of e.keys()) !t.has(r) && n.add(r);
  return n
}

function J(e) {
  let t = (0, a.useLocalizedStringFormatter)(f(g)),
    n = (0, l.useInteractionModality)(),
    r = ("pointer" === n || "virtual" === n || null == n) && "undefined" != typeof window && "ontouchstart" in window,
    i = (0, s.useMemo)(() => {
      let n, i = e.selectionManager.selectionMode,
        o = e.selectionManager.selectionBehavior;
      return r && (n = t.format("longPressToSelect")), "replace" === o && "none" !== i && e.hasItemActions ? n : void 0
    }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, r]);
  return (0, o.useDescription)(i)
}

function Q(e, t, n) {
  let {
    isVirtualized: r,
    keyboardDelegate: i,
    focusMode: d,
    scrollRef: l,
    getRowText: f,
    onRowAction: g,
    onCellAction: b
  } = e, {
    selectionManager: v
  } = t;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let m = (0, a.useCollator)({
      usage: "search",
      sensitivity: "base"
    }),
    {
      direction: y
    } = (0, a.useLocale)(),
    x = t.selectionManager.disabledBehavior,
    w = (0, s.useMemo)(() => i || new p({
      collection: t.collection,
      disabledKeys: "selection" === x ? new Set : t.disabledKeys,
      ref: n,
      direction: y,
      collator: m,
      focusMode: d
    }), [i, t.collection, t.disabledKeys, x, n, y, m, d]),
    {
      collectionProps: S
    } = (0, u.useSelectableCollection)({
      ref: n,
      selectionManager: v,
      keyboardDelegate: w,
      isVirtualized: r,
      scrollRef: l
    }),
    k = (0, o.useId)(e.id);
  h.set(t, {
    keyboardDelegate: w,
    actions: {
      onRowAction: g,
      onCellAction: b
    }
  });
  let _ = J({
      selectionManager: v,
      hasItemActions: !!(g || b)
    }),
    E = (0, o.filterDOMProps)(e, {
      labelable: !0
    }),
    M = (0, s.useCallback)(e => {
      if (v.isFocused) {
        !e.currentTarget.contains(e.target) && v.setFocused(!1);
        return
      }
      e.currentTarget.contains(e.target) && v.setFocused(!0)
    }, [v]),
    D = (0, s.useMemo)(() => ({
      onBlur: S.onBlur,
      onFocus: M
    }), [M, S.onBlur]),
    C = (0, c.useHasTabbableChild)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    P = (0, o.mergeProps)(E, {
      role: "grid",
      id: k,
      "aria-multiselectable": "multiple" === v.selectionMode ? "true" : void 0
    }, t.isKeyboardNavigationDisabled ? D : S, 0 === t.collection.size && {
      tabIndex: C ? -1 : 0
    }, _);
  return r && (P["aria-rowcount"] = t.collection.size, P["aria-colcount"] = t.collection.columnCount), X({
    getRowText: f
  }, t), {
    gridProps: P
  }
}

function ee() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  }
}

function et(e, t, n) {
  let {
    node: r,
    isVirtualized: i,
    shouldSelectOnPressUp: o,
    onAction: s
  } = e, {
    actions: {
      onRowAction: a
    }
  } = h.get(t), {
    itemProps: c,
    ...d
  } = (0, u.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: i,
    shouldSelectOnPressUp: o,
    onAction: a ? () => a(r.key) : s,
    isDisabled: 0 === t.collection.size
  }), l = t.selectionManager.isSelected(r.key), f = {
    role: "row",
    "aria-selected": "none" !== t.selectionManager.selectionMode ? l : void 0,
    "aria-disabled": d.isDisabled || void 0,
    ...c
  };
  return i && (f["aria-rowindex"] = r.index + 1), {
    rowProps: f,
    ...d
  }
}

function en(e, t, n) {
  var r;
  let {
    node: i,
    isVirtualized: d,
    focusMode: f = "child",
    shouldSelectOnPressUp: p,
    onAction: g
  } = e, {
    direction: b
  } = (0, a.useLocale)(), {
    keyboardDelegate: v,
    actions: {
      onCellAction: m
    }
  } = h.get(t), y = (0, s.useRef)(null), x = () => {
    let e = (0, c.getFocusableTreeWalker)(n.current);
    if ("child" === f) {
      if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
      let r = "last" === t.selectionManager.childFocusStrategy ? er(e) : e.firstChild();
      if (r) {
        (0, c.focusSafely)(r);
        return
      }
    }(null != y.current && i.key !== y.current || !n.current.contains(document.activeElement)) && (0, c.focusSafely)(n.current)
  }, {
    itemProps: w,
    isPressed: S
  } = (0, u.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: i.key,
    ref: n,
    isVirtualized: d,
    focus: x,
    shouldSelectOnPressUp: p,
    onAction: m ? () => m(i.key) : g,
    isDisabled: 0 === t.collection.size
  }), k = (0, o.mergeProps)(w, {
    role: "gridcell",
    onKeyDownCapture: e => {
      if (!e.currentTarget.contains(e.target) || t.isKeyboardNavigationDisabled) return;
      let r = (0, c.getFocusableTreeWalker)(n.current);
      switch (r.currentNode = document.activeElement, e.key) {
        case "ArrowLeft": {
          let t = "rtl" === b ? r.nextNode() : r.previousNode();
          if ("child" === f && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, c.focusSafely)(t), (0, o.scrollIntoViewport)(t, {
            containingElement: (0, o.getScrollParent)(n.current)
          });
          else {
            if (v.getKeyLeftOf(i.key) !== i.key) break;
            e.preventDefault(), e.stopPropagation(), "cell" === f && "rtl" === b ? ((0, c.focusSafely)(n.current), (0, o.scrollIntoViewport)(n.current, {
              containingElement: (0, o.getScrollParent)(n.current)
            })) : (r.currentNode = n.current, (t = "rtl" === b ? r.firstChild() : er(r)) && ((0, c.focusSafely)(t), (0, o.scrollIntoViewport)(t, {
              containingElement: (0, o.getScrollParent)(n.current)
            })))
          }
          break
        }
        case "ArrowRight": {
          let t = "rtl" === b ? r.previousNode() : r.nextNode();
          if ("child" === f && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, c.focusSafely)(t), (0, o.scrollIntoViewport)(t, {
            containingElement: (0, o.getScrollParent)(n.current)
          });
          else {
            if (v.getKeyRightOf(i.key) !== i.key) break;
            e.preventDefault(), e.stopPropagation(), "cell" === f && "ltr" === b ? ((0, c.focusSafely)(n.current), (0, o.scrollIntoViewport)(n.current, {
              containingElement: (0, o.getScrollParent)(n.current)
            })) : (r.currentNode = n.current, (t = "rtl" === b ? er(r) : r.firstChild()) && ((0, c.focusSafely)(t), (0, o.scrollIntoViewport)(t, {
              containingElement: (0, o.getScrollParent)(n.current)
            })))
          }
          break
        }
        case "ArrowUp":
        case "ArrowDown":
          !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
      }
    },
    onFocus: e => {
      if (y.current = i.key, e.target !== n.current) {
        !(0, l.isFocusVisible)() && t.selectionManager.setFocusedKey(i.key);
        return
      }
      requestAnimationFrame(() => {
        "child" === f && document.activeElement === n.current && x()
      })
    }
  });
  return d && (k["aria-colindex"] = (null !== (r = i.colIndex) && void 0 !== r ? r : i.index) + 1), p && null != k.tabIndex && null == k.onPointerDown && (k.onPointerDown = e => {
    let t = e.currentTarget,
      n = t.getAttribute("tabindex");
    t.removeAttribute("tabindex"), requestAnimationFrame(() => {
      t.setAttribute("tabindex", n)
    })
  }), {
    gridCellProps: k,
    isPressed: S
  }
}

function er(e) {
  let t, n;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}

function ei(e, t) {
  let {
    key: n
  } = e, r = t.selectionManager, i = (0, o.useId)(), s = !t.selectionManager.canSelectItem(n), c = t.selectionManager.isSelected(n), u = (0, a.useLocalizedStringFormatter)(f(g));
  return {
    checkboxProps: {
      id: i,
      "aria-label": u.format("select"),
      isSelected: c,
      isDisabled: s,
      onChange: () => r.select(n)
    }
  }
}
g = {
  "ar-AE": b = {
    deselectedItem: e => "".concat(e.item, " غير المحدد"),
    longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
    select: "تحديد",
    selectedAll: "جميع العناصر المحددة.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "لم يتم تحديد عناصر",
      one: () => "".concat(t.number(e.count), " عنصر محدد"),
      other: () => "".concat(t.number(e.count), " عنصر محدد")
    }), "."),
    selectedItem: e => "".concat(e.item, " المحدد")
  },
  "bg-BG": v = {
    deselectedItem: e => "".concat(e.item, " не е избран."),
    longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
    select: "Изберете",
    selectedAll: "Всички елементи са избрани.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Няма избрани елементи",
      one: () => "".concat(t.number(e.count), " избран елемент"),
      other: () => "".concat(t.number(e.count), " избрани елементи")
    }), "."),
    selectedItem: e => "".concat(e.item, " избран.")
  },
  "cs-CZ": m = {
    deselectedItem: e => "Položka ".concat(e.item, " nen\xed vybr\xe1na."),
    longPressToSelect: "Dlouh\xfdm stisknut\xedm přejdete do režimu v\xfdběru.",
    select: "Vybrat",
    selectedAll: "Vybr\xe1ny všechny položky.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nevybr\xe1ny ž\xe1dn\xe9 položky",
      one: () => "Vybr\xe1na ".concat(t.number(e.count), " položka"),
      other: () => "Vybr\xe1no ".concat(t.number(e.count), " položek")
    }), "."),
    selectedItem: e => "Vybr\xe1na položka ".concat(e.item, ".")
  },
  "da-DK": y = {
    deselectedItem: e => "".concat(e.item, " ikke valgt."),
    longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
    select: "V\xe6lg",
    selectedAll: "Alle elementer valgt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ingen elementer valgt",
      one: () => "".concat(t.number(e.count), " element valgt"),
      other: () => "".concat(t.number(e.count), " elementer valgt")
    }), "."),
    selectedItem: e => "".concat(e.item, " valgt.")
  },
  "de-DE": x = {
    deselectedItem: e => "".concat(e.item, " nicht ausgew\xe4hlt."),
    longPressToSelect: "Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.",
    select: "Ausw\xe4hlen",
    selectedAll: "Alle Elemente ausgew\xe4hlt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Keine Elemente ausgew\xe4hlt",
      one: () => "".concat(t.number(e.count), " Element ausgew\xe4hlt"),
      other: () => "".concat(t.number(e.count), " Elemente ausgew\xe4hlt")
    }), "."),
    selectedItem: e => "".concat(e.item, " ausgew\xe4hlt.")
  },
  "el-GR": w = {
    deselectedItem: e => "Δεν επιλέχθηκε το στοιχείο ".concat(e.item, "."),
    longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
    select: "Επιλογή",
    selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Δεν επιλέχθηκαν στοιχεία",
      one: () => "Επιλέχθηκε ".concat(t.number(e.count), " στοιχείο"),
      other: () => "Επιλέχθηκαν ".concat(t.number(e.count), " στοιχεία")
    }), "."),
    selectedItem: e => "Επιλέχθηκε το στοιχείο ".concat(e.item, ".")
  },
  "en-US": S = {
    deselectedItem: e => "".concat(e.item, " not selected."),
    select: "Select",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "No items selected",
      one: () => "".concat(t.number(e.count), " item selected"),
      other: () => "".concat(t.number(e.count), " items selected")
    }), "."),
    selectedAll: "All items selected.",
    selectedItem: e => "".concat(e.item, " selected."),
    longPressToSelect: "Long press to enter selection mode."
  },
  "es-ES": k = {
    deselectedItem: e => "".concat(e.item, " no seleccionado."),
    longPressToSelect: "Mantenga pulsado para abrir el modo de selecci\xf3n.",
    select: "Seleccionar",
    selectedAll: "Todos los elementos seleccionados.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ning\xfan elemento seleccionado",
      one: () => "".concat(t.number(e.count), " elemento seleccionado"),
      other: () => "".concat(t.number(e.count), " elementos seleccionados")
    }), "."),
    selectedItem: e => "".concat(e.item, " seleccionado.")
  },
  "et-EE": _ = {
    deselectedItem: e => "".concat(e.item, " pole valitud."),
    longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
    select: "Vali",
    selectedAll: "K\xf5ik \xfcksused valitud.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "\xdcksusi pole valitud",
      one: () => "".concat(t.number(e.count), " \xfcksus valitud"),
      other: () => "".concat(t.number(e.count), " \xfcksust valitud")
    }), "."),
    selectedItem: e => "".concat(e.item, " valitud.")
  },
  "fi-FI": E = {
    deselectedItem: e => "Kohdetta ".concat(e.item, " ei valittu."),
    longPressToSelect: "Siirry valintatilaan painamalla pitk\xe4\xe4n.",
    select: "Valitse",
    selectedAll: "Kaikki kohteet valittu.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ei yht\xe4\xe4n kohdetta valittu",
      one: () => "".concat(t.number(e.count), " kohde valittu"),
      other: () => "".concat(t.number(e.count), " kohdetta valittu")
    }), "."),
    selectedItem: e => "".concat(e.item, " valittu.")
  },
  "fr-FR": M = {
    deselectedItem: e => "".concat(e.item, " non s\xe9lectionn\xe9."),
    longPressToSelect: "Appuyez de mani\xe8re prolong\xe9e pour passer en mode de s\xe9lection.",
    select: "S\xe9lectionner",
    selectedAll: "Tous les \xe9l\xe9ments s\xe9lectionn\xe9s.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Aucun \xe9l\xe9ment s\xe9lectionn\xe9",
      one: () => "".concat(t.number(e.count), " \xe9l\xe9ment s\xe9lectionn\xe9"),
      other: () => "".concat(t.number(e.count), " \xe9l\xe9ments s\xe9lectionn\xe9s")
    }), "."),
    selectedItem: e => "".concat(e.item, " s\xe9lectionn\xe9.")
  },
  "he-IL": D = {
    deselectedItem: e => "".concat(e.item, " לא נבחר."),
    longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
    select: "בחר",
    selectedAll: "כל הפריטים נבחרו.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "לא נבחרו פריטים",
      one: () => "פריט ".concat(t.number(e.count), " נבחר"),
      other: () => "".concat(t.number(e.count), " פריטים נבחרו")
    }), "."),
    selectedItem: e => "".concat(e.item, " נבחר.")
  },
  "hr-HR": C = {
    deselectedItem: e => "Stavka ".concat(e.item, " nije odabrana."),
    longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
    select: "Odaberite",
    selectedAll: "Odabrane su sve stavke.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nije odabrana nijedna stavka",
      one: () => "Odabrana je ".concat(t.number(e.count), " stavka"),
      other: () => "Odabrano je ".concat(t.number(e.count), " stavki")
    }), "."),
    selectedItem: e => "Stavka ".concat(e.item, " je odabrana.")
  },
  "hu-HU": P = {
    deselectedItem: e => "".concat(e.item, " nincs kijel\xf6lve."),
    longPressToSelect: "Nyomja hosszan a kijel\xf6l\xe9shez.",
    select: "Kijel\xf6l\xe9s",
    selectedAll: "Az \xf6sszes elem kijel\xf6lve.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Egy elem sincs kijel\xf6lve",
      one: () => "".concat(t.number(e.count), " elem kijel\xf6lve"),
      other: () => "".concat(t.number(e.count), " elem kijel\xf6lve")
    }), "."),
    selectedItem: e => "".concat(e.item, " kijel\xf6lve.")
  },
  "it-IT": T = {
    deselectedItem: e => "".concat(e.item, " non selezionato."),
    longPressToSelect: "Premi a lungo per passare alla modalit\xe0 di selezione.",
    select: "Seleziona",
    selectedAll: "Tutti gli elementi selezionati.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nessun elemento selezionato",
      one: () => "".concat(t.number(e.count), " elemento selezionato"),
      other: () => "".concat(t.number(e.count), " elementi selezionati")
    }), "."),
    selectedItem: e => "".concat(e.item, " selezionato.")
  },
  "ja-JP": A = {
    deselectedItem: e => "".concat(e.item, " が選択されていません。"),
    longPressToSelect: "長押しして選択モードを開きます。",
    select: "選択",
    selectedAll: "すべての項目を選択しました。",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "項目が選択されていません",
      one: () => "".concat(t.number(e.count), " 項目を選択しました"),
      other: () => "".concat(t.number(e.count), " 項目を選択しました")
    }), "。"),
    selectedItem: e => "".concat(e.item, " を選択しました。")
  },
  "ko-KR": R = {
    deselectedItem: e => "".concat(e.item, "이(가) 선택되지 않았습니다."),
    longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
    select: "선택",
    selectedAll: "모든 항목이 선택되었습니다.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "선택된 항목이 없습니다",
      one: () => "".concat(t.number(e.count), "개 항목이 선택되었습니다"),
      other: () => "".concat(t.number(e.count), "개 항목이 선택되었습니다")
    }), "."),
    selectedItem: e => "".concat(e.item, "이(가) 선택되었습니다.")
  },
  "lt-LT": I = {
    deselectedItem: e => "".concat(e.item, " nepasirinkta."),
    longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
    select: "Pasirinkti",
    selectedAll: "Pasirinkti visi elementai.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nepasirinktas nė vienas elementas",
      one: () => "Pasirinktas ".concat(t.number(e.count), " elementas"),
      other: () => "Pasirinkta elementų: ".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "Pasirinkta: ".concat(e.item, ".")
  },
  "lv-LV": O = {
    deselectedItem: e => "Vienums ".concat(e.item, " nav atlasīts."),
    longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
    select: "Atlasīt",
    selectedAll: "Atlasīti visi vienumi.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nav atlasīts neviens vienums",
      one: () => "Atlasīto vienumu skaits: ".concat(t.number(e.count)),
      other: () => "Atlasīto vienumu skaits: ".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "Atlasīts vienums ".concat(e.item, ".")
  },
  "nb-NO": j = {
    deselectedItem: e => "".concat(e.item, " er ikke valgt."),
    longPressToSelect: "Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.",
    select: "Velg",
    selectedAll: "Alle elementer er valgt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Ingen elementer er valgt",
      one: () => "".concat(t.number(e.count), " element er valgt"),
      other: () => "".concat(t.number(e.count), " elementer er valgt")
    }), "."),
    selectedItem: e => "".concat(e.item, " er valgt.")
  },
  "nl-NL": N = {
    deselectedItem: e => "".concat(e.item, " niet geselecteerd."),
    longPressToSelect: "Druk lang om de selectiemodus te openen.",
    select: "Selecteren",
    selectedAll: "Alle items geselecteerd.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Geen items geselecteerd",
      one: () => "".concat(t.number(e.count), " item geselecteerd"),
      other: () => "".concat(t.number(e.count), " items geselecteerd")
    }), "."),
    selectedItem: e => "".concat(e.item, " geselecteerd.")
  },
  "pl-PL": L = {
    deselectedItem: e => "Nie zaznaczono ".concat(e.item, "."),
    longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
    select: "Zaznacz",
    selectedAll: "Wszystkie zaznaczone elementy.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nie zaznaczono żadnych element\xf3w",
      one: () => "".concat(t.number(e.count), " zaznaczony element"),
      other: () => "".concat(t.number(e.count), " zaznaczonych element\xf3w")
    }), "."),
    selectedItem: e => "Zaznaczono ".concat(e.item, ".")
  },
  "pt-BR": F = {
    deselectedItem: e => "".concat(e.item, " n\xe3o selecionado."),
    longPressToSelect: "Mantenha pressionado para entrar no modo de sele\xe7\xe3o.",
    select: "Selecionar",
    selectedAll: "Todos os itens selecionados.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nenhum item selecionado",
      one: () => "".concat(t.number(e.count), " item selecionado"),
      other: () => "".concat(t.number(e.count), " itens selecionados")
    }), "."),
    selectedItem: e => "".concat(e.item, " selecionado.")
  },
  "pt-PT": B = {
    deselectedItem: e => "".concat(e.item, " n\xe3o selecionado."),
    longPressToSelect: "Prima continuamente para entrar no modo de sele\xe7\xe3o.",
    select: "Selecionar",
    selectedAll: "Todos os itens selecionados.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nenhum item selecionado",
      one: () => "".concat(t.number(e.count), " item selecionado"),
      other: () => "".concat(t.number(e.count), " itens selecionados")
    }), "."),
    selectedItem: e => "".concat(e.item, " selecionado.")
  },
  "ro-RO": z = {
    deselectedItem: e => "".concat(e.item, " neselectat."),
    longPressToSelect: "Apăsați lung pentru a intra \xeen modul de selectare.",
    select: "Selectare",
    selectedAll: "Toate elementele selectate.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Niciun element selectat",
      one: () => "".concat(t.number(e.count), " element selectat"),
      other: () => "".concat(t.number(e.count), " elemente selectate")
    }), "."),
    selectedItem: e => "".concat(e.item, " selectat.")
  },
  "ru-RU": K = {
    deselectedItem: e => "".concat(e.item, " не выбрано."),
    longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
    select: "Выбрать",
    selectedAll: "Выбраны все элементы.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Нет выбранных элементов",
      one: () => "".concat(t.number(e.count), " элемент выбран"),
      other: () => "".concat(t.number(e.count), " элементов выбрано")
    }), "."),
    selectedItem: e => "".concat(e.item, " выбрано.")
  },
  "sk-SK": V = {
    deselectedItem: e => "Nevybrat\xe9 položky: ".concat(e.item, "."),
    longPressToSelect: "Dlhš\xedm stlačen\xedm prejdite do režimu v\xfdberu.",
    select: "Vybrať",
    selectedAll: "Všetky vybrat\xe9 položky.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Žiadne vybrat\xe9 položky",
      one: () => "".concat(t.number(e.count), " vybrat\xe1 položka"),
      other: () => "Počet vybrat\xfdch položiek:".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "Vybrat\xe9 položky: ".concat(e.item, ".")
  },
  "sl-SI": U = {
    deselectedItem: e => "Element ".concat(e.item, " ni izbran."),
    longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
    select: "Izberite",
    selectedAll: "Vsi elementi so izbrani.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Noben element ni izbran",
      one: () => "".concat(t.number(e.count), " element je izbran"),
      other: () => "".concat(t.number(e.count), " elementov je izbranih")
    }), "."),
    selectedItem: e => "Element ".concat(e.item, " je izbran.")
  },
  "sr-SP": q = {
    deselectedItem: e => "".concat(e.item, " nije izabrano."),
    longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
    select: "Izaberite",
    selectedAll: "Izabrane su sve stavke.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Nije izabrana nijedna stavka",
      one: () => "Izabrana je ".concat(t.number(e.count), " stavka"),
      other: () => "Izabrano je ".concat(t.number(e.count), " stavki")
    }), "."),
    selectedItem: e => "".concat(e.item, " je izabrano.")
  },
  "sv-SE": H = {
    deselectedItem: e => "".concat(e.item, " ej markerat."),
    longPressToSelect: "Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.",
    select: "Markera",
    selectedAll: "Alla markerade objekt.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Inga markerade objekt",
      one: () => "".concat(t.number(e.count), " markerat objekt"),
      other: () => "".concat(t.number(e.count), " markerade objekt")
    }), "."),
    selectedItem: e => "".concat(e.item, " markerat.")
  },
  "tr-TR": G = {
    deselectedItem: e => "".concat(e.item, " se\xe7ilmedi."),
    longPressToSelect: "Se\xe7im moduna girmek i\xe7in uzun basın.",
    select: "Se\xe7",
    selectedAll: "T\xfcm \xf6geler se\xe7ildi.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Hi\xe7bir \xf6ge se\xe7ilmedi",
      one: () => "".concat(t.number(e.count), " \xf6ge se\xe7ildi"),
      other: () => "".concat(t.number(e.count), " \xf6ge se\xe7ildi")
    }), "."),
    selectedItem: e => "".concat(e.item, " se\xe7ildi.")
  },
  "uk-UA": W = {
    deselectedItem: e => "".concat(e.item, " не вибрано."),
    longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
    select: "Вибрати",
    selectedAll: "Усі елементи вибрано.",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "Жодних елементів не вибрано",
      one: () => "".concat(t.number(e.count), " елемент вибрано"),
      other: () => "Вибрано елементів: ".concat(t.number(e.count))
    }), "."),
    selectedItem: e => "".concat(e.item, " вибрано.")
  },
  "zh-CN": Z = {
    deselectedItem: e => "未选择 ".concat(e.item, "。"),
    longPressToSelect: "长按以进入选择模式。",
    select: "选择",
    selectedAll: "已选择所有项目。",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "未选择项目",
      one: () => "已选择 ".concat(t.number(e.count), " 个项目"),
      other: () => "已选择 ".concat(t.number(e.count), " 个项目")
    }), "。"),
    selectedItem: e => "已选择 ".concat(e.item, "。")
  },
  "zh-TW": Y = {
    deselectedItem: e => "未選取「".concat(e.item, "」。"),
    longPressToSelect: "長按以進入選擇模式。",
    select: "選取",
    selectedAll: "已選取所有項目。",
    selectedCount: (e, t) => "".concat(t.plural(e.count, {
      "=0": "未選取任何項目",
      one: () => "已選取 ".concat(t.number(e.count), " 個項目"),
      other: () => "已選取 ".concat(t.number(e.count), " 個項目")
    }), "。"),
    selectedItem: e => "已選取「".concat(e.item, "」。")
  }
}