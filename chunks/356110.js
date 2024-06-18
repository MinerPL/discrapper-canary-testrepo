"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(291021),
  a = n(611273);
let l = e => {
  let {
    element: t,
    onChange: n,
    initialOption: l
  } = e, [u, _] = r.useState("");
  r.useEffect(() => {
    _(null != l ? l : "")
  }, [l]);
  let d = t.name,
    {
      title: c,
      options: E
    } = t.data,
    I = r.useCallback(e => {
      null != e && (_(e), n(e))
    }, [n]);
  return (0, i.jsxs)("div", {
    className: a.marginBottom8,
    children: [null != c && (0, i.jsx)("div", {
      className: a.marginBottom8,
      children: (0, i.jsxs)(s.Text, {
        variant: "text-sm/bold",
        children: [c, t.should_submit_data && (0, i.jsx)("span", {
          className: o.required,
          children: "*"
        })]
      })
    }), (0, i.jsx)(s.SingleSelect, {
      value: u,
      onChange: I,
      options: E
    })]
  }, d)
};
t.Z = e => {
  let {
    elements: t,
    onChange: n,
    state: r
  } = e, s = t.map(e => {
    var t, s;
    let o = e.name;
    return (0, i.jsx)(l, {
      element: e,
      initialOption: null !== (s = null == r ? void 0 : null === (t = r[o]) || void 0 === t ? void 0 : t.value) && void 0 !== s ? s : void 0,
      onChange: e => n(o, e)
    }, o)
  });
  return (0, i.jsx)("div", {
    children: s
  })
}