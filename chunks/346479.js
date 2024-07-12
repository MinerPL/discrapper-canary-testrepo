n(789020);
var r = n(697988),
  i = n(544891),
  a = n(570140),
  o = n(668781),
  s = n(430742),
  l = n(367907),
  u = n(555573),
  c = n(131704),
  d = n(314897),
  _ = n(592125),
  E = n(496675),
  f = n(823379),
  h = n(920303),
  p = n(569471),
  m = n(91159),
  I = n(952537),
  T = n(981631),
  g = n(176505),
  S = n(689938);

function A(e, t) {
  return i.tn.patch({
url: T.ANM.CHANNEL(e.id),
body: t
  }).then(t => (a.Z.dispatch({
type: 'THREAD_UPDATE',
channel: (0, c.q_)(t.body)
  }), e.isForumPost() && null != e.parent_id && a.Z.dispatch({
type: 'RESORT_THREADS',
channelId: e.parent_id
  }), t));
}

function N(e, t) {
  a.Z.dispatch({
type: 'THREAD_MEMBER_LOCAL_UPDATE',
id: e.id,
guildId: e.getGuildId(),
userId: d.default.getId(),
isJoining: t
  });
}
t.Z = {
  archiveThread(e, t) {
let n = {
  archived: !0
};
return t && (n.locked = !0), A(e, n);
  },
  async lockThread(e) {
let t = e.isArchivedThread();
return t && await this.unarchiveThread(e, !1), A(e, {
  locked: !0,
  archived: t
});
  },
  async unlockThread(e) {
let t = e.isArchivedThread();
return t && await this.unarchiveThread(e, !0), A(e, {
  locked: !1,
  archived: t
});
  },
  async unarchiveThread(e, t) {
let n = {
    archived: !1
  },
  r = e.isForumPost();
t && (n.locked = !1);
try {
  return await A(e, n);
} catch (e) {
  var i, a;
  throw (null === (i = e.body) || void 0 === i ? void 0 : i.code) === T.evJ.TOO_MANY_THREADS ? o.Z.show({
    title: r ? S.Z.Messages.CANNOT_UNARCHIVE_FORUM_POST : S.Z.Messages.CANNOT_UNARCHIVE_THREAD,
    body: r ? S.Z.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : S.Z.Messages.TOO_MANY_THREADS_MESSAGE
  }) : (null === (a = e.body) || void 0 === a ? void 0 : a.code) === T.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? o.Z.show({
    title: S.Z.Messages.CANNOT_UNARCHIVE_THREAD,
    body: S.Z.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
  }) : 429 === e.status ? o.Z.show({
    title: r ? S.Z.Messages.CANNOT_UNARCHIVE_FORUM_POST : S.Z.Messages.CANNOT_UNARCHIVE_THREAD,
    body: S.Z.Messages.RATE_LIMITED
  }) : o.Z.show({
    title: S.Z.Messages.ERROR,
    body: S.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
  }), e;
}
  },
  async unarchiveThreadIfNecessary(e) {
var t;
let n = _.Z.getChannel(e),
  r = E.Z.can(T.Plq.MANAGE_THREADS, n);
null != n && n.isArchivedThread() && (r || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1);
  },
  setInvitable: (e, t) => A(e, {
invitable: t
  }),
  async joinThread(e, t) {
e.isForumPost() && N(e, !0);
try {
  return await i.tn.post({
    url: T.ANM.THREAD_MEMBER(e.id),
    query: {
      location: t
    }
  });
} catch (t) {
  var n;
  if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === T.evJ.TOO_MANY_THREAD_MEMBERS) {
    let t = e.isForumPost();
    o.Z.show({
      title: t ? S.Z.Messages.CANNOT_JOIN_FORUM_POST : S.Z.Messages.CANNOT_JOIN_THREAD,
      body: t ? S.Z.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : S.Z.Messages.TOO_MANY_MEMBERS_MESSAGE
    });
  } else
    o.Z.show({
      title: S.Z.Messages.ERROR,
      body: S.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
    });
  e.isForumPost() && N(e, !1);
}
  },
  async addMember(e, t, n) {
try {
  return await i.tn.post({
    url: T.ANM.THREAD_MEMBER(e.id, t),
    query: {
      location: n
    }
  });
} catch (t) {
  var r;
  if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === T.evJ.TOO_MANY_THREAD_MEMBERS) {
    let t = e.isForumPost();
    o.Z.show({
      title: t ? S.Z.Messages.CANNOT_ADD_USER_TO_FORUM_POST : S.Z.Messages.CANNOT_ADD_USER_TO_THREAD,
      body: t ? S.Z.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : S.Z.Messages.TOO_MANY_MEMBERS_MESSAGE
    });
  } else
    o.Z.show({
      title: S.Z.Messages.ERROR,
      body: S.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
    });
}
  },
  leaveThread: (e, t) => (e.isForumPost() && N(e, !1), i.tn.del({
url: T.ANM.THREAD_MEMBER(e.id),
query: {
  location: t
}
  })),
  removeMember: (e, t, n) => i.tn.del({
url: T.ANM.THREAD_MEMBER(e.id, t),
query: {
  location: n
}
  }),
  setAutoArchiveDuration: (e, t) => i.tn.patch({
url: T.ANM.CHANNEL(e.id),
body: {
  auto_archive_duration: t
}
  }),
  pin(e) {
let t = e.flags | g.zZ.PINNED;
this.updateFlags(e, t, e.isArchivedThread());
  },
  unpin(e) {
let t = e.flags & ~g.zZ.PINNED;
this.updateFlags(e, t);
  },
  async updateFlags(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
a.Z.dispatch({
  type: 'THREAD_UPDATE',
  channel: e.merge({
    flags: t
  })
});
let r = {
  flags: t
};
n && (r.archived = !1);
try {
  await i.tn.patch({
    url: T.ANM.CHANNEL(e.id),
    body: r
  });
} catch {
  a.Z.dispatch({
    type: 'THREAD_UPDATE',
    channel: e
  });
}
  },
  async replacePin(e, t) {
let n = e.merge({
    flags: e.flags & ~g.zZ.PINNED
  }),
  r = t.merge({
    flags: t.flags | g.zZ.PINNED
  });
a.Z.dispatch({
  type: 'THREAD_UPDATE',
  channel: n
}), a.Z.dispatch({
  type: 'THREAD_UPDATE',
  channel: r
}), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
try {
  await i.tn.patch({
    url: T.ANM.CHANNEL(e.id),
    body: {
      flags: e.flags & ~g.zZ.PINNED
    }
  });
} catch {
  a.Z.dispatch({
    type: 'THREAD_UPDATE',
    channel: e
  }), a.Z.dispatch({
    type: 'THREAD_UPDATE',
    channel: t
  });
  return;
}
try {
  await i.tn.patch({
    url: T.ANM.CHANNEL(t.id),
    body: {
      flags: t.flags | g.zZ.PINNED
    }
  });
} catch {
  a.Z.dispatch({
    type: 'THREAD_UPDATE',
    channel: t
  });
}
  },
  openThreadCreationForMobile(e, t, n) {
(0, l.yw)(T.rMx.THREAD_CREATION_STARTED, {
  location: n,
  channel_id: e.id,
  guild_id: e.guild_id
}), s.Z.changeThreadSettings(e.id, {
  parentMessageId: t,
  isPrivate: !1,
  location: n
}), null == t && (0, u.Po)({
  channelId: e.id,
  command: null,
  section: null
});
  },
  async setNotificationSettings(e, t) {
return (0, m.ZJ)(e, t), !p.Z.hasJoined(e.id) && await this.joinThread(e, 'Change Notification Settings'), i.tn.patch({
  url: T.ANM.THREAD_MEMBER_SETTINGS(e.id),
  body: t
});
  },
  loadArchivedThreads(e, t, n, o, s) {
!h.Z.isLoading(t, n, o) && (a.Z.dispatch({
  type: 'LOAD_ARCHIVED_THREADS',
  channelId: t,
  sortOrder: n,
  tagFilter: o
}), i.tn.get({
  url: T.ANM.THREAD_SEARCH(t),
  query: {
    archived: !0,
    sort_by: 'last_message_time',
    sort_order: 'desc',
    limit: h.I,
    tag: o.size > 0 ? Array.from(o).join(',') : void 0,
    tag_setting: r.z.MATCH_SOME,
    offset: s
  },
  retries: 2
}).then(r => {
  let {
    body: {
      threads: i,
      members: l,
      has_more: u,
      first_messages: c,
      most_recent_messages: d
    }
  } = r;
  null == i ? a.Z.dispatch({
    type: 'LOAD_ARCHIVED_THREADS_FAIL',
    channelId: t,
    sortOrder: n,
    tagFilter: o
  }) : a.Z.dispatch({
    type: 'LOAD_ARCHIVED_THREADS_SUCCESS',
    guildId: e,
    channelId: t,
    offset: s,
    sortOrder: n,
    tagFilter: o,
    threads: i,
    firstMessages: c,
    mostRecentMessages: d,
    members: (null != l ? l : []).map(e => (0, I.Z)(e)),
    owners: i.map(e => e.owner).filter(f.lm),
    hasMore: u
  });
}, () => {
  a.Z.dispatch({
    type: 'LOAD_ARCHIVED_THREADS_FAIL',
    channelId: t,
    sortOrder: n,
    tagFilter: o
  });
}));
  },
  async searchThreads(e, t, n, o) {
let s = null != o && o.size > 0 ? Array.from(o).join(',') : void 0,
  {
    body: {
      threads: l,
      members: u,
      first_messages: c,
      most_recent_messages: d
    }
  } = await i.tn.get({
    url: T.ANM.THREAD_SEARCH(t),
    query: {
      name: n,
      tag: s,
      tag_setting: r.z.MATCH_SOME
    }
  });
return a.Z.dispatch({
  type: 'LOAD_THREADS_SUCCESS',
  threads: l,
  members: u,
  guildId: e,
  firstMessages: c,
  mostRecentMessages: d
}), l.map(e => e.id);
  }
};