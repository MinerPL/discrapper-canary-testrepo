n.d(t, {
  Z: function() {
return j;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(399606),
  r = n(481060),
  o = n(493683),
  c = n(906732),
  d = n(69882),
  u = n(251794),
  h = n(386696),
  p = n(910693),
  m = n(314897),
  _ = n(271383),
  f = n(430824),
  E = n(496675),
  C = n(158776),
  g = n(885110),
  I = n(594174),
  x = n(572004),
  T = n(5192),
  v = n(51144),
  N = n(991570),
  S = n(981631),
  Z = n(689938),
  A = n(614603);

function M(e) {
  let {
user: t,
backgroundColor: n,
guildId: a,
onClose: l
  } = e, o = t.id, c = (0, s.e7)([
g.Z,
C.Z,
m.default
  ], () => o === m.default.getId() ? g.Z.getStatus() : C.Z.getStatus(o, a), [
o,
a
  ]);
  return (0, i.jsxs)('div', {
className: A.topRow,
style: {
  backgroundColor: n
},
children: [
  (0, i.jsxs)('div', {
    className: A.memberNameContainer,
    children: [
      (0, i.jsx)('div', {
        className: A.memberAvatar,
        children: (0, i.jsx)(r.Avatar, {
          src: t.getAvatarURL(a, 48),
          'aria-label': t.username,
          size: r.AvatarSizes.SIZE_48,
          status: c
        })
      }),
      (0, i.jsx)('div', {
        className: A.memberName,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-lg/medium',
          children: (0, i.jsx)(r.NameWithRole, {
            name: T.ZP.getName(a, null, t),
            color: r.tokens.colors.HEADER_PRIMARY.css
          })
        })
      }),
      (0, i.jsx)('div', {
        className: A.__invalid_memberGlobalName,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-md/medium',
          color: 'text-normal',
          children: v.ZP.getUserTag(t)
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: A.__invalid_close,
    children: (0, i.jsx)(r.Text, {
      variant: 'text-md/medium',
      color: 'text-normal',
      children: (0, i.jsx)(r.Clickable, {
        className: A.closeAction,
        onClick: l,
        children: (0, i.jsx)(r.CloseSmallIcon, {
          size: 'md',
          color: 'currentColor'
        })
      })
    })
  })
]
  });
}

function b(e) {
  let {
tag: t = 'div',
disabled: n,
children: a,
onClick: s,
...o
  } = e;
  return (0, i.jsx)(r.Clickable, {
...o,
tag: t,
className: l()(A.bottomRowAction, {
  [A.bottomRowActionDisabled]: n
}),
onClick: n ? void 0 : s,
children: (0, i.jsx)('div', {
  className: A.innerBottomRowAction,
  children: a
})
  });
}

function R(e) {
  let {
backgroundColor: t,
user: a,
member: l,
guildId: m
  } = e, _ = (0, s.e7)([f.Z], () => f.Z.getGuild(m)), {
canKickUser: C,
canBanUser: g,
canModerateMembers: T
  } = (0, s.cj)([
E.Z,
I.default,
f.Z
  ], () => ({
canKickUser: null != _ && E.Z.canManageUser(S.Plq.KICK_MEMBERS, a, _),
canBanUser: null != _ && E.Z.canManageUser(S.Plq.BAN_MEMBERS, a, _),
canModerateMembers: null != _ && (0, h.F)(_.id, a.id, [
  I.default,
  f.Z,
  E.Z
])
  }), [
a,
_
  ]), v = (0, d.b)(l), {
analyticsLocations: N,
newestAnalyticsLocation: M
  } = (0, c.ZP)(), R = (0, p.sE)(m, {
targetUserId: a.id,
location: M,
locations: N
  });
  return (0, i.jsxs)('div', {
className: A.bottomRow,
children: [
  (0, i.jsxs)(b, {
    'aria-label': Z.Z.Messages.SEND_DM,
    style: {
      backgroundColor: t
    },
    onClick: () => {
      o.Z.openPrivateChannel(a.id);
    },
    children: [
      (0, i.jsx)(r.ChatIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 22,
        height: 22
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'none',
        children: Z.Z.Messages.SEND_DM
      })
    ]
  }),
  (0, i.jsxs)(b, {
    disabled: !C,
    'aria-label': Z.Z.Messages.KICK,
    style: {
      backgroundColor: t
    },
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e('5454').then(n.bind(n, 854360));
        return t => (0, i.jsx)(e, {
          ...t,
          location: M,
          guildId: m,
          user: a
        });
      });
    },
    children: [
      (0, i.jsx)(r.UserMinusIcon, {
        size: 'custom',
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'none',
        children: Z.Z.Messages.KICK
      })
    ]
  }),
  (0, i.jsxs)(b, {
    disabled: !g,
    'aria-label': Z.Z.Messages.BAN,
    style: {
      backgroundColor: t
    },
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e('43350').then(n.bind(n, 98746));
        return t => (0, i.jsx)(e, {
          ...t,
          location: M,
          guildId: m,
          user: a
        });
      });
    },
    children: [
      (0, i.jsx)(r.HammerIcon, {
        size: 'custom',
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'none',
        children: Z.Z.Messages.BAN
      })
    ]
  }),
  (0, i.jsxs)(b, {
    disabled: !T,
    'aria-label': Z.Z.Messages.TIMEOUT_USER,
    style: {
      backgroundColor: t
    },
    onClick: () => {
      v ? (0, u.q)(l.guildId, l.userId, N) : (0, u.z)(l.guildId, l.userId, N);
    },
    children: [
      (0, i.jsx)(r.ClockWarningIcon, {
        size: 'custom',
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'none',
        children: v ? Z.Z.Messages.REMOVE : Z.Z.Messages.TIMEOUT_USER
      })
    ]
  }),
  (0, i.jsxs)(b, {
    'aria-label': Z.Z.Messages.COPY_ID,
    style: {
      backgroundColor: t
    },
    onClick: () => {
      R(p.jQ.COPY_ID), (0, x.JG)(a.id);
    },
    disabled: !x.wS,
    children: [
      (0, i.jsx)(r.IdIcon, {
        size: 'custom',
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'none',
        children: Z.Z.Messages.COPY_ID
      })
    ]
  })
]
  });
}

function j(e) {
  let {
userId: t,
guildId: n,
onClose: a
  } = e, l = (0, s.e7)([I.default], () => I.default.getUser(t), [t]), o = (0, s.e7)([_.ZP], () => _.ZP.getMember(n, t), [
n,
t
  ]), c = (0, N.f)(t, n, 0.8, r.tokens.colors.BACKGROUND_SECONDARY);
  return null == l || null == o ? null : (0, i.jsxs)('div', {
className: A.container,
children: [
  (0, i.jsx)(M, {
    user: l,
    guildId: n,
    onClose: a,
    backgroundColor: c
  }),
  (0, i.jsx)(R, {
    user: l,
    member: o,
    guildId: n,
    backgroundColor: c
  })
]
  });
}