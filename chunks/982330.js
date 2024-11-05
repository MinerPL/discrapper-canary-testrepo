n.d(t, {
    K: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_improved_media_viewer',
    label: 'Improved Desktop Media Viewer',
    defaultConfig: { improvedDesktopMediaViewerEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Improved Desktop Media Viewer',
            config: { improvedDesktopMediaViewerEnabled: !0 }
        }
    ]
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { improvedDesktopMediaViewerEnabled: n } = r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
