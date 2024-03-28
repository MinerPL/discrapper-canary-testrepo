"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  l = n("442837"),
  s = n("831218"),
  o = n("840780"),
  r = n("51596"),
  d = n("905423"),
  u = n("237997"),
  c = n("145597"),
  f = n("981631"),
  h = n("689938"),
  p = n("197870");
let g = () => (0, r.show)("DM_SEARCH");
t.default = a.memo(function() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.isUILocked((0, c.getPID)()) ? "true" : "false"),
    t = (0, d.default)(e => {
      let {
        channelId: t
      } = e;
      return t
    });
  return (0, i.jsxs)("div", {
    className: p.privateChannels,
    children: [(0, i.jsx)("div", {
      className: p.searchBar,
      children: (0, i.jsx)("button", {
        type: "button",
        className: p.searchBarComponent,
        onClick: g,
        children: h.default.Messages.DM_SEARCH_PLACEHOLDER
      })
    }), (0, i.jsx)(s.default, {
      padding: 8,
      theme: f.ThemeTypes.DARK,
      version: e,
      selectedChannelId: t
    }), (0, i.jsx)("section", {
      className: p.panels,
      "aria-label": h.default.Messages.ACCOUNT_A11Y_LABEL,
      children: (0, i.jsx)(o.default, {
        guildId: null
      })
    })]
  })
})