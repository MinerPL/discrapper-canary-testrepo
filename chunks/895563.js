i.d(e, {
  P: function() {
return p;
  },
  l: function() {
return _;
  }
}), i(47120);
var t = i(735250);
i(470079);
var r = i(392711),
  a = i.n(r),
  l = i(442837),
  u = i(481060),
  s = i(984933),
  o = i(853856),
  d = i(117984),
  c = i(593214),
  Z = i(362658),
  h = i(981631),
  M = i(689938);

function f(n, e) {
  return n.type === h.d4z.GROUP_DM ? e ? M.Z.Messages.UNFAVORITE_GDM : M.Z.Messages.FAVORITE_GDM : n.type === h.d4z.DM ? e ? M.Z.Messages.UNFAVORITE_DM : M.Z.Messages.FAVORITE_DM : e ? M.Z.Messages.UNFAVORITE_CHANNEL : M.Z.Messages.FAVORITE_CHANNEL;
}

function _(n) {
  let e = (0, l.e7)([s.ZP], () => s.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
{
  isFavoritesPerk: i
} = (0, Z.z)('58e21a_1'),
{
  notifyFavoriteAdded: r
} = (0, c.up)();
  if (!(0, c.li)(n))
return null;
  let [
[o], M
  ] = a().partition(e, n => 'null' === n.channel.id);

  function _(e) {
r(), (0, d.kj)(n.id, e);
  }
  return 0 === M.length ? (0, t.jsx)(u.MenuItem, {
id: 'favorite-channel',
label: f(n, !1),
action: () => _(null)
  }) : (0, t.jsxs)(u.MenuItem, {
id: 'favorite-channel',
label: f(n, !1),
action: () => _(null),
children: [
  i && (0, t.jsx)(u.MenuGroup, {
    children: (0, t.jsx)(u.MenuItem, {
      id: 'favorite-'.concat(o.channel.id),
      label: o.channel.name,
      action: () => _('null' === o.channel.id ? null : o.channel.id)
    }, o.channel.id)
  }),
  (0, t.jsx)(u.MenuGroup, {
    children: M.map(n => (0, t.jsx)(u.MenuItem, {
      id: 'favorite-'.concat(n.channel.id),
      label: n.channel.name,
      action: () => _(n.channel.id)
    }, n.channel.id))
  })
]
  });
}

function p(n) {
  let e = (0, l.e7)([o.Z], () => o.Z.isFavorite(n.id));
  return __OVERLAY__ || !e ? null : (0, t.jsx)(u.MenuItem, {
id: 'favorite-channel',
label: f(n, !0),
color: 'danger',
action: () => n.type === h.d4z.GUILD_CATEGORY ? (0, u.openModalLazy)(async () => {
  let {
    default: e
  } = await i.e('37720').then(i.bind(i, 357632));
  return i => (0, t.jsx)(e, {
    ...i,
    onConfirm: () => {
      i.onClose(), (0, d.oC)(n.id);
    },
    channel: n
  });
}) : (0, d.oC)(n.id)
  });
}