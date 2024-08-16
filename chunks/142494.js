let r, i;
n.d(t, {
    FC: function () {
        return f;
    },
    _H: function () {
        return _;
    },
    yR: function () {
        return E;
    }
}),
    n(47120),
    n(757143);
var a = n(400053),
    s = n.n(a),
    o = n(302454),
    l = n.n(o),
    u = n(20970),
    c = n(959525);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class _ {
    format(e) {
        if (!this.hasMarkdown) return this.intlMessage.format(e);
        let [t, n] = this.getContext(e);
        return r(this.intlMessage.format(t), t, n);
    }
    astFormat(e) {
        let [t, n] = this.getContext(e);
        return i(this.intlMessage.format(t), t, n);
    }
    plainFormat(e) {
        return this.intlMessage.format(e);
    }
    getContext(e) {
        let t = c.yF.test(this.message),
            n = {};
        if (t) {
            let t = 0;
            for (let [r, i] of Object.entries(e)) this.message.includes('!!{'.concat(r, '}!!')) && ((n[++t] = i), (e[r] = t));
        }
        return [e, n];
    }
    constructor(e, t, n) {
        d(this, 'message', void 0), d(this, 'hasMarkdown', void 0), d(this, 'intlMessage', void 0), (this.message = n ? e : e.replace(c.hN, '')), (this.hasMarkdown = n), (this.intlMessage = new (s())(this.message, t));
    }
}
function E(e) {
    (r = (function (e, t) {
        let n = l().parserFor(t(e)),
            r = l().reactFor(l().ruleOutput(e, 'react'));
        return (e, t, i) => {
            let a = !e.includes('\n\n');
            return (
                !a && (e += '\n\n'),
                r(
                    n(e, {
                        inline: a,
                        context: t,
                        unsafeContext: i
                    })
                )
            );
        };
    })(u.j, e)),
        (i = (function (e) {
            let t = l().parserFor(e);
            return (e, n, r) =>
                t(e + '\n\n', {
                    inline: !1,
                    context: n,
                    unsafeContext: r
                });
        })(u.j));
}
function f(e, t) {
    if (null == e) return '';
    null == r && E(n(281071).Z), (e = e.replace(/^\n+|\n+$/g, ''));
    let i = c.aT.test(e),
        a = c.b9.test(e);
    return i || a ? new _(e, t, a) : e;
}
