"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("47120"), l("610138"), l("216116"), l("78328"), l("815648");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("399606"),
  c = l("481060"),
  o = l("626135"),
  d = l("463571"),
  u = l("894653"),
  p = l("34674"),
  _ = l("132871"),
  m = l("981631"),
  f = l("200415");

function h(e) {
  let {
    currentCategoryId: t,
    className: l,
    countsByCategory: n,
    onView: h
  } = e, C = (0, _.useApplicationDirectoryHistory)(e => e.guildId), g = (0, r.useStateFromStores)([u.default], () => u.default.getCategories()), I = a.useMemo(() => [(0, p.getAllCategory)(), ...g], [g]), A = (0, _.getCurrentView)();
  return (0, i.jsx)(c.TabBar, {
    className: s()(f.container, l),
    selectedItem: t,
    type: "top-pill",
    onItemSelect: e => {
      if (e === t) return;
      let l = I.find(t => t.id === e);
      o.default.track(m.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        category: l.name,
        category_id: l.id,
        current_page: null == A ? void 0 : A.type,
        guild_id: C
      }), h(l)
    },
    orientation: "vertical",
    children: I.map(e => {
      var l;
      let a = e.id,
        r = e.name,
        o = (0, p.getCategoryIcon)(e),
        u = s()(f.category, {
          [f.activeCategory]: t === a
        }),
        _ = new URLSearchParams;
      return _.set("category_id", a.toString()), (0, i.jsx)(c.TabBar.Item, {
        id: a,
        "aria-label": r,
        disableItemStyles: !0,
        children: (0, i.jsxs)(d.default, {
          href: "".concat(m.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(_),
          className: u,
          children: [(0, i.jsx)(o, {
            className: f.icon,
            width: "24",
            height: "24"
          }), (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            children: r
          }), null != n ? (0, i.jsx)(c.Text, {
            className: f.count,
            variant: "text-md/normal",
            color: "text-muted",
            children: null !== (l = null == n ? void 0 : n[a]) && void 0 !== l ? l : 0
          }) : null]
        })
      }, a)
    })
  })
}