"use strict";
n.r(t), n.d(t, {
  useButton: function() {
    return s
  },
  useToggleButton: function() {
    return a
  }
});
var r = n("290895"),
  i = n("780095"),
  o = n("495912");

function s(e, t) {
  let n, {
    elementType: s = "button",
    isDisabled: a,
    onPress: c,
    onPressStart: u,
    onPressEnd: d,
    onPressChange: l,
    preventFocusOnPress: f,
    allowFocusWhenDisabled: p,
    onClick: h,
    href: g,
    target: b,
    rel: v,
    type: m = "button"
  } = e;
  n = "button" === s ? {
    type: m,
    disabled: a
  } : {
    role: "button",
    tabIndex: a ? void 0 : 0,
    href: "a" === s && a ? void 0 : g,
    target: "a" === s ? b : void 0,
    type: "input" === s ? m : void 0,
    disabled: "input" === s ? a : void 0,
    "aria-disabled": a && "input" !== s ? a : void 0,
    rel: "a" === s ? v : void 0
  };
  let {
    pressProps: y,
    isPressed: x
  } = (0, o.usePress)({
    onPressStart: u,
    onPressEnd: d,
    onPressChange: l,
    onPress: c,
    isDisabled: a,
    preventFocusOnPress: f,
    ref: t
  }), {
    focusableProps: w
  } = (0, i.useFocusable)(e, t);
  p && (w.tabIndex = a ? -1 : w.tabIndex);
  let S = (0, r.mergeProps)(w, y, (0, r.filterDOMProps)(e, {
    labelable: !0
  }));
  return {
    isPressed: x,
    buttonProps: (0, r.mergeProps)(n, S, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: e => {
        h && (h(e), console.warn("onClick is deprecated, please use onPress"))
      }
    })
  }
}

function a(e, t, n) {
  let {
    isSelected: i
  } = t, {
    isPressed: o,
    buttonProps: a
  } = s({
    ...e,
    onPress: (0, r.chain)(t.toggle, e.onPress)
  }, n);
  return {
    isPressed: o,
    buttonProps: (0, r.mergeProps)(a, {
      "aria-pressed": i
    })
  }
}