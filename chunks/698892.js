"use strict";
n.d(e, {
  Ak: function() {
    return s
  },
  Du: function() {
    return a
  },
  t$: function() {
    return o
  }
});
var r = n(529866);
let i = (0, n(24716).Rf)();

function s() {
  if (!("fetch" in i)) return !1;
  try {
    return new Headers, new Request("http://www.example.com"), new Response, !0
  } catch (t) {
    return !1
  }
}

function a(t) {
  return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}

function o() {
  if (!s()) return !1;
  if (a(i.fetch)) return !0;
  let t = !1,
    e = i.document;
  if (e && "function" == typeof e.createElement) try {
    let n = e.createElement("iframe");
    n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = a(n.contentWindow.fetch)), e.head.removeChild(n)
  } catch (t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
  }
  return t
}