"use strict";
n.d(t, {
  g: function() {
    return u
  }
}), n(411104);
var i = n(544891),
  r = n(570140),
  s = n(881052),
  o = n(70956),
  a = n(672458),
  l = n(981631);
async function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
  if (_ > 3) throw Error("Unable to search guild members after max retries");
  let {
    autoRetry: d = !0,
    signal: c
  } = n;
  try {
    var E;
    let s = await i.tn.post({
      url: l.ANM.GUILD_MEMBER_SEARCH(e),
      body: t,
      signal: c
    });
    if (s.status === a.t) {
      if (null == s.body.retry_after) throw Error("Indexing response did not include retry_after");
      if (!d) throw Error("Indexing response received but autoRetry is disabled");
      return await r.Z.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
        guildId: e
      }), await new Promise(e => setTimeout(e, s.body.retry_after * o.Z.Millis.SECOND)), u(e, t, n, _ + 1)
    }
    return {
      type: a.d.SUCCESSFUL_QUERY,
      body: {
        guild_id: (E = s.body).guild_id,
        members: E.members,
        page_result_count: E.page_result_count,
        total_result_count: E.total_result_count
      }
    }
  } catch (t) {
    let e = new s.Hx(t);
    return {
      type: a.d.ERROR,
      body: e
    }
  }
}