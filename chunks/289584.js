t.d(n, {
  Z: function() {
return _;
  }
}), t(47120);
var a = t(470079),
  l = t(749210),
  s = t(287734),
  i = t(881052),
  o = t(142497),
  r = t(570188),
  c = t(471253),
  d = t(427679),
  u = t(190378);

function _(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
[_, m] = a.useState(!1),
[h, E] = a.useState(null),
x = a.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
I = (0, r.J)(e);
  return {
loading: _,
error: h,
onSave: async a => {
  let {
    topic: r,
    privacyLevel: d,
    sendStartNotification: _
  } = a;
  if (null != e && '' !== r && null != d) {
    m(!0), E(null), null != t && (l.Z.selectGuild(t), s.default.selectVoiceChannel(e.id));
    try {
      let t;
      null != x ? t = await c.Ef(e, r, d) : (t = await c.HO(e, r, d, null != _ && _), I && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), n(t);
    } catch (e) {
      E(new i.Hx(e)), m(!1);
    }
  }
}
  };
}