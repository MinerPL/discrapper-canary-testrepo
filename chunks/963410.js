n.r(t), n.d(t, {
    default: function () {
        return N;
    }
}), n(642549);
var r = n(735250), o = n(470079), i = n(442837), l = n(481060), u = n(377171), a = n(592125), c = n(594174), s = n(153124), d = n(5192), E = n(571826), f = n(630759), _ = n(210975), I = n(436055), C = n(785792), h = n(190054), S = n(760373), g = n(981631), Z = n(689938), M = n(963779);
function N(e) {
    let {
            transitionState: t,
            userId: n,
            channelId: N,
            onClose: m
        } = e, R = (0, s.Dt)(), T = (0, i.e7)([c.default], () => c.default.getUser(n)), D = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(N)) || void 0 === e ? void 0 : e.getGuildId();
        }), x = d.ZP.useName(D, null, T), O = btoa('12345'.repeat(12)), A = (0, I.E)({
            codeBase64: btoa('12345'.repeat(12)),
            chunkSize: S.iQ,
            desiredLength: S.KN
        }), v = o.useCallback(() => {
            (0, f.TQ)(n, O, N, g.Sbl.E2EE_USER_VERIFY_MODAL), m();
        }, [
            n,
            O,
            N,
            m
        ]), p = o.useCallback(() => {
            (0, f.KF)(n, O), m();
        }, [
            m,
            O,
            n
        ]), b = o.useCallback(() => {
            (0, E.s$)({
                userId: n,
                channelId: N
            });
        }, [
            N,
            n
        ]), V = (0, _.wV)({
            userId: n,
            channelId: N,
            location: 'WebSecureFramesUserVerificationModal'
        });
    return o.useEffect(() => {
        (0, E.Rq)({
            userId: n,
            channelId: N
        });
    }, [
        N,
        n
    ]), (0, r.jsxs)(l.ModalRoot, {
        transitionState: t,
        'aria-labelledby': R,
        children: [
            (0, r.jsx)('div', {
                className: M.shieldIconContainer,
                children: (0, r.jsx)('div', {
                    className: M.shieldIcon,
                    children: (0, r.jsx)(l.ShieldLockIcon, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: l.tokens.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, r.jsxs)(l.ModalContent, {
                className: M.content,
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: M.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: Z.Z.Messages.E2EE_VERIFICATION_CODE
                    }),
                    (0, r.jsx)(l.Text, {
                        className: M.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: Z.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: x })
                    }),
                    (0, r.jsxs)('div', {
                        className: M.verification,
                        children: [
                            (0, r.jsxs)('div', {
                                className: M.header,
                                children: [
                                    (0, r.jsx)(l.Heading, {
                                        variant: 'text-sm/bold',
                                        color: 'header-primary',
                                        children: Z.Z.Messages.E2EE_VOICE_PRIVACY_CODE
                                    }),
                                    null != A && (0, r.jsx)(h.H, {
                                        className: M.copyIcon,
                                        chunks: A,
                                        color: l.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: b
                                    }),
                                    (0, r.jsx)(l.TextBadge, {
                                        text: Z.Z.Messages.NEW,
                                        color: u.Z.STATUS_DANGER
                                    })
                                ]
                            }),
                            null != A && (0, r.jsx)(C.b, {
                                className: M.code,
                                chunks: A,
                                columns: S.ak
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Text, {
                        className: M.details,
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: Z.Z.Messages.E2EE_USER_VERIFICATION_FOOTER_TEXT.format({ helpArticle: S.l4 })
                    }),
                    (0, r.jsx)(l.Button, {
                        fullWidth: !0,
                        className: M.verifiedButton,
                        color: V ? l.ButtonColors.RED : l.ButtonColors.BRAND,
                        size: l.ButtonSizes.MEDIUM,
                        look: l.ButtonLooks.FILLED,
                        onClick: V ? p : v,
                        children: V ? Z.Z.Messages.E2EE_CLEAR_VERIFICATION : Z.Z.Messages.E2EE_MARK_AS_VERIFIED
                    }),
                    (0, r.jsx)(l.Button, {
                        fullWidth: !0,
                        color: l.ButtonColors.PRIMARY,
                        size: l.ButtonSizes.MEDIUM,
                        look: l.ButtonLooks.FILLED,
                        onClick: m,
                        children: Z.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
