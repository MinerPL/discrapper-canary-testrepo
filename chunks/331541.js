n.d(t, {
    Z: function () {
        return ea;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(722770),
    o = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(2052),
    _ = n(393238),
    E = n(727637),
    h = n(100527),
    m = n(906732),
    I = n(676035),
    g = n(521868),
    p = n(299206),
    T = n(440051),
    S = n(734934),
    C = n(158238),
    f = n(300284),
    N = n(680295),
    A = n(785717),
    v = n(221292),
    L = n(481046),
    Z = n(687158),
    R = n(899007),
    O = n(648052),
    x = n(867176),
    b = n(438163),
    P = n(483424),
    M = n(681837),
    D = n(502762),
    y = n(530),
    j = n(544989),
    U = n(309494),
    G = n(969205),
    w = n(171368),
    k = n(420654),
    B = n(695346),
    H = n(158776),
    V = n(246946),
    F = n(70956),
    Y = n(5192),
    W = n(51144),
    z = n(246133),
    K = n(474376),
    q = n(383832),
    Q = n(981631),
    X = n(228168),
    J = n(689938),
    $ = n(554331),
    ee = n(115879);
let et = [
    {
        duration: 30 * F.Z.Millis.MINUTE,
        label: () => J.Z.Messages.MUTE_DURATION_30_MINUTES
    },
    {
        duration: F.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_1_HOUR
    },
    {
        duration: 3 * F.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_3_HOURS
    },
    {
        duration: 8 * F.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_8_HOURS
    },
    {
        duration: F.Z.Millis.DAY,
        label: () => J.Z.Messages.MUTE_DURATION_24_HOURS
    },
    {
        duration: void 0,
        label: () => J.Z.Messages.DURATION_FOREVER
    }
];
function en(e, t, n, a) {
    let s = (0, i.jsx)(i.Fragment, {
        children: et.map((a) => {
            let { duration: s, label: r } = a;
            return (0, i.jsx)(
                d.MenuItem,
                {
                    id: ''.concat(e, '-').concat(s),
                    label: r(),
                    action: () => (0, z.Z)(e, t, n, s),
                    dontCloseOnAction: !0
                },
                s
            );
        })
    });
    return (0, i.jsx)(d.MenuItem, {
        id: e,
        className: $.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: n } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(d.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, W.u5)(e)
                    }),
                    null != a &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: a
                        })
                ]
            });
        },
        action: () => (0, z.Z)(e, t, n),
        dontCloseOnAction: !0,
        children: e !== Q.Skl.ONLINE ? s : void 0
    });
}
function ei(e, t, n, a) {
    return (0, i.jsx)(d.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: n } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(d.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, W.u5)(e)
                    }),
                    null != a &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: a
                        })
                ]
            });
        },
        action: () => (0, z.Z)(e, t, n),
        dontCloseOnAction: !0
    });
}
function ea(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s } = e,
        F = __OVERLAY__,
        z = (0, Z.ZP)(t.id),
        ea = (0, u.O)(),
        { analyticsLocations: es } = (0, m.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT),
        er = (0, A.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        el = (0, I.a)(),
        eo = (0, c.e7)([H.Z], () => H.Z.getStatus(t.id)),
        ec = (function (e, t) {
            let n = T.Y.useExperiment({ location: 'account popout' }).expiringStatus,
                a = B.Cr.useSetting(),
                s = (0, S.p)(),
                r = C.e.useExperiment({ location: 'account popout' }).allowQuietMode || s,
                o = B.fv.useSetting(),
                c = e === Q.Skl.DND,
                u = (t) => {
                    let n =
                        null != a && '0' !== a
                            ? J.Z.Messages.STATUS_UNTIL.format({
                                  endTime: new Date(Number(a)).toLocaleString(J.Z.getLocale(), {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != n) return n;
                    switch (t) {
                        case Q.Skl.DND:
                            return r ? J.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : J.Z.Messages.STATUS_DND_HELP;
                        case Q.Skl.INVISIBLE:
                            return J.Z.Messages.STATUS_INVISIBLE_HELPER;
                        default:
                            return;
                    }
                },
                _ = (0, i.jsx)(i.Fragment, {
                    children: et.map((t) => {
                        let { duration: n, label: a } = t;
                        return (0, i.jsx)(
                            d.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: a(),
                                action: () => {
                                    (0, S.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    ei(Q.Skl.ONLINE, e, t),
                    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
                    n ? en(Q.Skl.IDLE, e, t, u(Q.Skl.IDLE)) : ei(Q.Skl.IDLE, e, t, u(Q.Skl.IDLE)),
                    n ? en(Q.Skl.DND, e, t, u(Q.Skl.DND)) : ei(Q.Skl.DND, e, t, u(Q.Skl.DND)),
                    n ? en(Q.Skl.INVISIBLE, e, t, u(Q.Skl.INVISIBLE)) : ei(Q.Skl.INVISIBLE, e, t, u(Q.Skl.INVISIBLE)),
                    r || s
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      d.MenuItem,
                                      {
                                          id: 'quiet-mode',
                                          'aria-label': 'focus mode',
                                          className: $.expiringStatusMenuItem,
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: () =>
                                              (0, i.jsxs)('div', {
                                                  className: $.statusItem,
                                                  children: [
                                                      (0, i.jsx)(d.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: $.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: $.focusModeTitle,
                                                          children: [
                                                              J.Z.Messages.FOCUS_MODE_TITLE,
                                                              (0, i.jsx)(d.TextBadge, {
                                                                  text: s ? J.Z.Messages.FOCUS_MODE_BADGE_ON : c ? J.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : J.Z.Messages.FOCUS_MODE_BADGE_OFF,
                                                                  color: s ? l.Z.BRAND_500 : c ? l.Z.RED_400 : l.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: $.description,
                                                          children:
                                                              s && null != o && '0' !== o
                                                                  ? J.Z.Messages.STATUS_UNTIL.format({
                                                                        endTime: new Date(Number(o)).toLocaleString(J.Z.getLocale(), {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : J.Z.Messages.FOCUS_MODE_DESCRIPTION
                                                      })
                                                  ]
                                              }),
                                          action: () => {
                                              (0, S.oW)(!s);
                                          },
                                          dontCloseOnAction: !0,
                                          children: _
                                      },
                                      'quiet-mode'
                                  )
                              ]
                          })
                        : null
                ]
            });
        })(eo, ea),
        { ref: ed } = (0, _.Z)(),
        eu = (0, E.Z)(ed);
    a.useEffect(() => {
        null == s || s(ed.current);
    }, [ed, s]);
    let e_ = (e) => {
            null == n || n(),
                (0, w.openUserProfileModal)({
                    sourceAnalyticsLocations: es,
                    ...er,
                    ...e
                });
        },
        { customStatusBubbleEditEnabled: eE } = (0, L.K)({ location: 'AccountProfilePopout' }),
        eh = (0, f.Z)({ analyticsLocations: es }),
        em = (0, S.p)(),
        eI = eo === Q.Skl.DND,
        eg = (0, K.g)(),
        ep = (0, g.o)({
            focusedClassName: $.menuItemFocused,
            customStatus: el,
            analyticsLocations: es,
            trackUserProfileAction: v.pQ
        }),
        eT = (0, p.Z)({
            id: t.id,
            label: J.Z.Messages.COPY_ID_USER,
            showIconFirst: !0,
            focusedClassName: $.menuItemFocused
        }),
        eS = (0, c.e7)([V.Z], () => V.Z.hidePersonalInformation);
    return (0, i.jsx)(m.Gt, {
        value: es,
        children: (0, i.jsx)(A.Mt, {
            value: er,
            children: (0, i.jsx)(d.Dialog, {
                ref: ed,
                'aria-label': t.username,
                children: (0, i.jsxs)(D.Z, {
                    className: $.themeContainer,
                    user: t,
                    displayProfile: z,
                    profileType: X.y0.BITE_SIZE,
                    children: [
                        !eE &&
                            (0, i.jsx)(j.Z, {
                                profileType: X.y0.BITE_SIZE,
                                children: (0, i.jsx)(G.Z, {
                                    userId: t.id,
                                    onClose: n
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: ee.header,
                            children: [
                                (0, i.jsx)(x.Z, {
                                    user: t,
                                    displayProfile: z,
                                    profileType: X.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(R.Z, {
                                    user: t,
                                    displayProfile: z,
                                    profileType: X.y0.BITE_SIZE,
                                    onOpenProfile: F ? void 0 : e_
                                }),
                                (0, i.jsx)(b.Z, {
                                    user: t,
                                    profileType: X.y0.BITE_SIZE,
                                    onClose: n
                                })
                            ]
                        }),
                        (null == z ? void 0 : z.profileEffectId) != null &&
                            (0, i.jsx)(N.Z, {
                                profileEffectId: null == z ? void 0 : z.profileEffectId,
                                isHovering: eu
                            }),
                        (0, i.jsxs)(d.Scroller, {
                            className: $.body,
                            children: [
                                (0, i.jsx)(y.Z, {
                                    user: t,
                                    className: $.username,
                                    profileType: X.y0.BITE_SIZE,
                                    nickname: Y.ZP.getName(null, null, t),
                                    onOpenProfile: e_,
                                    pronouns: null == z ? void 0 : z.pronouns,
                                    tags: (0, i.jsx)(O.Z, {
                                        displayProfile: z,
                                        profileType: X.y0.BITE_SIZE,
                                        onClose: n
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(M.Z, { userId: t.id }),
                                            (0, i.jsx)(U.Z, {
                                                user: t,
                                                isHovering: eu
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(k.Z, {
                                    user: t,
                                    bio: null == z ? void 0 : z.bio,
                                    hidePersonalInformation: eS,
                                    onClose: n
                                }),
                                (0, i.jsx)(P.Z, {
                                    user: t,
                                    currentUser: t,
                                    onClose: n
                                }),
                                (0, i.jsxs)('div', {
                                    className: $.menus,
                                    children: [
                                        (0, i.jsx)(D.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(d.Menu, {
                                                navId: 'status',
                                                'aria-label': J.Z.Messages.STATUS_MENU_LABEL,
                                                hideScroller: !0,
                                                className: $.menu,
                                                onClose: n,
                                                onSelect: void 0,
                                                children: [
                                                    eE &&
                                                        (0, i.jsx)(d.MenuGroup, {
                                                            children: (0, i.jsx)(
                                                                d.MenuItem,
                                                                {
                                                                    id: 'edit-profile',
                                                                    iconLeft: d.PencilIcon,
                                                                    label: J.Z.Messages.EDIT_PROFILE,
                                                                    action: () => {
                                                                        (0, v.pQ)({
                                                                            action: 'EDIT_PROFILE',
                                                                            analyticsLocations: es
                                                                        }),
                                                                            eh();
                                                                    },
                                                                    focusedClassName: $.menuItemFocused,
                                                                    subMenuIconClassName: $.subMenuIcon
                                                                },
                                                                'edit-profile'
                                                            )
                                                        }),
                                                    (0, i.jsx)(d.MenuGroup, {
                                                        children: (0, i.jsx)(
                                                            d.MenuItem,
                                                            {
                                                                id: 'status-picker',
                                                                label: (0, i.jsxs)('div', {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'space-between'
                                                                    },
                                                                    children: [(0, W.u5)(eo), em || eI ? (0, i.jsx)(d.BellSlashIcon, { size: 'xxs' }) : null]
                                                                }),
                                                                focusedClassName: $.menuItemFocused,
                                                                subMenuIconClassName: $.subMenuIcon,
                                                                action: o.tq
                                                                    ? function () {
                                                                          (0, v.pQ)({
                                                                              action: 'PRESS_SET_STATUS',
                                                                              analyticsLocations: es,
                                                                              ...er
                                                                          }),
                                                                              (0, d.openModalLazy)(
                                                                                  () =>
                                                                                      new Promise((e) => {
                                                                                          e((e) =>
                                                                                              (0, i.jsx)(d.ModalRoot, {
                                                                                                  ...e,
                                                                                                  size: d.ModalSize.SMALL,
                                                                                                  className: $.modal,
                                                                                                  'aria-label': J.Z.Messages.SET_STATUS,
                                                                                                  children: (0, i.jsx)(d.Menu, {
                                                                                                      navId: 'status-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': J.Z.Messages.STATUS_MENU_LABEL,
                                                                                                      hideScroller: !0,
                                                                                                      className: $.statusPickerModalMenu,
                                                                                                      onClose: e.onClose,
                                                                                                      onSelect: e.onClose,
                                                                                                      children: ec
                                                                                                  })
                                                                                              })
                                                                                          );
                                                                                      })
                                                                              );
                                                                      }
                                                                    : void 0,
                                                                iconLeft: (e) => {
                                                                    let { className: t, isFocused: n } = e;
                                                                    return (0, i.jsx)(d.Status, {
                                                                        status: eo,
                                                                        size: 12,
                                                                        className: r()(t, $.mainStatusIcon),
                                                                        color: n ? 'currentColor' : void 0
                                                                    });
                                                                },
                                                                children: o.tq ? void 0 : ec
                                                            },
                                                            'status-picker'
                                                        )
                                                    }),
                                                    !eE && (0, i.jsx)(d.MenuGroup, { children: ep })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(D.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(d.Menu, {
                                                navId: 'account',
                                                'aria-label': J.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                                                hideScroller: !0,
                                                className: $.menu,
                                                onClose: n,
                                                onSelect: void 0,
                                                children: [
                                                    (0, i.jsx)(d.MenuGroup, {
                                                        children: (0, i.jsx)(d.MenuItem, {
                                                            id: 'switch-account',
                                                            focusedClassName: $.menuItemFocused,
                                                            subMenuIconClassName: $.subMenuIcon,
                                                            label: J.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                                                            iconLeft: d.UserCircleIcon,
                                                            action: () => {
                                                                (0, v.pQ)({
                                                                    action: 'PRESS_SWITCH_ACCOUNTS',
                                                                    analyticsLocations: es
                                                                }),
                                                                    (0, q.Z)();
                                                            },
                                                            children: eg
                                                        })
                                                    }),
                                                    (0, i.jsx)(d.MenuGroup, { children: eT })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
