"use strict";
n.r(t), n(47120);
var i = n(920478),
  r = n(392711),
  s = n.n(r),
  o = n(462176);
i.Z.registerLanguage("ansi", o.Z), t.default = {
  highlight(e, t, n) {
    if (! function(e) {
        if (e.indexOf(a) >= 0) return !1;
        let t = 0;
        for (let n of e.split("\n")) {
          if (n.length > 1e3) return !1;
          null == n.match(/^\s*[/][/]/) && null != n.match(/[^/]/) && (t = 0);
          let e = n.match(/[/]/g);
          if (null != e && (t += e.length) > 30) return !1
        }
        return !0
      }(t)) return null;
    Date.now();
    let r = i.Z.highlight(e, t, n);
    return Date.now(), r
  },
  hasLanguage: e => null != i.Z.getLanguage(e)
};
let a = s().repeat("/", 15)