"use strict";
l.r(t), l.d(t, {
  getDirectoryEntryBroadcastInfo: function() {
    return s
  }
});
var a = l("544891"),
  n = l("981631");
async function s(e, t, l) {
  return (await a.HTTP.get({
    url: n.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
    query: {
      type: t,
      entity_id: l
    }
  })).body
}