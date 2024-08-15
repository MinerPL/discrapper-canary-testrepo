a.d(n, {
  Z: function() {
return s;
  }
});
var t = a(735250);
a(470079);
var l = a(442837),
  r = a(481060),
  u = a(496675),
  c = a(981631),
  i = a(689938);

function s(e, n) {
  let s = (0, l.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
  return __OVERLAY__ || !s ? null : (0, t.jsx)(r.MenuItem, {
id: 'clone-channel',
label: i.Z.Messages.CLONE_CHANNEL,
action: () => (0, r.openModalLazy)(async () => {
  let {
    default: l
  } = await Promise.all([
    a.e('7590'),
    a.e('45094'),
    a.e('1379')
  ]).then(a.bind(a, 218613));
  return a => (0, t.jsx)(l, {
    ...a,
    channelType: e.type,
    guildId: n.id,
    categoryId: e.parent_id,
    cloneChannelId: e.id
  });
})
  });
}