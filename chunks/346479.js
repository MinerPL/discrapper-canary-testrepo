"use strict";
n(789020);
var i = n(697988),
  r = n(544891),
  s = n(570140),
  o = n(668781),
  a = n(430742),
  l = n(367907),
  u = n(555573),
  _ = n(131704),
  d = n(314897),
  c = n(592125),
  E = n(496675),
  I = n(823379),
  T = n(920303),
  h = n(569471),
  S = n(91159),
  f = n(952537),
  N = n(981631),
  A = n(176505),
  m = n(689938);

function O(e, t) {
  return r.tn.patch({
    url: N.ANM.CHANNEL(e.id),
    body: t
  }).then(t => (s.Z.dispatch({
    type: "THREAD_UPDATE",
    channel: (0, _.q_)(t.body)
  }), e.isForumPost() && null != e.parent_id && s.Z.dispatch({
    type: "RESORT_THREADS",
    channelId: e.parent_id
  }), t))
}

function R(e, t) {
  s.Z.dispatch({
    type: "THREAD_MEMBER_LOCAL_UPDATE",
    id: e.id,
    guildId: e.getGuildId(),
    userId: d.default.getId(),
    isJoining: t
  })
}
t.Z = {
  archiveThread(e, t) {
    let n = {
      archived: !0
    };
    return t && (n.locked = !0), O(e, n)
  },
  async lockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, !1), O(e, {
      locked: !0,
      archived: t
    })
  },
  async unlockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, !0), O(e, {
      locked: !1,
      archived: t
    })
  },
  async unarchiveThread(e, t) {
    let n = {
        archived: !1
      },
      i = e.isForumPost();
    t && (n.locked = !1);
    try {
      return await O(e, n)
    } catch (e) {
      var r, s;
      throw (null === (r = e.body) || void 0 === r ? void 0 : r.code) === N.evJ.TOO_MANY_THREADS ? o.Z.show({
        title: i ? m.Z.Messages.CANNOT_UNARCHIVE_FORUM_POST : m.Z.Messages.CANNOT_UNARCHIVE_THREAD,
        body: i ? m.Z.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : m.Z.Messages.TOO_MANY_THREADS_MESSAGE
      }) : (null === (s = e.body) || void 0 === s ? void 0 : s.code) === N.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? o.Z.show({
        title: m.Z.Messages.CANNOT_UNARCHIVE_THREAD,
        body: m.Z.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
      }) : 429 === e.status ? o.Z.show({
        title: i ? m.Z.Messages.CANNOT_UNARCHIVE_FORUM_POST : m.Z.Messages.CANNOT_UNARCHIVE_THREAD,
        body: m.Z.Messages.RATE_LIMITED
      }) : o.Z.show({
        title: m.Z.Messages.ERROR,
        body: m.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
      }), e
    }
  },
  async unarchiveThreadIfNecessary(e) {
    var t;
    let n = c.Z.getChannel(e),
      i = E.Z.can(N.Plq.MANAGE_THREADS, n);
    null != n && n.isArchivedThread() && (i || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1)
  },
  setInvitable: (e, t) => O(e, {
    invitable: t
  }),
  async joinThread(e, t) {
    e.isForumPost() && R(e, !0);
    try {
      return await r.tn.post({
        url: N.ANM.THREAD_MEMBER(e.id),
        query: {
          location: t
        }
      })
    } catch (t) {
      var n;
      if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === N.evJ.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        o.Z.show({
          title: t ? m.Z.Messages.CANNOT_JOIN_FORUM_POST : m.Z.Messages.CANNOT_JOIN_THREAD,
          body: t ? m.Z.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : m.Z.Messages.TOO_MANY_MEMBERS_MESSAGE
        })
      } else o.Z.show({
        title: m.Z.Messages.ERROR,
        body: m.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
      });
      e.isForumPost() && R(e, !1)
    }
  },
  async addMember(e, t, n) {
    try {
      return await r.tn.post({
        url: N.ANM.THREAD_MEMBER(e.id, t),
        query: {
          location: n
        }
      })
    } catch (t) {
      var i;
      if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === N.evJ.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        o.Z.show({
          title: t ? m.Z.Messages.CANNOT_ADD_USER_TO_FORUM_POST : m.Z.Messages.CANNOT_ADD_USER_TO_THREAD,
          body: t ? m.Z.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : m.Z.Messages.TOO_MANY_MEMBERS_MESSAGE
        })
      } else o.Z.show({
        title: m.Z.Messages.ERROR,
        body: m.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
      })
    }
  },
  leaveThread: (e, t) => (e.isForumPost() && R(e, !1), r.tn.del({
    url: N.ANM.THREAD_MEMBER(e.id),
    query: {
      location: t
    }
  })),
  removeMember: (e, t, n) => r.tn.del({
    url: N.ANM.THREAD_MEMBER(e.id, t),
    query: {
      location: n
    }
  }),
  setAutoArchiveDuration: (e, t) => r.tn.patch({
    url: N.ANM.CHANNEL(e.id),
    body: {
      auto_archive_duration: t
    }
  }),
  pin(e) {
    let t = e.flags | A.zZ.PINNED;
    this.updateFlags(e, t, e.isArchivedThread())
  },
  unpin(e) {
    let t = e.flags & ~A.zZ.PINNED;
    this.updateFlags(e, t)
  },
  async updateFlags(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    s.Z.dispatch({
      type: "THREAD_UPDATE",
      channel: e.merge({
        flags: t
      })
    });
    let i = {
      flags: t
    };
    n && (i.archived = !1);
    try {
      await r.tn.patch({
        url: N.ANM.CHANNEL(e.id),
        body: i
      })
    } catch {
      s.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      })
    }
  },
  async replacePin(e, t) {
    let n = e.merge({
        flags: e.flags & ~A.zZ.PINNED
      }),
      i = t.merge({
        flags: t.flags | A.zZ.PINNED
      });
    s.Z.dispatch({
      type: "THREAD_UPDATE",
      channel: n
    }), s.Z.dispatch({
      type: "THREAD_UPDATE",
      channel: i
    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
    try {
      await r.tn.patch({
        url: N.ANM.CHANNEL(e.id),
        body: {
          flags: e.flags & ~A.zZ.PINNED
        }
      })
    } catch {
      s.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      }), s.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      });
      return
    }
    try {
      await r.tn.patch({
        url: N.ANM.CHANNEL(t.id),
        body: {
          flags: t.flags | A.zZ.PINNED
        }
      })
    } catch {
      s.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      })
    }
  },
  openThreadCreationForMobile(e, t, n) {
    (0, l.yw)(N.rMx.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), a.Z.changeThreadSettings(e.id, {
      parentMessageId: t,
      isPrivate: !1,
      location: n
    }), null == t && (0, u.Po)({
      channelId: e.id,
      command: null,
      section: null
    })
  },
  async setNotificationSettings(e, t) {
    return (0, S.ZJ)(e, t), !h.Z.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), r.tn.patch({
      url: N.ANM.THREAD_MEMBER_SETTINGS(e.id),
      body: t
    })
  },
  loadArchivedThreads(e, t, n, o, a) {
    !T.Z.isLoading(t, n, o) && (s.Z.dispatch({
      type: "LOAD_ARCHIVED_THREADS",
      channelId: t,
      sortOrder: n,
      tagFilter: o
    }), r.tn.get({
      url: N.ANM.THREAD_SEARCH(t),
      query: {
        archived: !0,
        sort_by: "last_message_time",
        sort_order: "desc",
        limit: T.I,
        tag: o.size > 0 ? Array.from(o).join(",") : void 0,
        tag_setting: i.z.MATCH_SOME,
        offset: a
      },
      retries: 2
    }).then(i => {
      let {
        body: {
          threads: r,
          members: l,
          has_more: u,
          first_messages: _,
          most_recent_messages: d
        }
      } = i;
      null == r ? s.Z.dispatch({
        type: "LOAD_ARCHIVED_THREADS_FAIL",
        channelId: t,
        sortOrder: n,
        tagFilter: o
      }) : s.Z.dispatch({
        type: "LOAD_ARCHIVED_THREADS_SUCCESS",
        guildId: e,
        channelId: t,
        offset: a,
        sortOrder: n,
        tagFilter: o,
        threads: r,
        firstMessages: _,
        mostRecentMessages: d,
        members: (null != l ? l : []).map(e => (0, f.Z)(e)),
        owners: r.map(e => e.owner).filter(I.lm),
        hasMore: u
      })
    }, () => {
      s.Z.dispatch({
        type: "LOAD_ARCHIVED_THREADS_FAIL",
        channelId: t,
        sortOrder: n,
        tagFilter: o
      })
    }))
  },
  async searchThreads(e, t, n, o) {
    let a = null != o && o.size > 0 ? Array.from(o).join(",") : void 0,
      {
        body: {
          threads: l,
          members: u,
          first_messages: _,
          most_recent_messages: d
        }
      } = await r.tn.get({
        url: N.ANM.THREAD_SEARCH(t),
        query: {
          name: n,
          tag: a,
          tag_setting: i.z.MATCH_SOME
        }
      });
    return s.Z.dispatch({
      type: "LOAD_THREADS_SUCCESS",
      threads: l,
      members: u,
      guildId: e,
      firstMessages: _,
      mostRecentMessages: d
    }), l.map(e => e.id)
  }
}