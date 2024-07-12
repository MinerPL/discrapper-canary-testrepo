t.d(n, {
  Z: function() {
return E;
  }
});
var i = t(735250),
  s = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(481060),
  o = t(626135),
  u = t(358085),
  d = t(981631),
  c = t(689938);

function E(e) {
  let n = s.useCallback(() => {
a()(null != e, 'text cannot be null'), o.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open('https://www.google.com/search?q='.concat(encodeURIComponent(e)), '_blank');
  }, [e]);
  return u.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, i.jsx)(r.MenuItem, {
id: 'search-google',
label: c.Z.Messages.SEARCH_WITH_GOOGLE,
action: n
  }, 'search-google')] : null;
}