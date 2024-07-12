n.d(t, {
  Z: function() {
return l;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(470079),
  s = n(143927),
  a = n(836768),
  r = n(49898);

function l() {
  let e = (0, a.d)(e => e.selectedPage, s.Z),
t = a.d.getState().setSelectedPage;
  return i.useEffect(() => {
t(function(e) {
  switch (e) {
    case '/discovery':
    default:
      return r.SM.SERVERS;
    case '/discovery/quests':
      return r.SM.QUESTS;
  }
}(new URL(window.location.href).pathname));
  }, [t]), e;
}