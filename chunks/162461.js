n.d(t, {
    Dy: function () {
        return f;
    },
    Rg: function () {
        return _;
    },
    sA: function () {
        return o;
    },
    wh: function () {
        return p;
    },
    wm: function () {
        return l;
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
    }),
    s = (0, r.B)({
        kind: 'user',
        id: '2024-03_content_inventory_ranker_client_dummy',
        label: 'Tracks exposure for which ranker bucket the user is in. This is here to test an exposure bug',
        defaultConfig: {},
        treatments: [
            {
                id: 1,
                label: 'Heuristic',
                config: {}
            }
        ]
    });
function o(e) {
    c.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }), u.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    t && s.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    let { enabled: n } = i.C.getCurrentConfig(
        { location: e },
        {
            disable: !0,
            autoTrackExposure: !1
        }
    );
    return t || n;
}
function l(e) {
    let { impressionCappingEnabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return !0 === t;
}
(0, r.B)({
    kind: 'user',
    id: '2024-03_content_inventory_surface_holdout',
    label: 'Content Inventory Surface Holdout',
    defaultConfig: {},
    treatments: []
});
let u = (0, r.B)({
        kind: 'user',
        id: '2024-03_holdout_bug_main_wrong_way',
        label: 'Holdout Bug Experiment Wrong Way (pls ignore)',
        defaultConfig: {},
        treatments: [
            {
                id: 1,
                label: 'Treament',
                config: {}
            }
        ]
    }),
    c = (0, r.B)({
        kind: 'user',
        id: '2024-03_holdout_bug_main_right_way',
        label: 'Holdout Bug Experiment Right Way (pls ignore)',
        defaultConfig: {},
        treatments: [
            {
                id: 1,
                label: 'Treament',
                config: {}
            }
        ]
    }),
    d = (0, r.B)({
        kind: 'user',
        id: '2024-05_content_inventory_top_artist_cards',
        label: 'Content Inventory: TOP_ARTIST cards',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function _(e) {
    let { enabled: t } = d.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let E = (0, r.B)({
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
function f(e) {
    let { enabled: t } = E.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let h = (0, r.B)({
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
function p(e) {
    let { enabled: t } = h.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
