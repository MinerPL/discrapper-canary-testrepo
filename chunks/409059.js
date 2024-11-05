n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(741847),
    c = n(58346);
let d = new Map(),
    f = null;
function _(e, t) {
    if (null == e) return;
    let n = d.get(e),
        r =
            null != n
                ? { ...n }
                : {
                      code: e,
                      state: c.Rj.RESOLVING
                  };
    t(r), (d = new Map(d)).set(e, r);
}
function h(e) {
    p(e.guildTemplate);
}
function p(e) {
    return _(e.code, (t) => {
        let n = (0, u.Z)(e);
        for (let e in n) t[e] = n[e];
    });
}
function m(e) {
    return _(e.code, (e) => {
        e.state = c.Rj.EXPIRED;
    });
}
class g extends (r = o.ZP.Store) {
    getGuildTemplate(e) {
        if (null != e) return d.get(e);
    }
    getGuildTemplates() {
        return d;
    }
    getForGuild(e) {
        for (let t in d) {
            let n = d.get(t);
            if (null != n && 'sourceGuildId' in n && n.sourceGuildId === e && n.state !== c.Rj.EXPIRED) return n;
        }
    }
    getDisplayedGuildTemplateCode() {
        return f;
    }
}
(s = 'GuildTemplateStore'),
    (a = 'displayName') in (i = g)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new g(l.Z, {
        GUILD_TEMPLATE_RESOLVE: function (e) {
            let { code: t } = e;
            (d = new Map(d)).set(t, {
                code: t,
                state: c.Rj.RESOLVING
            });
        },
        GUILD_TEMPLATE_CREATE_SUCCESS: h,
        GUILD_TEMPLATE_SYNC_SUCCESS: h,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: h,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function (e) {
            let { guildTemplates: t } = e;
            t.forEach((e) => p(e));
        },
        GUILD_TEMPLATE_RESOLVE_FAILURE: m,
        GUILD_TEMPLATE_DELETE_SUCCESS: m,
        GUILD_TEMPLATE_ACCEPT: function (e) {
            return _(e.code, (e) => {
                e.state = c.Rj.ACCEPTING;
            });
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function (e) {
            return _(e.code, (e) => {
                var t;
                (e.state = c.Rj.ACCEPTED), (e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1);
            });
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function (e) {
            return _(e.code, (e) => {
                e.state = c.Rj.RESOLVED;
            });
        },
        GUILD_TEMPLATE_MODAL_SHOW: function (e) {
            f = e.code;
        },
        GUILD_TEMPLATE_MODAL_HIDE: function (e) {
            f = null;
        }
    }));
