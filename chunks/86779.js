n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
var s, r, i = n(735250),
  a = n(470079),
  l = n(593473),
  o = n(756647),
  c = n(442837),
  u = n(544891),
  d = n(433517),
  h = n(481060),
  _ = n(570140),
  E = n(893776),
  g = n(375964),
  p = n(314897),
  f = n(626135),
  I = n(70956),
  m = n(970648),
  N = n(981631),
  T = n(375325);
let x = 'mweb_handoff_nonce',
  A = 'mweb_handoff_nonce_expiration',
  C = 1 * I.Z.Millis.MINUTE;
(r = s || (s = {})).NONCE_MISSING = 'nonce_missing', r.NONCE_EXPIRED = 'nonce_expired', r.NULL_HANDOFF_TOKEN = 'deep_link_failed', r.HANDOFF_EXCHANGE = 'handoff_exchange';
let S = new Set([
'nonce_missing',
'nonce_expired',
'handoff_exchange'
  ]),
  O = new Set(['deep_link_failed']),
  v = () => {
d.K.remove(x), d.K.remove(A);
  };
t.Z = () => {
  let e = (0, c.e7)([p.default], () => p.default.getFingerprint()),
{
  fingerprint: t,
  handoff_token: n
} = (0, l.parse)(window.location.search),
s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
r = null != s ? s : null !== e ? e : void 0;
  a.useEffect(() => {
null !== s && e !== s && _.Z.dispatch({
  type: 'FINGERPRINT',
  fingerprint: s
});
  }, [
s,
e
  ]);
  let [I, Z] = a.useState(null), R = a.useCallback(e => {
Z(e), f.default.track(N.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
  reason: e,
  fingerprint: (0, o.K)(r)
}, {
  fingerprint: r
});
  }, [
Z,
r
  ]), b = d.K.get(x);
  if ('null' === n && null === I && R('deep_link_failed'), null != n && 'null' !== n && null == b && null === I && R('nonce_missing'), a.useEffect(() => {
  if (null != b) {
    let e = d.K.get(A);
    (null == e || Date.now() >= e) && (R('nonce_expired'), v());
  }
}, [
  b,
  R
]), a.useEffect(() => {
  null != n && 'null' !== n && null != b && null == I && u.tn.post({
    url: N.ANM.HANDOFF_EXCHANGE,
    body: {
      key: b,
      handoff_token: n
    }
  }).then(e => E.Z.loginToken(e.body.token, !1)).then(() => {
    f.default.track(N.rMx.LOGIN_SUCCESSFUL, {
      source: N.uRl.MOBILE_WEB_HANDOFF,
      is_new_user: !1,
      fingerprint: (0, o.K)(r)
    });
    let e = new URL(window.location.href),
      t = new URLSearchParams(e.search);
    t.delete('handoff_token'), t.delete('fingerprint'), e.search = t.toString(), window.history.pushState(null, '', e);
  }).catch(() => {
    R('handoff_exchange');
  }).finally(() => {
    v();
  });
}, [
  n,
  b,
  I,
  r,
  R
]), null == r)
return null;
  let D = (() => {
if (null == I)
  return (0, i.jsxs)(i.Fragment, {
    children: [
      g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1,
      (0, i.jsx)('br', {}),
      g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2
    ]
  });
if (O.has(I))
  return g.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
if (S.has(I))
  return g.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
  })();
  return null != I && O.has(I) ? (0, i.jsx)('div', {
className: T.errorContainer,
children: (0, i.jsx)(h.Text, {
  color: 'interactive-normal',
  variant: 'text-sm/semibold',
  children: D
})
  }) : (0, i.jsxs)('div', {
className: T.container,
children: [
  (0, i.jsx)(h.Text, {
    variant: 'text-sm/semibold',
    children: D
  }),
  (0, i.jsx)(h.Button, {
    color: h.Button.Colors.BRAND_INVERTED,
    onClick: () => {
      let e = m.Z.generateNonce();
      d.K.set(x, e), d.K.set(A, Date.now() + C);
      let t = new URL(N.x0X),
        n = new URLSearchParams(window.location.search);
      n.delete('fingerprint'), n.delete('handoff_token');
      let s = new URLSearchParams();
      s.set('redirect', encodeURIComponent(window.location.pathname + n.toString())), s.set('key', e), s.set('fingerprint', r), t.search = s.toString(), f.default.track(N.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, o.K)(r),
        source: 'mobile_web_handoff',
        destination: N.x0X
      }, {
        fingerprint: r,
        flush: !0
      }), window.location.href = t.toString();
    },
    children: (0, i.jsx)(h.Text, {
      className: T.buttonText,
      variant: 'text-sm/semibold',
      children: g.MOBILE_WEB_HANDOFF_BUTTON_TEXT
    })
  })
]
  });
};