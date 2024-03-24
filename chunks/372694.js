"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("37983");
l("884691");
var r = l("414456"),
  i = l.n(r),
  s = l("746379"),
  a = l.n(s),
  o = l("649809");
let d = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function u(e) {
  let t = null,
    l = null,
    n = null;
  try {
    t = (n = a.parse(e, !0)).host, l = n.pathname
  } catch (e) {
    return null
  }
  return null != n && d.test(null != t ? t : "") && null != l ? n : null
}

function c(e) {
  let {
    className: t,
    embed: {
      url: l,
      thumbnail: r
    }
  } = e;
  if (null == l || null == r) return null;
  let s = u(l);
  if (null == s) return null;
  let a = s.query.iframe_url;
  if (null == a || Array.isArray(a) || null == u(a)) return null;
  let {
    width: d,
    height: c
  } = r, m = d, h = c;
  return (d > 500 || c > 400) && (d > c ? (m = 500, h = 500 * c / d) : (m = 400 * d / c, h = 400)), (0, n.jsx)("iframe", {
    className: i(o.embedAmazonMusic, t),
    src: a,
    style: {
      width: m,
      height: h
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}