"use strict";
n.r(t), n.d(t, {
  useCheckbox: function() {
    return c
  },
  useCheckboxGroup: function() {
    return f
  },
  useCheckboxGroupItem: function() {
    return p
  }
}), n("222007");
var r = n("884691"),
  i = n("814842"),
  o = n("290895"),
  s = n("825167"),
  a = n("219870");

function c(e, t, n) {
  let {
    inputProps: o,
    isSelected: s,
    isPressed: a,
    isDisabled: c,
    isReadOnly: u,
    isInvalid: d
  } = (0, i.useToggle)(e, t, n), {
    isIndeterminate: l
  } = e;
  return (0, r.useEffect)(() => {
    n.current && (n.current.indeterminate = l)
  }), {
    inputProps: {
      ...o,
      checked: s
    },
    isSelected: s,
    isPressed: a,
    isDisabled: c,
    isReadOnly: u,
    isInvalid: d
  }
}
let u = new WeakMap,
  d = new WeakMap,
  l = new WeakMap;

function f(e, t) {
  let {
    isDisabled: n,
    name: r
  } = e, {
    labelProps: i,
    fieldProps: a,
    descriptionProps: c,
    errorMessageProps: f
  } = (0, s.useField)({
    ...e,
    labelElementType: "span"
  });
  d.set(t, c.id), l.set(t, f.id);
  let p = (0, o.filterDOMProps)(e, {
    labelable: !0
  });
  return u.set(t, r), {
    groupProps: (0, o.mergeProps)(p, {
      role: "group",
      "aria-disabled": n || void 0,
      ...a
    }),
    labelProps: i,
    descriptionProps: c,
    errorMessageProps: f
  }
}

function p(e, t, n) {
  let r = (0, a.useToggleState)({
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isSelected: t.isSelected(e.value),
      onChange(n) {
        n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
      }
    }),
    i = c({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || u.get(t)
    }, r, n);
  return {
    ...i,
    inputProps: {
      ...i.inputProps,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? l.get(t) : null, d.get(t)].filter(Boolean).join(" ") || void 0
    }
  }
}