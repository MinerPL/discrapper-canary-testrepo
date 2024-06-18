"use strict";
let r;
n.d(e, {
  c: function() {
    return u
  },
  x: function() {
    return o
  }
});
var i = n(698892),
  s = n(529866),
  a = n(643487);

function o() {
  if (r) return r;
  if ((0, i.Du)(a.m9.fetch)) return r = a.m9.fetch.bind(a.m9);
  let t = a.m9.document,
    e = a.m9.fetch;
  if (t && "function" == typeof t.createElement) try {
    let n = t.createElement("iframe");
    n.hidden = !0, t.head.appendChild(n);
    let r = n.contentWindow;
    r && r.fetch && (e = r.fetch), t.head.removeChild(n)
  } catch (t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
  }
  return r = e.bind(a.m9)
}

function u() {
  r = void 0
}