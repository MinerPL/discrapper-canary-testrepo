n.d(t, {
    Z: function () {
        return E;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(442837), s = n(481060), r = n(592125), o = n(430824), c = n(584825), u = n(406074), d = n(660196), h = n(36246), p = n(305342), m = n(981631), _ = n(689938), f = n(212017);
function E(e) {
    let {
            guildId: t,
            channelId: n
        } = e, E = (0, u.C)({
            guildId: t,
            channelId: n
        }), C = (0, c.GG)(t), g = (0, c.YB)(t), I = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]), x = null == I ? void 0 : I.name, T = (0, l.e7)([r.Z], () => r.Z.getChannel(n)), N = a.useMemo(() => {
            let e = {};
            for (let t of C)
                for (let n of t.subscription_listings_ids)
                    e[n] = t.id;
            return e;
        }, [C]);
    return ((0, d.Z)({
        guildId: t,
        location: m.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: E.map(e => e.id)
    }), null == I) ? (0, i.jsx)('div', {
        className: f.__invalid_spinnerContainer,
        children: (0, i.jsx)(s.Spinner, { className: f.__invalid_spinner })
    }) : (0, i.jsxs)(s.ScrollerAuto, {
        className: f.pageContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/semibold',
                className: f.joinCtaTitle,
                children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_UPSELL_PAGE_CTA.format({
                    serverName: x,
                    channelName: null == T ? void 0 : T.name
                })
            }),
            (0, i.jsx)(s.Text, {
                className: f.joinCtaSubtitle,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: null == g ? void 0 : g.description
            }),
            (0, i.jsx)(h.Z, {
                guildId: t,
                children: E.filter(e => null != N[e.id]).map(e => (0, i.jsx)(p.Z, {
                    guildId: t,
                    listingId: e.id,
                    groupListingId: N[e.id],
                    analyticsLocation: m.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL
                }, e.id))
            })
        ]
    });
}
