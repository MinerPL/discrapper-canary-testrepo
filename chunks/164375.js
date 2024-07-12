n.r(s), n.d(s, {
  default: function() {
return l;
  }
});
var t = n(735250);
n(470079);
var a = n(481060),
  o = n(493683),
  r = n(594174),
  i = n(799352),
  c = n(689938),
  _ = n(251846),
  d = n(444812);

function l(e) {
  var s;
  let {
channelId: n,
blockedUserIds: l,
transitionState: E,
onClose: u
  } = e, N = l.map(e => r.default.getUser(e)), R = () => {
u(), (0, i.O)(n);
  }, h = N.length > 1;
  return (0, t.jsxs)(a.ModalRoot, {
transitionState: E,
children: [
  (0, t.jsx)('img', {
    alt: '',
    className: _.headerImage,
    src: d
  }),
  (0, t.jsx)(a.ModalHeader, {
    separator: !1,
    className: _.header,
    children: (0, t.jsxs)(a.Heading, {
      variant: 'heading-lg/bold',
      className: _.title,
      children: [
        h ? c.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL : c.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
        (0, t.jsx)('br', {}),
        c.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL
      ]
    })
  }),
  (0, t.jsxs)(a.ModalContent, {
    className: _.content,
    children: [
      (0, t.jsxs)('div', {
        className: _.infoGroup,
        children: [
          (0, t.jsx)('div', {
            className: _.infoRow,
            children: h ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(a.GroupIcon, {}),
                (0, t.jsx)(a.Text, {
                  variant: 'text-md/medium',
                  children: c.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({
                    blockedUserCount: N.length
                  })
                })
              ]
            }) : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(a.UserIcon, {}),
                (0, t.jsx)(a.Text, {
                  variant: 'text-md/medium',
                  children: c.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({
                    userName: null === (s = N[0]) || void 0 === s ? void 0 : s.username
                  })
                })
              ]
            })
          }),
          (0, t.jsxs)('div', {
            className: _.infoRow,
            children: [
              (0, t.jsx)(a.BellSlashIcon, {}),
              (0, t.jsx)(a.Text, {
                variant: 'text-md/medium',
                children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY
              })
            ]
          }),
          (0, t.jsxs)('div', {
            className: _.infoRow,
            children: [
              (0, t.jsx)(a.EnvelopeIcon, {}),
              (0, t.jsx)(a.Text, {
                variant: 'text-md/medium',
                children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED
              })
            ]
          })
        ]
      }),
      (0, t.jsxs)('div', {
        className: _.buttonGroup,
        children: [
          (0, t.jsx)(a.Button, {
            type: 'submit',
            color: a.Button.Colors.BRAND,
            size: a.Button.Sizes.MEDIUM,
            onClick: () => {
              R(), o.Z.closePrivateChannel(n, !0, !0);
            },
            children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE
          }),
          (0, t.jsx)(a.Button, {
            color: a.Button.Colors.PRIMARY,
            onClick: R,
            children: c.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY
          })
        ]
      })
    ]
  })
]
  });
}