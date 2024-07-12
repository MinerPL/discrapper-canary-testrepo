n.d(t, {
  Z: function() {
return v;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(442837),
  r = n(481060),
  o = n(239091),
  c = n(100527),
  d = n(906732),
  u = n(471445),
  h = n(484459),
  p = n(103575),
  m = n(271383),
  _ = n(594174),
  f = n(51144),
  E = n(967128),
  C = n(981631),
  g = n(689938),
  I = n(602679);

function x(e) {
  var t, a;
  let {
userId: u,
channel: E
  } = e, {
analyticsLocations: C
  } = (0, d.ZP)(c.Z.USERNAME), g = (0, s.e7)([_.default], () => _.default.getUser(u)), x = (0, s.e7)([m.ZP], () => null != u ? m.ZP.getMember(E.guild_id, u) : null);

  function T(e) {
if (null == g)
  return null;
(0, o.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('70675')
  ]).then(n.bind(n, 654663));
  return t => (0, i.jsx)(e, {
    ...t,
    user: g,
    guildId: E.guild_id,
    channel: E
  });
});
  }
  let v = null !== (a = null !== (t = null == x ? void 0 : x.nick) && void 0 !== t ? t : f.ZP.getName(g)) && void 0 !== a ? a : '???',
N = null == x ? void 0 : x.colorString;
  return null == g ? (0, i.jsx)('span', {
className: l()(I.threadCreatorName, I.unknownCreatorName),
children: v
  }) : (0, i.jsx)(d.Gt, {
value: C,
children: (0, i.jsx)(r.Popout, {
  preload: () => (0, h.W)(g, {
    guildId: E.guild_id,
    channelId: E.id
  }),
  renderPopout: e => (0, i.jsx)(p.Z, {
    location: 'ThreadEmptyMessage',
    userId: g.id,
    guildId: E.guild_id,
    channelId: E.id,
    roleId: null == x ? void 0 : x.colorRoleId,
    ...e
  }),
  position: 'right',
  children: e => (0, i.jsx)(r.Clickable, {
    ...e,
    tag: 'span',
    className: I.threadCreatorName,
    onContextMenu: T,
    children: (0, i.jsx)(r.NameWithRole, {
      name: v,
      color: null != N ? N : void 0
    })
  })
})
  });
}

function T(e) {
  let {
channel: t
  } = e, {
threadMetadata: n
  } = t;
  return null == n ? (0, i.jsx)('div', {
style: {
  marginTop: -8
}
  }) : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(r.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: (0, i.jsx)('div', {
      className: I.subtitle,
      children: g.Z.Messages.THREAD_STARTED_BY.format({
        usernameHook: (e, n) => (0, i.jsx)(x, {
          userId: t.ownerId,
          channel: t
        }, n)
      })
    })
  }),
  t.type === C.d4z.PRIVATE_THREAD ? (0, i.jsx)(r.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: g.Z.Messages.EMPTY_MESSAGE_PRIVATE_THREAD_INSTRUCTIONS
  }) : null
]
  });
}

function v(e) {
  var t;
  let {
channel: n
  } = e, a = null !== (t = (0, u.KS)(n)) && void 0 !== t ? t : r.ThreadIcon;
  return (0, i.jsxs)(E.ZP, {
channelId: n.id,
children: [
  (0, i.jsx)('div', {
    className: I.iconWrapper,
    children: (0, i.jsx)(a, {
      className: I.icon
    })
  }),
  (0, i.jsx)(E.Ot, {
    children: n.name
  }),
  (0, i.jsx)(T, {
    channel: n
  })
]
  });
}