r.d(e, {
  S: function() {
return s;
  }
});
var n = r(789903),
  i = r(78385),
  o = r(973682),
  a = [
'numeric',
'style'
  ];

function s(t, e, r, s, u) {
  void 0 === u && (u = {}), !s && (s = 'second'), !Intl.RelativeTimeFormat && t.onError(new i.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', i.jK.MISSING_INTL_API));
  try {
var c, l, h, f, p, m, d, v;
return (c = t, l = e, h = u, f = c.locale, p = c.formats, m = c.onError, void 0 === h && (h = {}), v = !!(d = h.format) && (0, n.TB)(p, 'relative', d, m) || {}, l(f, (0, n.L6)(h, a, v))).format(r, s);
  } catch (e) {
t.onError(new o.Qe('Error formatting relative time.', t.locale, e));
  }
  return String(r);
}