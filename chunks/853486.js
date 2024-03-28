"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  n = s("465670"),
  u = s("964309"),
  r = s("502568"),
  o = s("51144"),
  d = s("246364"),
  c = s("666233"),
  E = s("50662"),
  I = s("395716"),
  f = s("673885"),
  T = s("981631"),
  _ = s("689938"),
  S = s("35913");
t.default = function(e) {
  let {
    guild: t,
    guildJoinRequest: s,
    guildJoinRequestUser: R,
    onClose: N
  } = e, A = l.useMemo(() => {
    var e;
    return null !== (e = s.formResponses) && void 0 !== e ? e : []
  }, [s.formResponses]), M = t.hasFeature(T.GuildFeatures.CLAN) && s.applicationStatus === d.GuildJoinRequestApplicationStatuses.SUBMITTED;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(r.default, {
      toolbar: (0, a.jsx)(r.default.Icon, {
        icon: n.default,
        onClick: N,
        tooltip: _.default.Messages.CLOSE
      }),
      children: [(0, a.jsx)(r.default.Icon, {
        icon: u.default,
        disabled: !0,
        "aria-label": _.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: o.default.getName(R)
      })]
    }), (0, a.jsx)(E.default, {
      guildJoinRequest: s,
      guildJoinRequestUser: R,
      guild: t
    }), (0, a.jsxs)(i.Scroller, {
      children: [(0, a.jsxs)("div", {
        className: S.container,
        children: [(0, a.jsx)(f.default, {
          user: R,
          guildId: t.id
        }), M && (0, a.jsx)(I.default, {
          joinRequest: s
        })]
      }), (0, a.jsx)("div", {
        className: S.disabledFormRenderer,
        children: (0, a.jsx)(c.default, {
          guildId: t.id,
          formFields: A,
          user: R
        })
      })]
    })]
  })
}