"use strict";
n.d(t, {
  Z: function() {
    return L
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(954138),
  a = n(979264),
  l = n(699516),
  u = n(246946),
  _ = n(5192),
  d = n(447452),
  c = n(877485),
  E = n(741308),
  I = n(681837),
  T = n(91433),
  h = n(724593),
  S = n(502762),
  f = n(530),
  N = n(790711),
  A = n(580512),
  m = n(67152),
  O = n(579285),
  R = n(287612),
  C = n(228168),
  p = n(981631),
  g = n(153362);

function L(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: L,
    guild: v,
    isHovering: D,
    onOpenProfile: M,
    channelId: P,
    onClose: y
  } = e, {
    moreUserDetailsEnabled: U
  } = (0, d.t)({
    location: "BiteSizeProfileBody"
  }), {
    originalFriendingEnabled: b,
    improvedFriendingEnabled: G
  } = (0, c.V)({
    location: "BiteSizeProfileBody"
  }), w = _.ZP.getName(null == v ? void 0 : v.id, P, t), k = (0, s.e7)([l.Z], () => l.Z.getRelationshipType(t.id)), B = (0, s.e7)([u.Z], () => u.Z.hidePersonalInformation), x = (0, o.Z)("username"), V = r.useMemo(() => ({
    source: p.jXE.PROFILE_POPOUT,
    tagUserId: t.id
  }), [t.id]);
  return (0, i.jsxs)("div", {
    className: g.body,
    children: [(0, i.jsx)(f.Z, {
      user: t,
      profileType: C.y0.BITE_SIZE,
      onOpenProfile: M,
      usernameIcon: t.hasAvatarForGuild(null == v ? void 0 : v.id) && (0, i.jsx)(N.Z, {
        user: t,
        nickname: w
      }),
      nickname: w,
      pronouns: null == L ? void 0 : L.pronouns,
      tags: (0, i.jsx)(E.Z, {
        displayProfile: L,
        profileType: C.y0.BITE_SIZE,
        onClose: y
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(I.Z, {
          userId: t.id
        }), (U || b || G) && !B && (0, i.jsx)(h.Z, {
          user: t,
          isHovering: D,
          onOpenProfile: () => M({
            subsection: C.Tb.NOTE
          })
        })]
      })
    }), (G || b) && k === p.OGo.PENDING_INCOMING && (0, i.jsx)(S.Z.Overlay, {
      children: (0, i.jsx)(T.Z, {
        user: t,
        guildId: null == v ? void 0 : v.id,
        channelId: P,
        className: g.banner
      })
    }), t.id !== n.id && (0, i.jsx)(R.Z, {
      user: t,
      onOpenProfile: e => M({
        section: e
      })
    }), x && (0, i.jsx)(a.ZP, {
      userId: t.id,
      inline: !1,
      profileViewedAnalytics: V
    }), (U || b || G) && (0, i.jsx)(m.Z, {
      user: t,
      bio: null == L ? void 0 : L.bio,
      hidePersonalInformation: B,
      onClose: y
    }), (0, i.jsx)(A.Z, {
      user: t,
      guild: v,
      channelId: P,
      onClose: y
    }), null != v && (0, i.jsx)(O.Z, {
      user: t,
      currentUser: n,
      guild: v,
      onOpenProfile: () => M({
        subsection: C.Tb.ROLES
      })
    })]
  })
}