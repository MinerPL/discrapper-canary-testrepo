n.d(t, {
  HU: function() {
return I;
  },
  KW: function() {
return h;
  },
  dO: function() {
return _;
  },
  gQ: function() {
return E;
  }
});
var i = n(392711),
  s = n.n(i),
  a = n(570140),
  r = n(317381),
  l = n(594174),
  o = n(823379),
  c = n(5192),
  d = n(863141),
  u = n(186901);

function _() {
  let e = r.ZP.getCurrentEmbeddedActivity();
  if (null == e)
return {
  participants: []
};
  let {
guildId: t,
channelId: n
  } = e;
  return {
participants: Array.from(e.userIds, e => {
  let i = l.default.getUser(e);
  if (null == i)
    return;
  let s = (0, c.y)(t, n, i);
  return {
    ...(0, d.Z)(i),
    nickname: null != s ? s : void 0
  };
}).filter(o.lm)
  };
}
let h = {
[u.Gp.ANY]: [u.wE]
  },
  E = {
scope: h,
handler: () => e => {
  let {
    prevState: t,
    dispatch: n
  } = e, i = _();
  return !s().isEqual(i, t) && n(i), i;
}
  };

function I(e) {
  let t = 'EMBEDDED_ACTIVITY_UPDATE',
n = () => {
  e(_());
};
  return a.Z.subscribe(t, n), () => a.Z.unsubscribe(t, n);
}