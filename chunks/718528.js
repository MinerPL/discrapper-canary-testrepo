t.d(n, {
  T: function() {
return C;
  },
  Z: function() {
return c;
  }
}), t(653041);
var i = t(470079),
  l = t(442837),
  o = t(734307),
  E = t(854444),
  r = t(131704),
  u = t(680089),
  a = t(888369),
  s = t(944486),
  d = t(981631),
  _ = t(647086);

function c(e) {
  let {
withVoiceChannels: n = !1,
withCurrentVoiceChannel: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
  return I(e === _._ || e === d.I_8 ? (0, E.t)() : o.Z.getGuildWithoutChangingCommunityRows(e).guildChannels, {
currentVoiceChannelId: s.Z.getVoiceChannelId(),
selectedChannelId: s.Z.getChannelId()
  }, {
withVoiceChannels: n,
withCurrentVoiceChannel: t
  }, i);
}

function C(e, n, t) {
  let {
withVoiceChannels: o = !1,
withCurrentVoiceChannel: E = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r = arguments.length > 4 ? arguments[4] : void 0, d = (0, l.e7)([a.default], () => a.default.getGuildChangeSentinel(e)), _ = (0, l.e7)([u.Z], () => u.Z.version), {
currentVoiceChannelId: c,
selectedChannelId: C
  } = (0, l.cj)([s.Z], () => ({
currentVoiceChannelId: s.Z.getVoiceChannelId(),
selectedChannelId: s.Z.getChannelId()
  }));
  return (0, i.useMemo)(() => I(n, {
currentVoiceChannelId: c,
selectedChannelId: C
  }, {
withVoiceChannels: o,
withCurrentVoiceChannel: E
  }, r).map(e => e.id), [
n,
t,
d,
_
  ]);
}

function I(e, n) {
  let {
currentVoiceChannelId: t,
selectedChannelId: i
  } = n, {
withVoiceChannels: l,
withCurrentVoiceChannel: o
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, E = arguments.length > 3 ? arguments[3] : void 0, u = [];
  return e.forEachShownChannel(e => {
((0, r.r8)(e.type) || l && (0, r.bw)(e.type) || o && (e.id === t || e.id === i)) && u.push(e);
  }, E), u;
}