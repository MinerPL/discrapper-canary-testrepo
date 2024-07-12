n.d(s, {
  Z: function() {
return m;
  }
});
var a = n(735250);
n(470079);
var t = n(913527),
  r = n.n(t),
  l = n(442837),
  i = n(692547),
  o = n(481060),
  c = n(239091),
  d = n(171368),
  u = n(650774),
  I = n(271383),
  E = n(594174),
  _ = n(709054),
  T = n(246364),
  N = n(360328),
  C = n(981631),
  R = n(689938),
  M = n(617721);

function m(e) {
  var s;
  let {
guildJoinRequest: t,
guild: m,
guildJoinRequestUser: A
  } = e, {
createdAt: x,
actionedAt: h,
guildId: S,
userId: P
  } = t, {
approveRequest: g,
rejectRequest: b,
submitting: j
  } = (0, N.s)(S, P), v = null === (s = t.actionedByUser) || void 0 === s ? void 0 : s.id, p = (0, l.e7)([E.default], () => E.default.getUser(v)), f = (0, l.e7)([I.ZP], () => null != v ? I.ZP.getMember(S, v) : null, [
v,
S
  ]), Z = (0, l.e7)([u.Z], () => u.Z.getMemberCount(S)), B = (null != Z ? Z : 0) >= m.maxMembers, O = R.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, L = (0, a.jsx)(o.ClockIcon, {
size: 'custom',
color: 'currentColor',
width: 24,
height: 24,
className: M.icon
  });
  t.applicationStatus === T.wB.APPROVED ? (O = R.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, L = (0, a.jsx)(o.CircleCheckIcon, {
size: 'md',
className: M.iconApproved,
color: i.Z.colors.WHITE.css,
secondaryColor: 'currentColor'
  })) : t.applicationStatus === T.wB.REJECTED && (O = R.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, L = (0, a.jsx)(o.CircleXIcon, {
size: 'md',
color: i.Z.colors.WHITE.css,
secondaryColor: i.Z.colors.STATUS_DANGER.css
  }));
  let D = null != p && null != h ? R.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
date: r()(_.default.extractTimestamp(h)).format('ll'),
usernameHook: function() {
  var e;
  return (0, a.jsx)(o.Clickable, {
    className: M.actionedByUser,
    onClick: () => (0, d.openUserProfileModal)({
      userId: p.id,
      guildId: S,
      analyticsLocation: {
        section: C.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
        object: C.qAy.ACTIONED_BY_USER
      }
    }),
    tag: 'div',
    role: 'link',
    children: (0, a.jsx)(o.Text, {
      variant: 'text-xs/normal',
      color: 'header-primary',
      children: null !== (e = null == f ? void 0 : f.nick) && void 0 !== e ? e : p.username
    })
  }, 'username-hook');
}
  }) : r()(x).format('lll');
  return (0, a.jsxs)('div', {
className: M.container,
children: [
  (0, a.jsxs)('div', {
    className: M.wrapper,
    children: [
      (0, a.jsxs)('div', {
        className: M.inline,
        children: [
          L,
          (0, a.jsxs)('div', {
            children: [
              (0, a.jsx)(o.Heading, {
                variant: 'heading-sm/semibold',
                children: O
              }),
              (0, a.jsx)(o.Text, {
                className: M.headerSubtext,
                variant: 'text-xs/normal',
                color: 'header-secondary',
                children: D
              })
            ]
          })
        ]
      }),
      (0, a.jsxs)('div', {
        className: M.inline,
        children: [
          t.applicationStatus === T.wB.SUBMITTED && (0, a.jsxs)('div', {
            className: M.buttons,
            children: [
              (0, a.jsx)(o.Tooltip, {
                text: R.Z.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
                shouldShow: B,
                children: e => (0, a.jsx)(o.Button, {
                  ...e,
                  color: o.Button.Colors.GREEN,
                  submitting: j,
                  disabled: B,
                  onClick: g,
                  children: R.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
                })
              }),
              (0, a.jsx)(o.Button, {
                color: o.Button.Colors.RED,
                onClick: b,
                disabled: j,
                children: R.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
              })
            ]
          }),
          (0, a.jsx)(o.Clickable, {
            onClick: e => {
              (0, c.jW)(e, async () => {
                let {
                  default: e
                } = await n.e('84259').then(n.bind(n, 597409));
                return s => (0, a.jsx)(e, {
                  ...s,
                  guild: m,
                  user: A
                });
              });
            },
            className: M.overflow,
            children: (0, a.jsx)(o.MoreHorizontalIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 20,
              height: 20,
              className: M.iconInteractive
            })
          })
        ]
      })
    ]
  }),
  t.applicationStatus === T.wB.REJECTED && null != t.rejectionReason && (0, a.jsx)('div', {
    className: M.rejectionReason,
    children: (0, a.jsx)(o.Text, {
      variant: 'text-sm/normal',
      children: t.rejectionReason
    })
  })
]
  });
}