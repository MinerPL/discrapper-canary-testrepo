c.r(t),
    c.d(t, {
        CaptchaError: function () {
            return n;
        },
        emitCaptchaDistributionMetric: function () {
            return o;
        },
        extractCaptchaPropsFromResponse: function () {
            return i;
        }
    });
var r,
    n,
    a = c(644947),
    u = c(234888);
function i(e) {
    var t;
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: null !== (t = e.should_serve_invisible) && void 0 !== t && t,
            userflow: e.user_flow
        }
    };
}
function o(e, t) {
    if (!!e) (0, a._8)() && setTimeout(() => (0, a.Zq)(), u.i), (0, a.s$)(t);
}
((r = n || (n = {})).CANCEL = 'cancel'), (r.ERROR = 'error'), (r.EXPIRED = 'expired');
