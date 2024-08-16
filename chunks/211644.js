n.d(t, {
    Aq: function () {
        return v;
    },
    ZP: function () {
        return R;
    },
    bn: function () {
        return A;
    },
    cI: function () {
        return S;
    },
    f0: function () {
        return T;
    },
    gE: function () {
        return g;
    },
    mc: function () {
        return O;
    },
    ot: function () {
        return N;
    }
}),
    n(47120),
    n(733860);
var r = n(652874),
    i = n(731965),
    a = n(261376);
let s = new (n(499303).I)(),
    o = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0
    }),
    l = (0, r.Z)(o),
    u = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup)
    }),
    c = (e, t) => {
        var n;
        return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e);
    },
    d = (e, t) => {
        var n, r;
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let i = e.recentlyShown.filter((e) => e !== t.content);
        return i.unshift(t.content), i.splice(5), (e.recentlyShown = i), null != t.groupName && e.currentlyShownGroup.add(t.groupName), !a.O.has(t.content) && ((e.shownFatigableCandidate = t), (null === (r = e.prevFatigableCandidate) || void 0 === r ? void 0 : r.content) !== t.content && ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))), null === (n = t.onAdded) || void 0 === n || n.call(t), e;
    },
    _ = (e, t) => (e.candidates.set(t.content, t), e),
    E = (e, t) => (e.candidates.delete(t.content), e),
    f = (e, t) => d(c(e, e.shownFatigableCandidate), t),
    h = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    p = (e) => {
        let t = [...e.candidates.keys()];
        return (
            null !== e.prevFatigableCandidate &&
                e.candidates.has(e.prevFatigableCandidate.content) &&
                e.candidates.size > 1 &&
                (t = t.filter((t) => {
                    var n;
                    return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content);
                })),
            e.candidates.get(t[Math.floor(Math.random() * t.length)])
        );
    },
    m = (e) => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
    I = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > 300000;
        if (m(e) && !t) return s.unschedule(), f(e, h(e));
        if ((null != e.shownFatigableCandidate && !t) || s.scheduled()) return e;
        let n = new Date().getTime();
        return null == e.shownFatigableCandidate && n - e.lastWinnerTime < 3600000
            ? e
            : (s.schedule(() => {
                  (0, i.j)(() => {
                      l.setState((e) => {
                          let t = u(e);
                          return f(t, p(t));
                      });
                  });
              }, 250),
              e);
    },
    T = (e) => {
        let t = a.O.has(e.content);
        (0, i.j)(() => {
            l.setState((n) => {
                let r = u(n);
                return t ? d(r, e) : I(_(r, e));
            });
        });
    },
    g = (e, t) => {
        (0, i.j)(() => {
            l.setState((n) => {
                let r = u(n);
                return t ? I(c(E(r, e), e)) : c(E(r, e), e);
            });
        });
    },
    S = (e) => l.getState().currentlyShown.has(e),
    A = (e) => l((t) => t.currentlyShown.has(e)),
    N = (e) => l((t) => e.some((e) => t.currentlyShown.has(e))),
    v = () => {
        let e = [...l.getState().currentlyShown].filter((e) => !a.O.has(e)).length;
        return [l.getState().currentlyShown.size, e];
    },
    O = () => {
        (0, i.j)(() => l.setState(o)), s.unschedule();
    };
function R(e) {
    return l(e);
}
