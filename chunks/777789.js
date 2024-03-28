"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var s = l("735250"),
  n = l("470079"),
  a = l("803997"),
  r = l.n(a),
  i = l("797717"),
  o = l("346656"),
  d = l("471885"),
  u = l("424625"),
  c = l("267642"),
  C = l("560428");
class m extends n.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, s.jsxs)("div", {
      className: C.tierPill,
      children: [(0, s.jsx)(i.default, {
        className: C.tierPillStar,
        children: (0, s.jsx)(d.default, {
          tier: e,
          className: C.tierPillGem
        })
      }), (0, c.getTierName)(e)]
    })
  }
}
let f = e => {
  let {
    subscriptionChange: t,
    guild: l
  } = e;
  if (0 === t) return null;
  let n = Math.max(l.premiumSubscriberCount + t, 0),
    a = (0, c.getGuildTierFromAppliedBoostCount)(n, l.id),
    r = a - (0, c.getGuildTierFromAppliedBoostCount)(l.premiumSubscriberCount, l.id);
  return 0 === r ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.default, {
      className: r > 0 ? C.levelUpIcon : C.levelDownIcon
    }), (0, s.jsx)(m, {
      tier: a
    })]
  })
};
class S extends n.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: l
    } = this.props;
    return (0, s.jsxs)("div", {
      className: r()(C.subscription, t),
      children: [(0, s.jsx)(o.default, {
        guild: e,
        size: o.default.Sizes.LARGE
      }), (0, s.jsxs)("div", {
        className: C.subscriptionInfo,
        children: [(0, s.jsx)("div", {
          className: C.guildName,
          children: e.name
        }), (0, s.jsxs)("div", {
          className: C.tierInfo,
          children: [(0, s.jsx)(m, {
            tier: e.premiumTier
          }), (0, s.jsx)(f, {
            guild: e,
            subscriptionChange: null != l ? l : 0
          })]
        })]
      })]
    })
  }
}