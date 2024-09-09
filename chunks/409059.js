var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(741847),
    c = n(58346);
let d = {},
    _ = null;
function E(e) {
    return null != e && 'function' != typeof d[e] && !0;
}
function f(e, t) {
    var n;
    if (!E(e)) return null;
    let r =
        null !== (n = d[e]) && void 0 !== n
            ? n
            : {
                  code: e,
                  state: c.Rj.RESOLVING
              };
    t((r = { ...r })),
        (d = {
            ...d,
            [e]: r
        });
}
function h(e) {
    p(e.guildTemplate);
}
function p(e) {
    return f(e.code, (t) => {
        let n = (0, u.Z)(e);
        for (let e in n) t[e] = n[e];
    });
}
function I(e) {
    return f(e.code, (e) => {
        e.state = c.Rj.EXPIRED;
    });
}
class m extends (s = o.ZP.Store) {
    getGuildTemplate(e) {
        if (!!E(e)) return null != e ? d[e] : null;
    }
    getGuildTemplates() {
        return d;
    }
    getForGuild(e) {
        for (let t in d) {
            let n = d[t];
            if ('sourceGuildId' in n && n.sourceGuildId === e && n.state !== c.Rj.EXPIRED) return n;
        }
    }
    getDisplayedGuildTemplateCode() {
        return _;
    }
}
(a = 'GuildTemplateStore'),
    (i = 'displayName') in (r = m)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new m(l.Z, {
        GUILD_TEMPLATE_RESOLVE: function (e) {
            let { code: t } = e;
            if (!E(t)) return !0;
            d = {
                ...d,
                [t]: {
                    code: t,
                    state: c.Rj.RESOLVING
                }
            };
        },
        GUILD_TEMPLATE_CREATE_SUCCESS: h,
        GUILD_TEMPLATE_SYNC_SUCCESS: h,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: h,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function (e) {
            let { guildTemplates: t } = e;
            t.forEach((e) => p(e));
        },
        GUILD_TEMPLATE_RESOLVE_FAILURE: I,
        GUILD_TEMPLATE_DELETE_SUCCESS: I,
        GUILD_TEMPLATE_ACCEPT: function (e) {
            return f(e.code, (e) => {
                e.state = c.Rj.ACCEPTING;
            });
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function (e) {
            return f(e.code, (e) => {
                var t;
                (e.state = c.Rj.ACCEPTED), (e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1);
            });
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function (e) {
            return f(e.code, (e) => {
                e.state = c.Rj.RESOLVED;
            });
        },
        GUILD_TEMPLATE_MODAL_SHOW: function (e) {
            _ = e.code;
        },
        GUILD_TEMPLATE_MODAL_HIDE: function (e) {
            _ = null;
        }
    }));
