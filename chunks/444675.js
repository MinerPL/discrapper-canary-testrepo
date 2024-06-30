var e, r, n, _ = t.exports = {};
function a() {
    throw Error('setTimeout has not been defined');
}
function i() {
    throw Error('clearTimeout has not been defined');
}
function o(t) {
    if (e === setTimeout)
        return setTimeout(t, 0);
    if ((e === a || !e) && setTimeout)
        return e = setTimeout, setTimeout(t, 0);
    try {
        return e(t, 0);
    } catch (r) {
        try {
            return e.call(null, t, 0);
        } catch (r) {
            return e.call(this, t, 0);
        }
    }
}
!function () {
    try {
        e = 'function' == typeof setTimeout ? setTimeout : a;
    } catch (t) {
        e = a;
    }
    try {
        r = 'function' == typeof clearTimeout ? clearTimeout : i;
    } catch (t) {
        r = i;
    }
}();
var E = [], s = !1, c = -1;
function I() {
    if (!!s && !!n)
        s = !1, n.length ? E = n.concat(E) : c = -1, E.length && R();
}
function R() {
    if (!s) {
        var t = o(I);
        s = !0;
        for (var e = E.length; e;) {
            for (n = E, E = []; ++c < e;)
                n && n[c].run();
            c = -1, e = E.length;
        }
        n = null, s = !1, !function (t) {
            if (r === clearTimeout)
                return clearTimeout(t);
            if ((r === i || !r) && clearTimeout)
                return r = clearTimeout, clearTimeout(t);
            try {
                r(t);
            } catch (e) {
                try {
                    return r.call(null, t);
                } catch (e) {
                    return r.call(this, t);
                }
            }
        }(t);
    }
}
function u(t, e) {
    this.fun = t, this.array = e;
}
function T() {
}
_.nextTick = function (t) {
    var e = Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
    E.push(new u(t, e)), 1 === E.length && !s && o(R);
}, u.prototype.run = function () {
    this.fun.apply(null, this.array);
}, _.title = 'browser', _.browser = !0, _.env = {}, _.argv = [], _.version = '', _.versions = {}, _.on = T, _.addListener = T, _.once = T, _.off = T, _.removeListener = T, _.removeAllListeners = T, _.emit = T, _.prependListener = T, _.prependOnceListener = T, _.listeners = function (t) {
    return [];
}, _.binding = function (t) {
    throw Error('process.binding is not supported');
}, _.cwd = function () {
    return '/';
}, _.chdir = function (t) {
    throw Error('process.chdir is not supported');
}, _.umask = function () {
    return 0;
};
