n.d(t, {
  Z: function() {
return i;
  }
}), n(47120);
var l = n(470079),
  a = n(77866),
  s = n(212819);

function i(e) {
  let {
searchOptions: t
  } = e, [n, i] = l.useState({
results: [],
query: ''
  }), r = (0, a.Z)(() => {
let e = new s.ZP((e, t) => {
  i({
    results: e,
    query: t
  });
});
return e.setLimit(20), e.search(''), e;
  });
  return l.useEffect(() => () => r.destroy(), [r]), l.useEffect(() => {
null != t && t !== r.options && r.setOptions(t);
  }, [
r,
t
  ]), {
search: l.useCallback(e => {
  var t, n;
  let {
    query: l,
    resultTypes: a
  } = e;
  if (null == r.resultTypes || (t = a, n = r.resultTypes, !(t.length === n.size && t.every(e => n.has(e)))))
    r.setResultTypes(a), r.setLimit(1 === a.length ? 50 : 20);
  r.search('' === l.trim() ? '' : l);
}, [r]),
...n
  };
}