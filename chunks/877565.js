"use strict";
n.d(t, {
  HI: function() {
    return a
  },
  gm: function() {
    return o
  }
});
var i = n(735250),
  r = n(470079);
n(419922);
var s = n(156361);

function o(e) {
  let {
    titleWithQuery: t,
    titleWithoutQuery: n,
    query: r,
    getQuery: o,
    headerClassName: a,
    headerTrailingContent: l
  } = e, u = r.length > 0 ? t.format({
    prefix: o(r)
  }) : n;
  return (0, i.jsx)(s.ZP.Title, {
    className: a,
    title: u,
    children: l
  }, "autocomplete-title-".concat(u))
}

function a(e) {
  let {
    query: t,
    selectedIndex: n,
    autocompletes: s,
    onHover: a,
    onClick: l,
    titleWithQuery: u,
    titleWithoutQuery: _,
    Component: d,
    getProps: c,
    getQuery: E,
    key: I,
    indexOffset: T = 0,
    headerClassName: h,
    headerTrailingContent: S,
    footer: f
  } = e;
  if (null == f && (null == s || 0 === s.length)) return null;
  let N = null == s ? void 0 : s.map((e, t) => {
    let i = t + T,
      s = c(e, i);
    return (0, r.createElement)(d, {
      onClick: l,
      onHover: a,
      selected: n === i,
      index: i,
      ...s,
      key: s.key
    })
  });
  return (0, i.jsxs)(r.Fragment, {
    children: [null != u && null != _ ? o({
      titleWithQuery: u,
      titleWithoutQuery: _,
      query: t,
      getQuery: E,
      headerClassName: h,
      headerTrailingContent: S
    }) : null, N, f]
  }, I)
}