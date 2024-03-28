"use strict";
n.r(t);
var s = n("544891"),
  a = n("570140"),
  l = n("981631");
t.default = {
  setGuildFilter(e) {
    let {
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: s
    } = e;
    a.default.dispatch({
      type: "SET_RECENT_MENTIONS_FILTER",
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: s
    })
  },
  clearMentions() {
    a.default.dispatch({
      type: "CLEAR_MENTIONS"
    })
  },
  truncateMentions(e) {
    a.default.dispatch({
      type: "TRUNCATE_MENTIONS",
      size: e
    })
  },
  fetchRecentMentions(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MAX_MENTIONS_PER_FETCH,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
      r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    a.default.dispatch({
      type: "LOAD_RECENT_MENTIONS",
      guildId: n
    }), s.HTTP.get({
      url: l.Endpoints.MENTIONS,
      query: {
        before: e,
        limit: t,
        guild_id: n,
        roles: i,
        everyone: r
      },
      retries: 2,
      oldFormErrors: !0
    }).then(t => {
      let {
        body: n
      } = t;
      a.default.dispatch({
        type: "LOAD_RECENT_MENTIONS_SUCCESS",
        messages: n,
        isAfter: null != e,
        hasMoreAfter: n.length >= l.MAX_MENTIONS_PER_FETCH
      })
    }, () => {
      a.default.dispatch({
        type: "LOAD_RECENT_MENTIONS_FAILURE"
      })
    })
  },
  deleteRecentMention(e) {
    s.HTTP.del({
      url: l.Endpoints.MENTIONS_MESSAGE_ID(e),
      retries: 2,
      oldFormErrors: !0
    }), a.default.dispatch({
      type: "RECENT_MENTION_DELETE",
      id: e
    })
  },
  setRecentMentionsStale() {
    a.default.dispatch({
      type: "SET_RECENT_MENTIONS_STALE"
    })
  }
}