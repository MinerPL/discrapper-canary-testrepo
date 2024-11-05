n.r(t),
    n.d(t, {
        getAvailableLocales: function () {
            return l.u5;
        },
        getLanguages: function () {
            return l.Vb;
        },
        getSystemLocale: function () {
            return f;
        },
        international: function () {
            return c.Z;
        },
        intl: function () {
            return h;
        },
        t: function () {
            return p;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(333392),
    s = n(302454),
    o = n.n(s),
    l = n(424395),
    u = n(165830),
    c = n(236701),
    d = n(509787);
function f(e) {
    return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
}
let _ = (0, l.YI)(f('en-US'), 'en-US'),
    h = new a.IntlManager({
        initialLocale: _,
        defaultLocale: 'en-US'
    }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, r.jsx)('em', { children: e }, t),
            $b: (e, t) => (0, r.jsx)('strong', { children: e }, t),
            $del: (e, t) => (0, r.jsx)('del', { children: e }, t),
            $p: (e, t) => (0, r.jsx)('p', { children: e }, t),
            $code: (e, t) => (0, r.jsx)('code', { children: e }, t),
            $link: (e, t, r) => {
                let [a] = r,
                    { Anchor: s } = n(756715),
                    l = {};
                switch (typeof a) {
                    case 'string':
                        l.href = o().sanitizeUrl(a);
                        break;
                    case 'function':
                    default:
                        l.onClick = a;
                        break;
                    case 'object':
                        var u;
                        if (null == a) break;
                        (l.onClick = null !== (u = a.onClick) && void 0 !== u ? u : a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, i.createElement)(
                    s,
                    {
                        ...l,
                        key: t
                    },
                    e
                );
            }
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter
    }),
    p = {
        ...u.Z,
        ...d.Z
    };
