var a = t(735250),
  s = t(470079),
  l = t(442837),
  r = t(481060),
  i = t(239091),
  o = t(884338),
  c = t(592125),
  d = t(720202),
  u = t(594174),
  h = t(260483),
  m = t(314208),
  g = t(124368),
  E = t(280301);

function f(e) {
  let {
channel: n
  } = e, t = (0, l.e7)([h.Z], () => {
var e;
return null !== (e = h.Z.getMemberIdsPreview(n.id)) && void 0 !== e ? e : [];
  }), r = (0, l.e7)([h.Z], () => {
var e;
return null !== (e = h.Z.getMemberCount(n.id)) && void 0 !== e ? e : 0;
  }), i = (0, l.Wu)([u.default], () => t.map(e => u.default.getUser(e)));
  return (s.useEffect(() => {
t.filter((e, n) => null == i[n]).forEach(e => {
  d.Z.requestMember(n.guild_id, e);
});
  }, []), 0 === t.length) ? null : (0, a.jsx)(o.Z, {
className: E.facepile,
showDefaultAvatarsForNullUsers: !0,
guildId: n.guild_id,
users: i,
count: r,
max: g.yX
  });
}
n.Z = s.memo(function(e) {
  let {
threadId: n,
goToThread: s,
showChannelName: o
  } = e, d = (0, l.e7)([c.Z], () => c.Z.getChannel(n)), u = (0, l.e7)([c.Z], () => c.Z.getChannel(d.parent_id));
  return (0, a.jsxs)(r.Clickable, {
className: E.container,
onClick: e => s(d, e.shiftKey),
onContextMenu: e => (0, i.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    t.e('39285'),
    t.e('48800'),
    t.e('4985')
  ]).then(t.bind(t, 422200));
  return n => (0, a.jsx)(e, {
    ...n,
    channel: d
  });
}),
children: [
  (0, a.jsxs)('div', {
    className: E.left,
    children: [
      (0, a.jsxs)(r.Heading, {
        className: E.threadNameLine,
        variant: 'heading-md/semibold',
        children: [
          (0, a.jsx)('span', {
            className: E.threadName,
            children: d.name
          }),
          o && null != u ? (0, a.jsx)('span', {
            className: E.parentName,
            children: '#'.concat(u.name)
          }) : null
        ]
      }),
      (0, m.Z)(d)
    ]
  }),
  (0, a.jsx)(f, {
    channel: d
  })
]
  });
});