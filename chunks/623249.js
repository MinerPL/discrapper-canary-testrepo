n.r(t),
    n.d(t, {
        default: function () {
            return f;
        },
        openConsoleConnectionErrorsModal: function () {
            return A;
        }
    }),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(607070),
    u = n(600164),
    _ = n(210887),
    E = n(617136),
    h = n(113434),
    m = n(497505),
    I = n(918701),
    g = n(667105),
    p = n(981631),
    T = n(689938),
    S = n(913895),
    C = n(708901);
function f(e) {
    let { questId: t, errorHints: n, transitionState: s, onClose: f } = e,
        A = (0, h.B4)(t);
    null == A && f();
    let [v, L] = (0, a.useState)(n),
        Z = (0, h.KX)(),
        R = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        O = (0, g.g2)({
            useReducedMotion: R,
            className: S.colorTransition
        }),
        x = v.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        b = (0, I.Bz)(A),
        P = (0, l.e7)([_.Z], () => _.Z.getState().theme),
        M = (0, o.wj)(P) ? p.BRd.DARK : p.BRd.LIGHT,
        { startConsoleQuest: D, startingConsoleQuest: y } = (0, h.GI)({
            questId: A.id,
            beforeRequest: () => {
                O.startAnimation(),
                    (0, E._3)({
                        questId: A.id,
                        questContent: m.jn.CONNECTIONS_MODAL,
                        questContentCTA: E.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                O.stopAnimation(), L(e);
            }
        });
    return (0, i.jsxs)(c.ModalRoot, {
        transitionState: s,
        size: c.ModalSize.DYNAMIC,
        className: S.modalRoot,
        children: [
            (0, i.jsxs)(c.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: S.modalHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.modalTop,
                        children: [
                            (0, i.jsx)('div', {
                                className: S.iconFrame,
                                children: (0, i.jsx)('img', {
                                    className: S.icon,
                                    alt: '',
                                    src: C
                                })
                            }),
                            (0, i.jsx)(c.ModalCloseButton, {
                                className: S.closeBtn,
                                onClick: f
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: T.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: S.upperBodyText,
                        children: Z.message
                    })
                ]
            }),
            (0, i.jsxs)(c.ModalContent, {
                className: S.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.contentHeader,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: T.Z.Messages.CONNECTED_ACCOUNTS
                            }),
                            (0, i.jsxs)(c.Clickable, {
                                className: r()(S.refreshWrapper, { [S.disabled]: y }),
                                onClick: D,
                                children: [
                                    O.render(),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: S.colorTransition,
                                        children: T.Z.Messages.REFRESH
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.accountsWrapper,
                        children: [
                            (0, i.jsx)(N, {
                                icon: (0, i.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: T.Z.Messages.QUESTS_THIS_PC
                            }),
                            (0, i.jsx)(N, {
                                icon: (0, i.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: T.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                                errors: b ? void 0 : x.map((e) => e.message),
                                gameTile: b
                                    ? (0, i.jsx)(c.Tooltip, {
                                          'aria-label': A.config.messages.gameTitle,
                                          text: () =>
                                              (0, i.jsxs)('div', {
                                                  className: S.tooltip,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: A.config.messages.gameTitle
                                                      }),
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: T.Z.Messages.QUESTS_GAME_DETECTED
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, i.jsx)('img', {
                                                  ...e,
                                                  className: S.gameTile,
                                                  alt: A.config.messages.gameTitle,
                                                  src: (0, I.uo)(A, M)
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(c.ModalFooter, {
                className: S.footer,
                children: [
                    (0, i.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: f,
                        className: S.footerCloseButton,
                        children: T.Z.Messages.CLOSE
                    }),
                    (0, i.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            f(),
                                (0, I.V$)(
                                    { quest: A },
                                    {
                                        content: m.jn.CONNECTIONS_MODAL,
                                        ctaContent: E.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                                    }
                                );
                        },
                        children: T.Z.Messages.QUESTS_SHOW_CONNECTIONS
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { icon: t, text: n, errors: a = [], gameTile: s } = e,
        l = a.length > 0,
        o = l ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, i.jsxs)('div', {
        className: S.connectionRow,
        children: [
            (0, i.jsxs)('div', {
                className: r()(S.connectionRowHeader, { [S.connectionRowHeaderError]: l }),
                children: [
                    (0, i.jsxs)('div', {
                        className: S.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, i.jsx)(o, {
                                color: 'currentColor',
                                size: 'sm',
                                className: r()({
                                    [S.success]: !l,
                                    [S.error]: l
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: S.errorsContainer,
                children: a.map((e) =>
                    (0, i.jsxs)(
                        'div',
                        {
                            className: S.errorRow,
                            children: [
                                (0, i.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: S.error
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: e
                                })
                            ]
                        },
                        e
                    )
                )
            })
        ]
    });
}
function A(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, i.jsx)(t, {
                ...n,
                ...e
            });
    });
}
