var u = t("390493");
t("860677"), t("854508"), ! function(e, n) {
  "use strict";
  if (!e.setImmediate) {
    var t, f = 1,
      o = {},
      r = !1,
      a = e.document,
      i = Object.getPrototypeOf && Object.getPrototypeOf(e);
    i = i && i.setTimeout ? i : e, "[object process]" === ({}).toString.call(e.process) ? function() {
      t = function(e) {
        u.nextTick(function() {
          s(e)
        })
      }
    }() : function() {
      if (e.postMessage && !e.importScripts) {
        var n = !0,
          t = e.onmessage;
        return e.onmessage = function() {
          n = !1
        }, e.postMessage("", "*"), e.onmessage = t, n
      }
    }() ? function() {
      var n = "setImmediate$" + Math.random() + "$",
        u = function(t) {
          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(n) && s(+t.data.slice(n.length))
        };
      e.addEventListener ? e.addEventListener("message", u, !1) : e.attachEvent("onmessage", u), t = function(t) {
        e.postMessage(n + t, "*")
      }
    }() : e.MessageChannel ? function() {
      var e = new MessageChannel;
      e.port1.onmessage = function(e) {
        s(e.data)
      }, t = function(n) {
        e.port2.postMessage(n)
      }
    }() : a && "onreadystatechange" in a.createElement("script") ? function() {
      var e = a.documentElement;
      t = function(n) {
        var t = a.createElement("script");
        t.onreadystatechange = function() {
          s(n), t.onreadystatechange = null, e.removeChild(t), t = null
        }, e.appendChild(t)
      }
    }() : function() {
      t = function(e) {
        setTimeout(s, 0, e)
      }
    }(), i.setImmediate = function(e) {
      "function" != typeof e && (e = Function("" + e));
      for (var n = Array(arguments.length - 1), u = 0; u < n.length; u++) n[u] = arguments[u + 1];
      var r = {
        callback: e,
        args: n
      };
      return o[f] = r, t(f), f++
    }, i.clearImmediate = c
  }

  function c(e) {
    delete o[e]
  }

  function s(e) {
    if (r) setTimeout(s, 0, e);
    else {
      var n = o[e];
      if (n) {
        r = !0;
        try {
          ! function(e) {
            var n = e.callback,
              t = e.args;
            switch (t.length) {
              case 0:
                n();
                break;
              case 1:
                n(t[0]);
                break;
              case 2:
                n(t[0], t[1]);
                break;
              case 3:
                n(t[0], t[1], t[2]);
                break;
              default:
                n.apply(void 0, t)
            }
          }(n)
        } finally {
          c(e), r = !1
        }
      }
    }
  }
}("undefined" == typeof self ? void 0 === t.g ? this : t.g : self)