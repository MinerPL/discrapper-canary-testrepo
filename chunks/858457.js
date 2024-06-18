"use strict";
t.d(s, {
  Z: function() {
    return E
  },
  r: function() {
    return o
  }
}), t(47120), t(653041);
var n = t(470079),
  i = t(392711),
  l = t(881052),
  a = t(36459),
  r = t(689938);
let o = "_errors",
  c = "GENERIC_REGEX_ERROR";
async function d(e, s) {
  if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) {
    s([]);
    return
  }
  try {
    await (0, a.qY)(e), s([])
  } catch (a) {
    var t, n;
    let e = new l.Hx(a).errors;
    if (!("object" == typeof(t = e) && (null == t ? void 0 : null === (n = t.trigger_metadata) || void 0 === n ? void 0 : n.regex_patterns) != null)) return;
    let i = function(e) {
      var s;
      let t = null == e ? void 0 : null === (s = e.trigger_metadata) || void 0 === s ? void 0 : s.regex_patterns;
      return null == t ? [] : function(e) {
        let {
          [o]: s = [], ...t
        } = e, n = Object.entries(t).map(e => {
          var s;
          let [t, n] = e, i = n[o], {
            code: l,
            message: a
          } = null !== (s = null == i ? void 0 : i[0]) && void 0 !== s ? s : {
            code: c,
            message: r.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
          };
          return {
            pattern: t,
            message: a,
            code: l,
            description: null == n ? void 0 : n.description,
            erroringCharacterLength: null == n ? void 0 : n.erroring_character_length,
            erroringCharacterOffset: null == n ? void 0 : n.erroring_character_offset,
            regexErrorCode: null == n ? void 0 : n.regex_error_code
          }
        });
        if (s.length > 0) {
          var i, l, a, d;
          n.push({
            pattern: o,
            message: null !== (a = null === (i = s[0]) || void 0 === i ? void 0 : i.message) && void 0 !== a ? a : r.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
            code: null !== (d = null === (l = s[0]) || void 0 === l ? void 0 : l.code) && void 0 !== d ? d : c
          })
        }
        return n
      }(t)
    }(e);
    i.length > 0 && s(i)
  }
}
let u = (0, i.throttle)(d, 1e3, {
  leading: !1
});

function E(e, s) {
  var t, l;
  let [a, r] = n.useState([]), [o, c] = n.useState(null), [E, _] = n.useState(null !== (l = null == e ? void 0 : null === (t = e.triggerMetadata) || void 0 === t ? void 0 : t.regexPatterns) && void 0 !== l ? l : []), I = n.useCallback(s => {
    if (!(s.length < 3)) u({
      ...e,
      triggerMetadata: {
        ...e.triggerMetadata,
        regexPatterns: [s]
      }
    }, e => {
      var s;
      return c(null !== (s = e[0]) && void 0 !== s ? s : null)
    })
  }, [e]);
  return {
    patterns: E,
    errors: a,
    valueError: o,
    validatePatternsChanged: n.useCallback((t, n) => {
      if (!(0, i.isEqual)(t, n)) u.cancel(), d({
        ...e,
        triggerMetadata: {
          ...e.triggerMetadata,
          regexPatterns: t
        }
      }, e => {
        r(e), 0 === e.length && c(null)
      }), _(t), null == s || s(t)
    }, [e, s]),
    validateEditingValueChanged: I
  }
}