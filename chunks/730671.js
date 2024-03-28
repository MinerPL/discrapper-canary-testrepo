"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("47120");
var a = s("470079"),
  l = s("392711"),
  n = s("236413"),
  i = s("422303");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    s = arguments.length > 2 ? arguments[2] : void 0,
    [r, o] = a.useState((0, i.getKeywordStringFromKeywordFilter)(t)),
    {
      errorMessage: d,
      handleValidateKeywords: u
    } = function(e) {
      let [t, s] = a.useState(null), i = a.useRef(null);
      return {
        errorMessage: t,
        handleValidateKeywords: a.useCallback(() => (0, l.debounce)(t => {
          clearTimeout(i.current), i.current = setTimeout(() => {
            try {
              (0, n.validateKeywordsOrThrow)(t, e), s(null)
            } catch (e) {
              s(e.message)
            }
            clearTimeout(i.current)
          }, 500)
        }, 300, {
          leading: !0,
          trailing: !0
        }), [e])
      }
    }(s),
    c = a.useCallback(e => 0 !== e.length && (0, i.isKeywordParseableString)(e) ? (0, i.getKeywordStringFromKeywordFilter)((0, i.getKeywordsFromString)(e)) : e, []);
  return {
    value: r,
    errorMessage: d,
    onChange: a.useCallback(t => {
      let s = t.currentTarget.value;
      "insertFromPaste" === t.nativeEvent.inputType && (s = c(s));
      let a = (0, i.getKeywordsFromString)(s);
      o(s), e(a), u()(a)
    }, [u, c, e])
  }
}