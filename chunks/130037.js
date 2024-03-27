"use strict";
l.r(t), l.d(t, {
  useTrackMemberSearchUsed: function() {
    return A
  },
  useTrackMemberFilterRolesUsed: function() {
    return N
  },
  MemberSafetyFlagType: function() {
    return i
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return M
  },
  ModerationActionType: function() {
    return u
  },
  useTrackModerationAction: function() {
    return f
  },
  trackMembersPageViewed: function() {
    return v
  }
});
var n, a, i, u, s = l("884691"),
  r = l("812204"),
  o = l("716241"),
  d = l("271938"),
  c = l("599110"),
  _ = l("49111");

function E(e, t, l) {
  var n;
  let a = {
    ...t,
    ...(0, o.collectGuildAnalyticsMetadata)(null !== (n = t.guild_id) && void 0 !== n ? n : l)
  };
  c.default.track(e, a)
}

function A(e) {
  let t = s.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      E(_.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e]);
  return t
}

function N(e) {
  let t = s.useCallback(t => {
    ! function(e, t) {
      let l = {
        selected_role_count: t.size,
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      E(_.AnalyticEvents.MOD_DASH_FILTER_ROLES, l)
    }(e, t)
  }, [e]);
  return t
}(n = i || (i = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", n.COMMUNICATION_DISABLED = "communication_disabled", n.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", n.USERNAME_QUARANTINED = "username_quarantined";

function M(e) {
  let t = s.useCallback(t => {
    ! function(e, t) {
      let l = {
        flag_type: t,
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      E(_.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, l)
    }(e, t)
  }, [e]);
  return t
}

function f(e, t) {
  let {
    location: l,
    targetUserId: n,
    targets: a,
    locations: i
  } = t, u = s.useCallback(t => {
    let u = {
      action_type: t,
      mod_user_id: d.default.getId(),
      guild_id: e,
      location: l,
      locations: i,
      target_user_id: null != n ? n : void 0,
      targets: null != a ? a : void 0
    };
    E(_.AnalyticEvents.MODERATION_ACTION, u)
  }, [e, l, n, a, i]);
  return u
}

function v(e, t) {
  E(_.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(a = u || (u = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"