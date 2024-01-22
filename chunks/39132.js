"use strict";
n.r(t), n.d(t, {
  useLink: function() {
    return s
  }
});
var r = n("290895"),
  i = n("780095"),
  o = n("495912");

function s(e, t) {
  let {
    elementType: n = "a",
    onPress: s,
    onPressStart: a,
    onPressEnd: c,
    onClick: u,
    isDisabled: d,
    ...l
  } = e, f = {};
  "a" !== n && (f = {
    role: "link",
    tabIndex: d ? void 0 : 0
  });
  let {
    focusableProps: p
  } = (0, i.useFocusable)(e, t), {
    pressProps: h,
    isPressed: g
  } = (0, o.usePress)({
    onPress: s,
    onPressStart: a,
    onPressEnd: c,
    isDisabled: d,
    ref: t
  }), b = (0, r.filterDOMProps)(l, {
    labelable: !0
  }), v = (0, r.mergeProps)(p, h);
  return {
    isPressed: g,
    linkProps: (0, r.mergeProps)(b, {
      ...v,
      ...f,
      "aria-disabled": d || void 0,
      "aria-current": e["aria-current"],
      onClick: e => {
        var t;
        null === (t = h.onClick) || void 0 === t || t.call(h, e), u && (u(e), console.warn("onClick is deprecated, please use onPress"))
      }
    })
  }
}