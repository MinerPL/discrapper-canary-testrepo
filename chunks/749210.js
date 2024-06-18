"use strict";
n.d(t, {
  V: function() {
    return w
  }
}), n(411104), n(177593);
var i = n(990547),
  r = n(149765),
  s = n(544891),
  o = n(570140),
  a = n(34756),
  l = n(408987),
  u = n(280837),
  _ = n(57132),
  d = n(777639),
  c = n(272423),
  E = n(781157),
  I = n(895886),
  T = n(35225),
  h = n(703656),
  S = n(314897),
  f = n(592125),
  N = n(664915),
  A = n(984933),
  m = n(430824),
  O = n(944486),
  R = n(914010),
  C = n(594174),
  p = n(626135),
  g = n(700785),
  L = n(74538),
  v = n(573261),
  D = n(668781),
  M = n(981631),
  P = n(689938);
let y = e => {
    D.Z.show({
      title: P.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
      body: P.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
        quantity: e
      })
    })
  },
  U = e => {
    o.Z.dispatch({
      type: "GUILD_DELETE",
      guild: {
        id: e
      }
    })
  },
  b = () => {
    D.Z.show({
      title: P.Z.Messages.SERVER_IS_CURRENTLY_FULL,
      body: P.Z.Messages.PLEASE_TRY_AGAIN_LATER
    })
  };
async function G(e) {
  var t, i, r, a, l;
  let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      source: _,
      loadId: d,
      lurkLocation: c
    } = u,
    E = null !== (t = u.lurker) && void 0 !== t && t,
    T = C.default.getCurrentUser();
  if (null !== (i = null == T ? void 0 : T.hasFlag(M.xW$.QUARANTINED)) && void 0 !== i && i) return (0, I.default)(), new Promise((e, t) => t(Error()));
  o.Z.wait(() => o.Z.dispatch({
    type: "GUILD_JOIN",
    guildId: e,
    lurker: E,
    source: _,
    loadId: d
  }));
  try {
    let t = R.Z.getGuildId(),
      i = e === t && null != m.Z.getGuild(e) ? O.Z.getChannelId(e) : null,
      r = await s.tn.put({
        url: M.ANM.GUILD_JOIN(e),
        query: {
          lurker: E,
          session_id: E ? S.default.getSessionId() : null,
          recommendation_load_id: d,
          location: E && null != c ? c : null
        },
        context: {
          source: _
        },
        oldFormErrors: !0,
        body: {}
      });
    if (null != r.body.join_request && o.Z.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: e,
        request: r.body.join_request
      }), null == m.Z.getGuild(e) && r.body.show_verification_form) return (0, h.uL)(M.Z5c.GUILD_MEMBER_VERIFICATION(e)), r;
    if (null != r.body.welcome_screen && o.Z.dispatch({
        type: "WELCOME_SCREEN_UPDATE",
        guildId: r.body.id,
        welcomeScreen: r.body.welcome_screen
      }), null != r.body.approximate_presence_count && o.Z.dispatch({
        type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
        guildId: r.body.id,
        count: r.body.approximate_presence_count
      }), !E) {
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 17181));
      await t({
        guildId: e,
        returnChannelId: i
      })
    }
    return r
  } catch (t) {
    if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === M.evJ.TOO_MANY_USER_GUILDS) {
      let e = C.default.getCurrentUser();
      L.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? y(M.tHP) : y(M.DZw)
    }
    throw (null === (a = t.body) || void 0 === a ? void 0 : a.code) === M.evJ.GUILD_AT_CAPACITY && b(), E && (null === (l = t.body) || void 0 === l ? void 0 : l.code) === M.evJ.UNKNOWN_GUILD && U(e), t
  }
}

