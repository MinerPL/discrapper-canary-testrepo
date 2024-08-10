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
  r = t(854444),
  E = t(131704),
  a = t(680089),
  u = t(888369),
  s = t(944486),
  d = t(981631),
  _ = t(647086);

function c(e) {
  let {
withVoiceChannels: n = !1,
withCurrentVoiceChannel: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
  return I(e === _._ || e === d.I_8 ? (0, r.t)() : o.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
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
withCurrentVoiceChannel: r = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, E = arguments.length > 4 ? arguments[4] : void 0, d = (0, l.e7)([u.default], () => u.default.getGuildChangeSentinel(e)), _ = (0, l.e7)([a.Z], () => a.Z.version), {
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
withCurrentVoiceChannel: r
  }, E).map(e => e.id), [
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
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0, a = [];
  return e.forEachShownChannel(e => {
((0, E.r8)(e.type) || l && (0, E.bw)(e.type) || o && (e.id === t || e.id === i)) && a.push(e);
  }, r), a;
}