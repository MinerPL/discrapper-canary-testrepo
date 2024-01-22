"use strict";
s.r(t), s.d(t, {
  useExtractEmbedPreview: function() {
    return o
  }
}), s("222007"), s("424973");
var a = s("884691"),
  n = s("917351"),
  l = s("253981"),
  r = s("639440"),
  i = s("856220");

function o(e, t, s) {
  let o = a.useRef(new Map),
    [, u] = a.useState(null),
    [d, c] = a.useState(null),
    m = a.useMemo(() => n.debounce((e, s) => {
      if (null == s || e || 0 === t) return;
      let a = s.match(l.default.URL_REGEX);
      if (null == a || 0 === a.length) {
        o.current = new Map, c(null);
        return
      }
      let r = n.uniq(a).slice(0, i.MAX_THUMBNAIL_COUNT);
      c(r)
    }, 1e3), [t, o]);
  a.useEffect(() => {
    m(e, s)
  }, [m, s, e]), a.useEffect(() => {
    (async function e(e, t) {
      if (null == t) return;
      let s = e.current,
        a = new Set(s.keys()),
        n = t.filter(e => !(null == a ? void 0 : a.has(e)));
      if (0 !== n.length) try {
        let t = await r.unfurlEmbedUrl(n);
        e.current = function(e, t, s) {
          return null == s || s.forEach(s => {
            let a = function(e, t) {
              return e.find(e => (null == t ? void 0 : t.url) != null && e.startsWith(t.url))
            }(t, s);
            if (null == a) return;
            let n = e.get(a);
            null == n ? e.set(a, [s]) : n.push(s)
          }), e
        }(new Map(s), n, null == t ? void 0 : t.embeds), u({})
      } catch (e) {}
    })(o, d)
  }, [d]);
  let h = o.current,
    f = a.useMemo(() => {
      let e = [];
      return null == d || d.forEach(t => {
        let s = h.get(t);
        null != s && e.push(...s)
      }), e.length > 0 ? e : null
    }, [d, h]);
  return {
    embeds: e ? null : f
  }
}