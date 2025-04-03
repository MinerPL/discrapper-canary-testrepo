var n = Object.prototype.hasOwnProperty,
    r = '~';
function i() {}
function a(e, n, r) {
    (this.fn = e), (this.context = n), (this.once = r || !1);
}
function s(e, n, i, s, o) {
    if ('function' != typeof i) throw TypeError('The listener must be a function');
    var l = new a(i, s || e, o),
        u = r ? r + n : n;
    return e._events[u] ? (e._events[u].fn ? (e._events[u] = [e._events[u], l]) : e._events[u].push(l)) : ((e._events[u] = l), e._eventsCount++), e;
}
function o(e, n) {
    0 == --e._eventsCount ? (e._events = new i()) : delete e._events[n];
}
function l() {
    (this._events = new i()), (this._eventsCount = 0);
}
Object.create && ((i.prototype = Object.create(null)), !new i().__proto__ && (r = !1)),
    (l.prototype.eventNames = function () {
        var e,
            i,
            a = [];
        if (0 === this._eventsCount) return a;
        for (i in (e = this._events)) n.call(e, i) && a.push(r ? i.slice(1) : i);
        return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(e)) : a;
    }),
    (l.prototype.listeners = function (e) {
        var n = r ? r + e : e,
            i = this._events[n];
        if (!i) return [];
        if (i.fn) return [i.fn];
        for (var a = 0, s = i.length, o = Array(s); a < s; a++) o[a] = i[a].fn;
        return o;
    }),
    (l.prototype.listenerCount = function (e) {
        var n = r ? r + e : e,
            i = this._events[n];
        return i ? (i.fn ? 1 : i.length) : 0;
    }),
    (l.prototype.emit = function (e, n, i, a, s, o) {
        var l = r ? r + e : e;
        if (!this._events[l]) return !1;
        var u,
            c,
            d = this._events[l],
            f = arguments.length;
        if (d.fn) {
            switch ((d.once && this.removeListener(e, d.fn, void 0, !0), f)) {
                case 1:
                    return d.fn.call(d.context), !0;
                case 2:
                    return d.fn.call(d.context, n), !0;
                case 3:
                    return d.fn.call(d.context, n, i), !0;
                case 4:
                    return d.fn.call(d.context, n, i, a), !0;
                case 5:
                    return d.fn.call(d.context, n, i, a, s), !0;
                case 6:
                    return d.fn.call(d.context, n, i, a, s, o), !0;
            }
            for (c = 1, u = Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
            d.fn.apply(d.context, u);
        } else {
            var _,
                h = d.length;
            for (c = 0; c < h; c++)
                switch ((d[c].once && this.removeListener(e, d[c].fn, void 0, !0), f)) {
                    case 1:
                        d[c].fn.call(d[c].context);
                        break;
                    case 2:
                        d[c].fn.call(d[c].context, n);
                        break;
                    case 3:
                        d[c].fn.call(d[c].context, n, i);
                        break;
                    case 4:
                        d[c].fn.call(d[c].context, n, i, a);
                        break;
                    default:
                        if (!u) for (_ = 1, u = Array(f - 1); _ < f; _++) u[_ - 1] = arguments[_];
                        d[c].fn.apply(d[c].context, u);
                }
        }
        return !0;
    }),
    (l.prototype.on = function (e, n, r) {
        return s(this, e, n, r, !1);
    }),
    (l.prototype.once = function (e, n, r) {
        return s(this, e, n, r, !0);
    }),
    (l.prototype.removeListener = function (e, n, i, a) {
        var s = r ? r + e : e;
        if (!this._events[s]) return this;
        if (!n) return o(this, s), this;
        var l = this._events[s];
        if (l.fn) l.fn === n && (!a || l.once) && (!i || l.context === i) && o(this, s);
        else {
            for (var u = 0, c = [], d = l.length; u < d; u++) (l[u].fn !== n || (a && !l[u].once) || (i && l[u].context !== i)) && c.push(l[u]);
            c.length ? (this._events[s] = 1 === c.length ? c[0] : c) : o(this, s);
        }
        return this;
    }),
    (l.prototype.removeAllListeners = function (e) {
        var n;
        return e ? ((n = r ? r + e : e), this._events[n] && o(this, n)) : ((this._events = new i()), (this._eventsCount = 0)), this;
    }),
    (l.prototype.off = l.prototype.removeListener),
    (l.prototype.addListener = l.prototype.on),
    (l.prefixed = r),
    (l.EventEmitter = l);
e.exports = l;
