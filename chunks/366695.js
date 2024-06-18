"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(829968),
  a = n(346656),
  l = n(438071),
  u = n(474936),
  _ = n(689938),
  d = n(458217);
let c = {
    XXSMALL: d.xxsmall,
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
  },
  E = e => {
    let t, {
      game: r,
      guild: E,
      skuId: I,
      pid: T,
      className: h,
      guildClassName: S,
      size: f = c.MEDIUM
    } = e;
    if (null != I && (t = function(e) {
        if (null == e) return null;
        switch (e) {
          case u.Si.GUILD:
            return n(632342);
          case u.Si.TIER_0:
            return n(467596);
          case u.Si.TIER_1:
            return n(670957);
          case u.Si.TIER_2:
          case u.Si.LEGACY:
            return n(480768);
          default:
            return null
        }
      }(I)), null != r && null == t && (t = r.getIconURL(function(e) {
        switch (e) {
          case c.XXSMALL:
            return 16;
          case c.XSMALL:
            return 24;
          case c.SMALL:
            return 30;
          case c.MEDIUM:
            return 40;
          case c.LARGE:
            return 60;
          default:
            return 80
        }
      }(f))), null == (t = (0, o.Z)(T, t)) && null != E) {
      let e = function(e) {
        switch (e) {
          case c.XSMALL:
            return a.Z.Sizes.SMALLER;
          case c.SMALL:
            return a.Z.Sizes.SMALL;
          case c.LARGE:
            return a.Z.Sizes.LARGE;
          default:
          case c.MEDIUM:
            return a.Z.Sizes.MEDIUM
        }
      }(f);
      return (0, i.jsx)(a.Z, {
        className: s()(d.gameIcon, S, h),
        guild: E,
        size: e
      })
    }
    if (null == t) return (0, i.jsx)(l.Z, {
      className: s()(d.gameIcon, f, h)
    });
    let N = null == r ? void 0 : r.name,
      A = null != N && "" !== N ? _.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
        applicationName: N
      }) : _.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
    return (0, i.jsx)("img", {
      alt: A,
      src: t,
      className: s()(d.gameIcon, f, h)
    })
  };
E.Sizes = c, t.Z = E