n(47120);
var i,
    s = n(442837),
    l = n(570140),
    r = n(592125),
    a = n(944486),
    d = n(9156);
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
let o = {},
    u = {},
    c = {};
function C() {
    let e = a.Z.getChannelId();
    if (null == e) return;
    let t = r.Z.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if ((null == c[e] && (c[e] = 0), t.isThread() || (d.ZP.isOptInEnabled(n) && !d.ZP.isChannelOrParentOptedIn(n, t.id)))) {
        delete c[e], null != o[n] && o[n].delete(e);
        return;
    }
    if ((c[e]++, null == o[n] && (o[n] = new Set()), d.ZP.isFavorite(n, e))) {
        o[n].delete(e);
        return;
    }
    if ((null == u[n] || !u[n].has(e)) && c[e] > 50) return o[n].add(e), !0;
}
class g extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.syncWith([a.Z], C), null == e)) return;
        let { suggestedChannels: i, dismissedSuggestions: s, channelOpensByChannelId: l } = e;
        if (null != i) for (let e in i) (t = new Set(i[e])), (o[e] = void 0 !== t ? t : new Set());
        if (null != s) for (let e in s) (n = new Set(s[e])), (u[e] = void 0 !== n ? n : new Set());
        c = null != l ? l : {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return {
            suggestedChannels: {},
            dismissedSuggestions: {},
            channelOpensByChannelId: {}
        };
    }
}
h(g, 'displayName', 'FavoritesSuggestionStore'),
    h(g, 'persistKey', 'FavoritesSuggestionStore'),
    (t.Z = new g(l.Z, {
        DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { guildId: t, channelId: n } = e;
            return null == u[t] && (u[t] = new Set()), u[t].add(n), o[t].delete(n), !0;
        }
    }));
