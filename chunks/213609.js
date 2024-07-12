n.d(t, {
  Z: function() {
return I;
  },
  h: function() {
return m;
  }
});
var r = n(470079),
  i = n(348327),
  a = n.n(i),
  o = n(97613),
  s = n.n(o),
  l = n(990547),
  u = n(570140),
  c = n(592125),
  d = n(944486),
  _ = n(914010),
  E = n(626135),
  f = n(367907),
  h = n(565384);
let p = (0, l.trackMaker)({
  analyticEventConfigs: E.AnalyticEventConfigs,
  dispatcher: u.Z,
  TRACK_ACTION_NAME: 'TRACK'
});

function m(e) {
  var t, n;
  let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
{
  name: i,
  type: a,
  properties: o
} = e;
  if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, h.Ez)().some(e => {
  var t;
  return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide;
}))
return;
  (0, h.Ps)(e);
  let s = null !== (t = null == o ? void 0 : o.guild_id) && void 0 !== t ? t : _.Z.getGuildId(),
u = null !== (n = null == o ? void 0 : o.channel_id) && void 0 !== n ? n : d.Z.getChannelId(s),
m = (0, E.expandEventProperties)({
  impression_type: a,
  location: (0, h.k$)(),
  ...(0, f.hH)(s),
  ...(0, f.v_)(c.Z.getChannel(u)),
  ...o
});
  if (r) {
(0, h.dT)(null, null);
return;
  }
  null != i && null != a && ((0, E.debugLogEvent)(i, m), p(i, m)), (0, h.dT)(i, m);
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
  disableTrack: !1,
  trackOnInitialLoad: !1
},
n = arguments.length > 2 ? arguments[2] : void 0,
i = r.useRef(),
o = r.useRef();
  r.useEffect(() => {
let r = !a()(i.current, e);
r && (i.current = e);
let l = !a()(o.current, n);
if (l && (o.current = n), !r && !l)
  return;
let u = {
  ...e,
  sequenceId: s()('impression_')
};
return m(u, t.disableTrack), () => {
  null != u && (0, h.dw)(u);
};
  }, t.trackOnInitialLoad ? [] : void 0);
}