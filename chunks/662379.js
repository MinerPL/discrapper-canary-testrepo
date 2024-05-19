"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("682864"),
  i = s("293810"),
  r = s("689938"),
  o = s("73033"),
  d = s("961618"),
  u = s("217684"),
  c = s("174618");

function E(e) {
  let {
    imageSrc: t,
    description: s
  } = e;
  return (0, a.jsxs)("div", {
    className: o.howItWorksCard,
    children: [(0, a.jsx)("div", {
      className: o.howItWorksImageContainer,
      children: (0, a.jsx)("img", {
        className: o.howItWorksImage,
        src: t,
        alt: ""
      })
    }), (0, a.jsx)("div", {
      className: o.howItWorksDescription,
      children: (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: s
      })
    })]
  })
}

function _() {
  let e = [{
    imageSrc: c,
    description: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_1
  }, {
    imageSrc: d,
    description: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_2
  }, {
    imageSrc: u,
    description: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_3
  }];
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_TITLE
    }), (0, a.jsx)(n.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: o.howItWorksContainer,
      children: e.map(e => (0, a.jsx)(E, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))
    }), (0, a.jsx)(n.default, {
      size: 24
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_FOOTER.format({
        creatorPortalUrl: i.CREATOR_REVENUE_PORTAL_URL
      })
    })]
  })
}