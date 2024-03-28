"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("692547"),
  i = n("194359"),
  r = n("906732"),
  o = n("171368"),
  u = n("594174"),
  d = n("263704"),
  c = n("465670"),
  f = n("26290"),
  E = n("626135"),
  h = n("321488"),
  _ = n("417183"),
  C = n("170245"),
  m = n("981631"),
  S = n("689938"),
  I = n("220503");

function p(e) {
  let {
    user: t,
    type: n,
    status: p,
    isFocused: T
  } = e, g = s.useContext(E.AnalyticsContext), {
    analyticsLocations: A
  } = (0, r.default)(), N = e => {
    e.stopPropagation(), i.default.cancelFriendRequest(t.id, {
      location: "Friends"
    })
  }, v = e => {
    e.stopPropagation(), i.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, O = p === m.StatusTypes.OFFLINE ? m.StatusTypes.UNKNOWN : p, R = n === m.RelationshipTypes.PENDING_INCOMING ? S.default.Messages.INCOMING_FRIEND_REQUEST : S.default.Messages.OUTGOING_FRIEND_REQUEST;
  return (0, a.jsx)(_.default, {
    isFocused: T,
    user: t,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: A,
      analyticsLocation: g.location
    }),
    children: e => {
      var s;
      let i = n === m.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)(a.Fragment, {
        children: [(null === (s = u.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, a.jsx)("div", {
          className: I.staffIndicator,
          children: (0, a.jsx)(f.TextBadge, {
            color: l.default.unsafe_rawColors.BRAND_500.css,
            text: S.default.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, a.jsx)(h.default, {
          icon: d.default,
          actionType: h.default.ActionTypes.ACCEPT,
          tooltip: S.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: v,
          shouldHighlight: e
        }), (0, a.jsx)(h.default, {
          icon: c.default,
          actionType: h.default.ActionTypes.DENY,
          tooltip: S.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: N,
          shouldHighlight: e
        })]
      }) : (0, a.jsx)(h.default, {
        icon: c.default,
        actionType: h.default.ActionTypes.DENY,
        tooltip: S.default.Messages.FRIEND_REQUEST_CANCEL,
        onClick: N,
        shouldHighlight: e
      });
      return (0, a.jsxs)("div", {
        className: I.listItemContents,
        children: [(0, a.jsx)(C.default, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: O,
          subText: R,
          className: I.userInfo
        }), (0, a.jsx)("div", {
          className: I.actions,
          children: i
        })]
      })
    }
  })
}