function w(e) {
  return new Promise(t => m.Z.addConditionalChangeListener(() => {
    let n = m.Z.getGuild(e);
    return null == n || (t(n), !1)
  }))
}
t.Z = {
  joinGuild: G,
  waitForGuild: w,
  async transitionToGuildSync(e, t, n, i) {
    let r = function(e, t) {
        if (null != t) return t;
        if (!(0, _.cn)() || !!(0, E.JH)()) return (0, T.V)(e)
      }((await w(e)).id, n),
      s = t;
    (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (s = {
      ...t,
      welcomeModalChannelId: r
    }), (0, h.uL)(M.Z5c.CHANNEL(e, r), s, void 0, i), await new Promise(setImmediate)
  },
  deleteGuild: U,
  selectGuild(e) {
    (0, u.a)(e)
  },
  createGuild(e) {
    o.Z.dispatch({
      type: "GUILD_CREATE",
      guild: e
    })
  },
  setServerMute: (e, t, n) => s.tn.patch({
    url: M.ANM.GUILD_MEMBER(e, t),
    body: {
      mute: n
    },
    oldFormErrors: !0
  }),
  setServerDeaf: (e, t, n) => s.tn.patch({
    url: M.ANM.GUILD_MEMBER(e, t),
    body: {
      deaf: n
    },
    oldFormErrors: !0
  }),
  setChannel(e, t, n) {
    s.tn.patch({
      url: M.ANM.GUILD_MEMBER(e, t),
      body: {
        channel_id: n
      },
      oldFormErrors: !0
    })
  },
  setMemberFlags(e, t, n) {
    s.tn.patch({
      url: M.ANM.GUILD_MEMBER(e, t),
      body: {
        flags: n
      },
      oldFormErrors: !0
    })
  },
  kickUser: (e, t, n) => s.tn.del({
    url: M.ANM.GUILD_MEMBER(e, t),
    reason: n,
    oldFormErrors: !0
  }),
  setCommunicationDisabledUntil(e) {
    let {
      guildId: t,
      userId: n,
      communicationDisabledUntilTimestamp: r,
      duration: s,
      reason: o,
      location: a
    } = e;
    return v.Z.patch({
      url: M.ANM.GUILD_MEMBER(t, n),
      reason: o,
      body: {
        communication_disabled_until: r
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: i.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
        properties: {
          guild_id: t,
          target_user_id: n,
          duration: null != s ? s : null,
          reason: null != o ? o : null,
          communication_disabled_until: r,
          location: null != a ? a : null
        }
      }
    })
  },
  banUser: (e, t, n, i) => s.tn.put({
    url: M.ANM.GUILD_BAN(e, t),
    reason: i,
    body: {
      delete_message_seconds: n
    },
    oldFormErrors: !0
  }),
  unbanUser: (e, t) => s.tn.del({
    url: M.ANM.GUILD_BAN(e, t),
    oldFormErrors: !0
  }),
  banMultipleUsers: (e, t, n, i) => s.tn.post({
    url: M.ANM.BULK_GUILD_BAN(e),
    body: {
      user_ids: t,
      delete_message_seconds: n
    },
    reason: i,
    oldFormErrors: !0
  }),
  async createRole(e, t, n) {
    let i = {
      name: null != t && "" !== t ? t : P.Z.Messages.NEW_ROLE,
      color: null != n ? n : 0,
      permissions: g.Hn
    };
    try {
      let t = await s.tn.post({
          url: M.ANM.GUILD_ROLES(e),
          oldFormErrors: !0,
          body: i
        }),
        n = t.body;
      return n.permissions = r.vB(n.permissions), o.Z.dispatch({
        type: "GUILD_SETTINGS_ROLE_SELECT",
        roleId: t.body.id,
        role: n
      }), l.Z.checkGuildTemplateDirty(e), n
    } catch (e) {
      throw new a.Z(e)
    }
  },
  async updateRole(e, t, n) {
    let {
      icon: i,
      unicodeEmoji: r,
      ...o
    } = n, a = null === i || (null == i ? void 0 : i.startsWith("data:")) ? i : void 0, u = await s.tn.patch({
      url: M.ANM.GUILD_ROLE(e, t),
      body: {
        ...o,
        icon: a,
        unicode_emoji: r
      },
      oldFormErrors: !0
    });
    return l.Z.checkGuildTemplateDirty(e), u
  },
  updateRolePermissions: (e, t, n) => s.tn.patch({
    url: M.ANM.GUILD_ROLE(e, t),
    body: {
      permissions: n
    },
    oldFormErrors: !0
  }),
  deleteRole(e, t) {
    s.tn.del({
      url: M.ANM.GUILD_ROLE(e, t),
      oldFormErrors: !0
    }).then(() => {
      l.Z.checkGuildTemplateDirty(e)
    })
  },
  async batchChannelUpdate(e, t) {
    let n = await s.tn.patch({
      url: M.ANM.GUILD_CHANNELS(e),
      body: t,
      oldFormErrors: !0
    });
    return l.Z.checkGuildTemplateDirty(e), n
  },
  async batchRoleUpdate(e, t) {
    let n = await s.tn.patch({
      url: M.ANM.GUILD_ROLES(e),
      body: t,
      oldFormErrors: !0
    });
    return l.Z.checkGuildTemplateDirty(e), n
  },
  requestMembers(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return o.Z.dispatch({
      type: "GUILD_MEMBERS_REQUEST",
      guildIds: Array.isArray(e) ? e : [e],
      query: t,
      limit: n,
      presences: i
    })
  },
  searchRecentMembers(e, t) {
    let {
      query: n,
      continuationToken: i
    } = null != t ? t : {};
    return o.Z.dispatch({
      type: "GUILD_SEARCH_RECENT_MEMBERS",
      guildId: e,
      query: n,
      continuationToken: i
    })
  },
  requestMembersById(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return o.Z.dispatch({
      type: "GUILD_MEMBERS_REQUEST",
      guildIds: Array.isArray(e) ? e : [e],
      userIds: Array.isArray(t) ? t : [t],
      presences: n
    })
  },
  move(e, t, n, i) {
    o.Z.dispatch({
      type: "GUILD_MOVE",
      fromIndex: e,
      toIndex: t,
      fromFolderIndex: n,
      toFolderIndex: i
    })
  },
  moveById(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    o.Z.dispatch({
      type: "GUILD_MOVE_BY_ID",
      sourceId: e,
      targetId: t,
      moveToBelow: n,
      combine: i
    })
  },
  createGuildFolderLocal(e, t) {
    p.default.track(M.rMx.GUILD_FOLDER_CREATED), o.Z.dispatch({
      type: "GUILD_FOLDER_CREATE_LOCAL",
      sourceIds: e,
      name: t
    })
  },
  editGuildFolderLocal(e, t, n) {
    o.Z.dispatch({
      type: "GUILD_FOLDER_EDIT_LOCAL",
      targetId: e,
      sourceIds: t,
      name: n
    })
  },
  deleteGuildFolderLocal(e) {
    o.Z.dispatch({
      type: "GUILD_FOLDER_DELETE_LOCAL",
      targetId: e
    })
  },
  toggleGuildFolderExpand(e) {
    let t = N.Z.isFolderExpanded(e);
    p.default.track(M.rMx.GUILD_FOLDER_CLICKED, {
      source: "sidebar",
      action: t ? "collapsed" : "expanded"
    }), o.Z.dispatch({
      type: "TOGGLE_GUILD_FOLDER_EXPAND",
      folderId: e
    })
  },
  setGuildFolderExpanded(e, t) {
    o.Z.dispatch({
      type: "SET_GUILD_FOLDER_EXPANDED",
      folderId: e,
      expanded: t
    })
  },
  collapseAllFolders() {
    o.Z.dispatch({
      type: "GUILD_FOLDER_COLLAPSE"
    })
  },
  nsfwAgree(e) {
    o.Z.dispatch({
      type: "GUILD_NSFW_AGREE",
      guildId: e
    })
  },
  nsfwReturnToSafety(e) {
    if ((0, _.cn)() && !(0, E.JH)()) {
      let e = (0, d.D)();
      if ((null == e ? void 0 : e.isReady()) !== !0) return;
      for (null != (0, c.bv)(e.getCurrentRoute()) && e.goBack();;) {
        let t = (0, c.kf)(e.getCurrentRoute());
        if (null == t) break;
        let n = f.Z.getChannel(t.params.channelId);
        if (null == n || !n.isNSFW()) break;
        e.goBack()
      }
      return
    }
    if (null == e) {
      (0, h.uL)(M.Z5c.FRIENDS);
      return
    }
    let t = A.ZP.getDefaultChannel(e);
    null == t || t.isNSFW() ? (0, h.uL)(M.Z5c.FRIENDS) : (0, h.uL)(M.Z5c.CHANNEL(e, t.id))
  },
  escapeToDefaultChannel(e) {
    let t = A.ZP.getDefaultChannel(e);
    null != t ? (0, h.uL)(M.Z5c.CHANNEL(e, t.id)) : (0, h.uL)(M.Z5c.FRIENDS)
  },
  async fetchApplications(e, t) {
    let n = {
      url: M.ANM.GUILD_APPLICATIONS(e),
      oldFormErrors: !0
    };
    null != t && (n.query = {
      channel_id: t
    });
    let i = (await s.tn.get(n)).body;
    o.Z.dispatch({
      type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
      guildId: e,
      applications: i
    })
  },
  async fetchGuildBansBatch(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      i = {
        limit: t
      };
    null != n && (i.after = n), await s.tn.get({
      url: M.ANM.GUILD_BANS(e),
      oldFormErrors: !0,
      query: i
    }).then(t => {
      o.Z.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
        bans: t.body,
        guildId: e
      })
    })
  },
  async searchGuildBans(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
      r = {
        limit: i
      };
    null != n && n.length > 0 && (r.user_ids = n), null != t && t.trim().length > 0 && (r.query = t), await s.tn.get({
      url: M.ANM.GUILD_BANS_SEARCH(e),
      oldFormErrors: !0,
      query: r
    }).then(t => {
      o.Z.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
        bans: t.body,
        guildId: e
      })
    })
  },
  async fetchGuildBans(e) {
    await s.tn.get({
      url: M.ANM.GUILD_BANS(e),
      oldFormErrors: !0
    }).then(e => {
      o.Z.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS",
        bans: e.body
      })
    })
  },
  fetchGuildRoleConnectionsEligibility: (e, t) => s.tn.get({
    url: M.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
    oldFormErrors: !0
  }).then(e => {
    let {
      body: n
    } = e;
    return o.Z.dispatch({
      type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
      roleId: t,
      roleConnectionEligibility: n
    }), n
  }),
  async assignGuildRoleConnection(e, t) {
    await s.tn.post({
      url: M.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
      oldFormErrors: !0
    })
  },
  async unassignGuildRoleConnection(e, t) {
    await s.tn.post({
      url: M.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
      oldFormErrors: !0
    })
  },
  getGuildRoleConnectionsConfigurations: async e => (await s.tn.get({
    url: M.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
    oldFormErrors: !0
  })).body
}