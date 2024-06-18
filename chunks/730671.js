"use strict";
t.d(s, {
  Z: function() {
    return r
  }
}), t(47120);
var n = t(470079),
  i = t(392711),
  l = t(236413),
  a = t(422303);

function r(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    t = arguments.length > 2 ? arguments[2] : void 0,
    [r, o] = n.useState((0, a.se)(s)),
    {
      errorMessage: c,
      handleValidateKeywords: d
    } = function(e) {
      let [s, t] = n.useState(null), a = n.useRef(null);
      return {
        errorMessage: s,
        handleValidateKeywords: n.useCallback(() => (0, i.debounce)(s => {
          clearTimeout(a.current), a.current = setTimeout(() => {
            try {
              (0, l.km)(s, e), t(null)
            } catch (e) {
              t(e.message)
            }
            clearTimeout(a.current)
          }, 500)
        }, 300, {
          leading: !0,
          trailing: !0
        }), [e])
      }
    }(t),
    u = n.useCallback(e => 0 !== e.length && (0, a.kU)(e) ? (0, a.se)((0, a.Ac)(e)) : e, []);
  return {
    value: r,
    errorMessage: c,
    onChange: n.useCallback(s => {
      let t = s.currentTarget.value;
      "insertFromPaste" === s.nativeEvent.inputType && (t = u(t));
      let n = (0, a.Ac)(t);
      o(t), e(n), d()(n)
    }, [d, u, e])
  }
}