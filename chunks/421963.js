"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("912215"),
  c = n("67164"),
  o = n("748820"),
  s = n("432710"),
  p = n("486196"),
  d = n("155084"),
  l = n("599110"),
  u = n("49111"),
  h = e => {
    let {
      captchaService: t = p.CaptchaTypes.RECAPTCHA,
      sitekey: n,
      rqdata: h,
      onRender: f,
      onVerify: v,
      onError: m,
      onOpen: y,
      onClose: E,
      onChalExpired: C,
      ...R
    } = e, b = r.useRef(null), _ = (0, o.v4)(), [x, g] = r.useState(!1), w = r.useCallback(e => {
      l.default.track(u.AnalyticEvents.CAPTCHA_EVENT, {
        captcha_event_name: e,
        captcha_service: t,
        sitekey: n,
        captcha_flow_key: _
      })
    }, [_, t, n]), A = r.useCallback(e => {
      d.default.increment({
        name: s.MetricEvents.CAPTCHA_EVENT,
        tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
      })
    }, [t]), k = r.useCallback(() => {
      !x && (w("initial-load"), A("initial-load"), g(!0))
    }, [A, x, w]), I = r.useCallback(() => {
      if (x && null != h && "" !== h) {
        var e;
        null === (e = b.current) || void 0 === e || e.setData({
          rqdata: h
        })
      }
    }, [x, h, b]);
    r.useEffect(() => {
      I()
    }, [I]), r.useEffect(() => {
      k()
    }, [k]);
    let S = r.useCallback(() => {
        w("error"), A("error"), I(), null == m || m()
      }, [w, A, I, m]),
      T = r.useCallback(e => {
        w("verify"), A("verify"), v(e)
      }, [A, v, w]),
      j = r.useCallback(() => {
        w("render"), null == f || f()
      }, [f, w]),
      O = r.useCallback(() => {
        w("open"), A("open"), null == y || y()
      }, [A, y, w]),
      P = r.useCallback(() => {
        w("close"), I(), null == E || E()
      }, [E, w, I]),
      N = r.useCallback(() => {
        w("chal-expire"), null == C || C()
      }, [C, w]);
    return ((null == n || "" === n) && (n = u.RECAPTCHA_SITE_KEY), t === p.CaptchaTypes.RECAPTCHA) ? (0, a.jsx)(c.default, {
      ...R,
      onLoad: k,
      onRender: j,
      onVerify: T,
      onError: S,
      sitekey: n
    }) : t === p.CaptchaTypes.HCAPTCHA ? (0, a.jsx)(i.default, {
      ref: b,
      ...R,
      sitekey: n,
      onLoad: k,
      onError: S,
      onVerify: T,
      onChalExpired: N,
      onOpen: O,
      onClose: P
    }) : (0, a.jsx)(c.default, {
      ...R,
      sitekey: n,
      onLoad: k,
      onRender: j,
      onVerify: T,
      onError: S
    })
  }