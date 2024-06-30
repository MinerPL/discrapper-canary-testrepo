n.d(t, {
    Aq: function () {
        return N;
    },
    ZP: function () {
        return O;
    },
    bn: function () {
        return S;
    },
    cI: function () {
        return g;
    },
    f0: function () {
        return I;
    },
    gE: function () {
        return T;
    },
    mc: function () {
        return v;
    },
    ot: function () {
        return A;
    }
}), n(47120), n(733860);
var r = n(652874), i = n(261376);
let a = new (n(499303)).I(), o = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0
    }), s = (0, r.Z)(o), l = e => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup)
    }), u = (e, t) => {
        var n;
        return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e);
    }, c = (e, t) => {
        var n, r;
        if (null == t)
            return e;
        e.currentlyShown.add(t.content);
        let a = e.recentlyShown.filter(e => e !== t.content);
        return a.unshift(t.content), a.splice(5), e.recentlyShown = a, null != t.groupName && e.currentlyShownGroup.add(t.groupName), !i.O.has(t.content) && (e.shownFatigableCandidate = t, (null === (r = e.prevFatigableCandidate) || void 0 === r ? void 0 : r.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null === (n = t.onAdded) || void 0 === n || n.call(t), e;
    }, d = (e, t) => (e.candidates.set(t.content, t), e), _ = (e, t) => (e.candidates.delete(t.content), e), E = (e, t) => c(u(e, e.shownFatigableCandidate), t), f = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0, h = e => {
        let t = [...e.candidates.keys()];
        return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
            var n;
            return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content);
        })), e.candidates.get(t[Math.floor(Math.random() * t.length)]);
    }, p = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate, m = e => {
        if (0 === e.candidates.size)
            return e;
        let t = new Date().getTime() - e.lastWinnerTime > 300000;
        if (p(e) && !t)
            return a.unschedule(), E(e, f(e));
        if (null != e.shownFatigableCandidate && !t || a.scheduled())
            return e;
        let n = new Date().getTime();
        return null == e.shownFatigableCandidate && n - e.lastWinnerTime < 3600000 ? e : (a.schedule(() => {
            s.setState(e => {
                let t = l(e);
                return E(t, h(t));
            });
        }, 250), e);
    }, I = e => {
        let t = i.O.has(e.content);
        s.setState(n => {
            let r = l(n);
            return t ? c(r, e) : m(d(r, e));
        });
    }, T = (e, t) => {
        s.setState(n => {
            let r = l(n);
            return t ? m(u(_(r, e), e)) : u(_(r, e), e);
        });
    }, g = e => s.getState().currentlyShown.has(e), S = e => s(t => t.currentlyShown.has(e)), A = e => s(t => e.some(e => t.currentlyShown.has(e))), N = () => {
        let e = [...s.getState().currentlyShown].filter(e => !i.O.has(e)).length;
        return [
            s.getState().currentlyShown.size,
            e
        ];
    }, v = () => {
        s.setState(o), a.unschedule();
    };
function O(e) {
    return s(e);
}
