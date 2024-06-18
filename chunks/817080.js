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
      E = "application/octet-stream",
      c = 0,
      u = function(e) {
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
      h = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      R = function(t, d, R) {
        !R && (t = h(t));
        var p, I, M = this,
          N = t.type,
          f = !1,
          A = function() {
            _(M, "writestart progress write writeend".split(" "))
          },
          O = function() {
            if (I && a && "undefined" != typeof FileReader) {
              var r = new FileReader;
              r.onloadend = function() {
                var e = r.result;
                I.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), M.readyState = M.DONE, A()
              }, r.readAsDataURL(t), M.readyState = M.INIT;
              return
            }(f || !p) && (p = n().createObjectURL(t)), I ? I.location.href = p : void 0 === e.open(p, "_blank") && a && (e.location.href = p), M.readyState = M.DONE, A(), u(p)
          },
          S = function(e) {
            return function() {
              if (M.readyState !== M.DONE) return e.apply(this, arguments)
            }
          },
          C = {
            create: !0,
            exclusive: !1
          };
        if (M.readyState = M.INIT, !d && (d = "download"), o) {
          p = n().createObjectURL(t), setTimeout(function() {
            r.href = p, r.download = d, s(r), A(), u(p), M.readyState = M.DONE
          });
          return
        }
        if (e.chrome && N && N !== E && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, E), f = !0), i && "download" !== d && (d += ".download"), (N === E || i) && (I = e), !l) {
          O();
          return
        }
        c += t.size, l(e.TEMPORARY, c, S(function(e) {
          e.root.getDirectory("saved", C, S(function(e) {
            var n = function() {
              e.getFile(d, C, S(function(e) {
                e.createWriter(S(function(n) {
                  n.onwriteend = function(t) {
                    I.location.href = e.toURL(), M.readyState = M.DONE, _(M, "writeend", t), u(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && O()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = M["on" + e]
                  }), n.write(t), M.abort = function() {
                    n.abort(), M.readyState = M.DONE
                  }, M.readyState = M.WRITING
                }), O)
              }), O)
            };
            e.getFile(d, {
              create: !1
            }, S(function(e) {
              e.remove(), n()
            }), S(function(e) {
              e.code === e.NOT_FOUND_ERR ? n() : O()
            }))
          }), O)
        }), O)
      },
      p = R.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (p.abort = function() {
      this.readyState = this.DONE, _(this, "abort")
    }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(e, t, n) {
      return new R(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return t
})