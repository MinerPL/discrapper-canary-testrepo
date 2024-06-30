e.d(n, {
    k: function () {
        return c;
    }
});
var r = e(873171), i = (0, r.Rf)(), o = 'Sentry Logger ', s = function () {
        function t() {
            this._enabled = !1;
        }
        return t.prototype.disable = function () {
            this._enabled = !1;
        }, t.prototype.enable = function () {
            this._enabled = !0;
        }, t.prototype.log = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            if (!!this._enabled)
                (0, r.Cf)(function () {
                    i.console.log(o + '[Log]: ' + t.join(' '));
                });
        }, t.prototype.warn = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            if (!!this._enabled)
                (0, r.Cf)(function () {
                    i.console.warn(o + '[Warn]: ' + t.join(' '));
                });
        }, t.prototype.error = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            if (!!this._enabled)
                (0, r.Cf)(function () {
                    i.console.error(o + '[Error]: ' + t.join(' '));
                });
        }, t;
    }();
i.__SENTRY__ = i.__SENTRY__ || {};
var c = i.__SENTRY__.logger || (i.__SENTRY__.logger = new s());
