n.d(t, {
  Z: function() {
return k;
  }
}), n(653041), n(47120), n(390547);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(512722),
  o = n.n(l),
  c = n(442837),
  u = n(477690),
  d = n(481060),
  _ = n(447543),
  E = n(317381),
  I = n(778569),
  m = n(182906),
  T = n(884338),
  h = n(100527),
  N = n(906732),
  C = n(835473),
  f = n(471445),
  p = n(955415),
  g = n(601964),
  S = n(592125),
  A = n(430824),
  R = n(496675),
  O = n(594174),
  x = n(514342),
  M = n(624138),
  v = n(358595),
  L = n(981631),
  Z = n(245335),
  P = n(689938),
  D = n(556849);
let b = (0, M.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  j = (0, M.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  U = (0, M.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function y(e) {
  let {
members: t,
membersOnline: n,
isLarge: s,
isStacked: a
  } = e, l = [];
  return null != n && n > 0 && l.push((0, i.jsxs)('div', {
className: D.statusWrapper,
children: [
  (0, i.jsx)('i', {
    className: D.statusOnline
  }),
  (0, i.jsx)(d.Text, {
    variant: 'text-xs/normal',
    className: D.count,
    children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
      membersOnline: n
    })
  })
]
  }, 'onlineCount')), null != t && l.push((0, i.jsxs)('div', {
className: D.statusWrapper,
children: [
  (0, i.jsx)('i', {
    className: D.statusOffline
  }),
  (0, i.jsx)(d.Text, {
    variant: 'text-xs/normal',
    className: D.count,
    children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
      count: t
    })
  })
]
  }, 'memberCount')), (0, i.jsx)('div', {
className: r()(D.statusCounts, {
  [D.large]: s,
  [D.stacked]: a
}),
children: l
  });
}

function B(e) {
  let {
channel: t,
guild: n,
isStacked: s,
hasEnded: a
  } = e;
  if (null != t && null != n) {
let e = (0, f.KS)(t, n);
return (0, i.jsxs)('div', {
  className: r()(D.channel, {
    [D.stacked]: s,
    [D.ended]: a
  }),
  children: [
    null != e ? (0, i.jsx)(e, {
      className: D.channelIcon,
      size: 'xs',
      color: 'currentColor'
    }) : null,
    (0, i.jsx)(x.Z, {
      children: (0, i.jsx)(d.Text, {
        variant: 'text-xs/normal',
        children: P.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
          channelName: t.name,
          serverName: n.name
        })
      })
    })
  ]
});
  }
  return null != n ? (0, i.jsx)('div', {
className: r()(D.channel, {
  [D.stacked]: s,
  [D.ended]: a
}),
children: (0, i.jsx)(x.Z, {
  children: (0, i.jsx)(d.Text, {
    variant: 'text-xs/normal',
    children: P.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
      guildName: n.name
    })
  })
})
  }) : null;
}

