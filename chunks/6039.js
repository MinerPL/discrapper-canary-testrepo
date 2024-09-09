n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(568154),
    o = n(703656),
    c = n(430824),
    d = n(449934),
    u = n(768581),
    _ = n(693546),
    E = n(863249),
    h = n(944163),
    m = n(246364),
    I = n(937111),
    g = n(523924),
    p = n(390500),
    T = n(200305),
    S = n(981631),
    C = n(898625),
    f = n(689938),
    N = n(491808);
t.Z = (e) => {
    var t;
    let n, A;
    let { guildId: v, inviteCode: L } = e,
        [Z, R] = a.useState(C.hO.INITIAL),
        O = (0, s.e7)([h.Z], () => h.Z.get(v)),
        x = (0, s.e7)([I.Z], () => I.Z.getRequest(v)),
        b = (0, s.e7)([c.Z], () => c.Z.getGuild(v)),
        { hasFetchedRequestToJoinGuilds: P, guildPreviewDisabled: M } = (0, s.cj)([I.Z], () => ({
            hasFetchedRequestToJoinGuilds: I.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: I.Z.getJoinRequestGuild(v)
        }));
    a.useEffect(() => {
        null != b && (0, o.uL)(S.Z5c.CHANNEL(v));
    }, [b, v]),
        a.useEffect(() => {
            !P && _.Z.fetchRequestToJoinGuilds();
        }, [P]);
    let D = a.useCallback((e) => {
            R((t) => Math.max(t, e));
        }, []),
        y = async (e) => {
            await E.ZP.submitVerificationForm(v, e);
        },
        j = () => {
            _.Z.resetGuildJoinRequest(v);
        };
    let U =
            ((n = f.Z.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({ name: null == M ? void 0 : M.toString() })),
            (A = () => {
                R(Math.max(Z, C.hO.FILLING)), _.Z.removeGuildJoinRequest(v), (0, o.uL)(S.Z5c.ME);
            }),
            () => {
                (0, r.openModal)((e) =>
                    (0, i.jsx)(r.ConfirmModal, {
                        header: f.Z.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
                        cancelText: f.Z.Messages.NEVERMIND,
                        onConfirm: A,
                        confirmText: f.Z.Messages.YES_TEXT,
                        confirmButtonColor: r.Button.Colors.RED,
                        ...e,
                        children: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: n
                        })
                    })
                );
            }),
        G =
            (null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.splash) != null
                ? u.ZP.getGuildSplashURL({
                      id: O.guild.id,
                      splash: O.guild.splash
                  })
                : (0, d.gK)();
    return (0, i.jsx)('div', {
        className: N.page,
        children: (0, i.jsxs)(l.Z, {
            embedded: !0,
            splash: G,
            waveState: Z,
            showLogo: !1,
            updateWaveState: D,
            children: [
                (0, i.jsx)('div', { className: N.dragRegion }),
                (0, i.jsx)('div', {
                    className: N.contentWrapper,
                    children: (() => {
                        switch (null == x ? void 0 : x.applicationStatus) {
                            case m.wB.SUBMITTED:
                                return (0, i.jsx)(p.Z, {
                                    onWithdrawApplication: U,
                                    guild: M
                                });
                            case m.wB.REJECTED:
                                return (0, i.jsx)(g.Z, {
                                    reapplyText: f.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                                    onReapply: j,
                                    confirmText: f.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                                    onWithdrawApplication: U,
                                    rejectionReason: null == x ? void 0 : x.rejectionReason,
                                    guild: M
                                });
                            default:
                                return (0, i.jsx)(T.Z, {
                                    guildId: v,
                                    inviteCode: L,
                                    onComplete: y,
                                    disableVerification: !0
                                });
                        }
                    })()
                })
            ]
        })
    });
};
