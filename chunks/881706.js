n.d(t, {
  v: function() {
return s;
  }
}), n(47120);
var r = n(729594);
let i = new Set(n(821445)),
  a = {
'github.com': RegExp('/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*'),
'bitbucket.org': RegExp('/downloads\\S*/[^/]*'),
'gitlab.com': RegExp('/downloads\\S*/[^/]*')
  };

function s(e) {
  var t;
  let {
pathname: n,
hostname: s
  } = r.parse(e);
  if (null == s)
return null;
  let o = a[s];
  if (null != o && null != n && !o.test(n) || null == n)
return null;
  let l = n;
  try {
l = decodeURIComponent(n);
  } catch (e) {}
  let u = l.split('/'),
c = null,
d = 0;
  for (let e = u.length - 1; e >= 0; e--) {
let t = u[e];
if ('' !== t && '.' !== t) {
  if ('..' === t) {
    d++;
    continue;
  }
  if (d > e)
    break;
  c = u[e - d];
  break;
}
  }
  if (null == c)
return null;
  let _ = c.split('.');
  if (_.length < 2)
return null;
  let E = null === (t = _.pop()) || void 0 === t ? void 0 : t.toLowerCase();
  return null != E && i.has(E) ? E : null;
}