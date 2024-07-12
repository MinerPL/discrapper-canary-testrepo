n.d(t, {
  Z: function() {
return m;
  }
}), n(47120), n(653041);
var i = n(470079),
  a = n(149765),
  l = n(442837),
  s = n(902704),
  r = n(592125),
  o = n(720202),
  c = n(271383),
  d = n(700785),
  u = n(231338);
let h = [],
  p = new Set();

function m(e) {
  let {
entries: t,
channelId: n
  } = e, m = (0, l.e7)([r.Z], () => r.Z.getChannel(n)), _ = null == m ? void 0 : m.guild_id, f = i.useRef(new Set()), E = i.useMemo(() => {
let e = new Set(null == t ? void 0 : t.map(e => e.author_id));
return !(0, s.E)([...f.current], [...e]) && (f.current = e), f.current;
  }, [t]);
  i.useEffect(() => {
if (null != _)
  Array.from(E).forEach(e => {
    o.Z.requestMember(_, e);
  });
  }, [
E,
_
  ]);
  let C = (0, l.Wu)([c.ZP], () => {
  if (null == _)
    return h;
  let e = [];
  for (let t of E)
    c.ZP.isMember(_, t) && e.push(t);
  return e;
}, [
  E,
  _
]),
g = i.useMemo(() => {
  if (null == m || 0 === C.length)
    return p;
  let e = new Set();
  for (let t of C) {
    let n = d.uB({
      user: t,
      context: m
    });
    a.e$(n, u.Pl.VIEW_CHANNEL) && e.add(t);
  }
  return e;
}, [
  C,
  m
]);
  return i.useMemo(() => null == t ? void 0 : t.filter(e => g.has(e.author_id)), [
t,
g
  ]);
}