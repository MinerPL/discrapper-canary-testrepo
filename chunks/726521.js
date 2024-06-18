"use strict";
n.d(t, {
  J7: function() {
    return R
  },
  JM: function() {
    return m
  },
  WL: function() {
    return f
  },
  ak: function() {
    return T
  },
  d$: function() {
    return S
  },
  eE: function() {
    return O
  },
  ic: function() {
    return h
  },
  lt: function() {
    return E
  },
  pX: function() {
    return A
  },
  sq: function() {
    return I
  },
  wk: function() {
    return C
  },
  zd: function() {
    return N
  }
});
var i = n(367907),
  r = n(427679),
  s = n(23750),
  o = n(598077),
  a = n(91156),
  l = n(545197),
  u = n(82554),
  _ = n(185625),
  d = n(443599),
  c = n(981631);

function E(e, t) {
  p(u.b.GUILD_DISCOVERY, {
    guild_id: e.id
  }), (0, d.m)({
    name: u.b.GUILD_DISCOVERY,
    record: e
  }, {}, t)
}

function I(e, t) {
  p(u.b.GUILD_DIRECTORY_ENTRY, {
    channel_id: e.channelId,
    guild_id: e.guildId
  }), (0, d.m)({
    name: u.b.GUILD_DIRECTORY_ENTRY,
    record: e
  }, {}, t)
}

function T(e, t, n) {
  let i;
  p(u.b.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  });
  let r = (0, a.p)(t),
    s = (0, l.l)(t);
  s && r ? i = "6a_spam_reorder_with_dislikes_experiment" : s ? i = "6b_spam_reorder_experiment" : r && (i = "5_dislike_experiment"), (0, d.m)({
    name: u.b.MESSAGE,
    record: e
  }, {
    variant: i
  }, n)
}

function h(e, t) {
  let n = r.Z.getStageInstanceByChannel(e.id);
  if (null != n) p(u.b.STAGE_CHANNEL, {
    stage_instance_id: n.id,
    channel_id: n.channel_id,
    guild_id: n.guild_id
  }), (0, d.m)({
    name: u.b.STAGE_CHANNEL,
    record: n
  }, {}, t)
}

function S(e, t) {
  var n;
  p(u.b.GUILD_SCHEDULED_EVENT, {
    guild_scheduled_event_id: e.id,
    guild_id: e.guild_id,
    channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
  }), (0, d.m)({
    name: u.b.GUILD_SCHEDULED_EVENT,
    record: e
  }, {}, t)
}

function f(e, t) {
  p(u.b.FIRST_DM, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, d.m)({
    name: u.b.FIRST_DM,
    record: e
  }, {}, t, void 0, !1)
}
async function N(e, t) {
  try {
    await (0, _.ox)({
      name: u.b.FIRST_DM,
      record: e
    }, {
      variant: "_first_dm_ham_v1"
    }), null == t || t()
  } catch {}
}

function A(e, t, n) {
  p(u.b.USER, {
    reported_user_id: e.id
  }), (0, d.m)({
    name: u.b.USER,
    record: e,
    contextualGuildId: t
  }, {}, n, void 0, !1)
}

function m(e, t) {
  let n = new o.Z({});
  p(u.B.USER, {
    reported_user_id: n.id
  }), (0, d.m)({
    name: u.B.USER,
    record: n
  }, {}, t, void 0, !1, !1, e)
}

function O(e, t) {
  let n = new s.ZP({});
  p(u.B.MESSAGE, {
    message_id: void 0,
    channel_id: void 0
  }), (0, d.m)({
    name: u.B.MESSAGE,
    record: n
  }, {}, t, void 0, !1, !1, e)
}
async function R(e, t, n) {
  try {
    await (0, _.ox)({
      name: u.b.MESSAGE,
      record: e
    }, {
      variant: "safety_alerts_headless_v1"
    }), null == t || t()
  } catch {
    null == n || n()
  }
}

function C(e, t) {
  p(u.b.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, d.m)({
    name: u.b.MESSAGE,
    record: e
  }, {
    variant: "safety_alerts_v1"
  }, t)
}

function p(e, t) {
  i.ZP.trackWithMetadata(c.rMx.IAR_MODAL_OPEN, {
    report_type: e,
    ...t
  })
}