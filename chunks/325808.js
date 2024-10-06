t.d(s, {
    Z: function () {
        return x;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(846027),
    d = t(230711),
    _ = t(825209),
    u = t(906732),
    E = t(600164),
    T = t(313201),
    S = t(131951),
    I = t(358085),
    N = t(962100),
    A = t(981631),
    C = t(689938),
    m = t(592142),
    g = t(113207);
let h = !I.isPlatformEmbedded,
    O = (0, T.hQ)();
function p(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function R(e) {
    let s,
        { inputMode: t } = e,
        { shortcut: a, delay: i } = (0, o.cj)([S.Z], () => S.Z.getModeOptions());
    return (
        (s =
            I.isPlatformEmbedded || t !== A.pM4.PUSH_TO_TALK
                ? (0, n.jsx)(l.FormText, {
                      type: l.FormText.Types.DESCRIPTION,
                      className: r()(m.pttToolsMessage, g.marginBottom8),
                      children: C.Z.Messages.USER_SETTINGS_VOICE_ADD_MULTIPLE.format({ onClick: () => d.Z.setSection(A.oAB.KEYBINDS) })
                  })
                : (0, n.jsx)(l.FormText, {
                      type: l.FormText.Types.DESCRIPTION,
                      className: r()(m.pttToolsMessage, m.pttToolsWarning, g.marginBottom8),
                      children: C.Z.Messages.PTT_LIMITED_WARNING.format({ onDownloadClick: () => (0, N.y)('Help Text PTT') })
                  })),
        (0, n.jsxs)('div', {
            className: m.pttTools,
            children: [
                (0, n.jsxs)(E.Z, {
                    children: [
                        (0, n.jsx)(E.Z.Child, {
                            basis: '50%',
                            children: (0, n.jsx)(l.FormItem, {
                                title: C.Z.Messages.FORM_LABEL_SHORTCUT,
                                children: (0, n.jsx)(_.Z, {
                                    defaultValue: a,
                                    onChange: (e) => c.Z.setMode(t, { shortcut: e })
                                })
                            })
                        }),
                        (0, n.jsx)(E.Z.Child, {
                            basis: '50%',
                            children: (0, n.jsxs)(l.FormItem, {
                                children: [
                                    (0, n.jsx)(l.FormTitle, {
                                        id: O,
                                        tag: l.FormTitleTags.H5,
                                        className: g.marginBottom8,
                                        children: C.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                                    }),
                                    (0, n.jsx)(l.Slider, {
                                        initialValue: i,
                                        onValueChange: (e) => c.Z.setMode(t, { delay: e }),
                                        onValueRender: p,
                                        maxValue: A.qhL,
                                        'aria-labelledby': O
                                    })
                                ]
                            })
                        })
                    ]
                }),
                s
            ]
        })
    );
}
function x() {
    let { analyticsLocations: e } = (0, u.ZP)(),
        s = (0, o.e7)([S.Z], () => S.Z.getMode()),
        i = [
            {
                value: A.pM4.VOICE_ACTIVITY,
                name: C.Z.Messages.INPUT_MODE_VAD
            },
            {
                value: A.pM4.PUSH_TO_TALK,
                name: h ? C.Z.Messages.INPUT_MODE_PTT_LIMITED : C.Z.Messages.INPUT_MODE_PTT
            }
        ],
        r = a.useCallback(
            (s) => {
                let { value: a } = s;
                a === A.pM4.PUSH_TO_TALK &&
                    h &&
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(t.bind(t, 468026));
                        return (s) =>
                            (0, n.jsx)(e, {
                                title: C.Z.Messages.PTT_LIMITED_TITLE,
                                confirmText: C.Z.Messages.DOWNLOAD,
                                cancelText: C.Z.Messages.OKAY,
                                onConfirm: () => (0, N.y)('PTT Limited Modal'),
                                body: C.Z.Messages.PTT_LIMITED_BODY,
                                ...s
                            });
                    }),
                    c.Z.setMode(a, void 0, void 0, { analyticsLocations: e });
            },
            [e]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(l.FormItem, {
                title: C.Z.Messages.FORM_LABEL_INPUT_MODE,
                className: g.marginBottom20,
                children: (0, n.jsx)(l.RadioGroup, {
                    onChange: r,
                    options: i,
                    value: s
                })
            }),
            s === A.pM4.PUSH_TO_TALK && (0, n.jsx)(R, { inputMode: s })
        ]
    });
}
