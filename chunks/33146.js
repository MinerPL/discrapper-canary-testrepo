"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("411104");
var i = l("735250");
l("470079");
var a = l("481060"),
  n = l("34674"),
  s = l("927356"),
  r = l("689938");

function c(e) {
  let t, l, {
    category: c,
    className: o,
    onViewAll: d
  } = e;
  return null == c || (0, n.isAllCategory)(c) ? (t = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, l = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (t = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({
    categoryName: c.name
  }), l = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
    viewAllHook: (e, t) => (0, i.jsx)(a.Anchor, {
      onClick: d,
      children: e
    }, t)
  })), (0, i.jsx)(s.default, {
    className: o,
    heading: t,
    body: l
  })
}