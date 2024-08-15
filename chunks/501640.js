n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(149765),
  a = n(442837),
  s = n(984933),
  r = n(496675),
  l = n(981631);

function o(e) {
  let t = (0, a.e7)([s.ZP], () => {
var t;
return null !== (t = s.ZP.getChannels(e)[s.sH]) && void 0 !== t ? t : [];
  }, [e]);
  return 0 === t.length ? 0 : t.filter(e => {
let {
  channel: t
} = e;
return r.Z.can(i.$e(l.Plq.SEND_MESSAGES, l.Plq.VIEW_CHANNEL), t);
  }).length;
}