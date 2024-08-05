var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(649974),
  c = n(246946),
  d = n(594174),
  u = n(525395),
  _ = n(55563),
  h = n(551428),
  E = n(912739),
  I = n(73346),
  m = n(733789),
  g = n(4962),
  p = n(689938),
  T = n(670257);
class S extends a.Component {
  renderReasons(e, t, n) {
return 0 === e.length && 0 === t.length ? null : (0, i.jsx)('div', {
  className: T.section,
  children: (0, i.jsxs)('div', {
    className: T.sectionContent,
    children: [
      e.map(e => (0, i.jsx)('div', {
        className: T.unit,
        children: (0, i.jsx)(m.Z, {
          reason: e,
          hidePersonalInformation: n
        })
      }, e.type)),
      t.map(e => (0, i.jsx)('div', {
        className: T.unit,
        children: (0, i.jsx)(E.Z, {
          reason: e
        })
      }, e.type))
    ]
  })
});
  }
  getReviewToRender() {
let {
  storeListing: e
} = this.props;
return null != e.staffNotes ? {
  type: g.Z.Types.STAFF_NOTES,
  staffNotes: e.staffNotes
} : null;
  }
  render() {
let {
  socialReasons: e,
  nonSocialReasons: t,
  storeListing: n,
  hidePersonalInformation: a,
  className: s
} = this.props;
if (0 === e.length && 0 === t.length && null == n.staffNotes)
  return null;
let l = this.getReviewToRender();
return (0, i.jsxs)('div', {
  className: r()(T.root, s),
  children: [
    (0, i.jsx)('div', {
      className: T.header,
      children: p.Z.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
    }),
    this.renderReasons(e, t, a),
    null != l ? (0, i.jsx)(g.Z, {
      data: l,
      className: T.review
    }) : null
  ]
});
  }
}
t.Z = l.ZP.connectStores([
  _.Z,
  d.default,
  h.Z,
  o.Z,
  u.Z,
  c.Z
], e => {
  let {
sku: t
  } = e;
  return {
socialReasons: (0, I.Gg)(t.id, _.Z, d.default, o.Z, u.Z),
nonSocialReasons: (0, I.Ww)(t.id, _.Z, h.Z),
hidePersonalInformation: c.Z.hidePersonalInformation
  };
})(S);