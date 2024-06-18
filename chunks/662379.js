"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(293810),
  a = t(689938),
  r = t(73033),
  o = t(961618),
  c = t(217684),
  d = t(174618);

function u(e) {
  let {
    imageSrc: s,
    description: t
  } = e;
  return (0, n.jsxs)("div", {
    className: r.howItWorksCard,
    children: [(0, n.jsx)("div", {
      className: r.howItWorksImageContainer,
      children: (0, n.jsx)("img", {
        className: r.howItWorksImage,
        src: s,
        alt: ""
      })
    }), (0, n.jsx)("div", {
      className: r.howItWorksDescription,
      children: (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: t
      })
    })]
  })
}

function E() {
  let e = [{
    imageSrc: d,
    description: a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_1
  }, {
    imageSrc: o,
    description: a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_2
  }, {
    imageSrc: c,
    description: a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_3
  }];
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_TITLE
    }), (0, n.jsx)(i.Spacer, {
      size: 24
    }), (0, n.jsx)("div", {
      className: r.howItWorksContainer,
      children: e.map(e => (0, n.jsx)(u, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))
    }), (0, n.jsx)(i.Spacer, {
      size: 24
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_FOOTER.format({
        creatorPortalUrl: l.C5
      })
    })]
  })
}