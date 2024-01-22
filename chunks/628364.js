"use strict";
n.r(t), n.d(t, {
  useSelectableCollection: function() {
    return l
  },
  useSelectableItem: function() {
    return f
  },
  useSelectableList: function() {
    return b
  },
  ListKeyboardDelegate: function() {
    return g
  },
  useTypeSelect: function() {
    return d
  }
}), n("222007");
var r = n("884691"),
  i = n("780095"),
  o = n("290895"),
  s = n("495912"),
  a = n("181551");

function c(e) {
  return (0, o.isAppleDevice)() ? e.altKey : e.ctrlKey
}

function u(e) {
  return (0, o.isMac)() ? e.metaKey : e.ctrlKey
}

function d(e) {
  let {
    keyboardDelegate: t,
    selectionManager: n,
    onTypeSelect: i
  } = e, o = (0, r.useRef)({
    search: "",
    timeout: null
  }).current;
  return {
    typeSelectProps: {
      onKeyDownCapture: t.getKeyForSearch ? e => {
        let r = function(e) {
          return 1 !== e.length && /^[A-Z]/i.test(e) ? "" : e
        }(e.key);
        if (!r || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
        " " === r && o.search.trim().length > 0 && (e.preventDefault(), !("continuePropagation" in e) && e.stopPropagation()), o.search += r;
        let s = t.getKeyForSearch(o.search, n.focusedKey);
        null == s && (s = t.getKeyForSearch(o.search)), null != s && (n.setFocusedKey(s), i && i(s)), clearTimeout(o.timeout), o.timeout = setTimeout(() => {
          o.search = ""
        }, 1e3)
      } : null
    }
  }
}

function l(e) {
  let t, {
      selectionManager: n,
      keyboardDelegate: l,
      ref: f,
      autoFocus: p = !1,
      shouldFocusWrap: h = !1,
      disallowEmptySelection: g = !1,
      disallowSelectAll: b = !1,
      selectOnFocus: v = "replace" === n.selectionBehavior,
      disallowTypeAhead: m = !1,
      shouldUseVirtualFocus: y,
      allowsTabNavigation: x = !1,
      isVirtualized: w,
      scrollRef: S = f
    } = e,
    {
      direction: k
    } = (0, a.useLocale)(),
    _ = (0, r.useRef)({
      top: 0,
      left: 0
    });
  (0, o.useEvent)(S, "scroll", w ? null : () => {
    _.current = {
      top: S.current.scrollTop,
      left: S.current.scrollLeft
    }
  });
  let E = (0, r.useRef)(p);
  (0, r.useEffect)(() => {
    if (E.current) {
      let e = null;
      "first" === p && (e = l.getFirstKey()), "last" === p && (e = l.getLastKey());
      let t = n.selectedKeys;
      t.size && (e = t.values().next().value), n.setFocused(!0), n.setFocusedKey(e), null == e && !y && (0, i.focusSafely)(f.current)
    }
    E.current = !1
  }, []);
  let M = (0, r.useRef)(n.focusedKey);
  (0, r.useEffect)(() => {
    let e = (0, s.getInteractionModality)();
    if (n.isFocused && null != n.focusedKey && (null == S ? void 0 : S.current)) {
      let t = S.current.querySelector('[data-key="'.concat(n.focusedKey, '"]'));
      t && "keyboard" === e && (!w && (0, o.scrollIntoView)(S.current, t), (0, o.scrollIntoViewport)(t, {
        containingElement: f.current
      }))
    }
    n.isFocused && null == n.focusedKey && null != M.current && (0, i.focusSafely)(f.current), M.current = n.focusedKey
  }, [w, S, n.focusedKey, n.isFocused, f]);
  let D = {
      onKeyDown: e => {
        var t, r, s, a, d, p, m, y;
        if (e.altKey && "Tab" === e.key && e.preventDefault(), !f.current.contains(e.target)) return;
        let w = (t, r) => {
          null != t && (n.setFocusedKey(t, r), e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : v && !c(e) && n.replaceSelection(t))
        };
        switch (e.key) {
          case "ArrowDown":
            if (l.getKeyBelow) {
              e.preventDefault();
              let i = null != n.focusedKey ? l.getKeyBelow(n.focusedKey) : null === (t = l.getFirstKey) || void 0 === t ? void 0 : t.call(l);
              null == i && h && (i = null === (r = l.getFirstKey) || void 0 === r ? void 0 : r.call(l, n.focusedKey)), w(i)
            }
            break;
          case "ArrowUp":
            if (l.getKeyAbove) {
              e.preventDefault();
              let t = null != n.focusedKey ? l.getKeyAbove(n.focusedKey) : null === (s = l.getLastKey) || void 0 === s ? void 0 : s.call(l);
              null == t && h && (t = null === (a = l.getLastKey) || void 0 === a ? void 0 : a.call(l, n.focusedKey)), w(t)
            }
            break;
          case "ArrowLeft":
            if (l.getKeyLeftOf) {
              e.preventDefault();
              let t = l.getKeyLeftOf(n.focusedKey);
              null == t && h && (t = "rtl" === k ? null === (d = l.getFirstKey) || void 0 === d ? void 0 : d.call(l, n.focusedKey) : null === (p = l.getLastKey) || void 0 === p ? void 0 : p.call(l, n.focusedKey)), w(t, "rtl" === k ? "first" : "last")
            }
            break;
          case "ArrowRight":
            if (l.getKeyRightOf) {
              e.preventDefault();
              let t = l.getKeyRightOf(n.focusedKey);
              null == t && h && (t = "rtl" === k ? null === (m = l.getLastKey) || void 0 === m ? void 0 : m.call(l, n.focusedKey) : null === (y = l.getFirstKey) || void 0 === y ? void 0 : y.call(l, n.focusedKey)), w(t, "rtl" === k ? "last" : "first")
            }
            break;
          case "Home":
            if (l.getFirstKey) {
              e.preventDefault();
              let t = l.getFirstKey(n.focusedKey, u(e));
              n.setFocusedKey(t), u(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : v && n.replaceSelection(t)
            }
            break;
          case "End":
            if (l.getLastKey) {
              e.preventDefault();
              let t = l.getLastKey(n.focusedKey, u(e));
              n.setFocusedKey(t), u(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : v && n.replaceSelection(t)
            }
            break;
          case "PageDown":
            l.getKeyPageBelow && (e.preventDefault(), w(l.getKeyPageBelow(n.focusedKey)));
            break;
          case "PageUp":
            l.getKeyPageAbove && (e.preventDefault(), w(l.getKeyPageAbove(n.focusedKey)));
            break;
          case "a":
            u(e) && "multiple" === n.selectionMode && !0 !== b && (e.preventDefault(), n.selectAll());
            break;
          case "Escape":
            e.preventDefault(), !g && n.clearSelection();
            break;
          case "Tab":
            if (!x) {
              if (e.shiftKey) f.current.focus();
              else {
                let e, t, n = (0, i.getFocusableTreeWalker)(f.current, {
                  tabbable: !0
                });
                do(t = n.lastChild()) && (e = t); while (t);
                e && !e.contains(document.activeElement) && (0, o.focusWithoutScrolling)(e)
              }
            }
        }
      },
      onFocus: e => {
        if (n.isFocused) {
          !e.currentTarget.contains(e.target) && n.setFocused(!1);
          return
        }
        if (e.currentTarget.contains(e.target)) {
          if (n.setFocused(!0), null == n.focusedKey) {
            var t, r;
            let i = e => {
                null != e && (n.setFocusedKey(e), v && n.replaceSelection(e))
              },
              o = e.relatedTarget;
            i(o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? null !== (t = n.lastSelectedKey) && void 0 !== t ? t : l.getLastKey() : null !== (r = n.firstSelectedKey) && void 0 !== r ? r : l.getFirstKey())
          } else !w && (S.current.scrollTop = _.current.top, S.current.scrollLeft = _.current.left);
          if (!w && null != n.focusedKey) {
            let e = S.current.querySelector('[data-key="'.concat(n.focusedKey, '"]'));
            e && (!e.contains(document.activeElement) && (0, o.focusWithoutScrolling)(e), "keyboard" === (0, s.getInteractionModality)() && (0, o.scrollIntoViewport)(e, {
              containingElement: f.current
            }))
          }
        }
      },
      onBlur: e => {
        !e.currentTarget.contains(e.relatedTarget) && n.setFocused(!1)
      },
      onMouseDown(e) {
        S.current === e.target && e.preventDefault()
      }
    },
    {
      typeSelectProps: C
    } = d({
      keyboardDelegate: l,
      selectionManager: n
    });
  return !m && (D = (0, o.mergeProps)(C, D)), !y && (t = null == n.focusedKey ? 0 : -1), {
    collectionProps: {
      ...D,
      tabIndex: t
    }
  }
}

function f(e) {
  let {
    selectionManager: t,
    key: n,
    ref: a,
    shouldSelectOnPressUp: d,
    shouldUseVirtualFocus: l,
    focus: f,
    isDisabled: g,
    onAction: b,
    allowsDifferentPressOrigin: v
  } = e, m = e => {
    if ("keyboard" === e.pointerType && c(e)) t.toggleSelection(n);
    else {
      if ("none" === t.selectionMode) return;
      "single" === t.selectionMode ? t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n) : e && e.shiftKey ? t.extendSelection(n) : "toggle" === t.selectionBehavior || e && (u(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? t.toggleSelection(n) : t.replaceSelection(n)
    }
  };
  (0, r.useEffect)(() => {
    n === t.focusedKey && t.isFocused && !l && (f ? f() : document.activeElement !== a.current && (0, i.focusSafely)(a.current))
  }, [a, n, t.focusedKey, t.childFocusStrategy, t.isFocused, l]), g = g || t.isDisabled(n);
  let y = {};
  l || g ? g && (y.onMouseDown = e => {
    e.preventDefault()
  }) : y = {
    tabIndex: n === t.focusedKey ? 0 : -1,
    onFocus(e) {
      e.target === a.current && t.setFocusedKey(n)
    }
  };
  let x = !g && t.canSelectItem(n),
    w = b && !g,
    S = w && ("replace" === t.selectionBehavior ? !x : t.isEmpty),
    k = w && x && "replace" === t.selectionBehavior,
    _ = S || k,
    E = (0, r.useRef)(null),
    M = _ && x,
    D = (0, r.useRef)(!1),
    C = (0, r.useRef)(!1),
    P = {};
  d ? (P.onPressStart = e => {
    E.current = e.pointerType, D.current = M, "keyboard" === e.pointerType && (!_ || h()) && m(e)
  }, v ? (P.onPressUp = e => {
    "keyboard" !== e.pointerType && m(e)
  }, P.onPress = S ? () => b() : null) : P.onPress = e => {
    S || k && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || !!p()) && b() : "keyboard" !== e.pointerType && m(e)
  }) : (P.onPressStart = e => {
    E.current = e.pointerType, D.current = M, C.current = S, ("mouse" === e.pointerType && !S || "keyboard" === e.pointerType && (!b || h())) && m(e)
  }, P.onPress = e => {
    ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && _ && p() || "mouse" === e.pointerType && C.current) && (_ ? b() : m(e))
  }), y["data-key"] = n, P.preventFocusOnPress = l;
  let {
    pressProps: T,
    isPressed: A
  } = (0, s.usePress)(P), R = k ? e => {
    "mouse" === E.current && (e.stopPropagation(), e.preventDefault(), b())
  } : void 0, {
    longPressProps: I
  } = (0, s.useLongPress)({
    isDisabled: !M,
    onLongPress(e) {
      "touch" === e.pointerType && (m(e), t.setSelectionBehavior("toggle"))
    }
  });
  return {
    itemProps: (0, o.mergeProps)(y, x || S ? T : {}, M ? I : {}, {
      onDoubleClick: R,
      onDragStartCapture: e => {
        "touch" === E.current && D.current && e.preventDefault()
      }
    }),
    isPressed: A,
    isSelected: t.isSelected(n),
    isFocused: t.isFocused && t.focusedKey === n,
    isDisabled: g,
    allowsSelection: x,
    hasAction: _
  }
}

function p() {
  let e = window.event;
  return (null == e ? void 0 : e.key) === "Enter"
}

function h() {
  let e = window.event;
  return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space"
}
class g {
  getNextKey(e) {
    for (e = this.collection.getKeyAfter(e); null != e;) {
      if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
      e = this.collection.getKeyAfter(e)
    }
    return null
  }
  getPreviousKey(e) {
    for (e = this.collection.getKeyBefore(e); null != e;) {
      if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
      e = this.collection.getKeyBefore(e)
    }
    return null
  }
  findKey(e, t, n) {
    let r = this.getItem(e);
    if (!r) return null;
    let i = r.getBoundingClientRect();
    do e = t(e), r = this.getItem(e); while (r && n(i, r.getBoundingClientRect()));
    return e
  }
  isSameRow(e, t) {
    return e.top === t.top || e.left !== t.left
  }
  isSameColumn(e, t) {
    return e.left === t.left || e.top !== t.top
  }
  getKeyBelow(e) {
    return "grid" === this.layout && "vertical" === this.orientation ? this.findKey(e, e => this.getNextKey(e), this.isSameRow) : this.getNextKey(e)
  }
  getKeyAbove(e) {
    return "grid" === this.layout && "vertical" === this.orientation ? this.findKey(e, e => this.getPreviousKey(e), this.isSameRow) : this.getPreviousKey(e)
  }
  getNextColumn(e, t) {
    return t ? this.getPreviousKey(e) : this.getNextKey(e)
  }
  getKeyRightOf(e) {
    if ("grid" === this.layout) return "vertical" === this.orientation ? this.getNextColumn(e, "rtl" === this.direction) : this.findKey(e, e => this.getNextColumn(e, "rtl" === this.direction), this.isSameColumn);
    return "horizontal" === this.orientation ? this.getNextColumn(e, "rtl" === this.direction) : null
  }
  getKeyLeftOf(e) {
    if ("grid" === this.layout) return "vertical" === this.orientation ? this.getNextColumn(e, "ltr" === this.direction) : this.findKey(e, e => this.getNextColumn(e, "ltr" === this.direction), this.isSameColumn);
    return "horizontal" === this.orientation ? this.getNextColumn(e, "ltr" === this.direction) : null
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    for (; null != e;) {
      if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
      e = this.collection.getKeyAfter(e)
    }
    return null
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    for (; null != e;) {
      if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
      e = this.collection.getKeyBefore(e)
    }
    return null
  }
  getItem(e) {
    return this.ref.current.querySelector('[data-key="'.concat(e, '"]'))
  }
  getKeyPageAbove(e) {
    let t = this.ref.current,
      n = this.getItem(e);
    if (!n) return null;
    if (!(0, o.isScrollable)(t)) return this.getFirstKey();
    let r = t.getBoundingClientRect(),
      i = n.getBoundingClientRect();
    if ("horizontal" === this.orientation) {
      let o = r.x - t.scrollLeft,
        s = Math.max(0, i.x - o + i.width - r.width);
      for (; n && i.x - o > s;) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
    } else {
      let o = r.y - t.scrollTop,
        s = Math.max(0, i.y - o + i.height - r.height);
      for (; n && i.y - o > s;) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
    }
    return null != e ? e : this.getFirstKey()
  }
  getKeyPageBelow(e) {
    let t = this.ref.current,
      n = this.getItem(e);
    if (!n) return null;
    if (!(0, o.isScrollable)(t)) return this.getLastKey();
    let r = t.getBoundingClientRect(),
      i = n.getBoundingClientRect();
    if ("horizontal" === this.orientation) {
      let o = r.x - t.scrollLeft,
        s = Math.min(t.scrollWidth, i.x - o - i.width + r.width);
      for (; n && i.x - o < s;) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
    } else {
      let o = r.y - t.scrollTop,
        s = Math.min(t.scrollHeight, i.y - o - i.height + r.height);
      for (; n && i.y - o < s;) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
    }
    return null != e ? e : this.getLastKey()
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let n = this.collection,
      r = t || this.getFirstKey();
    for (; null != r;) {
      let t = n.getItem(r),
        i = t.textValue.slice(0, e.length);
      if (t.textValue && 0 === this.collator.compare(i, e)) return r;
      r = this.getKeyBelow(r)
    }
    return null
  }
  constructor(...e) {
    if (1 === e.length) {
      let t = e[0];
      this.collection = t.collection, this.ref = t.ref, this.disabledKeys = t.disabledKeys || new Set, this.orientation = t.orientation, this.direction = t.direction, this.layout = t.layout || "stack"
    } else this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical";
    "stack" === this.layout && "vertical" === this.orientation && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0)
  }
}

function b(e) {
  let {
    selectionManager: t,
    collection: n,
    disabledKeys: i,
    ref: o,
    keyboardDelegate: s,
    autoFocus: c,
    shouldFocusWrap: u,
    isVirtualized: d,
    disallowEmptySelection: f,
    selectOnFocus: p = "replace" === t.selectionBehavior,
    disallowTypeAhead: h,
    shouldUseVirtualFocus: b,
    allowsTabNavigation: v
  } = e, m = (0, a.useCollator)({
    usage: "search",
    sensitivity: "base"
  }), y = t.disabledBehavior, x = (0, r.useMemo)(() => s || new g(n, "selection" === y ? new Set : i, o, m), [s, n, i, o, m, y]), {
    collectionProps: w
  } = l({
    ref: o,
    selectionManager: t,
    keyboardDelegate: x,
    autoFocus: c,
    shouldFocusWrap: u,
    disallowEmptySelection: f,
    selectOnFocus: p,
    disallowTypeAhead: h,
    shouldUseVirtualFocus: b,
    allowsTabNavigation: v,
    isVirtualized: d,
    scrollRef: o
  });
  return {
    listProps: w
  }
}