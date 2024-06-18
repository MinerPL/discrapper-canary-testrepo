"use strict";
n.d(t, {
  Fv: function() {
    return d
  },
  Oj: function() {
    return u
  },
  TV: function() {
    return f
  },
  co: function() {
    return l
  },
  x3: function() {
    return c
  }
});
var r = n(182823),
  i = n(612001),
  a = n(251433),
  o = n(148836),
  s = n(275857);
let u = new WeakMap;

function c(e, t) {
  var n;
  let r = u.get(e);
  if (!r) throw Error("Unknown list");
  return `${r.id}-option-${"string"==typeof(n=t)?n.replace(/\s*/g,""):""+n}`
}

function l(e, t, n) {
  let s = (0, r.zL)(e, {
      labelable: !0
    }),
    c = e.selectionBehavior || "toggle",
    l = e.linkBehavior || ("replace" === c ? "action" : "override");
  "toggle" === c && "action" === l && (l = "override");
  let {
    listProps: d
  } = (0, o._t)({
    ...e,
    ref: n,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    linkBehavior: l
  }), {
    focusWithinProps: f
  } = (0, i.L_)({
    onFocusWithin: e.onFocus,
    onBlurWithin: e.onBlur,
    onFocusWithinChange: e.onFocusChange
  }), p = (0, r.Me)(e.id);
  u.set(t, {
    id: p,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction,
    linkBehavior: l
  });
  let {
    labelProps: h,
    fieldProps: m
  } = (0, a.N)({
    ...e,
    id: p,
    labelElementType: "span"
  });
  return {
    labelProps: h,
    listBoxProps: (0, r.dG)(s, f, "multiple" === t.selectionManager.selectionMode ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...(0, r.dG)(m, d)
    })
  }
}

function d(e, t, n) {
  var a, l, d, f, p, h, m;
  let {
    key: g
  } = e, _ = u.get(t), b = null !== (l = e.isDisabled) && void 0 !== l ? l : t.disabledKeys.has(g), v = null !== (d = e.isSelected) && void 0 !== d ? d : t.selectionManager.isSelected(g), y = null !== (f = e.shouldSelectOnPressUp) && void 0 !== f ? f : null == _ ? void 0 : _.shouldSelectOnPressUp, E = null !== (p = e.shouldFocusOnHover) && void 0 !== p ? p : null == _ ? void 0 : _.shouldFocusOnHover, S = null !== (h = e.shouldUseVirtualFocus) && void 0 !== h ? h : null == _ ? void 0 : _.shouldUseVirtualFocus, x = null !== (m = e.isVirtualized) && void 0 !== m ? m : null == _ ? void 0 : _.isVirtualized, w = (0, r.mp)(), C = (0, r.mp)(), T = {
    role: "option",
    "aria-disabled": b || void 0,
    "aria-selected": "none" !== t.selectionManager.selectionMode ? v : void 0
  };
  !((0, r.V5)() && (0, r.Pf)()) && (T["aria-label"] = e["aria-label"], T["aria-labelledby"] = w, T["aria-describedby"] = C);
  let D = t.collection.getItem(g);
  if (x) {
    let e = Number(null == D ? void 0 : D.index);
    T["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, T["aria-setsize"] = (0, s.is)(t.collection)
  }
  let {
    itemProps: M,
    isPressed: O,
    isFocused: A,
    hasAction: k,
    allowsSelection: R
  } = (0, o.Cs)({
    selectionManager: t.selectionManager,
    key: g,
    ref: n,
    shouldSelectOnPressUp: y,
    allowsDifferentPressOrigin: y && E,
    isVirtualized: x,
    shouldUseVirtualFocus: S,
    isDisabled: b,
    onAction: (null == _ ? void 0 : _.onAction) ? () => {
      var e;
      return null == _ ? void 0 : null === (e = _.onAction) || void 0 === e ? void 0 : e.call(_, g)
    } : void 0,
    linkBehavior: null == _ ? void 0 : _.linkBehavior
  }), {
    hoverProps: N
  } = (0, i.XI)({
    isDisabled: b || !E,
    onHoverStart() {
      !(0, i.E)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(g))
    }
  }), I = (0, r.zL)(null == D ? void 0 : D.props, {
    isLink: !!(null == D ? void 0 : null === (a = D.props) || void 0 === a ? void 0 : a.href)
  });
  return delete I.id, {
    optionProps: {
      ...T,
      ...(0, r.dG)(I, M, N),
      id: c(t, g)
    },
    labelProps: {
      id: w
    },
    descriptionProps: {
      id: C
    },
    isFocused: A,
    isFocusVisible: A && (0, i.E)(),
    isSelected: v,
    isDisabled: b,
    isPressed: O,
    allowsSelection: R,
    hasAction: k
  }
}

function f(e) {
  let {
    heading: t,
    "aria-label": n
  } = e, i = (0, r.Me)();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      id: i,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? i : void 0
    }
  }
}