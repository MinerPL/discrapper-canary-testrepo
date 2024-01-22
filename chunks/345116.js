"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("931138"),
  u = n("476263"),
  d = n("206453"),
  c = n("811151"),
  f = n("427459"),
  p = n("804308");
class m extends i.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, s.jsxs)("div", {
      className: p.tierPill,
      children: [(0, s.jsx)(o.default, {
        className: p.tierPillStar,
        children: (0, s.jsx)(d.default, {
          tier: e,
          className: p.tierPillGem
        })
      }), (0, f.getTierName)(e)]
    })
  }
}
let h = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e;
  if (0 === t) return null;
  let l = Math.max(n.premiumSubscriberCount + t, 0),
    i = (0, f.getGuildTierFromAppliedBoostCount)(l, n.id),
    r = i - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
  return 0 === r ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.default, {
      className: r > 0 ? p.levelUpIcon : p.levelDownIcon
    }), (0, s.jsx)(m, {
      tier: i
    })]
  })
};
l = class extends i.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: n
    } = this.props;
    return (0, s.jsxs)("div", {
      className: a(p.subscription, t),
      children: [(0, s.jsx)(u.default, {
        guild: e,
        size: u.default.Sizes.LARGE
      }), (0, s.jsxs)("div", {
        className: p.subscriptionInfo,
        children: [(0, s.jsx)("div", {
          className: p.guildName,
          children: e.name
        }), (0, s.jsxs)("div", {
          className: p.tierInfo,
          children: [(0, s.jsx)(m, {
            tier: e.premiumTier
          }), (0, s.jsx)(h, {
            guild: e,
            subscriptionChange: null != n ? n : 0
          })]
        })]
      })]
    })
  }
}