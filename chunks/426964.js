var r = n(735250),
    i = n(470079),
    a = n(704215),
    s = n(481060),
    o = n(442837),
    l = n(100527),
    u = n(231467),
    c = n(605236),
    d = n(246364),
    _ = n(937111),
    E = n(741606),
    f = n(703656),
    h = n(314897),
    p = n(271383),
    I = n(594174),
    m = n(63063),
    T = n(970606),
    S = n(963202),
    g = n(645896),
    A = n(905362),
    N = n(353093),
    O = n(954138),
    R = n(169559),
    v = n(284019),
    C = n(308083),
    y = n(981631),
    L = n(689938),
    D = n(931797);
function b(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t;
    let { clan: n, isLoading: M, onClose: P, profileViewedAnalytics: U } = e,
        w = null == n ? void 0 : n.identityGuildId,
        x = (0, g.Cc)(null != w ? w : null),
        G = null == n ? void 0 : n.tag,
        k = (0, R.Z)('clan_guild_profile'),
        B = (0, O.Z)('base_clan_tag_chiplet'),
        F = (0, o.e7)([h.default], () => h.default.getId()),
        V = (0, o.e7)([p.ZP], () => (null != w ? p.ZP.getMember(w, F) : null), [w, F]),
        H = (0, o.e7)([_.Z], () => {
            var e;
            return (null == x ? void 0 : x.id) != null && (null === (e = _.Z.getRequest(x.id)) || void 0 === e ? void 0 : e.applicationStatus) === d.wB.SUBMITTED;
        }),
        Z = null != x && x.memberCount >= C.Du,
        Y = (0, c.wE)(a.z.CLAN_TAG_WAITLIST),
        j = (0, o.e7)([I.default], () => I.default.getUser(F), [F]),
        W = (null == V ? void 0 : V.joinedAt) != null,
        K = (0, N.Z4)(w, null == j ? void 0 : j.clan),
        z = null != (0, E.Z)(w),
        q = (0, S.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != w &&
            (0, T.u0)({
                guildId: w,
                hasJoinRequest: z,
                ...U,
                location: l.Z.CLAN_GUILD_PROFILE
            });
    }, [w, z, U]);
    let Q = i.useCallback(() => {
            if (!Y)
                (0, T.pl)({
                    originGuildId: null == U ? void 0 : U.guildId,
                    tagGuildId: w,
                    messageId: null == U ? void 0 : U.messageId,
                    tagUserId: null == U ? void 0 : U.tagUserId,
                    location: l.Z.CLAN_GUILD_PROFILE
                }),
                    (0, s.showToast)((0, s.createToast)(L.Z.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, s.ToastType.SUCCESS));
        }, [w, Y, U]),
        X = i.useCallback(
            (e) => {
                if (null != w) e.stopPropagation(), e.preventDefault(), null == P || P(), (0, A.SJ)(w);
            },
            [w, P]
        ),
        $ = i.useCallback(
            (e) => {
                if (null == x || null == w) return;
                if ((e.stopPropagation(), e.preventDefault(), null == P || P(), !z))
                    (0, A.qF)(w, x, {
                        source: null == U ? void 0 : U.source,
                        messageId: null == U ? void 0 : U.messageId,
                        tagUserId: null == U ? void 0 : U.tagUserId,
                        location: l.Z.CLAN_GUILD_PROFILE
                    });
            },
            [x, w, z, P, U]
        ),
        J = i.useCallback(() => {
            open(m.Z.getArticleURL(y.BhN.CLANS_FAQ));
        }, []),
        ee = i.useCallback(() => {
            if (null != w) (0, f.uL)(y.Z5c.GUILD_MEMBER_VERIFICATION(w));
        }, [w]),
        et = i.useCallback(() => {
            if (null != w) (0, f.XU)(w);
        }, [w]),
        en = i.useMemo(() => {
            var e, t;
            return {
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.SMALL,
                fullWidth: !0,
                className: D.button,
                themeColor: null !== (t = null == x ? void 0 : null === (e = x.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == x ? void 0 : null === (t = x.branding) || void 0 === t ? void 0 : t.primaryColor]),
        er = i.useMemo(() => {
            switch (!0) {
                case !B:
                    return null;
                case !W && !k && !Y:
                    return (0, r.jsx)(s.Button, {
                        onClick: Q,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: L.Z.Messages.CLAN_USER_WAITLIST_CTA
                    });
                case !W && !k && Y:
                    return (0, r.jsxs)(s.Button, {
                        innerClassName: D.waitlistedButton,
                        onClick: J,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: [
                            L.Z.Messages.CLAN_USER_WAITLISTED,
                            (0, r.jsx)(s.CircleInformationIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    });
                case !W && z:
                    return (0, r.jsx)(v.Z, {
                        onClick: ee,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !W && q:
                    return (0, r.jsx)(v.Z, {
                        onClick: $,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case W && !K:
                    return (0, r.jsx)(v.Z, {
                        onClick: X,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                case W && K:
                    return (0, r.jsx)(v.Z, {
                        onClick: et,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
                    });
                default:
                    return null;
            }
        }, [B, W, k, Y, z, q, K, Q, J, ee, en, $, X, et]),
        ei = i.useMemo(
            () => ({
                className: D.container,
                onClick: b
            }),
            []
        );
    return null == G || null == x || null == w || M
        ? (0, r.jsx)('div', {
              ...ei,
              children: (0, r.jsx)(s.Spinner, {})
          })
        : (0, r.jsxs)('div', {
              ...ei,
              children: [
                  (0, r.jsx)(u.xV, {
                      clan: x,
                      className: D.cardContainer,
                      isMember: W,
                      hasPendingJoinRequest: H,
                      atMaxMemberCapacity: Z
                  }),
                  null != er &&
                      (0, r.jsx)('div', {
                          className: D.buttonContainer,
                          children: er
                      })
              ]
          });
});
