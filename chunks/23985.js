"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("446674"),
  o = s("1017"),
  u = s("102985"),
  d = s("697218"),
  c = s("71010"),
  _ = s("552712"),
  E = s("698041"),
  T = s("764206"),
  I = s("271560"),
  f = s("760936"),
  S = s("697092"),
  R = s("782340"),
  m = s("250244");
class A extends r.Component {
  renderReasons(e, t, s) {
    return 0 === e.length && 0 === t.length ? null : (0, a.jsx)("div", {
      className: m.section,
      children: (0, a.jsxs)("div", {
        className: m.sectionContent,
        children: [e.map(e => (0, a.jsx)("div", {
          className: m.unit,
          children: (0, a.jsx)(f.default, {
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
      hidePersonalInformation: r,
      className: i
    } = this.props;
    if (0 === e.length && 0 === t.length && null == s.staffNotes) return null;
    let l = this.getReviewToRender();
    return (0, a.jsxs)("div", {
      className: n(m.root, i),
      children: [(0, a.jsx)("div", {
        className: m.header,
        children: R.default.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
      }), this.renderReasons(e, t, r), null != l ? (0, a.jsx)(S.default, {
        data: l,
        className: m.review
      }) : null]
    })
  }
}
var N = l.default.connectStores([_.default, d.default, E.default, o.default, c.default, u.default], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, I.getSocialRecommendationReasons)(t.id, _.default, d.default, o.default, c.default),
    nonSocialReasons: (0, I.getNonSocialRecommendationReasons)(t.id, _.default, E.default),
    hidePersonalInformation: u.default.hidePersonalInformation
  }
})(A)