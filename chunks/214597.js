t.d(n, {
  Z: function() {
return s;
  }
});
var l = t(470079),
  r = t(902704),
  i = t(232567),
  a = t(720202),
  o = t(594174);

function s(e) {
  let {
entry: n,
channel: t
  } = e, s = l.useRef([]);
  return l.useEffect(() => {
if (!(0, r.E)(s.current, n.participants))
  s.current = n.participants, n.participants.filter(e => null == o.default.getUser(e)).forEach(e => {
    null == t.guild_id ? (0, i.PR)(e) : a.Z.requestMember(t.guild_id, e);
  });
  }, [
n,
t.guild_id
  ]), {};
}