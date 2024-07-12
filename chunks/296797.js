n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(470079),
  a = n(592125),
  l = n(944486),
  s = n(585483),
  r = n(917107),
  o = n(89425),
  c = n(197386),
  d = n(981631);

function u(e) {
  let {
onTransition: t
  } = e;
  i.useEffect(() => {
async function e(e) {
  let {
    channelId: n
  } = e;
  if (!(0, r.Z)(n))
    return;
  l.Z.getVoiceChannelId() !== n && await (0, o.Z)({
    channelId: n
  });
  let i = a.Z.getChannel(n),
    s = null == i ? void 0 : i.guild_id;
  setTimeout(() => {
    (0, c.Z)(s, n), null == t || t();
  }, 0);
}
return s.S.subscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e), () => {
  s.S.unsubscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e);
};
  }, [t]);
}