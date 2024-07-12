n.d(t, {
  Z: function() {
return A;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(699516),
  s = n(246946),
  r = n(5192),
  o = n(621853),
  c = n(910128),
  d = n(724810),
  u = n(741308),
  h = n(588822),
  p = n(940730),
  m = n(681837),
  _ = n(91433),
  f = n(900927),
  E = n(678738),
  C = n(502762),
  g = n(530),
  I = n(7242),
  x = n(827313),
  T = n(580512),
  v = n(228168),
  N = n(981631),
  S = n(689938),
  Z = n(790884);

function A(e) {
  let {
user: t,
displayProfile: n,
channel: A,
isHovering: M,
onOpenProfile: b
  } = e, {
improvedPanelFriendingEnabled: R
  } = (0, d.O)({
location: 'SimplifiedProfilePanelBody'
  }), {
activeInviteToCallCtaEnabled: j
  } = (0, c.l)({
location: 'SimplifiedProfilePanelBody'
  }), L = (0, a.e7)([l.Z], () => l.Z.getRelationshipType(t.id)), P = (0, a.e7)([s.Z], () => s.Z.hidePersonalInformation), O = (0, a.e7)([o.Z], () => {
var e;
return null === (e = o.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  });
  return (0, i.jsxs)('div', {
className: Z.body,
children: [
  (0, i.jsx)(g.Z, {
    user: t,
    profileType: v.y0.PANEL,
    nickname: r.ZP.getName(null, A.id, t),
    pronouns: null == n ? void 0 : n.pronouns,
    onOpenProfile: b,
    tags: (0, i.jsx)(u.Z, {
      displayProfile: n,
      profileType: v.y0.PANEL
    }),
    nicknameIcons: (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(m.Z, {
          userId: t.id
        }),
        !P && (0, i.jsx)(x.Z, {
          userId: t.id,
          isHovering: M,
          onOpenProfile: b
        })
      ]
    })
  }),
  R && L === N.OGo.PENDING_INCOMING && (0, i.jsx)(C.Z.Overlay, {
    children: (0, i.jsx)(_.Z, {
      user: t,
      channelId: A.id
    })
  }),
  j && (0, i.jsx)(I.Z, {
    user: t
  }),
  (0, i.jsx)(T.Z, {
    user: t,
    channelId: A.id
  }),
  (0, i.jsxs)(C.Z.Overlay, {
    className: Z.overlay,
    children: [
      !P && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== '' && (0, i.jsx)(E.Z, {
        title: S.Z.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: 'header-primary',
        children: (0, i.jsx)(h.Z, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: M,
          userId: t.id
        })
      }),
      (null == O ? void 0 : O.popularApplicationCommandIds) != null && (0, i.jsx)(p.Z, {
        applicationId: O.id,
        commandIds: O.popularApplicationCommandIds,
        channel: A
      }),
      (0, i.jsx)(E.Z, {
        title: S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: 'header-primary',
        children: (0, i.jsx)(f.Z, {
          userId: t.id
        })
      })
    ]
  })
]
  });
}