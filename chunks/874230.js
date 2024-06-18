"use strict";
n.d(e, {
  $p: function() {
    return u
  },
  KA: function() {
    return o
  },
  qG: function() {
    return a
  }
});
var r = n(545459),
  i = n(862315);
let s = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function a(t) {
  let e;
  if (!t) return;
  let n = t.match(s);
  if (!!n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
    traceId: n[1],
    parentSampled: e,
    parentSpanId: n[2]
  }
}

function o(t, e) {
  let n = a(t),
    s = (0, r.EN)(e),
    {
      traceId: o,
      parentSpanId: u,
      parentSampled: l
    } = n || {},
    c = {
      traceId: o || (0, i.DM)(),
      spanId: (0, i.DM)().substring(16),
      sampled: void 0 !== l && l
    };
  return u && (c.parentSpanId = u), s && (c.dsc = s), {
    traceparentData: n,
    dynamicSamplingContext: s,
    propagationContext: c
  }
}

function u(t = (0, i.DM)(), e = (0, i.DM)().substring(16), n) {
  let r = "";
  return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
}