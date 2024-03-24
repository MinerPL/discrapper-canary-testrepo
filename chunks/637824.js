"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("736964"),
  i = n("685665"),
  r = n("401642"),
  o = n("152224"),
  u = n("599110"),
  d = n("371449"),
  c = n("224978"),
  f = n("559541"),
  E = n("49111"),
  h = n("782340"),
  _ = n("74967");

function C(e) {
  let {
    user: t,
    key: n,
    isFocused: C
  } = e, S = s.useContext(u.AnalyticsContext), {
    analyticsLocations: I
  } = (0, i.default)(), m = e => {
    e.stopPropagation(), l.default.unblockUser(t.id, {
      location: "Friends"
    })
  };
  return (0, a.jsx)(c.default, {
    isFocused: C,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: I,
      analyticsLocation: S.location
    }),
    user: t,
    children: e => (0, a.jsxs)("div", {
      className: _.listItemContents,
      children: [(0, a.jsx)(f.default, {
        user: t,
        hovered: e,
        status: E.StatusTypes.UNKNOWN,
        subText: h.default.Messages.BLOCKED
      }), (0, a.jsx)(d.default, {
        icon: o.default,
        actionType: d.default.ActionTypes.DENY,
        tooltip: h.default.Messages.UNBLOCK,
        onClick: m,
        shouldHighlight: e
      })]
    })
  }, n)
}