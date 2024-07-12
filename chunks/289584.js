t.d(n, {
  Z: function() {
return _;
  }
}), t(47120);
var a = t(470079),
  l = t(749210),
  s = t(287734),
  i = t(881052),
  r = t(142497),
  o = t(570188),
  c = t(471253),
  d = t(427679),
  u = t(190378);

function _(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
[_, E] = a.useState(!1),
[h, T] = a.useState(null),
m = a.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
I = (0, o.J)(e);
  return {
loading: _,
error: h,
onSave: async a => {
  let {
    topic: o,
    privacyLevel: d,
    sendStartNotification: _
  } = a;
  if (null != e && '' !== o && null != d) {
    E(!0), T(null), null != t && (l.Z.selectGuild(t), s.default.selectVoiceChannel(e.id));
    try {
      let t;
      null != m ? t = await c.Ef(e, o, d) : (t = await c.HO(e, o, d, null != _ && _), I && r.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), n(t);
    } catch (e) {
      T(new i.Hx(e)), E(!1);
    }
  }
}
  };
}