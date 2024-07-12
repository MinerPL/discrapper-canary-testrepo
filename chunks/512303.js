t.d(n, {
  Z: function() {
return M;
  }
});
var i = t(735250);
t(470079);
var a = t(373793),
  r = t(481060),
  l = t(700582),
  o = t(592180),
  s = t(430824),
  u = t(594174),
  c = t(346656),
  d = t(689938),
  E = t(938639);

function M(e) {
  var n, t, M;
  if (!(0, o.a)(e))
return null;
  let I = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[a.Y.USER_INSTALL],
m = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[a.Y.GUILD_INSTALL],
_ = u.default.getUser(I),
g = s.Z.getGuild(m),
f = u.default.getUser(null === (M = e.interactionMetadata) || void 0 === M ? void 0 : M.user.id),
Z = null;
  return null != g ? Z = (0, i.jsx)(r.MenuItem, {
className: E.interactionInfoMenuItem,
disabled: !0,
icon: () => (0, i.jsx)(c.Z, {
  guild: g,
  size: c.Z.Sizes.MINI
}),
id: 'integration-owner',
label: g.name,
showIconFirst: !0,
subtext: d.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({
  application: e.author.username
})
  }) : null != _ && (Z = (0, i.jsx)(r.MenuItem, {
className: E.interactionInfoMenuItem,
disabled: !0,
icon: () => (0, i.jsx)(l.Z, {
  user: _,
  size: r.AvatarSizes.SIZE_20
}),
id: 'integration-owner',
label: _.username,
showIconFirst: !0,
subtext: d.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({
  application: e.author.username
})
  })), (0, i.jsxs)(r.MenuItem, {
id: 'view-interaction-info',
label: d.Z.Messages.VIEW_INTERACTION_INFO,
children: [
  Z,
  null != f ? (0, i.jsx)(r.MenuItem, {
    className: E.interactionInfoMenuItem,
    disabled: !0,
    icon: () => (0, i.jsx)(l.Z, {
      user: f,
      size: r.AvatarSizes.SIZE_20
    }),
    id: 'interaction-user',
    label: f.username,
    showIconFirst: !0,
    subtext: d.Z.Messages.INTERACTION_RESPONSE_CONTEXT_TRIGGERED_BY
  }) : null
]
  });
}