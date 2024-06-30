n.d(t, {
    i1: function () {
        return d;
    },
    rx: function () {
        return c;
    },
    sB: function () {
        return _;
    },
    vY: function () {
        return E;
    }
}), n(47120);
var r = n(570140), i = n(821849), a = n(307643), o = n(981631);
function s(e) {
    return {
        id: e.id,
        type: o.epS.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: o.POd.APPLICATION,
        name: e.name,
        summary: '',
        description: e.description,
        flags: e.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: '',
        deleted: e.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1
    };
}
function l(e) {
    var t;
    return {
        id: e.id,
        sku: s(e),
        summary: e.description,
        description: e.description,
        benefits: null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
        thumbnail: e.image_asset,
        published: e.published
    };
}
function u(e) {
    for (let t of (r.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: e.map(s)
        }), r.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_SUCCESS',
            storeListings: e.map(l)
        }), e))
        r.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: t.id,
            subscriptionPlans: t.subscription_plans
        });
}
async function c(e, t) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: e
    });
    try {
        var n;
        let i = await a.jz(e, t);
        return r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
            applicationId: e,
            groupListing: i
        }), u(null !== (n = i.subscription_listings) && void 0 !== n ? n : []), i;
    } catch (t) {
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: e
        });
    }
}
async function d(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: e
    });
    try {
        let t = await a.GF(e);
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: e,
            entitlements: t
        });
    } catch (t) {
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: e
        });
    }
}
function _(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: e
    });
}
async function E(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    try {
        var t;
        let n = await a.a_(e);
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: n
        });
        let o = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
        for (let t of o)
            t.subscription_plans[0].id === e && await i.GZ(t.id, void 0, void 0, !0);
        u(o);
    } catch (e) {
    }
}
