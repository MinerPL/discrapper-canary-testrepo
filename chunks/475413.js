var i = n(735250);
n(470079);
var s = n(481060), a = n(584825), r = n(290348), l = n(934826), o = n(660196), c = n(330181), d = n(939225), u = n(36246), _ = n(305342), E = n(726324), h = n(981631), I = n(689938), m = n(307115);
t.Z = e => {
    var t, n;
    let {guild: p} = e, g = (0, a.GG)(p.id)[0];
    (0, o.Z)({
        guildId: p.id,
        groupListingId: null == g ? void 0 : g.id,
        location: h.Sbl.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == g ? void 0 : g.subscription_listings_ids
    });
    let {activeSubscription: T} = (0, l.Z)(null == g ? void 0 : g.id), S = (0, a.YB)(p.id), C = null == S ? void 0 : S.description, {editStateIds: N} = r.B7(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : null, p.id);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(E.Z, {
                title: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({ serverName: p.toString() }),
                description: null != C ? C : null,
                coverImageAsset: null !== (n = null == S ? void 0 : S.cover_image_asset) && void 0 !== n ? n : null,
                guild: p,
                children: [
                    null != g ? (0, i.jsx)(c.Z, {
                        className: m.pendingPlanChangeNotice,
                        groupListingId: g.id,
                        subscription: T
                    }) : null,
                    (0, i.jsx)(d.Z, { subscription: T })
                ]
            }),
            (0, i.jsx)(s.HeadingLevel, {
                children: (0, i.jsx)(u.Z, {
                    guildId: p.id,
                    children: N.map(e => {
                        var t;
                        return (0, i.jsx)(_.Z, {
                            guildId: p.id,
                            groupListingId: null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : '',
                            listingId: e,
                            analyticsLocation: h.Sbl.ROLE_SUBSCRIPTIONS_TAB
                        }, e);
                    })
                })
            })
        ]
    });
};
