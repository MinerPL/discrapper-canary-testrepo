n.d(t, {
    Z: function () {
        return ea;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(722770),
    r = n(873546),
    l = n(852229),
    o = n(442837),
    c = n(481060),
    d = n(788307),
    u = n(2052),
    _ = n(393238),
    E = n(727637),
    h = n(100527),
    m = n(906732),
    I = n(676035),
    p = n(440051),
    g = n(734934),
    T = n(158238),
    f = n(300284),
    S = n(680295),
    C = n(785717),
    N = n(221292),
    A = n(481046),
    v = n(687158),
    Z = n(899007),
    L = n(648052),
    R = n(867176),
    O = n(438163),
    x = n(483424),
    b = n(681837),
    M = n(502762),
    P = n(530),
    D = n(544989),
    y = n(309494),
    j = n(969205),
    U = n(171368),
    G = n(420654),
    w = n(695346),
    k = n(158776),
    B = n(246946),
    V = n(572004),
    H = n(70956),
    F = n(5192),
    Y = n(51144),
    z = n(246133),
    W = n(474376),
    K = n(435478),
    q = n(383832),
    Q = n(981631),
    X = n(228168),
    J = n(689938),
    $ = n(217593),
    ee = n(451563);
let et = [
    {
        duration: 30 * H.Z.Millis.MINUTE,
        label: () => J.Z.Messages.MUTE_DURATION_30_MINUTES
    },
    {
        duration: H.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_1_HOUR
    },
    {
        duration: 3 * H.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_3_HOURS
    },
    {
        duration: 8 * H.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_8_HOURS
    },
    {
        duration: H.Z.Millis.DAY,
        label: () => J.Z.Messages.MUTE_DURATION_24_HOURS
    },
    {
        duration: void 0,
        label: () => J.Z.Messages.DURATION_FOREVER
    }
];
function en(e, t, n) {
    let a = (0, i.jsx)(i.Fragment, {
        children: et.map((n) => {
            let { duration: a, label: s } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(a),
                    label: s(),
                    action: () => (0, z.Z)(e, t, void 0, a),
                    dontCloseOnAction: !0
                },
                a
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: $.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: a } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: a ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, Y.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, z.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== Q.Skl.ONLINE ? a : void 0
    });
}
function ei(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: a } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: a ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, Y.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, z.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function ea(e) {
    var t;
    let { currentUser: H, onClose: z, setPopoutRef: ea } = e,
        es = __OVERLAY__,
        er = (0, v.ZP)(H.id),
        el = (0, u.O)(),
        { analyticsLocations: eo } = (0, m.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT),
        ec = (0, C.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: H.id
        }),
        { ref: ed } = (0, _.Z)(),
        eu = (0, E.Z)(ed);
    a.useEffect(() => {
        null == ea || ea(ed.current);
    }, [ed, ea]);
    let e_ = (0, o.e7)([k.Z], () => k.Z.getStatus(H.id)),
        eE = (0, o.e7)([B.Z], () => B.Z.hidePersonalInformation),
        eh = (0, g.p)(),
        em = w.Sb.useSetting(),
        eI = (0, I.a)(),
        ep = (function (e) {
            let t = p.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = w.Cr.useSetting(),
                a = (0, g.p)(),
                r = T.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || a,
                l = w.fv.useSetting(),
                o = e === Q.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? J.Z.Messages.STATUS_UNTIL.format({
                                  endTime: new Date(Number(n)).toLocaleString(J.Z.getLocale(), {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case Q.Skl.DND:
                            return r ? J.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : J.Z.Messages.STATUS_DND_HELP;
                        case Q.Skl.INVISIBLE:
                            return J.Z.Messages.STATUS_INVISIBLE_HELPER;
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: et.map((t) => {
                        let { duration: n, label: a } = t;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: a(),
                                action: () => {
                                    (0, g.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    ei(Q.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? en(Q.Skl.IDLE, e, d(Q.Skl.IDLE)) : ei(Q.Skl.IDLE, e, d(Q.Skl.IDLE)),
                    t ? en(Q.Skl.DND, e, d(Q.Skl.DND)) : ei(Q.Skl.DND, e, d(Q.Skl.DND)),
                    t ? en(Q.Skl.INVISIBLE, e, d(Q.Skl.INVISIBLE)) : ei(Q.Skl.INVISIBLE, e, d(Q.Skl.INVISIBLE)),
                    r || a
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      c.MenuItem,
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
                                                      (0, i.jsx)(c.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: $.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: $.focusModeTitle,
                                                          children: [
                                                              J.Z.Messages.FOCUS_MODE_TITLE,
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: a ? J.Z.Messages.FOCUS_MODE_BADGE_ON : o ? J.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : J.Z.Messages.FOCUS_MODE_BADGE_OFF,
                                                                  color: a ? s.Z.BRAND_500 : o ? s.Z.RED_400 : s.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: $.description,
                                                          children:
                                                              a && null != l && '0' !== l
                                                                  ? J.Z.Messages.STATUS_UNTIL.format({
                                                                        endTime: new Date(Number(l)).toLocaleString(J.Z.getLocale(), {
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
                                              (0, g.oW)(!a);
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
        eg = (0, W.g)(z),
        eT = (0, f.Z)({ analyticsLocations: eo }),
        { customStatusBubbleEditEnabled: ef } = (0, A.K)({ location: 'AccountProfilePopout' }),
        eS = (e) => {
            null == z || z(),
                (0, U.openUserProfileModal)({
                    sourceAnalyticsLocations: eo,
                    ...ec,
                    ...e
                });
        },
        eC = () => {
            (0, c.openModalLazy)(async () => {
                let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        sourceAnalyticsContext: el,
                        sourceAnalyticsLocations: eo
                    });
            });
        };
    return (0, i.jsx)(m.Gt, {
        value: eo,
        children: (0, i.jsx)(C.Mt, {
            value: ec,
            children: (0, i.jsx)(c.Dialog, {
                ref: ed,
                'aria-label': H.username,
                children: (0, i.jsxs)(M.Z, {
                    className: $.themeContainer,
                    user: H,
                    displayProfile: er,
                    profileType: X.y0.BITE_SIZE,
                    children: [
                        !ef &&
                            (0, i.jsx)(D.Z, {
                                profileType: X.y0.BITE_SIZE,
                                children: (0, i.jsx)(j.Z, {
                                    userId: H.id,
                                    onClose: z
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: ee.header,
                            children: [
                                (0, i.jsx)(R.Z, {
                                    user: H,
                                    displayProfile: er,
                                    profileType: X.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(Z.Z, {
                                    user: H,
                                    displayProfile: er,
                                    profileType: X.y0.BITE_SIZE,
                                    onOpenProfile: es ? void 0 : eS
                                }),
                                (0, i.jsx)(O.Z, {
                                    user: H,
                                    profileType: X.y0.BITE_SIZE,
                                    onCloseProfile: z
                                })
                            ]
                        }),
                        (null == er ? void 0 : er.profileEffectId) != null &&
                            (0, i.jsx)(S.Z, {
                                profileEffectId: null == er ? void 0 : er.profileEffectId,
                                isHovering: eu
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: $.body,
                            children: [
                                (0, i.jsx)(P.Z, {
                                    user: H,
                                    className: $.username,
                                    profileType: X.y0.BITE_SIZE,
                                    nickname: F.ZP.getName(null, null, H),
                                    onOpenProfile: es ? void 0 : eS,
                                    pronouns: null == er ? void 0 : er.pronouns,
                                    tags: (0, i.jsx)(L.Z, {
                                        displayProfile: er,
                                        profileType: X.y0.BITE_SIZE,
                                        onClose: z
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(b.Z, { userId: H.id }),
                                            (0, i.jsx)(y.Z, {
                                                user: H,
                                                isHovering: eu
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(G.Z, {
                                    user: H,
                                    bio: null == er ? void 0 : er.bio,
                                    hidePersonalInformation: eE,
                                    onClose: z
                                }),
                                (0, i.jsx)(x.Z, {
                                    user: H,
                                    currentUser: H,
                                    onClose: z
                                }),
                                (0, i.jsxs)('div', {
                                    className: $.menus,
                                    children: [
                                        (0, i.jsx)(M.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(K.PB, {
                                                id: 'profile-'.concat(H.id),
                                                children: [
                                                    ef &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(K.Mv, {
                                                                    id: 'edit-profile',
                                                                    action: 'EDIT_PROFILE',
                                                                    label: J.Z.Messages.EDIT_PROFILE,
                                                                    icon: c.PencilIcon,
                                                                    onClick: () => {
                                                                        eT(), z();
                                                                    }
                                                                }),
                                                                (0, i.jsx)('div', { className: $.menuDivider })
                                                            ]
                                                        }),
                                                    (0, i.jsx)(K.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, Y.u5)(e_)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: e_,
                                                                size: 12
                                                            }),
                                                        hint: (eh || e_ === Q.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: r.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(K.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: $.statusPickerModalMenu,
                                                                      'aria-label': J.Z.Messages.STATUS_MENU_LABEL,
                                                                      onClose: t,
                                                                      children: ep
                                                                  });
                                                              },
                                                        onClick: r.tq
                                                            ? () => {
                                                                  z(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': J.Z.Messages.SET_STATUS,
                                                                                          className: $.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': J.Z.Messages.STATUS_MENU_LABEL,
                                                                                              className: $.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: ep
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    !ef &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: $.menuDivider }),
                                                                null == eI
                                                                    ? (0, i.jsx)(K.Mv, {
                                                                          id: 'add-custom-status',
                                                                          action: 'PRESS_ADD_CUSTOM_STATUS',
                                                                          label: J.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
                                                                          icon: () => (0, i.jsx)('div', { className: $.customEmojiPlaceholder }),
                                                                          onClick: () => {
                                                                              z(), eC();
                                                                          }
                                                                      })
                                                                    : (0, i.jsx)(K.Mv, {
                                                                          id: 'edit-custom-status',
                                                                          action: 'PRESS_EDIT_CUSTOM_STATUS',
                                                                          label: J.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
                                                                          icon: () =>
                                                                              null != eI.emoji
                                                                                  ? (0, i.jsx)(d.I, {
                                                                                        emoji: eI.emoji,
                                                                                        animate: !0,
                                                                                        hideTooltip: !0
                                                                                    })
                                                                                  : null,
                                                                          hint: (0, i.jsx)(c.Clickable, {
                                                                              tabIndex: -1,
                                                                              className: $.clearCustomStatusHint,
                                                                              onClick: (e) => {
                                                                                  e.stopPropagation(),
                                                                                      (0, N.pQ)({
                                                                                          action: 'PRESS_CLEAR_CUSTOM_STATUS',
                                                                                          analyticsLocations: eo
                                                                                      }),
                                                                                      w.Ok.updateSetting(void 0);
                                                                              },
                                                                              children: (0, i.jsx)(c.CircleXIcon, {
                                                                                  size: 'sm',
                                                                                  color: 'currentColor'
                                                                              })
                                                                          }),
                                                                          onClick: () => {
                                                                              z(), eC();
                                                                          }
                                                                      })
                                                            ]
                                                        })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(M.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(K.PB, {
                                                id: 'account-'.concat(H.id),
                                                children: [
                                                    (0, i.jsx)(K.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: J.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                                                        onClick: () => {
                                                            z(), (0, q.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(K.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': J.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                                                                onClose: t,
                                                                children: eg
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        V.wS &&
                                                        em &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: $.menuDivider }),
                                                                (0, i.jsx)(K.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: c.IdIcon,
                                                                    label: J.Z.Messages.COPY_ID_USER,
                                                                    onClick: () => {
                                                                        (0, l.J)(H.id), z();
                                                                    }
                                                                })
                                                            ]
                                                        })
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
