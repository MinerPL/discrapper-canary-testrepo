n.d(t, {
  Z: function() {
return a;
  }
}), n(47120);
var r = n(470079),
  i = n(399606);

function a(e, t) {
  let {
get: n,
getIsLoading: a,
load: o
  } = t;
  return function() {
for (var t = arguments.length, s = Array(t), l = 0; l < t; l++)
  s[l] = arguments[l];
let u = (0, i.e7)([e], () => n(...s), s),
  c = (0, i.e7)([e], () => a(...s), s),
  [d, _] = (0, r.useState)();
return (0, r.useEffect)(() => {
  if (a(...s) || null != n(...s))
    return;
  let e = new AbortController();
  return o(e.signal, ...s).catch(_), () => e.abort();
}, s), {
  data: u,
  error: d,
  isLoading: c
};
  };
}