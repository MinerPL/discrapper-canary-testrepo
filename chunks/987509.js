n.d(t, {
    ZP: function () {
        return p;
    },
    dL: function () {
        return f;
    },
    hC: function () {
        return E;
    },
    hl: function () {
        return g;
    },
    qx: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var l = n(392711),
    a = n(493683),
    s = n(212819),
    i = n(938078),
    r = n(823385),
    o = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(823379),
    h = n(41837),
    _ = n(981631);
n(689938);
function f(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === _.d4z.DM
        ? {
              type: 'user',
              id: t.recipients[0]
          }
        : {
              type: 'channel',
              id: e
          };
}
function E(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
function g(e) {
    if ('channel' === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function m(e) {
    let t = g(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await a.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function S(e) {
    if ('user' !== e.type) return (0, i.Z)(e.id);
    {
        let t = u.default.getUser(e.id);
        return null != t
            ? {
                  type: s.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function I(e, t) {
    let n;
    let l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let a = [];
    for (let t of e) {
        if (null != t)
            if (t.type === s.h8.HEADER) n = t;
            else {
                let { id: e } = t.record;
                !l.has(e) && (l.add(e), null != n && (a.push(n), (n = void 0)), a.push(t));
            }
    }
    return a;
}
function A(e, t) {
    return e.filter((e) => {
        var n, l;
        return (0, d.lm)(e) && (e.type === s.h8.HEADER || ((0, h.o)(e) && ((n = e), (l = t), n.type === s.h8.USER ? l || null != o.Z.getDMChannelFromUserId(n.record.id) : n.type === s.h8.GROUP_DM || (n.record.type !== _.d4z.GUILD_FORUM && n.record.type !== _.d4z.GUILD_MEDIA && c.Z.can(_.Plq.VIEW_CHANNEL, n.record) && c.Z.can(_.Plq.SEND_MESSAGES, n.record)))));
    });
}
function p(e) {
    let { results: t, hasQuery: n, queryMode: a, frequentChannels: s, targetDestination: o, selectedDestinations: c, pinnedDestinations: u, originDestination: d, includeMissingDMs: h } = e;
    if (n) return I(A(t, h));
    let _ = null != u && u.length > 0 ? u.map((e) => S(e)) : [],
        f = r.Z.getChannelHistory(),
        E = f.length > 0 ? f.map((e) => (0, i.Z)(e)) : [],
        g = s.length > 0 ? s.map((e) => (0, i.Z)(e.id)) : [],
        m = A([..._, null != o ? S(o) : null, ...E, ...g], h),
        p = (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
        C = null == d || p ? [] : [d.id];
    return null != a ? I(m.filter((e) => e.type === a)) : I(m, C).slice(0, 15);
}
