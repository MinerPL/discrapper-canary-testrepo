"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120"), n("773603");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("933557"),
  o = n("693546"),
  u = n("826581"),
  d = n("246364"),
  c = n("666233"),
  f = n("360328"),
  h = n("430824"),
  m = n("496675"),
  p = n("709054"),
  E = n("967128"),
  C = n("981631"),
  g = n("689938"),
  S = n("591373");

function _(e) {
  var t;
  let {
    channel: n
  } = e, [_, T] = l.useState(!1), I = p.default.cast(n.id), {
    joinRequest: A,
    isModmin: v
  } = (0, s.useStateFromStoresObject)([u.default, h.default, m.default], () => {
    let e = u.default.getRequest(I),
      t = h.default.getGuild(null == e ? void 0 : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && m.default.can(C.Permissions.KICK_MEMBERS, t)
    }
  }), {
    approveRequest: N,
    rejectRequest: x,
    submitting: M
  } = (0, f.useJoinRequestButtonActions)(null == A ? void 0 : A.guildId, null == A ? void 0 : A.userId);
  l.useEffect(() => {
    null == A && (T(!0), o.default.fetchGuildJoinRequest(I).finally(() => {
      T(!1)
    }))
  }, [A, I]);
  let R = null !== (t = (0, r.default)(n)) && void 0 !== t ? t : "";
  return (0, a.jsxs)(E.default, {
    channelId: n.id,
    className: S.container,
    children: [(0, a.jsx)(E.EmptyMessageHeader, {
      children: R
    }), (0, a.jsx)(E.EmptyMessageBody, {
      children: null != A && null != A.formResponses ? (0, a.jsxs)("div", {
        className: S.formContainer,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(c.default, {
            guildId: A.guildId,
            formFields: A.formResponses.filter(e => e.field_type !== d.VerificationFormFieldTypes.TERMS),
            showRequirements: !1
          })
        }), v && A.applicationStatus === d.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
          className: S.buttons,
          children: [(0, a.jsx)(i.Button, {
            color: i.Button.Colors.GREEN,
            submitting: M,
            disabled: A.applicationStatus !== d.GuildJoinRequestApplicationStatuses.SUBMITTED,
            onClick: N,
            children: g.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
          }), (0, a.jsx)(i.Button, {
            color: i.Button.Colors.RED,
            onClick: x,
            disabled: M || A.applicationStatus !== d.GuildJoinRequestApplicationStatuses.SUBMITTED,
            children: g.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
          })]
        })]
      }) : _ ? (0, a.jsx)(i.Spinner, {}) : null
    })]
  })
}