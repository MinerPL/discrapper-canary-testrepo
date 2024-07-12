var r, i;

function a(e) {
  let {
sessionId: t,
userId: n,
applicationId: r,
channelId: i,
streamKey: a
  } = e;
  return {
session_id: t,
user_id: n,
application_id: r,
channel_id: i,
stream_key: a
  };
}

function o(e, t, n) {
  let {
session_id: r,
application_id: i,
channel_id: a,
stream_key: o
  } = e;
  return {
sessionId: r,
userId: t,
applicationId: i,
channelId: a,
streamKey: o,
source: n
  };
}
n.d(t, {
  $C: function() {
return r;
  },
  HD: function() {
return a;
  },
  tI: function() {
return o;
  }
}), (i = r || (r = {}))[i.GLOBAL = 0] = 'GLOBAL', i[i.GUILD = 1] = 'GUILD';