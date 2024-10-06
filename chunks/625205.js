t.d(s, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(392711),
    i = t.n(a),
    r = t(442837),
    o = t(780384),
    l = t(481060),
    c = t(846027),
    d = t(906732),
    _ = t(600164),
    u = t(463395),
    E = t(131951),
    T = t(210887),
    S = t(962100),
    I = t(65154),
    N = t(689938),
    A = t(416805),
    C = t(113207);
function m() {
    let e, s;
    let { analyticsLocations: a } = (0, d.ZP)(),
        m = (0, r.e7)([T.Z], () => T.Z.theme),
        {
            canSetInputDevice: g,
            canSetOutputDevice: h,
            inputDeviceId: O,
            outputDeviceId: p
        } = (0, r.cj)([E.Z], () => ({
            canSetInputDevice: E.Z.supports(I.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: E.Z.supports(I.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: E.Z.getInputDeviceId(),
            outputDeviceId: E.Z.getOutputDeviceId()
        })),
        R = (0, r.e7)([E.Z], () => E.Z.getInputDevices()),
        x = (0, r.e7)([E.Z], () => E.Z.getOutputDevices());
    !g &&
        (e = (0, n.jsx)(l.FormText, {
            type: l.FormText.Types.DESCRIPTION,
            className: C.marginTop8,
            children: N.Z.Messages.BROWSER_INPUT_DEVICE_WARNING.format({ onDownloadClick: () => (0, S.y)('Help Text Input Devices') })
        })),
        !h &&
            (s = (0, n.jsx)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                className: C.marginTop8,
                children: N.Z.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({ onDownloadClick: () => (0, S.y)('Help Text Output Devices') })
            }));
    let M = i()(R).values().first(),
        f = null != M ? M.disabled : null != e,
        D = i()(x).values().first(),
        L = null != D ? D.disabled : null != s;
    function P(e) {
        let s,
            { label: a, value: i } = e;
        if (u.Z.isCertified(i)) {
            let e = (0, o.ap)(m) ? t(561259) : t(887695);
            s = (0, n.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: A.deviceOptionCertified
            });
        }
        return (0, n.jsxs)(
            'span',
            {
                className: A.deviceOption,
                children: [
                    (0, n.jsx)('span', {
                        className: A.deviceOptionLabel,
                        children: u.Z.getCertifiedDeviceName(i, a)
                    }),
                    s
                ]
            },
            i
        );
    }
    function b(e) {
        return P(e[0]);
    }
    return (0, n.jsxs)(_.Z, {
        className: C.marginBottom20,
        children: [
            (0, n.jsxs)(_.Z.Child, {
                basis: '50%',
                children: [
                    (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H5,
                        className: C.marginBottom8,
                        children: N.Z.Messages.FORM_LABEL_INPUT_DEVICE
                    }),
                    (0, n.jsx)(l.SingleSelect, {
                        value: O,
                        onChange: (e) =>
                            c.Z.setInputDevice(e, {
                                location: 'Settings',
                                analyticsLocations: a
                            }),
                        options: i().map(R, (e) => {
                            let { id: s, name: t } = e;
                            return {
                                value: s,
                                label: t
                            };
                        }),
                        isDisabled: f,
                        renderOptionValue: b,
                        renderOptionLabel: P
                    }),
                    e
                ]
            }),
            (0, n.jsxs)(_.Z.Child, {
                basis: '50%',
                children: [
                    (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H5,
                        className: C.marginBottom8,
                        children: N.Z.Messages.FORM_LABEL_OUTPUT_DEVICE
                    }),
                    (0, n.jsx)(l.SingleSelect, {
                        value: p,
                        onChange: (e) =>
                            c.Z.setOutputDevice(e, {
                                location: 'Settings',
                                analyticsLocations: a
                            }),
                        options: i().map(x, (e) => {
                            let { id: s, name: t } = e;
                            return {
                                value: s,
                                label: t
                            };
                        }),
                        isDisabled: L,
                        renderOptionValue: b,
                        renderOptionLabel: P
                    }),
                    s
                ]
            })
        ]
    });
}
