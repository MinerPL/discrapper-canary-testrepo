"use strict";
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(831218),
  o = n(840780),
  r = n(51596),
  d = n(905423),
  c = n(237997),
  u = n(145597),
  h = n(981631),
  p = n(689938),
  f = n(77821);
let E = () => (0, r.$Z)("DM_SEARCH");
t.Z = s.memo(function() {
  let e = (0, l.e7)([c.Z], () => c.Z.isUILocked((0, u.QF)()) ? "true" : "false"),
    t = (0, d.Z)(e => {
      let {
        channelId: t
      } = e;
      return t
    });
  return (0, i.jsxs)("div", {
    className: f.privateChannels,
    children: [(0, i.jsx)("div", {
      className: f.searchBar,
      children: (0, i.jsx)("button", {
        type: "button",
        className: f.searchBarComponent,
        onClick: E,
        children: p.Z.Messages.DM_SEARCH_PLACEHOLDER
      })
    }), (0, i.jsx)(a.Z, {
      padding: 8,
      theme: h.BRd.DARK,
      version: e,
      selectedChannelId: t
    }), (0, i.jsx)("section", {
      className: f.panels,
      "aria-label": p.Z.Messages.ACCOUNT_A11Y_LABEL,
      children: (0, i.jsx)(o.Z, {
        guildId: null
      })
    })]
  })
})