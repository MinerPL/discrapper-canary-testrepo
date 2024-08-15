n.d(t, {
  J: function() {
return d;
  }
}), n(47120);
var r = n(298444),
  i = n(570140),
  a = n(447543),
  s = n(147913),
  o = n(314897),
  l = n(358085),
  u = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let d = 'guestInviteToAccept';
class _ extends s.Z {
  constructor(...e) {
super(...e), c(this, 'actions', {
  POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
}), c(this, 'handleConnectionOpen', async () => {
  if ((0, l.isWeb)()) {
    let e = r.x.get(d);
    if (null != e && 'string' == typeof e && o.default.isAuthenticated()) {
      let {
        invite: t
      } = await a.Z.resolveInvite(e, 'Desktop Modal');
      null != t && (i.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: t,
        code: e,
        context: u.IlC.APP
      }), r.x.remove(d));
    }
  }
});
  }
}
t.Z = new _();