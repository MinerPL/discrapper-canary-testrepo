n.d(t, {
    Z: function () {
        return ec;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(722770),
    l = n(873546),
    s = n(852229),
    o = n(442837),
    c = n(481060),
    d = n(788307),
    u = n(2052),
    h = n(393238),
    m = n(727637),
    p = n(100527),
    g = n(906732),
    f = n(335131),
    _ = n(436774),
    E = n(676035),
    I = n(440051),
    C = n(734934),
    v = n(158238),
    S = n(759198),
    N = n(300284),
    T = n(680295),
    x = n(703656),
    b = n(785717),
    A = n(221292),
    Z = n(481046),
    y = n(687158),
    L = n(899007),
    R = n(648052),
    P = n(867176),
    O = n(438163),
    j = n(483424),
    D = n(681837),
    M = n(502762),
    w = n(530),
    k = n(544989),
    U = n(309494),
    G = n(969205),
    B = n(171368),
    H = n(420654),
    V = n(695346),
    F = n(158776),
    z = n(246946),
    Y = n(572004),
    W = n(70956),
    K = n(5192),
    q = n(111361),
    X = n(51144),
    Q = n(246133),
    J = n(474376),
    $ = n(435478),
    ee = n(383832),
    et = n(981631),
    en = n(228168),
    ei = n(388032),
    er = n(217593),
    ea = n(451563);
let el = [
    {
        duration: 30 * W.Z.Millis.MINUTE,
        label: () => ei.intl.string(ei.t.RxJGbG)
    },
    {
        duration: W.Z.Millis.HOUR,
        label: () => ei.intl.string(ei.t.UMWBZm)
    },
    {
        duration: 3 * W.Z.Millis.HOUR,
        label: () => ei.intl.string(ei.t.QmYWtr)
    },
    {
        duration: 8 * W.Z.Millis.HOUR,
        label: () => ei.intl.string(ei.t.EpAXPD)
    },
    {
        duration: W.Z.Millis.DAY,
        label: () => ei.intl.string(ei.t['755t4u'])
    },
    {
        duration: void 0,
        label: () => ei.intl.string(ei.t['46dqJS'])
    }
];
function es(e, t, n) {
    let r = (0, i.jsx)(i.Fragment, {
        children: el.map((n) => {
            let { duration: r, label: a } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(r),
                    label: a(),
                    action: () => (0, Q.Z)(e, t, void 0, r),
                    dontCloseOnAction: !0
                },
                r
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: er.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: er.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: er.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: er.status,
                        children: (0, X.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: er.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, Q.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== et.Skl.ONLINE ? r : void 0
    });
}
function eo(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: er.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: er.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: er.status,
                        children: (0, X.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: er.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, Q.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function ec(e) {
    var t;
    let { currentUser: W, onClose: Q, setPopoutRef: ec } = e,
        ed = __OVERLAY__,
        eu = (0, y.ZP)(W.id),
        eh = (0, u.O)(),
        { analyticsLocations: em } = (0, g.ZP)(p.Z.ACCOUNT_PROFILE_POPOUT),
        ep = (0, b.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: W.id
        }),
        { ref: eg } = (0, h.Z)(),
        ef = (0, m.Z)(eg);
    r.useEffect(() => {
        null == ec || ec(eg.current);
    }, [eg, ec]);
    let e_ = (0, o.e7)([F.Z], () => F.Z.getStatus(W.id)),
        eE = (0, o.e7)([z.Z], () => z.Z.hidePersonalInformation),
        eI = (0, C.p)(),
        eC = V.Sb.useSetting(),
        ev = (0, E.a)(),
        eS = (function (e) {
            let t = I.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = V.Cr.useSetting(),
                r = (0, C.p)(),
                l = v.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || r,
                s = V.fv.useSetting(),
                o = e === et.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? ei.intl.formatToPlainString(ei.t.BWD8fn, {
                                  endTime: new Date(Number(n)).toLocaleString(ei.intl.currentLocale, {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case et.Skl.DND:
                            return l ? ei.intl.string(ei.t.day5Aw) : ei.intl.string(ei.t.U9Vv19);
                        case et.Skl.INVISIBLE:
                            return ei.intl.string(ei.t.MqanVF);
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: el.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: r(),
                                action: () => {
                                    (0, C.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    eo(et.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? es(et.Skl.IDLE, e, d(et.Skl.IDLE)) : eo(et.Skl.IDLE, e, d(et.Skl.IDLE)),
                    t ? es(et.Skl.DND, e, d(et.Skl.DND)) : eo(et.Skl.DND, e, d(et.Skl.DND)),
                    t ? es(et.Skl.INVISIBLE, e, d(et.Skl.INVISIBLE)) : eo(et.Skl.INVISIBLE, e, d(et.Skl.INVISIBLE)),
                    l || r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      c.MenuItem,
                                      {
                                          id: 'quiet-mode',
                                          'aria-label': 'focus mode',
                                          className: er.expiringStatusMenuItem,
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: () =>
                                              (0, i.jsxs)('div', {
                                                  className: er.statusItem,
                                                  children: [
                                                      (0, i.jsx)(c.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: er.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: er.focusModeTitle,
                                                          children: [
                                                              ei.intl.string(ei.t.gJRnwM),
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: r ? ei.intl.string(ei.t.ApAu9f) : o ? ei.intl.string(ei.t.gH3Fra) : ei.intl.string(ei.t['64pl8/']),
                                                                  color: r ? a.Z.BRAND_500 : o ? a.Z.RED_400 : a.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: er.description,
                                                          children:
                                                              r && null != s && '0' !== s
                                                                  ? ei.intl.formatToPlainString(ei.t.BWD8fn, {
                                                                        endTime: new Date(Number(s)).toLocaleString(ei.intl.currentLocale, {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : ei.intl.string(ei.t['Br1q+/'])
                                                      })
                                                  ]
                                              }),
                                          action: () => {
                                              (0, C.oW)(!r);
                                          },
                                          dontCloseOnAction: !0,
                                          children: u
                                      },
                                      'quiet-mode'
                                  )
                              ]
                          })
                        : null
                ]
            });
        })(e_),
        eN = (0, J.g)(Q),
        eT = (0, N.Z)({ analyticsLocations: em }),
        { customStatusBubbleEditEnabled: ex } = (0, Z.K)({ location: 'AccountProfilePopout' }),
        eb = (0, q.I5)(W),
        eA = (e) => {
            null == Q || Q(),
                (0, B.openUserProfileModal)({
                    sourceAnalyticsLocations: em,
                    ...ep,
                    ...e
                });
        },
        eZ = () => {
            (0, c.openModalLazy)(async () => {
                let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        sourceAnalyticsContext: eh,
                        sourceAnalyticsLocations: em
                    });
            });
        },
        ey = () => {
            (0, x.uL)(et.Z5c.APPLICATION_STORE), Q();
        };
    return (0, i.jsx)(g.Gt, {
        value: em,
        children: (0, i.jsx)(b.Mt, {
            value: ep,
            children: (0, i.jsx)(c.Dialog, {
                ref: eg,
                'aria-label': W.username,
                children: (0, i.jsxs)(M.Z, {
                    className: er.themeContainer,
                    user: W,
                    displayProfile: eu,
                    profileType: en.y0.BITE_SIZE,
                    children: [
                        !ex &&
                            (0, i.jsx)(k.Z, {
                                profileType: en.y0.BITE_SIZE,
                                children: (0, i.jsx)(G.Z, {
                                    userId: W.id,
                                    onClose: Q
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: ea.header,
                            children: [
                                (0, i.jsx)(P.Z, {
                                    user: W,
                                    displayProfile: eu,
                                    profileType: en.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(L.Z, {
                                    user: W,
                                    displayProfile: eu,
                                    profileType: en.y0.BITE_SIZE,
                                    onOpenProfile: ed ? void 0 : eA
                                }),
                                (0, i.jsx)(O.Z, {
                                    user: W,
                                    profileType: en.y0.BITE_SIZE,
                                    onCloseProfile: Q
                                })
                            ]
                        }),
                        (null == eu ? void 0 : eu.profileEffectId) != null &&
                            (0, i.jsx)(T.Z, {
                                profileEffectId: null == eu ? void 0 : eu.profileEffectId,
                                isHovering: ef
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: er.body,
                            children: [
                                (0, i.jsx)(w.Z, {
                                    user: W,
                                    className: er.username,
                                    profileType: en.y0.BITE_SIZE,
                                    nickname: K.ZP.getName(null, null, W),
                                    onOpenProfile: ed ? void 0 : eA,
                                    pronouns: null == eu ? void 0 : eu.pronouns,
                                    tags: (0, i.jsx)(R.Z, {
                                        displayProfile: eu,
                                        profileType: en.y0.BITE_SIZE,
                                        onClose: Q
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(D.Z, { userId: W.id }),
                                            (0, i.jsx)(U.Z, {
                                                user: W,
                                                isHovering: ef
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(H.Z, {
                                    user: W,
                                    bio: null == eu ? void 0 : eu.bio,
                                    hidePersonalInformation: eE,
                                    onClose: Q
                                }),
                                (0, i.jsx)(j.Z, {
                                    user: W,
                                    currentUser: W,
                                    onClose: Q
                                }),
                                (0, i.jsxs)('div', {
                                    className: er.menus,
                                    children: [
                                        (0, i.jsx)(M.Z.Overlay, {
                                            className: er.menuOverlay,
                                            children: (0, i.jsxs)($.PB, {
                                                id: 'profile-'.concat(W.id),
                                                children: [
                                                    ex &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)($.Mv, {
                                                                    id: 'edit-profile',
                                                                    action: 'EDIT_PROFILE',
                                                                    label: ei.intl.string(ei.t.s5vZlZ),
                                                                    icon: c.PencilIcon,
                                                                    onClick: () => {
                                                                        eT(), Q();
                                                                    }
                                                                }),
                                                                (0, i.jsx)('div', { className: er.menuDivider })
                                                            ]
                                                        }),
                                                    (0, i.jsx)($.Mv, {
                                                        id: 'shop',
                                                        action: en.yM.VISIT_SHOP,
                                                        label: ei.intl.string(ei.t.b2d0Nz),
                                                        icon: c.ShopIcon,
                                                        onClick: () => {
                                                            (0, f.mK)({
                                                                analyticsLocations: em,
                                                                openInLayer: !1,
                                                                analyticsSource: p.Z.ACCOUNT_PROFILE_POPOUT
                                                            }),
                                                                Q();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: er.menuDivider }),
                                                    eb
                                                        ? (0, i.jsx)($.Mv, {
                                                              id: 'view-premium-perks',
                                                              action: en.yM.VIEW_PREMIUM_PERKS,
                                                              label: ei.intl.string(ei.t.AnlV9f),
                                                              icon: c.NitroWheelIcon,
                                                              onClick: ey
                                                          })
                                                        : (0, i.jsx)($.Mv, {
                                                              id: 'get-premium',
                                                              action: en.yM.GET_PREMIUM,
                                                              label: (0, i.jsx)(S.Z, {
                                                                  variant: 'text-sm/medium',
                                                                  children: ei.intl.string(ei.t.x6rkDg)
                                                              }),
                                                              icon: () =>
                                                                  (0, i.jsx)(c.NitroWheelIcon, {
                                                                      size: 'xs',
                                                                      color: _.JX.PREMIUM_TIER_2
                                                                  }),
                                                              onClick: ey
                                                          })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(M.Z.Overlay, {
                                            className: er.menuOverlay,
                                            children: (0, i.jsxs)($.PB, {
                                                id: 'account-'.concat(W.id),
                                                children: [
                                                    (0, i.jsx)($.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, X.u5)(e_)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: e_,
                                                                size: 12
                                                            }),
                                                        hint: (eI || e_ === et.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: l.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)($.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: er.statusPickerModalMenu,
                                                                      'aria-label': ei.intl.string(ei.t.E13trK),
                                                                      onClose: t,
                                                                      children: eS
                                                                  });
                                                              },
                                                        onClick: l.tq
                                                            ? () => {
                                                                  Q(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': ei.intl.string(ei.t['3Uj+2t']),
                                                                                          className: er.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': ei.intl.string(ei.t.E13trK),
                                                                                              className: er.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: eS
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    !ex &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: er.menuDivider }),
                                                                null == ev
                                                                    ? (0, i.jsx)($.Mv, {
                                                                          id: 'add-custom-status',
                                                                          action: 'PRESS_ADD_CUSTOM_STATUS',
                                                                          label: ei.intl.string(ei.t.ezAcPz),
                                                                          icon: () => (0, i.jsx)('div', { className: er.customEmojiPlaceholder }),
                                                                          onClick: () => {
                                                                              Q(), eZ();
                                                                          }
                                                                      })
                                                                    : (0, i.jsx)($.Mv, {
                                                                          id: 'edit-custom-status',
                                                                          action: 'PRESS_EDIT_CUSTOM_STATUS',
                                                                          label: ei.intl.string(ei.t['d/HLjo']),
                                                                          icon: () =>
                                                                              null != ev.emoji
                                                                                  ? (0, i.jsx)(d.Iv, {
                                                                                        emoji: ev.emoji,
                                                                                        animate: !0,
                                                                                        hideTooltip: !0
                                                                                    })
                                                                                  : null,
                                                                          hint: (0, i.jsx)(c.Clickable, {
                                                                              tabIndex: -1,
                                                                              className: er.clearCustomStatusHint,
                                                                              onClick: (e) => {
                                                                                  e.stopPropagation(),
                                                                                      (0, A.pQ)({
                                                                                          action: 'PRESS_CLEAR_CUSTOM_STATUS',
                                                                                          analyticsLocations: em
                                                                                      }),
                                                                                      V.Ok.updateSetting(void 0);
                                                                              },
                                                                              children: (0, i.jsx)(c.CircleXIcon, {
                                                                                  size: 'sm',
                                                                                  color: 'currentColor'
                                                                              })
                                                                          }),
                                                                          onClick: () => {
                                                                              Q(), eZ();
                                                                          }
                                                                      })
                                                            ]
                                                        }),
                                                    (0, i.jsx)('div', { className: er.menuDivider }),
                                                    (0, i.jsx)($.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: ei.intl.string(ei.t.oMNyYG),
                                                        onClick: () => {
                                                            Q(), (0, ee.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)($.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': ei.intl.string(ei.t.wFhVqK),
                                                                onClose: t,
                                                                children: eN
                                                            });
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        !__OVERLAY__ &&
                                            Y.wS &&
                                            eC &&
                                            (0, i.jsx)(M.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, i.jsx)($.PB, {
                                                    id: 'dev-'.concat(W.id),
                                                    children: (0, i.jsx)($.Mv, {
                                                        id: 'copy-user-id',
                                                        action: 'COPY_USER_ID',
                                                        icon: c.IdIcon,
                                                        label: ei.intl.string(ei.t['/AXYnJ']),
                                                        onClick: () => {
                                                            (0, s.J)(W.id), Q();
                                                        }
                                                    })
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
