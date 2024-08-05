t.d(n, {
  Z: function() {
return I;
  }
});
var i = t(735250);
t(470079);
var r = t(442837),
  a = t(692547),
  s = t(481060),
  l = t(493683),
  o = t(129861),
  u = t(700582),
  d = t(594174),
  c = t(689938),
  E = t(813383);

function _(e) {
  let {
color: n,
className: t
  } = e;
  return (0, i.jsx)('svg', {
className: t,
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

function I(e, n) {
  let t = (0, r.e7)([d.default], () => d.default.getCurrentUser());
  return null == t || n.ownerId !== t.id || e.id === t.id || (null == n ? void 0 : n.isBroadcastChannel()) ? null : (0, i.jsx)(s.MenuItem, {
id: 'make-dm-owner',
color: 'danger',
label: c.Z.Messages.CHANGE_DM_OWNER,
action: () => {
  var r;
  return r = t, void(0, s.openModal)(t => (0, i.jsxs)(s.ConfirmModal, {
    bodyClassName: E.confirmModal,
    header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
    confirmText: c.Z.Messages.CONFIRM,
    cancelText: c.Z.Messages.CANCEL,
    onConfirm: () => l.Z.setDMOwner(n.id, e.id),
    ...t,
    children: [
      (0, i.jsx)(_, {
        color: a.Z.unsafe_rawColors.PRIMARY_300.css
      }),
      (0, i.jsxs)('div', {
        className: E.fromToWrapper,
        children: [
          (0, i.jsx)('div', {
            className: E.from,
            children: (0, i.jsx)(u.Z, {
              user: r,
              size: s.AvatarSizes.SIZE_80
            })
          }),
          (0, i.jsx)('div', {
            className: E.to,
            children: (0, i.jsx)(u.Z, {
              user: e,
              size: s.AvatarSizes.SIZE_80
            })
          })
        ]
      }),
      (0, i.jsx)(s.Text, {
        variant: 'text-md/normal',
        children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
          usernameHook: (n, t) => (0, i.jsx)(o.Z, {
            usernameIcon: (0, i.jsx)(s.Avatar, {
              className: E.avatarIcon,
              src: e.getAvatarURL(void 0, 16),
              size: s.AvatarSizes.SIZE_16,
              'aria-hidden': !0
            }),
            className: E.discordTag,
            usernameClass: E.username,
            discriminatorClass: E.discriminator,
            user: e
          }, t)
        })
      })
    ]
  }));
}
  });
}