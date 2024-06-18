"use strict";
n.d(t, {
  Z: function() {
    return O
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(124597),
  o = n(657147),
  a = n(97910),
  l = n(780014),
  u = n(481060),
  _ = n(194359),
  d = n(906732),
  c = n(822972),
  E = n(314897),
  I = n(699516),
  T = n(465670),
  h = n(877485),
  S = n(785717),
  f = n(993409),
  N = n(228168),
  A = n(981631),
  m = n(689938);

function O(e) {
  let {
    user: t,
    friendToken: n,
    acceptFriendRequestColor: O,
    profileType: R
  } = e, {
    trackUserProfileAction: C
  } = (0, S.KZ)(), {
    originalFriendingEnabled: p,
    improvedFriendingEnabled: g
  } = (0, h.V)({
    location: "UserProfileFriendRequestBannerButtons"
  }), L = (0, r.e7)([E.default], () => E.default.getId() === (null == t ? void 0 : t.id)), v = (0, r.e7)([I.Z], () => null != t ? I.Z.getRelationshipType(t.id) : A.OGo.NONE), {
    analyticsLocations: D,
    newestAnalyticsLocation: M
  } = (0, d.ZP)(), P = (0, c.Z)({
    user: t,
    color: "danger",
    location: M,
    onAction: () => C({
      action: "REMOVE_FRIEND",
      analyticsLocations: D
    })
  });
  if (null == t || t.bot || L || v === A.OGo.BLOCKED) return null;
  if (v === A.OGo.FRIEND) return (0, i.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(u.Menu, {
        navId: "user-profile-friend-request-buttons",
        onSelect: void 0,
        onClose: t,
        "aria-label": m.Z.Messages.FRIEND_ACTIONS_MENU_LABEL,
        children: P
      })
    },
    children: e => (0, i.jsx)(f.Z, {
      variant: "banner",
      icon: o._,
      text: m.Z.Messages.FRIENDS,
      ...e
    })
  });
  if (v === A.OGo.PENDING_INCOMING) return g && R === N.y0.FULL_SIZE ? null : (g || p) && R !== N.y0.PANEL ? (0, i.jsx)(f.Z, {
    variant: "banner",
    icon: a.i,
    text: m.Z.Messages.FRIENDS_SECTION_PENDING,
    disabled: !0
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(f.Z, {
      variant: "banner",
      icon: e => (0, i.jsx)(s.d, {
        ...e,
        color: null != O ? O : u.tokens.colors.TEXT_BRAND
      }),
      text: m.Z.Messages.ACCEPT_FRIEND_REQUEST,
      onClick: () => {
        C({
          action: "ACCEPT_FRIEND_REQUEST"
        }), _.Z.addRelationship({
          userId: t.id,
          friendToken: n,
          context: {
            location: M
          }
        })
      }
    }), (0, i.jsx)(f.Z, {
      variant: "banner",
      icon: T.Z,
      text: m.Z.Messages.IGNORE_FRIEND_REQUEST,
      onClick: () => {
        C({
          action: "IGNORE_FRIEND_REQUEST"
        }), _.Z.cancelFriendRequest(t.id, {
          location: M
        })
      }
    })]
  });
  return v === A.OGo.PENDING_OUTGOING && (!g || g && R === N.y0.BITE_SIZE) ? (0, i.jsx)(f.Z, {
    variant: "banner",
    icon: a.i,
    text: g || p ? m.Z.Messages.FRIENDS_SECTION_PENDING : m.Z.Messages.REQUEST_SENT,
    disabled: !0
  }) : !g || g && R === N.y0.BITE_SIZE ? (0, i.jsx)(f.Z, {
    variant: "banner",
    icon: l.o,
    text: m.Z.Messages.ADD_FRIEND,
    onClick: () => {
      C({
        action: "SEND_FRIEND_REQUEST"
      }), _.Z.addRelationship({
        userId: t.id,
        friendToken: n,
        context: {
          location: M
        }
      })
    }
  }) : null
}