var r = n(990547),
  i = n(544891),
  a = n(570140),
  o = n(37234),
  s = n(710845),
  l = n(655006),
  u = n(408987),
  c = n(962086),
  d = n(160404),
  _ = n(41776),
  E = n(314897),
  f = n(271383),
  h = n(430824),
  p = n(546796),
  m = n(573261),
  I = n(999382),
  T = n(981631),
  g = n(308083),
  S = n(689938);
let A = new s.Z('GuildSettingsActionCreators'),
  N = {
init(e, t, n, r) {
  a.Z.dispatch({
    type: 'GUILD_SETTINGS_INIT',
    guildId: e,
    section: t,
    subsection: r,
    location: n
  });
},
async open(e, t, r, i) {
  var a;
  await Promise.all([
    n.e('96427'),
    n.e('23755'),
    n.e('89350'),
    n.e('11751'),
    n.e('29549'),
    n.e('33053'),
    n.e('50654'),
    n.e('7654'),
    n.e('31605'),
    n.e('65840'),
    n.e('73331'),
    n.e('44156'),
    n.e('90508'),
    n.e('71700'),
    n.e('85552'),
    n.e('58227'),
    n.e('3084'),
    n.e('10926'),
    n.e('43568'),
    n.e('1187'),
    n.e('55400'),
    n.e('92557'),
    n.e('36439'),
    n.e('39557')
  ]).then(n.bind(n, 994763)), (null === (a = h.Z.getGuild(e)) || void 0 === a ? void 0 : a.hasFeature(T.oNc.COMMUNITY)) && (t === T.pNK.GUILD_AUTOMOD && (t = T.pNK.SAFETY, i = T.KsC.SAFETY_AUTOMOD), t === T.pNK.MEMBER_VERIFICATION && (t = T.pNK.SAFETY, i = T.KsC.SAFETY_DM_AND_SPAM_PROTECTION)), N.init(e, t, r, i);
  (0, o.jN)(T.S9g.GUILD_SETTINGS);
},
close() {
  a.Z.dispatch({
    type: 'GUILD_SETTINGS_CLOSE'
  });
},
saveRouteStack(e) {
  a.Z.dispatch({
    type: 'GUILD_SETTINGS_SAVE_ROUTE_STACK',
    state: e
  });
},
setSection(e, t) {
  var n;
  let r = I.Z.getGuildId();
  null != r && ((null === (n = h.Z.getGuild(r)) || void 0 === n ? void 0 : n.hasFeature(T.oNc.COMMUNITY)) && (e === T.pNK.GUILD_AUTOMOD && (e = T.pNK.SAFETY, t = T.KsC.SAFETY_AUTOMOD), e === T.pNK.MEMBER_VERIFICATION && (e = T.pNK.SAFETY, t = T.KsC.SAFETY_DM_AND_SPAM_PROTECTION)), a.Z.dispatch({
    type: 'GUILD_SETTINGS_SET_SECTION',
    section: e,
    subsection: t
  }));
},
setSearchQuery(e) {
  a.Z.dispatch({
    type: 'GUILD_SETTINGS_SET_SEARCH_QUERY',
    searchQuery: e
  });
},
selectRole: (e, t) => a.Z.dispatch({
  type: 'GUILD_SETTINGS_ROLE_SELECT',
  roleId: e,
  searchQuery: t
}),
updateEmbed(e, t, n) {
  i.tn.patch({
    url: T.ANM.GUILD_WIDGET(e),
    body: {
      enabled: t,
      channel_id: n
    },
    oldFormErrors: !0
  }).then(t => {
    a.Z.dispatch({
      type: 'GUILD_SETTINGS_SET_WIDGET',
      guildId: e,
      enabled: t.body.enabled,
      channelId: t.body.channel_id
    });
  });
},
updateMFALevel(e) {
  let {
    guildId: t,
    level: n,
    isEnabled: r
  } = e;
  return (0, p.Z)(e => i.tn.post({
    url: T.ANM.GUILD_MFA(t),
    body: {
      level: n,
      ...e
    },
    oldFormErrors: !0
  }), {
    modalProps: {
      title: S.Z.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
      actionText: r ? S.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : S.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
    },
    checkEnabled: !1
  }).then(e => a.Z.dispatch({
    type: 'GUILD_SETTINGS_SET_MFA_SUCCESS',
    level: e.body.level
  }));
},
updateIcon(e, t) {
  i.tn.patch({
    url: T.ANM.GUILD(e),
    body: {
      icon: t
    },
    oldFormErrors: !0
  }).then(() => {
    a.Z.dispatch({
      type: 'GUILD_SETTINGS_UPDATE',
      icon: t
    }), u.Z.checkGuildTemplateDirty(e);
  }, e => a.Z.dispatch({
    type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
    errors: e.body
  }));
},
cancelChanges(e) {
  a.Z.dispatch({
    type: 'GUILD_SETTINGS_CANCEL_CHANGES',
    guildId: e
  });
},
updateGuild(e) {
  var t, n;
  let {
    safetyAlertsChannelId: r,
    clan: i,
    ...o
  } = e, s = {
    ...o
  };
  null != i && (s.clan = {
    ...null !== (t = s.clan) && void 0 !== t ? t : {},
    ...i
  });
  let u = I.Z.getGuildId();
  null != u && (null === (n = l.l.getCurrentConfig({
    guildId: u,
    location: 'be0372_1'
  })) || void 0 === n ? void 0 : n.enableRaidAlerts) && null != r && (s.safetyAlertsChannelId = r), a.Z.dispatch({
    type: 'GUILD_SETTINGS_UPDATE',
    ...s
  });
},
saveGuild(e, t) {
  let {
    name: n,
    description: r,
    icon: o,
    splash: s,
    banner: l,
    homeHeader: c,
    afkChannelId: d,
    afkTimeout: _,
    systemChannelId: E,
    verificationLevel: f,
    defaultMessageNotifications: h,
    explicitContentFilter: p,
    features: m,
    systemChannelFlags: I,
    preferredLocale: S,
    rulesChannelId: N,
    safetyAlertsChannelId: v,
    discoverySplash: O,
    publicUpdatesChannelId: R,
    premiumProgressBarEnabled: C,
    clan: y
  } = t, D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, L = {
    name: n,
    description: r,
    icon: o,
    splash: s,
    banner: l,
    home_header: c,
    features: m,
    preferred_locale: S,
    afk_channel_id: d,
    afk_timeout: _,
    system_channel_id: E,
    verification_level: f,
    default_message_notifications: h,
    explicit_content_filter: p,
    system_channel_flags: I,
    rules_channel_id: N,
    discovery_splash: O,
    public_updates_channel_id: R,
    safety_alerts_channel_id: v,
    ...null != C ? {
      premium_progress_bar_enabled: C
    } : null,
    clan: null != y ? (0, g.A9)(y) : y
  };
  return a.Z.dispatch({
    type: 'GUILD_SETTINGS_SUBMIT'
  }), i.tn.patch({
    url: T.ANM.GUILD(e),
    query: {
      for_discovery: D.isForDiscovery
    },
    body: L,
    oldFormErrors: !0
  }).then(t => {
    a.Z.dispatch({
      type: 'GUILD_SETTINGS_SUBMIT_SUCCESS',
      guild: t.body
    }), u.Z.checkGuildTemplateDirty(e);
  }, e => {
    if (a.Z.dispatch({
        type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
        errors: e.body
      }), A.error('Failed to save guild settings', {
        errors: e.body
      }), D.throwErr)
      throw e.body;
  });
},
updateGuildModeration: (e, t) => i.tn.patch({
  url: T.ANM.GUILD(e),
  body: {
    verification_level: t.verificationLevel,
    explicit_content_filter: t.explicitContentFilter
  },
  oldFormErrors: !0
}).then(t => (u.Z.checkGuildTemplateDirty(e), t)),
transferOwnership(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return (0, p.Z)(a => m.Z.patch({
    url: T.ANM.GUILD(e),
    body: {
      owner_id: t,
      code: i,
      ...a
    },
    oldFormErrors: !0,
    trackedActionData: {
      event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
      properties: {
        guild_id: e,
        verification_type: n
      }
    }
  }), {
    modalProps: {
      title: S.Z.Messages.TRANSFER_OWNERSHIP,
      actionText: S.Z.Messages.TRANSFER_OWNERSHIP
    },
    checkEnabled: !1
  });
},
sendTransferOwnershipPincode(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return m.Z.put({
    url: T.ANM.GUILD_PINCODE(e),
    oldFormErrors: !0,
    trackedActionData: {
      event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
      properties: {
        guild_id: e,
        is_resend: t
      }
    }
  });
},
deleteGuild: (e, t) => (0, p.Z)(t => i.tn.post({
  url: T.ANM.GUILD_DELETE(e),
  body: t,
  oldFormErrors: !0
}), {
  modalProps: {
    title: S.Z.Messages.DELETE_SERVER_TITLE.format({
      name: t
    }),
    actionText: S.Z.Messages.DELETE_SERVER,
    disallowBackupCodes: !0
  },
  checkEnabled: !1
}).then(() => {
  N.close();
}),
async leaveGuild(e) {
  await i.tn.del({
    url: T.ANM.GUILD_LEAVE(e),
    body: {
      lurking: _.Z.isLurking(e) || f.ZP.isCurrentUserGuest(e)
    },
    oldFormErrors: !0
  }), N.close();
},
async updateMemberRoles(e, t, n, r, o) {
  if (d.Z.isFullServerPreview(e) && t === E.default.getId()) {
    (0, c.og)(e, n);
    return;
  }
  await i.tn.patch({
    url: T.ANM.GUILD_MEMBER(e, t),
    body: {
      roles: n
    },
    oldFormErrors: !0
  }), r.forEach(n => a.Z.dispatch({
    type: 'GUILD_ROLE_MEMBER_ADD',
    guildId: e,
    roleId: n,
    userId: t
  })), o.forEach(n => a.Z.dispatch({
    type: 'GUILD_ROLE_MEMBER_REMOVE',
    guildId: e,
    roleId: n,
    userId: t
  }));
},
bulkAddMemberRoles: (e, t, n) => i.tn.patch({
  url: T.ANM.GUILD_ROLE_MEMBERS(e, t),
  body: {
    member_ids: n
  }
}).then(n => {
  a.Z.dispatch({
    type: 'GUILD_ROLE_MEMBER_BULK_ADD',
    guildId: e,
    roleId: t,
    added: n.body
  });
}),
updateRolesEditSection(e) {
  a.Z.dispatch({
    type: 'GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE',
    section: e
  });
},
enableIntegration: (e, t, n) => i.tn.post({
  url: T.ANM.GUILD_INTEGRATIONS(e),
  body: {
    type: t,
    id: n
  },
  oldFormErrors: !0
}),
disableIntegration: (e, t) => i.tn.del({
  url: T.ANM.GUILD_INTEGRATION(e, t),
  oldFormErrors: !0
}),
updateIntegration: (e, t, n, r, a) => i.tn.patch({
  url: T.ANM.GUILD_INTEGRATION(e, t),
  body: {
    expire_behavior: n,
    expire_grace_period: r,
    enable_emoticons: a
  },
  oldFormErrors: !0
}),
syncIntegration(e, t) {
  i.tn.post({
    url: T.ANM.GUILD_INTEGRATION_SYNC(e, t),
    oldFormErrors: !0
  });
}
  };
t.Z = N;