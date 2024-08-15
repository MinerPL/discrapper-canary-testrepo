n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var s = n(470079),
  a = n(392711),
  i = n(236413),
  r = n(422303);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
n = arguments.length > 2 ? arguments[2] : void 0,
[l, o] = s.useState((0, r.se)(t)),
{
  errorMessage: c,
  handleValidateKeywords: d
} = function(e) {
  let [t, n] = s.useState(null), r = s.useRef(null);
  return {
    errorMessage: t,
    handleValidateKeywords: s.useCallback(() => (0, a.debounce)(t => {
      clearTimeout(r.current), r.current = setTimeout(() => {
        try {
          (0, i.km)(t, e), n(null);
        } catch (e) {
          n(e.message);
        }
        clearTimeout(r.current);
      }, 500);
    }, 300, {
      leading: !0,
      trailing: !0
    }), [e])
  };
}(n),
u = s.useCallback(e => 0 !== e.length && (0, r.kU)(e) ? (0, r.se)((0, r.Ac)(e)) : e, []);
  return {
value: l,
errorMessage: c,
onChange: s.useCallback(t => {
  let n = t.currentTarget.value;
  'insertFromPaste' === t.nativeEvent.inputType && (n = u(n));
  let s = (0, r.Ac)(n);
  o(n), e(s), d()(s);
}, [
  d,
  u,
  e
])
  };
}