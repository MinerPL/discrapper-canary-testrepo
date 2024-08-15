r.d(e, {
  d: function() {
return p;
  }
});
var n = r(146150),
  i = r(789903),
  o = r(973682),
  a = r(347442),
  s = r(917744),
  u = r(953429),
  c = r(95620),
  l = r(754551),
  h = r(171045),
  f = r(431622);

function p(t, e) {
  var r = (0, i.ax)(e),
p = (0, n.pi)((0, n.pi)({}, i.Z0), t),
m = p.locale,
d = p.defaultLocale,
v = p.onError;
  return m ? !Intl.NumberFormat.supportedLocalesOf(m).length && v ? v(new o.gb('Missing locale data for locale: "'.concat(m, '" in Intl.NumberFormat. Using default locale: "').concat(d, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(m).length && v && v(new o.gb('Missing locale data for locale: "'.concat(m, '" in Intl.DateTimeFormat. Using default locale: "').concat(d, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (v && v(new o.OV('"locale" was not configured, using "'.concat(d, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), p.locale = p.defaultLocale || 'en'), ! function(t) {
var e;
if (t.onWarn && t.defaultRichTextElements && 'string' == typeof(e = t.messages || {}, e[Object.keys(e)[0]]))
  t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
  }(p), (0, n.pi)((0, n.pi)({}, p), {
formatters: r,
formatNumber: a.uf.bind(null, p, r.getNumberFormat),
formatNumberToParts: a.T.bind(null, p, r.getNumberFormat),
formatRelativeTime: s.S.bind(null, p, r.getRelativeTimeFormat),
formatDate: u.p6.bind(null, p, r.getDateTimeFormat),
formatDateToParts: u.OI.bind(null, p, r.getDateTimeFormat),
formatTime: u.mr.bind(null, p, r.getDateTimeFormat),
formatDateTimeRange: u.Hk.bind(null, p, r.getDateTimeFormat),
formatTimeToParts: u.uE.bind(null, p, r.getDateTimeFormat),
formatPlural: c.R.bind(null, p, r.getPluralRules),
formatMessage: l.w.bind(null, p, r),
$t: l.w.bind(null, p, r),
formatList: h.I.bind(null, p, r.getListFormat),
formatListToParts: h.T.bind(null, p, r.getListFormat),
formatDisplayName: f.I.bind(null, p, r.getDisplayNames)
  });
}