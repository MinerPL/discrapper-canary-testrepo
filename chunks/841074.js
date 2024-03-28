"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("383191"),
  c = n("14199"),
  o = n("153832"),
  s = n("286379"),
  p = n("343817"),
  d = n("797614"),
  l = n("626135"),
  h = n("981631");
t.default = e => {
  let {
    captchaService: t = p.CaptchaTypes.RECAPTCHA,
    sitekey: n,
    rqdata: u,
    onRender: f,
    onVerify: v,
    onError: m,
    onOpen: y,
    onClose: E,
    onChalExpired: C,
    ...R
  } = e, b = r.useRef(null), _ = (0, o.v4)(), [x, g] = r.useState(!1), A = r.useCallback(e => {
    l.default.track(h.AnalyticEvents.CAPTCHA_EVENT, {
      captcha_event_name: e,
      captcha_service: t,
      sitekey: n,
      captcha_flow_key: _
    })
  }, [_, t, n]), w = r.useCallback(e => {
    d.default.increment({
      name: s.MetricEvents.CAPTCHA_EVENT,
      tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
    })
  }, [t]), k = r.useCallback(() => {
    if (null != u && "" !== u && null != b.current) {
      var e;
      null === (e = b.current) || void 0 === e || e.setData({
        rqdata: u
      })
    }
  }, [u, b]), I = r.useCallback(() => {
    !x && (A("initial-load"), w("initial-load"), g(!0)), k()
  }, [w, x, A, k]);
  r.useEffect(() => {
    k()
  }, [k]), r.useEffect(() => {
    I()
  }, [I]);
  let S = r.useCallback(() => {
      A("error"), w("error"), k(), null == m || m()
    }, [A, w, k, m]),
    T = r.useCallback(e => {
      A("verify"), w("verify"), v(e)
    }, [w, v, A]),
    j = r.useCallback(() => {
      A("render"), null == f || f()
    }, [f, A]),
    O = r.useCallback(() => {
      A("open"), w("open"), null == y || y()
    }, [w, y, A]),
    P = r.useCallback(() => {
      A("close"), k(), null == E || E()
    }, [E, A, k]),
    N = r.useCallback(() => {
      A("chal-expire"), null == C || C()
    }, [C, A]);
  return ((null == n || "" === n) && (n = h.RECAPTCHA_SITE_KEY), t === p.CaptchaTypes.RECAPTCHA) ? (0, a.jsx)(c.default, {
    ...R,
    onLoad: I,
    onRender: j,
    onVerify: T,
    onError: S,
    sitekey: n
  }) : t === p.CaptchaTypes.HCAPTCHA ? (0, a.jsx)(i.default, {
    ref: b,
    ...R,
    sitekey: n,
    onLoad: I,
    onError: S,
    onVerify: T,
    onChalExpired: N,
    onOpen: O,
    onClose: P
  }) : (0, a.jsx)(c.default, {
    ...R,
    sitekey: n,
    onLoad: I,
    onRender: j,
    onVerify: T,
    onError: S
  })
}