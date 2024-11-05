n.d(t, {
    x: function () {
        return D;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(420660),
    c = n(385499),
    d = n(693728),
    f = n(979264),
    _ = n(554300),
    h = n(558602),
    p = n(736144),
    m = n(113434),
    g = n(918701),
    E = n(553393),
    v = n(518950),
    I = n(594174),
    S = n(709586),
    T = n(624138),
    b = n(51144),
    y = n(788307),
    A = n(981631),
    N = n(674563),
    C = n(524484),
    R = n(388032),
    O = n(226686);
let D = (0, T.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function (e) {
    var t;
    let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: T, ownerTooltipText: D, lostPermissionTooltipText: L, isTyping: x = !1, nick: w, user: M, currentUser: P, activities: k, applicationStream: U, status: G, shouldAnimateStatus: B = !1, isMobile: Z, premiumSince: F, channel: V, guildId: j, className: H, onMouseDown: Y, onKeyDown: W, onClick: K, onContextMenu: z, onClickPremiumGuildIcon: q, onFocus: Q, 'aria-controls': X, 'aria-expanded': J, 'aria-posinset': $, 'aria-setsize': ee, id: et, tabIndex: en, itemProps: er } = e,
        ei = null == M ? void 0 : M.id,
        ea = b.ZP.useName(M),
        es = (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ei,
        eo = i.useRef(null),
        [el, eu] = i.useState(!1),
        [ec, ed] = i.useState(null),
        {
            avatarDecorationSrc: ef,
            avatarSrc: e_,
            eventHandlers: eh
        } = (0, v.Z)({
            user: M,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || el),
            guildId: j
        }),
        ep = i.useMemo(
            () => ({
                source: A.jXE.MEMBER_LIST,
                tagUserId: ei
            }),
            [ei]
        ),
        [em, eg] = i.useState(!1);
    i.useEffect(() => {
        n && eg(!1);
    }, [n]);
    let eE = (0, m.Fr)(k),
        ev = null != eE && !es && n && !em && (0, g.dl)(eE),
        eI = () => {
            eu(!0);
        },
        eS = () => {
            eu(!1);
        },
        eT = (e) => {
            ed(e);
        },
        eb = () => {
            let e = null != k ? k.find((e) => e.type === A.IIU.CUSTOM_STATUS) : null,
                t = null != e && null != M && (0, h.Z)(e, M, V);
            return (0, r.jsx)(y.ZP, {
                className: O.activity,
                textClassName: O.activityText,
                emojiClassName: O.activityEmoji,
                activities: k,
                applicationStream: U,
                animate: el,
                hideEmoji: !t,
                hideTooltip: !0,
                user: M,
                hasQuest: null != eE && (0, g.dl)(eE)
            });
        },
        ey = () =>
            null != T && T && null == L
                ? (0, r.jsx)(l.Tooltip, {
                      text: null != D ? D : R.intl.string(R.t.pclUFB),
                      children: (e) =>
                          (0, r.jsx)(l.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: O.ownerIcon
                          })
                  })
                : null,
        eA = () =>
            null == F
                ? null
                : (0, r.jsx)(l.Tooltip, {
                      text: R.intl.formatToPlainString(R.t.IWkAq6, { date: F }),
                      children: (e) =>
                          (0, r.jsx)(l.Clickable, {
                              onClick: q,
                              tabIndex: -1,
                              children: (0, r.jsx)(S.Z, {
                                  ...e,
                                  className: O.premiumIcon
                              })
                          })
                  }),
        eN = () => {
            let e = (null == M ? void 0 : M.isClyde()) ? N.Hb.AI : N.Hb.BOT;
            return null != M && M.bot
                ? (0, r.jsx)(c.Z, {
                      className: O.botTag,
                      type: e,
                      verified: M.isVerifiedBot()
                  })
                : null;
        },
        eC = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [eN(), ey(), eA()]
            }),
        eR = (e, t) => {
            let n = B ? l.AnimatedAvatar : l.Avatar,
                i = (0, u.Z)(k) ? A.Skl.STREAMING : G;
            return (
                (i = t ? void 0 : i),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n, {
                            ...eh,
                            size: l.AvatarSizes.SIZE_32,
                            src: e_,
                            isMobile: Z,
                            isTyping: x,
                            status: i,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: ef,
                            typingIndicatorRef: eT
                        }),
                        (0, r.jsx)(p.Z, {
                            confettiSpawnRef: ec,
                            shouldFire: x && null != P && e.id !== P.id,
                            confettiLocation: C.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        eO = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.NameWithRole, {
                        roleName: o,
                        color: null != a ? a : void 0,
                        name: null != w ? w : ea,
                        className: O.name
                    }),
                    (0, r.jsx)(f.ZP, {
                        clan: null == M ? void 0 : M.clan,
                        userId: null == M ? void 0 : M.id,
                        contextGuildId: j,
                        disableGuildProfile: !0,
                        className: O.clanTag,
                        profileViewedAnalytics: ep
                    })
                ]
            }),
        eD = G === A.Skl.OFFLINE;
    return null == M
        ? (0, r.jsx)(d.Z, {
              avatarSize: l.AvatarSizes.SIZE_32,
              className: O.placeholder
          })
        : (0, r.jsx)(l.Popout, {
              renderPopout: (e) =>
                  (0, r.jsx)(E.Z, {
                      quest: eE,
                      memberListItemRef: eo,
                      applicationStream: U,
                      ...e,
                      closePopout: () => eg(!0)
                  }),
              position: 'bottom',
              shouldShow: ev,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: l.Popout.Animation.NONE,
              spacing: -3,
              children: () =>
                  (0, r.jsx)(_.Z, {
                      ref: eo,
                      selected: n,
                      className: s()(O.member, H, { [O.offline]: eD && !n }),
                      innerClassName: O.memberInner,
                      onClick: K,
                      onKeyDown: W,
                      onMouseDown: Y,
                      onContextMenu: z,
                      onMouseEnter: eI,
                      onMouseLeave: eS,
                      name:
                          null == L
                              ? (0, r.jsx)('span', {
                                    className: O.username,
                                    children: eO()
                                })
                              : (0, r.jsx)(l.Tooltip, {
                                    text: L,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            className: s()(O.username, O.lostPermission),
                                            children: eO()
                                        })
                                }),
                      avatar: eR(M, eD),
                      subText: eb(),
                      decorators: eC(),
                      'aria-controls': X,
                      'aria-expanded': J,
                      'aria-setsize': ee,
                      'aria-posinset': $,
                      id: et,
                      tabIndex: en,
                      onFocus: Q,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...er
                  })
          });
};
