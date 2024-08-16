n.d(t, {
    $z: function () {
        return N;
    },
    BH: function () {
        return S;
    },
    BO: function () {
        return O;
    },
    D7: function () {
        return y;
    },
    Dd: function () {
        return A;
    },
    Ft: function () {
        return R;
    },
    X0: function () {
        return L;
    },
    XA: function () {
        return b;
    },
    Z8: function () {
        return T;
    },
    bD: function () {
        return v;
    },
    nG: function () {
        return g;
    },
    qJ: function () {
        return P;
    },
    tI: function () {
        return D;
    },
    vC: function () {
        return M;
    }
}),
    n(47120),
    n(653041),
    n(390547),
    n(724458);
var r = n(654861),
    i = n.n(r),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(149765),
    c = n(911969),
    d = n(367907),
    _ = n(399860);
n(131704);
var E = n(703558),
    f = n(895924),
    h = n(531010),
    p = n(689079),
    m = n(981631),
    I = n(231338);
function T(e) {
    var t, n, r;
    let i,
        { rootCommand: a, command: s, applicationId: o, subCommandPath: l, useKeyedPermissions: d } = e;
    null != a.permissions &&
        a.permissions.length > 0 &&
        (d
            ? (i = (0, _.tk)(a.permissions))
            : ((i = {}),
              a.permissions.forEach((e) => {
                  i[e.id] = e;
              })));
    let E = (null != l ? l : []).map((e) => e.name),
        h = (null != l ? l : []).map((e) => e.displayName);
    return {
        version: a.version,
        guildId: a.guild_id,
        id: [a.id, ...E].join(p.oQ),
        name: [a.name, ...E].join(' '),
        serverLocalizedName: s.name_localized,
        applicationId: o,
        type: null !== (t = a.type) && void 0 !== t ? t : c.yU.CHAT,
        inputType: f.iw.BOT,
        description: s.description,
        options: (function e(t) {
            return null == t
                ? void 0
                : t.map((t) => {
                      var n, r;
                      let i = {
                          ...t,
                          choices: (function (e) {
                              return null == e
                                  ? void 0
                                  : e.map((e) => {
                                        var t;
                                        return {
                                            ...e,
                                            displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                                        };
                                    });
                          })(t.choices),
                          options: e(t.options),
                          serverLocalizedName: t.name_localized,
                          displayName: null !== (n = t.name_localized) && void 0 !== n ? n : t.name,
                          displayDescription: null !== (r = t.description_localized) && void 0 !== r ? r : t.description
                      };
                      if (t.type === c.jw.CHANNEL && 'channel_types' in t)
                          return {
                              ...i,
                              channelTypes: t.channel_types
                          };
                      if ((t.type === c.jw.NUMBER || t.type === c.jw.INTEGER) && ('min_value' in t || 'max_value' in t))
                          return {
                              ...i,
                              minValue: t.min_value,
                              maxValue: t.max_value
                          };
                      if (t.type === c.jw.STRING && ('min_length' in t || 'max_length' in t))
                          return {
                              ...i,
                              minLength: t.min_length,
                              maxLength: t.max_length
                          };
                      return i;
                  });
        })(s.options),
        rootCommand: a,
        subCommandPath: l,
        defaultMemberPermissions: null == a.default_member_permissions ? void 0 : u.vB(a.default_member_permissions),
        dmPermission: a.dm_permission,
        permissions: i,
        displayName: [null !== (n = a.name_localized) && void 0 !== n ? n : a.name, ...h].join(' '),
        displayDescription: null !== (r = s.description_localized) && void 0 !== r ? r : s.description,
        nsfw: a.nsfw,
        contexts: a.contexts,
        integration_types: a.integration_types,
        global_popularity_rank: a.global_popularity_rank,
        handler: a.handler
    };
}
function g(e, t) {
    return l().flatMap(
        e,
        (e) => (
            s()(null != e.id, 'Missing command id'),
            (function e(t) {
                var n, r;
                let { rootCommand: i, command: a, applicationId: s, subCommandPath: o, useKeyedPermissions: l } = t;
                if (a.hasOwnProperty('id')) {
                    if (null == a.options || 0 === a.options.length)
                        return [
                            T({
                                rootCommand: i,
                                command: a,
                                applicationId: s,
                                subCommandPath: o,
                                useKeyedPermissions: l
                            })
                        ];
                } else if (a.type !== c.jw.SUB_COMMAND && a.type !== c.jw.SUB_COMMAND_GROUP && (null == a.options || 0 === a.options.length))
                    return [
                        T({
                            rootCommand: i,
                            command: a,
                            applicationId: s,
                            subCommandPath: o,
                            useKeyedPermissions: l
                        })
                    ];
                let u = [];
                if (null == a.options) return u;
                let d = a.options.filter((e) => e.type === c.jw.SUB_COMMAND_GROUP);
                for (let t = 0; t < d.length; t++)
                    u.push(
                        ...e({
                            rootCommand: i,
                            command: d[t],
                            applicationId: s,
                            subCommandPath: (null != o ? o : []).concat([
                                {
                                    name: d[t].name,
                                    type: c.jw.SUB_COMMAND_GROUP,
                                    displayName: null !== (n = d[t].name_localized) && void 0 !== n ? n : d[t].name
                                }
                            ]),
                            useKeyedPermissions: l
                        })
                    );
                let _ = a.options.filter((e) => e.type === c.jw.SUB_COMMAND);
                for (let e = 0; e < _.length; e++)
                    u.push(
                        T({
                            rootCommand: i,
                            command: _[e],
                            applicationId: s,
                            subCommandPath: (null != o ? o : []).concat([
                                {
                                    name: _[e].name,
                                    type: c.jw.SUB_COMMAND,
                                    displayName: null !== (r = _[e].name_localized) && void 0 !== r ? r : _[e].name
                                }
                            ]),
                            useKeyedPermissions: l
                        })
                    );
                return (
                    0 === d.length &&
                        0 === _.length &&
                        u.push(
                            T({
                                rootCommand: i,
                                command: a,
                                applicationId: s,
                                subCommandPath: o,
                                useKeyedPermissions: l
                            })
                        ),
                    u
                );
            })({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t
            })
        )
    );
}
function S(e) {
    return m.Xyh.test(e.trim());
}
function A(e, t, n, r) {
    let i = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e);
        }),
        i.slice(0, r)
    );
}
function N(e) {
    let t = e.type === c.jw.STRING,
        n = e.type === c.jw.CHANNEL,
        r = e.type === c.jw.USER || e.type === c.jw.MENTIONABLE,
        i = e.type === c.jw.ROLE || e.type === c.jw.MENTIONABLE;
    return {
        canMentionEveryone: t || i,
        canMentionHere: t,
        canMentionChannels: t || n,
        canMentionUsers: t || r,
        canMentionRoles: t || i,
        canMentionAnyGuildUser: r,
        canMentionNonMentionableRoles: i
    };
}
function v(e) {
    return i()(e).subtract(1).toString();
}
let O = u.vB(0);
function R(e) {
    let { PermissionStore: t, guild: n, selfMember: r, applicationLevelPermissions: i, commandLevelPermissions: a, defaultMemberPermissions: s } = e;
    if (n.ownerId === r.userId || t.can(I.Pl.ADMINISTRATOR, n)) return !0;
    let o = n.id;
    if (null != a) {
        let e = C(r, o, a);
        if ('boolean' == typeof e) return e;
    }
    let l = C(r, o, i);
    return ('boolean' != typeof l || !!l) && (null == s || (!u.fS(s, O) && t.can(s, n)));
}
function C(e, t, n) {
    let r = n[(0, _.rE)(e.userId, f.Kw.USER)];
    if (null != r) return r.permission;
    let i = !1;
    for (let t of e.roles) {
        let e = n[(0, _.rE)(t, f.Kw.ROLE)];
        if (null != e && ((i = !0), e.permission)) return !0;
    }
    if (i) return !1;
    let a = n[(0, _.rE)(t, f.Kw.ROLE)];
    return null != a ? a.permission : null;
}
function y(e) {
    switch (e) {
        case f.bB.CHAT:
        case f.bB.APPLICATION_LAUNCHER:
        case f.bB.IMAGE_RECS_MENU:
            return E.d.SlashCommand;
    }
}
function D(e) {
    return null == e ? void 0 : e.id === p.bi.BUILT_IN ? f.ub.BUILT_IN : e.id === p.bi.FRECENCY ? f.ub.FRECENCY : f.ub.APP;
}
function L(e, t) {
    var n, r;
    return {
        type: f.Qi.APPLICATION,
        id: e.id,
        name: null !== (r = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.username) && void 0 !== r ? r : e.name,
        icon: e.icon,
        application: e,
        isUserApp: null != t && t
    };
}
function b(e) {
    let t = e.id,
        n = e.options,
        r = null == n ? void 0 : n.find((e) => e.type === c.jw.SUB_COMMAND_GROUP);
    null != r && ((t += ''.concat(p.oQ).concat(r.name)), (n = r.options));
    let i = null == n ? void 0 : n.find((e) => e.type === c.jw.SUB_COMMAND);
    return (
        null != i && ((t += ''.concat(p.oQ).concat(i.name)), (n = i.options)),
        {
            commandKey: t,
            interactionOptions: n
        }
    );
}
function M(e, t, n) {
    return (
        null == e ||
        h.Z.getCurrentConfig(
            {
                guildId: e,
                ...t
            },
            n
        ).userAppsTreatment === h.e.ALLOWED
    );
}
function P(e) {
    var t, n;
    let { command: r, location: i, triggerSection: a, queryLength: s, sectionName: o, query: l, searchResultsPosition: u, source: c } = e;
    (0, d.yw)(m.rMx.APPLICATION_COMMAND_SELECTED, {
        command_id: null !== (n = null === (t = r.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : r.id,
        application_id: r.applicationId,
        location: i,
        section: a,
        query_length: s,
        command_text_length: r.displayName.length,
        section_name: o,
        query: l,
        search_results_position: u,
        source: c
    });
}
