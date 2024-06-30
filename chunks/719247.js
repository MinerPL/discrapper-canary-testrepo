e.d(t, {
    T: function () {
        return A;
    }
}), e(47120);
var r, i = e(392711), u = e.n(i), o = e(661869), E = e(876215), a = e(423875), l = e(442837), T = e(570140), c = e(158776), _ = e(146282), s = e(26033), d = e(561308), f = e(981631), S = e(616922);
function N(n, t, e) {
    return t in n ? Object.defineProperty(n, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[t] = e, n;
}
let M = new Set([E.s.LISTENED_SESSION]), I = new Map();
function A(n) {
    return ''.concat(n.author_id, ':').concat(n.id);
}
function O(n) {
    let t = new Set(), e = new Set();
    for (let r of n) {
        let n = function (n) {
            return (0, d.n2)(n) ? null : (0, d.kr)(n) && n.author_type === o.i.USER ? c.Z.getActivities(n.author_id).find(t => {
                if (t.type === f.IIU.PLAYING && (0, s.d)(n))
                    return function (n, t) {
                        let e = n.extra;
                        return null != e && ('application_id' in t && t.application_id === e.application_id || 'game_name' in e && t.name === e.game_name);
                    }(n, t);
                if (t.type === f.IIU.LISTENING && n.content_type === E.s.LISTENED_SESSION) {
                    var e, r, i, u, o;
                    return e = n, r = t, (null === (u = e.extra.entries[0]) || void 0 === u ? void 0 : null === (i = u.media) || void 0 === i ? void 0 : i.provider) === a.p.SPOTIFY && (0, S.Ps)(null === (o = r.party) || void 0 === o ? void 0 : o.id);
                }
                return !1;
            }) : void 0;
        }(r.content);
        if (void 0 !== n) {
            let i = A(r.content);
            e.add(i), n !== I.get(i) && (t.add(i), I.set(i, n));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: e
    };
}
function R() {
    let n = !1, t = Array.from(I.keys()), e = new Set(), r = new Set();
    for (let t of _.Z.getFeeds().values()) {
        let {
            updatedKeys: i,
            matchedKeys: u
        } = O(e.size > 0 ? t.entries.filter(n => !e.has(A(n.content))) : t.entries);
        for (let n of i)
            e.add(n);
        for (let n of u)
            r.add(n);
        n = n || i.size > 0;
    }
    for (let e of u().difference(t, [...r]))
        I.delete(e), n = !0;
    return n;
}
class D extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, c.Z), this.syncWith([c.Z], R);
    }
    getMatchingActivity(n) {
        return (0, d.n2)(n) ? null : I.get(A(n));
    }
    constructor(...n) {
        super(...n), N(this, 'canRenderContent', n => !(0, d.n2)(n) && (!M.has(n.content_type) || null != this.getMatchingActivity(n)));
    }
}
N(D, 'displayName', 'ContentInventoryActivityStore'), t.Z = new D(T.Z, {
    CONNECTION_OPEN: function () {
        I.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (n) {
        let {feed: t} = n, {updatedKeys: e} = O(t.entries);
        return e.size > 0;
    }
});
