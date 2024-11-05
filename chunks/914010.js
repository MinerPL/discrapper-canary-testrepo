var r,
    i = n(512969),
    a = n(442837),
    s = n(570140),
    o = n(937111);
n(57132);
var l = n(893607),
    u = n(703656),
    c = n(314897),
    d = n(896797),
    f = n(430824),
    _ = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = null,
    m = null,
    g = {};
function E() {
    null != p && null == f.Z.getGuild(p) && null == o.Z.getRequest(p) && (p = null), null != m && null == f.Z.getGuild(m) && null == o.Z.getRequest(m) && (m = null), v(p);
}
function v(e) {
    if (null != e) g[e] = Date.now();
}
function I(e) {
    let t = !1;
    if ((delete g[e], m === e && ((m = null), (t = !0)), p === e)) {
        Object.values(f.Z.getGuilds()).find((t) => t.id !== e);
        (p = null), (0, u.dL)(_.Z5c.ME), (t = !0);
    }
    return t;
}
class S extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n, r, a;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(f.Z, c.default, d.Z), (g = null !== (n = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== n ? n : {}), (p = null !== (r = null == e ? void 0 : e.selectedGuildId) && void 0 !== r ? r : null), (m = null !== (a = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== a ? a : null);
        let s = d.Z.lastNonVoiceRoute,
            o = (0, i.LX)(s, { path: _.Z5c.CHANNEL(l.Hw.guildId()) });
        null == o || null === (t = o.params) || void 0 === t || t.guildId;
    }
    getState() {
        return {
            selectedGuildTimestampMillis: g,
            selectedGuildId: p,
            lastSelectedGuildId: m
        };
    }
    getGuildId() {
        return p;
    }
    getLastSelectedGuildId() {
        return m;
    }
    getLastSelectedTimestamp(e) {
        return p === e ? -1 : g[e];
    }
}
h(S, 'displayName', 'SelectedGuildStore'),
    h(S, 'persistKey', 'SelectedGuildStore'),
    (t.Z = new S(s.Z, {
        CONNECTION_OPEN: E,
        OVERLAY_INITIALIZE: function (e) {
            (p = e.selectedGuildId), (m = void 0), E();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (p === t) return !1;
            v(p), v(t), null != t && (m = t), (p = t);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e;
            return n.id === c.default.getId() && I(t);
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t, unavailable: n }
            } = e;
            return !0 !== n && I(t);
        },
        LOGOUT: function () {
            (p = null), (m = null);
        }
    }));
