n.d(t, {
    Z: function () {
        return a;
    }
}), n(411104);
var r = n(998502);
function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class a {
    get language() {
        return this._language;
    }
    set language(e) {
        this._language !== e && (this._language = e, this._onChange(e));
    }
    set languageHint(e) {
        this._languageHint = e;
    }
    process(e) {
        !this._processing && (this._processing = !0, requestIdleCallback(t => {
            var n, i;
            if (t.timeRemaining() <= this._minimumTimeRemaining) {
                this._processEnd();
                return;
            }
            e.length > 256 && (e = e.slice(0, 256)), (n = e, i = this._languageHint, r.ZP.ensureModule('discord_spellcheck').then(() => {
                let {cld: e} = r.ZP.requireModule('discord_spellcheck');
                return new Promise((t, r) => {
                    e.detect(n, {
                        httpHint: i,
                        encodingHint: 'UTF8'
                    }, (e, n) => {
                        null != e ? r(Error(e.message)) : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500 ? r(Error('Not enough reliable text.')) : t(n.languages[0].code);
                    });
                });
            })).then(e => {
                this.language = e, this._processEnd(t.didTimeout);
            }, () => {
                this._processEnd(t.didTimeout);
            });
        }));
    }
    _processEnd() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._processing = !1, e && this._minimumTimeRemaining++;
    }
    constructor(e, t) {
        i(this, '_language', void 0), i(this, '_onChange', void 0), i(this, '_languageHint', void 0), i(this, '_shouldProcess', !1), i(this, '_processing', !1), i(this, '_minimumTimeRemaining', 5), this._language = e, this._languageHint = e, this._onChange = t, t(e);
    }
}
