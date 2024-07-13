n.d(t, {
  Z: function() {
return a;
  }
});
var i = n(272423),
  r = n(378788);

function a(e) {
  let t = (0, i.kf)(e);
  if (null != t)
return [
  t.params.guildId,
  t.params.channelId
];
  if ((0, r.z)())
return [
  void 0,
  void 0
];
  let n = (0, i.B3)(e);
  if (null != n) {
var a, o;
return [
  null === (a = n.params) || void 0 === a ? void 0 : a.guildId,
  null === (o = n.params) || void 0 === o ? void 0 : o.channelId
];
  }
  return [
void 0,
void 0
  ];
}