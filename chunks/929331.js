"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
}), n("781738"), n("424973"), n("222007");
var o = n("917351"),
  a = n.n(o),
  l = n("102053"),
  r = n("487269");

function i(t) {
  let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return l.default.logGroups.map(n => {
    var o, l;
    let {
      index: i,
      timestamp: s,
      logs: u,
      nativeLogs: d,
      serverTrace: g
    } = n, p = 0 === i ? null !== (l = null === (o = a.find(u, t => t.log.indexOf("Logger loaded") >= 0)) || void 0 === o ? void 0 : o.timestamp) && void 0 !== l ? l : t : s, f = function(t, e) {
      var n, o;
      let l = (function(t) {
          let e = [];
          for (let n = 0; n < t.length; n++) {
            let o = t[n],
              a = t[n + 1];
            null != a && a.log === o.log.replace("Start ", "Finish ") ? (a.log = a.log.replace("Finish ", ""), e.push(a), n++) : e.push(o)
          }
          return e
        })(t).map(t => {
          let n = null == t.timestamp ? "" : ((t.timestamp - e) / 1e3).toFixed(3),
            o = null == t.delta ? "" : String(Math.round(t.delta));
          return {
            totalTime: n,
            deltaTime: o,
            log: "".concat(t.emoji.length > 0 ? "".concat(t.emoji, " ") : "").concat(t.prefix).concat(t.log, "\n")
          }
        }),
        r = null !== (n = a.max(l.map(t => t.totalTime.length))) && void 0 !== n ? n : 0,
        i = null !== (o = a.max(l.map(t => t.deltaTime.length))) && void 0 !== o ? o : 0;
      return l.map(t => {
        let {
          totalTime: e,
          deltaTime: n,
          log: o
        } = t;
        return "".concat(a.padStart(e, r), " ").concat(a.padStart(n, i), " ").concat(o)
      }).join("")
    }(function(t, e, n) {
      t = t.slice();
      let o = new Set(e.map(c)),
        a = "",
        l = [];
      return e.forEach(e => {
        let r = c(e),
          i = 0,
          s = n || !e.autoGenerated,
          u = r.startsWith("Start ") && !r.includes("RUN_JS_BUNDLE") && o.has(r.replace("Start ", "Finish ")),
          d = r.startsWith("Finish ") && !r.includes("RUN_JS_BUNDLE") && o.has(r.replace("Finish ", "Start "));
        if (d) {
          a = a.substring(2);
          let t = l.pop();
          null != t && (i = e.timestamp - t.timestamp, s = s || i > 5 && ! function(t) {
            return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(e => t.includes(e))
          }(r), t.shouldKeep = t.shouldKeep || s)
        }
        let g = {
          emoji: "☕",
          timestamp: e.timestamp,
          delta: i > 0 ? i : void 0,
          prefix: a,
          log: r,
          shouldKeep: s
        };
        (function(t, e) {
          let n = 0;
          for (; n < t.length; n++) {
            let {
              timestamp: o
            } = t[n];
            if (null != o && o > e.timestamp) break
          }
          t.splice(n, 0, e)
        })(t, g), u && (a += "| ", l.push(g))
      }), t.filter(t => !1 !== t.shouldKeep)
    }(u, d, e), p), h = "Trace #".concat(i + 1, " started ").concat((0, r.getTimestampString)(s), "\n").concat(f);
    return null != g && (h += "\n Server trace for trace #".concat(i + 1).concat(g)), h
  }).join("\n\n")
}

function c(t) {
  let e = null == t.tag ? t.label : "".concat(t.label, " ").concat(t.tag);
  return e.includes("_START") && (e = "Start " + e.replace("_START", "")), e.includes("_END") && (e = "Finish " + e.replace("_END", "")), e
}