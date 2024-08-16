l(47120);
var n = l(735250),
    a = l(470079),
    o = l(120356),
    s = l.n(o),
    i = l(392711),
    r = l(498607),
    C = l.n(r),
    c = l(399606),
    d = l(692547),
    u = l(481060),
    m = l(700582),
    _ = l(745735),
    E = l(906732),
    h = l(346486),
    M = l(715903),
    x = l(69882),
    b = l(189357),
    T = l(493892),
    L = l(433355),
    g = l(430824),
    I = l(496675),
    p = l(594174),
    H = l(203893),
    f = l(777288),
    N = l(5192),
    R = l(709054),
    A = l(51144),
    S = l(815790),
    Z = l(588215),
    j = l(241559),
    v = l(893966),
    D = l(685244),
    O = l(16829),
    B = l(256003),
    V = l(472596),
    U = l(285173),
    w = l(981631),
    k = l(689938),
    F = l(931658);
let y = a.memo(function (e) {
    let { member: t } = e,
        l = a.useMemo(() => (0, x.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        o = a.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
    return (0, n.jsxs)('div', {
        className: s()(F.flagContainer),
        children: [
            t.hasUnusualDmActivity &&
                (0, n.jsx)(u.Tooltip, {
                    text: k.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
                    children: (e) => {
                        let { onMouseEnter: t, onMouseLeave: l } = e;
                        return (0, n.jsx)(u.ChatWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: d.Z.colors.TEXT_MUTED.css
                        });
                    }
                }),
            l &&
                (0, n.jsx)(u.Tooltip, {
                    'aria-label': k.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
                    allowOverflow: !0,
                    text: (0, n.jsxs)('div', {
                        className: F.communicationDisabledTooltip,
                        children: [
                            (0, n.jsx)('div', { children: k.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP }),
                            (0, n.jsx)(h.Z, {
                                deadline: o,
                                showUnits: !0,
                                stopAtOneSec: !0
                            })
                        ]
                    }),
                    children: (e) => {
                        let { onMouseEnter: t, onMouseLeave: l } = e;
                        return (0, n.jsx)(u.ClockWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: d.Z.colors.TEXT_DANGER.css
                        });
                    }
                }),
            (0, T.He)(t.userId) &&
                (0, n.jsx)(u.Tooltip, {
                    text: k.Z.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
                    children: (e) => {
                        let { onMouseEnter: t, onMouseLeave: l } = e;
                        return (0, n.jsx)(H.Z, {
                            width: 20,
                            height: 20,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: d.Z.colors.TEXT_DANGER.css
                        });
                    }
                }),
            (0, M.EY)(t) &&
                (0, n.jsx)(u.Tooltip, {
                    text: k.Z.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
                    children: (e) => {
                        let { onMouseEnter: t, onMouseLeave: l } = e;
                        return (0, n.jsx)(u.ChatXIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: d.Z.colors.TEXT_MUTED.css
                        });
                    }
                })
        ]
    });
});
function P(e) {
    let { member: t } = e,
        l = (0, c.e7)([g.Z], () => g.Z.getRoles(t.guildId)),
        o = a.useMemo(
            () =>
                null == t.highestRoleId
                    ? t.roles
                    : Object.values(l)
                          .filter((e) => e.id !== t.highestRoleId && t.roles.includes(e.id))
                          .sort((e, t) => {
                              var l, n;
                              return null !== (n = null !== (l = null == e ? void 0 : e.position) && void 0 !== l ? l : 0 - (null == t ? void 0 : t.position)) && void 0 !== n ? n : 0;
                          })
                          .map((e) => e.id),
            [t.roles, t.highestRoleId, l]
        );
    return 0 === o.length
        ? null
        : (0, n.jsx)('div', {
              className: F.roleTooltipItemContainer,
              children: o.map((e) =>
                  (0, n.jsx)(
                      U.Z,
                      {
                          className: s()(F.roleTooltipItem),
                          role: l[e],
                          guildId: t.guildId
                      },
                      e
                  )
              )
          });
}
let Y = a.memo(function (e) {
        let { member: t, highestRole: l } = e,
            o = (0, c.e7)([g.Z], () => g.Z.getGuild(t.guildId), [t.guildId]),
            [i, r] = a.useState(!1),
            C = t.roles.length - 1,
            d = a.useMemo(() => new Intl.NumberFormat(k.Z.getLocale()).format(C), [C]),
            m = (0, V.qr)(t),
            _ = (0, c.e7)([I.Z], () => I.Z.can(w.Plq.MANAGE_ROLES, o), [o]),
            E = a.useCallback(
                (e) => () => {
                    r(!0), null == e || e();
                },
                []
            ),
            h = a.useCallback(
                (e) => () => {
                    r(!1), null == e || e();
                },
                []
            );
        return null == o
            ? null
            : (0, n.jsxs)('div', {
                  className: s()(F.roleContainer),
                  children: [
                      null != l &&
                          (0, n.jsx)(U.Z, {
                              className: s()(F.roleTooltipItem, F.highestRole),
                              role: l,
                              guildId: t.guildId
                          }),
                      C > 0 &&
                          (0, n.jsx)(u.Tooltip, {
                              'aria-label': k.Z.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
                              tooltipContentClassName: F.roleTooltip,
                              allowOverflow: !0,
                              text: (0, n.jsx)('div', {
                                  className: F.roleTooltipSafetyContainer,
                                  children: i ? (0, n.jsx)(P, { member: t }) : k.Z.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
                              }),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: l } = e;
                                  return (0, n.jsx)(u.Clickable, {
                                      className: s()(F.otherRoles),
                                      onMouseEnter: E(t),
                                      onMouseLeave: h(l),
                                      children: (0, n.jsxs)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-primary',
                                          children: ['+', d]
                                      })
                                  });
                              }
                          }),
                      _ &&
                          (0, n.jsx)(u.Tooltip, {
                              text: k.Z.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: l } = e;
                                  return (0, n.jsx)(u.Clickable, {
                                      className: s()(F.otherRoles, F.addRoleContainer),
                                      onClick: m,
                                      onMouseEnter: t,
                                      onMouseLeave: l,
                                      children: (0, n.jsx)(u.PlusSmallIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: s()(F.addRoleIcon),
                                          width: 16,
                                          height: 16
                                      })
                                  });
                              }
                          })
                  ]
              });
    }),
    G = a.memo(function (e) {
        var t;
        let { member: l, user: o } = e,
            { analyticsLocations: i } = (0, E.ZP)(),
            r = a.useCallback(
                (e) => {
                    if (null != l) e.stopPropagation(), e.preventDefault(), (0, V.RE)(l, i);
                },
                [l, i]
            );
        return null == o || null == l
            ? null
            : (0, n.jsxs)('div', {
                  className: s()(F.memberNameContainer),
                  children: [
                      (0, n.jsx)(u.Clickable, {
                          className: s()(F.memberAvatar),
                          onClick: r,
                          children: (0, n.jsx)(m.Z, { user: o })
                      }),
                      (0, n.jsx)('div', {
                          className: s()(F.memberName),
                          children: (0, n.jsx)(u.Text, {
                              variant: 'text-sm/medium',
                              children: (0, n.jsx)(u.Clickable, {
                                  onClick: r,
                                  children: (0, n.jsx)(u.NameWithRole, {
                                      name: N.ZP.getName(l.guildId, null, o),
                                      color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
                                      className: s()(F.memberNameText)
                                  })
                              })
                          })
                      }),
                      (0, n.jsx)('div', {
                          className: s()(F.memberGlobalName),
                          children: (0, n.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, n.jsx)(u.Clickable, {
                                  onClick: r,
                                  tag: 'span',
                                  children: A.ZP.getUserTag(o)
                              })
                          })
                      })
                  ]
              });
    });
