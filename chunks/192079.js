t.d(e, {
  ER: function() {
return _;
  },
  kk: function() {
return s;
  },
  s$: function() {
return E;
  }
}), t(724458), t(47120), t(392711);
var i = t(19780),
  c = t(5192),
  a = t(700785),
  r = t(427679),
  l = t(157925),
  u = t(981631),
  d = t(71080),
  o = t(689938);

function _(n, e, t, i) {
  let a = e[0],
r = c.ZP.getName(n, t, a),
l = null != i ? i : e.length;
  return 1 === l && null != a ? r : null == a ? o.Z.Messages.SPEAKING_COUNT.format({
count: l
  }) : o.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
name: r,
count: l - 1
  });
}

function s(n, e) {
  switch (n) {
case d.aC.OWNER:
  return o.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
case d.aC.ADMINISTRATOR:
  return o.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
case d.aC.MEMBER:
case d.aC.ROLE:
  return e ? o.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
case d.aC.EMPTY_STATE:
  }
  return null;
}

function E(n) {
  let e = r.Z.getStageInstanceByChannel(n.id);
  return {
channel_id: n.id,
guild_id: n.guild_id,
topic: null == e ? void 0 : e.topic,
media_session_id: i.Z.getMediaSessionId(),
request_to_speak_state: a.Uu(u.Plq.REQUEST_TO_SPEAK, n) ? l.BM.EVERYONE : l.BM.NO_ONE,
stage_instance_id: null == e ? void 0 : e.id
  };
}