i.d(n, {
  Z: function() {
return A;
  }
});
var s = i(735250),
  l = i(470079),
  o = i(442837),
  t = i(692547),
  r = i(481060),
  a = i(239091),
  d = i(233440),
  c = i(314897),
  u = i(158776),
  I = i(699516),
  _ = i(998502),
  f = i(785717),
  E = i(621853),
  m = i(204197),
  S = i(735336),
  Z = i(520978),
  x = i(184325),
  v = i(652853),
  h = i(225714),
  p = i(228168),
  T = i(231338),
  g = i(689938),
  N = i(520067);
let C = r.AvatarSizes.SIZE_120,
  j = _.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function A(e) {
  let {
displayProfile: n,
user: _,
guildId: A,
channelId: R,
friendToken: O,
className: U,
isStreaming: M,
hasProfileEffect: L,
onClose: P
  } = e, b = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(_.id)), y = (0, o.e7)([u.Z], () => u.Z.isMobileOnline(_.id)), D = (0, o.e7)([u.Z], () => u.Z.getStatus(_.id)), F = (0, o.e7)([E.Z], () => E.Z.getUserProfile(_.id)), B = (0, o.e7)([c.default], () => c.default.getId() === _.id), {
theme: G
  } = (0, v.z)(), {
trackUserProfileAction: w
  } = (0, f.KZ)(), {
avatarSrc: k,
eventHandlers: V,
avatarDecorationSrc: Y
  } = (0, m.Z)({
user: _,
size: C
  }), H = l.useMemo(() => (0, d.W)(_, R), [
_,
R
  ]);
  return (0, s.jsxs)('header', {
className: U,
children: [
  (0, s.jsx)(S.Z, {
    displayProfile: n,
    onClose: P,
    user: _,
    profileType: p.y0.MODAL,
    hasProfileEffect: L
  }),
  (0, s.jsxs)('div', {
    className: N.header,
    children: [
      (0, s.jsx)('div', {
        ...V,
        children: (0, s.jsx)(j, {
          src: k,
          avatarDecoration: Y,
          size: C,
          className: N.avatar,
          status: H ? T.Sk.UNKNOWN : M ? T.Sk.STREAMING : D,
          statusBackdropColor: (0, r.getStatusBackdropColor)(G),
          isMobile: y,
          statusTooltip: !0,
          'aria-label': _.username
        })
      }),
      (0, s.jsxs)('div', {
        className: N.headerTop,
        children: [
          (null == F ? void 0 : F.profileFetchFailed) && !_.isClyde() ? (0, s.jsx)(r.Tooltip, {
            text: g.Z.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 20,
            children: e => (0, s.jsx)(r.CircleExclamationPointIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              ...e,
              className: N.warningCircleIcon,
              color: t.Z.unsafe_rawColors.YELLOW_300.css
            })
          }) : (0, s.jsx)(x.Z, {
            user: _,
            className: N.badgeList,
            guildId: A,
            size: x.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: x.V.SIZE_18,
            onBadgeClick: P
          }),
          (0, s.jsxs)('div', {
            className: N.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, s.jsx)(Z.Z, {
                className: N.applicationInstallButton,
                application: F.application
              }),
              (0, s.jsx)(h.Z, {
                user: _,
                isCurrentUser: B,
                relationshipType: b,
                friendToken: O,
                onClose: P
              }),
              B || _.isNonUserBot() ? null : (0, s.jsx)(r.Clickable, {
                focusProps: {
                  offset: {
                    left: 8
                  }
                },
                onClick: function(e) {
                  w({
                    action: 'PRESS_OPTIONS'
                  }), (0, a.jW)(e, async () => {
                    let {
                      default: e
                    } = await i.e('29136').then(i.bind(i, 193646));
                    return n => (0, s.jsx)(e, {
                      ...n,
                      user: _,
                      isCurrentUser: B,
                      guildId: A,
                      relationshipType: b,
                      trackUserProfileAction: w,
                      onClose: P
                    });
                  });
                },
                children: (0, s.jsx)(r.MoreVerticalIcon, {
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