n.d(t, {
  L_: function() {
return s;
  },
  _6: function() {
return r;
  },
  ji: function() {
return a;
  }
});
var i = n(570140);

function a(e) {
  let {
eventId: t,
stageId: n
  } = e;
  (null != t || null != n) && i.Z.dispatch({
type: 'LIVE_CHANNEL_NOTICE_HIDE',
eventId: t,
stageId: n
  });
}

function s(e) {
  i.Z.dispatch({
type: 'UPCOMING_GUILD_EVENT_NOTICE_HIDE',
eventId: e
  });
}

function r(e) {
  i.Z.dispatch({
type: 'UPCOMING_GUILD_EVENT_NOTICE_SEEN',
guildEventId: e
  });
}