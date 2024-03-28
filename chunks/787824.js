"use strict";
n.r(t), n.d(t, {
  _transformMetadataToCamelCase: function() {
    return function e(t) {
      return null == t ? t : Object.keys(t).reduce((n, u) => {
        let r = (0, o.camelCase)(u);
        return "object" != typeof t[u] || Array.isArray(t[u]) ? n[r] = t[u] : n[r] = e(t[u]), n
      }, {})
    }
  },
  _transformMetadataToSnakeCase: function() {
    return function e(t) {
      return null == t ? t : Object.keys(t).reduce((n, u) => {
        let r = (0, o.snakeCase)(u);
        return "object" != typeof t[u] || Array.isArray(t[u]) ? n[r] = t[u] : n[r] = e(t[u]), n[r] = t[u], n
      }, {})
    }
  }
}), n("724458");
var o = n("392711")