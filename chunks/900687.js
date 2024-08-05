i.d(s, {
  Z: function() {
return a;
  }
});
var n = i(735250);
i(470079);
var l = i(705556),
  t = i(225714),
  o = i(984904);

function a(e) {
  let {
user: s,
isCurrentUser: i,
guildId: a,
friendToken: r,
relationshipType: d,
persistentCallCtaEnabled: c = !1,
activeInviteToCallCtaEnabled: u = !1,
onClose: I
  } = e;
  return (0, n.jsxs)('div', {
className: o.buttons,
children: [
  (0, n.jsx)(t.Z, {
    user: s,
    isCurrentUser: i,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: r,
    onClose: I
  }),
  (0, n.jsx)(l.Z, {
    user: s,
    guildId: a,
    onClose: I
  })
]
  });
}