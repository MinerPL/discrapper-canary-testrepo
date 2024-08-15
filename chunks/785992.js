n.d(t, {
  E: function() {
return i;
  },
  Z: function() {
return a;
  }
});
var l = n(729594),
  r = n(981631);

function i(e) {
  return null != e && 'open.spotify.com' === e;
}

function a(e) {
  var t;
  if (null == e.url || (null === (t = e.provider) || void 0 === t ? void 0 : t.name) !== 'Spotify' || e.type !== r.hBH.LINK)
return !1;
  try {
let t = l.parse(e.url, !0).host;
return i(t);
  } catch (e) {
return !1;
  }
}