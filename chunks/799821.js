"use strict";
let r, i;
n.d(e, {
  Fv: function() {
    return E
  },
  PR: function() {
    return b
  },
  f7: function() {
    return w
  },
  sn: function() {
    return S
  }
});
var s = n(147816),
  a = n(868145),
  o = n(829919),
  u = n(529866),
  l = n(607190),
  c = n(540161),
  d = n(282572),
  h = n(301072),
  _ = n(233863),
  f = n(544457),
  p = n(72609);

function m(t) {
  return t / 1e3
}

function g() {
  return l.m && l.m.addEventListener && l.m.performance
}
let y = 0,
  v = {};

function b() {
  let t = g();
  if (t && a.Z1) {
    t.mark && l.m.performance.mark("sentry-tracing-init"),
      function() {
        (0, d.F)(t => {
          let e = t.entries.pop();
          if (!e) return;
          let n = m(a.Z1),
            r = m(e.startTime);
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding FID"), v.fid = {
            value: t.value,
            unit: "millisecond"
          }, v["mark.fid"] = {
            value: n + r,
            unit: "second"
          }
        })
      }();
    let e = function() {
        return (0, c.m)(t => {
          let e = t.entries.pop();
          if (!!e)("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding CLS"), v.cls = {
            value: t.value,
            unit: ""
          }, i = e
        })
      }(),
      n = function() {
        return (0, h.N)(t => {
          let e = t.entries.pop();
          if (!!e)("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding LCP"), v.lcp = {
            value: t.value,
            unit: "millisecond"
          }, r = e
        })
      }();
    return () => {
      e && e(), n && n()
    }
  }
  return () => void 0
}

function E() {
  (0, f.N)("longtask", t => {
    for (let e of t) {
      let t = (0, s.x1)();
      if (!t) return;
      let n = m(a.Z1 + e.startTime),
        r = m(e.duration);
      t.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        startTimestamp: n,
        endTimestamp: n + r
      })
    }
  })
}

function S() {
  (0, f.N)("event", t => {
    for (let e of t) {
      let t = (0, s.x1)();
      if (!t) return;
      if ("click" === e.name) {
        let n = m(a.Z1 + e.startTime),
          r = m(e.duration);
        t.startChild({
          description: (0, o.Rt)(e.target),
          op: `ui.interaction.${e.name}`,
          startTimestamp: n,
          endTimestamp: n + r
        })
      }
    }
  }, {
    durationThreshold: 0
  })
}

function w(t) {
  let e, n;
  let s = g();
  if (!s || !l.m.performance.getEntries || !a.Z1) return;
  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Tracing] Adding & adjusting spans using Performance API");
  let c = m(a.Z1),
    d = s.getEntries();
  if (d.slice(y).forEach(r => {
      let i = m(r.startTime),
        s = m(r.duration);
      if ("navigation" !== t.op || !(c + i < t.startTimestamp)) switch (r.entryType) {
        case "navigation":
          (function(t, e, n) {
            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                k(t, e, r, n)
              }), k(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), k(t, e, "fetch", n, "cache", "domainLookupStart"), k(t, e, "domainLookup", n, "DNS"),
              function(t, e, n) {
                (0, p.H)(t, {
                  op: "browser",
                  description: "request",
                  startTimestamp: n + m(e.requestStart),
                  endTimestamp: n + m(e.responseEnd)
                }), (0, p.H)(t, {
                  op: "browser",
                  description: "response",
                  startTimestamp: n + m(e.responseStart),
                  endTimestamp: n + m(e.responseEnd)
                })
              }(t, e, n)
          })(t, r, c), e = c + m(r.responseStart), n = c + m(r.requestStart);
          break;
        case "mark":
        case "paint":
        case "measure": {
          (function(t, e, n, r, i) {
            let s = i + n;
            (0, p.H)(t, {
              description: e.name,
              endTimestamp: s + r,
              op: e.entryType,
              startTimestamp: s
            })
          })(t, r, i, s, c);
          let e = (0, _.Y)(),
            n = r.startTime < e.firstHiddenTime;
          "first-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding FP"), v.fp = {
            value: r.startTime,
            unit: "millisecond"
          }), "first-contentful-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding FCP"), v.fcp = {
            value: r.startTime,
            unit: "millisecond"
          });
          break
        }
        case "resource": {
          let e = r.name.replace(l.m.location.origin, "");
          (function(t, e, n, r, i, s) {
            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
            let a = {};
            "transferSize" in e && (a["http.response_transfer_size"] = e.transferSize), "encodedBodySize" in e && (a["http.response_content_length"] = e.encodedBodySize), "decodedBodySize" in e && (a["http.decoded_response_content_length"] = e.decodedBodySize), "renderBlockingStatus" in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus);
            let o = s + r;
            (0, p.H)(t, {
              description: n,
              endTimestamp: o + i,
              op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
              startTimestamp: o,
              data: a
            })
          })(t, r, e, i, s, c)
        }
      }
    }), y = Math.max(d.length - 1, 0), function(t) {
      let e = l.m.navigator;
      if (!e) return;
      let n = e.connection;
      n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), (0, p.n)(n.rtt) && (v["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
      })), (0, p.n)(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), (0, p.n)(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
    }(t), "pageload" === t.op) {
    "number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding TTFB"), v.ttfb = {
      value: (e - t.startTimestamp) * 1e3,
      unit: "millisecond"
    }, "number" == typeof n && n <= e && (v["ttfb.requestTime"] = {
      value: (e - n) * 1e3,
      unit: "millisecond"
    })), ["fcp", "fp", "lcp"].forEach(e => {
      if (!v[e] || c >= t.startTimestamp) return;
      let n = v[e].value,
        r = Math.abs((c + m(n) - t.startTimestamp) * 1e3),
        i = r - n;
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log(`[Measurements] Normalized ${e} from ${n} to ${r} (${i})`), v[e].value = r
    });
    let s = v["mark.fid"];
    s && v.fid && ((0, p.H)(t, {
        description: "first input delay",
        endTimestamp: s.value + m(v.fid.value),
        op: "ui.action",
        startTimestamp: s.value
      }), delete v["mark.fid"]), !("fcp" in v) && delete v.cls, Object.keys(v).forEach(e => {
        t.setMeasurement(e, v[e].value, v[e].unit)
      }),
      function(t) {
        r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding LCP Data"), r.element && t.setTag("lcp.element", (0, o.Rt)(r.element)), r.id && t.setTag("lcp.id", r.id), r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)), t.setTag("lcp.size", r.size)), i && i.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding CLS Data"), i.sources.forEach((e, n) => t.setTag(`cls.source.${n+1}`, (0, o.Rt)(e.node))))
      }(t)
  }
  r = void 0, i = void 0, v = {}
}

function k(t, e, n, r, i, s) {
  let a = s ? e[s] : e[`${n}End`],
    o = e[`${n}Start`];
  if (!!o && !!a)(0, p.H)(t, {
    op: "browser",
    description: i || n,
    startTimestamp: r + m(o),
    endTimestamp: r + m(a)
  })
}