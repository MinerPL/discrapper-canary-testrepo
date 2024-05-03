"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
}), t("47120");
var l = t("735250"),
  a = t("470079"),
  r = t("481060"),
  u = t("911969"),
  s = t("970184"),
  o = t("293979"),
  i = t("410896");

function d(e) {
  let n;
  let {
    type: t,
    style: d,
    label: c,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: C,
    value: S
  } = e, [E, v] = a.useState(null != S ? S : ""), {
    state: N,
    executeStateUpdate: h,
    error: T
  } = (0, s.useComponentState)(e, null != S ? {
    type: t,
    value: S
  } : void 0), g = (0, o.useIsFirstTextInputInModal)(e.id);
  a.useEffect(() => {
    (null == N ? void 0 : N.type) === t && v(N.value)
  }, [t, N]);
  let x = {
    name: c,
    value: E,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: C,
    onChange: e => {
      v(e), h({
        type: t,
        value: e
      })
    },
    autoFocus: g
  };
  switch (d) {
    case u.TextComponentStyle.SMALL:
      n = (0, l.jsx)(r.TextInput, {
        ...x
      });
      break;
    case u.TextComponentStyle.PARAGRAPH:
      n = (0, l.jsx)(r.TextArea, {
        ...x
      })
  }
  return (0, l.jsx)(r.FormItem, {
    title: c,
    required: C,
    className: i.formItem,
    error: T,
    children: n
  })
}