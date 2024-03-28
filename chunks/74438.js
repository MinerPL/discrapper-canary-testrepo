"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var i = l("735250"),
  a = l("470079"),
  n = l("399606"),
  s = l("626135"),
  r = l("894653"),
  c = l("738130"),
  o = l("132871"),
  d = l("961106"),
  u = l("62413"),
  p = l("603406"),
  _ = l("165209"),
  m = l("981631"),
  f = l("989274");

function h() {
  let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
    t = (0, n.useStateFromStores)([r.default], () => r.default.getCategories()),
    l = (0, o.getPreviousView)();
  return a.useEffect(() => {
    s.default.track(m.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: o.ApplicationDirectoryViews.HOME,
      previous_page: null == l ? void 0 : l.type,
      guild_id: e
    })
  }, [e, l]), (0, i.jsxs)(c.default, {
    children: [(0, i.jsx)(p.default, {}), null != t && t.length > 0 && (0, i.jsx)(d.default, {
      className: f.categoryList
    }), (0, i.jsx)("main", {
      className: f.collectionsContainer,
      children: (0, i.jsx)(u.default, {})
    }), (0, i.jsx)(_.default, {})]
  })
}