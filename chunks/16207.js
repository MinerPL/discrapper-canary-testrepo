"use strict";
s.r(t), s.d(t, {
  SCHEMA_ERROR_KEY: function() {
    return o
  },
  default: function() {
    return E
  }
}), s("222007"), s("424973");
var a = s("884691"),
  l = s("917351"),
  n = s("448993"),
  i = s("702873"),
  r = s("782340");
let o = "_errors",
  d = "GENERIC_REGEX_ERROR";
async function u(e, t) {
  if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) {
    t([]);
    return
  }
  try {
    await (0, i.validateAutomodRule)(e), t([])
  } catch (u) {
    var s, a;
    let e = new n.APIError(u),
      l = e.errors;
    if (!("object" == typeof(s = l) && (null == s ? void 0 : null === (a = s.trigger_metadata) || void 0 === a ? void 0 : a.regex_patterns) != null)) return;
    let i = function(e) {
      var t;
      let s = null == e ? void 0 : null === (t = e.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns;
      return null == s ? [] : function(e) {
        let {
          [o]: t = [], ...s
        } = e, a = Object.entries(s).map(e => {
          var t;
          let [s, a] = e, l = a[o], {
            code: n,
            message: i
          } = null !== (t = null == l ? void 0 : l[0]) && void 0 !== t ? t : {
            code: d,
            message: r.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
          };
          return {
            pattern: s,
            message: i,
            code: n,
            description: null == a ? void 0 : a.description,
            erroringCharacterLength: null == a ? void 0 : a.erroring_character_length,
            erroringCharacterOffset: null == a ? void 0 : a.erroring_character_offset,
            regexErrorCode: null == a ? void 0 : a.regex_error_code
          }
        });
        if (t.length > 0) {
          var l, n, i, u;
          a.push({
            pattern: o,
            message: null !== (i = null === (l = t[0]) || void 0 === l ? void 0 : l.message) && void 0 !== i ? i : r.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
            code: null !== (u = null === (n = t[0]) || void 0 === n ? void 0 : n.code) && void 0 !== u ? u : d
          })
        }
        return a
      }(s)
    }(l);
    i.length > 0 && t(i)
  }
}
let c = (0, l.throttle)(u, 1e3, {
  leading: !1
});

function E(e, t) {
  var s, n;
  let [i, r] = a.useState([]), [o, d] = a.useState(null), [E, _] = a.useState(null !== (n = null == e ? void 0 : null === (s = e.triggerMetadata) || void 0 === s ? void 0 : s.regexPatterns) && void 0 !== n ? n : []), I = a.useCallback(t => {
    !(t.length < 3) && c({
      ...e,
      triggerMetadata: {
        ...e.triggerMetadata,
        regexPatterns: [t]
      }
    }, e => {
      var t;
      return d(null !== (t = e[0]) && void 0 !== t ? t : null)
    })
  }, [e]), T = a.useCallback((s, a) => {
    !(0, l.isEqual)(s, a) && (c.cancel(), u({
      ...e,
      triggerMetadata: {
        ...e.triggerMetadata,
        regexPatterns: s
      }
    }, e => {
      r(e), 0 === e.length && d(null)
    }), _(s), null == t || t(s))
  }, [e, t]);
  return {
    patterns: E,
    errors: i,
    valueError: o,
    validatePatternsChanged: T,
    validateEditingValueChanged: I
  }
}