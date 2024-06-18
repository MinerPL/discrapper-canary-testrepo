"use strict";
n.d(t, {
  Fb: function() {
    return p
  },
  c: function() {
    return f
  },
  fQ: function() {
    return m
  }
});
var r = n(182823),
  i = n(464593),
  a = n(706682),
  o = n(148836),
  s = n(612001),
  u = n(470079),
  c = n(616073);
let l = new WeakMap;

function d(e, t) {
  let {
    id: n
  } = l.get(e);
  if (!n) throw Error("Unknown list");
  return `${n}-${function(e){return"string"==typeof e?e.replace(/\s*/g,""):""+e}(t)}`
}

function f(e, t, n) {
  let {
    isVirtualized: s,
    keyboardDelegate: u,
    onAction: c,
    linkBehavior: d = "action"
  } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let {
    listProps: f
  } = (0, o._t)({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: n,
    keyboardDelegate: u,
    isVirtualized: s,
    selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: d
  }), p = (0, r.Me)(e.id);
  l.set(t, {
    id: p,
    onAction: c,
    linkBehavior: d
  });
  let h = (0, i.jS)({
      selectionManager: t.selectionManager,
      hasItemActions: !!c
    }),
    m = (0, a.pu)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    g = (0, r.zL)(e, {
      labelable: !0
    }),
    _ = (0, r.dG)(g, {
      role: "grid",
      id: p,
      "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0
    }, 0 === t.collection.size ? {
      tabIndex: m ? -1 : 0
    } : f, h);
  return s && (_["aria-rowcount"] = t.collection.size, _["aria-colcount"] = 1), (0, i.B6)({}, t), {
    gridProps: _
  }
}

function p(e, t, n) {
  let {
    node: i,
    isVirtualized: f,
    shouldSelectOnPressUp: p
  } = e, {
    direction: m
  } = (0, c.bU)(), {
    onAction: g,
    linkBehavior: _
  } = l.get(t), b = (0, r.mp)(), v = (0, u.useRef)(null), {
    itemProps: y,
    ...E
  } = (0, o.Cs)({
    selectionManager: t.selectionManager,
    key: i.key,
    ref: n,
    isVirtualized: f,
    shouldSelectOnPressUp: p,
    onAction: g ? () => g(i.key) : void 0,
    focus: () => {
      (null != v.current && i.key !== v.current || !n.current.contains(document.activeElement)) && (0, a.ex)(n.current)
    },
    linkBehavior: _
  }), S = E.hasAction ? (0, r.ib)(i.props) : {}, x = (0, r.dG)(y, S, {
    role: "row",
    onKeyDownCapture: e => {
      if (!e.currentTarget.contains(e.target)) return;
      let t = (0, a.QL)(n.current);
      switch (t.currentNode = document.activeElement, e.key) {
        case "ArrowLeft": {
          let i = "rtl" === m ? t.nextNode() : t.previousNode();
          if (i) e.preventDefault(), e.stopPropagation(), (0, a.ex)(i), (0, r.Gt)(i, {
            containingElement: (0, r.rP)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "rtl" === m)(0, a.ex)(n.current), (0, r.Gt)(n.current, {
            containingElement: (0, r.rP)(n.current)
          });
          else {
            t.currentNode = n.current;
            let e = h(t);
            e && ((0, a.ex)(e), (0, r.Gt)(e, {
              containingElement: (0, r.rP)(n.current)
            }))
          }
          break
        }
        case "ArrowRight": {
          let i = "rtl" === m ? t.previousNode() : t.nextNode();
          if (i) e.preventDefault(), e.stopPropagation(), (0, a.ex)(i), (0, r.Gt)(i, {
            containingElement: (0, r.rP)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "ltr" === m)(0, a.ex)(n.current), (0, r.Gt)(n.current, {
            containingElement: (0, r.rP)(n.current)
          });
          else {
            t.currentNode = n.current;
            let e = h(t);
            e && ((0, a.ex)(e), (0, r.Gt)(e, {
              containingElement: (0, r.rP)(n.current)
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
      if (v.current = i.key, e.target !== n.current) {
        !(0, s.E)() && t.selectionManager.setFocusedKey(i.key);
        return
      }
    },
    "aria-label": i.textValue || void 0,
    "aria-selected": t.selectionManager.canSelectItem(i.key) ? t.selectionManager.isSelected(i.key) : void 0,
    "aria-disabled": t.selectionManager.isDisabled(i.key) || void 0,
    "aria-labelledby": b && i.textValue ? `${d(t,i.key)} ${b}` : void 0,
    id: d(t, i.key)
  });
  return f && (x["aria-rowindex"] = i.index + 1), {
    rowProps: x,
    gridCellProps: {
      role: "gridcell",
      "aria-colindex": 1
    },
    descriptionProps: {
      id: b
    },
    ...E
  }
}

function h(e) {
  let t, n;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}

function m(e, t) {
  let {
    key: n
  } = e, {
    checkboxProps: r
  } = (0, i.Ug)(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": `${r.id} ${d(t,n)}`
    }
  }
}