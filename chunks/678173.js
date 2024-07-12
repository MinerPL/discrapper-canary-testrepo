a.d(n, {
  T: function() {
return l;
  }
});
var i = a(470079),
  t = a(127255);

function l(e, n, a) {
  let l = (0, t.Z)({
guildId: e,
channel: a
  });
  return i.useMemo(() => {
var e;
return null !== (e = l.find(e => e.application.id === n)) && void 0 !== e ? e : null;
  }, [
l,
n
  ]);
}