n.d(t, {
  D6: function() {
return c;
  },
  bp: function() {
return A;
  },
  wr: function() {
return i;
  }
});
var r, i, u = n(470079),
  l = n(442837),
  o = n(846519),
  E = n(355467),
  a = n(38618),
  _ = n(409813),
  S = n(45572),
  s = n(505649);

function A(e, t, n, r) {
  let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
l = arguments.length > 5 ? arguments[5] : void 0;
  u.useEffect(() => {
if (null != e)
  1 === t && e !== _.h8.AWAITING_AUTHENTICATION ? n(_.h8.AWAITING_AUTHENTICATION) : e === _.h8.AWAITING_AUTHENTICATION && (2 === t ? n(_.h8.REVIEW) : 3 === t && (i ? null != l ? l() : n(_.h8.REVIEW) : (r(S.A.COMPLETED), n(_.h8.CONFIRM))));
  }, [
e,
t,
n,
r,
i,
l
  ]);
}
(r = i || (i = {}))[r.PENDING = 1] = 'PENDING', r[r.ERROR = 2] = 'ERROR', r[r.NONE = 3] = 'NONE';

function c(e) {
  let t = (0, l.e7)([s.Z], () => s.Z.awaitingPaymentId),
n = (0, l.e7)([a.Z], () => a.Z.isConnected()),
r = u.useRef(new o.Xp());
  u.useEffect(() => {
n || null == t || 1 !== e ? r.current.stop() : r.current.start(5000, () => (0, E.O1)(t));
  }, [
t,
e,
n
  ]);
}