n.d(t, {
  Z: function() {
return U;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(873546),
  l = n(442837),
  r = n(481060),
  o = n(239091),
  c = n(144144),
  u = n(100527),
  d = n(906732),
  h = n(385499),
  p = n(556084),
  m = n(484459),
  _ = n(103575),
  f = n(158776),
  E = n(699516),
  g = n(111583),
  C = n(594174),
  I = n(360048),
  x = n(151827),
  T = n(626135),
  N = n(768581),
  v = n(585483),
  S = n(233870),
  Z = n(51144),
  A = n(998502),
  M = n(276264),
  b = n(981631),
  R = n(689938),
  j = n(952384),
  L = n(849787);
let P = [],
  O = A.ZP.getEnableHardwareAcceleration();

function y(e) {
  let {
user: t,
channel: a,
status: u,
activities: d
  } = e, h = (0, l.e7)([g.Z], () => null != g.Z.getTypingUsers(a.id)[t.id]), p = (0, l.e7)([C.default], () => C.default.getCurrentUser()), I = (0, l.e7)([f.Z], () => f.Z.isMobileOnline(t.id)), x = (0, l.e7)([E.Z], () => E.Z.getNickname(t.id)), T = e => {
(0, o.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('70474'),
    n.e('59820')
  ]).then(n.bind(n, 354589));
  return n => (0, i.jsx)(e, {
    ...n,
    user: t,
    channel: a
  });
});
  };
  return (0, i.jsx)(r.Popout, {
preload: () => (0, m.W)(t, {
  channelId: a.id
}),
renderPopout: e => (0, i.jsx)(_.Z, {
  ...e,
  location: 'PrivateChannelRecipients',
  userId: t.id,
  channelId: a.id
}),
position: s.tq ? 'window_center' : 'left',
spacing: 16,
onShiftClick: () => {
  let e = '@'.concat(Z.ZP.getUserTag(t, {
      decoration: 'never'
    })),
    n = '<@'.concat(t.id, '>');
  v.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
    plainText: e,
    rawText: n
  }), c.Z.startTyping(a.id);
},
children: e => (0, i.jsx)(M.Z, {
  user: t,
  currentUser: p,
  isOwner: t.id === a.ownerId,
  ownerTooltipText: R.Z.Messages.GROUP_OWNER,
  shouldAnimateStatus: O,
  isTyping: h,
  status: u,
  activities: d,
  channel: a,
  onContextMenu: T,
  isMobile: I,
  nick: x,
  ...e
}, t.id)
  });
}

function D(e) {
  var t;
  let {
integration: l,
channel: c
  } = e, u = a.useCallback(e => {
(0, o.jW)(e, async () => {
  let {
    default: e
  } = await n.e('37969').then(n.bind(n, 496281));
  return t => (0, i.jsx)(e, {
    ...t,
    channel: c,
    integration: l
  });
});
  }, [
l,
c
  ]), d = l.application.bot, p = N.ZP.getApplicationIconURL({
id: l.application.id,
icon: l.application.icon,
bot: null === (t = l.application) || void 0 === t ? void 0 : t.bot,
botIconFirst: !0
  });
  return null != d ? (0, i.jsx)(r.Popout, {
preload: () => (0, m.W)(d.id, p, {
  channelId: c.id
}),
renderPopout: e => (0, i.jsx)(_.Z, {
  ...e,
  location: 'PrivateChannelRecipients',
  userId: d.id,
  channelId: c.id
}),
position: s.tq ? 'window_center' : 'left',
spacing: 16,
children: e => (0, i.jsx)(I.Z, {
  onContextMenu: u,
  className: j.member,
  name: (0, i.jsx)('span', {
    className: j.username,
    children: l.application.name
  }),
  avatar: (0, i.jsx)(r.Avatar, {
    size: r.AvatarSizes.SIZE_32,
    src: p,
    'aria-label': l.application.name,
    statusTooltip: !0
  }),
  decorators: (0, i.jsx)(h.Z, {
    className: j.botTag,
    verified: null == d ? void 0 : d.isVerifiedBot()
  }),
  id: l.application.id,
  focusProps: {
    offset: {
      top: 4,
      bottom: 4,
      left: 4,
      right: 4
    }
  },
  ...e
})
  }) : null;
}

