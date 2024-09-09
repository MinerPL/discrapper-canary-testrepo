c.d(t, {
    Zq: function () {
        return l;
    },
    _8: function () {
        return o;
    },
    s$: function () {
        return p;
    }
}),
    c(47120);
var r = c(652874),
    n = c(286379),
    a = c(731965),
    i = c(797614);
let u = (0, r.Z)((e) => ({ captchaServeVolume: {} }));
function o() {
    return 0 === Object.keys(u.getState().captchaServeVolume).length;
}
function p(e) {
    (0, a.j)(() => {
        u.setState((t) =>
            e in t.captchaServeVolume
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
                  }
        );
    });
}
function l() {
    for (let [e, t] of Object.entries(u.getState().captchaServeVolume))
        i.Z.distribution(
            {
                name: n.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ['user_flow:'.concat(e)]
            },
            t,
            !0
        );
    (0, a.j)(() => u.setState({ captchaServeVolume: {} }));
}
