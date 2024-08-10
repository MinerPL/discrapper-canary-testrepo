n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(481060),
  c = n(297700),
  d = n(665786),
  _ = n(823379),
  E = n(981631),
  f = n(689938),
  h = n(346483);
(i = r || (r = {}))[i.PARTNERED = 0] = 'PARTNERED', i[i.STAFF = 1] = 'STAFF', i[i.VERIFIED = 2] = 'VERIFIED', i[i.VERIFIED_AND_PARTNERED = 3] = 'VERIFIED_AND_PARTNERED', i[i.VERIFIED_AND_HUB = 4] = 'VERIFIED_AND_HUB', i[i.HUB = 5] = 'HUB', i[i.NONE = 6] = 'NONE';
class p extends s.PureComponent {
  renderBadge(e, t, n) {
let {
  className: r,
  badgeStrokeColor: i,
  tooltipColor: s = u.Tooltip.Colors.BRAND,
  tooltipPosition: o,
  tooltipDelay: d,
  size: E = 16,
  badgeColor: p,
  iconClassName: m,
  flowerStarClassName: I
} = this.props, T = function(e) {
  switch (e) {
    case 2:
      return f.Z.Messages.GUILD_VERIFIED;
    case 0:
      return f.Z.Messages.GUILD_PARTNERED;
    case 3:
      return f.Z.Messages.GUILD_VERIFIED_AND_PARTNERED;
    case 4:
      return f.Z.Messages.HUB_VERIFIED_DISCORD_HUB;
    case 5:
      return f.Z.Messages.HUB_DISCORD_HUB;
    case 1:
      return f.Z.Messages.INTERNAL_EMPLOYEE_ONLY;
    case 6:
      return null;
    default:
      (0, _.vE)(e);
  }
}(e);
return (0, a.jsx)(u.Tooltip, {
  color: s,
  position: o,
  delay: d,
  text: T,
  children: s => 5 === e || 4 === e ? (0, a.jsx)('div', {
    ...s,
    className: l()(n, r),
    style: {
      width: E,
      height: E
    },
    children: (0, a.jsx)(t, {
      className: l()(h.icon, m),
      color: 'currentColor'
    })
  }) : (0, a.jsx)(c.Z, {
    ...s,
    className: l()(n, r),
    flowerStarClassName: I,
    color: p,
    stroke: i,
    size: E,
    children: (0, a.jsx)(t, {
      size: 'xxs',
      className: l()(h.icon, m),
      color: 'currentColor'
    })
  })
});
  }
  render() {
let {
  guild: e
} = this.props, t = new Set(e.features);
return t.has(E.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, u.StaffBadgeIcon, h.staff) : t.has(E.oNc.VERIFIED) && t.has(E.oNc.HUB) ? this.renderBadge(4, u.HubIcon, h.verifiedHub) : t.has(E.oNc.HUB) ? this.renderBadge(5, u.HubIcon, h.hub) : t.has(E.oNc.VERIFIED) && t.has(E.oNc.PARTNERED) ? this.renderBadge(3, u.CheckmarkSmallIcon, h.verified) : t.has(E.oNc.VERIFIED) ? this.renderBadge(2, u.CheckmarkSmallIcon, h.verified) : t.has(E.oNc.PARTNERED) ? this.renderBadge(0, (0, u.makeIconCompat)(d.Z), h.partnered) : null;
  }
}
t.Z = p;