n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(618158), o = n(819640), c = n(131951), d = n(502568), u = n(924557), _ = n(435064), E = n(779618), m = n(175470), I = n(203259), T = n(356659), h = n(689938);
function N(e) {
    let {
            canShowReminder: t = !1,
            className: N
        } = e, f = (0, E.Z)(c.Z), {showClipsHeaderEntrypoint: p} = u.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }), {
            hasClips: C,
            hasNewClips: g,
            lastClipsSession: S,
            remindersEnabled: A,
            hasAnyClipAnimations: x
        } = (0, s.cj)([_.Z], () => ({
            hasClips: _.Z.hasClips(),
            hasNewClips: _.Z.getNewClipIds().length > 0,
            lastClipsSession: _.Z.getLastClipsSession(),
            remindersEnabled: _.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: _.Z.hasAnyClipAnimations()
        })), O = null != S && S.newClipIds.length > 0, R = (0, m.n)(e => e.clipsButtonRef), M = (0, m.n)(e => e.setClipsButtonRef), v = (0, s.e7)([o.Z], () => o.Z.hasLayers()), {
            preventIdle: L,
            allowIdle: Z
        } = (0, r.Y)('animation');
    function P() {
        (0, l.openModalLazy)(async () => {
            let {default: e} = await Promise.all([
                n.e('2668'),
                n.e('56874')
            ]).then(n.bind(n, 542055));
            return t => (0, i.jsx)(e, { ...t });
        }, { modalKey: T.Qr });
    }
    return (a.useEffect(() => (x ? L() : Z(), () => Z()), [
        x,
        L,
        Z
    ]), p && f && C) ? (0, i.jsxs)(i.Fragment, {
        children: [
            null != R && t && A && O && !(0, l.hasAnyModalOpen)() && !v && (0, i.jsx)(I.Z, {
                clipIconRef: R,
                lastClipsSession: S,
                onOpenClipsGallery: P
            }),
            (0, i.jsx)('div', {
                ref: M,
                children: (0, i.jsx)(d.JO, {
                    className: N,
                    icon: l.ClipsIcon,
                    showBadge: g,
                    tooltip: h.Z.Messages.CLIPS_GALLERY_TOOLTIP,
                    onClick: P
                })
            })
        ]
    }) : null;
}
