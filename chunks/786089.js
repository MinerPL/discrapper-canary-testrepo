n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(887003),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    _ = n(410030),
    E = n(204418),
    h = n(583434),
    m = n(70097),
    I = n(594174),
    p = n(626135),
    g = n(617136),
    T = n(113434),
    f = n(497505),
    S = n(475595),
    C = n(981631),
    N = n(689938),
    A = n(874976);
t.Z = (0, a.memo)(function (e) {
    var t, n, s, v, Z;
    let { quest: L } = e,
        [R, O] = (0, a.useState)(!1),
        [x, b] = (0, a.useState)(24),
        [M, P] = (0, a.useState)(!1),
        D = (0, a.useRef)(null),
        y = (0, a.useRef)(null),
        j = (0, a.useRef)(null),
        U = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        { ref: G, height: w = 0 } = (0, u.Z)(),
        k = (0, _.ZP)(),
        B = (0, T.B6)(null === (t = L.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        V = null !== (v = null === (n = L.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== v ? v : 0,
        H = L.config.rewards[V],
        F = (null == H ? void 0 : H.type) === l.w.COLLECTIBLE,
        { product: Y } = (0, h.T)(F && null != H ? H.skuId : null),
        z = null == Y ? void 0 : null === (s = Y.items) || void 0 === s ? void 0 : s[0];
    (0, u.P)(D, (e) => {
        let { height: t } = e;
        if (!F || null == t || null == y.current || null == D.current || null == j.current) return;
        let n = D.current.getBoundingClientRect(),
            i = y.current.getBoundingClientRect(),
            a = j.current.getBoundingClientRect();
        b((i.top - n.top - a.height) / 2);
    });
    let W = (0, c.wj)(k),
        K = (0, a.useMemo)(() => (0, S.fh)(L, S.Bd.LOGO_TYPE, 'dark'), [L]),
        q = (0, a.useMemo)(() => (0, S.fh)(L, S.Bd.REWARD), [L]),
        Q = R ? w + 8 : 0,
        X = () => {
            O(!0),
                p.default.track(C.rMx.QUEST_HOVER, {
                    quest_id: L.id,
                    ...(0, g.mH)(f.jn.TROPHY_CASE_CARD)
                });
        },
        J = () => O(!1),
        $ = (e) => {
            P(!0),
                p.default.track(C.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: L.id
                });
        };
    return null == H || M
        ? null
        : (0, i.jsx)(d.FocusRing, {
              children: (0, i.jsxs)('div', {
                  ref: D,
                  tabIndex: 0,
                  onFocus: X,
                  onBlur: J,
                  onMouseEnter: X,
                  onMouseLeave: J,
                  className: r()(A.container, { [A.hovered]: R }),
                  children: [
                      null != U &&
                          F &&
                          (0, i.jsx)('div', {
                              ref: j,
                              className: A.decoWrapper,
                              style: { top: x },
                              children: (0, i.jsx)(E.Z, {
                                  avatarDecorationOverride: z,
                                  user: U,
                                  guildId: null
                              })
                          }),
                      q.isAnimated
                          ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(m.Z, {
                                    className: A.assetBlurred,
                                    autoPlay: !1,
                                    children: (0, i.jsx)('source', {
                                        src: q.url,
                                        type: null !== (Z = q.mimetype) && void 0 !== Z ? Z : void 0,
                                        onError: () => $(q.url)
                                    })
                                })
                            })
                          : (0, i.jsx)('img', {
                                className: A.image,
                                src: q.url,
                                alt: L.config.messages.questName,
                                onError: () => $(q.url)
                            }),
                      (0, i.jsx)('div', {
                          className: r()(A.overlay, {
                              [A.darkThemeGradient]: W,
                              [A.lightThemeGradient]: !W
                          })
                      }),
                      (0, i.jsx)('div', {
                          ref: y,
                          className: A.logoContainer,
                          style: { transform: 'translateY(-'.concat(Q, 'px)') },
                          children: (0, i.jsx)('img', {
                              className: A.logo,
                              src: K.url,
                              alt: L.config.messages.gameTitle
                          })
                      }),
                      (0, i.jsxs)('div', {
                          ref: G,
                          className: A.details,
                          children: [
                              (0, i.jsx)(d.Heading, {
                                  className: A.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: N.Z.Messages.QUEST.format({ questName: L.config.messages.questName })
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: W ? 'text-muted' : 'always-white',
                                  style: { opacity: W ? 1 : 0.75 },
                                  children: N.Z.Messages.QUEST_REWARD_CLAIMED.format({
                                      reward: H.name,
                                      claimedDate: B
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
