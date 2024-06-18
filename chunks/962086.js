"use strict";
n.d(t, {
  Zm: function() {
    return N
  },
  aq: function() {
    return C
  },
  iD: function() {
    return f
  },
  mL: function() {
    return A
  },
  og: function() {
    return R
  },
  zS: function() {
    return O
  }
}), n(47120);
var i = n(570140),
  r = n(367907),
  s = n(703656),
  o = n(592125),
  a = n(984933),
  l = n(271383),
  u = n(430824),
  _ = n(496675),
  d = n(944486),
  c = n(9156),
  E = n(626135),
  I = n(160404),
  T = n(225675),
  h = n(981631),
  S = n(176505);

function f(e, t) {
  E.default.track(h.rMx.VIEW_AS_ROLES_SELECTED, {
    num_roles: Object.keys(t.roles).length,
    ...(0, r.hH)(e),
    is_viewing_as_member: t.type === T.z.NEW_MEMBER
  }), i.Z.dispatch({
    type: "IMPERSONATE_UPDATE",
    guildId: e,
    data: t
  }), m(e)
}

function N(e, t) {
  let n = I.Z.getData(e);
  null != n && n.type === t.type && (E.default.track(h.rMx.VIEW_AS_ROLES_SELECTED, {
    num_roles: Object.keys(n.roles).length,
    ...(0, r.hH)(e),
    is_viewing_as_member: n.type === T.z.NEW_MEMBER
  }), i.Z.dispatch({
    type: "IMPERSONATE_UPDATE",
    guildId: e,
    data: {
      ...n,
      ...t
    }
  }), m(e))
}

function A(e) {
  i.Z.dispatch({
    type: "IMPERSONATE_STOP",
    guildId: e
  })
}

function m(e) {
  let t = d.Z.getChannelId(e),
    n = o.Z.getChannel(t);
  if (!(null != t && (0, S.AB)(t)) && !_.Z.can(h.Plq.VIEW_CHANNEL, n)) {
    let t = a.ZP.getDefaultChannel(e);
    null != t && (0, s.uL)(h.Z5c.CHANNEL(e, t.id))
  }
}

function O(e, t, n) {
  let i = new Set(c.ZP.getOptedInChannels(e));
  t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), N(e, {
    type: T.z.NEW_MEMBER,
    optInChannels: i
  })
}

function R(e, t) {
  let n = u.Z.getRoles(e);
  ! function(e, t) {
    let n = [...a.ZP.getSelectableChannelIds(e), ...a.ZP.getVocalChannelIds(e)],
      i = Array.from(t);
    a.ZP.addConditionalChangeListener(() => {
      let t = l.ZP.getSelfMember(e);
      if (null == t) return !1;
      if (i.some(e => !t.roles.includes(e))) return !0;
      let r = [...a.ZP.getSelectableChannelIds(e), ...a.ZP.getVocalChannelIds(e)].filter(e => !n.includes(e));
      return r.length > 0 && O(e, r, []), !1
    })
  }(e, t);
  let i = {};
  t.forEach(e => i[e] = n[e]), N(e, {
    type: T.z.NEW_MEMBER,
    roles: i
  })
}

function C(e, t) {
  N(e, {
    type: T.z.NEW_MEMBER,
    ...t
  })
}