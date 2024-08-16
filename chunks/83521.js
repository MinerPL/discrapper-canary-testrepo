l.r(a),
    l.d(a, {
        default: function () {
            return h;
        }
    }),
    l(47120);
var n = l(735250),
    s = l(470079),
    i = l(481060),
    o = l(442837),
    t = l(410030),
    r = l(430824),
    d = l(594174),
    c = l(931240),
    u = l(645896),
    _ = l(603368),
    m = l(353093),
    v = l(114487),
    x = l(380365),
    C = l(981631),
    g = l(921944),
    A = l(689938),
    N = l(634018);
function h(e) {
    var a, l;
    let { guildId: h, transitionState: S, onClose: T } = e,
        f = (0, o.e7)([r.Z], () => r.Z.getGuild(h), [h]),
        L = (0, u.Cc)(null != h ? h : null),
        M = (0, o.e7)([d.default], () => d.default.getCurrentUser(), []),
        [E, j] = s.useState(!0),
        D = (0, t.ZP)(),
        I = s.useCallback(async () => {
            E && (await (0, c.nE)(h, !0, C.Sbl.CLAN_ADOPT_IDENTITY_MODAL)), T(g.L.PRIMARY);
        }, [E, T, h]),
        p = s.useCallback(() => {
            T(g.L.DISMISS);
        }, [T]);
    s.useEffect(() => ((null == f || null == M) && T(g.L.AUTO_DISMISS), () => {}), [M, f, h, T]);
    let Z = (0, _.nP)(null == L ? void 0 : null === (a = L.branding) || void 0 === a ? void 0 : a.primaryColor, [i.tokens.colors.BG_BRAND, 0.7]),
        k = i.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: D,
            saturation: 1
        }).hex(),
        P = (0, _.nj)(Z, k, 'top center'),
        b = (0, _.nP)(null == L ? void 0 : null === (l = L.branding) || void 0 === l ? void 0 : l.primaryColor, [i.tokens.colors.BG_BRAND, 1]),
        O = (0, _.$0)(Z).hex(),
        R = (0, m.Zp)(f, null == M ? void 0 : M.clan);
    if (null == f || null == M) return null;
    let U = R ? A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_HEADING.format({ guildName: f.name }) : A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({ guildName: f.name }),
        G = R ? A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_DESCRIPTION.format({ guildName: f.name }) : A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({ guildName: f.name }),
        w = A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA;
    return (0, n.jsxs)(i.ModalRoot, {
        transitionState: S,
        size: i.ModalSize.SMALL,
        className: N.modal,
        children: [
            (0, n.jsx)(i.ModalContent, {
                style: P,
                children: (0, n.jsxs)('div', {
                    className: N.mainContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: N.infoContainer,
                            children: [
                                (0, n.jsx)(v.Z, {
                                    guild: f,
                                    iconSize: 64
                                }),
                                (0, n.jsxs)('div', {
                                    className: N.headerTextContainer,
                                    children: [
                                        (0, n.jsx)(i.Heading, {
                                            variant: 'heading-xl/normal',
                                            color: 'header-primary',
                                            children: U
                                        }),
                                        (0, n.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            children: G
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(x.Z, {
                            guildId: h,
                            isTagAdopted: E,
                            onChangeUseTag: j
                        })
                    ]
                })
            }),
            (0, n.jsxs)(i.ModalFooter, {
                className: N.modalFooter,
                children: [
                    (0, n.jsx)(i.Button, {
                        onClick: I,
                        color: i.Button.Colors.CUSTOM,
                        look: i.Button.Looks.FILLED,
                        style: {
                            backgroundColor: b,
                            color: O
                        },
                        children: w
                    }),
                    (0, n.jsx)(i.Button, {
                        onClick: p,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        children: A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
                    })
                ]
            })
        ]
    });
}
