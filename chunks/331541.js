n.d(t, {
    Z: function () {
        return er;
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
    f = n(158238),
    C = n(300284),
    N = n(680295),
    A = n(785717),
    v = n(221292),
    Z = n(481046),
    L = n(27144),
    O = n(318661),
    R = n(78675),
    x = n(741308),
    b = n(899007),
    P = n(549546),
    M = n(438163),
    D = n(483424),
    y = n(681837),
    j = n(502762),
    U = n(530),
    G = n(544989),
    k = n(969205),
    w = n(171368),
    B = n(580512),
    H = n(67152),
    V = n(695346),
    F = n(158776),
    Y = n(246946),
    W = n(70956),
    z = n(5192),
    K = n(51144),
    q = n(246133),
    Q = n(474376),
    X = n(383832),
    J = n(981631),
    $ = n(228168),
    ee = n(689938),
    et = n(554331),
    en = n(122269);
let ei = [
    {
        duration: 30 * W.Z.Millis.MINUTE,
        label: () => ee.Z.Messages.MUTE_DURATION_30_MINUTES
    },
    {
        duration: W.Z.Millis.HOUR,
        label: () => ee.Z.Messages.MUTE_DURATION_1_HOUR
    },
    {
        duration: 3 * W.Z.Millis.HOUR,
        label: () => ee.Z.Messages.MUTE_DURATION_3_HOURS
    },
    {
        duration: 8 * W.Z.Millis.HOUR,
        label: () => ee.Z.Messages.MUTE_DURATION_8_HOURS
    },
    {
        duration: W.Z.Millis.DAY,
        label: () => ee.Z.Messages.MUTE_DURATION_24_HOURS
    },
    {
        duration: void 0,
        label: () => ee.Z.Messages.DURATION_FOREVER
    }
];
function ea(e, t, n, a) {
    let s = (0, i.jsx)(i.Fragment, {
        children: ei.map((a) => {
            let { duration: s, label: r } = a;
            return (0, i.jsx)(
                d.MenuItem,
                {
                    id: ''.concat(e, '-').concat(s),
                    label: r(),
                    action: () => (0, q.Z)(e, t, n, s),
                    dontCloseOnAction: !0
                },
                s
            );
        })
    });
    return (0, i.jsx)(d.MenuItem, {
        id: e,
        className: et.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: n } = t;
            return (0, i.jsxs)('div', {
                className: et.statusItem,
                children: [
                    (0, i.jsx)(d.Status, {
                        status: e,
                        className: et.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: et.status,
                        children: (0, K.u5)(e)
                    }),
                    null != a &&
                        (0, i.jsx)('div', {
                            className: et.description,
                            children: a
                        })
                ]
            });
        },
        action: () => (0, q.Z)(e, t, n),
        dontCloseOnAction: !0,
        children: e !== J.Skl.ONLINE ? s : void 0
    });
}
function es(e, t, n, a) {
    return (0, i.jsx)(d.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: n } = t;
            return (0, i.jsxs)('div', {
                className: et.statusItem,
                children: [
                    (0, i.jsx)(d.Status, {
                        status: e,
                        className: et.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: et.status,
                        children: (0, K.u5)(e)
                    }),
                    null != a &&
                        (0, i.jsx)('div', {
                            className: et.description,
                            children: a
                        })
                ]
            });
        },
        action: () => (0, q.Z)(e, t, n),
        dontCloseOnAction: !0
    });
}
function er(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s } = e,
        W = __OVERLAY__,
        q = (0, O.ZP)(t.id),
        er = (0, u.O)(),
        { analyticsLocations: el } = (0, m.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT),
        eo = (0, A.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        ec = (0, I.a)(),
        ed = (0, c.e7)([F.Z], () => F.Z.getStatus(t.id)),
        eu = (function (e, t) {
            let n = T.Y.useExperiment({ location: 'account popout' }).expiringStatus,
                a = V.Cr.useSetting(),
                s = (0, S.p)(),
                r = f.e.useExperiment({ location: 'account popout' }).allowQuietMode || s,
                o = V.fv.useSetting(),
                c = e === J.Skl.DND,
                u = (t) => {
                    let n =
                        null != a && '0' !== a
                            ? ee.Z.Messages.STATUS_UNTIL.format({
                                  endTime: new Date(Number(a)).toLocaleString(ee.Z.getLocale(), {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != n) return n;
                    switch (t) {
                        case J.Skl.DND:
                            return r ? ee.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : ee.Z.Messages.STATUS_DND_HELP;
                        case J.Skl.INVISIBLE:
                            return ee.Z.Messages.STATUS_INVISIBLE_HELPER;
                        default:
                            return;
                    }
                },
                _ = (0, i.jsx)(i.Fragment, {
                    children: ei.map((t) => {
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
                    es(J.Skl.ONLINE, e, t),
                    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
                    n ? ea(J.Skl.IDLE, e, t, u(J.Skl.IDLE)) : es(J.Skl.IDLE, e, t, u(J.Skl.IDLE)),
                    n ? ea(J.Skl.DND, e, t, u(J.Skl.DND)) : es(J.Skl.DND, e, t, u(J.Skl.DND)),
                    n ? ea(J.Skl.INVISIBLE, e, t, u(J.Skl.INVISIBLE)) : es(J.Skl.INVISIBLE, e, t, u(J.Skl.INVISIBLE)),
                    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
                    r || s
                        ? (0, i.jsx)(
                              d.MenuItem,
                              {
                                  id: 'quiet-mode',
                                  'aria-label': 'focus mode',
                                  className: et.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  showIconFirst: !0,
                                  label: () =>
                                      (0, i.jsxs)('div', {
                                          className: et.statusItem,
                                          children: [
                                              (0, i.jsx)(d.BellSlashIcon, {
                                                  size: 'xxs',
                                                  className: et.icon
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: et.focusModeTitle,
                                                  children: [
                                                      ee.Z.Messages.FOCUS_MODE_TITLE,
                                                      (0, i.jsx)(d.TextBadge, {
                                                          text: s ? ee.Z.Messages.FOCUS_MODE_BADGE_ON : c ? ee.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : ee.Z.Messages.FOCUS_MODE_BADGE_OFF,
                                                          color: s ? l.Z.BRAND_500 : c ? l.Z.RED_400 : l.Z.PRIMARY_500
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: et.description,
                                                  children:
                                                      s && null != o && '0' !== o
                                                          ? ee.Z.Messages.STATUS_UNTIL.format({
                                                                endTime: new Date(Number(o)).toLocaleString(ee.Z.getLocale(), {
                                                                    month: 'numeric',
                                                                    day: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: '2-digit'
                                                                })
                                                            })
                                                          : ee.Z.Messages.FOCUS_MODE_DESCRIPTION
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
                        : null
                ]
            });
        })(ed, er),
        { ref: e_ } = (0, _.Z)(),
        eE = (0, E.Z)(e_);
    a.useEffect(() => {
        null == s || s(e_.current);
    }, [e_, s]);
    let eh = (e) => {
            null == n || n(),
                (0, w.openUserProfileModal)({
                    sourceAnalyticsLocations: el,
                    ...eo,
                    ...e
                });
        },
        { newActivityCardsEnabled: em } = (0, L.z)({ location: 'AccountProfilePopout' }),
        { accountPopoutStatusEditEnabled: eI } = (0, Z.K)({ location: 'AccountProfilePopout' }),
        eg = (0, C.Z)({ analyticsLocations: el }),
        ep = (0, S.p)(),
        eT = ed === J.Skl.DND,
        eS = (0, Q.g)(),
        ef = (0, g.o)({
            focusedClassName: et.menuItemFocused,
            customStatus: ec,
            analyticsLocations: el,
            trackUserProfileAction: v.pQ
        }),
        eC = (0, p.Z)({
            id: t.id,
            label: ee.Z.Messages.COPY_ID_USER,
            showIconFirst: !0,
            focusedClassName: et.menuItemFocused
        }),
        eN = (0, c.e7)([Y.Z], () => Y.Z.hidePersonalInformation);
    return (0, i.jsx)(m.Gt, {
        value: el,
        children: (0, i.jsx)(A.Mt, {
            value: eo,
            children: (0, i.jsx)(d.Dialog, {
                ref: e_,
                'aria-label': t.username,
                children: (0, i.jsxs)(j.Z, {
                    className: et.themeContainer,
                    user: t,
                    displayProfile: q,
                    profileType: $.y0.BITE_SIZE,
                    children: [
                        !eI &&
                            (0, i.jsx)(G.Z, {
                                profileType: $.y0.BITE_SIZE,
                                children: (0, i.jsx)(k.Z, {
                                    userId: t.id,
                                    onClose: n
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: en.header,
                            children: [
                                (0, i.jsx)(R.Z, {
                                    user: t,
                                    displayProfile: q,
                                    profileType: $.y0.BITE_SIZE,
                                    hasProfileEffect: (null == q ? void 0 : q.profileEffectId) != null
                                }),
                                (0, i.jsx)(b.Z, {
                                    user: t,
                                    displayProfile: q,
                                    profileType: $.y0.BITE_SIZE,
                                    onOpenProfile: W ? void 0 : eh
                                }),
                                (0, i.jsx)(M.Z, {
                                    user: t,
                                    profileType: $.y0.BITE_SIZE,
                                    editEnabled: eI,
                                    onClose: n
                                })
                            ]
                        }),
                        (null == q ? void 0 : q.profileEffectId) != null &&
                            (0, i.jsx)(N.Z, {
                                profileEffectId: null == q ? void 0 : q.profileEffectId,
                                isHovering: eE
                            }),
                        (0, i.jsxs)(d.Scroller, {
                            className: et.body,
                            children: [
                                (0, i.jsx)(U.Z, {
                                    user: t,
                                    className: et.username,
                                    profileType: $.y0.BITE_SIZE,
                                    nickname: z.ZP.getName(null, null, t),
                                    onOpenProfile: eh,
                                    pronouns: null == q ? void 0 : q.pronouns,
                                    tags: (0, i.jsx)(x.Z, {
                                        displayProfile: q,
                                        profileType: $.y0.BITE_SIZE,
                                        onClose: n
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(y.Z, { userId: t.id }),
                                            (0, i.jsx)(P.Z, {
                                                user: t,
                                                isHovering: eE
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(H.Z, {
                                    user: t,
                                    bio: null == q ? void 0 : q.bio,
                                    hidePersonalInformation: eN,
                                    onClose: n
                                }),
                                em
                                    ? (0, i.jsx)(D.Z, {
                                          user: t,
                                          currentUser: t,
                                          onClose: n
                                      })
                                    : (0, i.jsx)(B.Z, {
                                          user: t,
                                          onClose: n
                                      }),
                                (0, i.jsxs)('div', {
                                    className: et.menus,
                                    children: [
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: et.menuOverlay,
                                            children: (0, i.jsxs)(d.Menu, {
                                                navId: 'status',
                                                'aria-label': ee.Z.Messages.STATUS_MENU_LABEL,
                                                hideScroller: !0,
                                                className: et.menu,
                                                onClose: n,
                                                onSelect: void 0,
                                                children: [
                                                    eI &&
                                                        (0, i.jsx)(d.MenuGroup, {
                                                            children: (0, i.jsx)(
                                                                d.MenuItem,
                                                                {
                                                                    id: 'edit-profile',
                                                                    icon: d.PencilIcon,
                                                                    label: ee.Z.Messages.EDIT_PROFILE,
                                                                    action: () => {
                                                                        (0, v.pQ)({
                                                                            action: 'EDIT_PROFILE',
                                                                            analyticsLocations: el
                                                                        }),
                                                                            eg();
                                                                    },
                                                                    showIconFirst: !0,
                                                                    focusedClassName: et.menuItemFocused,
                                                                    subMenuIconClassName: et.subMenuIcon
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
                                                                    children: [(0, K.u5)(ed), ep || eT ? (0, i.jsx)(d.BellSlashIcon, { size: 'xxs' }) : null]
                                                                }),
                                                                focusedClassName: et.menuItemFocused,
                                                                subMenuIconClassName: et.subMenuIcon,
                                                                action: o.tq
                                                                    ? function () {
                                                                          (0, v.pQ)({
                                                                              action: 'PRESS_SET_STATUS',
                                                                              analyticsLocations: el,
                                                                              ...eo
                                                                          }),
                                                                              (0, d.openModalLazy)(
                                                                                  () =>
                                                                                      new Promise((e) => {
                                                                                          e((e) =>
                                                                                              (0, i.jsx)(d.ModalRoot, {
                                                                                                  ...e,
                                                                                                  size: d.ModalSize.SMALL,
                                                                                                  className: et.modal,
                                                                                                  'aria-label': ee.Z.Messages.SET_STATUS,
                                                                                                  children: (0, i.jsx)(d.Menu, {
                                                                                                      navId: 'status-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': ee.Z.Messages.STATUS_MENU_LABEL,
                                                                                                      hideScroller: !0,
                                                                                                      className: et.statusPickerModalMenu,
                                                                                                      onClose: e.onClose,
                                                                                                      onSelect: e.onClose,
                                                                                                      children: eu
                                                                                                  })
                                                                                              })
                                                                                          );
                                                                                      })
                                                                              );
                                                                      }
                                                                    : void 0,
                                                                showIconFirst: !0,
                                                                icon: (e) => {
                                                                    let { className: t, isFocused: n } = e;
                                                                    return (0, i.jsx)(d.Status, {
                                                                        status: ed,
                                                                        size: 12,
                                                                        className: r()(t, et.mainStatusIcon),
                                                                        color: n ? 'currentColor' : void 0
                                                                    });
                                                                },
                                                                children: o.tq ? void 0 : eu
                                                            },
                                                            'status-picker'
                                                        )
                                                    }),
                                                    !eI && (0, i.jsx)(d.MenuGroup, { children: ef })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: et.menuOverlay,
                                            children: (0, i.jsxs)(d.Menu, {
                                                navId: 'account',
                                                'aria-label': ee.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                                                hideScroller: !0,
                                                className: et.menu,
                                                onClose: n,
                                                onSelect: void 0,
                                                children: [
                                                    (0, i.jsx)(d.MenuGroup, {
                                                        children: (0, i.jsx)(d.MenuItem, {
                                                            id: 'switch-account',
                                                            focusedClassName: et.menuItemFocused,
                                                            subMenuIconClassName: et.subMenuIcon,
                                                            label: ee.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                                                            icon: d.UserCircleIcon,
                                                            showIconFirst: !0,
                                                            action: () => {
                                                                (0, v.pQ)({
                                                                    action: 'PRESS_SWITCH_ACCOUNTS',
                                                                    analyticsLocations: el
                                                                }),
                                                                    (0, X.Z)();
                                                            },
                                                            children: eS
                                                        })
                                                    }),
                                                    (0, i.jsx)(d.MenuGroup, { children: eC })
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
