t.r(l),
    t.d(l, {
        default: function () {
            return I;
        }
    }),
    t(47120);
var a = t(735250),
    n = t(470079),
    s = t(120356),
    i = t.n(s),
    r = t(913527),
    o = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(410030),
    x = t(313201),
    h = t(271383),
    m = t(430824),
    g = t(594174),
    C = t(709054),
    v = t(931240),
    f = t(645896),
    j = t(603368),
    p = t(532490),
    N = t(380365),
    _ = t(979264),
    T = t(620929),
    E = t(284019),
    S = t(308083),
    Z = t(981631),
    L = t(689938),
    M = t(319410);
function A(e) {
    var l;
    let { guildId: t, clanInfo: s, signed: r, onSignCharter: c } = e,
        u = n.useMemo(() => {
            let e = C.default.extractTimestamp(t);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [t]),
        x = n.useMemo(() => new Set(s.games), [s.games]);
    return (0, a.jsx)(p.Z, {
        guildId: t,
        signHintPosition: p.p.LEFT,
        primaryColor: null === (l = s.branding) || void 0 === l ? void 0 : l.primaryColor,
        signed: r,
        onSignCharter: c,
        children: (0, a.jsxs)('div', {
            className: M.scrollContentsContainer,
            children: [
                (0, a.jsx)(_.aG, {
                    guildId: t,
                    clanBadge: s.badge.imageHash,
                    clanTag: s.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: S.NC.SIZE_24,
                    className: M.clanTagChiplet
                }),
                (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: M.charterHeaderText,
                            children: L.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
                        }),
                        (0, a.jsx)(d.Heading, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: M.charterHeaderText,
                            children: s.name
                        }),
                        (0, a.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: M.establishedDate,
                            children: L.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({ date: u })
                        })
                    ]
                }),
                (0, a.jsx)(T.p, {
                    applicationIds: x,
                    playstyle: s.playstyle,
                    className: i()(M.charterBodyText, M.gameSection)
                }),
                (0, a.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: M.charterBodyText,
                    children: L.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
                })
            ]
        })
    });
}
function I(e) {
    var l;
    let { guildId: t, onClose: s, onAccept: r, ...o } = e,
        C = (0, x.Dt)(),
        p = (0, f.Cc)(t),
        _ = (0, f.E8)(t),
        [T, S] = n.useState(!0),
        [I, y] = n.useState(!1),
        w = n.useCallback(() => {
            r(), s();
        }, [r, s]);
    n.useEffect(() => {
        null == p && !_ && w();
    }, [p, w, _]);
    let H = n.useCallback(() => {
            T && (0, v.nE)(t, T, Z.Sbl.CREATE_JOIN_GUILD_MODAL), w();
        }, [t, w, T]),
        R = (0, c.e7)([m.Z], () => m.Z.getGuild(t)),
        V = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        b = (0, c.e7)([h.ZP], () => (null != V ? h.ZP.getMember(t, V.id) : null)),
        P = (0, u.ZP)(),
        U = (0, j.nP)(null == p ? void 0 : null === (l = p.branding) || void 0 === l ? void 0 : l.primaryColor, [d.tokens.colors.BG_BRAND, 0.7]),
        B = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: P,
            saturation: 1
        }).hex(),
        G = (0, j.nj)(U, B, 'top center');
    return null == R || null == V || null == b || null == p
        ? null
        : (0, a.jsx)(d.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              'aria-labelledby': C,
              className: M.modal,
              size: d.ModalSize.DYNAMIC,
              children: (0, a.jsxs)(d.ModalContent, {
                  className: M.content,
                  style: G,
                  children: [
                      (0, a.jsxs)('div', {
                          className: M.infoSide,
                          children: [
                              (0, a.jsxs)('div', {
                                  className: M.titlesContainer,
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: M.title,
                                          children: (0, a.jsx)(d.Heading, {
                                              variant: 'heading-xxl/medium',
                                              children: L.Z.Messages.CLAN_JOIN_SUCCESS_TITLE.format({ name: R.name })
                                          })
                                      }),
                                      (0, a.jsx)(d.Text, {
                                          className: M.subtitle,
                                          variant: 'text-md/normal',
                                          children: L.Z.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
                                      })
                                  ]
                              }),
                              (0, a.jsx)(N.Z, {
                                  guildId: t,
                                  isTagAdopted: T,
                                  onChangeUseTag: S
                              })
                          ]
                      }),
                      (0, a.jsx)('div', {
                          className: M.scrollMainContainer,
                          children: (0, a.jsx)(A, {
                              guildId: t,
                              clanInfo: p,
                              signed: I,
                              onSignCharter: y
                          })
                      }),
                      (0, a.jsx)(E.Z, {
                          onClick: H,
                          color: d.Button.Colors.BRAND,
                          themeColor: U,
                          fullWidth: !1,
                          className: i()(M.ctaButton, I ? M.ctaButtonSigned : null),
                          children: (0, a.jsxs)('div', {
                              className: M.ctaButtonInner,
                              children: [
                                  (0, a.jsx)(d.Text, {
                                      color: 'currentColor',
                                      variant: 'text-md/medium',
                                      children: L.Z.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
                                  }),
                                  (0, a.jsx)(d.ArrowLargeRightIcon, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: null == U ? void 0 : (0, j.$0)(U).hex()
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
}
