n.d(t, {
  Z: function() {
return R;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(399606),
  r = n(481060),
  o = n(493683),
  c = n(906732),
  u = n(69882),
  d = n(251794),
  h = n(386696),
  p = n(910693),
  m = n(314897),
  _ = n(271383),
  f = n(430824),
  E = n(496675),
  g = n(158776),
  C = n(885110),
  I = n(594174),
  x = n(572004),
  T = n(5192),
  N = n(51144),
  v = n(981631),
  S = n(689938),
  Z = n(614603);

function A(e) {
  let {
user: t,
guildId: n,
onClose: a
  } = e, s = t.id, o = (0, l.e7)([
C.Z,
g.Z,
m.default
  ], () => s === m.default.getId() ? C.Z.getStatus() : g.Z.getStatus(s, n), [
s,
n
  ]);
  return (0, i.jsxs)('div', {
className: Z.topRow,
children: [
  (0, i.jsxs)('div', {
    className: Z.memberNameContainer,
    children: [
      (0, i.jsx)('div', {
        className: Z.memberAvatar,
        children: (0, i.jsx)(r.Avatar, {
          src: t.getAvatarURL(n, 48),
          'aria-label': t.username,
          size: r.AvatarSizes.SIZE_48,
          status: o
        })
      }),
      (0, i.jsx)('div', {
        className: Z.memberName,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-lg/medium',
          children: (0, i.jsx)(r.NameWithRole, {
            name: T.ZP.getName(n, null, t),
            color: r.tokens.colors.HEADER_PRIMARY.css
          })
        })
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-md/medium',
        color: 'text-normal',
        children: N.ZP.getUserTag(t)
      })
    ]
  }),
  (0, i.jsx)(r.Text, {
    variant: 'text-md/medium',
    color: 'text-normal',
    children: (0, i.jsx)(r.Clickable, {
      className: Z.closeAction,
      onClick: a,
      children: (0, i.jsx)(r.XSmallIcon, {
        size: 'md',
        color: 'currentColor'
      })
    })
  })
]
  });
}

function M(e) {
  let {
tag: t = 'div',
disabled: n,
children: a,
onClick: l,
...o
  } = e;
  return (0, i.jsx)(r.Clickable, {
...o,
tag: t,
className: s()(Z.bottomRowAction, {
  [Z.bottomRowActionDisabled]: n
}),
onClick: n ? void 0 : l,
children: (0, i.jsx)('div', {
  className: Z.innerBottomRowAction,
  children: a
})
  });
}

function b(e) {
  let {
user: t,
member: a,
guildId: s
  } = e, _ = (0, l.e7)([f.Z], () => f.Z.getGuild(s)), {
canKickUser: g,
canBanUser: C,
canModerateMembers: T
  } = (0, l.cj)([
E.Z,
I.default,
f.Z
  ], () => ({
canKickUser: null != _ && E.Z.canManageUser(v.Plq.KICK_MEMBERS, t, _),
canBanUser: null != _ && E.Z.canManageUser(v.Plq.BAN_MEMBERS, t, _),
canModerateMembers: null != _ && (0, h.F)(_.id, t.id, [
  I.default,
  f.Z,
  E.Z
])
  }), [
t,
_
  ]), N = (0, u.b)(a), {
analyticsLocations: A,
newestAnalyticsLocation: b
  } = (0, c.ZP)(), R = (0, p.sE)(s, {
targetUserId: t.id,
location: b,
locations: A
  }), j = (0, l.e7)([m.default], () => m.default.getId() === (null == t ? void 0 : t.id));
  return (0, i.jsxs)('div', {
className: Z.bottomRow,
children: [
  (0, i.jsxs)(M, {
    disabled: j,
    'aria-label': S.Z.Messages.SEND_DM,
    onClick: () => {
      o.Z.openPrivateChannel(t.id);
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
        children: S.Z.Messages.SEND_DM
      })
    ]
  }),
  (0, i.jsxs)(M, {
    disabled: !g,
    'aria-label': S.Z.Messages.KICK,
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e('5454').then(n.bind(n, 854360));
        return n => (0, i.jsx)(e, {
          ...n,
          location: b,
          guildId: s,
          user: t
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
        children: S.Z.Messages.KICK
      })
    ]
  }),
  (0, i.jsxs)(M, {
    disabled: !C,
    'aria-label': S.Z.Messages.BAN,
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e('43350').then(n.bind(n, 98746));
        return n => (0, i.jsx)(e, {
          ...n,
          location: b,
          guildId: s,
          user: t
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
        children: S.Z.Messages.BAN
      })
    ]
  }),
  (0, i.jsxs)(M, {
    disabled: !T,
    'aria-label': S.Z.Messages.TIMEOUT_USER,
    onClick: () => {
      N ? (0, d.q)(a.guildId, a.userId, A) : (0, d.z)(a.guildId, a.userId, A);
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
        children: N ? S.Z.Messages.REMOVE : S.Z.Messages.TIMEOUT_USER
      })
    ]
  }),
  (0, i.jsxs)(M, {
    'aria-label': S.Z.Messages.COPY_ID,
    onClick: () => {
      R(p.jQ.COPY_ID), (0, x.JG)(t.id);
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
        children: S.Z.Messages.COPY_ID
      })
    ]
  })
]
  });
}

function R(e) {
  let {
userId: t,
guildId: n,
onClose: a
  } = e, s = (0, l.e7)([I.default], () => I.default.getUser(t), [t]), r = (0, l.e7)([_.ZP], () => _.ZP.getMember(n, t), [
n,
t
  ]);
  return null == s || null == r ? null : (0, i.jsxs)('div', {
className: Z.container,
children: [
  (0, i.jsx)(A, {
    user: s,
    guildId: n,
    onClose: a
  }),
  (0, i.jsx)(b, {
    user: s,
    member: r,
    guildId: n
  })
]
  });
}