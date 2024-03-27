e = n.nmd(e), n("854508");
var r = r || function(e) {
  "use strict";
  if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
      n = function() {
        return e.URL || e.webkitURL || e
      },
      r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      i = "download" in r,
      s = function(e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      },
      o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      a = e.webkitRequestFileSystem,
      l = e.requestFileSystem || a || e.mozRequestFileSystem,
      u = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
          throw t
        }, 0)
      },
      d = "application/octet-stream",
      c = 0,
      f = function(e) {
        setTimeout(function() {
          "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
        }, 4e4)
      },
      E = function(e, t, n) {
        for (var r = (t = [].concat(t)).length; r--;) {
          var i = e["on" + t[r]];
          if ("function" == typeof i) try {
            i.call(e, n || e)
          } catch (e) {
            u(e)
          }
        }
      },
      h = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      _ = function(t, u, _) {
        !_ && (t = h(t));
        var p, C, v = this,
          S = t.type,
          m = !1,
          R = function() {
            E(v, "writestart progress write writeend".split(" "))
          },
          I = function() {
            if (C && o && "undefined" != typeof FileReader) {
              var r = new FileReader;
              r.onloadend = function() {
                var e = r.result;
                C.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), v.readyState = v.DONE, R()
              }, r.readAsDataURL(t), v.readyState = v.INIT;
              return
            }(m || !p) && (p = n().createObjectURL(t)), C ? C.location.href = p : void 0 === e.open(p, "_blank") && o && (e.location.href = p), v.readyState = v.DONE, R(), f(p)
          },
          A = function(e) {
            return function() {
              if (v.readyState !== v.DONE) return e.apply(this, arguments)
            }
          },
          N = {
            create: !0,
            exclusive: !1
          };
        if (v.readyState = v.INIT, !u && (u = "download"), i) {
          p = n().createObjectURL(t), setTimeout(function() {
            r.href = p, r.download = u, s(r), R(), f(p), v.readyState = v.DONE
          });
          return
        }
        if (e.chrome && S && S !== d && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, d), m = !0), a && "download" !== u && (u += ".download"), (S === d || a) && (C = e), !l) {
          I();
          return
        }
        c += t.size, l(e.TEMPORARY, c, A(function(e) {
          e.root.getDirectory("saved", N, A(function(e) {
            var n = function() {
              e.getFile(u, N, A(function(e) {
                e.createWriter(A(function(n) {
                  n.onwriteend = function(t) {
                    C.location.href = e.toURL(), v.readyState = v.DONE, E(v, "writeend", t), f(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && I()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = v["on" + e]
                  }), n.write(t), v.abort = function() {
                    n.abort(), v.readyState = v.DONE
                  }, v.readyState = v.WRITING
                }), I)
              }), I)
            };
            e.getFile(u, {
              create: !1
            }, A(function(e) {
              e.remove(), n()
            }), A(function(e) {
              e.code === e.NOT_FOUND_ERR ? n() : I()
            }))
          }), I)
        }), I)
      },
      p = _.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (p.abort = function() {
      this.readyState = this.DONE, E(this, "abort")
    }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(e, t, n) {
      return new _(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
void 0 !== e && e.exports ? e.exports.saveAs = r : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return r
})