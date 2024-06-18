"use strict";
t.d(s, {
  Z: function() {
    return O
  }
});
var n = t(735250);
t(470079);
var i = t(780384),
  l = t(481060),
  a = t(410030),
  r = t(293810),
  o = t(689938),
  c = t(954594),
  d = t(934961),
  u = t(568294),
  E = t(867861),
  _ = t(860790),
  I = t(268953),
  T = t(487703),
  N = t(458050),
  m = t(334364),
  S = t(431712);

function h(e) {
  return (0, i.wj)(e) ? c.revenueSharePercentageDark : c.revenueSharePercentageLight
}

function g() {
  let e = (0, a.ZP)(),
    s = {
      backgroundColor: (0, i.wj)(e) ? "#2e3638" : "var(--background-primary)"
    };
  return (0, n.jsxs)("div", {
    className: c.earningsPreviewContainer,
    style: s,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_NEW_SUBS
      }), (0, n.jsx)(l.Spacer, {
        size: 8
      }), (0, n.jsx)(l.Heading, {
        variant: "heading-md/bold",
        className: h(e),
        children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_REVENUE_INCREASE
      })]
    }), (0, n.jsx)("img", {
      className: c.roundAvatar,
      src: T,
      alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_PREVIEW_IMG_ALT
    })]
  })
}

function x() {
  let e = (0, a.ZP)();

  function s(e) {
    let {
      length: s,
      horizontal: t
    } = e;
    return (0, n.jsx)("div", {
      className: t ? c.horizontalConnector : c.verticalConnector,
      style: {
        ...t ? {
          width: s
        } : {
          height: s
        },
        border: "1px solid #49494933"
      }
    })
  }
  return (0, n.jsxs)("div", {
    className: c.avatarGridContainer,
    "aria-label": o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_GRID_ARIA_LABEL,
    children: [(0, n.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, n.jsx)(s, {
        length: 24
      }), (0, n.jsx)("img", {
        className: c.roundAvatar,
        src: (0, i.wj)(e) ? d : u,
        alt: ""
      }), (0, n.jsx)(s, {
        horizontal: !0,
        length: 12
      })]
    }), (0, n.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, n.jsx)(s, {
        length: 24
      }), (0, n.jsx)("img", {
        className: c.roundAvatar,
        src: E,
        alt: ""
      })]
    }), (0, n.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, n.jsx)(s, {
        length: 12
      }), (0, n.jsx)("img", {
        className: c.roundAvatar,
        src: _,
        alt: ""
      }), (0, n.jsx)(s, {
        horizontal: !0,
        length: 12
      })]
    }), (0, n.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, n.jsx)(s, {
        length: 12
      }), (0, n.jsx)("img", {
        className: c.roundAvatar,
        src: I,
        alt: ""
      })]
    })]
  })
}

function C() {
  return (0, n.jsxs)("div", {
    className: c.earningBenefitCard,
    children: [(0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1
    }), (0, n.jsx)(l.Spacer, {
      size: 32
    }), (0, n.jsx)(g, {}), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(x, {})]
  })
}

function R() {
  return (0, n.jsxs)("div", {
    className: c.followerBenefitCard,
    children: [(0, n.jsx)(l.Text, {
      className: c.followerBenefitText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2
    }), (0, n.jsx)("img", {
      className: c.roleSubscriptionSocial,
      src: S,
      alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_1_ALT
    }), (0, n.jsx)("img", {
      className: c.roleSubscriptionLanyardIllo,
      src: m,
      alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_2_ALT
    })]
  })
}

function L() {
  let e = (0, a.ZP)();
  return (0, n.jsxs)("div", {
    className: c.revenueShareBenefitCard,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsxs)(l.Heading, {
        className: h(e),
        style: {
          fontSize: "50px",
          lineHeight: "52px"
        },
        variant: "heading-xxl/extrabold",
        children: [r.NT, "%"]
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3
      })]
    }), (0, n.jsx)("img", {
      className: c.roleSubscriptionEarningIllo,
      src: N,
      alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3_IMG_ALT
    })]
  })
}

function O() {
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFITS_FOR_CREATORS_TITLE
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsxs)("div", {
      className: c.creatorBenefitsContainer,
      children: [(0, n.jsx)(C, {}), (0, n.jsx)(R, {}), (0, n.jsx)(L, {})]
    })]
  })
}