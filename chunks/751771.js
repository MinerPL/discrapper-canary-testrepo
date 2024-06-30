let a, n, s, l, r, o, c;
i(47120);
var d, u, m, p, I = i(442837), f = i(570140), h = i(823385), x = i(814443), C = i(823379), g = i(971130), N = i(709054), E = i(592125), S = i(496675), A = i(699516), T = i(981631), v = i(245335);
let _ = new Set(), Z = [], j = new Map();
function D(e) {
    let t = new Set(), i = null == l || c === v.Iq.EMBEDDED_APPLICATION ? void 0 : l.id, a = (0, g.rh)(_, i);
    for (let e of (null != a && !A.Z.isBlocked(a.id) && t.add(a.id), x.Z.getUserAffinitiesUserIds()))
        t.add(e);
    let n = new Set();
    return c === v.Iq.EMBEDDED_APPLICATION && h.Z.getChannelHistory().map(e => E.Z.getChannel(e)).filter(C.lm).filter(e => e.type === T.d4z.GUILD_TEXT).filter(e => S.Z.can(T.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => n.add(e.id)), (0, g.an)({
        query: e,
        omitUserIds: _,
        suggestedUserIds: t,
        maxRowsWithoutQuery: 100,
        omitGuildId: i,
        suggestedChannelIds: n,
        inviteTargetType: c
    });
}
function y(e) {
    Z = e, j = new Map(), e.forEach((e, t) => {
        j.set(e, { index: t });
    });
}
class b extends (d = I.ZP.Store) {
    initialize() {
        this.waitFor(A.Z, x.Z);
    }
    getInviteSuggestionRows() {
        return Z;
    }
    getTotalSuggestionsCount() {
        return n;
    }
    getInitialCounts() {
        return a;
    }
    getSelectedInviteMetadata(e) {
        let t = j.get(e), i = x.Z.getUserAffinitiesUserIds();
        return null != t ? {
            rowNum: t.index,
            isAffinitySuggestion: e.isSuggested,
            numTotal: Z.length,
            numAffinityConnections: i.size,
            isFiltered: s
        } : null;
    }
}
p = 'InviteSuggestionsStore', (m = 'displayName') in (u = b) ? Object.defineProperty(u, m, {
    value: p,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : u[m] = p, t.Z = new b(f.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let {
            omitUserIds: t,
            guild: i,
            channel: d,
            applicationId: u,
            inviteTargetType: m
        } = e;
        l = null != d ? i : null, r = d, o = u, c = m;
        let p = A.Z.getRelationships(), I = N.default.keys(p).filter(e => p[e] === T.OGo.BLOCKED);
        _ = new Set([
            ...t,
            ...I,
            ...(0, g.Sz)({
                channel: r,
                applicationId: o,
                inviteTargetType: m
            })
        ]), s = !1;
        let {
            rows: f,
            counts: h
        } = D('');
        y(f), a = h, n = Z.length;
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let {query: t} = e;
        s = '' !== t;
        let {rows: i} = D(t);
        y(i);
    }
});
