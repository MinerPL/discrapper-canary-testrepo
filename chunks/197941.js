n(47120);
var i = n(735250);
n(470079);
var a = n(243814),
  s = n(481060),
  r = n(846027),
  l = n(872810),
  o = n(594190),
  c = n(989941),
  d = n(173507),
  u = n(199902),
  _ = n(131951),
  h = n(449224),
  E = n(358085),
  I = n(452426),
  m = n(736045),
  g = n(186901),
  p = n(981631);
t.Z = {
  [p.Etm.TOGGLE_VIDEO]: {
scope: {
  [g.Gp.ALL]: [
    a.x.RPC,
    a.x.RPC_VIDEO_WRITE
  ]
},
handler() {
  let e = _.Z.isVideoEnabled();
  if (null != (0, m.Z)())
    e ? r.Z.setVideoEnabled(!1) : (0, d.Z)(() => r.Z.setVideoEnabled(!0), p.IlC.APP);
}
  },
  [p.Etm.TOGGLE_SCREENSHARE]: {
scope: {
  [g.Gp.ALL]: [
    a.x.RPC,
    a.x.RPC_SCREENSHARE_WRITE
  ]
},
validation: e => (0, I.Z)(e).optional().keys({
  pid: e.number().optional().min(0)
}),
handler(e) {
  let {
    args: {
      pid: t
    }
  } = e, a = u.Z.getCurrentUserActiveStream(), r = u.Z.getStreamerActiveStreamMetadata(), d = (0, c.Z)(o.ZP, h.Z), _ = (0, m.Z)();
  if (null != _)
    null != t && null != r && r.pid !== t && (0, E.isWindows)() ? (0, l.WH)(_.guild_id, _.id, {
      pid: t
    }) : null != a ? (0, l.L6)(!1) : null != t && (0, E.isWindows)() ? (0, l.WH)(_.guild_id, _.id, {
      pid: t
    }) : null != d ? (0, l.WH)(_.guild_id, _.id, {
      pid: d.pid
    }) : (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        n.e('79477'),
        n.e('90060')
      ]).then(n.bind(n, 60594));
      return t => (0, i.jsx)(e, {
        ...t,
        guildId: _.guild_id,
        analyticsLocation: p.Sbl.ACTIVITY_RPC
      });
    });
}
  }
};