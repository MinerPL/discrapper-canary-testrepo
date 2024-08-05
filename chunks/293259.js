i.d(s, {
  Z: function() {
return A;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(692547),
  a = i(481060),
  r = i(239091),
  d = i(233440),
  c = i(314897),
  u = i(158776),
  I = i(699516),
  _ = i(998502),
  f = i(785717),
  m = i(621853),
  E = i(204197),
  v = i(735336),
  S = i(520978),
  x = i(184325),
  Z = i(652853),
  h = i(225714),
  p = i(228168),
  T = i(231338),
  g = i(689938),
  N = i(520067);
let j = a.AvatarSizes.SIZE_120,
  C = _.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  let {
displayProfile: s,
user: _,
guildId: A,
channelId: R,
friendToken: M,
className: U,
isStreaming: L,
hasProfileEffect: O,
onClose: P
  } = e, b = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(_.id)), y = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(_.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(_.id)), F = (0, t.e7)([m.Z], () => m.Z.getUserProfile(_.id)), B = (0, t.e7)([c.default], () => c.default.getId() === _.id), {
theme: G
  } = (0, Z.z)(), {
trackUserProfileAction: w
  } = (0, f.KZ)(), {
avatarSrc: k,
eventHandlers: Y,
avatarDecorationSrc: V
  } = (0, E.Z)({
user: _,
size: j
  }), H = l.useMemo(() => (0, d.W)(_, R), [
_,
R
  ]);
  return (0, n.jsxs)('header', {
className: U,
children: [
  (0, n.jsx)(v.Z, {
    displayProfile: s,
    onClose: P,
    user: _,
    profileType: p.y0.MODAL,
    hasProfileEffect: O
  }),
  (0, n.jsxs)('div', {
    className: N.header,
    children: [
      (0, n.jsx)('div', {
        ...Y,
        children: (0, n.jsx)(C, {
          src: k,
          avatarDecoration: V,
          size: j,
          className: N.avatar,
          status: H ? T.Sk.UNKNOWN : L ? T.Sk.STREAMING : D,
          statusBackdropColor: (0, a.getStatusBackdropColor)(G),
          isMobile: y,
          statusTooltip: !0,
          'aria-label': _.username
        })
      }),
      (0, n.jsxs)('div', {
        className: N.headerTop,
        children: [
          (null == F ? void 0 : F.profileFetchFailed) && !_.isClyde() ? (0, n.jsx)(a.Tooltip, {
            text: g.Z.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 20,
            children: e => (0, n.jsx)(a.CircleExclamationPointIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              ...e,
              className: N.warningCircleIcon,
              color: o.Z.unsafe_rawColors.YELLOW_300.css
            })
          }) : (0, n.jsx)(x.Z, {
            user: _,
            className: N.badgeList,
            guildId: A,
            size: x.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: x.V.SIZE_18,
            onBadgeClick: P
          }),
          (0, n.jsxs)('div', {
            className: N.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, n.jsx)(S.Z, {
                className: N.applicationInstallButton,
                application: F.application
              }),
              (0, n.jsx)(h.Z, {
                user: _,
                isCurrentUser: B,
                relationshipType: b,
                friendToken: M,
                onClose: P
              }),
              B || _.isNonUserBot() ? null : (0, n.jsx)(a.Clickable, {
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
                    } = await i.e('29136').then(i.bind(i, 193646));
                    return s => (0, n.jsx)(e, {
                      ...s,
                      user: _,
                      isCurrentUser: B,
                      guildId: A,
                      relationshipType: b,
                      trackUserProfileAction: w,
                      onClose: P
                    });
                  });
                },
                children: (0, n.jsx)(a.MoreVerticalIcon, {
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