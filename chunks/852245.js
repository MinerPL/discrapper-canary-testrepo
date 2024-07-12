a.d(e, {
  Z: function() {
return o;
  }
});
var t = a(735250);
a(470079);
var l = a(442837),
  u = a(481060),
  r = a(787014),
  c = a(496675),
  s = a(981631),
  i = a(689938);

function o(n) {
  let {
canManageChannels: e,
canManageRoles: a,
canManageWebhooks: o,
canAccessChannel: E
  } = (0, l.cj)([c.Z], () => ({
canManageChannels: c.Z.can(s.Plq.MANAGE_CHANNELS, n),
canManageRoles: c.Z.can(s.Plq.MANAGE_ROLES, n),
canManageWebhooks: c.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
canAccessChannel: c.Z.can(n.accessPermissions, n)
  }), [n]);
  return !__OVERLAY__ && E && (e || a || o) ? (0, t.jsx)(u.MenuItem, {
id: 'edit-channel',
label: n.type === s.d4z.GUILD_CATEGORY ? i.Z.Messages.EDIT_CATEGORY : i.Z.Messages.EDIT_CHANNEL,
action: () => r.ZP.open(n.id)
  }) : null;
}