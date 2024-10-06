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
    h = l(979264),
    M = l(346486),
    x = l(715903),
    b = l(69882),
    T = l(189357),
    L = l(493892),
    g = l(433355),
    H = l(430824),
    I = l(496675),
    f = l(594174),
    p = l(203893),
    N = l(777288),
    A = l(5192),
    R = l(709054),
    S = l(51144),
    Z = l(815790),
    j = l(588215),
    v = l(241559),
    D = l(893966),
    B = l(685244),
    O = l(16829),
    V = l(256003),
    U = l(472596),
    w = l(285173),
    k = l(981631),
    F = l(689938),
    y = l(352533);
let P = a.memo(function (e) {
        let { member: t } = e,
            l = a.useMemo(() => (0, b.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            o = a.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
        return (0, n.jsxs)('div', {
            className: s()(y.flagContainer),
            children: [
                t.hasUnusualDmActivity &&
                    (0, n.jsx)(u.Tooltip, {
                        text: F.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
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
                        'aria-label': F.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
                        allowOverflow: !0,
                        text: (0, n.jsxs)('div', {
                            className: y.communicationDisabledTooltip,
                            children: [
                                (0, n.jsx)('div', { children: F.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP }),
                                (0, n.jsx)(M.Z, {
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
                (0, L.He)(t.userId) &&
                    (0, n.jsx)(u.Tooltip, {
                        text: F.Z.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: l } = e;
                            return (0, n.jsx)(p.Z, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: d.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, x.EY)(t) &&
                    (0, n.jsx)(u.Tooltip, {
                        text: F.Z.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
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
    }),
    Y = a.memo(function (e) {
        let { member: t, highestRole: l } = e,
            o = (0, c.e7)([H.Z], () => H.Z.getGuild(t.guildId), [t.guildId]),
            i = t.roles.length - 1,
            r = a.useMemo(() => new Intl.NumberFormat(F.Z.getLocale()).format(i), [i]),
            C = (0, U.vN)(t),
            d = (0, U.vN)(t, !0),
            m = (0, c.e7)([I.Z], () => I.Z.can(k.Plq.MANAGE_ROLES, o), [o]);
        return null == o
            ? null
            : (0, n.jsxs)('div', {
                  className: s()(y.roleContainer),
                  children: [
                      null != l &&
                          (0, n.jsx)(w.Z, {
                              className: s()(y.roleTooltipItem, y.highestRole),
                              role: l,
                              guildId: t.guildId
                          }),
                      i > 0 &&
                          (0, n.jsx)(u.Clickable, {
                              className: s()(y.otherRoles),
                              onMouseEnter: (e) => d(e),
                              children: (0, n.jsxs)(u.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'header-primary',
                                  children: ['+', r]
                              })
                          }),
                      m &&
                          (0, n.jsx)(u.Tooltip, {
                              text: F.Z.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: l } = e;
                                  return (0, n.jsx)(u.Clickable, {
                                      className: s()(y.otherRoles, y.addRoleContainer),
                                      onClick: C,
                                      onMouseEnter: t,
                                      onMouseLeave: l,
                                      children: (0, n.jsx)(u.PlusSmallIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: s()(y.addRoleIcon),
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
                    if (null != l) e.stopPropagation(), e.preventDefault(), (0, U.RE)(l, i);
                },
                [l, i]
            );
        return null == o || null == l
            ? null
            : (0, n.jsxs)('div', {
                  className: s()(y.memberNameContainer),
                  children: [
                      (0, n.jsx)(u.Clickable, {
                          className: s()(y.memberAvatar),
                          onClick: r,
                          children: (0, n.jsx)(m.Z, { user: o })
                      }),
                      (0, n.jsx)('div', {
                          className: s()(y.memberName),
                          children: (0, n.jsx)(u.Text, {
                              variant: 'text-sm/medium',
                              children: (0, n.jsxs)(u.Clickable, {
                                  onClick: r,
                                  className: y.nameContainer,
                                  children: [
                                      (0, n.jsx)(u.NameWithRole, {
                                          name: A.ZP.getName(l.guildId, null, o),
                                          color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
                                          className: s()(y.memberNameText)
                                      }),
                                      (0, n.jsx)(h.ZP, {
                                          clan: null == o ? void 0 : o.clan,
                                          userId: null == o ? void 0 : o.id,
                                          contextGuildId: l.guildId,
                                          containerClassName: y.memberClanTag
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, n.jsx)('div', {
                          className: s()(y.memberGlobalName),
                          children: (0, n.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, n.jsx)(u.Clickable, {
                                  onClick: r,
                                  tag: 'span',
                                  children: S.ZP.getUserTag(o)
                              })
                          })
                      })
                  ]
              });
    });
function z(e) {
    let t = null == e ? null : (0, Z.fv)(e, Z.jq.JOINED_AT);
    return {
        short: t,
        long: new Date(null != e ? e : 0).toLocaleDateString(F.Z.getLocale(), Z.UG)
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
                className: s()(y.__invalid_joinedAtContainer),
                children: (0, n.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: C,
                    children: i.long
                })
            })
          : (0, n.jsx)('div', {
                className: s()(y.__invalid_joinedAtContainer),
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
                    l = (0, Z.fv)(e, Z.jq.ACCOUNT_AGE);
                return {
                    accountCreationDateShort: l,
                    accountCreationDateLong: new Date(e).toLocaleDateString(F.Z.getLocale(), Z.I)
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
            _ = (0, c.e7)([I.Z, H.Z], () => I.Z.can(k.Plq.MANAGE_GUILD, H.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: E, addUsers: h, removeUser: M } = (0, V.Z)(t.guildId),
            x = (0, v.xC)(t.guildId),
            b = (0, v.hB)(t.guildId, x, t.userId),
            L = (0, T.ms)(t.guildId),
            g = (0, c.e7)(
                [D.Z],
                () => {
                    var e;
                    return null !== (e = D.Z.getSearchStateByGuildId(t.guildId).selectedSort) && void 0 !== e ? e : j.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                C()
            ),
            f = a.useCallback(
                (e) => {
                    if ((e.stopPropagation(), e.preventDefault(), null != t && !!b)) E.has(t.userId) ? M(t.userId) : h([t.userId]);
                },
                [h, b, t, M, E]
            ),
            p = g === j.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            A = g === j.d$.ORDER_BY_USER_ID_ASC || g === j.d$.ORDER_BY_USER_ID_DESC;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                x &&
                    (0, n.jsx)(u.Tooltip, {
                        tooltipClassName: y.disabledActionTooltip,
                        shouldShow: !b,
                        text: F.Z.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
                        children: (e) =>
                            (0, n.jsx)('td', {
                                ...e,
                                children: (0, n.jsx)('div', {
                                    className: s()(y.__invalid_checkbox, y.xsmallCol),
                                    children: (0, n.jsx)(u.Clickable, {
                                        onClick: f,
                                        children: (0, n.jsx)(u.Checkbox, {
                                            type: u.Checkbox.Types.INVERTED,
                                            value: E.has(t.userId),
                                            disabled: !b
                                        })
                                    })
                                })
                            })
                    }),
                (0, n.jsx)('td', {
                    className: s()({ [y.compact]: m }),
                    children: (0, n.jsx)(G, {
                        member: t,
                        user: l
                    })
                }),
                (0, n.jsx)('td', {
                    className: s()(y.smallCol, { [y.compact]: m }),
                    children: (0, n.jsx)(q, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: p
                    })
                }),
                (0, n.jsx)('td', {
                    className: s()(y.smallCol, { [y.compact]: m }),
                    children: (0, n.jsx)(W, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: A
                    })
                }),
                _ &&
                    (0, n.jsx)('td', {
                        className: s()(y.smallCol, { [y.compact]: m }),
                        children: (0, n.jsx)(O.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, n.jsx)('td', {
                    className: s()(y.mediumCol, { [y.compact]: m }),
                    children: (0, n.jsx)(Y, {
                        member: t,
                        highestRole: o
                    })
                }),
                (0, n.jsx)('td', {
                    className: s()(y.smallCol, { [y.compact]: m }),
                    children: (0, n.jsx)(P, { member: t })
                }),
                (0, n.jsx)('td', {
                    className: s()(y.smallCol, { [y.compact]: m }),
                    children: (0, n.jsxs)('div', {
                        className: s()(y.actionCell),
                        children: [
                            (0, n.jsx)(u.Tooltip, {
                                text: L ? F.Z.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : F.Z.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: l } = e;
                                    return (0, n.jsx)(u.Clickable, {
                                        onMouseEnter: t,
                                        onMouseLeave: l,
                                        onClick: d,
                                        className: s()(y.button),
                                        children: L
                                            ? (0, n.jsx)(N.Z, {
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
                                text: F.Z.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: l } = e;
                                    return (0, n.jsx)(u.Clickable, {
                                        onMouseEnter: t,
                                        onMouseLeave: l,
                                        onClick: r,
                                        className: s()(y.button),
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
        E = (0, c.e7)([g.ZP], () => g.ZP.getGuildSidebarState(l), [l]),
        h = (null == E ? void 0 : E.details.userId) === t,
        M = (0, c.e7)([D.Z], () => D.Z.getEnhancedMember(l, t), [l, t]),
        x = (0, U.zq)(M),
        b = (0, c.e7)([f.default], () => f.default.getUser(t), [t]),
        T = (0, U.RN)(null != M ? M : void 0),
        L = a.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), T(e);
            },
            [T]
        ),
        H = a.useCallback(
            (e) => {
                if ((e.stopPropagation(), e.preventDefault(), null != M)) null == r || r(M);
            },
            [r, M]
        ),
        I = a.useCallback(
            (e) => {
                if ((e.stopPropagation(), e.preventDefault(), null != M)) null == r || r(M);
            },
            [M, r]
        ),
        p = a.useCallback((e, t) => C()((0, i.omit)(e, $), (0, i.omit)(t, $)), []);
    return null == M
        ? null
        : (0, n.jsx)(B.Z, {
              role: 'row',
              value: M,
              style: o,
              className: s()(y.roundedRow, y.memberRowContainer, d && y.selected, h && y.memberSelected, u && y.loading),
              equalityFn: p,
              onClick: H,
              onContextMenu: L,
              children: (0, n.jsx)(J, {
                  member: M,
                  user: b,
                  highestRole: x,
                  isHoldingAdvancedInfoKey: m,
                  onOpenModerationMenu: L,
                  onOpenProfileMenu: I,
                  compact: _
              })
          });
});
