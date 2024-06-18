"use strict";
n(47120), n(653041);
var i, r, s = n(404097),
  o = n(544891),
  a = n(358085),
  l = n(747268),
  u = n(250471),
  _ = n(20186),
  d = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = new Set(["darwin", "linux", "win32", "ios", "android"]);
(r = i || (i = {})).COUNT = "count", r.DISTRIBUTION = "distribution";
t.Z = new class e {
  _getMetricWithDefaults(e, t) {
    let {
      name: n,
      tags: i
    } = e, r = {
      name: n,
      type: t,
      tags: (0, _.d)()
    };
    null != i && i.forEach(e => {
      r.tags.push(e)
    });
    let o = function() {
      if ((0, a.isWeb)()) return "web";
      {
        let e = (0, a.getPlatformName)();
        return E.has(e) ? e : null
      }
    }();
    null != o && r.tags.push("platform:".concat(o));
    let u = function() {
      let e = l.Z;
      return null != e && s.e.ALL.has(e) ? e : null
    }();
    return null != u && r.tags.push("release_channel:".concat(u)), r
  }
  increment(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = this._getMetricWithDefaults(e, "count");
    this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush()
  }
  distribution(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!(0, u.V)("distribution-metric")) return;
    let i = {
      ...this._getMetricWithDefaults(e, "distribution"),
      value: t
    };
    this._metrics.push(i), (n || this._metrics.length >= 100) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let e = [...this._metrics];
      o.tn.post({
        url: (0, u.V)("monitoring-agent") ? d.ANM.METRICS_V2 : d.ANM.METRICS,
        body: {
          metrics: e,
          client_info: {
            built_at: "1718704747066",
            build_number: "302882"
          }
        },
        retries: 1
      }).catch(t => {
        this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
      })
    }
    this._metrics = []
  }
  constructor() {
    c(this, "_metrics", void 0), c(this, "_intervalId", void 0), this._metrics = [], this._intervalId = setInterval(() => {
      this._flush()
    }, 12e4)
  }
}