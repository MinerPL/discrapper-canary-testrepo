n.d(t, {
    Z: function () {
        return c;
    }
});
var a = n(470079),
    r = n(626135),
    i = n(353250),
    o = n(981631);
function c(e) {
    let t = a.useRef(!0);
    return (
        a.useEffect(
            () => () => {
                t.current && (null == e || e(i.CaptchaError.CANCEL));
            },
            []
        ),
        a.useEffect(
            () => (
                r.default.track(o.rMx.OPEN_MODAL, { type: 'Guild Join Captcha' }),
                () => {
                    t.current && r.default.track(o.rMx.MODAL_DISMISSED, { type: 'Guild Join Captcha' });
                }
            ),
            [t]
        ),
        () => {
            t.current = !1;
        }
    );
}
