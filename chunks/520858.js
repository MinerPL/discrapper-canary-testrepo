"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("873546"),
  o = n("481060"),
  u = n("239091"),
  d = n("180828"),
  c = n("768581"),
  f = n("484459"),
  h = n("103575"),
  m = n("613398"),
  p = n("603326");

function E(e) {
  var t;
  let {
    channel: s,
    integration: E
  } = e, C = c.default.getApplicationIconURL({
    id: E.application.id,
    icon: E.application.icon,
    size: 40
  }), g = l.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("30887").then(n.bind(n, "496281"));
      return t => (0, a.jsx)(e, {
        ...t,
        channel: s,
        integration: E
      })
    })
  }, [E, s]), S = (0, a.jsxs)("div", {
    className: m.listRow,
    onContextMenu: g,
    children: [(0, a.jsx)("img", {
      className: i()(m.listAvatar, p.icon),
      alt: "",
      "aria-hidden": !0,
      src: C,
      width: 40,
      height: 40
    }), (0, a.jsx)("div", {
      className: m.listRowContent,
      children: (0, a.jsx)(d.default, {
        name: E.application.name,
        botType: d.BotTypes.BOT,
        botVerified: null === (t = E.application.bot) || void 0 === t ? void 0 : t.isVerifiedBot(),
        className: m.listName
      })
    })]
  }), {
    bot: _
  } = E.application;
  return null == _ ? (0, a.jsx)("li", {
    children: S
  }) : (0, a.jsx)(o.Popout, {
    preload: () => (0, f.default)(_.id, C),
    renderPopout: e => (0, a.jsx)(h.default, {
      location: "AppProfilePanelItem",
      ...e,
      userId: _.id,
      channelId: s.id
    }),
    position: r.isMobile ? "window_center" : "left",
    children: e => (0, a.jsx)("li", {
      ...e,
      children: S
    })
  })
}