"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("669491"),
  i = n("736964"),
  r = n("685665"),
  o = n("401642"),
  u = n("697218"),
  d = n("36694"),
  c = n("945330"),
  f = n("956089"),
  E = n("599110"),
  h = n("371449"),
  _ = n("224978"),
  C = n("559541"),
  S = n("49111"),
  I = n("782340"),
  m = n("289984");

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
  }, R = e => {
    e.stopPropagation(), i.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, O = p === S.StatusTypes.OFFLINE ? S.StatusTypes.UNKNOWN : p, v = n === S.RelationshipTypes.PENDING_INCOMING ? I.default.Messages.INCOMING_FRIEND_REQUEST : I.default.Messages.OUTGOING_FRIEND_REQUEST;
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
      let i = n === S.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)(a.Fragment, {
        children: [(null === (s = u.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, a.jsx)("div", {
          className: m.staffIndicator,
          children: (0, a.jsx)(f.TextBadge, {
            color: l.default.unsafe_rawColors.BRAND_500.css,
            text: I.default.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, a.jsx)(h.default, {
          icon: d.default,
          actionType: h.default.ActionTypes.ACCEPT,
          tooltip: I.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: R,
          shouldHighlight: e
        }), (0, a.jsx)(h.default, {
          icon: c.default,
          actionType: h.default.ActionTypes.DENY,
          tooltip: I.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: N,
          shouldHighlight: e
        })]
      }) : (0, a.jsx)(h.default, {
        icon: c.default,
        actionType: h.default.ActionTypes.DENY,
        tooltip: I.default.Messages.FRIEND_REQUEST_CANCEL,
        onClick: N,
        shouldHighlight: e
      });
      return (0, a.jsxs)("div", {
        className: m.listItemContents,
        children: [(0, a.jsx)(C.default, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: O,
          subText: v,
          className: m.userInfo
        }), (0, a.jsx)("div", {
          className: m.actions,
          children: i
        })]
      })
    }
  })
}