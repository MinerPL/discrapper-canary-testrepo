"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("736964"),
  i = n("685665"),
  r = n("390790"),
  o = n("401642"),
  u = n("36694"),
  d = n("945330"),
  c = n("599110"),
  f = n("371449"),
  E = n("224978"),
  h = n("559541"),
  _ = n("49111"),
  C = n("782340"),
  S = n("708046");

function I(e) {
  let {
    user: t,
    nickname: n,
    status: I,
    isFocused: m
  } = e, p = s.useContext(c.AnalyticsContext), {
    analyticsLocations: T
  } = (0, i.default)(), g = e => {
    null == e || e.stopPropagation(), l.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      },
      type: void 0,
      friendToken: void 0,
      fromFriendSuggestion: !0
    })
  }, A = e => {
    null == e || e.stopPropagation(), r.default.ignore(t.id)
  }, N = I === _.StatusTypes.OFFLINE ? _.StatusTypes.UNKNOWN : I;
  return (0, a.jsx)(E.default, {
    isFocused: m,
    user: t,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: T,
      analyticsLocation: p.location
    }),
    children: e => {
      let s = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(f.default, {
          icon: u.default,
          actionType: f.default.ActionTypes.ACCEPT,
          tooltip: C.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: g,
          shouldHighlight: e
        }), (0, a.jsx)(f.default, {
          icon: d.default,
          actionType: f.default.ActionTypes.DENY,
          tooltip: C.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: A,
          shouldHighlight: e
        })]
      });
      return (0, a.jsxs)("div", {
        className: S.listItemContents,
        children: [(0, a.jsx)(h.default, {
          user: t,
          hovered: e,
          status: N,
          subText: n,
          className: S.userInfo
        }), (0, a.jsx)("div", {
          className: S.actions,
          children: s
        })]
      })
    }
  })
}