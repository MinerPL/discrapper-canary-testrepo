"use strict";
n.d(t, {
  N: function() {
    return u
  }
});
var r = n(812975),
  i = n(686942),
  a = n(713267),
  o = n(695170),
  s = n(829105);

function u(e) {
  for (var t = [], n = "", u = Object.keys(e), c = Object.keys(r.WN), l = 0; l < u.length; l++) {
    if ("tzid" !== u[l] && !!(0, i.q9)(c, u[l])) {
      var d = u[l].toUpperCase(),
        f = e[u[l]],
        p = "";
      if (!(!(0, i.EN)(f) || (0, i.kJ)(f) && !f.length)) {
        switch (d) {
          case "FREQ":
            p = r.Ci.FREQUENCIES[e.freq];
            break;
          case "WKST":
            p = (0, i.hj)(f) ? new a.O(f).toString() : f.toString();
            break;
          case "BYWEEKDAY":
            d = "BYDAY", p = (0, i.qo)(f).map(function(e) {
              return e instanceof a.O ? e : (0, i.kJ)(e) ? new a.O(e[0], e[1]) : new a.O(e)
            }).toString();
            break;
          case "DTSTART":
            n = function(e, t) {
              return e ? "DTSTART" + new s.M(new Date(e), t).toString() : ""
            }(f, e.tzid);
            break;
          case "UNTIL":
            p = (0, o.Od)(f, !e.tzid);
            break;
          default:
            if ((0, i.kJ)(f)) {
              for (var h = [], m = 0; m < f.length; m++) h[m] = String(f[m]);
              p = h.toString()
            } else p = String(f)
        }
        p && t.push([d, p])
      }
    }
  }
  var g = t.map(function(e) {
      var t = e[0],
        n = e[1];
      return "".concat(t, "=").concat(n.toString())
    }).join(";"),
    _ = "";
  return "" !== g && (_ = "RRULE:".concat(g)), [n, _].filter(function(e) {
    return !!e
  }).join("\n")
}