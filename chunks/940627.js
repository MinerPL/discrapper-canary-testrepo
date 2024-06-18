"use strict";
n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(481060),
  _ = n(823379),
  d = n(797717),
  c = n(24514),
  E = n(665786),
  I = n(192091),
  T = n(507957),
  h = n(981631),
  S = n(689938),
  f = n(298829);
(r = i || (i = {}))[r.PARTNERED = 0] = "PARTNERED", r[r.STAFF = 1] = "STAFF", r[r.VERIFIED = 2] = "VERIFIED", r[r.VERIFIED_AND_PARTNERED = 3] = "VERIFIED_AND_PARTNERED", r[r.VERIFIED_AND_HUB = 4] = "VERIFIED_AND_HUB", r[r.HUB = 5] = "HUB", r[r.NONE = 6] = "NONE";
class N extends o.PureComponent {
  renderBadge(e, t, n) {
    let {
      className: i,
      badgeStrokeColor: r,
      tooltipColor: o = u.Tooltip.Colors.BRAND,
      tooltipPosition: a,
      tooltipDelay: c,
      size: E = 16,
      badgeColor: I,
      iconClassName: T,
      flowerStarClassName: h
    } = this.props, N = function(e) {
      switch (e) {
        case 2:
          return S.Z.Messages.GUILD_VERIFIED;
        case 0:
          return S.Z.Messages.GUILD_PARTNERED;
        case 3:
          return S.Z.Messages.GUILD_VERIFIED_AND_PARTNERED;
        case 4:
          return S.Z.Messages.HUB_VERIFIED_DISCORD_HUB;
        case 5:
          return S.Z.Messages.HUB_DISCORD_HUB;
        case 1:
          return S.Z.Messages.INTERNAL_EMPLOYEE_ONLY;
        case 6:
          return null;
        default:
          (0, _.vE)(e)
      }
    }(e);
    return (0, s.jsx)(u.Tooltip, {
      color: o,
      position: a,
      delay: c,
      text: N,
      children: o => 5 === e || 4 === e ? (0, s.jsx)("div", {
        ...o,
        className: l()(n, i),
        style: {
          width: E,
          height: E
        },
        children: (0, s.jsx)(t, {
          className: l()(f.icon, T)
        })
      }) : (0, s.jsx)(d.Z, {
        ...o,
        className: l()(n, i),
        flowerStarClassName: h,
        color: I,
        stroke: r,
        size: E,
        children: (0, s.jsx)(t, {
          className: l()(f.icon, T)
        })
      })
    })
  }
  render() {
    let {
      guild: e
    } = this.props, t = new Set(e.features);
    return t.has(h.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, I.Z, f.staff) : t.has(h.oNc.VERIFIED) && t.has(h.oNc.HUB) ? this.renderBadge(4, c.Z, f.verifiedHub) : t.has(h.oNc.HUB) ? this.renderBadge(5, c.Z, f.hub) : t.has(h.oNc.VERIFIED) && t.has(h.oNc.PARTNERED) ? this.renderBadge(3, T.Z, f.verified) : t.has(h.oNc.VERIFIED) ? this.renderBadge(2, T.Z, f.verified) : t.has(h.oNc.PARTNERED) ? this.renderBadge(0, E.Z, f.partnered) : null
  }
}
t.Z = N