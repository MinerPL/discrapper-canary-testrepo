n.d(t, {
    Z: function () {
        return f;
    },
    s: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(763472),
    a = n(394821),
    s = n(49012),
    o = n(591759),
    l = n(475413),
    u = n(388032),
    c = n(676411);
async function d(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, i.sd)(t, n.id);
        if (e.button_urls.length <= r) return;
        let a = e.button_urls[r];
        if ('string' != typeof a) return;
        let l = o.Z.safeParseWithQuery(a);
        if ((null == l ? void 0 : l.protocol) == null || (null == l ? void 0 : l.hostname) == null) return;
        (0, s.q)({
            href: o.Z.format(l),
            trusted: !1
        });
    } catch (e) {}
}
function f(e) {
    let { user: t, activity: n, onAction: i } = e;
    if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
    let s = (0, a.Z)(n);
    return (0, r.jsx)(r.Fragment, {
        children: n.buttons.map((e, a) =>
            (0, r.jsx)(
                l.tG,
                {
                    text: s ? u.intl.string(u.t['I6JG4+']) : e,
                    className: c.customButton,
                    fullWidth: !0,
                    onClick: () => {
                        null == i || i({ action: s ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                            d({
                                user: t,
                                activity: n,
                                index: a
                            });
                    }
                },
                a
            )
        )
    });
}
