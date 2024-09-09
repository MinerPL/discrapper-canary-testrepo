c.r(t),
    c.d(t, {
        CaptchaError: function () {
            return r;
        },
        emitCaptchaDistributionMetric: function () {
            return o;
        },
        extractCaptchaPropsFromResponse: function () {
            return u;
        }
    }),
    c(315314),
    c(610138),
    c(216116),
    c(78328),
    c(815648),
    c(47120),
    c(627494),
    c(757143);
var r,
    n,
    a = c(644947),
    i = c(234888);
((n = r || (r = {})).CANCEL = 'cancel'), (n.ERROR = 'error'), (n.EXPIRED = 'expired');
function u(e, t) {
    var c;
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        urlPath: (function (e) {
            try {
                return new URL(e).pathname.replaceAll(/\/[0-9]+/gi, '/<id>').replaceAll(/\/[0-9]+/gi, '/<id>');
            } catch (e) {
                return 'unknown';
            }
        })(null != t ? t : ''),
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: null !== (c = e.should_serve_invisible) && void 0 !== c && c
        }
    };
}
function o(e, t) {
    if (!!e) (0, a._8)() && setTimeout(() => (0, a.Zq)(), i.i), (0, a.s$)(t);
}
