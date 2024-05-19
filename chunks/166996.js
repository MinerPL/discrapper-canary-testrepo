"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("47120"), a("610138"), a("216116"), a("78328"), a("815648");
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  r = a("399606"),
  c = a("481060"),
  u = a("626135"),
  o = a("463571"),
  d = a("894653"),
  m = a("34674"),
  g = a("132871"),
  p = a("981631"),
  _ = a("811167");

function f(e) {
  let {
    currentCategoryId: t,
    className: a,
    countsByCategory: s,
    onView: f
  } = e, h = (0, g.useApplicationDirectoryHistory)(e => e.guildId), C = (0, r.useStateFromStores)([d.default], () => d.default.getCategories()), R = n.useMemo(() => [(0, m.getAllCategory)(), ...C], [C]), I = (0, g.getCurrentView)();
  return (0, l.jsx)(c.TabBar, {
    className: i()(_.container, a),
    selectedItem: t,
    type: "top-pill",
    onItemSelect: e => {
      if (e === t) return;
      let a = R.find(t => t.id === e);
      u.default.track(p.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        category: a.name,
        category_id: a.id,
        current_page: null == I ? void 0 : I.type,
        guild_id: h
      }), f(a)
    },
    orientation: "vertical",
    children: R.map(e => {
      var a;
      let n = e.id,
        r = e.name,
        u = (0, m.getCategoryIcon)(e),
        d = i()(_.category, {
          [_.activeCategory]: t === n
        }),
        g = new URLSearchParams;
      return g.set("category_id", n.toString()), (0, l.jsx)(c.TabBar.Item, {
        id: n,
        "aria-label": r,
        disableItemStyles: !0,
        children: (0, l.jsxs)(o.default, {
          href: "".concat(p.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(g),
          className: d,
          children: [(0, l.jsx)(u, {
            className: _.icon,
            width: "24",
            height: "24"
          }), (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            children: r
          }), null != s ? (0, l.jsx)(c.Text, {
            className: _.count,
            variant: "text-md/normal",
            color: "text-muted",
            children: null !== (a = null == s ? void 0 : s[n]) && void 0 !== a ? a : 0
          }) : null]
        })
      }, n)
    })
  })
}