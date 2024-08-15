t.d(s, {
  C: function() {
return _;
  },
  V: function() {
return d;
  }
}), t(47120);
var n = t(470079),
  a = t(392711),
  i = t.n(a),
  r = t(442837),
  o = t(271383),
  l = t(430824),
  c = t(353093);

function d() {
  return (0, r.Wu)([
l.Z,
o.ZP
  ], () => {
let e = l.Z.getGuilds();
return i()(e).values().filter(e => {
  var s;
  return (0, c.EJ)(e) && (null === (s = o.ZP.getSelfMember(e.id)) || void 0 === s ? void 0 : s.joinedAt) != null;
}).value();
  });
}

function _() {
  let e = d();
  return n.useMemo(() => new Set(e.map(e => {
let {
  id: s
} = e;
return s;
  })), [e]);
}