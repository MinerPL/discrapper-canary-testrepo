n(47120);
var i = n(735250), s = n(470079), a = n(442837), r = n(481060), l = n(568154), o = n(703656), c = n(430824), d = n(449934), u = n(768581), _ = n(693546), E = n(863249), h = n(944163), I = n(246364), m = n(937111), p = n(523924), g = n(390500), T = n(200305), S = n(981631), C = n(898625), N = n(689938), f = n(436726);
t.Z = e => {
    var t;
    let n, A;
    let {
            guildId: Z,
            inviteCode: L
        } = e, [v, O] = s.useState(C.hO.INITIAL), R = (0, a.e7)([h.Z], () => h.Z.get(Z)), x = (0, a.e7)([m.Z], () => m.Z.getRequest(Z)), P = (0, a.e7)([c.Z], () => c.Z.getGuild(Z)), {
            hasFetchedRequestToJoinGuilds: b,
            guildPreviewDisabled: M
        } = (0, a.cj)([m.Z], () => ({
            hasFetchedRequestToJoinGuilds: m.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: m.Z.getJoinRequestGuild(Z)
        }));
    s.useEffect(() => {
        null != P && (0, o.uL)(S.Z5c.CHANNEL(Z));
    }, [
        P,
        Z
    ]), s.useEffect(() => {
        !b && _.Z.fetchRequestToJoinGuilds();
    }, [b]);
    let D = s.useCallback(e => {
            O(t => Math.max(t, e));
        }, []), y = async e => {
            await E.Z.submitVerificationForm(Z, e);
        }, j = () => {
            _.Z.resetGuildJoinRequest(Z);
        };
    let U = (n = N.Z.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({ name: null == M ? void 0 : M.toString() }), A = () => {
            O(Math.max(v, C.hO.FILLING)), _.Z.removeGuildJoinRequest(Z), (0, o.uL)(S.Z5c.ME);
        }, () => {
            (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
                header: N.Z.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
                cancelText: N.Z.Messages.NEVERMIND,
                onConfirm: A,
                confirmText: N.Z.Messages.YES_TEXT,
                confirmButtonColor: r.Button.Colors.RED,
                ...e,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: n
                })
            }));
        }), G = (null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.splash) != null ? u.ZP.getGuildSplashURL({
            id: R.guild.id,
            splash: R.guild.splash
        }) : (0, d.gK)();
    return (0, i.jsx)('div', {
        className: f.page,
        children: (0, i.jsxs)(l.Z, {
            embedded: !0,
            splash: G,
            waveState: v,
            showLogo: !1,
            updateWaveState: D,
            children: [
                (0, i.jsx)('div', { className: f.dragRegion }),
                (0, i.jsx)('div', {
                    className: f.contentWrapper,
                    children: (() => {
                        switch (null == x ? void 0 : x.applicationStatus) {
                        case I.wB.SUBMITTED:
                            return (0, i.jsx)(g.Z, {
                                onWithdrawApplication: U,
                                guild: M
                            });
                        case I.wB.REJECTED:
                            return (0, i.jsx)(p.Z, {
                                reapplyText: N.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                                onReapply: j,
                                confirmText: N.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                                onWithdrawApplication: U,
                                rejectionReason: null == x ? void 0 : x.rejectionReason,
                                guild: M
                            });
                        default:
                            return (0, i.jsx)(T.Z, {
                                guildId: Z,
                                inviteCode: L,
                                onComplete: y
                            });
                        }
                    })()
                })
            ]
        })
    });
};
