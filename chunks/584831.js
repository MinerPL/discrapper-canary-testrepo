"use strict";
var r, a, o, i, l, u = n("668530"),
  s = n("476508"),
  c = n("65007").f,
  d = n("62691").set,
  f = n("6938"),
  p = n("378636"),
  h = n("192006"),
  m = n("325435"),
  y = n("42433"),
  v = u.MutationObserver || u.WebKitMutationObserver,
  g = u.document,
  b = u.process,
  _ = u.Promise,
  k = c(u, "queueMicrotask"),
  C = k && k.value;
if (!C) {
  var w = new f,
    S = function() {
      var e, t;
      for (y && (e = b.domain) && e.exit(); t = w.get();) try {
        t()
      } catch (e) {
        throw w.head && r(), e
      }
      e && e.enter()
    };
  p || y || m || !v || !g ? !h && _ && _.resolve ? ((i = _.resolve(void 0)).constructor = _, l = s(i.then, i), r = function() {
    l(S)
  }) : y ? r = function() {
    b.nextTick(S)
  } : (d = s(d, u), r = function() {
    d(S)
  }) : (a = !0, o = g.createTextNode(""), new v(S).observe(o, {
    characterData: !0
  }), r = function() {
    o.data = a = !a
  }), C = function(e) {
    !w.head && r(), w.add(e)
  }
}
e.exports = C