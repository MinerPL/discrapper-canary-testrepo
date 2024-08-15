n.d(s, {
  Z: function() {
return A;
  }
});
var i = n(735250),
  t = n(470079),
  l = n(442837),
  o = n(692547),
  a = n(481060),
  r = n(239091),
  d = n(233440),
  c = n(314897),
  u = n(158776),
  _ = n(699516),
  I = n(998502),
  f = n(785717),
  E = n(621853),
  m = n(204197),
  S = n(735336),
  x = n(520978),
  v = n(184325),
  Z = n(652853),
  h = n(225714),
  p = n(228168),
  T = n(231338),
  g = n(689938),
  N = n(88952);
let C = a.AvatarSizes.SIZE_120,
  j = I.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  let {
displayProfile: s,
user: I,
guildId: A,
channelId: R,
friendToken: O,
className: L,
isStreaming: M,
hasProfileEffect: U,
onClose: b
  } = e, P = (0, l.e7)([_.Z], () => _.Z.getRelationshipType(I.id)), y = (0, l.e7)([u.Z], () => u.Z.isMobileOnline(I.id)), D = (0, l.e7)([u.Z], () => u.Z.getStatus(I.id)), F = (0, l.e7)([E.Z], () => E.Z.getUserProfile(I.id)), B = (0, l.e7)([c.default], () => c.default.getId() === I.id), {
theme: G
  } = (0, Z.z)(), {
trackUserProfileAction: w
  } = (0, f.KZ)(), {
avatarSrc: k,
eventHandlers: V,
avatarDecorationSrc: Y
  } = (0, m.Z)({
user: I,
size: C
  }), H = t.useMemo(() => (0, d.W)(I, R), [
I,
R
  ]);
  return (0, i.jsxs)('header', {
className: L,
children: [
  (0, i.jsx)(S.Z, {
    displayProfile: s,
    onClose: b,
    user: I,
    profileType: p.y0.MODAL,
    hasProfileEffect: U
  }),
  (0, i.jsxs)('div', {
    className: N.header,
    children: [
      (0, i.jsx)('div', {
        ...V,
        children: (0, i.jsx)(j, {
          src: k,
          avatarDecoration: Y,
          size: C,
          className: N.avatar,
          status: H ? T.Sk.UNKNOWN : M ? T.Sk.STREAMING : D,
          statusBackdropColor: (0, a.getStatusBackdropColor)(G),
          isMobile: y,
          statusTooltip: !0,
          'aria-label': I.username
        })
      }),
      (0, i.jsxs)('div', {
        className: N.headerTop,
        children: [
          (null == F ? void 0 : F.profileFetchFailed) && !I.isClyde() ? (0, i.jsx)(a.Tooltip, {
            text: g.Z.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 20,
            children: e => (0, i.jsx)(a.CircleWarningIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              ...e,
              className: N.warningCircleIcon,
              color: o.Z.unsafe_rawColors.YELLOW_300.css
            })
          }) : (0, i.jsx)(v.Z, {
            user: I,
            className: N.badgeList,
            guildId: A,
            size: v.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: v.V.SIZE_18,
            onBadgeClick: b
          }),
          (0, i.jsxs)('div', {
            className: N.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, i.jsx)(x.Z, {
                className: N.applicationInstallButton,
                application: F.application
              }),
              (0, i.jsx)(h.Z, {
                user: I,
                isCurrentUser: B,
                relationshipType: P,
                friendToken: O,
                onClose: b
              }),
              B || I.isNonUserBot() ? null : (0, i.jsx)(a.Clickable, {
                focusProps: {
                  offset: {
                    left: 8
                  }
                },
                onClick: function(e) {
                  w({
                    action: 'PRESS_OPTIONS'
                  }), (0, r.jW)(e, async () => {
                    let {
                      default: e
                    } = await n.e('29136').then(n.bind(n, 193646));
                    return s => (0, i.jsx)(e, {
                      ...s,
                      user: I,
                      isCurrentUser: B,
                      guildId: A,
                      relationshipType: P,
                      trackUserProfileAction: w,
                      onClose: b
                    });
                  });
                },
                children: (0, i.jsx)(a.MoreVerticalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: N.additionalActionsIcon
                })
              })
            ]
          })
        ]
      })
    ]
  })
]
  });
}