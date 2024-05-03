"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("653041");
var l = n("735250"),
  i = n("470079"),
  a = n("120356"),
  r = n.n(a),
  s = n("481060"),
  u = n("465670"),
  d = n("765305"),
  o = n("689938"),
  c = n("246567");

function f(e) {
  let {
    onClose: t,
    selectedTab: n,
    onTabSelected: a,
    userCount: f,
    hasBanner: v,
    isHub: E = !1
  } = e, h = i.useRef(null);
  i.useEffect(() => {
    var e, t, n;
    return null === (n = h.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
  }, []);
  let m = o.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
      userCount: f
    }),
    g = [(0, l.jsx)(s.TabBar.Item, {
      className: c.tabBarItem,
      id: d.EventDetailSections.EVENT_INFO,
      children: o.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
    }, "event-details")];
  return !E && g.push((0, l.jsx)(s.TabBar.Item, {
    className: c.tabBarItem,
    id: d.EventDetailSections.RSVP_LIST,
    children: m
  }, "is-hub")), (0, l.jsxs)("div", {
    className: c.container,
    children: [(0, l.jsx)(s.Clickable, {
      ref: h,
      onClick: t,
      className: c.closeButton,
      "aria-label": o.default.Messages.CLOSE,
      children: (0, l.jsx)(u.default, {
        className: r()(c.closeIcon, v && c.closeIconBanner)
      })
    }), (0, l.jsx)(s.TabBar, {
      className: c.tabBar,
      "aria-label": o.default.Messages.OPTIONS,
      selectedItem: n,
      type: "top",
      onItemSelect: a,
      children: g
    })]
  })
}