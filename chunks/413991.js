"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("481060"),
  u = n("911969"),
  o = n("970184"),
  i = n("561684");

function r(e) {
  let t;
  let {
    type: n,
    style: r,
    label: d,
    placeholder: c,
    minLength: m,
    maxLength: p,
    required: f,
    value: E,
    indices: C
  } = e, [S, T] = a.useState(null != E ? E : ""), {
    state: v,
    executeStateUpdate: N,
    error: h
  } = (0, o.useComponentState)(e, null != E ? {
    type: n,
    value: E
  } : void 0);
  a.useEffect(() => {
    (null == v ? void 0 : v.type) === n && T(v.value)
  }, [n, v]);
  let _ = {
    name: d,
    value: S,
    placeholder: c,
    minLength: m,
    maxLength: p,
    required: f,
    onChange: e => {
      T(e), N({
        type: n,
        value: e
      })
    },
    autoFocus: 0 === C[0]
  };
  switch (r) {
    case u.TextComponentStyle.SMALL:
      t = (0, l.jsx)(s.TextInput, {
        ..._
      });
      break;
    case u.TextComponentStyle.PARAGRAPH:
      t = (0, l.jsx)(s.TextArea, {
        ..._
      })
  }
  return (0, l.jsx)(s.FormItem, {
    title: d,
    required: f,
    className: i.formItem,
    error: h,
    children: t
  })
}