function z(e) {
    let t = null == e ? null : (0, S.fv)(e, S.jq.JOINED_AT);
    return {
        short: t,
        long: new Date(null != e ? e : 0).toLocaleDateString(k.Z.getLocale(), S.UG)
    };
}
function q(e) {
    let { member: t, showLongDate: l, isSortedBy: o } = e,
        [i, r] = a.useState(null);
    a.useEffect(() => {
        r(z(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, _.Z)(() => {
            r(z(t.joinedAtTimestamp));
        }, 10000);
    let C = o ? 'text-brand' : 'text-normal';
    return (null == i ? void 0 : i.short) == null
        ? null
        : l
          ? (0, n.jsx)('div', {
                className: s()(F.__invalid_joinedAtContainer),
                children: (0, n.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: C,
                    children: i.long
                })
            })
          : (0, n.jsx)('div', {
                className: s()(F.__invalid_joinedAtContainer),
                children: (0, n.jsx)(u.Tooltip, {
                    align: 'left',
                    text: i.long,
                    children: (e) =>
                        (0, n.jsx)(u.Text, {
                            ...e,
                            variant: 'text-sm/medium',
                            color: C,
                            children: i.short
                        })
                })
            });
}
let W = a.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: o } = e,
            { accountCreationDateShort: s, accountCreationDateLong: i } = a.useMemo(() => {
                let e = R.default.extractTimestamp(t.userId),
                    l = (0, S.fv)(e, S.jq.ACCOUNT_AGE);
                return {
                    accountCreationDateShort: l,
                    accountCreationDateLong: new Date(e).toLocaleDateString(k.Z.getLocale(), S.I)
                };
            }, [t.userId]),
            r = o ? 'text-brand' : 'text-normal';
        return l
            ? (0, n.jsx)(u.Text, {
                  variant: 'text-sm/medium',
                  color: r,
                  children: i
              })
            : (0, n.jsx)(u.Tooltip, {
                  align: 'left',
                  text: i,
                  children: (e) =>
                      (0, n.jsx)(u.Text, {
                          ...e,
                          variant: 'text-sm/medium',
                          color: r,
                          children: s
                      })
              });
    }),
    J = a.memo(function (e) {
        let { member: t, user: l, highestRole: o, isHoldingAdvancedInfoKey: i, onOpenModerationMenu: r, onOpenProfileMenu: d, compact: m } = e,
            _ = (0, c.e7)([I.Z, g.Z], () => I.Z.can(w.Plq.MANAGE_GUILD, g.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: E, addUsers: h, removeUser: M } = (0, B.Z)(t.guildId),
            x = (0, j.xC)(t.guildId),
            T = (0, j.hB)(t.guildId, x, t.userId),
            L = (0, b.ms)(t.guildId),
            p = (0, c.e7)(
                [v.Z],
                () => {
                    var e;
                    return null !== (e = v.Z.getSearchStateByGuildId(t.guildId).selectedSort) && void 0 !== e ? e : Z.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                C()
            ),
            H = a.useCallback(
                (e) => {
                    if ((e.stopPropagation(), e.preventDefault(), null != t && !!T)) E.has(t.userId) ? M(t.userId) : h([t.userId]);
                },
                [h, T, t, M, E]
            ),
            N = p === Z.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            R = p === Z.d$.ORDER_BY_USER_ID_ASC || p === Z.d$.ORDER_BY_USER_ID_DESC;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                x &&
                    (0, n.jsx)(u.Tooltip, {
                        tooltipClassName: F.disabledActionTooltip,
                        shouldShow: !T,
                        text: k.Z.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
                        children: (e) =>
                            (0, n.jsx)('td', {
                                ...e,
                                children: (0, n.jsx)('div', {
                                    className: s()(F.__invalid_checkbox, F.xsmallCol),
                                    children: (0, n.jsx)(u.Clickable, {
                                        onClick: H,
                                        children: (0, n.jsx)(u.Checkbox, {
                                            type: u.Checkbox.Types.INVERTED,
                                            value: E.has(t.userId),
                                            disabled: !T
                                        })
                                    })
                                })
                            })
                    }),
                (0, n.jsx)('td', {
                    className: s()({ [F.compact]: m }),
                    children: (0, n.jsx)(G, {
                        member: t,
                        user: l
                    })
                }),
                (0, n.jsx)('td', {
                    className: s()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsx)(q, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: N
                    })
                }),
                (0, n.jsx)('td', {
                    className: s()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsx)(W, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: R
                    })
                }),
                _ &&
                    (0, n.jsx)('td', {
                        className: s()(F.smallCol, { [F.compact]: m }),
                        children: (0, n.jsx)(O.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, n.jsx)('td', {
                    className: s()(F.mediumCol, { [F.compact]: m }),
                    children: (0, n.jsx)(Y, {
                        member: t,
                        highestRole: o
                    })
                }),
                (0, n.jsx)('td', {
                    className: s()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsx)(y, { member: t })
                }),
                (0, n.jsx)('td', {
                    className: s()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsxs)('div', {
                        className: s()(F.actionCell),
                        children: [
                            (0, n.jsx)(u.Tooltip, {
                                text: L ? k.Z.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : k.Z.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: l } = e;
                                    return (0, n.jsx)(u.Clickable, {
                                        onMouseEnter: t,
                                        onMouseLeave: l,
                                        onClick: d,
                                        className: s()(F.button),
                                        children: L
                                            ? (0, n.jsx)(f.Z, {
                                                  width: K,
                                                  height: K
                                              })
                                            : (0, n.jsx)(u.UserIcon, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: K,
                                                  height: K
                                              })
                                    });
                                }
                            }),
                            (0, n.jsx)(u.Tooltip, {
                                text: k.Z.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: l } = e;
                                    return (0, n.jsx)(u.Clickable, {
                                        onMouseEnter: t,
                                        onMouseLeave: l,
                                        onClick: r,
                                        className: s()(F.button),
                                        children: (0, n.jsx)(u.MoreVerticalIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: K,
                                            height: K
                                        })
                                    });
                                }
                            })
                        ]
                    })
                })
            ]
        });
    }),
    K = 18,
    $ = ['sourceInviteCode', 'joinSourceType', 'inviterId', 'integrationType', 'joinedAt', 'joinedAtTimestamp'];
