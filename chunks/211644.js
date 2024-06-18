"use strict";
n.d(t, {
  Aq: function() {
    return R
  },
  ZP: function() {
    return p
  },
  bn: function() {
    return m
  },
  cI: function() {
    return A
  },
  f0: function() {
    return f
  },
  gE: function() {
    return N
  },
  mc: function() {
    return C
  },
  ot: function() {
    return O
  }
}), n(47120), n(733860);
var i = n(652874),
  r = n(261376);
let s = new(n(499303)).I,
  o = () => ({
    candidates: new Map,
    shownFatigableCandidate: null,
    prevFatigableCandidate: null,
    recentlyShown: [],
    currentlyShown: new Set,
    currentlyShownGroup: new Set,
    lastWinnerTime: 0
  }),
  a = (0, i.Z)(o),
  l = e => ({
    ...e,
    candidates: new Map(e.candidates),
    currentlyShown: new Set(e.currentlyShown),
    currentlyShownGroup: new Set(e.currentlyShownGroup)
  }),
  u = (e, t) => {
    var n;
    return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e)
  },
  _ = (e, t) => {
    var n, i;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let s = e.recentlyShown.filter(e => e !== t.content);
    return s.unshift(t.content), s.splice(5), e.recentlyShown = s, null != t.groupName && e.currentlyShownGroup.add(t.groupName), !r.O.has(t.content) && (e.shownFatigableCandidate = t, (null === (i = e.prevFatigableCandidate) || void 0 === i ? void 0 : i.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null === (n = t.onAdded) || void 0 === n || n.call(t), e
  },
  d = (e, t) => (e.candidates.set(t.content, t), e),
  c = (e, t) => (e.candidates.delete(t.content), e),
  E = (e, t) => _(u(e, e.shownFatigableCandidate), t),
  I = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
  T = e => {
    let t = [...e.candidates.keys()];
    return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
      var n;
      return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content)
    })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
  },
  h = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
  S = e => {
    if (0 === e.candidates.size) return e;
    let t = new Date().getTime() - e.lastWinnerTime > 3e5;
    if (h(e) && !t) return s.unschedule(), E(e, I(e));
    if (null != e.shownFatigableCandidate && !t || s.scheduled()) return e;
    let n = new Date().getTime();
    return null == e.shownFatigableCandidate && n - e.lastWinnerTime < 36e5 ? e : (s.schedule(() => {
      a.setState(e => {
        let t = l(e);
        return E(t, T(t))
      })
    }, 250), e)
  },
  f = e => {
    let t = r.O.has(e.content);
    a.setState(n => {
      let i = l(n);
      return t ? _(i, e) : S(d(i, e))
    })
  },
  N = (e, t) => {
    a.setState(n => {
      let i = l(n);
      return t ? S(u(c(i, e), e)) : u(c(i, e), e)
    })
  },
  A = e => a.getState().currentlyShown.has(e),
  m = e => a(t => t.currentlyShown.has(e)),
  O = e => a(t => e.some(e => t.currentlyShown.has(e))),
  R = () => {
    let e = [...a.getState().currentlyShown].filter(e => !r.O.has(e)).length;
    return [a.getState().currentlyShown.size, e]
  },
  C = () => {
    a.setState(o), s.unschedule()
  };

function p(e) {
  return a(e)
}