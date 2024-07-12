n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(272423);

function o(e) {
  let t = (0, i.kf)(e);
  if (null != t)
return [
  t.params.guildId,
  t.params.channelId
];
  let n = (0, i.B3)(e);
  if (null != n) {
var o, r;
return [
  null === (o = n.params) || void 0 === o ? void 0 : o.guildId,
  null === (r = n.params) || void 0 === r ? void 0 : r.channelId
];
  }
  return [
void 0,
void 0
  ];
}