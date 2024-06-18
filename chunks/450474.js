"use strict";
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(296386),
  a = t(150192),
  r = t(987134),
  o = t(465670),
  c = t(203377),
  d = t(71988);
s.Z = e => {
  let {
    guild: s,
    guildMetadata: t,
    menuPlacement: u,
    disabled: E
  } = e, _ = e => {
    let {
      secondaryCategoryIds: n
    } = t, i = e.map(e => e.value);
    if (e.length < n.length) n.filter(e => !i.includes(e)).forEach(e => (0, l.K0)(s.id, e));
    else {
      if (n.length >= c.Pg) return;
      i.filter(e => !n.includes(e)).forEach(e => (0, l.Kq)(s.id, e))
    }
  }, I = e => {
    (0, l.K0)(s.id, e)
  }, T = e => {
    e.preventDefault(), e.stopPropagation()
  }, N = a.Z.getAllCategories().map(e => {
    let {
      categoryId: s,
      name: t
    } = e;
    return {
      value: s,
      label: t
    }
  });
  return (0, n.jsx)(r.Z, {
    value: t.secondaryCategoryIds,
    searchable: !0,
    clearable: !1,
    options: N,
    onChange: e => _(e),
    multiValueRenderer: e => {
      let {
        label: s,
        value: t
      } = e;
      return (0, n.jsxs)("span", {
        className: d.subcategory,
        onMouseDown: T,
        children: [s, (0, n.jsx)(i.Clickable, {
          className: d.closeWrapper,
          onClick: () => I(t),
          children: (0, n.jsx)(o.Z, {
            width: 16,
            height: 16,
            className: d.close
          })
        })]
      })
    },
    menuPlacement: u,
    disabled: E,
    isMulti: !0
  })
}