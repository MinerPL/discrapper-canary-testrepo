n.d(t, {
  Z: function() {
return p;
  }
}), n(47120), n(653041);
var i = n(470079),
  a = n(149765),
  s = n(442837),
  l = n(902704),
  r = n(592125),
  o = n(720202),
  c = n(271383),
  u = n(700785),
  d = n(231338);
let h = [],
  m = new Set();

function p(e) {
  let {
entries: t,
channelId: n
  } = e, p = (0, s.e7)([r.Z], () => r.Z.getChannel(n)), _ = null == p ? void 0 : p.guild_id, f = i.useRef(new Set()), E = i.useMemo(() => {
let e = new Set(null == t ? void 0 : t.map(e => e.author_id));
return !(0, l.E)([...f.current], [...e]) && (f.current = e), f.current;
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
  let g = (0, s.Wu)([c.ZP], () => {
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
C = i.useMemo(() => {
  if (null == p || 0 === g.length)
    return m;
  let e = new Set();
  for (let t of g) {
    let n = u.uB({
      user: t,
      context: p
    });
    a.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t);
  }
  return e;
}, [
  g,
  p
]);
  return i.useMemo(() => null == t ? void 0 : t.filter(e => C.has(e.author_id)), [
t,
C
  ]);
}