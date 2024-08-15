n.d(t, {
  Z: function() {
return c;
  },
  j: function() {
return m;
  }
});
var l = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  a = n(729594),
  o = n(689938),
  s = n(921877);
let d = [
'sessionshare.sp-int.playstation.com',
'session-share.playstation.com'
  ],
  u = (e, t, n) => 'https://'.concat(e, '/embed/').concat(t, '?locale=').concat(n),
  m = ['PlayStation'],
  h = (e, t) => {
let {
  host: n,
  pathname: l
} = t, r = [];
switch (null != l && (r = l.split('/')), e) {
  case 'PlayStation':
    if (null == n || !d.includes(n) || 2 !== r.length)
      break;
    return {
      embedUrl: u(n, r[1], o.Z.getLocale()),
        style: {
          width: 400,
          height: 300,
          borderRadius: 6
        }
    };
}
return null;
  };

function c(e) {
  var t;
  let n = e.embed.url,
r = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
  if (null == n || null == r)
return null;
  let o = null;
  try {
o = a.parse(n, !0);
  } catch (e) {
return null;
  }
  let d = h(r, o);
  return null == d ? null : (0, l.jsx)('iframe', {
src: d.embedUrl,
className: i()(s.embedIFrame, e.className),
style: d.style,
sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
  });
}