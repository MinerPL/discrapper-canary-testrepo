n.r(t),
    n.d(t, {
        getAvailableLocales: function () {
            return l.u;
        },
        international: function () {
            return u;
        },
        intl: function () {
            return c;
        },
        t: function () {
            return u;
        },
        untranslated: function () {
            return u;
        }
    }),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(65084),
    s = n(302454),
    o = n.n(s),
    l = n(424395);
let u = {},
    c = new a.IntlManager('en-US').withFormatters({
        format: (0, a.makeReactFormatter)({
            $_: () => '',
            $i: (e, t) => (0, r.jsx)('em', { children: e }, t),
            $b: (e, t) => (0, r.jsx)('strong', { children: e }, t),
            $del: (e, t) => (0, r.jsx)('del', { children: e }, t),
            $p: (e, t) => (0, r.jsx)('p', { children: e }, t),
            $code: (e, t) => (0, r.jsx)('code', { children: e }, t),
            $link: (e, t) => {
                let [r, ...a] = e,
                    { Anchor: s } = n(756715),
                    l = {};
                switch (typeof r) {
                    case 'string':
                        l.href = o().sanitizeUrl(r);
                        break;
                    case 'object':
                        var u;
                        (l.onClick = null !== (u = r.onClick) && void 0 !== u ? u : r), (l.onContextMenu = r.onContextMenu);
                        break;
                    default:
                        l.onClick = r;
                }
                return (0, i.createElement)(
                    s,
                    {
                        ...l,
                        key: t
                    },
                    a
                );
            }
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter
    });
