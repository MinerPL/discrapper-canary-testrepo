"use strict";
t.r(n), t.d(n, {
  default: function() {
    return u
  }
}), t("222007");
var a = t("436443"),
  r = t("917351"),
  l = t.n(r),
  i = t("347647");
a.default.registerLanguage("ansi", i.default);
var u = {
  highlight(e, n, t) {
    if (! function(e) {
        if (e.indexOf(c) >= 0) return !1;
        let n = 0,
          t = e.split("\n");
        for (let e of t) {
          if (e.length > 1e3) return !1;
          null == e.match(/^\s*[/][/]/) && null != e.match(/[^/]/) && (n = 0);
          let t = e.match(/[/]/g);
          if (null != t && (n += t.length) > 30) return !1
        }
        return !0
      }(n)) return null;
    Date.now();
    let r = a.default.highlight(e, n, t);
    return Date.now(), r
  },
  hasLanguage: e => null != a.default.getLanguage(e)
};
let c = l.repeat("/", 15)