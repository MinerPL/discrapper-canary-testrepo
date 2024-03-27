"use strict";
n.r(t), n.d(t, {
  fetchDirectoryEntries: function() {
    return s
  }
});
var l = n("483366"),
  u = n.n(l),
  i = n("872717"),
  a = n("913144"),
  r = n("730647"),
  d = n("49111");
let s = u(async e => {
  try {
    a.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let t = await i.HTTP.get({
      url: d.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
      }
    });
    a.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: e,
      entries: t.body
    })
  } catch (e) {
    a.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)