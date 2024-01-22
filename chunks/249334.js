"use strict";
n.r(t), n.d(t, {
  useSwitch: function() {
    return i
  }
});
var r = n("814842");

function i(e, t, n) {
  let {
    inputProps: i,
    isSelected: o,
    isPressed: s,
    isDisabled: a,
    isReadOnly: c
  } = (0, r.useToggle)(e, t, n);
  return {
    inputProps: {
      ...i,
      role: "switch",
      checked: o
    },
    isSelected: o,
    isPressed: s,
    isDisabled: a,
    isReadOnly: c
  }
}