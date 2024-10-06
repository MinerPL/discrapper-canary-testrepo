n.r(i),
    n.d(i, {
        default: function () {
            return R;
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
    _ = n(81245),
    g = n(530329),
    E = n(626135),
    f = n(488499),
    N = n(58384),
    T = n(981631),
    I = n(486324),
    p = n(689938),
    h = n(76899);
function R(e) {
    let { transitionState: i, onClose: r, onComplete: R, uploadType: m, showUpsellHeader: x, analyticsPage: B } = e,
        [C, A] = t.useState(!1),
        b = (0, l.useModalContext)(),
        M = (0, d.Dt)(),
        { analyticsLocations: P } = (0, c.ZP)(s.Z.GIF_PICKER);
    async function j(e) {
        let { gifSrc: i } = e;
        if (null == i || C) return;
        A(!0);
        let t = (0, N.Q)(i),
            a = await fetch(t),
            s = await a.blob();
        r(),
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('48017'), n.e('53243')]).then(n.bind(n, 850085));
                    return (i) =>
                        (0, o.jsx)(e, {
                            imgURI: t,
                            file: new File([s], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: R,
                            uploadType: m,
                            showUpsellHeader: x,
                            ...i
                        });
                },
                { contextKey: b }
            );
    }
    t.useEffect(() => {
        E.default.track(T.rMx.OPEN_MODAL, {
            type: T.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: B }
        });
    }, [B]);
    let L = m === I.pC.AVATAR || m === I.pC.BANNER,
        Z = (0, _.Mu)('GIFPickerCroppingModal', !L);
    return (0, o.jsx)(c.Gt, {
        value: P,
        children: (0, o.jsxs)(l.ModalRoot, {
            'aria-labelledby': M,
            transitionState: i,
            size: l.ModalSize.SMALL,
            children: [
                x &&
                    !Z &&
                    (0, o.jsx)(f.Z, {
                        type: m,
                        analyticsPage: B,
                        analyticsSection: T.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, o.jsxs)(l.ModalHeader, {
                    className: h.modalHeader,
                    separator: !1,
                    children: [
                        (0, o.jsx)(l.FormTitle, {
                            className: h.titleCase,
                            tag: l.FormTitleTags.H1,
                            children: p.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                        }),
                        (0, o.jsx)(l.ModalCloseButton, {
                            onClick: r,
                            className: h.modalCloseButton
                        })
                    ]
                }),
                (0, o.jsxs)('div', {
                    children: [
                        (0, o.jsx)(u.Z, {
                            contentClassName: a()({ [h.gifPickerContent]: x && Z }),
                            className: a()(h.gifPicker, { [h.loadingOverlay]: C }),
                            onSelectGIF: j,
                            hideFavorites: !0
                        }),
                        C && (0, o.jsx)(l.Spinner, { className: h.spinner })
                    ]
                }),
                x &&
                    Z &&
                    (0, o.jsx)(g.Z, {
                        uploadType: m,
                        showUpsell: !0,
                        className: h.nitroUpsell
                    })
            ]
        })
    });
}
