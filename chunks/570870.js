var i = e(200651),
    r = e(192379),
    l = e(512722),
    a = e.n(l),
    o = e(442837),
    u = e(481060),
    d = e(10718),
    s = e(667204),
    c = e(826298),
    T = e(276022),
    I = e(978983),
    E = e(430824),
    p = e(594174),
    _ = e(981631),
    f = e(689079),
    S = e(388032),
    N = e(62352);
t.Z = (n) => {
    let t,
        { commandType: e, commandTargetId: l, channel: h, guildId: m, onHeightUpdate: A, context: g } = n,
        Z = (0, o.e7)([E.Z], () => E.Z.getGuild(null != m ? m : h.guild_id)),
        O = (0, o.e7)([p.default], () => p.default.getUser(l)),
        v = (0, T.Z)({
            user: O,
            guildId: null == Z ? void 0 : Z.id,
            channel: h,
            context: g
        }),
        {
            commands: M,
            sectionDescriptors: y,
            loading: G
        } = d.wi({
            channel: h,
            filters: { commandTypes: [e] },
            options: { limit: f.lr },
            allowFetch: !0
        }),
        { sections: C } = r.useMemo(() => {
            let n = {};
            return (
                y.forEach((t) => {
                    n[t.id] = t;
                }),
                { sections: n }
            );
        }, [y]),
        R = r.useRef(G.current);
    r.useEffect(() => {
        G.current !== R.current && ((R.current = G.current), null == A || A());
    }, [G, A]);
    let b = r.useCallback(
        (n) => {
            a()(null != h, 'menu item should not show if channel is null');
            let t = C[n.applicationId],
                e = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
                u.MenuItem,
                {
                    id: n.id,
                    label: n.displayName,
                    iconLeft: () =>
                        null != e
                            ? (0, i.jsx)(e, {
                                  channel: h,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, s.Z)({
                            command: n,
                            optionValues: {},
                            context: {
                                channel: h,
                                guild: Z
                            },
                            commandTargetId: l
                        });
                    }
                },
                n.id
            );
        },
        [h, Z, l, C]
    );
    if (
        (G.current
            ? (t = (0, i.jsx)(
                  u.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(I.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === M.length
                      ? (0, i.jsx)(
                            u.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: S.intl.string(S.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : M.map(b)),
              null != v &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [t, (0, i.jsx)(u.MenuSeparator, {}, 'separator'), v]
                  }))),
        !_.TPd.TEXTUAL.has(h.type))
    ) {
        if (null == v) return null;
        t = v;
    }
    return (0, i.jsx)(u.MenuItem, {
        id: 'apps',
        label: S.intl.string(S.t.PHjkRE),
        listClassName: N.list,
        children: t
    });
};
