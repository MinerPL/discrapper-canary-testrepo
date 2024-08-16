n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(536091),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(692547),
    d = n(780384),
    _ = n(481060),
    E = n(749210),
    f = n(99690),
    h = n(410030),
    p = n(726542),
    m = n(367907),
    I = n(906732),
    T = n(385499),
    g = n(171368),
    S = n(598077),
    A = n(271383),
    N = n(626135),
    v = n(275759),
    O = n(107484),
    R = n(977392),
    C = n(134433),
    y = n(753194),
    D = n(458034),
    L = n(856651),
    b = n(981631),
    M = n(228168),
    P = n(689938),
    U = n(953526);
function w(e) {
    let t,
        { connectionType: n, connectionMetadataField: i, operator: a, value: s, description: o } = e;
    if (null != o)
        switch (a) {
            case L.iO.LESS_THAN:
                t = P.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: o,
                    count: Math.max(0, Number(s) - 1)
                });
                break;
            case L.iO.GREATER_THAN:
                t = P.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: o,
                    count: Math.max(0, Number(s) + 1)
                });
                break;
            default:
                t = o;
        }
    else
        t = (0, v.n_)({
            connectionType: n,
            connectionMetadataField: i,
            operator: a,
            value: s
        });
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: U.popoutCheck,
              children: [
                  (0, r.jsx)(_.CheckmarkLargeIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: U.popoutCheckIcon
                  }),
                  (0, r.jsx)(_.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function x(e) {
    let { eligibilityStates: t } = e,
        n = (0, h.ZP)(),
        i = (0, _.useToken)(c.Z.unsafe_rawColors.GREEN_330).hex(),
        a = l().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map((e) => {
            var t, o;
            let l;
            let u = a[e],
                c = u.filter((e) => null != e.operator),
                E = u.find((e) => null != e.application),
                h = p.Z.get(e),
                m = null == E ? void 0 : E.application,
                I = (null == m ? void 0 : m.bot) != null ? new S.Z(m.bot) : null;
            return (
                v.SJ.includes(null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : '')
                    ? (l = (0, r.jsx)(y.Z, {
                          className: U.botTag,
                          color: i,
                          size: 16
                      }))
                    : null != I &&
                      (l = (0, r.jsx)(T.Z, {
                          className: U.botTag,
                          verified: I.isVerifiedBot()
                      })),
                (0, r.jsxs)(
                    'div',
                    {
                        className: U.popoutChecksGroup,
                        children: [
                            (0, r.jsxs)('div', {
                                className: U.popoutCheckGroupName,
                                children: [
                                    null != h
                                        ? (0, r.jsx)('img', {
                                              src: (0, d.wj)(n) ? h.icon.darkSVG : h.icon.lightSVG,
                                              alt: '',
                                              className: U.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != I
                                        ? (0, r.jsx)(f.Z, {
                                              user: I,
                                              size: _.AvatarSizes.SIZE_20,
                                              className: U.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, r.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null !== (o = null == h ? void 0 : h.name) && void 0 !== o ? o : null == m ? void 0 : m.name
                                    }),
                                    l
                                ]
                            }),
                            c.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: i, value: a, description: o } = e;
                                return (
                                    s()(null != n, 'connectionMetadataField is null'),
                                    s()(null != i, 'operator is null'),
                                    s()(null != a, 'value is null'),
                                    (0, r.jsx)(
                                        w,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: i,
                                            value: a,
                                            description: o
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(i, ':').concat(a)
                                    )
                                );
                            })
                        ]
                    },
                    e
                )
            );
        })
    });
}
function G(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: a, eligibilityStates: s, userId: o, roleId: l, channelId: c, guildId: d } = e;
    i.useEffect(() => {
        N.default.track(b.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: o,
            role_id: l,
            ...(0, m.JS)(c),
            ...(0, m.hH)(d)
        });
    }, [o, l, c, d]);
    let E = (0, u.e7)(
        [A.ZP],
        () => {
            var e, t;
            return null !== (t = null === (e = A.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t;
        },
        [d, l]
    );
    return (
        (t = 1 === s.length && 1 === s[0].length ? P.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === s.length ? P.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : P.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format()),
        (0, r.jsxs)('div', {
            className: U.popout,
            children: [
                (0, r.jsx)('div', {
                    className: U.popoutHeaderContainer,
                    children: (0, r.jsx)(_.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: U.popoutHeaderText,
                        children: t
                    })
                }),
                (0, r.jsx)('div', {
                    className: U.popoutChecks,
                    children: (0, r.jsx)(x, { eligibilityStates: s.flat() })
                }),
                (0, r.jsxs)('div', {
                    className: U.buttonContainer,
                    children: [
                        E
                            ? null
                            : (0, r.jsx)(_.Button, {
                                  className: U.getRolesButton,
                                  onClick: n,
                                  children: P.Z.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                              }),
                        (0, r.jsx)(_.Button, {
                            className: U.viewConnectionsButton,
                            color: _.Button.Colors.PRIMARY,
                            onClick: a,
                            children: P.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                        })
                    ]
                })
            ]
        })
    );
}
function k(e) {
    let { userId: t, messageId: n, guild: a, channel: o } = e,
        { analyticsLocations: l } = (0, I.ZP)(),
        c = (0, R.Z)(a, t, o.id, !0),
        d = (0, u.e7)([O.Z], () => O.Z.getGuildRoleConnectionEligibility(null == c ? void 0 : c.id)),
        [f, h] = i.useState(null == d);
    if (null == c) return null;
    async function p() {
        if ((s()(null != c, 'visibleConnectionsRole is null'), !!f && null == d)) await E.Z.fetchGuildRoleConnectionsEligibility(a.id, c.id), h(!1);
    }
    return (0, r.jsx)(_.LazyPopout, {
        onRequestOpen: p,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: i } = e;
                return null == d
                    ? (0, r.jsx)(r.Fragment, {})
                    : (s()(null != c, 'visibleConnectionsRole is null'),
                      (0, r.jsx)(G, {
                          eligibilityStates: d,
                          userId: t,
                          roleId: c.id,
                          channelId: o.id,
                          guildId: a.id,
                          onGetRolesClicked: () => {
                              (0, D.Am)(a.id);
                          },
                          onOpenProfile: () => {
                              (0, g.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: a.id,
                                  channelId: o.id,
                                  roleId: c.id,
                                  section: M.oh.USER_INFO_CONNECTIONS,
                                  sourceAnalyticsLocations: l,
                                  analyticsLocation: { section: b.jXE.CHANNEL }
                              }),
                                  i();
                          }
                      }));
            });
        },
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(_.Tooltip, {
                text: P.Z.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                children: (t) =>
                    (0, r.jsxs)('div', {
                        className: U.badge,
                        ...t,
                        ...e,
                        children: [
                            (0, r.jsx)(C.Z, {
                                className: U.badgeVerifiedIcon,
                                size: 16,
                                color: c.colorString
                            }),
                            (0, r.jsx)(_.Text, {
                                variant: 'text-xs/bold',
                                color: 'header-primary',
                                className: U.roleName,
                                children: c.name
                            })
                        ]
                    })
            })
    });
}
