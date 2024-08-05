var i = n(735250);
n(470079);
var s = n(442837),
  a = n(654030),
  r = n(906732),
  l = n(973616),
  o = n(789407),
  c = n(314897),
  u = n(158776),
  d = n(981631),
  _ = n(616922),
  E = n(778973);
t.Z = e => {
  var t;
  let {
channel: n,
message: I,
hideParty: m
  } = e, {
analyticsLocations: T
  } = (0, r.ZP)(), h = (0, s.e7)([c.default], () => c.default.getId()), N = (0, s.e7)([u.Z], () => {
if (null == I.application)
  return u.Z.findActivity(I.author.id, e => e.type === d.IIU.LISTENING);
{
  var e;
  let t = I.author.id;
  return (null === (e = I.activity) || void 0 === e ? void 0 : e.type) === d.mFx.JOIN_REQUEST && (t = t === h && n.isPrivate() ? n.getRecipientId() : h), u.Z.getApplicationActivity(t, I.application.id);
}
  }, [
I,
n,
h
  ]);
  return (0, i.jsx)(a.Z, {
className: E.container,
activity: N,
activityActionType: null != I.activity ? I.activity.type : null,
partyId: null != I.activity ? I.activity.party_id : null,
userId: I.author.id,
application: null != (t = I).application ? l.Z.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, _.Ps)(t.activity.party_id) ? o.r9 : void 0,
message: I,
channelId: n.id,
guildId: n.getGuildId(),
hideParty: m,
isSender: I.author.id === h,
analyticsLocations: T
  });
};