n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(704215),
  r = n(481060),
  l = n(785697),
  o = n(626135),
  c = n(700785),
  d = n(645041),
  u = n(981631),
  _ = n(921944),
  h = n(647086),
  E = n(135899);

function I(e) {
  var t;
  let I = (0, l.SE)(e),
m = E.$X.some(t => (null == e ? void 0 : e.id) !== h._ && c.oz(t, e)),
g = (null == e ? void 0 : e.defaultMessageNotifications) === u.bL.ALL_MESSAGES,
p = (0, d.FT)(a.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds),
T = I && (m || g) && !p,
S = s.useCallback(() => {
  var t;
  (0, d.Qd)(a.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds, !0, _.L.DISMISS);
}, [e]),
C = s.useRef(!1);
  s.useEffect(() => {
if (T && !C.current) {
  var t;
  (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e('54597').then(n.bind(n, 29022));
    return n => (0, i.jsx)(t, {
      guild: e,
      canEveryoneModerate: m,
      isDefaultNotificationsAllMessages: g,
      ...n
    });
  }, {
    onCloseCallback: S
  }), o.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
    type: a.C[a.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
    guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds
  }), C.current = !0;
}
  }, [
m,
e,
S,
g,
T
  ]);
}