"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("442837"),
  o = s("649974"),
  u = s("246946"),
  d = s("594174"),
  c = s("525395"),
  _ = s("55563"),
  E = s("551428"),
  T = s("912739"),
  I = s("73346"),
  R = s("733789"),
  S = s("4962"),
  f = s("689938"),
  m = s("466534");
class N extends i.Component {
  renderReasons(e, t, s) {
    return 0 === e.length && 0 === t.length ? null : (0, a.jsx)("div", {
      className: m.section,
      children: (0, a.jsxs)("div", {
        className: m.sectionContent,
        children: [e.map(e => (0, a.jsx)("div", {
          className: m.unit,
          children: (0, a.jsx)(R.default, {
            reason: e,
            hidePersonalInformation: s
          })
        }, e.type)), t.map(e => (0, a.jsx)("div", {
          className: m.unit,
          children: (0, a.jsx)(T.default, {
            reason: e
          })
        }, e.type))]
      })
    })
  }
  getReviewToRender() {
    let {
      storeListing: e
    } = this.props;
    return null != e.staffNotes ? {
      type: S.default.Types.STAFF_NOTES,
      staffNotes: e.staffNotes
    } : null
  }
  render() {
    let {
      socialReasons: e,
      nonSocialReasons: t,
      storeListing: s,
      hidePersonalInformation: i,
      className: r
    } = this.props;
    if (0 === e.length && 0 === t.length && null == s.staffNotes) return null;
    let l = this.getReviewToRender();
    return (0, a.jsxs)("div", {
      className: n()(m.root, r),
      children: [(0, a.jsx)("div", {
        className: m.header,
        children: f.default.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
      }), this.renderReasons(e, t, i), null != l ? (0, a.jsx)(S.default, {
        data: l,
        className: m.review
      }) : null]
    })
  }
}
t.default = l.default.connectStores([_.default, d.default, E.default, o.default, c.default, u.default], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, I.getSocialRecommendationReasons)(t.id, _.default, d.default, o.default, c.default),
    nonSocialReasons: (0, I.getNonSocialRecommendationReasons)(t.id, _.default, E.default),
    hidePersonalInformation: u.default.hidePersonalInformation
  }
})(N)