n.r(t), n(47120);
var r = n(920478),
  i = n(392711),
  a = n.n(i),
  o = n(462176);
r.Z.registerLanguage('ansi', o.Z), t.default = {
  highlight(e, t, n) {
if (! function(e) {
    if (e.indexOf(s) >= 0)
      return !1;
    let t = 0;
    for (let n of e.split('\n')) {
      if (n.length > 1000)
        return !1;
      null == n.match(/^\s*[/][/]/) && null != n.match(/[^/]/) && (t = 0);
      let e = n.match(/[/]/g);
      if (null != e && (t += e.length) > 30)
        return !1;
    }
    return !0;
  }(t))
  return null;
Date.now();
let i = r.Z.highlight(e, t, n);
return Date.now(), i;
  },
  hasLanguage: e => null != r.Z.getLanguage(e)
};
let s = a().repeat('/', 15);