function k(e) {
  var t, n;
  let a, l, {
  invite: u,
  getAcceptInviteContext: f
} = e,
{
  approximate_member_count: x,
  approximate_presence_count: M,
  target_type: k,
  target_application: G
} = u;
  o()(k === Z.Iq.EMBEDDED_APPLICATION && null != G, 'invalid application invite');
  let F = s.useRef(null),
[w, V] = s.useState(!1),
[H, Y] = s.useState(!1);
  s.useEffect(() => {
let e = new ResizeObserver(() => function() {
    var e;
    let t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetWidth;
    null != t && (V(t < U + j), Y(t <= 2 * b));
  }()),
  t = F.current;
return null != t && e.observe(t), () => {
  e.disconnect();
};
  }, [
F,
V,
Y
  ]);
  let W = (0, c.e7)([A.Z], () => null != u.guild ? A.Z.getGuild(u.guild.id) : null, [u]),
K = (0, C.Z)([G.id])[0],
z = (0, c.e7)([E.ZP], () => {
  var e;
  return (null == u ? void 0 : u.channel) != null && (null === (e = E.ZP.getSelfEmbeddedActivityForChannel(u.channel.id)) || void 0 === e ? void 0 : e.applicationId) === G.id;
}),
Q = (0, c.e7)([E.ZP], () => {
  var e;
  return ((null === (e = u.channel) || void 0 === e ? void 0 : e.id) != null ? E.ZP.getEmbeddedActivitiesForChannel(u.channel.id) : []).some(e => {
    let {
      applicationId: t
    } = e;
    return G.id === t;
  });
}),
q = S.Z.getChannel(null === (t = u.channel) || void 0 === t ? void 0 : t.id),
X = (0, c.e7)([R.Z], () => null != q && R.Z.can(L.Plq.USE_EMBEDDED_ACTIVITIES, q), [q]),
{
  analyticsLocations: J
} = (0, N.ZP)(h.Z.INVITE_EMBED),
$ = (0, I.Z)({
  applicationId: G.id,
  size: b,
  names: ['embedded_cover']
}),
ee = (0, c.Wu)([E.ZP], () => null != q ? E.ZP.getEmbeddedActivitiesForChannel(q.id).filter(e => e.applicationId === G.id).flatMap(e => Array.from(e.userIds)) : [], [
  q,
  G.id
]),
et = (0, c.Wu)([O.default], () => ee.map(e => O.default.getUser(e)), [ee]),
en = u.state === L.r2o.ACCEPTING,
ei = null != W;
  if (null == W) {
if (null == u.guild)
  return (0, i.jsx)(v.Z, {});
W = new g.ZP(u.guild);
  }
  let es = ei && !X || ei && z,
ea = () => {
  _.Z.acceptInviteAndTransitionToInviteChannel({
    inviteKey: u.code,
    context: f('Invite Button Embed'),
    analyticsLocations: J
  });
};
  return (ei && z && (a = P.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !X && (a = P.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), l = z ? P.Z.Messages.INVITE_EMBED_JOINED : Q || !ei ? P.Z.Messages.JOIN : P.Z.Messages.START, null == u.code || '' === u.code) ? null : (0, i.jsxs)('div', {
className: D.container,
ref: F,
children: [
  (0, i.jsx)('div', {
    className: r()(D.imgContainer, {
      [D.large]: w,
      [D.stacked]: H
    }),
    children: (0, i.jsx)(m.Z, {
      imageBackground: $,
      applicationName: null !== (n = null == K ? void 0 : K.name) && void 0 !== n ? n : '',
      imageClassName: r()(D.img, {
        [D.large]: w,
        [D.stacked]: H
      }),
      imageNotFoundClassName: r()(D.brokenImg, {
        [D.large]: w,
        [D.stacked]: H
      })
    })
  }),
  (0, i.jsxs)(p.Z, {
    className: r()(D.content, {
      [D.large]: w,
      [D.stacked]: H
    }),
    children: [
      (0, i.jsxs)('div', {
        className: D.info,
        children: [
          (0, i.jsx)(d.FormTitle, {
            children: ei ? P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : P.Z.Messages.INVITE_BUTTON_TITLE_INVITED
          }),
          (0, i.jsx)(d.Heading, {
            className: D.heading,
            variant: 'heading-xl/semibold',
            children: null == K ? void 0 : K.name
          }),
          (0, i.jsx)(B, {
            channel: q,
            guild: W,
            isStacked: H,
            hasEnded: !Q
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: r()(D.currentState, {
          [D.large]: w,
          [D.split]: !Q && H
        }),
        children: [
          !Q && ei ? (0, i.jsxs)('div', {
            className: r()(D.endedNote, {
              [D.large]: w
            }),
            children: [
              (0, i.jsx)(d.Text, {
                variant: 'text-xs/medium',
                children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
              }),
              (0, i.jsx)(d.Text, {
                variant: 'text-xs/medium',
                children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_START
              })
            ]
          }) : null,
          ei ? null : (0, i.jsx)(y, {
            members: x,
            membersOnline: M,
            isLarge: w,
            isStacked: H
          }),
          (0, i.jsxs)('div', {
            className: D.cta,
            children: [
              null != W && Q ? (0, i.jsx)('div', {
                className: D.avatars,
                children: (0, i.jsx)(T.Z, {
                  guildId: W.id,
                  users: et,
                  max: 4
                })
              }) : null,
              (0, i.jsx)(d.Tooltip, {
                text: a,
                children: e => {
                  let {
                    onClick: t,
                    ...n
                  } = e;
                  return (0, i.jsx)(d.Button, {
                    className: D.actionButton,
                    onClick: () => {
                      ea(), null == t || t();
                    },
                    wrapperClassName: D.tooltipButtonWrapper,
                    ...n,
                    submitting: en,
                    disabled: es,
                    color: d.ButtonColors.GREEN,
                    children: l
                  });
                }
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