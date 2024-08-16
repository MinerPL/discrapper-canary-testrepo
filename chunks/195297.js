n.r(i),
    n.d(i, {
        default: function () {
            return I;
        }
    }),
    n(47120);
var o = n(735250),
    t = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(313201),
    u = n(455708),
    _ = n(626135),
    g = n(488499),
    E = n(58384),
    f = n(981631),
    T = n(689938),
    N = n(321393);
function I(e) {
    let { transitionState: i, onClose: r, onComplete: I, uploadType: h, showUpsellHeader: p, analyticsPage: R } = e,
        [m, x] = t.useState(!1),
        B = (0, l.useModalContext)(),
        b = (0, d.Dt)(),
        { analyticsLocations: A } = (0, c.ZP)(s.Z.GIF_PICKER);
    async function C(e) {
        let { gifSrc: i } = e;
        if (null == i || m) return;
        x(!0);
        let t = (0, E.Q)(i),
            a = await fetch(t),
            s = await a.blob();
        r(),
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('48017'), n.e('40629')]).then(n.bind(n, 850085));
                    return (i) =>
                        (0, o.jsx)(e, {
                            imgURI: t,
                            file: new File([s], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: I,
                            uploadType: h,
                            showUpsellHeader: p,
                            ...i
                        });
                },
                { contextKey: B }
            );
    }
    return (
        t.useEffect(() => {
            _.default.track(f.rMx.OPEN_MODAL, {
                type: f.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                location: { page: R }
            });
        }, [R]),
        (0, o.jsx)(c.Gt, {
            value: A,
            children: (0, o.jsxs)(l.ModalRoot, {
                className: N.__invalid_gifPickerCroppingModal,
                'aria-labelledby': b,
                transitionState: i,
                size: l.ModalSize.SMALL,
                children: [
                    p
                        ? (0, o.jsx)(g.Z, {
                              type: h,
                              analyticsPage: R,
                              analyticsSection: f.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                              isGIF: !0
                          })
                        : null,
                    (0, o.jsxs)(l.ModalHeader, {
                        className: N.modalHeader,
                        separator: !1,
                        children: [
                            (0, o.jsx)(l.FormTitle, {
                                className: N.titleCase,
                                tag: l.FormTitleTags.H1,
                                children: T.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }),
                            (0, o.jsx)(l.ModalCloseButton, {
                                onClick: r,
                                className: N.modalCloseButton
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        children: [
                            (0, o.jsx)(u.Z, {
                                className: a()(N.gifPicker, { [N.loadingOverlay]: m }),
                                onSelectGIF: C,
                                hideFavorites: !0
                            }),
                            m && (0, o.jsx)(l.Spinner, { className: N.spinner })
                        ]
                    })
                ]
            })
        })
    );
}
