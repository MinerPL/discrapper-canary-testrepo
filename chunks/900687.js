n.d(s, {
  Z: function() {
return a;
  }
});
var i = n(735250);
n(470079);
var t = n(705556),
  l = n(225714),
  o = n(612309);

function a(e) {
  let {
user: s,
isCurrentUser: n,
guildId: a,
friendToken: r,
relationshipType: d,
persistentCallCtaEnabled: c = !1,
activeInviteToCallCtaEnabled: u = !1,
onClose: _
  } = e;
  return (0, i.jsxs)('div', {
className: o.buttons,
children: [
  (0, i.jsx)(l.Z, {
    user: s,
    isCurrentUser: n,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: r,
    onClose: _
  }),
  (0, i.jsx)(t.Z, {
    user: s,
    guildId: a,
    onClose: _
  })
]
  });
}