"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("394846"),
  i = n("446674"),
  r = n("77078"),
  u = n("120252"),
  o = n("161778"),
  d = n("162771"),
  c = n("941886"),
  f = n("664336"),
  h = n("49111"),
  m = n("782340"),
  p = n("858319");

function E(e) {
  let t, {
    channelId: E
  } = e;
  l.useEffect(() => {
    u.default.loadThread(E)
  });
  let g = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()),
    S = g === h.FAVORITES,
    C = (0, i.useStateFromStores)([o.default], () => o.default.theme);
  return t = S ? (0, a.jsx)(c.EmptyStateText, {
    note: m.default.Messages.FAVORITES_EMPTY_BODY,
    children: m.default.Messages.FAVORITES_EMPTY_TITLE
  }) : null != E ? (0, a.jsx)(r.Spinner, {
    type: r.Spinner.Type.SPINNING_CIRCLE
  }) : (0, a.jsx)(c.EmptyStateText, {
    note: m.default.Messages.CHANNELS_UNAVAILABLE_BODY,
    children: m.default.Messages.CHANNELS_UNAVAILABLE_TITLE
  }), (0, a.jsxs)("div", {
    className: p.noChannel,
    children: [s.isMobile && (0, a.jsx)(f.default, {
      children: (0, a.jsx)(l.Fragment, {})
    }), (0, a.jsxs)(c.default, {
      theme: C,
      children: [(0, a.jsx)(c.EmptyStateImage, {
        darkSrc: S ? n("41912") : n("605834"),
        lightSrc: S ? n("706692") : n("976585"),
        width: 272,
        height: 222
      }), t]
    })]
  })
}