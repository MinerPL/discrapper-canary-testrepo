"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("911560"),
  u = n("210887"),
  d = n("914010"),
  c = n("186095"),
  f = n("502568"),
  h = n("981631"),
  m = n("689938"),
  p = n("415891");

function E(e) {
  let t, {
    channelId: E
  } = e;
  l.useEffect(() => {
    o.default.loadThread(E)
  });
  let C = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()) === h.FAVORITES,
    g = (0, i.useStateFromStores)([u.default], () => u.default.theme);
  return t = C ? (0, a.jsx)(c.EmptyStateText, {
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
      theme: g,
      children: [(0, a.jsx)(c.EmptyStateImage, {
        darkSrc: C ? n("691270") : n("625065"),
        lightSrc: C ? n("704139") : n("875184"),
        width: 272,
        height: 222
      }), t]
    })]
  })
}