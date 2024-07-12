t.d(n, {
  BG: function() {
return f;
  },
  aY: function() {
return r;
  },
  dW: function() {
return R;
  },
  gm: function() {
return M;
  },
  h1: function() {
return g;
  },
  jQ: function() {
return u;
  },
  sE: function() {
return A;
  }
});
var l, i, r, u, o = t(470079),
  c = t(100527),
  a = t(367907),
  d = t(314897),
  _ = t(626135),
  s = t(981631);

function E(e, n, t) {
  var l;
  let i = {
...n,
...(0, a.hH)(null !== (l = n.guild_id) && void 0 !== l ? l : t)
  };
  _.default.track(e, i);
}

function M(e) {
  return o.useCallback(n => {
! function(e) {
  let n = {
    guild_id: e,
    location: c.Z.MEMBER_SAFETY_PAGE
  };
  E(s.rMx.MOD_DASH_SEARCH_MEMBERS, n);
}(e);
  }, [e]);
}

function f(e) {
  return o.useCallback(n => {
! function(e, n) {
  let t = {
    selected_role_count: n.size,
    guild_id: e,
    location: c.Z.MEMBER_SAFETY_PAGE
  };
  E(s.rMx.MOD_DASH_FILTER_ROLES, t);
}(e, n);
  }, [e]);
}
(l = r || (r = {})).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity', l.COMMUNICATION_DISABLED = 'communication_disabled', l.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity', l.USERNAME_QUARANTINED = 'username_quarantined';

function R(e) {
  return o.useCallback(n => {
! function(e, n) {
  let t = {
    flag_type: n,
    guild_id: e,
    location: c.Z.MEMBER_SAFETY_PAGE
  };
  E(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
}(e, n);
  }, [e]);
}

function A(e, n) {
  let {
location: t,
targetUserId: l,
targets: i,
locations: r
  } = n;
  return o.useCallback(n => {
let u = {
  action_type: n,
  mod_user_id: d.default.getId(),
  guild_id: e,
  location: t,
  locations: r,
  target_user_id: null != l ? l : void 0,
  targets: null != i ? i : void 0
};
E(s.rMx.MODERATION_ACTION, u);
  }, [
e,
t,
l,
i,
r
  ]);
}

function g(e, n) {
  E(s.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
guild_id: e,
location: n
  });
}
(i = u || (u = {})).BAN = 'ban', i.KICK = 'kick', i.MUTE = 'mute', i.TIMEOUT = 'timeout', i.ADD_ROLE = 'add_role', i.REMOVE_ROLE = 'remove_role', i.COPY_ID = 'copy_id', i.CHANGE_NICKNAME = 'change_nickname';