n.d(t, {
  Z: function() {
return s;
  }
});
var i = n(44136),
  a = n(354459);

function s(e, t) {
  var n, s;
  let l = null,
r = null,
o = null,
c = !1,
u = !1;
  switch (e.type) {
case a.fO.ACTIVITY:
  break;
case a.fO.USER:
  l = e.streamId, o = e.voiceState, c = e.speaking, u = e.ringing;
  break;
case a.fO.STREAM:
  l = e.streamId, r = e.stream;
  }
  return {
streamId: l,
stream: r,
speaking: c,
ringing: u,
muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
deafen: null !== (s = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== s && s,
mirror: e.type === a.fO.USER && e.user.id === t,
hasVideo: (0, i.ZP)(e)
  };
}