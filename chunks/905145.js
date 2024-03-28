    "use strict";
    var n = e("581031"),
      o = Error,
      i = n("".replace),
      u = String(o("zxcasd").stack),
      c = /\n\s*at [^:]*:[^\n]*/,
      s = c.test(u);
    t.exports = function(t, r) {
      if (s && "string" == typeof t && !o.prepareStackTrace)
        for (; r--;) t = i(t, c, "");
      return t
    }