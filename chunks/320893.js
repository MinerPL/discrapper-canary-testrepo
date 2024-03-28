"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
});
var a = s("735250");
s("470079");
var l = s("780384"),
  n = s("481060"),
  i = s("410030"),
  r = s("682864"),
  o = s("293810"),
  d = s("689938"),
  u = s("945831"),
  c = s("934961"),
  E = s("568294"),
  _ = s("867861"),
  I = s("860790"),
  T = s("268953"),
  S = s("487703"),
  f = s("458050"),
  m = s("334364"),
  N = s("431712");

function g(e) {
  return (0, l.isThemeDark)(e) ? u.revenueSharePercentageDark : u.revenueSharePercentageLight
}

function h() {
  let e = (0, i.default)(),
    t = {
      backgroundColor: (0, l.isThemeDark)(e) ? "#2e3638" : "var(--background-primary)"
    };
  return (0, a.jsxs)("div", {
    className: u.earningsPreviewContainer,
    style: t,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_NEW_SUBS
      }), (0, a.jsx)(r.default, {
        size: 8
      }), (0, a.jsx)(n.Heading, {
        variant: "heading-md/bold",
        className: g(e),
        children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_REVENUE_INCREASE
      })]
    }), (0, a.jsx)("img", {
      className: u.roundAvatar,
      src: S,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_PREVIEW_IMG_ALT
    })]
  })
}

function C() {
  let e = (0, i.default)();

  function t(e) {
    let {
      length: t,
      horizontal: s
    } = e;
    return (0, a.jsx)("div", {
      className: s ? u.horizontalConnector : u.verticalConnector,
      style: {
        ...s ? {
          width: t
        } : {
          height: t
        },
        border: "1px solid #49494933"
      }
    })
  }
  return (0, a.jsxs)("div", {
    className: u.avatarGridContainer,
    "aria-label": d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_GRID_ARIA_LABEL,
    children: [(0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 24
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: (0, l.isThemeDark)(e) ? c : E,
        alt: ""
      }), (0, a.jsx)(t, {
        horizontal: !0,
        length: 12
      })]
    }), (0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 24
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: _,
        alt: ""
      })]
    }), (0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 12
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: I,
        alt: ""
      }), (0, a.jsx)(t, {
        horizontal: !0,
        length: 12
      })]
    }), (0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 12
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: T,
        alt: ""
      })]
    })]
  })
}

function R() {
  return (0, a.jsxs)("div", {
    className: u.earningBenefitCard,
    children: [(0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1
    }), (0, a.jsx)(r.default, {
      size: 32
    }), (0, a.jsx)(h, {}), (0, a.jsx)(r.default, {
      size: 24
    }), (0, a.jsx)(C, {})]
  })
}

function x() {
  return (0, a.jsxs)("div", {
    className: u.followerBenefitCard,
    children: [(0, a.jsx)(n.Text, {
      className: u.followerBenefitText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2
    }), (0, a.jsx)("img", {
      className: u.roleSubscriptionSocial,
      src: N,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_1_ALT
    }), (0, a.jsx)("img", {
      className: u.roleSubscriptionLanyardIllo,
      src: m,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_2_ALT
    })]
  })
}

function L() {
  let e = (0, i.default)();
  return (0, a.jsxs)("div", {
    className: u.revenueShareBenefitCard,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsxs)(n.Heading, {
        className: g(e),
        style: {
          fontSize: "50px",
          lineHeight: "52px"
        },
        variant: "heading-xxl/extrabold",
        children: [o.CREATOR_REVENUE_SHARE_PERCENTAGE, "%"]
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3
      })]
    }), (0, a.jsx)("img", {
      className: u.roleSubscriptionEarningIllo,
      src: f,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3_IMG_ALT
    })]
  })
}

function O() {
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFITS_FOR_CREATORS_TITLE
    }), (0, a.jsx)(r.default, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: u.creatorBenefitsContainer,
      children: [(0, a.jsx)(R, {}), (0, a.jsx)(x, {}), (0, a.jsx)(L, {})]
    })]
  })
}