n.d(t, {
  Z: function() {
return u;
  }
});
var l = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  a = n(729594),
  o = n(592733);
let s = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)');

function d(e) {
  let t = null,
n = null,
l = null;
  try {
t = (l = a.parse(e, !0)).host, n = l.pathname;
  } catch (e) {
return null;
  }
  return null != l && s.test(null != t ? t : '') && null != n ? l : null;
}

function u(e) {
  let {
className: t,
embed: {
  url: n,
  thumbnail: r
}
  } = e;
  if (null == n || null == r)
return null;
  let a = d(n);
  if (null == a)
return null;
  let s = a.query.iframe_url;
  if (null == s || Array.isArray(s) || null == d(s))
return null;
  let {
width: u,
height: m
  } = r, h = u, c = m;
  return (u > 500 || m > 400) && (u > m ? (h = 500, c = 500 * m / u) : (h = 400 * u / m, c = 400)), (0, l.jsx)('iframe', {
className: i()(o.embedAmazonMusic, t),
src: s,
style: {
  width: h,
  height: c
},
frameBorder: 0,
sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
  });
}