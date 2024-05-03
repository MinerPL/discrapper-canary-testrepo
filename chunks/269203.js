"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("47120"), n("773603");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("693546"),
  o = n("826581"),
  u = n("246364"),
  d = n("937111"),
  c = n("705563"),
  f = n("430824"),
  h = n("496675"),
  m = n("594174"),
  p = n("346656"),
  E = n("709054"),
  C = n("967128"),
  g = n("981631"),
  S = n("689938"),
  _ = n("17057");

function T(e) {
  var t;
  let {
    joinRequest: n,
    guild: l
  } = e, r = (0, s.useStateFromStores)([m.default], () => m.default.getUser(n.userId));
  return (0, a.jsxs)("div", {
    className: _.summaryContainer,
    children: [(0, a.jsxs)("div", {
      className: _.summaryHeader,
      children: [null != l && (0, a.jsxs)("div", {
        className: _.summaryHeaderClanInfo,
        children: [(0, a.jsx)(p.default, {
          guild: l,
          active: !0,
          size: p.default.Sizes.SMOL,
          className: _.guildIcon
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: l.name
        })]
      }), null != r && (0, a.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: S.default.Messages.MEMBER_VERIFICATION_USERS_APPLICATION.format({
          username: r.globalName
        })
      })]
    }), null === (t = n.formResponses) || void 0 === t ? void 0 : t.filter(e => e.field_type !== u.VerificationFormFieldTypes.TERMS).map(e => {
      let t = e.field_type === u.VerificationFormFieldTypes.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("hr", {
          className: _.summarySeparator
        }), (0, a.jsxs)("div", {
          className: _.formResponseContainer,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: e.label
          }), (0, a.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: t
          })]
        })]
      })
    })]
  })
}

function I(e) {
  let {
    channel: t
  } = e, [n, u] = l.useState(!1), [m, p] = l.useState(!1), S = E.default.cast(t.id), {
    joinRequest: I,
    guild: A
  } = (0, s.useStateFromStoresObject)([o.default, d.default, f.default, h.default], () => {
    var e;
    let t = o.default.getRequest(S);
    if (null == t) return {
      joinRequest: null,
      isModmin: !1,
      guild: null
    };
    let n = null !== (e = f.default.getGuild(t.guildId)) && void 0 !== e ? e : d.default.getJoinRequestGuild(t.guildId);
    return {
      joinRequest: t,
      isModmin: null != n && h.default.can(g.Permissions.KICK_MEMBERS, n),
      guild: n
    }
  });
  return l.useEffect(() => {
    null == A && !m && (p(!0), r.default.fetchRequestToJoinGuilds())
  }, [A, m]), l.useEffect(() => {
    null == I && (u(!0), r.default.fetchGuildJoinRequest(S).finally(() => {
      u(!1)
    }))
  }, [I, S]), (0, a.jsx)(C.default, {
    channelId: t.id,
    className: _.container,
    children: (0, a.jsx)(C.EmptyMessageBody, {
      children: null != I && null != I.formResponses ? (0, a.jsxs)("div", {
        className: _.formContainer,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(T, {
            guild: A,
            joinRequest: I
          })
        }), (0, a.jsx)(c.default, {
          channelId: t.id,
          showProfile: !0
        })]
      }) : n ? (0, a.jsx)(i.Spinner, {}) : null
    })
  })
}