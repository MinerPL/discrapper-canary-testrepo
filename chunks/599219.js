n.r(t),
    n.d(t, {
        default: function () {
            return R;
        }
    }),
    n(47120);
var s = n(735250),
    a = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(990547),
    i = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(600164),
    _ = n(313201),
    f = n(215292),
    p = n(382086),
    m = n(996453),
    h = n(446706),
    E = n(594174),
    T = n(626135),
    N = n(179645),
    x = n(436046),
    A = n(963209),
    v = n(436457),
    b = n(877758),
    C = n(701476),
    I = n(785997),
    g = n(981631),
    M = n(834891),
    O = n(675999),
    S = n(689938),
    G = n(807828);
function R(e) {
    let t = (0, _.Dt)(),
        { onSlideChange: n, ...o } = e,
        { onClose: R } = o,
        [j, F] = a.useState(!1),
        y = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
        D = null != y && null == y.nsfwAllowed,
        [Z, L] = a.useState(D ? I.F.AGE_GATE : I.F.CHOOSE_TEMPLATE),
        [k, B] = a.useState(null);
    a.useEffect(() => {
        n(j ? I.F.COMPLETE : Z);
    }, [n, Z, j]);
    let [U, P] = a.useState(null),
        [w, H] = a.useState(null),
        [V, Y] = a.useState(!1),
        z = (0, i.e7)([N.Z], () => N.Z.getType() === C.M5.INVITE_UNCLAIMED),
        J = a.useCallback(
            (e) => {
                H(e),
                    L(I.F.CREATION_INTENT),
                    T.default.track(g.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    });
            },
            [H, L]
        ),
        { content: W, footer: K } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
                H(null), L(I.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                Y(e === O.lr.COMMUNITY), L(I.F.CUSTOMIZE_GUILD);
            }
        }),
        { content: X, footer: q } = (0, m.G)({
            guildTemplate: w,
            titleClassName: G.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                P(e), (null == w ? void 0 : w.id) === M.l.CREATE ? L(I.F.CHANNEL_PROMPT) : F(!0);
            },
            onBack: () => {
                L(I.F.CREATION_INTENT);
            },
            isSlideReady: k === I.F.CUSTOMIZE_GUILD,
            isCommunity: V
        }),
        { content: Q, footer: $ } = (0, f.F)({
            createdGuildId: U,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                F(!0);
            },
            isSlideReady: k === I.F.CHANNEL_PROMPT
        }),
        { content: ee, footer: et } = (0, v.Z)({
            onBack: () => L(I.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                R();
            },
            onConnect: R,
            isSlideReady: k === I.F.JOIN_GUILD
        }),
        en = null;
    switch (Z) {
        case I.F.CUSTOMIZE_GUILD:
            en = q;
            break;
        case I.F.CHANNEL_PROMPT:
            en = $;
            break;
        case I.F.JOIN_GUILD:
            en = et;
            break;
        case I.F.CREATION_INTENT:
            en = K;
    }
    let { ref: es, width: ea } = (0, d.Z)();
    if (j)
        return (0, s.jsx)(c.ModalRoot, {
            ...o,
            size: c.ModalSize.MEDIUM,
            className: r()(G.modal, G.completed),
            'aria-labelledby': t,
            children: (0, s.jsx)(A.Z, { onComplete: R })
        });
    let eo = { impression_group: l.ImpressionGroups.GUILD_ADD_NUF };
    return (0, s.jsxs)(c.ModalRoot, {
        ...o,
        size: c.ModalSize.MEDIUM,
        className: G.modal,
        'aria-labelledby': t,
        children: [
            (0, s.jsx)('div', {
                className: G.sidebar,
                children: (0, s.jsx)(b.Z, { step: Z })
            }),
            (0, s.jsx)(c.ThemeProvider, {
                theme: g.BRd.LIGHT,
                children: (e) =>
                    (0, s.jsxs)('div', {
                        className: r()(G.content, e),
                        ref: es,
                        children: [
                            (0, s.jsx)('div', {
                                className: G.slidesContainer,
                                children: (0, s.jsxs)(c.Slides, {
                                    activeSlide: Z,
                                    onSlideReady: (e) => B(e),
                                    centered: !1,
                                    width: ea,
                                    children: [
                                        (0, s.jsx)(c.Slide, {
                                            id: I.F.AGE_GATE,
                                            children: (0, s.jsx)('div', {
                                                className: G.container,
                                                children: (0, s.jsx)(x.Z, {
                                                    onComplete: () => {
                                                        z ? R() : L(I.F.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: R
                                                })
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: I.F.CHOOSE_TEMPLATE,
                                            impressionName: l.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: r()(G.container, G.shortFooter),
                                                children: (0, s.jsx)(h.Z, {
                                                    className: G.templates,
                                                    onChooseTemplate: J,
                                                    isNewUser: !0
                                                })
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: I.F.CREATION_INTENT,
                                            impressionName: l.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: r()(G.container, G.standardFooter),
                                                children: W
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: I.F.CUSTOMIZE_GUILD,
                                            impressionName: l.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: r()(G.container, G.standardFooter),
                                                children: X
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: I.F.CHANNEL_PROMPT,
                                            impressionName: l.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: r()(G.container, G.standardFooter),
                                                children: Q
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: I.F.JOIN_GUILD,
                                            impressionName: l.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: r()(G.container, G.standardFooter),
                                                children: ee
                                            })
                                        })
                                    ]
                                })
                            }),
                            Z !== I.F.AGE_GATE
                                ? (0, s.jsx)(c.ModalCloseButton, {
                                      onClick: R,
                                      className: G.closeButton
                                  })
                                : null,
                            Z === I.F.CHOOSE_TEMPLATE
                                ? (0, s.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: r()(G.footer, G.join),
                                      children: (0, s.jsx)(c.Anchor, {
                                          className: G.joinCTA,
                                          onClick: () => {
                                              L(I.F.JOIN_GUILD);
                                          },
                                          children: (0, s.jsxs)(c.Text, {
                                              variant: 'text-sm/medium',
                                              className: G.joinCTA,
                                              children: [S.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY, ' ', S.Z.Messages.JOIN_SERVER_BUTTON_CTA]
                                          })
                                      })
                                  })
                                : null,
                            null != en
                                ? (0, s.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: G.footer,
                                      children: en
                                  })
                                : null
                        ]
                    })
            })
        ]
    });
}
