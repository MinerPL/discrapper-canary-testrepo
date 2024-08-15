var t, r, n, a = e.exports = {};

function o() {
  throw Error('setTimeout has not been defined');
}

function i() {
  throw Error('clearTimeout has not been defined');
}

function _(e) {
  if (t === setTimeout)
return setTimeout(e, 0);
  if ((t === o || !t) && setTimeout)
return t = setTimeout, setTimeout(e, 0);
  try {
return t(e, 0);
  } catch (r) {
try {
  return t.call(null, e, 0);
} catch (r) {
  return t.call(this, e, 0);
}
  }
}! function() {
  try {
t = 'function' == typeof setTimeout ? setTimeout : o;
  } catch (e) {
t = o;
  }
  try {
r = 'function' == typeof clearTimeout ? clearTimeout : i;
  } catch (e) {
r = i;
  }
}();
var E = [],
  s = !1,
  c = -1;

function I() {
  if (!!s && !!n)
s = !1, n.length ? E = n.concat(E) : c = -1, E.length && u();
}

function u() {
  if (!s) {
var e = _(I);
s = !0;
for (var t = E.length; t;) {
  for (n = E, E = []; ++c < t;)
    n && n[c].run();
  c = -1, t = E.length;
}
n = null, s = !1, ! function(e) {
  if (r === clearTimeout)
    return clearTimeout(e);
  if ((r === i || !r) && clearTimeout)
    return r = clearTimeout, clearTimeout(e);
  try {
    r(e);
  } catch (t) {
    try {
      return r.call(null, e);
    } catch (t) {
      return r.call(this, e);
    }
  }
}(e);
  }
}

function l(e, t) {
  this.fun = e, this.array = t;
}

function R() {}
a.nextTick = function(e) {
  var t = Array(arguments.length - 1);
  if (arguments.length > 1)
for (var r = 1; r < arguments.length; r++)
  t[r - 1] = arguments[r];
  E.push(new l(e, t)), 1 === E.length && !s && _(u);
}, l.prototype.run = function() {
  this.fun.apply(null, this.array);
}, a.title = 'browser', a.browser = !0, a.env = {}, a.argv = [], a.version = '', a.versions = {}, a.on = R, a.addListener = R, a.once = R, a.off = R, a.removeListener = R, a.removeAllListeners = R, a.emit = R, a.prependListener = R, a.prependOnceListener = R, a.listeners = function(e) {
  return [];
}, a.binding = function(e) {
  throw Error('process.binding is not supported');
}, a.cwd = function() {
  return '/';
}, a.chdir = function(e) {
  throw Error('process.chdir is not supported');
}, a.umask = function() {
  return 0;
};