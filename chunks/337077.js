"use strict";
a.r(t), a.d(t, {
  useExtractEmbedPreview: function() {
    return o
  }
}), a("47120"), a("653041");
var s = a("470079"),
  n = a("392711"),
  l = a("591759"),
  r = a("158222"),
  i = a("154135");

function o(e, t, a) {
  let o = s.useRef(new Map),
    [, d] = s.useState(null),
    [u, c] = s.useState(null),
    m = s.useMemo(() => n.debounce((e, a) => {
      if (null == a || e || 0 === t) return;
      let s = a.match(l.default.URL_REGEX);
      if (null == s || 0 === s.length) {
        o.current = new Map, c(null);
        return
      }
      c(n.uniq(s).slice(0, i.MAX_THUMBNAIL_COUNT))
    }, 1e3), [t, o]);
  s.useEffect(() => {
    m(e, a)
  }, [m, a, e]), s.useEffect(() => {
    (async function e(e, t) {
      if (null == t) return;
      let a = e.current,
        s = new Set(a.keys()),
        n = t.filter(e => !(null == s ? void 0 : s.has(e)));
      if (0 !== n.length) try {
        let t = await r.unfurlEmbedUrl(n);
        e.current = function(e, t, a) {
          return null == a || a.forEach(a => {
            let s = function(e, t) {
              return e.find(e => (null == t ? void 0 : t.url) != null && e.startsWith(t.url))
            }(t, a);
            if (null == s) return;
            let n = e.get(s);
            null == n ? e.set(s, [a]) : n.push(a)
          }), e
        }(new Map(a), n, null == t ? void 0 : t.embeds), d({})
      } catch (e) {}
    })(o, u)
  }, [u]);
  let h = o.current,
    f = s.useMemo(() => {
      let e = [];
      return null == u || u.forEach(t => {
        let a = h.get(t);
        null != a && e.push(...a)
      }), e.length > 0 ? e : null
    }, [u, h]);
  return {
    embeds: e ? null : f
  }
}