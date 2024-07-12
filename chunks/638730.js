n.d(t, {
  T: function() {
return s;
  },
  h: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  a = n(392711);
let l = e => e,
  s = function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
  a = arguments.length > 3 ? arguments[3] : void 0,
  s = r(l, t, n, a),
  o = i.useRef(e);
return i.useEffect(() => {
  let t = s(e);
  o.current = t;
}, [
  e,
  s
]), 0 === t ? e : o.current;
  },
  r = function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
  l = arguments.length > 3 ? arguments[3] : void 0,
  s = i.useRef((0, a.throttle)(e, t, l));
return i.useEffect(() => (s.current = (0, a.throttle)(e, t, l), () => {
  var e;
  null === (e = s.current) || void 0 === e || e.cancel();
}), [
  e,
  t,
  l,
  ...n
]), s.current;
  };