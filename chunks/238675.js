n.d(t, {
    fw: function () {
        return o;
    },
    qy: function () {
        return c;
    },
    sJ: function () {
        return r;
    }
});
var a,
    l,
    o,
    r,
    s = n(544891),
    i = n(981631);
async function c(e, t) {
    await s.tn.post({
        url: i.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        }
    });
}
((a = o || (o = {})).HCAPTCHA_EASY = 'hCaptchaEasy'), (a.HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (a.SMITE_RQDATA = 'SmiteRqdata'), ((l = r || (r = {}))[(l.EASY = 1)] = 'EASY'), (l[(l.MODERATE = 2)] = 'MODERATE'), (l[(l.DIFFICULT = 3)] = 'DIFFICULT'), (l[(l.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT');
