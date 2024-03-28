"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("481060"),
  s = l("626135"),
  r = l("34674"),
  c = l("190733"),
  o = l("132871"),
  d = l("147890"),
  u = l("981631"),
  p = l("689938"),
  _ = l("266255"),
  m = l("943935");

function f() {
  let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
    [t, l] = a.useState(""),
    f = a.useCallback(() => {
      let l = (0, r.getAllCategory)();
      s.default.track(u.AnalyticEvents.APP_DIRECTORY_SEARCH_STARTED, {
        search_term: t,
        category: l.name,
        current_page: o.ApplicationDirectoryViews.HOME,
        category_id: l.id,
        guild_id: e
      }), (0, d.goSearch)({
        query: t
      })
    }, [e, t]);
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsxs)("div", {
      className: _.searchBarContainer,
      children: [(0, i.jsx)(n.Heading, {
        variant: "display-lg",
        className: _.heading,
        children: p.default.Messages.APP_DIRECTORY_HERO_HEADING
      }), (0, i.jsx)(c.default, {
        className: _.searchBar,
        query: t,
        onChange: l,
        onSubmit: f,
        canShowCta: !0
      })]
    }), (0, i.jsx)("img", {
      src: m,
      alt: "",
      className: _.rightImage
    })]
  })
}