"use strict";
var n = r(533019);

function i(e) {
  var t = {};
  for (var r in e) t[0 === r.indexOf("--") ? r : (0, n.Z)(r)] = e[r];
  return e.fallbacks && (Array.isArray(e.fallbacks) ? t.fallbacks = e.fallbacks.map(i) : t.fallbacks = i(e.fallbacks)), t
}
t.Z = function() {
  return {
    onProcessStyle: function(e) {
      if (Array.isArray(e)) {
        for (var t = 0; t < e.length; t++) e[t] = i(e[t]);
        return e
      }
      return i(e)
    },
    onChangeValue: function(e, t, r) {
      if (0 === t.indexOf("--")) return e;
      var i = (0, n.Z)(t);
      return t === i ? e : (r.prop(i, e), null)
    }
  }
}