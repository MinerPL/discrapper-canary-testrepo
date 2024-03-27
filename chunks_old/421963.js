"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  i = n("128981"),
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
    } = e, b = a.useRef(null), _ = (0, o.v4)(), [x, g] = a.useState(!1), w = a.useCallback(e => {
      l.default.track(u.AnalyticEvents.CAPTCHA_EVENT, {
        captcha_event_name: e,
        captcha_service: t,
        sitekey: n,
        captcha_flow_key: _
      })
    }, [_, t, n]), A = a.useCallback(e => {
      d.default.increment({
        name: s.MetricEvents.CAPTCHA_EVENT,
        tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
      })
    }, [t]), k = a.useCallback(() => {
      if (null != h && "" !== h && null != b.current) {
        var e;
        null === (e = b.current) || void 0 === e || e.setData({
          rqdata: h
        })
      }
    }, [h, b]), I = a.useCallback(() => {
      !x && (w("initial-load"), A("initial-load"), g(!0)), k()
    }, [A, x, w, k]);
    a.useEffect(() => {
      k()
    }, [k]), a.useEffect(() => {
      I()
    }, [I]);
    let S = a.useCallback(() => {
        w("error"), A("error"), k(), null == m || m()
      }, [w, A, k, m]),
      T = a.useCallback(e => {
        w("verify"), A("verify"), v(e)
      }, [A, v, w]),
      j = a.useCallback(() => {
        w("render"), null == f || f()
      }, [f, w]),
      O = a.useCallback(() => {
        w("open"), A("open"), null == y || y()
      }, [A, y, w]),
      P = a.useCallback(() => {
        w("close"), k(), null == E || E()
      }, [E, w, k]),
      N = a.useCallback(() => {
        w("chal-expire"), null == C || C()
      }, [C, w]);
    return ((null == n || "" === n) && (n = u.RECAPTCHA_SITE_KEY), t === p.CaptchaTypes.RECAPTCHA) ? (0, r.jsx)(c.default, {
      ...R,
      onLoad: I,
      onRender: j,
      onVerify: T,
      onError: S,
      sitekey: n
    }) : t === p.CaptchaTypes.HCAPTCHA ? (0, r.jsx)(i.default, {
      ref: b,
      ...R,
      sitekey: n,
      onLoad: I,
      onError: S,
      onVerify: T,
      onChalExpired: N,
      onOpen: O,
      onClose: P
    }) : (0, r.jsx)(c.default, {
      ...R,
      sitekey: n,
      onLoad: I,
      onRender: j,
      onVerify: T,
      onError: S
    })
  }