"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("654030"),
  i = n("906732"),
  r = n("973616"),
  o = n("789407"),
  u = n("314897"),
  d = n("158776"),
  c = n("981631"),
  f = n("616922"),
  E = n("364092");
t.default = e => {
  var t;
  let {
    channel: n,
    message: _,
    hideParty: T
  } = e, {
    analyticsLocations: m
  } = (0, i.default)(), I = (0, a.useStateFromStores)([u.default], () => u.default.getId()), p = (0, a.useStateFromStores)([d.default], () => {
    if (null == _.application) return d.default.findActivity(_.author.id, e => e.type === c.ActivityTypes.LISTENING);
    {
      var e;
      let t = _.author.id;
      return (null === (e = _.activity) || void 0 === e ? void 0 : e.type) === c.ActivityActionTypes.JOIN_REQUEST && (t = t === I && n.isPrivate() ? n.getRecipientId() : I), d.default.getApplicationActivity(t, _.application.id)
    }
  }, [_, n, I]);
  return (0, s.jsx)(l.default, {
    className: E.container,
    activity: p,
    activityActionType: null != _.activity ? _.activity.type : null,
    partyId: null != _.activity ? _.activity.party_id : null,
    userId: _.author.id,
    application: null != (t = _).application ? r.default.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, f.isSpotifyParty)(t.activity.party_id) ? o.SpotifyApplication : void 0,
    message: _,
    channelId: n.id,
    guildId: n.getGuildId(),
    hideParty: T,
    isSender: _.author.id === I,
    analyticsLocations: m
  })
}