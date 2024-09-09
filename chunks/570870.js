var i = t(735250),
    r = t(470079),
    a = t(512722),
    o = t.n(a),
    l = t(442837),
    u = t(481060),
    d = t(10718),
    s = t(667204),
    c = t(826298),
    E = t(276022),
    I = t(978983),
    _ = t(430824),
    T = t(594174),
    N = t(981631),
    S = t(689079),
    p = t(689938),
    A = t(359522);
n.Z = (e) => {
    let n,
        { commandType: t, commandTargetId: a, channel: O, guildId: Z, onHeightUpdate: M, context: f } = e,
        h = (0, l.e7)([_.Z], () => _.Z.getGuild(null != Z ? Z : O.guild_id)),
        G = (0, l.e7)([T.default], () => T.default.getUser(a)),
        C = (0, E.Z)({
            user: G,
            guildId: null == h ? void 0 : h.id,
            channel: O,
            context: f
        }),
        { commands: R, sectionDescriptors: m, loading: g } = d.wi(O, { commandTypes: [t] }, { limit: S.lr }),
        { sections: y } = r.useMemo(() => {
            let e = {};
            return (
                m.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [m]),
        D = r.useRef(g.current);
    r.useEffect(() => {
        g.current !== D.current && ((D.current = g.current), null == M || M());
    }, [g, M]);
    let v = r.useCallback(
        (e) => {
            o()(null != O, 'menu item should not show if channel is null');
            let n = y[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                u.MenuItem,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
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
                                guild: h
                            },
                            commandTargetId: a
                        });
                    }
                },
                e.id
            );
        },
        [O, h, a, y]
    );
    if (
        (g.current
            ? (n = (0, i.jsx)(
                  u.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(I.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === R.length
                      ? (0, i.jsx)(
                            u.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: p.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : R.map(v)),
              null != C &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(u.MenuSeparator, {}, 'separator'), C]
                  }))),
        !N.TPd.TEXTUAL.has(O.type))
    ) {
        if (null == C) return null;
        n = C;
    }
    return (0, i.jsx)(u.MenuItem, {
        id: 'apps',
        label: p.Z.Messages.APPS,
        listClassName: A.list,
        children: n
    });
};
