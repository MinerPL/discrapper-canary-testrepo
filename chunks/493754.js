n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(512722),
  r = n.n(l),
  o = n(442837),
  c = n(481060),
  u = n(924301),
  d = n(786915),
  h = n(430824),
  p = n(496675),
  m = n(981631),
  _ = n(689938),
  f = n(191109);

function E(e) {
  var t, a;
  let {
stream: l,
applicationId: E,
channel: g,
exitFullScreen: C,
appContext: I,
analyticsLocation: x,
className: T,
...N
  } = e, v = null == g ? void 0 : g.getGuildId(), S = null == g ? void 0 : g.id, Z = (0, o.e7)([h.Z], () => null != v ? h.Z.getGuild(v) : null, [v]), A = (0, o.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(S), [S]);
  if (t = Z, a = g, !(null != t && null != a && p.Z.can(m.Plq.CREATE_INSTANT_INVITE, a)))
return null;
  let M = _.Z.Messages.INSTANT_INVITE;
  return null != l ? M = _.Z.Messages.INVITE_STREAM_HEADER : null != E && (M = _.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(c.Button, {
    size: c.Button.Sizes.SMALL,
    color: f.buttonColor,
    onClick: () => {
      r()(null != Z, 'guild cannot be null'), r()(null != g, 'channel cannot be null'), ! function(e) {
        let {
          guild: t,
          channel: a,
          streamUserId: s,
          applicationId: l,
          appContext: r,
          exitFullScreen: o,
          analyticsLocation: u,
          guildScheduledEvent: d
        } = e;
        null == o || o(), (0, c.openModalLazy)(async () => {
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
            streamUserId: s,
            applicationId: l,
            analyticsLocation: u,
            source: a.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
            guildScheduledEvent: d
          });
        }, {
          modalKey: 'stream-invite-modal',
          contextKey: r === m.IlC.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
        });
      }({
        guild: Z,
        channel: g,
        streamUserId: null == l ? void 0 : l.ownerId,
        applicationId: E,
        appContext: I,
        exitFullScreen: C,
        analyticsLocation: x,
        guildScheduledEvent: A
      });
    },
    className: s()(T, f.textButton),
    ...N,
    children: M
  }),
  (0, i.jsx)(d.Z, {
    channel: g,
    stream: l,
    appContext: I,
    className: s()(T, f.iconButton),
    exitFullScreen: C,
    analyticsLocation: x,
    guildScheduledEvent: A
  })
]
  });
}