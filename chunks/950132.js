"use strict";
n.r(t), n.d(t, {
  DropdownMenu: function() {
    return k
  }
});
var s, l, a, i, r = n("735250"),
  o = n("470079"),
  c = n("476400"),
  u = n.n(c),
  d = n("948789"),
  p = n("982905"),
  h = n("66037"),
  N = n("231338"),
  g = n("399857");
let m = N.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
class k extends(i = o.PureComponent) {
  render() {
    let e = (0, d.isActiveCreator)(this.context.router),
      {
        isOpen: t,
        dropdownLinks: n,
        TrackClick: s,
        avoidRouter: l,
        id: a,
        "aria-label": i
      } = this.props,
      o = n.map((t, n) => t.divider ? (0, r.jsx)("hr", {
        className: g.divider
      }, "divider-".concat(n)) : t.external ? (0, r.jsx)("li", {
        className: g.moreListItemInactive,
        children: (0, r.jsx)(s, {
          className: g.moreListLink,
          eventName: m,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          children: (0, r.jsx)("span", {
            className: g.moreListLinkCopy,
            children: t.title
          })
        })
      }, t.route) : (0, r.jsx)("li", {
        className: (0, p.getClass)(g, "moreListItem", e(t.route) ? "Active" : "Inactive"),
        children: (0, r.jsx)(h.default, {
          avoidRouter: l,
          className: g.moreListLink,
          to: t.route,
          from: N.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
          role: "menuitem",
          children: (0, r.jsx)(s, {
            tag: "span",
            className: g.moreListLinkCopy,
            eventName: m,
            data: {
              linkClicked: t.linkClicked
            },
            children: t.title
          })
        })
      }, t.route));
    return (0, r.jsx)("ul", {
      id: a,
      className: (0, p.getClass)(g, "moreList", t ? "Open" : "Closed"),
      "aria-label": i,
      children: o
    })
  }
}
s = k, l = "contextTypes", a = {
  router: u().object.isRequired
}, l in s ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a