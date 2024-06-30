t.d(n, {
    Z: function () {
        return N;
    }
}), t(724458), t(47120);
var l = t(735250), s = t(470079), a = t(512722), i = t.n(a), r = t(392711), o = t.n(r), u = t(856901), c = t(442837), d = t(481060), m = t(131951), E = t(537135), _ = t(176940), S = t(689938), g = t(83750), h = t(278768), C = t(331651);
function N(e) {
    let {
        selectedSource: n,
        onChangeVideoDeviceSource: t,
        onChangeAudioDevice: a
    } = e;
    i()(null != n, 'Camera capture device cannot be null');
    let r = (0, _.Z)(), N = (0, c.e7)([m.Z], () => m.Z.getInputDevices()), [Z, I] = s.useState(function (e, n, t) {
            if (null != n && null != t) {
                let l = n.find(n => n.id === e);
                if (null == l)
                    return;
                let s = o().reduce(t, (e, n) => (0, u.stringSimilarity)(l.name, n.name) > (0, u.stringSimilarity)(l.name, e.name) ? n : e);
                if (null != s)
                    return s.id;
            }
        }(n.id, r, N));
    return null != Z && a(Z), (0, l.jsx)(s.Fragment, {
        children: (0, l.jsxs)(d.FormItem, {
            title: 'Capture Device',
            className: h.modalContent,
            children: [
                (0, l.jsx)(d.FormItem, {
                    className: C.marginTop8,
                    children: (0, l.jsxs)(E.Z, {
                        children: [
                            (0, l.jsx)('span', {
                                className: g.ellipsisText,
                                children: n.name
                            }),
                            (0, l.jsx)(d.Button, {
                                className: g.changeButton,
                                color: d.Button.Colors.PRIMARY,
                                size: d.Button.Sizes.SMALL,
                                onClick: t,
                                children: S.Z.Messages.CHANGE
                            })
                        ]
                    })
                }),
                (0, l.jsx)(d.FormItem, {
                    className: C.marginTop8,
                    title: S.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                    children: (0, l.jsx)(d.SingleSelect, {
                        value: Z,
                        className: C.__invalid_marginaTop8,
                        onChange: e => {
                            I(e), a(e);
                        },
                        options: o().map(N, e => {
                            let {
                                id: n,
                                name: t
                            } = e;
                            return {
                                value: n,
                                label: t
                            };
                        })
                    })
                })
            ]
        })
    });
}
