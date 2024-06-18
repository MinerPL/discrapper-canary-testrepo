"use strict";
var i = n(544891),
  r = n(570140),
  s = n(668781),
  o = n(346479),
  a = n(929991),
  l = n(480739),
  u = n(985518),
  _ = n(228392),
  d = n(981631),
  c = n(689938);
async function E(e, t, n) {
  try {
    return await e()
  } catch (e) {
    var i;
    (null === (i = e.body) || void 0 === i ? void 0 : i.code) === d.evJ.NON_MODERATED_TAG_REQUIRED && s.Z.show({
      title: t,
      body: n
    })
  }
}
t.Z = {
  resort(e) {
    r.Z.dispatch({
      type: "RESORT_THREADS",
      channelId: e
    })
  },
  createForumTag: (e, t) => i.tn.post({
    url: d.ANM.FORUM_TAGS(t),
    body: {
      name: e.name,
      emoji_id: e.emojiId,
      emoji_name: null != e.emojiId ? void 0 : e.emojiName,
      moderated: e.moderated
    }
  }),
  updateForumTag(e, t) {
    let n = i.tn.put({
      url: d.ANM.FORUM_TAG(t, e.id),
      body: {
        name: e.name,
        emoji_id: e.emojiId,
        emoji_name: null == e.emojiId ? e.emojiName : void 0,
        moderated: e.moderated
      }
    });
    E(() => n, c.Z.Messages.FORUM_TAG_EDIT_ERROR, c.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
  },
  deleteForumTag(e, t) {
    let n = i.tn.del({
      url: d.ANM.FORUM_TAG(e, t)
    });
    E(() => n, c.Z.Messages.FORUM_TAG_REMOVE_ERROR, c.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
  },
  updateForumPostTags: async (e, t) => (await o.Z.unarchiveThreadIfNecessary(e), i.tn.patch({
    url: d.ANM.CHANNEL(e),
    body: {
      applied_tags: t
    }
  })),
  hideAdminOnboarding(e, t) {
    r.Z.dispatch({
      type: "ADMIN_ONBOARDING_GUIDE_HIDE",
      channelId: e,
      hide: t
    })
  },
  markPostAsSeen(e, t, n) {
    (0, a.a8)((0, u.UP)(e), t, n)
  },
  markPostAsUnseen(e, t, n) {
    (0, a.FL)((0, u.UP)(e), t, n)
  },
  flushSeenItems(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
    (0, a.rS)((0, u.UP)(e), t)
  },
  async searchForumPosts(e, t, n, i) {
    r.Z.dispatch({
      type: "FORUM_SEARCH_START",
      channelId: t
    });
    try {
      let s = await o.Z.searchThreads(e, t, n, i);
      (0, _.Js)({
        guildId: e,
        channelId: t,
        numSearchResults: s.length
      }), r.Z.dispatch({
        type: "FORUM_SEARCH_SUCCESS",
        channelId: t,
        threadIds: s
      })
    } catch {
      r.Z.dispatch({
        type: "FORUM_SEARCH_FAILURE",
        channelId: t
      })
    }
  },
  updateForumSearchQuery(e, t) {
    r.Z.dispatch({
      type: "FORUM_SEARCH_QUERY_UPDATED",
      channelId: e,
      query: t
    })
  },
  clearForumSearch(e) {
    r.Z.dispatch({
      type: "FORUM_SEARCH_CLEAR",
      channelId: e
    })
  }
}