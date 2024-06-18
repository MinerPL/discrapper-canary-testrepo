"use strict";
n.d(t, {
  O: function() {
    return l
  },
  a8: function() {
    return p
  },
  u6: function() {
    return f
  }
});
var r = n(470079),
  i = n(705782),
  a = n(201284),
  o = n(820002),
  s = n(182823),
  u = n(251433),
  c = n(22507);

function l(e, t, n) {
  let s = (0, a.Q3)({
      ...e,
      value: t.isSelected
    }),
    {
      isInvalid: u,
      validationErrors: c,
      validationDetails: l
    } = s.displayValidation,
    {
      labelProps: d,
      inputProps: f,
      isSelected: p,
      isPressed: h,
      isDisabled: m,
      isReadOnly: g
    } = (0, o.O)({
      ...e,
      isInvalid: u
    }, t, n);
  (0, i.Q)(e, s, n);
  let {
    isIndeterminate: _,
    isRequired: b,
    validationBehavior: v = "aria"
  } = e;
  return (0, r.useEffect)(() => {
    n.current && (n.current.indeterminate = !!_)
  }), {
    labelProps: d,
    inputProps: {
      ...f,
      checked: p,
      "aria-required": b && "aria" === v || void 0,
      required: b && "native" === v
    },
    isSelected: p,
    isPressed: h,
    isDisabled: m,
    isReadOnly: g,
    isInvalid: u,
    validationErrors: c,
    validationDetails: l
  }
}
let d = new WeakMap;

function f(e, t) {
  let {
    isDisabled: n,
    name: r,
    validationBehavior: i = "aria"
  } = e, {
    isInvalid: a,
    validationErrors: o,
    validationDetails: c
  } = t.displayValidation, {
    labelProps: l,
    fieldProps: f,
    descriptionProps: p,
    errorMessageProps: h
  } = (0, u.U)({
    ...e,
    labelElementType: "span",
    isInvalid: a,
    errorMessage: e.errorMessage || o
  });
  d.set(t, {
    name: r,
    descriptionId: p.id,
    errorMessageId: h.id,
    validationBehavior: i
  });
  let m = (0, s.zL)(e, {
    labelable: !0
  });
  return {
    groupProps: (0, s.dG)(m, {
      role: "group",
      "aria-disabled": n || void 0,
      ...f
    }),
    labelProps: l,
    descriptionProps: p,
    errorMessageProps: h,
    isInvalid: a,
    validationErrors: o,
    validationDetails: c
  }
}

function p(e, t, n) {
  var i, o;
  let s = (0, c.l)({
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isSelected: t.isSelected(e.value),
      onChange(n) {
        n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
      }
    }),
    {
      name: u,
      descriptionId: f,
      errorMessageId: p,
      validationBehavior: h
    } = d.get(t);
  h = null !== (i = e.validationBehavior) && void 0 !== i ? i : h;
  let {
    realtimeValidation: m
  } = (0, a.Q3)({
    ...e,
    value: s.isSelected,
    name: void 0,
    validationBehavior: "aria"
  }), g = (0, r.useRef)(a.PS), _ = () => {
    t.setInvalid(e.value, m.isInvalid ? m : g.current)
  };
  (0, r.useEffect)(_);
  let b = t.realtimeValidation.isInvalid ? t.realtimeValidation : m,
    v = "native" === h ? t.displayValidation : b,
    y = l({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || u,
      isRequired: null !== (o = e.isRequired) && void 0 !== o ? o : t.isRequired,
      validationBehavior: h,
      [a.tL]: {
        realtimeValidation: b,
        displayValidation: v,
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation,
        updateValidation(e) {
          g.current = e, _()
        }
      }
    }, s, n);
  return {
    ...y,
    inputProps: {
      ...y.inputProps,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? p : null, f].filter(Boolean).join(" ") || void 0
    }
  }
}