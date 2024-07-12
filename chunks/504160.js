n.d(t, {
  L_: function() {
return a;
  },
  _6: function() {
return r;
  },
  ji: function() {
return s;
  }
});
var i = n(570140);

function s(e) {
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

function a(e) {
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