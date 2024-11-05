n.d(t, {
    d: function () {
        return _;
    }
});
var r = n(259630),
    i = n(543491),
    a = n(958388),
    s = n(744154),
    o = n(832584),
    l = n(540341),
    u = n(635846),
    c = n(672143),
    d = n(225366),
    f = n(651837);
function _(e, t) {
    var n = (0, i.ax)(t),
        _ = (0, r.pi)((0, r.pi)({}, i.Z0), e),
        h = _.locale,
        p = _.defaultLocale,
        m = _.onError;
    return (
        h ? (!Intl.NumberFormat.supportedLocalesOf(h).length && m ? m(new a.gb('Missing locale data for locale: "'.concat(h, '" in Intl.NumberFormat. Using default locale: "').concat(p, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(h).length && m && m(new a.gb('Missing locale data for locale: "'.concat(h, '" in Intl.DateTimeFormat. Using default locale: "').concat(p, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')))) : (m && m(new a.OV('"locale" was not configured, using "'.concat(p, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), (_.locale = _.defaultLocale || 'en')),
        !(function (e) {
            var t;
            if (e.onWarn && e.defaultRichTextElements && 'string' == typeof ((t = e.messages || {}), t[Object.keys(t)[0]])) e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
        })(_),
        (0, r.pi)((0, r.pi)({}, _), {
            formatters: n,
            formatNumber: s.uf.bind(null, _, n.getNumberFormat),
            formatNumberToParts: s.T.bind(null, _, n.getNumberFormat),
            formatRelativeTime: o.S.bind(null, _, n.getRelativeTimeFormat),
            formatDate: l.p6.bind(null, _, n.getDateTimeFormat),
            formatDateToParts: l.OI.bind(null, _, n.getDateTimeFormat),
            formatTime: l.mr.bind(null, _, n.getDateTimeFormat),
            formatDateTimeRange: l.Hk.bind(null, _, n.getDateTimeFormat),
            formatTimeToParts: l.uE.bind(null, _, n.getDateTimeFormat),
            formatPlural: u.R.bind(null, _, n.getPluralRules),
            formatMessage: c.w.bind(null, _, n),
            $t: c.w.bind(null, _, n),
            formatList: d.I.bind(null, _, n.getListFormat),
            formatListToParts: d.T.bind(null, _, n.getListFormat),
            formatDisplayName: f.I.bind(null, _, n.getDisplayNames)
        })
    );
}
