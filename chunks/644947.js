c.d(t, {
    Zq: function () {
        return p;
    },
    _8: function () {
        return o;
    },
    s$: function () {
        return s;
    }
}),
    c(47120);
var r = c(652874),
    n = c(286379),
    a = c(731965),
    u = c(797614);
let i = (0, r.Z)((e) => ({ captchaServeVolume: {} }));
function o() {
    return 0 === Object.keys(i.getState().captchaServeVolume).length;
}
function s(e) {
    (0, a.j)(() => {
        i.setState((t) => {
            if (null != e)
                return e in t.captchaServeVolume
                    ? {
                          captchaServeVolume: {
                              ...t.captchaServeVolume,
                              [e]: t.captchaServeVolume[e] + 1
                          }
                      }
                    : {
                          captchaServeVolume: {
                              ...t.captchaServeVolume,
                              [e]: 1
                          }
                      };
        });
    });
}
function p() {
    for (let [e, t] of Object.entries(i.getState().captchaServeVolume))
        u.Z.distribution(
            {
                name: n.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ['user_flow:'.concat(e)]
            },
            t,
            !0
        );
    (0, a.j)(() => i.setState({ captchaServeVolume: {} }));
}
