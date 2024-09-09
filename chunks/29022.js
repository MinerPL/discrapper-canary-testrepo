t.r(n),
    t.d(n, {
        default: function () {
            return b;
        }
    }),
    t(47120),
    t(653041);
var a,
    s,
    o = t(735250),
    i = t(470079),
    l = t(149765),
    r = t(442837),
    c = t(704215),
    _ = t(692547),
    I = t(481060),
    d = t(388905),
    E = t(434404),
    N = t(764260),
    S = t(422559),
    u = t(430824),
    T = t(768581),
    O = t(700785),
    m = t(645041),
    p = t(981631),
    A = t(921944),
    L = t(135899),
    M = t(689938),
    C = t(951410);
function h(e) {
    let { guild: n, headerText: a, headerSubtext: s, step: i } = e,
        l = T.ZP.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 120
        });
    return (0, o.jsxs)(I.ModalHeader, {
        className: C.header,
        children: [
            (0, o.jsxs)('div', {
                className: C.headerIconContainer,
                children: [
                    null != l
                        ? (0, o.jsx)(I.Avatar, {
                              src: l,
                              'aria-label': n.name,
                              size: I.AvatarSizes.SIZE_120,
                              className: C.__invalid_guildIcon
                          })
                        : (0, o.jsx)('div', {
                              className: C.acronym,
                              children: n.acronym
                          }),
                    2 === i
                        ? (0, o.jsx)(I.CircleCheckIcon, {
                              size: 'md',
                              className: C.greenPing,
                              color: _.Z.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: _.Z.unsafe_rawColors.WHITE_100.css
                          })
                        : (0, o.jsx)(d.Ee, {
                              src: t(173326),
                              className: C.redPing
                          })
                ]
            }),
            (0, o.jsxs)('div', {
                className: C.headerText,
                children: [
                    (0, o.jsx)(I.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: a
                    }),
                    (0, o.jsx)(I.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: s
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { guild: n } = e,
        t = (0, r.e7)([u.Z], () => u.Z.getRole(n.id, n.getEveryoneRoleId()));
    if (null == t) return null;
    let { name: a, color: s } = t;
    return (0, o.jsxs)('span', {
        className: C.roleRow,
        children: [
            (0, o.jsx)(I.RoleDot, {
                className: C.roleDot,
                color: s.toString(),
                background: !1,
                tooltip: !1
            }),
            (0, o.jsx)(I.Text, {
                className: C.roleName,
                variant: 'text-sm/medium',
                color: 'interactive-active',
                children: a
            })
        ]
    });
}
((s = a || (a = {}))[(s.DEFAULT = 0)] = 'DEFAULT'), (s[(s.SUBMITTING = 1)] = 'SUBMITTING'), (s[(s.SUBMITTED = 2)] = 'SUBMITTED');
let U = (e) => {
    if (e.toString() === p.Plq.MENTION_EVERYONE.toString()) return M.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
    return (0, S.wt)(e);
};
function D(e) {
    let { permissions: n, step: t } = e;
    return 2 === t
        ? null
        : (0, o.jsxs)('div', {
              className: C.tableContainer,
              children: [
                  (0, o.jsx)(I.Text, {
                      className: C.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 0 === t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS : M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                  }),
                  (0, o.jsx)('div', {
                      className: C.permissionsTable,
                      children: n.map((e, n) =>
                          (0, o.jsxs)(
                              'div',
                              {
                                  className: C.permissionRow,
                                  children: [
                                      (0, o.jsx)('div', { className: 0 === t ? C.bulletPositive : C.bulletWarning }),
                                      (0, o.jsx)(I.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: U(e)
                                      })
                                  ]
                              },
                              n
                          )
                      )
                  })
              ]
          });
}
function x(e) {
    let { permissions: n, step: t } = e;
    return 0 === n.length && 2 !== t
        ? null
        : (2 === t && (n = L.$X),
          (0, o.jsxs)('div', {
              className: C.tableContainer,
              children: [
                  (0, o.jsx)(I.Text, {
                      className: C.tableHeader,
                      variant: 'text-xs/semibold',
                      color: 'text-muted',
                      children: 2 === t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED : M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
                  }),
                  (0, o.jsx)('div', {
                      className: C.permissionsTable,
                      children: n.map((e, n) =>
                          (0, o.jsxs)(
                              'div',
                              {
                                  className: C.permissionRow,
                                  children: [
                                      (0, o.jsx)('div', { className: C.bullet }),
                                      (0, o.jsx)(I.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: U(e)
                                      })
                                  ]
                              },
                              n
                          )
                      )
                  })
              ]
          }));
}
function f(e) {
    let { permissions: n, step: t } = e,
        { enabledPermissions: a, disabledPermissions: s } = n;
    return 0 === a.length && 2 !== t
        ? null
        : (0, o.jsxs)('div', {
              className: C.table,
              children: [
                  2 !== t
                      ? (0, o.jsx)(D, {
                            permissions: a,
                            step: t
                        })
                      : null,
                  (0, o.jsx)(x, {
                      permissions: s,
                      step: t
                  })
              ]
          });
}
function g(e) {
    let { guild: n, permissions: t, step: a, canEveryoneModerate: s, isDefaultNotificationsAllMessages: i } = e;
    return (0, o.jsx)(I.ModalContent, {
        children: (0, o.jsxs)('div', {
            className: C.updatedForm,
            children: [
                i
                    ? (0, o.jsxs)('div', {
                          className: C.checklistRow,
                          children: [
                              (0, o.jsx)(I.CircleCheckIcon, {
                                  size: 'md',
                                  className: C.checklistIcon,
                                  color: _.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: _.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, o.jsx)(I.Text, {
                                  variant: 'text-md/normal',
                                  children: M.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                      infoHook: () =>
                                          (0, o.jsx)(I.Tooltip, {
                                              text: M.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                              'aria-label': M.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                              children: (e) =>
                                                  (0, o.jsx)(I.CircleInformationIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: C.icon,
                                                      ...e
                                                  })
                                          })
                                  })
                              })
                          ]
                      })
                    : null,
                s
                    ? (0, o.jsxs)('div', {
                          className: C.checklistRow,
                          children: [
                              (0, o.jsx)(I.CircleCheckIcon, {
                                  size: 'md',
                                  className: C.checklistIcon,
                                  color: _.Z.unsafe_rawColors.GREEN_360.css,
                                  secondaryColor: _.Z.unsafe_rawColors.WHITE_100.css
                              }),
                              (0, o.jsx)(I.Text, {
                                  variant: 'text-md/normal',
                                  children: M.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                              }),
                              (0, o.jsx)(R, { guild: n })
                          ]
                      })
                    : null,
                (0, o.jsx)(f, {
                    permissions: t,
                    step: a
                })
            ]
        })
    });
}
function v(e) {
    let { onConfirm: n, onDismiss: t, canEveryoneModerate: a, step: s } = e;
    return (0, o.jsxs)(I.ModalFooter, {
        className: C.footer,
        children: [
            (0, o.jsx)(I.Button, {
                onClick: n,
                submitting: 1 === s,
                children: 0 === s ? (a ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION : M.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION) : M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION_DONE
            }),
            0 === s
                ? (0, o.jsx)(I.Button, {
                      look: I.Button.Looks.LINK,
                      onClick: t,
                      color: I.Button.Colors.PRIMARY,
                      children: (0, o.jsx)(I.Text, {
                          variant: 'text-sm/semibold',
                          color: 'header-primary',
                          children: M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
                      })
                  })
                : null
        ]
    });
}
function b(e) {
    let { guild: n, canEveryoneModerate: t, isDefaultNotificationsAllMessages: a, transitionState: s, onClose: r } = e,
        [_, d] = i.useState(0),
        S = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                L.$X.map((a) => {
                    O.oz(a, n) ? e.push(a) : t.push(a);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: t
                }
            );
        }, [n]);
    if (null == n) return null;
    let T = () => {
            let e = u.Z.getRole(n.id, n.getEveryoneRoleId());
            if (null == e) return;
            let t = l.Od(e.permissions, L.mu);
            (0, N.Gf)(n.id, [
                {
                    ...e,
                    permissions: t
                }
            ]);
        },
        R = () => {
            E.Z.updateGuild({ defaultMessageNotifications: p.bL.ONLY_MENTIONS }), E.Z.saveGuild(n.id, { defaultMessageNotifications: p.bL.ONLY_MENTIONS });
        },
        U = () => {
            t && T(), a && R();
        };
    return (0, o.jsxs)(I.ModalRoot, {
        transitionState: s,
        size: I.ModalSize.SMALL,
        className: C.modal,
        children: [
            (0, o.jsx)(h, {
                guild: n,
                headerText: t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_HEADER : M.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_HEADER,
                headerSubtext: t ? M.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_SUBHEADER : M.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_SUBHEADER,
                step: _
            }),
            (0, o.jsx)(g, {
                guild: n,
                permissions: S,
                step: _,
                canEveryoneModerate: t,
                isDefaultNotificationsAllMessages: a
            }),
            (0, o.jsx)(v, {
                onConfirm: () => {
                    var e, a;
                    !t && (U(), r(), (0, m.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : '', !0, A.L.PRIMARY)), 0 === _ ? (d(1), setTimeout(() => d(2), 3000)) : 2 === _ && (U(), r(), (0, m.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (a = null == n ? void 0 : n.id) && void 0 !== a ? a : '', !0, A.L.PRIMARY));
                },
                onDismiss: () => {
                    r(), (0, m.Qd)(c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, n.id, !0, A.L.DISMISS);
                },
                step: _,
                canEveryoneModerate: t
            })
        ]
    });
}
