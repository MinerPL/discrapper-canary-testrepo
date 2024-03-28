var t = t || function(e) {
  "use strict";
  if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
      n = function() {
        return e.URL || e.webkitURL || e
      },
      r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      o = "download" in r,
      s = function(e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      },
      a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      i = e.webkitRequestFileSystem,
      l = e.requestFileSystem || i || e.mozRequestFileSystem,
      d = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
          throw t
        }, 0)
      },
      u = "application/octet-stream",
      E = 0,
      c = function(e) {
        setTimeout(function() {
          "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
        }, 4e4)
      },
      _ = function(e, t, n) {
        for (var r = (t = [].concat(t)).length; r--;) {
          var o = e["on" + t[r]];
          if ("function" == typeof o) try {
            o.call(e, n || e)
          } catch (e) {
            d(e)
          }
        }
      },
      f = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      R = function(t, d, R) {
        !R && (t = f(t));
        var h, p, I = this,
          A = t.type,
          O = !1,
          N = function() {
            _(I, "writestart progress write writeend".split(" "))
          },
          M = function() {
            if (p && a && "undefined" != typeof FileReader) {
              var r = new FileReader;
              r.onloadend = function() {
                var e = r.result;
                p.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), I.readyState = I.DONE, N()
              }, r.readAsDataURL(t), I.readyState = I.INIT;
              return
            }(O || !h) && (h = n().createObjectURL(t)), p ? p.location.href = h : void 0 === e.open(h, "_blank") && a && (e.location.href = h), I.readyState = I.DONE, N(), c(h)
          },
          S = function(e) {
            return function() {
              if (I.readyState !== I.DONE) return e.apply(this, arguments)
            }
          },
          T = {
            create: !0,
            exclusive: !1
          };
        if (I.readyState = I.INIT, !d && (d = "download"), o) {
          h = n().createObjectURL(t), setTimeout(function() {
            r.href = h, r.download = d, s(r), N(), c(h), I.readyState = I.DONE
          });
          return
        }
        if (e.chrome && A && A !== u && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, u), O = !0), i && "download" !== d && (d += ".download"), (A === u || i) && (p = e), !l) {
          M();
          return
        }
        E += t.size, l(e.TEMPORARY, E, S(function(e) {
          e.root.getDirectory("saved", T, S(function(e) {
            var n = function() {
              e.getFile(d, T, S(function(e) {
                e.createWriter(S(function(n) {
                  n.onwriteend = function(t) {
                    p.location.href = e.toURL(), I.readyState = I.DONE, _(I, "writeend", t), c(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && M()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = I["on" + e]
                  }), n.write(t), I.abort = function() {
                    n.abort(), I.readyState = I.DONE
                  }, I.readyState = I.WRITING
                }), M)
              }), M)
            };
            e.getFile(d, {
              create: !1
            }, S(function(e) {
              e.remove(), n()
            }), S(function(e) {
              e.code === e.NOT_FOUND_ERR ? n() : M()
            }))
          }), M)
        }), M)
      },
      h = R.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = f(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (h.abort = function() {
      this.readyState = this.DONE, _(this, "abort")
    }, h.readyState = h.INIT = 0, h.WRITING = 1, h.DONE = 2, h.error = h.onwritestart = h.onprogress = h.onwrite = h.onabort = h.onerror = h.onwriteend = null, function(e, t, n) {
      return new R(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return t
})