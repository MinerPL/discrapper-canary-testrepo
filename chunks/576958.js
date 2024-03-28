"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var i = l("735250");
l("470079");
var a = l("481060"),
  n = l("463571"),
  s = l("744142"),
  r = l("981631"),
  c = l("689938"),
  o = l("537669");

function d(e) {
  let {
    applications: t,
    className: l,
    listingClassName: s,
    title: d,
    showViewAll: p,
    onViewOne: _,
    onViewAll: m
  } = e;
  return (0, i.jsxs)("div", {
    className: l,
    children: [null != d ? (0, i.jsxs)("div", {
      className: o.header,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: d
      }), p ? (0, i.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.LINK,
        onClick: m,
        children: c.default.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
      }) : null]
    }) : null, (0, i.jsx)("ul", {
      className: o.list,
      children: t.map(e => (0, i.jsx)(n.default, {
        href: r.Routes.APPLICATION_DIRECTORY_PROFILE(e.id),
        children: (0, i.jsx)(u, {
          className: s,
          application: e,
          onClick: t => {
            let {
              mutualGuilds: l
            } = t;
            return _({
              application: e,
              mutualGuilds: l
            })
          }
        })
      }, e.id))
    })]
  })
}

function u(e) {
  return (0, i.jsx)(s.default, {
    ...e
  })
}