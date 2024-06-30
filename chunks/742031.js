e.d(n, {
    Gd: function () {
        return p;
    }
});
var r = e(109393), i = e(873171), o = e(76482), s = e(680835);
t = e.hmd(t);
var c = function () {
    function t(t, n, e) {
        void 0 === n && (n = new s.s()), void 0 === e && (e = 3), this._version = e, this._stack = [], this._stack.push({
            client: t,
            scope: n
        });
    }
    return t.prototype._invokeClient = function (t) {
        for (var n, e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        var o = this.getStackTop();
        o && o.client && o.client[t] && (n = o.client)[t].apply(n, r.fl(e, [o.scope]));
    }, t.prototype.isOlderThan = function (t) {
        return this._version < t;
    }, t.prototype.bindClient = function (t) {
        this.getStackTop().client = t;
    }, t.prototype.pushScope = function () {
        var t = this.getStack(), n = t.length > 0 ? t[t.length - 1].scope : void 0, e = s.s.clone(n);
        return this.getStack().push({
            client: this.getClient(),
            scope: e
        }), e;
    }, t.prototype.popScope = function () {
        return void 0 !== this.getStack().pop();
    }, t.prototype.withScope = function (t) {
        var n = this.pushScope();
        try {
            t(n);
        } finally {
            this.popScope();
        }
    }, t.prototype.getClient = function () {
        return this.getStackTop().client;
    }, t.prototype.getScope = function () {
        return this.getStackTop().scope;
    }, t.prototype.getStack = function () {
        return this._stack;
    }, t.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    }, t.prototype.captureException = function (t, n) {
        var e = this._lastEventId = (0, i.DM)(), o = n;
        if (!n) {
            var s = void 0;
            try {
                throw Error('Sentry syntheticException');
            } catch (t) {
                s = t;
            }
            o = {
                originalException: t,
                syntheticException: s
            };
        }
        return this._invokeClient('captureException', t, r.pi({}, o, { event_id: e })), e;
    }, t.prototype.captureMessage = function (t, n, e) {
        var o = this._lastEventId = (0, i.DM)(), s = e;
        if (!e) {
            var c = void 0;
            try {
                throw Error(t);
            } catch (t) {
                c = t;
            }
            s = {
                originalException: t,
                syntheticException: c
            };
        }
        return this._invokeClient('captureMessage', t, n, r.pi({}, s, { event_id: o })), o;
    }, t.prototype.captureEvent = function (t, n) {
        var e = this._lastEventId = (0, i.DM)();
        return this._invokeClient('captureEvent', t, r.pi({}, n, { event_id: e })), e;
    }, t.prototype.lastEventId = function () {
        return this._lastEventId;
    }, t.prototype.addBreadcrumb = function (t, n) {
        var e = this.getStackTop();
        if (!e.scope || !e.client)
            return;
        var o = e.client.getOptions && e.client.getOptions() || {}, s = o.beforeBreadcrumb, c = void 0 === s ? null : s, u = o.maxBreadcrumbs, a = void 0 === u ? 100 : u;
        if (a <= 0)
            return;
        var p = (0, i._I)(), _ = r.pi({ timestamp: p }, t), f = c ? (0, i.Cf)(function () {
                return c(_, n);
            }) : _;
        if (null !== f)
            e.scope.addBreadcrumb(f, Math.min(a, 100));
    }, t.prototype.setUser = function (t) {
        var n = this.getStackTop();
        if (!!n.scope)
            n.scope.setUser(t);
    }, t.prototype.setTags = function (t) {
        var n = this.getStackTop();
        if (!!n.scope)
            n.scope.setTags(t);
    }, t.prototype.setExtras = function (t) {
        var n = this.getStackTop();
        if (!!n.scope)
            n.scope.setExtras(t);
    }, t.prototype.setTag = function (t, n) {
        var e = this.getStackTop();
        if (!!e.scope)
            e.scope.setTag(t, n);
    }, t.prototype.setExtra = function (t, n) {
        var e = this.getStackTop();
        if (!!e.scope)
            e.scope.setExtra(t, n);
    }, t.prototype.setContext = function (t, n) {
        var e = this.getStackTop();
        if (!!e.scope)
            e.scope.setContext(t, n);
    }, t.prototype.configureScope = function (t) {
        var n = this.getStackTop();
        n.scope && n.client && t(n.scope);
    }, t.prototype.run = function (t) {
        var n = a(this);
        try {
            t(this);
        } finally {
            a(n);
        }
    }, t.prototype.getIntegration = function (t) {
        var n = this.getClient();
        if (!n)
            return null;
        try {
            return n.getIntegration(t);
        } catch (n) {
            return o.k.warn('Cannot retrieve integration ' + t.id + ' from the current Hub'), null;
        }
    }, t.prototype.startSpan = function (t, n) {
        return void 0 === n && (n = !1), this._callExtensionMethod('startSpan', t, n);
    }, t.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    }, t.prototype._callExtensionMethod = function (t) {
        for (var n = [], e = 1; e < arguments.length; e++)
            n[e - 1] = arguments[e];
        var r = u().__SENTRY__;
        if (r && r.extensions && 'function' == typeof r.extensions[t])
            return r.extensions[t].apply(this, n);
        o.k.warn('Extension method ' + t + ' couldn\'t be found, doing nothing.');
    }, t;
}();
function u() {
    var t = (0, i.Rf)();
    return t.__SENTRY__ = t.__SENTRY__ || {
        extensions: {},
        hub: void 0
    }, t;
}
function a(t) {
    var n = u(), e = f(n);
    return h(n, t), e;
}
function p() {
    var n = u();
    return ((!_(n) || f(n).isOlderThan(3)) && h(n, new c()), (0, i.KV)()) ? function (n) {
        try {
            var e = (0, i.l$)(t, 'domain').active;
            if (!e)
                return f(n);
            if (!_(e) || f(e).isOlderThan(3)) {
                var r = f(n).getStackTop();
                h(e, new c(r.client, s.s.clone(r.scope)));
            }
            return f(e);
        } catch (t) {
            return f(n);
        }
    }(n) : f(n);
}
function _(t) {
    return !!t && !!t.__SENTRY__ && !!t.__SENTRY__.hub || !1;
}
function f(t) {
    return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new c(), t.__SENTRY__.hub);
}
function h(t, n) {
    return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = n, !0);
}
