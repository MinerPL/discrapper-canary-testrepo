t.d(n, {
    Z: function () {
        return m;
    },
    p: function () {
        return h;
    }
});
var r = t(442837),
    o = t(933557),
    a = t(592125),
    l = t(430824),
    i = t(699516),
    s = t(594174),
    c = t(823379),
    u = t(689938);
function d(e, n, t) {
    return 0 === e.length
        ? ''
        : (t ? u.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO : u.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES).format({
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: n
          });
}
function m(e) {
    let { guild: n, prompt: t, selectedRoleIds: m, selectedChannelIds: h, itemHook: v } = e,
        p = (0, r.e7)([l.Z], () => (null != n ? l.Z.getRoles(n.id) : void 0)),
        g = (0, r.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(h)
                .map((e) => a.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, o.F6)(e, s.default, i.Z, !0))
        ),
        x = Array.from(m)
            .map((e) => {
                var n;
                return null === (n = (null != p ? p : {})[e]) || void 0 === n ? void 0 : n.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        f = (null == t ? void 0 : t.singleSelect) ? '' : u.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS,
        C = '';
    if (0 === g.length && x.length > 0) f = d(x, v);
    else if (g.length > 0) {
        var b, O;
        (b = g),
            (O = v),
            (f =
                0 === b.length
                    ? ''
                    : u.Z.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                          count: b.length,
                          extraCount: Math.max(b.length - 2, 0),
                          channel1: b[0],
                          channel2: b[1],
                          itemHook: O
                      })),
            x.length > 0 && (C = d(x, v, !0));
    }
    return {
        helpText: f,
        helpTextAdditional: C
    };
}
function h(e) {
    let { guild: n, prompt: t, selectedRoleIds: d, selectedChannelIds: m, itemHook: h } = e,
        v = (0, r.e7)([l.Z], () => (null != n ? l.Z.getRoles(n.id) : void 0)),
        p = (0, r.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(m)
                .map((e) => a.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, o.F6)(e, s.default, i.Z, !0))
        ),
        g = Array.from(d)
            .map((e) => {
                var n;
                return null === (n = (null != v ? v : {})[e]) || void 0 === n ? void 0 : n.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        x = (null == t ? void 0 : t.singleSelect) ? '' : u.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
    return (
        0 === p.length && g.length > 0
            ? (x = u.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                  count: g.length,
                  extraCount: Math.max(g.length - 2, 0),
                  role1: g[0],
                  role2: g[1],
                  itemHook: h
              }))
            : p.length > 0 && 0 === g.length
              ? (x = u.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
                    count: p.length,
                    extraCount: Math.max(p.length - 2, 0),
                    channel1: p[0],
                    channel2: p[1],
                    itemHook: h
                }))
              : p.length > 0 &&
                g.length > 0 &&
                (x = u.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format({
                    channelCount: p.length,
                    extraChannelCount: Math.max(p.length - 2, 0),
                    channel1: p[0],
                    channel2: p[1],
                    itemHook: h,
                    roleCount: g.length,
                    extraRoleCount: Math.max(g.length - 2, 0),
                    role1: g[0],
                    role2: g[1]
                })),
        {
            helpText: x,
            helpTextAdditional: ''
        }
    );
}
