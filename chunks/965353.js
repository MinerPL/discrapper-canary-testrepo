"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("77078"),
  u = n("945330"),
  o = n("745049"),
  d = n("782340"),
  c = n("689560");

function f(e) {
  let {
    onClose: t,
    selectedTab: n,
    onTabSelected: r,
    userCount: f,
    hasBanner: v,
    isHub: h = !1
  } = e, E = l.useRef(null);
  l.useEffect(() => {
    var e, t, n;
    return null === (n = E.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
  }, []);
  let m = d.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
      userCount: f
    }),
    C = [(0, i.jsx)(a.TabBar.Item, {
      className: c.tabBarItem,
      id: o.EventDetailSections.EVENT_INFO,
      children: d.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
    }, "event-details")];
  return !h && C.push((0, i.jsx)(a.TabBar.Item, {
    className: c.tabBarItem,
    id: o.EventDetailSections.RSVP_LIST,
    children: m
  }, "is-hub")), (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(a.Clickable, {
      ref: E,
      onClick: t,
      className: c.closeButton,
      "aria-label": d.default.Messages.CLOSE,
      children: (0, i.jsx)(u.default, {
        className: s(c.closeIcon, v && c.closeIconBanner)
      })
    }), (0, i.jsx)(a.TabBar, {
      className: c.tabBar,
      "aria-label": d.default.Messages.OPTIONS,
      selectedItem: n,
      type: "top",
      onItemSelect: r,
      children: C
    })]
  })
}