"use strict";
n.d(t, {
  O: function() {
    return o
  }
});
var r = n(182823),
  i = n(706682),
  a = n(612001);

function o(e, t, n) {
  let {
    isDisabled: o = !1,
    isReadOnly: s = !1,
    value: u,
    name: c,
    children: l,
    "aria-label": d,
    "aria-labelledby": f,
    validationState: p = "valid",
    isInvalid: h
  } = e;
  !(null != l) && !(null != d || null != f) && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let {
    pressProps: m,
    isPressed: g
  } = (0, a.r7)({
    isDisabled: o
  }), {
    pressProps: _,
    isPressed: b
  } = (0, a.r7)({
    isDisabled: o || s,
    onPress() {
      t.toggle()
    }
  }), {
    focusableProps: v
  } = (0, i.kc)(e, n), y = (0, r.dG)(m, v), E = (0, r.zL)(e, {
    labelable: !0
  });
  return (0, r.y$)(n, t.isSelected, t.setSelected), {
    labelProps: (0, r.dG)(_, {
      onClick: e => e.preventDefault()
    }),
    inputProps: (0, r.dG)(E, {
      "aria-invalid": h || "invalid" === p || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": s || void 0,
      onChange: e => {
        e.stopPropagation(), t.setSelected(e.target.checked)
      },
      disabled: o,
      ...null == u ? {} : {
        value: u
      },
      name: c,
      type: "checkbox",
      ...y
    }),
    isSelected: t.isSelected,
    isPressed: g || b,
    isDisabled: o,
    isReadOnly: s,
    isInvalid: h || "invalid" === p
  }
}