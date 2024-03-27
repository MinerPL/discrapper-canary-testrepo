"use strict";
s.r(t), s.d(t, {
  DropdownMenu: function() {
    return h
  }
});
var n = s("37983"),
  l = s("884691"),
  a = s("416037"),
  i = s.n(a),
  r = s("701800"),
  o = s("141631"),
  c = s("146230"),
  u = s("843455"),
  d = s("447699");
let p = u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
class h extends l.PureComponent {
  render() {
    let e = (0, r.isActiveCreator)(this.context.router),
      {
        isOpen: t,
        dropdownLinks: s,
        TrackClick: l,
        avoidRouter: a,
        id: i,
        "aria-label": h
      } = this.props,
      N = s.map((t, s) => t.divider ? (0, n.jsx)("hr", {
        className: d.divider
      }, "divider-".concat(s)) : t.external ? (0, n.jsx)("li", {
        className: d.moreListItemInactive,
        children: (0, n.jsx)(l, {
          className: d.moreListLink,
          eventName: p,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          children: (0, n.jsx)("span", {
            className: d.moreListLinkCopy,
            children: t.title
          })
        })
      }, t.route) : (0, n.jsx)("li", {
        className: (0, o.getClass)(d, "moreListItem", e(t.route) ? "Active" : "Inactive"),
        children: (0, n.jsx)(c.default, {
          avoidRouter: a,
          className: d.moreListLink,
          to: t.route,
          from: u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
          role: "menuitem",
          children: (0, n.jsx)(l, {
            tag: "span",
            className: d.moreListLinkCopy,
            eventName: p,
            data: {
              linkClicked: t.linkClicked
            },
            children: t.title
          })
        })
      }, t.route));
    return (0, n.jsx)("ul", {
      id: i,
      className: (0, o.getClass)(d, "moreList", t ? "Open" : "Closed"),
      "aria-label": h,
      children: N
    })
  }
}
h.contextTypes = {
  router: i.object.isRequired
}