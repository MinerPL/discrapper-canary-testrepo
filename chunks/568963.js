n.d(t, {
    R: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_overlay_v3',
    label: 'Overlay V3 Shared Context OOP',
    defaultConfig: { useOverlayV3: !1 },
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3',
            config: { useOverlayV3: !0 }
        }
    ]
});
function i() {
    return r.getCurrentConfig({ location: 'overlay_v3_enabled' }).useOverlayV3;
}
t.Z = r;
