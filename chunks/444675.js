var r, e, n, o = t.exports = {};

function i() {
  throw Error("setTimeout has not been defined")
}

function a() {
  throw Error("clearTimeout has not been defined")
}

function u(t) {
  if (r === setTimeout) return setTimeout(t, 0);
  if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
  try {
    return r(t, 0)
  } catch (e) {
    try {
      return r.call(null, t, 0)
    } catch (e) {
      return r.call(this, t, 0)
    }
  }
}! function() {
  try {
    r = "function" == typeof setTimeout ? setTimeout : i
  } catch (t) {
    r = i
  }
  try {
    e = "function" == typeof clearTimeout ? clearTimeout : a
  } catch (t) {
    e = a
  }
}();
var f = [],
  c = !1,
  s = -1;

function p() {
  if (!!c && !!n) c = !1, n.length ? f = n.concat(f) : s = -1, f.length && l()
}

function l() {
  if (!c) {
    var t = u(p);
    c = !0;
    for (var r = f.length; r;) {
      for (n = f, f = []; ++s < r;) n && n[s].run();
      s = -1, r = f.length
    }
    n = null, c = !1, ! function(t) {
      if (e === clearTimeout) return clearTimeout(t);
      if ((e === a || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
      try {
        e(t)
      } catch (r) {
        try {
          return e.call(null, t)
        } catch (r) {
          return e.call(this, t)
        }
      }
    }(t)
  }
}

function h(t, r) {
  this.fun = t, this.array = r
}

function v() {}
o.nextTick = function(t) {
  var r = Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
  f.push(new h(t, r)), 1 === f.length && !c && u(l)
}, h.prototype.run = function() {
  this.fun.apply(null, this.array)
}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) {
  return []
}, o.binding = function(t) {
  throw Error("process.binding is not supported")
}, o.cwd = function() {
  return "/"
}, o.chdir = function(t) {
  throw Error("process.chdir is not supported")
}, o.umask = function() {
  return 0
}