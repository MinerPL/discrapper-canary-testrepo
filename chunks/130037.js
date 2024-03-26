"use strict";
t.r(n), t.d(n, {
  useTrackMemberSearchUsed: function() {
    return _
  },
  useTrackMemberFilterRolesUsed: function() {
    return m
  },
  MemberSafetyFlagType: function() {
    return u
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return M
  },
  ModerationActionType: function() {
    return r
  },
  useTrackModerationAction: function() {
    return T
  },
  trackMembersPageViewed: function() {
    return h
  }
});
var i, l, u, r, a = t("884691"),
  o = t("812204"),
  d = t("716241"),
  s = t("271938"),
  c = t("599110"),
  f = t("49111");

function E(e, n, t) {
  var i;
  let l = {
    ...n,
    ...(0, d.collectGuildAnalyticsMetadata)(null !== (i = n.guild_id) && void 0 !== i ? i : t)
  };
  c.default.track(e, l)
}

function _(e) {
  let n = a.useCallback(n => {
    ! function(e) {
      let n = {
        guild_id: e,
        location: o.default.MEMBER_SAFETY_PAGE
      };
      E(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, n)
    }(e)
  }, [e]);
  return n
}

function m(e) {
  let n = a.useCallback(n => {
    ! function(e, n) {
      let t = {
        selected_role_count: n.size,
        guild_id: e,
        location: o.default.MEMBER_SAFETY_PAGE
      };
      E(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, t)
    }(e, n)
  }, [e]);
  return n
}(i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function M(e) {
  let n = a.useCallback(n => {
    ! function(e, n) {
      let t = {
        flag_type: n,
        guild_id: e,
        location: o.default.MEMBER_SAFETY_PAGE
      };
      E(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, t)
    }(e, n)
  }, [e]);
  return n
}

function T(e, n) {
  let {
    location: t,
    targetUserId: i,
    targets: l,
    locations: u
  } = n, r = a.useCallback(n => {
    let r = {
      action_type: n,
      mod_user_id: s.default.getId(),
      guild_id: e,
      location: t,
      locations: u,
      target_user_id: null != i ? i : void 0,
      targets: null != l ? l : void 0
    };
    E(f.AnalyticEvents.MODERATION_ACTION, r)
  }, [e, t, i, l, u]);
  return r
}

function h(e, n) {
  E(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: n
  })
}(l = r || (r = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"