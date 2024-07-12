n.d(t, {
  Z: function() {
return U;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(873546),
  s = n(442837),
  r = n(481060),
  o = n(239091),
  c = n(144144),
  d = n(100527),
  u = n(906732),
  h = n(556084),
  p = n(484459),
  m = n(103575),
  _ = n(158776),
  f = n(699516),
  E = n(111583),
  C = n(594174),
  g = n(467679),
  I = n(360048),
  x = n(151827),
  T = n(626135),
  v = n(768581),
  N = n(585483),
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
status: d,
activities: u
  } = e, h = (0, s.e7)([E.Z], () => null != E.Z.getTypingUsers(a.id)[t.id]), g = (0, s.e7)([C.default], () => C.default.getCurrentUser()), I = (0, s.e7)([_.Z], () => _.Z.isMobileOnline(t.id)), x = (0, s.e7)([f.Z], () => f.Z.getNickname(t.id)), T = e => {
(0, o.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('17400'),
    n.e('60677'),
    n.e('33952')
  ]).then(n.bind(n, 354589));
  return n => (0, i.jsx)(e, {
    ...n,
    user: t,
    channel: a
  });
});
  };
  return (0, i.jsx)(r.Popout, {
preload: () => (0, p.W)(t, {
  channelId: a.id
}),
renderPopout: e => (0, i.jsx)(m.Z, {
  ...e,
  location: 'PrivateChannelRecipients',
  userId: t.id,
  channelId: a.id
}),
position: l.tq ? 'window_center' : 'left',
spacing: 16,
onShiftClick: () => {
  let e = '@'.concat(Z.ZP.getUserTag(t, {
      decoration: 'never'
    })),
    n = '<@'.concat(t.id, '>');
  N.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
    plainText: e,
    rawText: n
  }), c.Z.startTyping(a.id);
},
children: e => (0, i.jsx)(M.Z, {
  user: t,
  currentUser: g,
  isOwner: t.id === a.ownerId,
  ownerTooltipText: R.Z.Messages.GROUP_OWNER,
  shouldAnimateStatus: O,
  isTyping: h,
  status: d,
  activities: u,
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
integration: s,
channel: c
  } = e, d = a.useCallback(e => {
(0, o.jW)(e, async () => {
  let {
    default: e
  } = await n.e('37969').then(n.bind(n, 496281));
  return t => (0, i.jsx)(e, {
    ...t,
    channel: c,
    integration: s
  });
});
  }, [
s,
c
  ]), u = s.application.bot, h = v.ZP.getApplicationIconURL({
id: s.application.id,
icon: s.application.icon,
bot: null === (t = s.application) || void 0 === t ? void 0 : t.bot,
botIconFirst: !0
  });
  return null != u ? (0, i.jsx)(r.Popout, {
preload: () => (0, p.W)(u.id, h, {
  channelId: c.id
}),
renderPopout: e => (0, i.jsx)(m.Z, {
  ...e,
  location: 'PrivateChannelRecipients',
  userId: u.id,
  channelId: c.id
}),
position: l.tq ? 'window_center' : 'left',
spacing: 16,
children: e => (0, i.jsx)(I.Z, {
  onContextMenu: d,
  className: j.member,
  name: (0, i.jsx)('span', {
    className: j.username,
    children: s.application.name
  }),
  avatar: (0, i.jsx)(r.Avatar, {
    size: r.AvatarSizes.SIZE_32,
    src: h,
    'aria-label': s.application.name,
    statusTooltip: !0
  }),
  decorators: (0, i.jsx)(g.Z, {
    className: j.botTag,
    verified: null == u ? void 0 : u.isVerifiedBot()
  }),
  id: s.application.id,
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
channel: l
  } = e, o = C.default.getCurrentUser(), c = null == o ? void 0 : o.isStaff(), {
analyticsLocations: m
  } = (0, u.ZP)(d.Z.MEMBER_LIST);
  let {
listItems: E
  } = (t = l, (0, s.e7)([
f.Z,
C.default,
_.Z
  ], () => {
let e = (0, S.T)(t.recipients, C.default),
  n = {};
for (let t of e) {
  var i, a, l;
  f.Z.isFriend(t.id) || t.id === (null === (i = C.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) ? n[t.id] = {
    status: null !== (a = _.Z.getStatus(t.id)) && void 0 !== a ? a : b.Skl.OFFLINE,
    activities: null !== (l = _.Z.getActivities(t.id)) && void 0 !== l ? l : P
  } : n[t.id] = {
    status: b.Skl.OFFLINE,
    activities: P
  };
}
let s = [];
for (let t of e) {
  let e = {
    user: t,
    status: n[t.id].status,
    activities: n[t.id].activities
  };
  s.push(e);
}
return {
  listItems: s
};
  }, [t], k)), {
installedIntegrations: v,
applicationsShelf: N,
fetched: Z,
appsInGDMEnabled: A,
availableApplications: M
  } = (0, h.j)({
channelId: l.id
  });
  a.useEffect(() => {
if (c)
  for (let e of E)
    (0, p.W)(e.user, {
      dispatchWait: !0,
      channelId: l.id
    });
  }, [
c,
E,
l.id
  ]), a.useEffect(() => {
T.default.track(b.rMx.MEMBER_LIST_VIEWED, {
  channel_id: l.id,
  channel_type: l.type,
  guild_id: l.guild_id
});
  }, [
l.guild_id,
l.id,
l.type
  ]);
  let O = c && E.every(e => e.user.isStaff());
  return (0, i.jsx)(u.Gt, {
value: m,
children: (0, i.jsx)('div', {
  className: L.membersWrap,
  children: (0, i.jsxs)(r.Scroller, {
    className: L.members,
    fade: !0,
    children: [
      (0, i.jsxs)(x.Z, {
        className: L.membersGroup,
        children: [
          ''.concat(R.Z.Messages.MEMBERS, '\u2014').concat(E.length, ' '),
          O ? (0, i.jsx)(g.Z, {
            className: L.__invalid_decorator,
            type: g.Z.Types.STAFF_ONLY_DM
          }) : null
        ]
      }),
      E.map(e => (0, i.jsx)(y, {
        user: e.user,
        status: e.status,
        activities: e.activities,
        channel: l
      }, e.user.id)),
      A && (v.length > 0 || Z && N.length > 0) && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(x.Z, {
            className: L.membersGroup,
            children: ''.concat(R.Z.Messages.APPS, '\u2014').concat(v.length)
          }),
          v.map(e => (0, i.jsx)(D, {
            integration: e,
            channel: l
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
                  channelId: l.id
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