function k(e, t) {
  if (e.listItems.length !== t.listItems.length)
return !1;
  for (let n = 0; n < e.listItems.length; n++) {
let i = e.listItems[n],
  a = t.listItems[n];
if (i.user !== a.user || i.status !== a.status || i.activities !== a.activities)
  return !1;
  }
  return !0;
}

function U(e) {
  var t;
  let {
channel: s
  } = e, o = C.default.getCurrentUser(), c = null == o ? void 0 : o.isStaff(), {
analyticsLocations: _
  } = (0, d.ZP)(u.Z.MEMBER_LIST);
  let {
listItems: g
  } = (t = s, (0, l.e7)([
E.Z,
C.default,
f.Z
  ], () => {
let e = (0, S.T)(t.recipients, C.default),
  n = {};
for (let t of e) {
  var i, a, s;
  E.Z.isFriend(t.id) || t.id === (null === (i = C.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) ? n[t.id] = {
    status: null !== (a = f.Z.getStatus(t.id)) && void 0 !== a ? a : b.Skl.OFFLINE,
    activities: null !== (s = f.Z.getActivities(t.id)) && void 0 !== s ? s : P
  } : n[t.id] = {
    status: b.Skl.OFFLINE,
    activities: P
  };
}
let l = [];
for (let t of e) {
  let e = {
    user: t,
    status: n[t.id].status,
    activities: n[t.id].activities
  };
  l.push(e);
}
return {
  listItems: l
};
  }, [t], k)), {
installedIntegrations: N,
applicationsShelf: v,
fetched: Z,
appsInGDMEnabled: A,
availableApplications: M
  } = (0, p.j)({
channelId: s.id
  });
  a.useEffect(() => {
if (c)
  for (let e of g)
    (0, m.W)(e.user, {
      dispatchWait: !0,
      channelId: s.id
    });
  }, [
c,
g,
s.id
  ]), a.useEffect(() => {
T.default.track(b.rMx.MEMBER_LIST_VIEWED, {
  channel_id: s.id,
  channel_type: s.type,
  guild_id: s.guild_id
});
  }, [
s.guild_id,
s.id,
s.type
  ]);
  let O = c && g.every(e => e.user.isStaff());
  return (0, i.jsx)(d.Gt, {
value: _,
children: (0, i.jsx)('div', {
  className: L.membersWrap,
  children: (0, i.jsxs)(r.Scroller, {
    className: L.members,
    fade: !0,
    children: [
      (0, i.jsxs)(x.Z, {
        className: L.membersGroup,
        children: [
          ''.concat(R.Z.Messages.MEMBERS, '\u2014').concat(g.length, ' '),
          O ? (0, i.jsx)(h.Z, {
            className: L.__invalid_decorator,
            type: h.Z.Types.STAFF_ONLY_DM
          }) : null
        ]
      }),
      g.map(e => (0, i.jsx)(y, {
        user: e.user,
        status: e.status,
        activities: e.activities,
        channel: s
      }, e.user.id)),
      A && (N.length > 0 || Z && v.length > 0) && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(x.Z, {
            className: L.membersGroup,
            children: ''.concat(R.Z.Messages.APPS, '\u2014').concat(N.length)
          }),
          N.map(e => (0, i.jsx)(D, {
            integration: e,
            channel: s
          }, e.application.id)),
          M.length > 0 && (0, i.jsx)(I.Z, {
            className: j.member,
            onClick: () => {
              (0, r.openModalLazy)(async () => {
                let {
                  default: e
                } = await n.e('4536').then(n.bind(n, 422677));
                return t => (0, i.jsx)(e, {
                  ...t,
                  channelId: s.id
                });
              });
            },
            avatar: (0, i.jsx)('div', {
              className: L.appIconWrapper,
              children: (0, i.jsx)(r.PlusSmallIcon, {
                size: 'sm',
                color: 'currentColor'
              })
            }),
            name: R.Z.Messages.PRIVATE_CHANNEL_ADD_APPS
          })
        ]
      })
    ]
  })
})
  });
}