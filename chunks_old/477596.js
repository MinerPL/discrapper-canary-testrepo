"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("433426"),
  u = s("240760"),
  c = s("12013"),
  S = s("353802"),
  E = s("697218"),
  T = s("701909"),
  f = s("392409"),
  _ = s("49111"),
  m = s("782340"),
  g = s("384234");
class h extends n.PureComponent {
  renderIntroHeader() {
    let {
      houseMembership: e
    } = this.props;
    return null == e ? m.default.Messages.HYPESQUAD_HEADING : m.default.Messages.HYPESQUAD_HEADING_EXISTING_MEMBER
  }
  render() {
    let {
      houseMembership: e,
      isClaimed: t,
      isVerified: s
    } = this.props;
    return (0, a.jsxs)(o.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: g.intro,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xxl/semibold",
          className: g.introHeader,
          children: this.renderIntroHeader()
        }), (0, a.jsx)(o.Text, {
          variant: "text-lg/normal",
          children: m.default.Messages.HYPESQUAD_SUBHEADING
        })]
      }),
      children: [(0, a.jsx)(f.default, {
        className: g.verificationNotice,
        unclaimedNotice: m.default.Messages.HYPESQUAD_UNCLAIMED_ACCOUNT_NOTICE,
        unverifiedNotice: m.default.Messages.HYPESQUAD_UNVERIFIED_EMAIL_NOTICE
      }), (0, a.jsx)(u.default, {
        houseMembership: e,
        isClaimed: t,
        isVerified: s
      }), (0, a.jsx)(d.default, {}), (0, a.jsx)(c.default, {
        isHypeSquadOnlineMember: null != e
      }), (0, a.jsx)(o.Card, {
        className: g.attendeeCTA,
        children: m.default.Messages.HYPESQUAD_ATTENDEE_CTA.format({
          url: T.default.getArticleURL(_.HelpdeskArticles.PROFILE_BADGES)
        })
      })]
    })
  }
}
var N = r.default.connectStores([E.default, S.default], () => {
  let e = E.default.getCurrentUser();
  return i(null != e, "UserSettingsHypeSquad: currentUser cannot be undefined"), {
    houseMembership: S.default.getHouseMembership(),
    isClaimed: e.isClaimed(),
    isVerified: e.verified
  }
})(h)