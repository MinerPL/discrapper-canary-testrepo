n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  l = n.n(a),
  s = n(442837),
  r = n(481060),
  o = n(40851),
  c = n(430824),
  d = n(496675),
  u = n(871499),
  h = n(981631),
  p = n(689938);

function m(e) {
  var t, a;
  let {
applicationId: m,
stream: _,
channel: f,
exitFullScreen: E,
appContext: C,
analyticsLocation: g,
guildScheduledEvent: I,
...x
  } = e, T = (0, o.bp)(), v = null == f ? void 0 : f.getGuildId(), N = (0, s.e7)([c.Z], () => null != v ? c.Z.getGuild(v) : null, [v]);
  return (t = N, a = f, null != t && null != a && d.Z.can(h.Plq.CREATE_INSTANT_INVITE, a)) ? (0, i.jsx)(u.Z, {
onClick: () => {
  l()(null != N, 'guild cannot be null'), l()(null != f, 'channel cannot be null'), ! function(e) {
    let {
      guild: t,
      channel: a,
      streamUserId: l,
      applicationId: s,
      appContext: o,
      exitFullScreen: c,
      analyticsLocation: d,
      guildScheduledEvent: u
    } = e;
    null == c || c(), (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        n.e('7654'),
        n.e('21026')
      ]).then(n.bind(n, 560114));
      return n => (0, i.jsx)(e, {
        ...n,
        guild: t,
        channel: a,
        streamUserId: l,
        applicationId: s,
        analyticsLocation: d,
        source: a.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
        guildScheduledEvent: u
      });
    }, {
      modalKey: 'stream-invite-modal',
      contextKey: o === h.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
    });
  }({
    guild: N,
    channel: f,
    streamUserId: null == _ ? void 0 : _.ownerId,
    applicationId: m,
    appContext: null != C ? C : T,
    exitFullScreen: E,
    analyticsLocation: g,
    guildScheduledEvent: I
  });
},
iconComponent: null != m ? r.ActivitiesPlusIcon : r.GroupPlusIcon,
label: null != m ? p.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY : p.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE,
...x
  }) : null;
}