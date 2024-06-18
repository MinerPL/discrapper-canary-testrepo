"use strict";
n.d(e, {
  q: function() {
    return a
  }
});
var r = n(703498),
  i = n(876122),
  s = n(643487);
class a {
  constructor() {
    a.prototype.__init.call(this)
  }
  static __initStatic() {
    this.id = "HttpContext"
  }
  __init() {
    this.name = a.id
  }
  setupOnce() {
    (0, r.c)(t => {
      if ((0, i.Gd)().getIntegration(a)) {
        if (!s.m9.navigator && !s.m9.location && !s.m9.document) return t;
        let e = t.request && t.request.url || s.m9.location && s.m9.location.href,
          {
            referrer: n
          } = s.m9.document || {},
          {
            userAgent: r
          } = s.m9.navigator || {},
          i = {
            ...t.request && t.request.headers,
            ...n && {
              Referer: n
            },
            ...r && {
              "User-Agent": r
            }
          },
          a = {
            ...t.request,
            ...e && {
              url: e
            },
            headers: i
          };
        return {
          ...t,
          request: a
        }
      }
      return t
    })
  }
}
a.__initStatic()