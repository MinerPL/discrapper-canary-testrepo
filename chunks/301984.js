"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("124597"),
  s = n("657147"),
  o = n("97910"),
  l = n("780014"),
  u = n("481060"),
  d = n("194359"),
  _ = n("906732"),
  c = n("822972"),
  E = n("314897"),
  I = n("699516"),
  T = n("465670"),
  f = n("785717"),
  S = n("537387"),
  h = n("981631"),
  A = n("689938");

function m(e) {
  let {
    user: t,
    friendToken: n
  } = e, {
    trackUserProfileAction: m
  } = (0, f.useUserProfileAnalyticsContext)(), N = (0, r.useStateFromStores)([E.default], () => E.default.getId() === (null == t ? void 0 : t.id)), p = (0, r.useStateFromStores)([I.default], () => null != t ? I.default.getRelationshipType(t.id) : h.RelationshipTypes.NONE), {
    analyticsLocations: O,
    newestAnalyticsLocation: C
  } = (0, _.default)(), R = (0, c.default)({
    user: t,
    color: "danger",
    location: C,
    onAction: () => m({
      action: "REMOVE_FRIEND",
      analyticsLocations: O
    })
  });
  return null == t || t.bot || N || p === h.RelationshipTypes.BLOCKED ? null : p === h.RelationshipTypes.FRIEND ? (0, i.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(u.Menu, {
        navId: "user-profile-friend-request-buttons",
        onSelect: void 0,
        onClose: t,
        "aria-label": A.default.Messages.FRIEND_ACTIONS_MENU_LABEL,
        children: R
      })
    },
    children: e => (0, i.jsx)(S.default, {
      icon: s.UserCheckIcon,
      text: A.default.Messages.FRIENDS,
      ...e
    })
  }) : p === h.RelationshipTypes.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(S.default, {
      icon: e => (0, i.jsx)(a.CheckmarkLargeIcon, {
        ...e,
        color: u.tokens.colors.TEXT_BRAND
      }),
      text: A.default.Messages.ACCEPT_FRIEND_REQUEST,
      onClick: () => {
        m({
          action: "ACCEPT_FRIEND_REQUEST"
        }), d.default.addRelationship({
          userId: t.id,
          friendToken: n
        })
      }
    }), (0, i.jsx)(S.default, {
      icon: T.default,
      text: A.default.Messages.IGNORE_FRIEND_REQUEST,
      onClick: () => {
        m({
          action: "IGNORE_FRIEND_REQUEST"
        }), d.default.cancelFriendRequest(t.id)
      }
    })]
  }) : p === h.RelationshipTypes.PENDING_OUTGOING ? (0, i.jsx)(S.default, {
    icon: o.UserClockIcon,
    text: A.default.Messages.REQUEST_SENT,
    disabled: !0
  }) : (0, i.jsx)(S.default, {
    icon: l.UserPlusIcon,
    text: A.default.Messages.ADD_FRIEND,
    onClick: () => {
      m({
        action: "SEND_FRIEND_REQUEST"
      }), d.default.addRelationship({
        userId: t.id,
        friendToken: n
      })
    }
  })
}