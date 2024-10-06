n.d(t, {
    d: function () {
        return E;
    }
});
var r = n(146150),
    i = n(278253),
    a = n(926832),
    s = n(562376),
    o = n(812929),
    l = n(650488),
    u = n(557944),
    c = n(880710),
    d = n(450132),
    _ = n(368382);
function E(e, t) {
    var n = (0, i.ax)(t),
        E = (0, r.pi)((0, r.pi)({}, i.Z0), e),
        f = E.locale,
        h = E.defaultLocale,
        p = E.onError;
    return (
        f ? (!Intl.NumberFormat.supportedLocalesOf(f).length && p ? p(new a.gb('Missing locale data for locale: "'.concat(f, '" in Intl.NumberFormat. Using default locale: "').concat(h, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(f).length && p && p(new a.gb('Missing locale data for locale: "'.concat(f, '" in Intl.DateTimeFormat. Using default locale: "').concat(h, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')))) : (p && p(new a.OV('"locale" was not configured, using "'.concat(h, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), (E.locale = E.defaultLocale || 'en')),
        !(function (e) {
            var t;
            if (e.onWarn && e.defaultRichTextElements && 'string' == typeof ((t = e.messages || {}), t[Object.keys(t)[0]])) e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
        })(E),
        (0, r.pi)((0, r.pi)({}, E), {
            formatters: n,
            formatNumber: s.uf.bind(null, E, n.getNumberFormat),
            formatNumberToParts: s.T.bind(null, E, n.getNumberFormat),
            formatRelativeTime: o.S.bind(null, E, n.getRelativeTimeFormat),
            formatDate: l.p6.bind(null, E, n.getDateTimeFormat),
            formatDateToParts: l.OI.bind(null, E, n.getDateTimeFormat),
            formatTime: l.mr.bind(null, E, n.getDateTimeFormat),
            formatDateTimeRange: l.Hk.bind(null, E, n.getDateTimeFormat),
            formatTimeToParts: l.uE.bind(null, E, n.getDateTimeFormat),
            formatPlural: u.R.bind(null, E, n.getPluralRules),
            formatMessage: c.w.bind(null, E, n),
            $t: c.w.bind(null, E, n),
            formatList: d.I.bind(null, E, n.getListFormat),
            formatListToParts: d.T.bind(null, E, n.getListFormat),
            formatDisplayName: _.I.bind(null, E, n.getDisplayNames)
        })
    );
}
