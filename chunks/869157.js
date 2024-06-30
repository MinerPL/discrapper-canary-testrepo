t.d(n, {
    Z: function () {
        return L;
    }
}), t(724458), t(47120);
var i = t(735250), a = t(470079), s = t(512722), l = t.n(s), o = t(392711), r = t.n(o), c = t(442837), d = t(481060), u = t(749210), I = t(367907), m = t(895924), _ = t(581364), N = t(929507), E = t(997787), T = t(970731), h = t(314897), p = t(430824), g = t(594174), C = t(626135), f = t(5192), x = t(709054), O = t(360606), S = t(905753), A = t(399860), R = t(335049), b = t(617012), Z = t(981631), v = t(689938), M = t(349777);
function L(e) {
    let {
            commandId: n,
            editPermissions: t,
            guildId: s,
            noneSelectedText: o,
            overwrites: I,
            hasAccessToMutatePermissions: N
        } = e, T = (0, c.e7)([p.Z], () => p.Z.getGuild(s));
    l()(null != T, '');
    let h = (0, c.e7)([p.Z], () => p.Z.getRoles(s)), [C, R] = a.useState(new Set()), b = a.useMemo(() => {
            var e;
            let n = (0, _.bD)(s);
            let t = (e = h, r()(e).sortBy(e => e.position).reduce((e, n, t) => (e[n.id] = t, e), {}));
            return Object.values(I).filter(e => e.canRead).sort((e, i) => {
                let a = e.type - i.type;
                if (0 !== a)
                    return a;
                switch (e.type) {
                case m.Kw.USER:
                    return function (e, n, t) {
                        let i = Number(e.canWrite) - Number(n.canWrite);
                        if (0 !== i)
                            return i;
                        let a = g.default.getUser(e.id), s = g.default.getUser(n.id);
                        if (null != a && null != s) {
                            let e = f.ZP.getName(t, void 0, a), n = f.ZP.getName(t, void 0, s);
                            return null == e ? void 0 : e.localeCompare(n);
                        }
                        return x.default.compare(e.id, n.id);
                    }(e, i, s);
                case m.Kw.ROLE:
                    return function (e, n, t, i) {
                        if (e.id === t)
                            return -1;
                        if (n.id === t)
                            return 1;
                        let a = i[e.id];
                        return a > i[n.id] ? -1 : 1;
                    }(e, i, s, t);
                case m.Kw.CHANNEL:
                    return function (e, n, t) {
                        if (e.id === t)
                            return -1;
                        if (n.id === t)
                            return 1;
                        let i = Number(e.canWrite) - Number(n.canWrite);
                        return 0 !== i ? i : x.default.compare(e.id, n.id);
                    }(e, i, n);
                }
            });
        }, [
            s,
            I,
            h
        ]), Z = a.useCallback((e, n) => {
            t({}, [(0, A.rE)(e, n)]);
        }, [t]), v = a.useCallback((e, n, i) => {
            let a = (0, A.rE)(e, n);
            null != I[a] && t({
                [a]: {
                    id: e,
                    permission: i,
                    type: n
                }
            }, []);
        }, [
            t,
            I
        ]);
    a.useEffect(() => {
        let e = Object.values(I).filter(e => e.type === m.Kw.USER && !e.canRead && !C.has(e.id)).map(e => e.id);
        if (0 !== e.length)
            u.Z.requestMembersById(s, e, !1), R(n => new Set([
                ...n,
                ...e
            ]));
    }, [
        s,
        I,
        C,
        R
    ]);
    let L = (0, c.e7)([S.Z], () => S.Z.getApplicationId()), D = (0, c.e7)([O.Z], () => null == L ? void 0 : O.Z.integrations.find(e => {
            var n;
            return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === L;
        })), P = (0, c.e7)([E.Z], () => void 0 !== D && E.Z.canShowToggleTooltip(D.id));
    return (0, i.jsx)(a.Fragment, {
        children: b.length > 0 ? b.map(e => (0, i.jsx)(j, {
            guild: T,
            commandId: n,
            onChange: n => v(e.id, e.type, n),
            onRemove: () => Z(e.id, e.type),
            overwrite: e,
            integration: D,
            canShowMigrationTooltip: P,
            hasAccessToMutatePermissions: N
        }, e.id)) : (0, i.jsx)('div', {
            className: M.noItemsSelected,
            children: (0, i.jsx)(d.Text, {
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: o
            })
        })
    });
}
function j(e) {
    var n, t, s;
    let l, {
            guild: o,
            commandId: r,
            onChange: c,
            onRemove: u,
            overwrite: E,
            integration: p,
            canShowMigrationTooltip: g,
            hasAccessToMutatePermissions: f
        } = e, x = E.id === o.id || E.id === (0, _.bD)(o.id), O = null == p ? void 0 : null === (t = p.application) || void 0 === t ? void 0 : null === (n = t.bot) || void 0 === n ? void 0 : n.username, S = !E.canWrite || !f, A = h.default.getId();
    f ? !E.canWrite && (E.type === m.Kw.USER ? l = E.id === A ? v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : E.type === m.Kw.ROLE && (l = v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : l = null != r ? v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
    let L = g && null != p && E.id === o.id && void 0 !== O && !E.permission;
    a.useEffect(() => {
        if (L) {
            var e;
            C.default.track(Z.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, I.hH)(o.id),
                application_id: null == p ? void 0 : null === (e = p.application) || void 0 === e ? void 0 : e.id,
                location: 'toggle'
            });
        }
    }, [
        o.id,
        null == p ? void 0 : null === (s = p.application) || void 0 === s ? void 0 : s.id,
        L
    ]);
    let j = (0, i.jsx)(d.Tooltip, {
            tooltipClassName: M.tooltip,
            text: l,
            shouldShow: S,
            position: 'left',
            hideOnClick: !1,
            children: e => (0, i.jsx)('div', {
                ...e,
                children: (0, i.jsx)(b.Z, {
                    isDisabled: S,
                    currentValue: E.permission,
                    onChange: L ? e => {
                        N.Z.dismissToggleTooltip(o.id, p), c(e);
                    } : c
                })
            })
        }), P = (0, i.jsx)(d.Popout, {
            renderPopout: () => (0, i.jsx)(d.Clickable, {
                onClick: e => {
                    e.stopPropagation(), N.Z.dismissToggleTooltip(o.id, p);
                },
                children: (0, i.jsx)(T.ZP, {
                    className: M.tooltip,
                    content: v.Z.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
                        botName: O,
                        link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
                    }),
                    onClick: () => {
                    }
                })
            }),
            position: 'bottom',
            align: 'center',
            animation: d.Popout.Animation.TRANSLATE,
            onRequestClose: () => N.Z.dismissToggleTooltip(o.id, p),
            shouldShow: L,
            closeOnScroll: !0,
            children: () => j
        });
    return (0, i.jsxs)('div', {
        className: M.entryItem,
        children: [
            (0, i.jsx)('div', {
                className: M.entryName,
                children: (0, i.jsx)(R.Z, {
                    guild: o,
                    id: E.id,
                    type: E.type,
                    isLocked: S,
                    lockTooltipText: l
                })
            }),
            (0, i.jsxs)('div', {
                className: M.entryActions,
                children: [
                    (0, i.jsx)(D, {
                        commandId: r,
                        isSentinel: x,
                        isDisabled: !f,
                        onRemove: u
                    }),
                    P
                ]
            })
        ]
    }, E.id);
}
function D(e) {
    let {
        commandId: n,
        isSentinel: t,
        isDisabled: a,
        onRemove: s
    } = e;
    return a ? null : null != n || !t ? (0, i.jsx)('div', {
        className: M.removeActions,
        children: (0, i.jsx)(d.Clickable, {
            className: M.removeContainer,
            'aria-label': v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
            onClick: s,
            children: (0, i.jsx)(d.TrashIcon, {
                size: 'md',
                color: 'currentColor',
                className: M.removeIcon
            })
        })
    }) : null;
}
