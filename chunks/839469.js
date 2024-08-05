s.d(t, {
  E: function() {
return l;
  }
}), s(47120);
var n = s(470079),
  a = s(170401),
  i = s(996733),
  r = s(394644),
  o = s(726985);

function l() {
  let e = (0, i.Z7)(),
t = (0, r.Pt)(),
s = n.useRef(new a.Z((0, r.ji)(t))),
[l, c] = n.useState(!1),
[d, _] = n.useState(o.QF),
E = n.useCallback(async e => {
  _(await s.current.search(e.trim())), c(!0);
}, []);
  return n.useEffect(() => {
'' === e || e.length < 2 ? (_(o.QF), c(!1)) : E(e);
  }, [
e,
E
  ]), {
hasSearchResults: l,
searchResults: d
  };
}