n.d(t, {
    Br: function () {
        return r;
    },
    Gh: function () {
        return c;
    },
    Pw: function () {
        return d;
    },
    qz: function () {
        return i;
    }
}),
    n(724458),
    n(47120),
    n(945124);
var r,
    i,
    a,
    s,
    o = n(116175),
    l = n(308083);
function u(e, t) {
    return void 0 === e || '' === e ? t : e;
}
function c(e) {
    var t;
    let n = (0, o.yf)(),
        r = (0, l.dt)(),
        i = {};
    return (
        null != e.game_activity &&
            (i = Object.keys(e.game_activity).reduce((t, n) => {
                var r;
                let i = null === (r = e.game_activity) || void 0 === r ? void 0 : r[n];
                return null == i
                    ? t
                    : ((t[n] = {
                          level: i.activity_level,
                          score: i.activity_score
                      }),
                      t);
            }, {})),
        {
            id: e.id,
            name: e.name,
            icon: e.icon_hash,
            description: e.description,
            memberCount: e.member_count,
            games: e.game_application_ids,
            playstyle: e.play_style,
            traits: e.search_terms,
            tag: e.tag,
            banner: e.banner,
            bannerHash: e.banner_hash,
            badge: {
                badgeKind: e.badge,
                primaryColor: u(e.badge_color_primary, n.primary),
                secondaryColor: u(e.badge_color_secondary, n.secondary),
                imageHash: e.badge_hash
            },
            branding: {
                primaryColor: u(e.brand_color_primary, r.primary),
                secondaryColor: u(e.brand_color_secondary, r.secondary)
            },
            wildcardDescriptors: e.wildcard_descriptors,
            gameActivity: i,
            discoveryProfileFeatures: new Set(null !== (t = e.discovery_profile_features) && void 0 !== t ? t : [])
        }
    );
}
function d(e) {
    return 'loaded' === e.status;
}
((a = r || (r = {})).TOP_PICKS = 'TOP_PICKS'), (a.GLOBAL_DISCOVERY_TOP_PICKS = 'GLOBAL_DISCOVERY_TOP_PICKS'), ((s = i || (i = {})).SHOWN = 'SHOWN'), (s.HIT = 'HIT'), (s.UNKNOWN = 'UNKNOWN');
