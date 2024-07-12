n.d(t, {
  Z: function() {
return i;
  }
});
var r = n(470079);

function i() {
  let e = r.useRef(null);
  return null === e.current && (e.current = new AbortController()), r.useEffect(() => () => {
var t;
null === (t = e.current) || void 0 === t || t.abort();
  }, []), e.current.signal;
}