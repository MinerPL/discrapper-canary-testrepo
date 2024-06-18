"use strict";
n.d(t, {
  M: function() {
    return o
  }
}), n(47120), n(653041);
var s = n(470079),
  l = n(392711),
  a = n(591759),
  i = n(158222),
  r = n(154135);

function o(e, t, n) {
  let o = s.useRef(new Map),
    [, c] = s.useState(null),
    [d, u] = s.useState(null),
    h = s.useMemo(() => l.debounce((e, n) => {
      if (null == n || e || 0 === t) return;
      let s = n.match(a.Z.URL_REGEX);
      if (null == s || 0 === s.length) {
        o.current = new Map, u(null);
        return
      }
      u(l.uniq(s).slice(0, r.Yh))
    }, 1e3), [t, o]);
  s.useEffect(() => {
    h(e, n)
  }, [h, n, e]), s.useEffect(() => {
    (async function e(e, t) {
      if (null == t) return;
      let n = e.current,
        s = new Set(n.keys()),
        l = t.filter(e => !(null == s ? void 0 : s.has(e)));
      if (0 !== l.length) try {
        let t = await i.V6(l);
        e.current = function(e, t, n) {
          return null == n || n.forEach(n => {
            let s = function(e, t) {
              return e.find(e => (null == t ? void 0 : t.url) != null && e.startsWith(t.url))
            }(t, n);
            if (null == s) return;
            let l = e.get(s);
            null == l ? e.set(s, [n]) : l.push(n)
          }), e
        }(new Map(n), l, null == t ? void 0 : t.embeds), c({})
      } catch (e) {}
    })(o, d)
  }, [d]);
  let m = o.current,
    g = s.useMemo(() => {
      let e = [];
      return null == d || d.forEach(t => {
        let n = m.get(t);
        null != n && e.push(...n)
      }), e.length > 0 ? e : null
    }, [d, m]);
  return {
    embeds: e ? null : g
  }
}