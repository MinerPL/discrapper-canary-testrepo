"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("194359"),
  i = n("906732"),
  r = n("388380"),
  o = n("171368"),
  u = n("263704"),
  d = n("465670"),
  c = n("626135"),
  f = n("321488"),
  E = n("417183"),
  h = n("170245"),
  _ = n("981631"),
  C = n("689938"),
  m = n("845286");

function S(e) {
  let {
    user: t,
    nickname: n,
    status: S,
    isFocused: I
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
  }, N = S === _.StatusTypes.OFFLINE ? _.StatusTypes.UNKNOWN : S;
  return (0, a.jsx)(E.default, {
    isFocused: I,
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
        className: m.listItemContents,
        children: [(0, a.jsx)(h.default, {
          user: t,
          hovered: e,
          status: N,
          subText: n,
          className: m.__invalid_userInfo
        }), (0, a.jsx)("div", {
          className: m.actions,
          children: s
        })]
      })
    }
  })
}