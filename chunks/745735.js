t.d(n, {
  Z: function() {
return l;
  }
});
var r = t(470079),
  i = t(512722),
  o = t.n(i);

function l(e, n) {
  let t = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
t.current = e;
  }, [e]), (0, r.useEffect)(() => {
if (null === n)
  return;
let e = setInterval(function() {
  o()(null != t.current, 'Missing callback'), t.current();
}, n);
return () => clearInterval(e);
  }, [n]);
}