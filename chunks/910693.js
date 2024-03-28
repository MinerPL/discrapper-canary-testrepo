"use strict";
n.r(t), n.d(t, {
  MemberSafetyFlagType: function() {
    return u
  },
  ModerationActionType: function() {
    return l
  },
  trackMembersPageViewed: function() {
    return p
  },
  useTrackMemberFilterRolesUsed: function() {
    return _
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return I
  },
  useTrackMemberSearchUsed: function() {
    return T
  },
  useTrackModerationAction: function() {
    return S
  }
});
var i, a, u, l, d = n("470079"),
  r = n("100527"),
  s = n("367907"),
  o = n("314897"),
  c = n("626135"),
  E = n("981631");

function f(e, t, n) {
  var i;
  let a = {
    ...t,
    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
  };
  c.default.track(e, a)
}

function T(e) {
  return d.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      f(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e])
}

function _(e) {
  return d.useCallback(t => {
    ! function(e, t) {
      let n = {
        selected_role_count: t.size,
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      f(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(e, t)
  }, [e])
}(i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function I(e) {
  return d.useCallback(t => {
    ! function(e, t) {
      let n = {
        flag_type: t,
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      f(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(e, t)
  }, [e])
}

function S(e, t) {
  let {
    location: n,
    targetUserId: i,
    targets: a,
    locations: u
  } = t;
  return d.useCallback(t => {
    let l = {
      action_type: t,
      mod_user_id: o.default.getId(),
      guild_id: e,
      location: n,
      locations: u,
      target_user_id: null != i ? i : void 0,
      targets: null != a ? a : void 0
    };
    f(E.AnalyticEvents.MODERATION_ACTION, l)
  }, [e, n, i, a, u])
}

function p(e, t) {
  f(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(a = l || (l = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"