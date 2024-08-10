n.d(s, {
  C: function() {
return C;
  },
  h: function() {
return M;
  }
}), n(47120), n(411104);
var a = n(735250),
  t = n(470079),
  r = n(120356),
  l = n.n(r),
  i = n(913527),
  o = n.n(i),
  c = n(481060),
  d = n(239091),
  u = n(598077),
  I = n(768581),
  E = n(693546),
  _ = n(246364),
  T = n(689938),
  N = n(327961);

function R(e) {
  let {
icon: s,
onClick: n,
submitting: t,
disabled: r
  } = e;
  return (0, a.jsx)(c.Clickable, {
className: l()(N.actionIconContainer, {
  [N.disabled]: r || t
}),
onClick: n,
children: t ? (0, a.jsx)(c.Dots, {
  className: N.icon,
  dotRadius: 2,
  themed: !0
}) : (0, a.jsx)(s, {
  className: N.icon,
  size: 'xxs',
  color: 'currentColor'
})
  });
}

function C(e) {
  let {
applicationStatus: s,
guild: r,
guildJoinRequest: i,
className: C,
onClick: M,
atMaxMemberCapacity: m
  } = e, [A, x] = t.useState(null), {
user: h,
createdAt: S
  } = i;
  if (null == h)
throw Error('Missing user on this guild join request!');
  let P = t.useMemo(() => new u.Z(h), [h]),
g = I.ZP.getUserAvatarURL(P),
b = s === _.wB.SUBMITTED,
j = t.useCallback(async (e, s) => {
  let {
    guildId: n,
    userId: a
  } = e;
  if (null == A) {
    x(s);
    try {
      await E.Z.updateGuildJoinRequest(n, a, s);
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(T.Z.Messages.ERROR_GENERIC_TITLE, c.ToastType.FAILURE)), x(null);
    }
  }
}, [A]),
v = async () => {
  await j(i, _.wB.APPROVED);
}, p = async () => {
  await j(i, _.wB.REJECTED);
};
  return (0, a.jsxs)(c.Clickable, {
className: l()(N.container, C),
onClick: M,
children: [
  (0, a.jsx)(c.Avatar, {
    src: g,
    size: c.AvatarSizes.SIZE_40,
    'aria-label': h.username,
    className: N.__invalid_spacer
  }),
  (0, a.jsxs)('div', {
    className: N.userDetails,
    children: [
      (0, a.jsx)(c.Text, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: h.username
      }),
      (0, a.jsx)(c.Text, {
        className: N.createdAt,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: o()(S).format('lll')
      })
    ]
  }),
  b && !m && (0, a.jsx)(R, {
    icon: c.CheckmarkLargeIcon,
    onClick: v,
    submitting: A === _.wB.APPROVED,
    disabled: null != A && A !== _.wB.APPROVED
  }),
  b && (0, a.jsx)(R, {
    icon: c.XSmallIcon,
    onClick: p,
    submitting: A === _.wB.REJECTED,
    disabled: null != A && A !== _.wB.REJECTED
  }),
  (0, a.jsx)(c.Clickable, {
    className: l()(N.overflowMenuContainer, {
      [N.disabled]: null != A
    }),
    onClick: e => {
      (0, d.jW)(e, async () => {
        let {
          default: e
        } = await n.e('84259').then(n.bind(n, 597409));
        return s => (0, a.jsx)(e, {
          ...s,
          guild: r,
          user: P
        });
      }, {
        position: 'bottom',
        align: 'right'
      });
    },
    children: (0, a.jsx)(c.MoreHorizontalIcon, {
      size: 'custom',
      color: 'currentColor',
      className: N.icon,
      width: 18
    })
  })
]
  });
}

function M() {
  let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
s = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
  return (0, a.jsxs)('div', {
className: N.placeholder,
children: [
  (0, a.jsx)('div', {
    className: l()(N.placeholderAvatar)
  }),
  (0, a.jsxs)('div', {
    className: N.userDetails,
    children: [
      (0, a.jsx)('div', {
        className: N.placeholderUsername,
        style: {
          maxWidth: e
        }
      }),
      (0, a.jsx)('div', {
        className: N.placeholderCreatedAt,
        style: {
          maxWidth: s
        }
      })
    ]
  })
]
  });
}