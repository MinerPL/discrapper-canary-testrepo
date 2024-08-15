n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(392711),
  a = n.n(r),
  s = n(442837),
  o = n(481060),
  c = n(99690),
  u = n(359110),
  d = n(601070),
  h = n(91159),
  p = n(488131),
  _ = n(496675),
  f = n(306680),
  g = n(594174),
  m = n(768581),
  C = n(709054),
  I = n(981631),
  E = n(124368),
  N = n(689938),
  x = n(535884);

function S(e) {
  let {
channel: t
  } = e, r = (0, s.Wu)([
d.Z,
f.ZP,
_.Z
  ], () => {
let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
return a()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(a().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && _.Z.can(I.Plq.VIEW_CHANNEL, t)).sort((e, t) => {
  let n = f.ZP.lastMessageId(e.id),
    i = f.ZP.lastMessageId(t.id);
  return C.default.compare(n, i);
}).reverse().value();
  }), c = t.isForumLikeChannel() ? 5 : 3;
  return l.useEffect(() => {
(0, h.q)();
  }, []), (0, i.jsxs)('div', {
className: x.popout,
children: [
  (0, i.jsx)(o.Text, {
    className: x.title,
    variant: 'text-xs/bold',
    color: 'header-secondary',
    children: t.isForumLikeChannel() ? N.Z.Messages.ACTIVE_THREADS_POPOUT_HEADER_FORUM : N.Z.Messages.ACTIVE_THREADS_POPOUT_HEADER
  }),
  r.slice(0, t.isForumLikeChannel() ? r.length : c).map(e => (0, i.jsx)(Z, {
    thread: e
  }, e.id)).filter(e => l.isValidElement(e)).slice(0, c),
  (0, i.jsx)(o.Clickable, {
    className: x.more,
    onClick: () => {
      t.isForumLikeChannel() ? (0, u.Kh)(t.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e('36970').then(n.bind(n, 223901));
        return n => (0, i.jsx)(e, {
          channel: t,
          ...n
        });
      });
    },
    children: (0, i.jsx)(o.Text, {
      variant: 'text-sm/normal',
      color: 'none',
      children: N.Z.Messages.ACTIVE_THREADS_POPOUT_LINK
    })
  })
]
  });
}

function Z(e) {
  let {
thread: t
  } = e, n = (0, s.e7)([g.default], () => g.default.getUser(t.ownerId)), l = (0, h.Ok)(t);
  return (0, i.jsxs)(o.Clickable, {
className: x.row,
onClick: e => {
  (0, p.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, E.on.POPOUT);
},
children: [
  null == n ? (0, i.jsx)('img', {
    className: x.avatar,
    src: m.ZP.getDefaultAvatarURL(void 0, void 0),
    alt: ''
  }) : (0, i.jsx)(c.Z, {
    className: x.avatar,
    user: n,
    size: o.AvatarSizes.SIZE_16
  }),
  (0, i.jsx)(o.Text, {
    className: x.name,
    variant: 'text-sm/normal',
    color: 'none',
    children: t.name
  }),
  (0, i.jsxs)(o.Text, {
    className: x.timestamp,
    variant: 'text-sm/normal',
    color: 'none',
    children: [
      (0, i.jsx)('span', {
        className: x.bullet,
        children: '\u2022'
      }),
      (0, h.Ye)(l)
    ]
  })
]
  });
}