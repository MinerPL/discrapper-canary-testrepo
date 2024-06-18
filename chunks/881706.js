"use strict";
n.d(t, {
  v: function() {
    return o
  }
}), n(47120);
var i = n(729594);
let r = new Set(n(821445)),
  s = {
    "github.com": RegExp("\\/releases\\S*\\/download"),
    "bitbucket.org": RegExp("\\/downloads\\S*\\/[^\\/]*"),
    "gitlab.com": RegExp("\\/downloads\\S*\\/[^\\/]*")
  };

function o(e) {
  var t;
  let {
    pathname: n,
    hostname: o
  } = i.parse(e);
  if (null == o) return null;
  let a = s[o];
  if (null != a && null != n && !a.test(n) || null == n) return null;
  let l = n;
  try {
    l = decodeURIComponent(n)
  } catch (e) {}
  let u = l.split("/"),
    _ = null,
    d = 0;
  for (let e = u.length - 1; e >= 0; e--) {
    let t = u[e];
    if ("" !== t && "." !== t) {
      if (".." === t) {
        d++;
        continue
      }
      if (d > e) break;
      _ = u[e - d];
      break
    }
  }
  if (null == _) return null;
  let c = _.split(".");
  if (c.length < 2) return null;
  let E = null === (t = c.pop()) || void 0 === t ? void 0 : t.toLowerCase();
  return null != E && r.has(E) ? E : null
}