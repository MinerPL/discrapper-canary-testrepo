n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(272423);

function r(e) {
  let t = (0, i.kf)(e);
  if (null != t)
return [
  t.params.guildId,
  t.params.channelId
];
  let n = (0, i.B3)(e);
  if (null != n) {
var r, a;
return [
  null === (r = n.params) || void 0 === r ? void 0 : r.guildId,
  null === (a = n.params) || void 0 === a ? void 0 : a.channelId
];
  }
  return [
void 0,
void 0
  ];
}