n.d(t, {
    To: function () {
        return g;
    },
    Xu: function () {
        return C;
    },
    ZP: function () {
        return _;
    },
    aF: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(100527),
    o = n(428695),
    s = n(703656),
    c = n(970606),
    u = n(308083),
    d = n(981631),
    h = n(921944),
    p = n(388032),
    f = n(737116);
function m(e) {
    let { title: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(r.Heading, {
            variant: 'heading-md/semibold',
            color: 'header-primary',
            className: f.title,
            children: t
        })
    });
}
function g(e) {
    let { message: t } = e;
    return (0, i.jsx)(r.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        className: f.message,
        children: t
    });
}
function C(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(r.Button, {
        fullWidth: !0,
        look: r.ButtonLooks.FILLED,
        size: r.ButtonSizes.SMALL,
        color: r.ButtonColors.BRAND,
        className: f.button,
        onClick: t,
        children: (0, i.jsx)(r.Text, {
            variant: 'text-sm/semibold',
            color: 'always-white',
            children: p.intl.string(p.t.RzWDqa)
        })
    });
}
function _(e) {
    let { guild: t, markAsDismissed: n, defaultGameId: r } = e;
    l.useEffect(() => {
        (0, c.TE)({
            guildId: t.id,
            location: a.Z.GUILD_CHANNEL_LIST
        });
    }, [t.id]);
    let _ = r === u.xn ? p.intl.string(p.t.Y95lq6) : r === u.nJ ? p.intl.string(p.t['1UjqaG']) : p.intl.string(p.t.MA2x2N),
        x = l.useCallback(() => (0, i.jsx)(g, { message: p.intl.string(p.t.VuqJFR) }), []),
        v = l.useCallback(() => (0, i.jsx)(m, { title: _ }), [_]),
        I = l.useCallback(() => {
            (0, c.aN)({
                guildId: t.id,
                location: a.Z.GUILD_CHANNEL_LIST
            }),
                (0, s.uL)(d.Z5c.GUILD_DISCOVERY);
        }, [t.id]),
        b = l.useCallback(() => (0, i.jsx)(C, { onClick: I }), [I]);
    return (0, i.jsx)(o.Z, {
        className: f.notice,
        guild: t,
        onDismissed: () => n(h.L.DISMISS),
        title: v,
        message: x,
        cta: b,
        trackingSource: d.PsQ.CLAN_ADMIN_UPSELL,
        type: d.vID.CLAN_ADMIN_UPSELL
    });
}
