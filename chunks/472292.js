"use strict";
n.r(t), n.d(t, {
  useGridList: function() {
    return f
  },
  useGridListItem: function() {
    return p
  },
  useGridListSelectionCheckbox: function() {
    return g
  }
}), n("222007"), n("70102"), n("781738");
var r = n("290895"),
  i = n("416548"),
  o = n("780095"),
  s = n("628364"),
  a = n("495912"),
  c = n("884691"),
  u = n("181551");
let d = new WeakMap;

function l(e, t) {
  let {
    id: n
  } = d.get(e);
  if (!n) throw Error("Unknown list");
  return "".concat(n, "-").concat(function(e) {
    return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
  }(t))
}

function f(e, t, n) {
  let {
    isVirtualized: a,
    keyboardDelegate: c,
    onAction: u
  } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let {
    listProps: l
  } = (0, s.useSelectableList)({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: n,
    keyboardDelegate: c,
    isVirtualized: a,
    selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
    shouldFocusWrap: e.shouldFocusWrap
  }), f = (0, r.useId)(e.id);
  d.set(t, {
    id: f,
    onAction: u
  });
  let p = (0, i.useHighlightSelectionDescription)({
      selectionManager: t.selectionManager,
      hasItemActions: !!u
    }),
    h = (0, o.useHasTabbableChild)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    g = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    b = (0, r.mergeProps)(g, {
      role: "grid",
      id: f,
      "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0
    }, 0 === t.collection.size ? {
      tabIndex: h ? -1 : 0
    } : l, p);
  return a && (b["aria-rowcount"] = t.collection.size, b["aria-colcount"] = 1), (0, i.useGridSelectionAnnouncement)({}, t), {
    gridProps: b
  }
}

function p(e, t, n) {
  let {
    node: i,
    isVirtualized: f,
    shouldSelectOnPressUp: p
  } = e, {
    direction: g
  } = (0, u.useLocale)(), {
    onAction: b
  } = d.get(t), v = (0, r.useSlotId)(), m = (0, c.useRef)(null), {
    itemProps: y,
    ...x
  } = (0, s.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: i.key,
    ref: n,
    isVirtualized: f,
    shouldSelectOnPressUp: p,
    onAction: b ? () => b(i.key) : void 0,
    focus: () => {
      (null != m.current && i.key !== m.current || !n.current.contains(document.activeElement)) && (0, o.focusSafely)(n.current)
    }
  }), w = (0, r.mergeProps)(y, {
    role: "row",
    onKeyDownCapture: e => {
      if (!e.currentTarget.contains(e.target)) return;
      let t = (0, o.getFocusableTreeWalker)(n.current);
      switch (t.currentNode = document.activeElement, e.key) {
        case "ArrowLeft": {
          let i = "rtl" === g ? t.nextNode() : t.previousNode();
          if (i) e.preventDefault(), e.stopPropagation(), (0, o.focusSafely)(i), (0, r.scrollIntoViewport)(i, {
            containingElement: (0, r.getScrollParent)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "rtl" === g)(0, o.focusSafely)(n.current), (0, r.scrollIntoViewport)(n.current, {
            containingElement: (0, r.getScrollParent)(n.current)
          });
          else {
            t.currentNode = n.current;
            let e = h(t);
            e && ((0, o.focusSafely)(e), (0, r.scrollIntoViewport)(e, {
              containingElement: (0, r.getScrollParent)(n.current)
            }))
          }
          break
        }
        case "ArrowRight": {
          let i = "rtl" === g ? t.previousNode() : t.nextNode();
          if (i) e.preventDefault(), e.stopPropagation(), (0, o.focusSafely)(i), (0, r.scrollIntoViewport)(i, {
            containingElement: (0, r.getScrollParent)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "ltr" === g)(0, o.focusSafely)(n.current), (0, r.scrollIntoViewport)(n.current, {
            containingElement: (0, r.getScrollParent)(n.current)
          });
          else {
            t.currentNode = n.current;
            let e = h(t);
            e && ((0, o.focusSafely)(e), (0, r.scrollIntoViewport)(e, {
              containingElement: (0, r.getScrollParent)(n.current)
            }))
          }
          break
        }
        case "ArrowUp":
        case "ArrowDown":
          !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
      }
    },
    onFocus: e => {
      if (m.current = i.key, e.target !== n.current) {
        !(0, a.isFocusVisible)() && t.selectionManager.setFocusedKey(i.key);
        return
      }
    },
    "aria-label": i.textValue || void 0,
    "aria-selected": t.selectionManager.canSelectItem(i.key) ? t.selectionManager.isSelected(i.key) : void 0,
    "aria-disabled": t.selectionManager.isDisabled(i.key) || void 0,
    "aria-labelledby": v && i.textValue ? "".concat(l(t, i.key), " ").concat(v) : void 0,
    id: l(t, i.key)
  });
  return f && (w["aria-rowindex"] = i.index + 1), {
    rowProps: w,
    gridCellProps: {
      role: "gridcell",
      "aria-colindex": 1
    },
    descriptionProps: {
      id: v
    },
    ...x
  }
}

function h(e) {
  let t, n;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}

function g(e, t) {
  let {
    key: n
  } = e, {
    checkboxProps: r
  } = (0, i.useGridSelectionCheckbox)(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": "".concat(r.id, " ").concat(l(t, n))
    }
  }
}