"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(454585),
  a = n(273744),
  l = n(689938),
  u = n(419076),
  _ = n(611273);
let d = e => {
  let {
    data: {
      title: t,
      subtitle: n,
      placeholder: d,
      rows: c,
      character_limit: E,
      pattern: I
    },
    onChange: T,
    initialText: h,
    isRequired: S
  } = e, f = r.useRef(o.Z.reactParserFor({
    ...o.Z.defaultRules,
    link: a.s
  })), [N, A] = r.useState(""), [m, O] = r.useState("");
  r.useEffect(() => {
    var e;
    A(null !== (e = null == h ? void 0 : h.value) && void 0 !== e ? e : "")
  }, [h]);
  let R = r.useCallback(e => {
    let t = null != I ? new RegExp(I) : null;
    null != t && null == t.exec(e) ? (O(l.Z.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR), T({
      value: e,
      isValid: !1
    })) : null != e && (O(""), A(e), T({
      value: e,
      isValid: !0
    }))
  }, [T, I]);
  return (0, i.jsxs)("div", {
    className: _.marginBottom8,
    children: [null != t && (0, i.jsx)("div", {
      className: _.marginBottom8,
      children: (0, i.jsxs)(s.Text, {
        variant: "text-sm/bold",
        children: [t, S && (0, i.jsx)("span", {
          className: u.required,
          children: "*"
        })]
      })
    }), (0, i.jsx)(s.TextArea, {
      maxLength: E,
      onChange: R,
      value: N,
      error: m,
      rows: c,
      placeholder: d,
      autoFocus: !0
    }), null != n && (0, i.jsx)("div", {
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: f.current(n)
      })
    })]
  })
};
t.Z = e => {
  let {
    elements: t,
    onChange: n,
    state: r
  } = e, s = t.map(e => {
    var t;
    let s = e.name;
    return (0, i.jsx)(d, {
      data: e.data,
      onChange: e => n(s, e.value, e.isValid),
      initialText: null !== (t = null == r ? void 0 : r[s]) && void 0 !== t ? t : void 0,
      isRequired: e.should_submit_data
    }, s)
  });
  return (0, i.jsx)("div", {
    children: s
  })
}