"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var n = l("735250");
l("470079");
var r = l("803997"),
  i = l.n(r),
  s = l("729594"),
  a = l("351233");
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function d(e) {
  let t = null,
    l = null,
    n = null;
  try {
    t = (n = s.parse(e, !0)).host, l = n.pathname
  } catch (e) {
    return null
  }
  return null != n && o.test(null != t ? t : "") && null != l ? n : null
}

function u(e) {
  let {
    className: t,
    embed: {
      url: l,
      thumbnail: r
    }
  } = e;
  if (null == l || null == r) return null;
  let s = d(l);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == d(o)) return null;
  let {
    width: u,
    height: c
  } = r, m = u, h = c;
  return (u > 500 || c > 400) && (u > c ? (m = 500, h = 500 * c / u) : (m = 400 * u / c, h = 400)), (0, n.jsx)("iframe", {
    className: i()(a.embedAmazonMusic, t),
    src: o,
    style: {
      width: m,
      height: h
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}