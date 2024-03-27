"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("283167"),
  i = s("868246"),
  r = s("414943"),
  o = s("945330"),
  d = s("53948"),
  u = s("636811"),
  c = e => {
    let {
      guild: t,
      guildMetadata: s,
      menuPlacement: c,
      disabled: E
    } = e, _ = e => {
      let {
        secondaryCategoryIds: a
      } = s, l = e.map(e => e.value);
      if (e.length < a.length) {
        let e = a.filter(e => !l.includes(e));
        e.forEach(e => (0, n.deleteGuildCategory)(t.id, e))
      } else {
        if (a.length >= d.MAX_SUBCATEGORIES) return;
        let e = l.filter(e => !a.includes(e));
        e.forEach(e => (0, n.addGuildCategory)(t.id, e))
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