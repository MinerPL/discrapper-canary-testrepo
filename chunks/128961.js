"use strict";
var n = function(e, t) {
    switch (e) {
      case "P":
        return t.date({
          width: "short"
        });
      case "PP":
        return t.date({
          width: "medium"
        });
      case "PPP":
        return t.date({
          width: "long"
        });
      default:
        return t.date({
          width: "full"
        })
    }
  },
  r = function(e, t) {
    switch (e) {
      case "p":
        return t.time({
          width: "short"
        });
      case "pp":
        return t.time({
          width: "medium"
        });
      case "ppp":
        return t.time({
          width: "long"
        });
      default:
        return t.time({
          width: "full"
        })
    }
  };
t.Z = {
  p: r,
  P: function(e, t) {
    var i, a = e.match(/(P+)(p+)?/) || [],
      o = a[1],
      s = a[2];
    if (!s) return n(e, t);
    switch (o) {
      case "P":
        i = t.dateTime({
          width: "short"
        });
        break;
      case "PP":
        i = t.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        i = t.dateTime({
          width: "long"
        });
        break;
      default:
        i = t.dateTime({
          width: "full"
        })
    }
    return i.replace("{{date}}", n(o, t)).replace("{{time}}", r(s, t))
  }
}