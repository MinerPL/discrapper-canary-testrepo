r.d(e, {
    $3: function () {
        return o;
    },
    $Q: function () {
        return c;
    },
    Dt: function () {
        return d;
    },
    HH: function () {
        return A;
    },
    NP: function () {
        return T;
    },
    R2: function () {
        return R;
    },
    d8: function () {
        return N;
    }
});
var n = r(432038);
function _(t, e, r, n) {
    let _ = {
        filename: t,
        function: e,
        in_app: !0
    };
    return void 0 !== r && (_.lineno = r), void 0 !== n && (_.colno = n), _;
}
let a = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, i = /\((\S*)(?::(\d+))(?::(\d+))\)/, o = [
        30,
        t => {
            let e = a.exec(t);
            if (e) {
                if (e[2] && 0 === e[2].indexOf('eval')) {
                    let t = i.exec(e[2]);
                    t && (e[2] = t[1], e[3] = t[2], e[4] = t[3]);
                }
                let [t, r] = O(e[1] || '?', e[2]);
                return _(r, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
            }
        }
    ], E = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = [
        50,
        t => {
            let e = E.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(' > eval') > -1) {
                    let t = s.exec(e[3]);
                    t && (e[1] = e[1] || 'eval', e[3] = t[1], e[4] = t[2], e[5] = '');
                }
                let t = e[3], r = e[1] || '?';
                return [r, t] = O(r, t), _(t, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
            }
        }
    ], I = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, R = [
        40,
        t => {
            let e = I.exec(t);
            return e ? _(e[2], e[1] || '?', +e[3], e[4] ? +e[4] : void 0) : void 0;
        }
    ], u = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, T = [
        10,
        t => {
            let e = u.exec(t);
            return e ? _(e[2], e[3] || '?', +e[1]) : void 0;
        }
    ], l = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i, A = [
        20,
        t => {
            let e = l.exec(t);
            return e ? _(e[5], e[3] || e[4] || '?', +e[1], +e[2]) : void 0;
        }
    ], N = [
        o,
        c,
        R
    ], d = (0, n.pE)(...N), O = (t, e) => {
        let r = -1 !== t.indexOf('safari-extension'), n = -1 !== t.indexOf('safari-web-extension');
        return r || n ? [
            -1 !== t.indexOf('@') ? t.split('@')[0] : '?',
            r ? `safari-extension:${ e }` : `safari-web-extension:${ e }`
        ] : [
            t,
            e
        ];
    };
