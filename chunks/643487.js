"use strict";
n.d(e, {
  Wz: function() {
    return l
  },
  m9: function() {
    return o
  },
  re: function() {
    return function t(e, n = {}, i) {
      if ("function" != typeof e) return e;
      try {
        let t = e.__sentry_wrapped__;
        if (t) return t;
        if ((0, s.HK)(e)) return e
      } catch (t) {
        return e
      }
      let o = function() {
        let s = Array.prototype.slice.call(arguments);
        try {
          i && "function" == typeof i && i.apply(this, arguments);
          let r = s.map(e => t(e, n));
          return e.apply(this, r)
        } catch (t) {
          throw u++, setTimeout(() => {
            u--
          }), (0, r.$e)(e => {
            e.addEventProcessor(t => (n.mechanism && ((0, a.Db)(t, void 0, void 0), (0, a.EG)(t, n.mechanism)), t.extra = {
              ...t.extra,
              arguments: s
            }, t)), (0, r.Tb)(t)
          }), t
        }
      };
      try {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t])
      } catch (t) {}(0, s.$Q)(o, e), (0, s.xp)(e, "__sentry_wrapped__", o);
      try {
        Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", {
          get: () => e.name
        })
      } catch (t) {}
      return o
    }
  }
});
var r = n(138122),
  i = n(24716),
  s = n(442853),
  a = n(862315);
let o = i.n2,
  u = 0;

function l() {
  return u > 0
}