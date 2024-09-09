n.d(t, {
    x: function () {
        return P;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(477690),
    u = n(481060),
    c = n(420660),
    d = n(385499),
    _ = n(693728),
    E = n(750881),
    f = n(979264),
    h = n(554300),
    p = n(33934),
    I = n(736144),
    m = n(113434),
    T = n(918701),
    S = n(553393),
    g = n(518950),
    A = n(699516),
    N = n(594174),
    O = n(709586),
    R = n(624138),
    v = n(51144),
    C = n(788307),
    y = n(981631),
    L = n(674563),
    D = n(524484),
    b = n(689938),
    M = n(410740);
let P = (0, R.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function (e) {
    var t;
    let { selected: n = !1, colorString: a, colorRoleName: l, isOwner: R, ownerTooltipText: P, lostPermissionTooltipText: U, isTyping: w = !1, nick: x, user: G, currentUser: k, activities: B, applicationStream: F, status: V, shouldAnimateStatus: H = !1, isMobile: Z, premiumSince: Y, channel: j, guildId: W, className: K, onMouseDown: z, onKeyDown: q, onClick: Q, onContextMenu: X, onClickPremiumGuildIcon: $, onFocus: J, 'aria-controls': ee, 'aria-expanded': et, 'aria-posinset': en, 'aria-setsize': er, id: ei, tabIndex: ea, itemProps: es } = e,
        eo = null == G ? void 0 : G.id,
        el = v.ZP.useName(G),
        eu = (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eo,
        ec = i.useRef(null),
        [ed, e_] = i.useState(!1),
        [eE, ef] = i.useState(null),
        {
            avatarDecorationSrc: eh,
            avatarSrc: ep,
            eventHandlers: eI
        } = (0, g.Z)({
            user: G,
            size: u.AvatarSizes.SIZE_32,
            animateOnHover: !(n || ed),
            guildId: W
        }),
        em = i.useMemo(
            () => ({
                source: y.jXE.MEMBER_LIST,
                tagUserId: eo
            }),
            [eo]
        ),
        eT = (0, o.e7)([A.Z], () => A.Z.isBlocked(eo)),
        eS = (0, E.aK)('member_list_item'),
        [eg, eA] = i.useState(!1);
    i.useEffect(() => {
        n && eA(!1);
    }, [n]);
    let eN = (0, m.Fr)(B),
        eO = null != eN && !eu && n && !eg && (0, T.dl)(eN),
        eR = () => {
            e_(!0);
        },
        ev = () => {
            e_(!1);
        },
        eC = (e) => {
            ef(e);
        },
        ey = () => {
            if (eT && eS) return null;
            let e = null != B ? B.find((e) => e.type === y.IIU.CUSTOM_STATUS) : null,
                t = null != e && null != G && (0, p.Z)(e, G, j);
            return (0, r.jsx)(C.Z, {
                className: M.activity,
                textClassName: M.activityText,
                emojiClassName: M.activityEmoji,
                activities: B,
                applicationStream: F,
                animate: ed,
                hideEmoji: !t,
                hideTooltip: !0,
                user: G,
                hasQuest: null != eN && (0, T.dl)(eN)
            });
        },
        eL = () =>
            null != R && R && null == U
                ? (0, r.jsx)(u.Tooltip, {
                      text: null != P ? P : b.Z.Messages.GUILD_OWNER,
                      children: (e) =>
                          (0, r.jsx)(u.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: M.ownerIcon
                          })
                  })
                : null,
        eD = () =>
            null == Y
                ? null
                : (0, r.jsx)(u.Tooltip, {
                      text: b.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: Y }),
                      children: (e) =>
                          (0, r.jsx)(u.Clickable, {
                              onClick: $,
                              tabIndex: -1,
                              children: (0, r.jsx)(O.Z, {
                                  ...e,
                                  className: M.premiumIcon
                              })
                          })
                  }),
        eb = () => {
            let e = (null == G ? void 0 : G.isClyde()) ? L.Hb.AI : L.Hb.BOT;
            return null != G && G.bot
                ? (0, r.jsx)(d.Z, {
                      className: M.botTag,
                      type: e,
                      verified: G.isVerifiedBot()
                  })
                : null;
        },
        eM = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [eb(), eL(), eD()]
            }),
        eP = (e, t) => {
            let n = H ? u.AnimatedAvatar : u.Avatar,
                i = (0, c.Z)(B) ? y.Skl.STREAMING : V;
            return (
                (i = t ? void 0 : i),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n, {
                            ...eI,
                            size: u.AvatarSizes.SIZE_32,
                            src: ep,
                            isMobile: Z,
                            isTyping: w,
                            status: i,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: eh,
                            typingIndicatorRef: eC
                        }),
                        (0, r.jsx)(I.Z, {
                            confettiSpawnRef: eE,
                            shouldFire: w && null != k && e.id !== k.id,
                            confettiLocation: D.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        eU = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.NameWithRole, {
                        roleName: l,
                        color: null != a ? a : void 0,
                        name: null != x ? x : el,
                        className: M.name
                    }),
                    (0, r.jsx)(f.ZP, {
                        clan: null == G ? void 0 : G.clan,
                        userId: null == G ? void 0 : G.id,
                        contextGuildId: W,
                        disableGuildProfile: !0,
                        className: M.clanTag,
                        profileViewedAnalytics: em
                    })
                ]
            }),
        ew = V === y.Skl.OFFLINE;
    return null == G
        ? (0, r.jsx)(_.Z, {
              avatarSize: u.AvatarSizes.SIZE_32,
              className: M.placeholder
          })
        : (0, r.jsx)(u.Popout, {
              renderPopout: (e) =>
                  (0, r.jsx)(S.Z, {
                      quest: eN,
                      memberListItemRef: ec,
                      applicationStream: F,
                      ...e,
                      closePopout: () => eA(!0)
                  }),
              position: 'bottom',
              shouldShow: eO,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: u.Popout.Animation.NONE,
              spacing: -3,
              children: () =>
                  (0, r.jsx)(h.Z, {
                      ref: ec,
                      selected: n,
                      className: s()(M.member, K, { [M.offline]: ew && !n }),
                      innerClassName: M.memberInner,
                      onClick: Q,
                      onKeyDown: q,
                      onMouseDown: z,
                      onContextMenu: X,
                      onMouseEnter: eR,
                      onMouseLeave: ev,
                      name:
                          null == U
                              ? (0, r.jsx)('span', {
                                    className: M.username,
                                    children: eU()
                                })
                              : (0, r.jsx)(u.Tooltip, {
                                    text: U,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            className: s()(M.username, M.lostPermission),
                                            children: eU()
                                        })
                                }),
                      avatar: eP(G, ew),
                      subText: ey(),
                      decorators: eM(),
                      'aria-controls': ee,
                      'aria-expanded': et,
                      'aria-setsize': er,
                      'aria-posinset': en,
                      id: ei,
                      tabIndex: ea,
                      onFocus: J,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...es
                  })
          });
};
