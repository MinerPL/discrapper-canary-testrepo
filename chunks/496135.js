"use strict";
n.d(t, {
  D: function() {
    return o
  }
});
var i = n(570140),
  r = n(576007),
  s = n(672458);
async function o(e, t, n) {
  let o = await (0, r.g)(e, t, n);
  if (o.type === s.d.ERROR) throw o.body;
  let {
    body: a
  } = o;
  i.Z.dispatch({
    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
    guildId: e,
    members: a.members,
    page_result_count: a.page_result_count,
    total_result_count: a.total_result_count
  })
}