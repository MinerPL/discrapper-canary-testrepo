t.d(n, {
    Z: function () {
        return R;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    s = t(392711),
    l = t.n(s),
    o = t(149765),
    r = t(442837),
    d = t(481060),
    c = t(895924),
    u = t(581364),
    I = t(605436),
    m = t(271383),
    _ = t(430824),
    N = t(496675),
    E = t(821864),
    T = t(905753),
    h = t(937427),
    g = t(643886),
    p = t(869157),
    f = t(454092),
    O = t(289465),
    x = t(981631),
    C = t(689079),
    S = t(689938),
    A = t(869880);
function R(e) {
    let { applicationId: n, commandId: s, guildId: h, inModal: g, editedTargetPermissions: R, originalApplicationPermissions: v, originalCommandPermissions: M, selectedPermissionCount: L } = e,
        j = (0, r.e7)([T.Z], () => (null == s ? null : T.Z.getCommand(s)), [s]),
        D = (null == j ? void 0 : j.defaultMemberPermissions) != null,
        P = (0, r.e7)(
            [_.Z, m.ZP, N.Z],
            () => {
                let e = _.Z.getGuild(h),
                    n = m.ZP.getSelfMember(h);
                return (
                    null != e &&
                    null != n &&
                    (0, u.Ft)({
                        PermissionStore: N.Z,
                        guild: e,
                        selfMember: n,
                        applicationLevelPermissions: v,
                        commandLevelPermissions: M,
                        defaultMemberPermissions: null == j ? void 0 : j.defaultMemberPermissions
                    })
                );
            },
            [h, j, v, M]
        ),
        B = null != s ? s : n,
        [y, G] = a.useMemo(() => {
            let e = {},
                n = {};
            for (let [t, i] of Object.entries(R)) i.type === c.Kw.CHANNEL ? (e[t] = i) : (n[t] = i);
            return [e, n];
        }, [R]),
        k = a.useCallback(
            (e) => {
                let n = _.Z.getGuild(h),
                    t = m.ZP.getSelfMember(h);
                return (
                    null != n &&
                    null != t &&
                    (null != s
                        ? (0, u.Ft)({
                              PermissionStore: N.Z,
                              guild: n,
                              selfMember: t,
                              applicationLevelPermissions: v,
                              commandLevelPermissions: e,
                              defaultMemberPermissions: null == j ? void 0 : j.defaultMemberPermissions
                          })
                        : (0, u.Ft)({
                              PermissionStore: N.Z,
                              guild: n,
                              selfMember: t,
                              applicationLevelPermissions: e
                          }))
                );
            },
            [h, j, s, v]
        ),
        U = a.useCallback(
            (e, n) => {
                let t;
                let i = null;
                if (0 !== n.length) {
                    let e = R[n[0]];
                    if (e.type === c.Kw.USER) t = f.s.REMOVE_SELF;
                    else {
                        let n = e.id;
                        if (((t = f.s.REMOVE_ROLE), (0, I.pM)(h, n))) i = '@everyone';
                        else {
                            let e = _.Z.getRole(h, n);
                            i = null != e ? e.name : 'role';
                        }
                    }
                } else {
                    let n = Object.values(e)[0].id;
                    if (((t = f.s.DENY_ROLE), (0, I.pM)(h, n))) i = '@everyone';
                    else {
                        let e = _.Z.getRole(h, n);
                        i = null != e ? e.name : 'role';
                    }
                }
                (0, f._)(t, i);
            },
            [h, R]
        ),
        w = a.useCallback(
            (e, t) => {
                let i = {};
                for (let [e, n] of Object.entries(R))
                    i[e] = {
                        id: n.id,
                        permission: n.permission,
                        type: n.type
                    };
                if (((i = Object.assign(i, e)), t.length > 0 && (i = l().omit(i, t)), !k(i))) {
                    U(e, t);
                    return;
                }
                E.W4(n, B, i);
            },
            [n, R, B, k, U]
        ),
        H = a.useCallback(() => {
            let e = Object.keys(y);
            return (0, d.openModalLazy)(async () => {
                let { default: n } = await t.e('64908').then(t.bind(t, 557944));
                return (t) =>
                    (0, i.jsx)(n, {
                        editPermissions: w,
                        guildId: h,
                        headerText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: b,
                        searchPlaceholderText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
                        selectedPermissionCount: L,
                        ...t
                    });
            });
        }, [w, y, h, L]),
        W = a.useCallback(() => {
            let e = Object.keys(G);
            return (0, d.openModalLazy)(async () => {
                let { default: n } = await t.e('64908').then(t.bind(t, 557944));
                return (t) =>
                    (0, i.jsx)(n, {
                        editPermissions: w,
                        guildId: h,
                        hasMemberSearch: !0,
                        headerText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                        overwrittenKeys: e,
                        search: Z,
                        searchPlaceholderText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
                        selectedPermissionCount: L,
                        ...t
                    });
            });
        }, [w, h, G, L]),
        F = a.useCallback(
            () =>
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await t.e('21897').then(t.bind(t, 303313)),
                        n = j.defaultMemberPermissions;
                    return (
                        o.fS(n, u.BO) && (n = x.Plq.ADMINISTRATOR),
                        (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                defaultMemberPermissions: n
                            })
                    );
                }),
            [j]
        ),
        V = L - C._n,
        K = V >= 0,
        Y = [
            {
                buttonClick: W,
                buttonText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                noneSelectedText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
                overwrites: G,
                title: null == s ? S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
            },
            {
                buttonClick: H,
                buttonText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                noneSelectedText: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
                overwrites: y,
                title: null == s ? S.Z.Messages.CHANNELS : S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
            }
        ];
    return (0, i.jsxs)(a.Fragment, {
        children: [
            V > 0
                ? (0, i.jsx)(d.HelpMessage, {
                      messageType: d.HelpMessageTypes.WARNING,
                      children: S.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({ removeCount: V })
                  })
                : null,
            D
                ? (0, i.jsxs)('div', {
                      className: A.requiredPermissionsBanner,
                      children: [
                          (0, i.jsx)(d.CircleInformationIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              className: A.icon
                          }),
                          (0, i.jsx)('span', {
                              className: A.message,
                              children: S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format()
                          }),
                          (0, i.jsx)(d.Button, {
                              color: d.Button.Colors.PRIMARY,
                              onClick: F,
                              size: d.Button.Sizes.SMALL,
                              className: A.addButton,
                              children: S.Z.Messages.VIEW
                          })
                      ]
                  })
                : null,
            Y.map((e, n) => {
                let t = (n) =>
                        (0, i.jsx)(d.Button, {
                            ...n,
                            color: d.Button.Colors.PRIMARY,
                            disabled: K || !P,
                            onClick: e.buttonClick,
                            size: d.Button.Sizes.TINY,
                            className: A.addButton,
                            children: e.buttonText
                        }),
                    a = null;
                return (
                    P ? K && (a = S.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : (a = null != s ? S.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : S.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION),
                    (0, i.jsx)(
                        O.Z,
                        {
                            bar: (0, i.jsx)(d.Tooltip, {
                                tooltipClassName: A.tooltip,
                                text: a,
                                shouldShow: null != a,
                                children: (e) => t(e)
                            }),
                            inModal: g,
                            title: e.title,
                            children: (0, i.jsx)('div', {
                                className: g ? void 0 : A.listContainer,
                                children: (0, i.jsx)(p.Z, {
                                    guildId: h,
                                    commandId: s,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: w,
                                    hasAccessToMutatePermissions: P
                                })
                            })
                        },
                        n
                    )
                );
            })
        ]
    });
}
function b(e) {
    let n = (0, h.w)(e);
    return {
        ...n,
        results: n.results.map((e) => ({
            ...e,
            type: c.Kw.CHANNEL
        }))
    };
}
function Z(e) {
    let n = (0, g.U)(e);
    return {
        ...n,
        results: n.results.roles
            .map((e) => ({
                ...e,
                type: c.Kw.ROLE
            }))
            .concat(
                n.results.members.map((e) => ({
                    ...e,
                    type: c.Kw.USER
                }))
            )
    };
}
