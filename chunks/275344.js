n.d(t, {
  Z: function() {
return I;
  },
  v: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(512722),
  r = n.n(s),
  l = n(399606),
  o = n(904245),
  c = n(375954),
  u = n(918088);
let d = a.createContext(void 0);

function _(e) {
  var t;
  let n = null !== (t = a.useContext(d)) && void 0 !== t ? t : e;
  return r()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}

function E(e) {
  let {
message: t,
children: n
  } = e, s = (0, l.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [
t.channel_id,
t.id
  ]), r = null != s;
  return a.useEffect(() => {
!r && o.Z.focusMessage({
  channelId: t.channel_id,
  messageId: t.id
});
  }, [
r,
t.channel_id,
t.id
  ]), (0, i.jsx)(d.Provider, {
value: null != s ? s : t,
children: n
  });
}

function I(e) {
  let {
message: t,
children: n
  } = e;
  return (0, u.r8)(t) ? (0, i.jsx)(i.Fragment, {
children: n
  }) : (0, i.jsx)(E, {
message: t,
children: n
  });
}