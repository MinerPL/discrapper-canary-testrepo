"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("805519"),
  r = n("246364"),
  o = n("705563"),
  u = n("594174"),
  d = n("346656"),
  c = n("967128"),
  f = n("689938"),
  h = n("560998");

function m(e) {
  var t;
  let {
    joinRequest: n,
    guild: i
  } = e, o = (0, l.useStateFromStores)([u.default], () => u.default.getUser(n.userId));
  return (0, a.jsxs)("div", {
    className: h.summaryContainer,
    children: [(0, a.jsxs)("div", {
      className: h.summaryHeader,
      children: [null != i && (0, a.jsxs)("div", {
        className: h.summaryHeaderClanInfo,
        children: [(0, a.jsx)(d.default, {
          guild: i,
          active: !0,
          size: d.default.Sizes.SMOL,
          className: h.guildIcon
        }), (0, a.jsx)(s.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: i.name
        })]
      }), null != o && (0, a.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: f.default.Messages.MEMBER_VERIFICATION_USERS_APPLICATION.format({
          username: o.globalName
        })
      })]
    }), null === (t = n.formResponses) || void 0 === t ? void 0 : t.filter(e => e.field_type !== r.VerificationFormFieldTypes.TERMS).map(e => {
      let t = e.field_type === r.VerificationFormFieldTypes.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("hr", {
          className: h.summarySeparator
        }), (0, a.jsxs)("div", {
          className: h.formResponseContainer,
          children: [(0, a.jsx)(s.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: e.label
          }), (0, a.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: t
          })]
        })]
      })
    })]
  })
}

function p(e) {
  let {
    channel: t
  } = e, {
    loading: n,
    joinRequest: l,
    joinRequestGuild: r
  } = (0, i.default)(t.id);
  return (0, a.jsx)(c.default, {
    channelId: t.id,
    className: h.container,
    children: (0, a.jsx)(c.EmptyMessageBody, {
      children: null != l && null != l.formResponses ? (0, a.jsxs)("div", {
        className: h.formContainer,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(m, {
            guild: r,
            joinRequest: l
          })
        }), (0, a.jsx)(o.default, {
          channelId: t.id,
          showProfile: !0
        })]
      }) : n ? (0, a.jsx)(s.Spinner, {}) : null
    })
  })
}