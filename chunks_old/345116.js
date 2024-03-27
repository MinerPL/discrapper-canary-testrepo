"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var s, r = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  o = n("931138"),
  u = n("476263"),
  d = n("206453"),
  c = n("811151"),
  f = n("427459"),
  m = n("858466");
class E extends a.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, r.jsxs)("div", {
      className: m.tierPill,
      children: [(0, r.jsx)(o.default, {
        className: m.tierPillStar,
        children: (0, r.jsx)(d.default, {
          tier: e,
          className: m.tierPillGem
        })
      }), (0, f.getTierName)(e)]
    })
  }
}
let p = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e;
  if (0 === t) return null;
  let s = Math.max(n.premiumSubscriberCount + t, 0),
    a = (0, f.getGuildTierFromAppliedBoostCount)(s, n.id),
    l = a - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
  return 0 === l ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.default, {
      className: l > 0 ? m.levelUpIcon : m.levelDownIcon
    }), (0, r.jsx)(E, {
      tier: a
    })]
  })
};
s = class extends a.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: i(m.subscription, t),
      children: [(0, r.jsx)(u.default, {
        guild: e,
        size: u.default.Sizes.LARGE
      }), (0, r.jsxs)("div", {
        className: m.subscriptionInfo,
        children: [(0, r.jsx)("div", {
          className: m.guildName,
          children: e.name
        }), (0, r.jsxs)("div", {
          className: m.tierInfo,
          children: [(0, r.jsx)(E, {
            tier: e.premiumTier
          }), (0, r.jsx)(p, {
            guild: e,
            subscriptionChange: null != n ? n : 0
          })]
        })]
      })]
    })
  }
}