t.Z = a.memo(function (e) {
    let { userId: t, guildId: l, style: o, onSelect: r, rowSelected: d, isLoading: u = !1, isHoldingAdvancedInfoKey: m = !1, compact: _ = !1 } = e,
        E = (0, c.e7)([L.ZP], () => L.ZP.getGuildSidebarState(l), [l]),
        h = (null == E ? void 0 : E.details.userId) === t,
        M = (0, c.e7)([v.Z], () => v.Z.getEnhancedMember(l, t), [l, t]),
        x = (0, V.zq)(M),
        b = (0, c.e7)([p.default], () => p.default.getUser(t), [t]),
        T = (0, V.RN)(null != M ? M : void 0),
        g = a.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), T(e);
            },
            [T]
        ),
        I = a.useCallback(
            (e) => {
                if ((e.stopPropagation(), e.preventDefault(), null != M)) null == r || r(M);
            },
            [r, M]
        ),
        H = a.useCallback(
            (e) => {
                if ((e.stopPropagation(), e.preventDefault(), null != M)) null == r || r(M);
            },
            [M, r]
        ),
        f = a.useCallback((e, t) => C()((0, i.omit)(e, $), (0, i.omit)(t, $)), []);
    return null == M
        ? null
        : (0, n.jsx)(D.Z, {
              role: 'row',
              value: M,
              style: o,
              className: s()(F.roundedRow, F.memberRowContainer, d && F.selected, h && F.memberSelected, u && F.loading),
              equalityFn: f,
              onClick: I,
              onContextMenu: g,
              children: (0, n.jsx)(J, {
                  member: M,
                  user: b,
                  highestRole: x,
                  isHoldingAdvancedInfoKey: m,
                  onOpenModerationMenu: g,
                  onOpenProfileMenu: H,
                  compact: _
              })
          });
});
