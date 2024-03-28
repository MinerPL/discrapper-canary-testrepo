"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
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
  m = l("147890"),
  f = l("981631"),
  h = l("689938"),
  C = l("760434");

function g(e) {
  let {
    className: t
  } = e, l = (0, _.useApplicationDirectoryHistory)(e => e.guildId), n = (0, r.useStateFromStores)([u.default], () => u.default.getCategories()), g = a.useMemo(() => [(0, p.getAllCategory)(), ...n], [n]), I = (0, _.getCurrentView)(), A = e => {
    let t = g.find(t => t.id === e);
    o.default.track(f.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: t.name,
      category_id: t.id,
      current_page: null == I ? void 0 : I.type,
      guild_id: l
    }), (0, m.goToCategory)({
      categoryId: t.id
    })
  };
  return (0, i.jsx)("nav", {
    className: s()(C.container, t),
    children: g.map(e => {
      let t = e.id,
        l = e.name,
        a = (0, p.getCategoryIcon)(e),
        n = new URLSearchParams;
      return n.set("category_id", t.toString()), (0, i.jsx)(d.default, {
        href: "".concat(f.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(n),
        children: (0, i.jsxs)(c.Clickable, {
          className: C.category,
          "aria-label": h.default.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({
            categoryName: l
          }),
          onClick: () => A(t),
          children: [(0, i.jsx)(a, {
            className: C.icon,
            width: "24",
            height: "24"
          }), (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            children: l
          })]
        })
      }, t)
    })
  })
}