! function() {
  var t = function(e) {
    "use strict";
    e = e || {};
    var t, n, r, o, i, a, c, s, u, h, d, f, l, p, y, w, m = {
      bgColor: "#d00",
      textColor: "#fff",
      fontFamily: "sans-serif",
      fontStyle: "bold",
      type: "circle",
      position: "down",
      animation: "slide",
      elementId: !1,
      dataUrl: !1,
      win: window
    };
    (l = {}).ff = "undefined" != typeof InstallTrigger, l.chrome = !!window.chrome, l.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, l.ie = !1, l.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, l.supported = l.chrome || l.ff || l.opera;
    var g = [];
    d = function() {}, s = f = !1;
    var v = {};
    v.ready = function() {
      s = !0, v.reset(), d()
    }, v.reset = function() {
      if (!!s) g = [], u = !1, h = !1, a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), A.setIcon(i), window.clearTimeout(p), window.clearTimeout(y)
    }, v.start = function() {
      if (!!s && !h) {
        var e = function() {
          u = g[0], h = !1, g.length > 0 && (g.shift(), v.start())
        };
        if (g.length > 0) {
          h = !0;
          var n = function() {
            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(e) {
              e in g[0].options && (t[e] = g[0].options[e])
            }), O.run(g[0].options, function() {
              e()
            }, !1)
          };
          u ? O.run(u.options, function() {
            n()
          }, !0) : n()
        }
      }
    };
    var x = {},
      b = function(e) {
        return e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n, e.x = o * e.x, e.y = r * e.y, e.w = o * e.w, e.h = r * e.h, e.len = ("" + e.n).length, e
      };
    x.circle = function(e) {
      e = b(e);
      var n = !1;
      2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, n = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, n = !0), a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .85 : 1)) + "px " + t.fontFamily, a.textAlign = "center", n ? (a.moveTo(e.x + e.w / 2, e.y), a.lineTo(e.x + e.w - e.h / 2, e.y), a.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), a.lineTo(e.x + e.w, e.y + e.h - e.h / 2), a.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), a.lineTo(e.x + e.h / 2, e.y + e.h), a.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), a.lineTo(e.x, e.y + e.h / 2), a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : a.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fill(), a.closePath(), a.beginPath(), a.stroke(), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
    }, x.rectangle = function(e) {
      e = b(e);
      var n = !1;
      2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w), a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .9 : 1)) + "px " + t.fontFamily, a.textAlign = "center", a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fillRect(e.x, e.y, e.w, e.h), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
    };

    function E(e) {
      if (e.paused || e.ended || f) return !1;
      try {
        a.clearRect(0, 0, o, r), a.drawImage(e, 0, 0, o, r)
      } catch (e) {}
      y = setTimeout(function() {
        E(e)
      }, O.duration), A.setIcon(i)
    }
    var A = {};

    function C(e) {
      e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
        return t + t + n + n + r + r
      });
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return !!t && {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
      }
    }

    function T(e, t) {
      var n, r = {};
      for (n in e) r[n] = e[n];
      for (n in t) r[n] = t[n];
      return r
    }
    A.getIcon = function() {
      var e = !1;
      return t.element ? e = t.element : t.elementId ? (e = w.getElementById(t.elementId)).setAttribute("href", e.getAttribute("src")) : !1 === (e = function() {
        for (var e = w.getElementsByTagName("head")[0].getElementsByTagName("link"), t = e.length, n = t - 1; n >= 0; n--)
          if (/(^|\s)icon(\s|$)/i.test(e[n].getAttribute("rel"))) return e[n];
        return !1
      }()) && ((e = w.createElement("link")).setAttribute("rel", "icon"), w.getElementsByTagName("head")[0].appendChild(e)), e.setAttribute("type", "image/png"), e
    }, A.setIcon = function(e) {
      var r = e.toDataURL("image/png");
      if (t.dataUrl && t.dataUrl(r), t.element) t.element.setAttribute("href", r), t.element.setAttribute("src", r);
      else if (t.elementId) {
        var o = w.getElementById(t.elementId);
        o.setAttribute("href", r), o.setAttribute("src", r)
      } else if (l.ff || l.opera) {
        var i = n;
        n = w.createElement("link"), l.opera && n.setAttribute("rel", "icon"), n.setAttribute("rel", "icon"), n.setAttribute("type", "image/png"), w.getElementsByTagName("head")[0].appendChild(n), n.setAttribute("href", r), i.parentNode && i.parentNode.removeChild(i)
      } else n.setAttribute("href", r)
    };
    var O = {};
    return O.duration = 40, O.types = {}, O.types.fade = [{
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 0
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .2
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .3
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .4
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .5
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .6
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .7
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .8
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .9
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], O.types.none = [{
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], O.types.pop = [{
      x: 1,
      y: 1,
      w: 0,
      h: 0,
      o: 1
    }, {
      x: .9,
      y: .9,
      w: .1,
      h: .1,
      o: 1
    }, {
      x: .8,
      y: .8,
      w: .2,
      h: .2,
      o: 1
    }, {
      x: .7,
      y: .7,
      w: .3,
      h: .3,
      o: 1
    }, {
      x: .6,
      y: .6,
      w: .4,
      h: .4,
      o: 1
    }, {
      x: .5,
      y: .5,
      w: .5,
      h: .5,
      o: 1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], O.types.popFade = [{
      x: .75,
      y: .75,
      w: 0,
      h: 0,
      o: 0
    }, {
      x: .65,
      y: .65,
      w: .1,
      h: .1,
      o: .2
    }, {
      x: .6,
      y: .6,
      w: .2,
      h: .2,
      o: .4
    }, {
      x: .55,
      y: .55,
      w: .3,
      h: .3,
      o: .6
    }, {
      x: .5,
      y: .5,
      w: .4,
      h: .4,
      o: .8
    }, {
      x: .45,
      y: .45,
      w: .5,
      h: .5,
      o: .9
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], O.types.slide = [{
      x: .4,
      y: 1,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .9,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .9,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .8,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .7,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .6,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .5,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], O.run = function(e, n, r, o) {
      var a = O.types[w.hidden || w.msHidden || w.webkitHidden || w.mozHidden ? "none" : t.animation];
      if (o = !0 === r ? void 0 !== o ? o : a.length - 1 : void 0 !== o ? o : 0, n = n || function() {}, o < a.length && o >= 0) x[t.type](T(e, a[o])), p = setTimeout(function() {
        r ? o -= 1 : o += 1, O.run(e, n, r, o)
      }, O.duration), A.setIcon(i);
      else {
        n();
        return
      }
    }, ! function() {
      (t = T(m, e)).bgColor = C(t.bgColor), t.textColor = C(t.textColor), t.position = t.position.toLowerCase(), t.animation = O.types["" + t.animation] ? t.animation : m.animation, w = t.win.document;
      var s = t.position.indexOf("up") > -1,
        u = t.position.indexOf("left") > -1;
      if (s || u)
        for (var h = 0; h < O.types["" + t.animation].length; h++) {
          var d = O.types["" + t.animation][h];
          s && (d.y < .6 ? d.y = d.y - .4 : d.y = d.y - 2 * d.y + (1 - d.w)), u && (d.x < .6 ? d.x = d.x - .4 : d.x = d.x - 2 * d.x + (1 - d.h)), O.types["" + t.animation][h] = d
        }
      t.type = x["" + t.type] ? t.type : m.type, n = A.getIcon(), i = document.createElement("canvas"), c = document.createElement("img"), n.hasAttribute("href") ? (c.setAttribute("crossOrigin", "anonymous"), c.onload = function() {
        r = c.height > 0 ? c.height : 32, o = c.width > 0 ? c.width : 32, i.height = r, i.width = o, a = i.getContext("2d"), v.ready()
      }, c.setAttribute("src", n.getAttribute("href"))) : (c.onload = function() {
        r = 32, o = 32, c.height = r, c.width = o, i.height = r, i.width = o, a = i.getContext("2d"), v.ready()
      }, c.setAttribute("src", ""))
    }(), {
      badge: function(e, t) {
        t = ("string" == typeof t ? {
          animation: t
        } : t) || {}, d = function() {
          try {
            if ("number" == typeof e ? e > 0 : "" !== e) {
              var n = {
                type: "badge",
                options: {
                  n: e
                }
              };
              if ("animation" in t && O.types["" + t.animation] && (n.options.animation = "" + t.animation), "type" in t && x["" + t.type] && (n.options.type = "" + t.type), ["bgColor", "textColor"].forEach(function(e) {
                  e in t && (n.options[e] = C(t[e]))
                }), ["fontStyle", "fontFamily"].forEach(function(e) {
                  e in t && (n.options[e] = t[e])
                }), g.push(n), g.length > 100) throw Error("Too many badges requests in queue.");
              v.start()
            } else v.reset()
          } catch (e) {
            throw Error("Error setting badge. Message: " + e.message)
          }
        }, s && d()
      },
      video: function(e) {
        d = function() {
          try {
            if ("stop" === e) {
              f = !0, v.reset(), f = !1;
              return
            }
            e.addEventListener("play", function() {
              E(this)
            }, !1)
          } catch (e) {
            throw Error("Error setting video. Message: " + e.message)
          }
        }, s && d()
      },
      image: function(e) {
        d = function() {
          try {
            var t = e.width,
              n = e.height,
              c = document.createElement("img"),
              s = t / o < n / r ? t / o : n / r;
            c.setAttribute("crossOrigin", "anonymous"), c.onload = function() {
              a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), A.setIcon(i)
            }, c.setAttribute("src", e.getAttribute("src")), c.height = n / s, c.width = t / s
          } catch (e) {
            throw Error("Error setting image. Message: " + e.message)
          }
        }, s && d()
      },
      webcam: function(e) {
        if ((!window.URL || !window.URL.createObjectURL) && (window.URL = window.URL || {}, window.URL.createObjectURL = function(e) {
            return e
          }), l.supported) {
          var t = !1;
          navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, d = function() {
            try {
              if ("stop" === e) {
                f = !0, v.reset(), f = !1;
                return
              }(t = document.createElement("video")).width = o, t.height = r, navigator.getUserMedia({
                video: !0,
                audio: !1
              }, function(e) {
                t.src = URL.createObjectURL(e), t.play(), E(t)
              }, function() {})
            } catch (e) {
              throw Error("Error setting webcam. Message: " + e.message)
            }
          }, s && d()
        }
      },
      reset: v.reset,
      browser: {
        supported: l.supported
      }
    }
  };
  "undefined" != typeof define && define.amd ? define([], function() {
    return t
  }) : e.exports ? e.exports = t : this.Favico = t
}()