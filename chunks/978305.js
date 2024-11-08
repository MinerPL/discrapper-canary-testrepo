o.r(s), o(47120);
var r = o(735250),
    t = o(470079),
    n = o(120356),
    i = o.n(n),
    a = o(512722),
    c = o.n(a),
    l = o(481060),
    d = o(198993),
    C = o(626135),
    _ = o(985002),
    u = o(880257),
    f = o(631885),
    m = o(292352),
    E = o(981631),
    b = o(689938),
    x = o(764574),
    N = o(224499);
s.default = (e) => {
    let { transitionState: s, onClose: o } = e,
        n = (0, u.Z)(),
        [a, h] = t.useState(!1),
        { getLinkCode: R, isGetLinkCodeLoading: p } = (0, _.G)({}),
        I = (0, f.rW)(),
        g = (0, f.gU)(),
        M = t.useRef(g);
    c()(!n, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let O = () => {
        h((e) => (C.default.track(E.rMx.FAMILY_CENTER_ACTION, { action: a ? m.YC.HideQRCode : m.YC.RevealQRCode }), !e)),
            !a &&
                setTimeout(() => {
                    o();
                }, m.f2);
    };
    t.useEffect(() => {
        R();
    }, []),
        t.useEffect(() => {
            g > M.current && o();
        }, [M, g, o]);
    let v = a && !p && null != I;
    return (0, r.jsxs)(l.ModalRoot, {
        className: x.modalRoot,
        transitionState: s,
        children: [
            (0, r.jsxs)(l.Notice, {
                className: x.notice,
                color: l.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(l.CircleInformationIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: x.infoIcon
                    }),
                    b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE
                ]
            }),
            (0, r.jsxs)(l.ModalContent, {
                className: x.content,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: N.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER
                    }),
                    (0, r.jsx)(l.Text, {
                        className: N.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format({ link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, r.jsx)('div', {
                        className: x.qrCode,
                        children: (0, r.jsx)(l.Clickable, {
                            className: i()(x.qrCodeObscure, { [x.visible]: v }),
                            onClick: O,
                            children: (0, r.jsx)(d.c2, {
                                size: 272,
                                text: v ? I : m.vH,
                                overlaySize: d.cK.SIZE_60
                            })
                        })
                    }),
                    (0, r.jsx)(l.Text, {
                        className: x.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER
                    }),
                    (0, r.jsxs)('div', {
                        className: i()(x.buttonContainer, N.marginTop20),
                        children: [
                            (0, r.jsx)(l.Button, {
                                className: N.marginBottom8,
                                grow: !0,
                                size: l.Button.Sizes.LARGE,
                                onClick: O,
                                submitting: a && p,
                                children: a ? b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE : b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW
                            }),
                            (0, r.jsx)(l.Button, {
                                grow: !0,
                                color: l.Button.Colors.PRIMARY,
                                onClick: o,
                                children: b.Z.Messages.CLOSE
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
