"use strict";
n.d(e, {
  Fv: function() {
    return o
  },
  Qy: function() {
    return function t(e, n = 3, r = 102400) {
      let i = o(e, n);
      return function(t) {
        return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length
      }(i) > r ? t(e, n - 1, r) : i
    }
  }
});
var r = n(46834),
  i = n(537198),
  s = n(442853),
  a = n(432038);

function o(t, e = 100, o = Infinity) {
  try {
    return function t(e, o, u = Infinity, l = Infinity, c = (0, i.i)()) {
      let [d, h] = c;
      if (null == o || ["number", "boolean", "string"].includes(typeof o) && !(0, r.i2)(o)) return o;
      let _ = function(t, e) {
        try {
          if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
          if ("domainEmitter" === t) return "[DomainEmitter]";
          if (void 0 !== n.g && e === n.g) return "[Global]";
          if ("undefined" != typeof window && e === window) return "[Window]";
          if ("undefined" != typeof document && e === document) return "[Document]";
          if ((0, r.Cy)(e)) return "[SyntheticEvent]";
          if ("number" == typeof e && e != e) return "[NaN]";
          if ("function" == typeof e) return `[Function: ${(0,a.$P)(e)}]`;
          if ("symbol" == typeof e) return `[${String(e)}]`;
          if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
          let i = function(t) {
            let e = Object.getPrototypeOf(t);
            return e ? e.constructor.name : "null prototype"
          }(e);
          if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
          return `[object ${i}]`
        } catch (t) {
          return `**non-serializable** (${t})`
        }
      }(e, o);
      if (!_.startsWith("[object ")) return _;
      if (o.__sentry_skip_normalization__) return o;
      let f = "number" == typeof o.__sentry_override_normalization_depth__ ? o.__sentry_override_normalization_depth__ : u;
      if (0 === f) return _.replace("object ", "");
      if (d(o)) return "[Circular ~]";
      if (o && "function" == typeof o.toJSON) try {
        let e = o.toJSON();
        return t("", e, f - 1, l, c)
      } catch (t) {}
      let p = Array.isArray(o) ? [] : {},
        m = 0,
        g = (0, s.Sh)(o);
      for (let e in g) {
        if (!Object.prototype.hasOwnProperty.call(g, e)) continue;
        if (m >= l) {
          p[e] = "[MaxProperties ~]";
          break
        }
        let n = g[e];
        p[e] = t(e, n, f - 1, l, c), m++
      }
      return h(o), p
    }("", t, e, o)
  } catch (t) {
    return {
      ERROR: `**non-serializable** (${t})`
    }
  }
}