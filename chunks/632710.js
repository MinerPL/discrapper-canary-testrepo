"use strict";
n.r(t), n.d(t, {
  useListBox: function() {
    return d
  },
  useOption: function() {
    return l
  },
  useListBoxSection: function() {
    return f
  },
  listData: function() {
    return c
  },
  getItemId: function() {
    return u
  }
}), n("222007"), n("781738"), n("70102");
var r = n("290895"),
  i = n("495912"),
  o = n("825167"),
  s = n("628364"),
  a = n("872834");
let c = new WeakMap;

function u(e, t) {
  var n;
  let r = c.get(e);
  if (!r) throw Error("Unknown list");
  return "".concat(r.id, "-option-").concat("string" == typeof(n = t) ? n.replace(/\s*/g, "") : "" + n)
}

function d(e, t, n) {
  let a = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    {
      listProps: u
    } = (0, s.useSelectableList)({
      ...e,
      ref: n,
      selectionManager: t.selectionManager,
      collection: t.collection,
      disabledKeys: t.disabledKeys
    }),
    {
      focusWithinProps: d
    } = (0, i.useFocusWithin)({
      onFocusWithin: e.onFocus,
      onBlurWithin: e.onBlur,
      onFocusWithinChange: e.onFocusChange
    }),
    l = (0, r.useId)(e.id);
  c.set(t, {
    id: l,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction
  });
  let {
    labelProps: f,
    fieldProps: p
  } = (0, o.useLabel)({
    ...e,
    id: l,
    labelElementType: "span"
  });
  return {
    labelProps: f,
    listBoxProps: (0, r.mergeProps)(a, d, "multiple" === t.selectionManager.selectionMode ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...(0, r.mergeProps)(p, u)
    })
  }
}

function l(e, t, n) {
  var o, d, l, f, p, h, g;
  let {
    key: b
  } = e, v = c.get(t), m = null !== (o = e.isDisabled) && void 0 !== o ? o : t.disabledKeys.has(b), y = null !== (d = e.isSelected) && void 0 !== d ? d : t.selectionManager.isSelected(b), x = null !== (l = e.shouldSelectOnPressUp) && void 0 !== l ? l : null == v ? void 0 : v.shouldSelectOnPressUp, w = null !== (f = e.shouldFocusOnHover) && void 0 !== f ? f : null == v ? void 0 : v.shouldFocusOnHover, S = null !== (p = e.shouldUseVirtualFocus) && void 0 !== p ? p : null == v ? void 0 : v.shouldUseVirtualFocus, k = null !== (h = e.isVirtualized) && void 0 !== h ? h : null == v ? void 0 : v.isVirtualized, _ = (0, r.useSlotId)(), E = (0, r.useSlotId)(), M = {
    role: "option",
    "aria-disabled": m || void 0,
    "aria-selected": "none" !== t.selectionManager.selectionMode ? y : void 0
  };
  if (!((0, r.isMac)() && (0, r.isWebKit)()) && (M["aria-label"] = e["aria-label"], M["aria-labelledby"] = _, M["aria-describedby"] = E), k) {
    let e = Number(null === (g = t.collection.getItem(b)) || void 0 === g ? void 0 : g.index);
    M["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, M["aria-setsize"] = (0, a.getItemCount)(t.collection)
  }
  let {
    itemProps: D,
    isPressed: C,
    isFocused: P,
    hasAction: T,
    allowsSelection: A
  } = (0, s.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: b,
    ref: n,
    shouldSelectOnPressUp: x,
    allowsDifferentPressOrigin: x && w,
    isVirtualized: k,
    shouldUseVirtualFocus: S,
    isDisabled: m,
    onAction: (null == v ? void 0 : v.onAction) ? () => {
      var e;
      return null == v ? void 0 : null === (e = v.onAction) || void 0 === e ? void 0 : e.call(v, b)
    } : void 0
  }), {
    hoverProps: R
  } = (0, i.useHover)({
    isDisabled: m || !w,
    onHoverStart() {
      !(0, i.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(b))
    }
  });
  return {
    optionProps: {
      ...M,
      ...(0, r.mergeProps)(D, R),
      id: u(t, b)
    },
    labelProps: {
      id: _
    },
    descriptionProps: {
      id: E
    },
    isFocused: P,
    isFocusVisible: P && (0, i.isFocusVisible)(),
    isSelected: y,
    isDisabled: m,
    isPressed: C,
    allowsSelection: A,
    hasAction: T
  }
}

function f(e) {
  let {
    heading: t,
    "aria-label": n
  } = e, i = (0, r.useId)();
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