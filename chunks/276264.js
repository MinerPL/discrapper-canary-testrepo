n.d(t, {
    x: function () {
        return L;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(420660),
    c = n(385499),
    d = n(693728),
    _ = n(979264),
    E = n(554300),
    f = n(33934),
    h = n(736144),
    p = n(113434),
    m = n(918701),
    I = n(553393),
    T = n(204197),
    g = n(594174),
    S = n(709586),
    A = n(624138),
    N = n(51144),
    v = n(788307),
    O = n(981631),
    R = n(674563),
    C = n(524484),
    y = n(689938),
    D = n(410740);
let L = (0, A.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function (e) {
    var t;
    let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: A, ownerTooltipText: L, lostPermissionTooltipText: b, isTyping: M = !1, nick: P, user: U, currentUser: w, activities: x, applicationStream: G, status: k, shouldAnimateStatus: B = !1, isMobile: F, premiumSince: V, channel: H, guildId: Z, className: Y, onMouseDown: j, onKeyDown: W, onClick: K, onContextMenu: z, onClickPremiumGuildIcon: q, onFocus: Q, 'aria-controls': X, 'aria-expanded': $, 'aria-posinset': J, 'aria-setsize': ee, id: et, tabIndex: en, itemProps: er } = e,
        ei = null == U ? void 0 : U.id,
        ea = N.ZP.useName(U),
        es = (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ei,
        eo = i.useRef(null),
        [el, eu] = i.useState(!1),
        [ec, ed] = i.useState(null),
        {
            avatarDecorationSrc: e_,
            avatarSrc: eE,
            eventHandlers: ef
        } = (0, T.Z)({
            user: U,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || el),
            guildId: Z
        }),
        eh = i.useMemo(
            () => ({
                source: O.jXE.MEMBER_LIST,
                tagUserId: ei
            }),
            [ei]
        ),
        [ep, em] = i.useState(!1);
    i.useEffect(() => {
        n && em(!1);
    }, [n]);
    let eI = (0, p.Fr)(x),
        eT = null != eI && !es && n && !ep && (0, m.dl)(eI),
        eg = () => {
            eu(!0);
        },
        eS = () => {
            eu(!1);
        },
        eA = (e) => {
            ed(e);
        },
        eN = () => {
            let e = null != x ? x.find((e) => e.type === O.IIU.CUSTOM_STATUS) : null,
                t = null != e && null != U && (0, f.Z)(e, U, H);
            return (0, r.jsx)(v.Z, {
                className: D.activity,
                textClassName: D.activityText,
                emojiClassName: D.activityEmoji,
                activities: x,
                applicationStream: G,
                animate: el,
                hideEmoji: !t,
                hideTooltip: !0,
                user: U,
                hasQuest: null != eI && (0, m.dl)(eI)
            });
        },
        ev = () =>
            null != A && A && null == b
                ? (0, r.jsx)(l.Tooltip, {
                      text: null != L ? L : y.Z.Messages.GUILD_OWNER,
                      children: (e) =>
                          (0, r.jsx)(l.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: D.ownerIcon
                          })
                  })
                : null,
        eO = () =>
            null == V
                ? null
                : (0, r.jsx)(l.Tooltip, {
                      text: y.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: V }),
                      children: (e) =>
                          (0, r.jsx)(l.Clickable, {
                              onClick: q,
                              tabIndex: -1,
                              children: (0, r.jsx)(S.Z, {
                                  ...e,
                                  className: D.premiumIcon
                              })
                          })
                  }),
        eR = () => {
            let e = (null == U ? void 0 : U.isClyde()) ? R.Hb.AI : R.Hb.BOT;
            return null != U && U.bot
                ? (0, r.jsx)(c.Z, {
                      className: D.botTag,
                      type: e,
                      verified: U.isVerifiedBot()
                  })
                : null;
        },
        eC = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [eR(), ev(), eO()]
            }),
        ey = (e, t) => {
            let n = B ? l.AnimatedAvatar : l.Avatar,
                i = (0, u.Z)(x) ? O.Skl.STREAMING : k;
            return (
                (i = t ? void 0 : i),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n, {
                            ...ef,
                            size: l.AvatarSizes.SIZE_32,
                            src: eE,
                            isMobile: F,
                            isTyping: M,
                            status: i,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: e_,
                            typingIndicatorRef: eA
                        }),
                        (0, r.jsx)(h.Z, {
                            confettiSpawnRef: ec,
                            shouldFire: M && null != w && e.id !== w.id,
                            confettiLocation: C.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        eD = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.NameWithRole, {
                        roleName: o,
                        color: null != a ? a : void 0,
                        name: null != P ? P : ea,
                        className: D.name
                    }),
                    (0, r.jsx)(_.ZP, {
                        clan: null == U ? void 0 : U.clan,
                        userId: null == U ? void 0 : U.id,
                        contextGuildId: Z,
                        disableGuildProfile: !0,
                        className: D.clanTag,
                        profileViewedAnalytics: eh
                    })
                ]
            }),
        eL = k === O.Skl.OFFLINE;
    return null == U
        ? (0, r.jsx)(d.Z, {
              avatarSize: l.AvatarSizes.SIZE_32,
              className: D.placeholder
          })
        : (0, r.jsx)(l.Popout, {
              renderPopout: (e) =>
                  (0, r.jsx)(I.Z, {
                      quest: eI,
                      memberListItemRef: eo,
                      applicationStream: G,
                      ...e,
                      closePopout: () => em(!0)
                  }),
              position: 'bottom',
              shouldShow: eT,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: l.Popout.Animation.NONE,
              spacing: -3,
              children: () =>
                  (0, r.jsx)(E.Z, {
                      ref: eo,
                      selected: n,
                      className: s()(D.member, Y, { [D.offline]: eL && !n }),
                      innerClassName: D.memberInner,
                      onClick: K,
                      onKeyDown: W,
                      onMouseDown: j,
                      onContextMenu: z,
                      onMouseEnter: eg,
                      onMouseLeave: eS,
                      name:
                          null == b
                              ? (0, r.jsx)('span', {
                                    className: D.username,
                                    children: eD()
                                })
                              : (0, r.jsx)(l.Tooltip, {
                                    text: b,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            className: s()(D.username, D.lostPermission),
                                            children: eD()
                                        })
                                }),
                      avatar: ey(U, eL),
                      subText: eN(),
                      decorators: eC(),
                      'aria-controls': X,
                      'aria-expanded': $,
                      'aria-setsize': ee,
                      'aria-posinset': J,
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
