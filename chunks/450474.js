"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("296386"),
  i = s("150192"),
  r = s("987134"),
  o = s("465670"),
  d = s("203377"),
  u = s("850410");
t.default = e => {
  let {
    guild: t,
    guildMetadata: s,
    menuPlacement: c,
    disabled: E
  } = e, _ = e => {
    let {
      secondaryCategoryIds: a
    } = s, l = e.map(e => e.value);
    if (e.length < a.length) a.filter(e => !l.includes(e)).forEach(e => (0, n.deleteGuildCategory)(t.id, e));
    else {
      if (a.length >= d.MAX_SUBCATEGORIES) return;
      l.filter(e => !a.includes(e)).forEach(e => (0, n.addGuildCategory)(t.id, e))
    }
  }, I = e => {
    (0, n.deleteGuildCategory)(t.id, e)
  }, T = e => {
    e.preventDefault(), e.stopPropagation()
  }, S = i.default.getAllCategories().map(e => {
    let {
      categoryId: t,
      name: s
    } = e;
    return {
      value: t,
      label: s
    }
  });
  return (0, a.jsx)(r.default, {
    value: s.secondaryCategoryIds,
    searchable: !0,
    clearable: !1,
    options: S,
    onChange: e => _(e),
    multiValueRenderer: e => {
      let {
        label: t,
        value: s
      } = e;
      return (0, a.jsxs)("span", {
        className: u.subcategory,
        onMouseDown: T,
        children: [t, (0, a.jsx)(l.Clickable, {
          className: u.closeWrapper,
          onClick: () => I(s),
          children: (0, a.jsx)(o.default, {
            width: 16,
            height: 16,
            className: u.close
          })
        })]
      })
    },
    menuPlacement: c,
    disabled: E,
    isMulti: !0
  })
}