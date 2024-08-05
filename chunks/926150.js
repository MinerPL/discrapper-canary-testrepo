n.d(t, {
  Z: function() {
return b;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(699516),
  l = n(246946),
  r = n(5192),
  o = n(621853),
  c = n(910128),
  u = n(304704),
  d = n(27144),
  h = n(741308),
  p = n(588822),
  m = n(940730),
  _ = n(483424),
  f = n(681837),
  E = n(91433),
  g = n(900927),
  C = n(678738),
  I = n(502762),
  x = n(530),
  T = n(7242),
  N = n(827313),
  v = n(580512),
  S = n(228168),
  Z = n(981631),
  A = n(689938),
  M = n(790884);

function b(e) {
  let {
user: t,
currentUser: n,
displayProfile: b,
channel: R,
isHovering: j,
onOpenProfile: L
  } = e, {
newActivityCardsEnabled: P
  } = (0, u.Z)({
location: 'SimplifiedProfilePanelBody'
  }), {
pastActivityEnabled: O
  } = (0, d.z)({
location: 'SimplifiedProfilePanelBody'
  }), {
activeInviteToCallCtaEnabled: y
  } = (0, c.l)({
location: 'SimplifiedProfilePanelBody'
  }), D = (0, a.e7)([s.Z], () => s.Z.getRelationshipType(t.id)), k = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation), U = (0, a.e7)([o.Z], () => {
var e;
return null === (e = o.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  });
  return (0, i.jsxs)('div', {
className: M.body,
children: [
  (0, i.jsx)(x.Z, {
    user: t,
    profileType: S.y0.PANEL,
    nickname: r.ZP.getName(null, R.id, t),
    pronouns: null == b ? void 0 : b.pronouns,
    onOpenProfile: L,
    tags: (0, i.jsx)(h.Z, {
      displayProfile: b,
      profileType: S.y0.PANEL
    }),
    nicknameIcons: (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(f.Z, {
          userId: t.id
        }),
        !k && (0, i.jsx)(N.Z, {
          userId: t.id,
          isHovering: j,
          onOpenProfile: L
        })
      ]
    })
  }),
  D === Z.OGo.PENDING_INCOMING && (0, i.jsx)(I.Z.Overlay, {
    children: (0, i.jsx)(E.Z, {
      user: t,
      channelId: R.id
    })
  }),
  y && (0, i.jsx)(T.Z, {
    user: t
  }),
  P || O ? (0, i.jsx)(_.Z, {
    user: t,
    currentUser: n,
    className: M.activity
  }) : (0, i.jsx)(v.Z, {
    user: t,
    channelId: R.id,
    className: M.activity
  }),
  (0, i.jsxs)(I.Z.Overlay, {
    className: M.overlay,
    children: [
      !k && (null == b ? void 0 : b.bio) != null && (null == b ? void 0 : b.bio) !== '' && (0, i.jsx)(C.Z, {
        heading: A.Z.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: 'header-primary',
        children: (0, i.jsx)(p.Z, {
          userBio: b.bio,
          animateOnHover: !0,
          isHovering: j,
          userId: t.id
        })
      }),
      (null == U ? void 0 : U.popularApplicationCommandIds) != null && (0, i.jsx)(m.Z, {
        applicationId: U.id,
        commandIds: U.popularApplicationCommandIds,
        channel: R
      }),
      (0, i.jsx)(C.Z, {
        heading: t.bot ? A.Z.Messages.BOT_PROFILE_CREATED_ON : A.Z.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: 'header-primary',
        children: (0, i.jsx)(g.Z, {
          userId: t.id
        })
      })
    ]
  })
]
  });
}