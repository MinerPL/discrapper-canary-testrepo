"use strict";
n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("866442"),
  o = n("19602"),
  c = n("481060"),
  d = n("550271"),
  u = n("688298"),
  f = n("116175"),
  m = n("308083"),
  h = n("689938"),
  E = n("765731"),
  T = n("418571");
let p = "clan-badge-render",
  _ = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.CROSSHAIRS, f.ClanBadgeKind.FLOWER, f.ClanBadgeKind.FORCE, f.ClanBadgeKind.GEM, f.ClanBadgeKind.LAVA, f.ClanBadgeKind.PSYCHIC, f.ClanBadgeKind.SMOKE, f.ClanBadgeKind.SNOW, f.ClanBadgeKind.SOUND, f.ClanBadgeKind.SUN, f.ClanBadgeKind.WIND],
  C = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: n,
    primaryColor: r,
    secondaryColor: g,
    tag: x,
    error: I,
    furthestStep: v
  } = e, N = i.useRef(null), [S, A] = i.useState(n), [R, M] = i.useState({
    primary: null != r ? r : f.CLAN_BADGE_PRIMARY_DEFAULT,
    secondary: null != g ? g : f.CLAN_BADGE_SECONDARY_DEFAULT
  }), [L, b] = i.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === r && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === g) return e;
    return C
  }), [y, j] = i.useState(!1), O = C === L ? R : f.CLAN_BADGE_PALETTE_PRESETS[L];
  return i.useEffect(() => {
    if (S === n && O.primary === r && O.secondary === g) return;
    let e = document.querySelector("#".concat(p));
    if (null != e) {
      let n = new XMLSerializer().serializeToString(e),
        a = new Blob([n], {
          type: "image/svg+xml;charset=utf-8"
        }),
        i = URL.createObjectURL(a),
        r = new Image;
      r.width = e.width.baseVal.value, r.height = e.height.baseVal.value, r.onload = function() {
        if (null == N.current) return;
        N.current.width = r.width, N.current.height = r.height;
        let e = N.current.getContext("2d");
        if (null != e) e.drawImage(r, 0, 0), URL.revokeObjectURL(i), t({
          badgeImage: N.current.toDataURL("image/png")
        })
      }, r.src = i
    }
    let a = v === m.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: O.primary,
      brandSecondaryColor: O.secondary
    } : {};
    t({
      badgeKind: S,
      badgePrimaryColor: O.primary,
      badgeSecondaryColor: O.secondary,
      ...a
    })
  }, [t, S, O.primary, O.secondary, v, n, r, g]), (0, a.jsxs)("div", {
    className: T.slideContent,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-xxl/medium",
      className: T.title,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, a.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: T.subtitle,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsxs)("div", {
        className: E.badgesContainer,
        children: [(0, a.jsxs)("div", {
          className: E.pickerContainer,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE
          }), (0, a.jsx)("div", {
            className: E.pickerGrid,
            children: _.map(e => (0, a.jsx)(c.Clickable, {
              onClick: () => A(e),
              className: s()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: e === S
              }),
              children: (0, a.jsx)(d.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, a.jsxs)("div", {
          className: E.pickerContainer,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE_COLORS
          }), (0, a.jsxs)("div", {
            className: E.pickerGrid,
            children: [f.CLAN_BADGE_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(c.Clickable, {
              onClick: () => {
                b(t), M(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: s()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: t === L
              }),
              children: (0, a.jsx)(d.ClanBadge, {
                badge: S,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, a.jsx)(u.default, {
              showSecondaryColor: f.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[S] >= 2,
              palette: R,
              onPrimaryColorChange: e => {
                M(t => ({
                  ...t,
                  primary: (0, l.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                M(t => ({
                  ...t,
                  secondary: (0, l.int2hex)(e)
                }))
              },
              shouldShow: y,
              onRequestClose: () => j(!1),
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                onClick: () => {
                  b(C), j(e => !e)
                },
                className: s()(E.badgeAssetContainer, {
                  [E.badgeAssetContainerSelected]: C === L
                }),
                children: (0, a.jsx)(o.EyeDropperIcon, {
                  width: 20,
                  height: 20
                })
              })
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: E.tagContainer,
        children: [null != I && (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: T.errorText,
          children: I
        }), (0, a.jsx)(c.TextInput, {
          className: E.tagInputWrapper,
          inputClassName: E.tagInput,
          value: x,
          onChange: e => t({
            tag: e
          }),
          maxLength: m.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, a.jsx)(d.ClanBadge, {
            badge: S,
            width: 40,
            height: 40,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, a.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, a.jsx)(d.ClanBadge, {
            id: p,
            badge: S,
            width: 64,
            height: 64,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          }), (0, a.jsx)("canvas", {
            ref: N,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}