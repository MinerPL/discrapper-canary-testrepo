t(47120);
var i = t(735250);
t(470079);
var l = t(392711),
  o = t.n(l),
  E = t(481060),
  r = t(718528),
  u = t(905423),
  a = t(984933),
  s = t(914010),
  d = t(771845),
  _ = t(55589),
  c = t(585483),
  C = t(475468),
  I = t(981631),
  A = t(490897);

function S(e, n) {
  var t, i;
  return [{
  resourceId: e,
  type: A.W.GUILD_EVENT
},
...(t = e, i = n, t === I.ME ? _.Z.getPrivateChannelIds() : (0, r.Z)(t, {
  withVoiceChannels: i,
  withCurrentVoiceChannel: !0
}).map(e => e.id))
  ];
}
n.Z = o().throttle(function(e, n) {
  var l, o;
  let r, {
  channelPredicate: _ = () => !0,
  guildPredicate: A = () => !0,
  guildFeaturePredicate: T = () => !1,
  ensureChatIsVisible: L = () => !1,
  withVoiceChannels: N = !1
} = n,
O = null !== (l = u.Z.getState().guildId) && void 0 !== l ? l : I.ME,
D = u.Z.getState().channelId,
g = function(e, n) {
  let t = [
      I.ME,
      ...d.ZP.getFlattenedGuildIds()
    ],
    i = t.indexOf(e);
  return n > 0 ? t.slice(i).concat(t.slice(0, i), e) : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)));
}(O, e),
h = e > 0 ? 0 : g.length - 1,
R = S(O, N),
f = R.indexOf(D) + e;
  for (; null != O && '' !== O;) {
if (r = R[f], A(O))
  for (; null != r && '' !== r;) {
    if ('string' == typeof r) {
      if (_(O, r))
        return (0, C.K)(O, r, !1, L(O, r));
    } else if ('object' == typeof r && T(r.resourceId, r.type))
      return O !== s.Z.getGuildId() && (0, C.K)(O, null === (o = a.ZP.getDefaultChannel(O)) || void 0 === o ? void 0 : o.id), (0, E.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([
          t.e('77287'),
          t.e('14262'),
          t.e('22347'),
          t.e('56236'),
          t.e('14184')
        ]).then(t.bind(t, 17671));
        return n => (0, i.jsx)(e, {
          ...n,
          guildId: O
        });
      });
    f += e, r = R[f];
  }
if (h += e, null == (O = g[h]) || '' === O)
  break;
R = S(O, N), f = e < 0 ? R.length - 1 : 0;
  }
  c.S.dispatch(I.CkL.SHAKE_APP, {
duration: 200,
intensity: 2
  });
}, I.aZC);