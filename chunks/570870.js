var i = t(735250),
    r = t(470079),
    u = t(512722),
    l = t.n(u),
    a = t(442837),
    o = t(481060),
    d = t(10718),
    s = t(667204),
    c = t(826298),
    _ = t(276022),
    E = t(978983),
    I = t(430824),
    T = t(594174),
    N = t(981631),
    S = t(689079),
    A = t(689938),
    p = t(359522);
n.Z = (e) => {
    let n,
        { commandType: t, commandTargetId: u, channel: O, guildId: f, onHeightUpdate: M, context: h } = e,
        Z = (0, a.e7)([I.Z], () => I.Z.getGuild(null != f ? f : O.guild_id)),
        R = (0, a.e7)([T.default], () => T.default.getUser(u)),
        C = (0, _.Z)({
            user: R,
            guildId: null == Z ? void 0 : Z.id,
            channel: O,
            context: h
        }),
        { commands: g, sectionDescriptors: G, loading: m } = d.wi(O, { commandTypes: [t] }, { limit: S.lr }),
        { sections: y } = r.useMemo(() => {
            let e = {};
            return (
                G.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [G]),
        D = r.useRef(m.current);
    r.useEffect(() => {
        m.current !== D.current && ((D.current = m.current), null == M || M());
    }, [m, M]);
    let v = r.useCallback(
        (e) => {
            l()(null != O, 'menu item should not show if channel is null');
            let n = y[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                o.MenuItem,
                {
                    id: e.id,
                    label: e.displayName,
                    showIconFirst: !0,
                    icon: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: O,
                                  section: n,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, s.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: O,
                                guild: Z
                            },
                            commandTargetId: u
                        });
                    }
                },
                e.id
            );
        },
        [O, Z, u, y]
    );
    if (
        (m.current
            ? (n = (0, i.jsx)(
                  o.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(E.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === g.length
                      ? (0, i.jsx)(
                            o.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: A.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : g.map(v)),
              null != C &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(o.MenuSeparator, {}, 'separator'), C]
                  }))),
        !N.TPd.TEXTUAL.has(O.type))
    ) {
        if (null == C) return null;
        n = C;
    }
    return (0, i.jsx)(o.MenuItem, {
        id: 'apps',
        label: A.Z.Messages.APPS,
        listClassName: p.list,
        children: n
    });
};
