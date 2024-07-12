r.d(n, {
  Z: function() {
return f;
  }
});
var i = r(735250);
r(470079);
var s = r(442837),
  a = r(692547),
  t = r(481060),
  l = r(493683),
  d = r(129861),
  o = r(700582),
  u = r(594174),
  c = r(689938),
  Z = r(813383);

function m(e) {
  let {
color: n,
className: r
  } = e;
  return (0, i.jsx)('svg', {
className: r,
height: '16',
width: '80',
viewBox: '0 0 80 16',
xmlns: 'http://www.w3.org/2000/svg',
children: (0, i.jsxs)('g', {
  fill: 'none',
  fillRule: 'evenodd',
  opacity: '.6',
  children: [
    (0, i.jsx)('path', {
      d: 'm0 0h80v16h-80z'
    }),
    (0, i.jsxs)('g', {
      stroke: n,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      children: [
        (0, i.jsx)('path', {
          d: 'm71 1h4v4.16'
        }),
        (0, i.jsx)('path', {
          d: 'm2 1h4v4.16',
          transform: 'matrix(-1 0 0 1 8 0)'
        }),
        (0, i.jsx)('path', {
          d: 'm51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4'
        }),
        (0, i.jsx)('path', {
          d: 'm72.13 10.474 2.869 3.12 2.631-3.12'
        })
      ]
    })
  ]
})
  });
}

function f(e, n) {
  let r = (0, s.e7)([u.default], () => u.default.getCurrentUser());
  return null == r || n.ownerId !== r.id || e.id === r.id || (null == n ? void 0 : n.isBroadcastChannel()) ? null : (0, i.jsx)(t.MenuItem, {
id: 'make-dm-owner',
color: 'danger',
label: c.Z.Messages.CHANGE_DM_OWNER,
action: () => {
  var s;
  return s = r, void(0, t.openModal)(r => (0, i.jsxs)(t.ConfirmModal, {
    bodyClassName: Z.confirmModal,
    header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
    confirmText: c.Z.Messages.CONFIRM,
    cancelText: c.Z.Messages.CANCEL,
    onConfirm: () => l.Z.setDMOwner(n.id, e.id),
    ...r,
    children: [
      (0, i.jsx)(m, {
        color: a.Z.unsafe_rawColors.PRIMARY_300.css
      }),
      (0, i.jsxs)('div', {
        className: Z.fromToWrapper,
        children: [
          (0, i.jsx)('div', {
            className: Z.from,
            children: (0, i.jsx)(o.Z, {
              user: s,
              size: t.AvatarSizes.SIZE_80
            })
          }),
          (0, i.jsx)('div', {
            className: Z.to,
            children: (0, i.jsx)(o.Z, {
              user: e,
              size: t.AvatarSizes.SIZE_80
            })
          })
        ]
      }),
      (0, i.jsx)(t.Text, {
        variant: 'text-md/normal',
        children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
          usernameHook: (n, r) => (0, i.jsx)(d.Z, {
            usernameIcon: (0, i.jsx)(t.Avatar, {
              className: Z.avatarIcon,
              src: e.getAvatarURL(void 0, 16),
              size: t.AvatarSizes.SIZE_16,
              'aria-hidden': !0
            }),
            className: Z.discordTag,
            usernameClass: Z.username,
            discriminatorClass: Z.discriminator,
            user: e
          }, r)
        })
      })
    ]
  }));
}
  });
}