t.d(n, {
  Z: function() {
return o;
  }
});
var a = t(735250);
t(470079);
var i = t(442837),
  s = t(481060),
  r = t(914010),
  l = t(362658),
  u = t(981631),
  d = t(689938);

function o(e) {
  let n = (0, i.e7)([r.Z], () => r.Z.getGuildId()),
o = e.type === u.d4z.GUILD_CATEGORY,
{
  isFavoritesPerk: c
} = (0, l.z)('useCategoryAddChannelItem');
  return !__OVERLAY__ && n === u.I_8 && c && o ? (0, a.jsx)(s.MenuItem, {
id: 'add-channel-to-category',
icon: s.CirclePlusIcon,
color: 'brand',
label: d.Z.Messages.FAVORITES_ADD_A_CHANNEL,
action: function() {
  (0, s.openModalLazy)(async () => {
    let {
      default: n
    } = await t.e('95257').then(t.bind(t, 178125));
    return t => (0, a.jsx)(n, {
      ...t,
      parentId: e.id
    });
  });
}
  }) : null;
}