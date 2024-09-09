n.d(t, {
    Dy: function () {
        return u;
    },
    nP: function () {
        return E;
    },
    sA: function () {
        return s;
    },
    wh: function () {
        return d;
    },
    wm: function () {
        return o;
    }
});
var r = n(818083),
    i = n(109911);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-03_content_inventory_memberlist_and_ranker',
    label: 'Enables the memberlist content feed',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Recency',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'Heuristic',
            config: { enabled: !0 }
        },
        {
            id: 3,
            label: 'Noteworthy',
            config: {
                enabled: !0,
                impressionCappingEnabled: !0
            }
        },
        {
            id: 4,
            label: 'Another Heuristic treatment for comparison ranking',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        { enabled: n } = i.C.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: !1
            }
        );
    return t || n;
}
function o(e) {
    let { impressionCappingEnabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return !0 === t;
}
let l = (0, r.B)({
    kind: 'user',
    id: '2024-04_content_inventory_listened_media',
    label: 'Content Inventory: LISTENED_MEDIA',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function u(e) {
    let { enabled: t } = l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let c = (0, r.B)({
    kind: 'user',
    id: '2024-05_content_inventory_games_rich_presence',
    label: 'Content Inventory: Rich Presence for Games',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function d(e) {
    let { enabled: t } = c.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let _ = (0, r.B)({
    kind: 'user',
    id: '2024-08_content_inventory_analytics_sampling',
    label: 'Content Inventory Analytics Sampling',
    defaultConfig: { trackingEnabled: !0 },
    treatments: [
        {
            id: 1,
            label: 'Tracking disabled',
            config: { trackingEnabled: !1 }
        }
    ]
});
function E(e) {
    return _.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
