var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(793030),
    l = n(976465),
    o = n(474936),
    c = n(689938),
    d = n(557967);
let _ = (e) => {
    switch (e) {
        case o.VU.PREMIUM_TENURE_1_MONTH:
            return d.badgeBronzeGlow;
        case o.VU.PREMIUM_TENURE_3_MONTH:
            return d.badgeSilverGlow;
        case o.VU.PREMIUM_TENURE_6_MONTH:
            return d.badgeGoldGlow;
        case o.VU.PREMIUM_TENURE_12_MONTH:
            return d.badgePlatinumGlow;
        case o.VU.PREMIUM_TENURE_24_MONTH:
            return d.badgeDiamondGlow;
        case o.VU.PREMIUM_TENURE_36_MONTH:
            return d.badgeEmeraldGlow;
        case o.VU.PREMIUM_TENURE_60_MONTH:
            return d.badgeRubyGlow;
        case o.VU.PREMIUM_TENURE_72_MONTH:
            return d.badgeFireGlow;
        default:
            return;
    }
};
t.Z = () => {
    let { badge: e, image: t, name: n, earnedOnDate: a } = (0, l.Rw)();
    return null == e
        ? null
        : (0, s.jsxs)('div', {
              className: r()(d.container, _(e)),
              children: [
                  (0, s.jsx)('div', {}),
                  ' ',
                  (0, s.jsx)('img', {
                      src: t,
                      alt: n,
                      className: d.badgeImage
                  }),
                  (0, s.jsxs)('div', {
                      className: d.textColumn,
                      children: [
                          (0, s.jsx)(i.x, {
                              variant: 'text-lg/semibold',
                              className: d.badgeText,
                              children: n
                          }),
                          (0, s.jsx)(i.x, {
                              variant: 'text-xs/normal',
                              children: c.Z.Messages.NITRO_HOME_TIERED_TENURE_BADGES_EARNED_ON.format({ date: a })
                          })
                      ]
                  })
              ]
          });
};
