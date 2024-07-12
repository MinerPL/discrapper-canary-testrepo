t.d(e, {
  $Y: function() {
return S;
  },
  JK: function() {
return M;
  },
  Je: function() {
return d;
  },
  T9: function() {
return R;
  },
  UE: function() {
return U;
  },
  Xx: function() {
return C;
  },
  mm: function() {
return L;
  },
  qY: function() {
return D;
  }
}), t(47120);
var _ = t(544891),
  E = t(570140),
  r = t(367907),
  i = t(430824),
  u = t(496675),
  A = t(823379),
  a = t(709054),
  o = t(177862),
  O = t(787824),
  T = t(226192),
  N = t(981631);

function I(n) {
  return {
type: n.type,
metadata: (0, O.X)(n.metadata)
  };
}

function l(n) {
  var e, t;
  let _ = (0, O.X)(n.triggerMetadata);
  return null != _ && delete _.keywordLists, {
id: n.id,
name: n.name,
guild_id: n.guildId,
event_type: n.eventType,
trigger_type: n.triggerType,
trigger_metadata: _,
actions: n.actions.filter(A.lm).map(I),
enabled: n.enabled,
creator_id: n.creatorId,
position: n.position,
exempt_channels: Array.from(null !== (e = n.exemptChannels) && void 0 !== e ? e : []),
exempt_roles: Array.from(null !== (t = n.exemptRoles) && void 0 !== t ? t : [])
  };
}

function s(n) {
  return {
type: n.type,
metadata: (0, O.C)(n.metadata)
  };
}

function c(n) {
  var e, t, _;
  let E = {
id: null !== (e = n.id) && void 0 !== e ? e : a.default.fromTimestamp(Date.now()),
name: n.name,
guildId: n.guild_id,
eventType: n.event_type,
triggerType: n.trigger_type,
triggerMetadata: (0, O.C)(n.trigger_metadata),
actions: n.actions.filter(A.lm).map(s),
enabled: n.enabled,
creatorId: n.creator_id,
position: n.position,
exemptChannels: new Set(null !== (t = n.exempt_channels) && void 0 !== t ? t : []),
exemptRoles: new Set(null !== (_ = n.exempt_roles) && void 0 !== _ ? _ : [])
  };
  return null != E.triggerMetadata && delete E.triggerMetadata.keywordLists, E;
}
async function D(n) {
  let e = l(n),
t = await _.tn.post({
  url: N.ANM.GUILD_AUTOMOD_VALIDATE_RULE(n.guildId),
  body: e
});
  return (0, O.C)(t.body);
}
async function M(n) {
  let e = l(n);
  return delete e.id, c((await _.tn.post({
url: N.ANM.GUILD_AUTOMOD_RULES(n.guildId),
body: e
  })).body);
}
async function d(n) {
  let e = l(n);
  return c((await _.tn.patch({
url: N.ANM.GUILD_AUTOMOD_RULE(n.guildId, n.id),
body: e
  })).body);
}
async function L(n, e) {
  return await _.tn.del({
url: N.ANM.GUILD_AUTOMOD_RULE(e, n)
  }), !0;
}
async function S(n) {
  let e = await _.tn.get({
url: N.ANM.GUILD_AUTOMOD_RULES(n)
  });
  return Array.isArray(e.body) ? e.body.map(c) : [];
}
async function C(n, e, t) {
  if (!!u.Z.can(N.Plq.MANAGE_MESSAGES, e))
await _.tn.post({
  url: N.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
  body: {
    message_id: n,
    channel_id: e.id,
    alert_action_type: t
  }
});
}

function U(n, e, t) {
  let E = i.Z.getGuild(n);
  if (null != E && !!u.Z.can(N.Plq.MANAGE_GUILD, E))
(0, T.UV)(() => {
  (0, r.yw)(N.rMx.GUILD_AUTOMOD_FEEDBACK, {
    feedback_type: o.x2.MENTION_RAID_REMOVE_RESTRICTION,
    decision_id: e
  }), _.tn.post({
    url: N.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(n)
  }), t();
});
}

function R(n) {
  E.Z.dispatch({
type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
guildId: n
  });
}