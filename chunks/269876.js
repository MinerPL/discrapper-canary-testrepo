n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(692547),
    u = n(481060),
    m = n(846027),
    h = n(313201),
    g = n(131951),
    p = n(65154),
    x = n(388032),
    S = n(393752),
    T = n(752325),
    C = n(739017),
    _ = n(113207);
let E = (0, h.hQ)();
function f() {
    let [e, t] = s.useState(-100),
        [n, r] = s.useState(!1),
        { threshold: f, autoThreshold: I } = (0, a.cj)([g.Z], () => g.Z.getModeOptions()),
        {
            inputMode: N,
            automaticVADSupported: A,
            isEnabled: b
        } = (0, a.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            automaticVADSupported: g.Z.supports(p.AN.AUTOMATIC_VAD),
            isEnabled: g.Z.isEnabled()
        }));
    function v(e, n) {
        t(e), r((n & p.Dg.VOICE) === p.Dg.VOICE);
    }
    function j(e, t) {
        m.Z.setMode(N, {
            threshold: e,
            autoThreshold: t
        });
    }
    s.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                g.Z.getMediaEngine().on(o.aB.VoiceActivity, v), e.stop();
            }),
            () => {
                g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, v), e.stop();
            }
        );
    }, []);
    let O = (0, i.jsx)('section', {
        className: l()(S.inputSensitivityToggle, S.manual),
        children: (0, i.jsx)(u.Slider, {
            initialValue: f + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => j(-((100 - e) * 1), I),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': E,
            children: (0, i.jsxs)('div', {
                className: l()(S.sliderBar, S.microphone, S.inputSensitivityBar, T.bar),
                children: [
                    (0, i.jsx)('div', {
                        className: l()(S.fill, S.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, i.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        I &&
            (O = (0, i.jsxs)('section', {
                className: S.inputSensitivityToggle,
                children: [
                    (0, i.jsx)('div', {
                        className: S.inputSensitivitySlider,
                        children: (0, i.jsx)('div', { className: l()(S.inputSensitivityBar, S.sliderBar, { [S.speaking]: n }) })
                    }),
                    (0, i.jsx)(u.FormText, {
                        type: u.FormText.Types.DESCRIPTION,
                        className: _.marginBottom8,
                        children: x.intl.string(x.t.W3K5Ii)
                    })
                ]
            })),
        (0, i.jsxs)(u.FormItem, {
            className: S.sensitivity,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: E,
                    tag: u.FormTitleTags.H5,
                    className: _.marginBottom8,
                    children: x.intl.string(x.t['sqUm+v'])
                }),
                (0, i.jsxs)('div', {
                    children: [
                        A &&
                            (0, i.jsx)(h.FG, {
                                children: (e) =>
                                    (0, i.jsxs)('div', {
                                        className: l()(C.horizontal, _.marginBottom4),
                                        children: [
                                            (0, i.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H3,
                                                className: _.marginReset,
                                                children: (0, i.jsx)('label', {
                                                    htmlFor: e,
                                                    children: x.intl.string(x.t.I1Zuq6)
                                                })
                                            }),
                                            (0, i.jsx)(u.Switch, {
                                                id: e,
                                                checked: I,
                                                onChange: (e) => j(f, e)
                                            })
                                        ]
                                    })
                            }),
                        O
                    ]
                }),
                !b &&
                    (0, i.jsx)(u.FormText, {
                        type: u.FormText.Types.DESCRIPTION,
                        className: l()(S.inputDisabledWarning, _.marginBottom8),
                        children: x.intl.format(x.t['O13I+P'], { onEnableClick: () => m.Z.enable(!0) })
                    })
            ]
        })
    );
}
