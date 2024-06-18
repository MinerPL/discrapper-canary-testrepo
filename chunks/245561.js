"use strict";
n.d(t, {
  GU: function() {
    return _
  },
  ZP: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(596454),
  l = n(889989),
  u = n(464656);

function _(e) {
  let t, {
    applicationId: n,
    storeListingBenefits: r,
    skuBenefits: o,
    className: a
  } = e;
  return null != r ? t = r.map(e => (0, i.jsx)(c, {
    applicationId: n,
    benefit: e,
    className: s()(u.__invalid_benefit, a)
  }, e.id)) : null != o && (t = o.map((e, t) => (0, i.jsx)(d, {
    benefit: e,
    className: s()(u.__invalid_benefit, a)
  }, t))), (0, i.jsx)(i.Fragment, {
    children: t
  })
}

function d(e) {
  let {
    benefit: t,
    className: n,
    emojiContainerClassName: r,
    showsDescription: l = !0,
    nameTextVariant: _ = "text-md/medium",
    nameTextColor: d = "header-primary"
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(u.container, n),
    children: [null != t.emoji && (0, i.jsx)("div", {
      className: s()(u.emojiContainer, r),
      children: (0, i.jsx)(a.Z, {
        emojiId: t.emoji.id,
        emojiName: t.emoji.name,
        animated: t.emoji.animated
      })
    }), (0, i.jsxs)("div", {
      className: u.infoContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: _,
        color: d,
        className: u.name,
        children: t.name
      }), l && (0, i.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    })]
  })
}

function c(e) {
  let {
    applicationId: t,
    benefit: n,
    className: r,
    emojiContainerClassName: a,
    showsDescription: _ = !0,
    nameTextVariant: d = "text-md/medium",
    nameTextColor: c = "header-primary"
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(u.container, r),
    children: [(0, i.jsx)("div", {
      className: s()(u.emojiContainer, a),
      children: (0, l.n)(t, n.icon)
    }), (0, i.jsxs)("div", {
      className: u.infoContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: d,
        color: c,
        className: u.name,
        children: n.name
      }), _ && (0, i.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: n.description
      })]
    })]
  })
}