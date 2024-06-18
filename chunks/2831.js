var r = n(444675);
! function(e, t) {
  "use strict";
  if (!e.setImmediate) {
    var n, i, a, o, s, u = 1,
      c = {},
      l = !1,
      d = e.document;
    var f = Object.getPrototypeOf && Object.getPrototypeOf(e);
    if (f = f && f.setTimeout ? f : e, "[object process]" === ({}).toString.call(e.process)) s = function(e) {
      r.nextTick(function() {
        h(e)
      })
    };
    else if (function() {
        if (e.postMessage && !e.importScripts) {
          var t = !0,
            n = e.onmessage;
          return e.onmessage = function() {
            t = !1
          }, e.postMessage("", "*"), e.onmessage = n, t
        }
      }()) {
      ;
      n = "setImmediate$" + Math.random() + "$", i = function(t) {
        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(n) && h(+t.data.slice(n.length))
      }, e.addEventListener ? e.addEventListener("message", i, !1) : e.attachEvent("onmessage", i), s = function(t) {
        e.postMessage(n + t, "*")
      }
    } else if (e.MessageChannel) {
      ;
      (a = new MessageChannel).port1.onmessage = function(e) {
        h(e.data)
      }, s = function(e) {
        a.port2.postMessage(e)
      }
    } else if (d && "onreadystatechange" in d.createElement("script")) {
      ;
      o = d.documentElement, s = function(e) {
        var t = d.createElement("script");
        t.onreadystatechange = function() {
          h(e), t.onreadystatechange = null, o.removeChild(t), t = null
        }, o.appendChild(t)
      }
    } else s = function(e) {
      setTimeout(h, 0, e)
    };
    f.setImmediate = function(e) {
      "function" != typeof e && (e = Function("" + e));
      for (var t = Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
      var r = {
        callback: e,
        args: t
      };
      return c[u] = r, s(u), u++
    }, f.clearImmediate = p
  }

  function p(e) {
    delete c[e]
  }

  function h(e) {
    if (l) setTimeout(h, 0, e);
    else {
      var n = c[e];
      if (n) {
        l = !0;
        try {
          ! function(e) {
            var n = e.callback,
              r = e.args;
            switch (r.length) {
              case 0:
                n();
                break;
              case 1:
                n(r[0]);
                break;
              case 2:
                n(r[0], r[1]);
                break;
              case 3:
                n(r[0], r[1], r[2]);
                break;
              default:
                n.apply(t, r)
            }
          }(n)
        } finally {
          p(e), l = !1
        }
      }
    }
  }
}("undefined" == typeof self ? void 0 === n.g ? this : n.g : self)