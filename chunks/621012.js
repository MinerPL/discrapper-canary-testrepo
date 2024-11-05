n.d(t, {
    m: function () {
        return a;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-10_tile_resolution_gating',
    label: 'Tile Resolution Gating',
    defaultConfig: { enabledSingle: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Tile size based wants enabled only for 1:1 videos',
            config: { enabledSingle: !0 }
        }
    ]
});
