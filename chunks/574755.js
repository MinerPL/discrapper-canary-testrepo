t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(704215),
    o = t(481060),
    l = t(906732),
    c = t(605236),
    d = t(441167),
    _ = t(695346),
    E = t(131951),
    u = t(924557),
    I = t(435064),
    T = t(779618),
    S = t(39604),
    N = t(703288),
    C = t(491758),
    m = t(183632),
    A = t(689938),
    O = t(514651),
    g = t(992133),
    h = t(224499);
function p(e) {
    let { className: s, showHeader: t = !0 } = e,
        p = _.tU.useSetting(),
        { enableViewerClipping: R } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: x } = (0, l.ZP)(),
        M = (0, u.Go)(),
        { viewerClipsEnabled: f } = (0, i.cj)([I.Z], () => I.Z.getSettings()),
        D = (0, T.Z)(E.Z);
    return (
        a.useEffect(() => {
            (0, c.EW)(r.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, n.jsxs)(l.Gt, {
            value: x,
            children: [
                (M || t) &&
                    (0, n.jsx)(o.FormSection, {
                        className: s,
                        tag: o.FormTitleTags.H1,
                        title: t
                            ? (0, n.jsxs)('div', {
                                  className: O.headerContainer,
                                  children: [A.Z.Messages.CLIPS, (0, n.jsx)(N.Z, {})]
                              })
                            : null,
                        children:
                            M &&
                            (0, n.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, n.jsx)(C.Z, {}), (0, n.jsx)(m.Z, {})]
                            })
                    }),
                M && (0, n.jsx)(o.FormDivider, {}),
                (0, n.jsxs)(o.FormSection, {
                    className: t || M ? h.marginTop20 : s,
                    children: [
                        (0, n.jsx)(o.FormSwitch, {
                            hideBorder: !0,
                            className: g.formItem,
                            value: p,
                            note: A.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
                            onChange: (e) => S.yg({ allowVoiceRecording: e }),
                            children: A.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
                        }),
                        R &&
                            D &&
                            (0, n.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                className: g.formItem,
                                value: f,
                                note: A.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
                                onChange: (e) =>
                                    S.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: A.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
                            })
                    ]
                })
            ]
        })
    );
}
