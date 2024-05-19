"use strict";
a.r(t), a("47120"), a("315314"), a("610138"), a("216116"), a("78328"), a("815648");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("866442"),
  o = a("19602"),
  c = a("481060"),
  d = a("550271"),
  u = a("688298"),
  f = a("116175"),
  m = a("308083"),
  h = a("689938"),
  p = a("410453"),
  E = a("661926");
let T = "clan-badge-render",
  C = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.CROSSHAIRS, f.ClanBadgeKind.FLOWER, f.ClanBadgeKind.FORCE, f.ClanBadgeKind.GEM, f.ClanBadgeKind.LAVA, f.ClanBadgeKind.PSYCHIC, f.ClanBadgeKind.SMOKE, f.ClanBadgeKind.SNOW, f.ClanBadgeKind.SOUND, f.ClanBadgeKind.SUN, f.ClanBadgeKind.WIND],
  x = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: a,
    primaryColor: s,
    secondaryColor: _,
    tag: g,
    error: I,
    furthestStep: N
  } = e, v = r.useRef(null), [A, S] = r.useState(a), [L, R] = r.useState(() => {
    let e = (0, f.getRandomClanBadgePreset)();
    return {
      primary: null != s ? s : e.primary,
      secondary: null != _ ? _ : e.secondary
    }
  }), [y, b] = r.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === L.primary && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === L.secondary) return e;
    return x
  }), [M, j] = r.useState(!1), O = x === y ? L : f.CLAN_BADGE_PALETTE_PRESETS[y];
  return r.useEffect(() => {
    if (A === a && O.primary === s && O.secondary === _) return;
    let e = document.querySelector("#".concat(T));
    if (null != e) {
      let a = new XMLSerializer().serializeToString(e),
        n = new Blob([a], {
          type: "image/svg+xml;charset=utf-8"
        }),
        r = URL.createObjectURL(n),
        s = new Image;
      s.width = e.width.baseVal.value, s.height = e.height.baseVal.value, s.onload = function() {
        if (null == v.current) return;
        v.current.width = s.width, v.current.height = s.height;
        let e = v.current.getContext("2d");
        if (null != e) e.drawImage(s, 0, 0), URL.revokeObjectURL(r), t({
          badgeImage: v.current.toDataURL("image/png")
        })
      }, s.src = r
    }
    let n = N === m.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: O.primary,
      brandSecondaryColor: O.secondary
    } : {};
    t({
      badgeKind: A,
      badgePrimaryColor: O.primary,
      badgeSecondaryColor: O.secondary,
      ...n
    })
  }, [t, A, O.primary, O.secondary, N, a, s, _]), (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [(0, n.jsx)(c.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: p.container,
      children: [(0, n.jsxs)("div", {
        className: p.badgesContainer,
        children: [(0, n.jsxs)("div", {
          className: p.pickerContainer,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE
          }), (0, n.jsx)("div", {
            className: p.pickerGrid,
            children: C.map(e => (0, n.jsx)(c.Clickable, {
              onClick: () => S(e),
              className: i()(p.badgeAssetContainer, {
                [p.badgeAssetContainerSelected]: e === A
              }),
              children: (0, n.jsx)(d.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, n.jsxs)("div", {
          className: p.pickerContainer,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE_COLORS
          }), (0, n.jsxs)("div", {
            className: p.pickerGrid,
            children: [f.CLAN_BADGE_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(c.Clickable, {
              onClick: () => {
                b(t), R(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: i()(p.badgeAssetContainer, {
                [p.badgeAssetContainerSelected]: t === y
              }),
              children: (0, n.jsx)(d.ClanBadge, {
                badge: A,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, n.jsx)(u.default, {
              showSecondaryColor: f.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[A] >= 2,
              palette: L,
              onPrimaryColorChange: e => {
                R(t => ({
                  ...t,
                  primary: (0, l.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                R(t => ({
                  ...t,
                  secondary: (0, l.int2hex)(e)
                }))
              },
              shouldShow: M,
              onRequestClose: () => j(!1),
              children: e => (0, n.jsx)(c.Clickable, {
                ...e,
                onClick: () => {
                  b(x), j(e => !e)
                },
                className: i()(p.badgeAssetContainer, {
                  [p.badgeAssetContainerSelected]: x === y
                }),
                children: (0, n.jsx)(o.EyeDropperIcon, {
                  width: 20,
                  height: 20
                })
              })
            })]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: p.tagContainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG
        }), null != I && (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: E.errorText,
          children: I
        }), (0, n.jsx)(c.TextInput, {
          className: p.tagInputWrapper,
          inputClassName: p.tagInput,
          value: g,
          onChange: e => t({
            tag: e
          }),
          maxLength: m.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, n.jsx)(d.ClanBadge, {
            badge: A,
            width: 40,
            height: 40,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: p.tagValidationText,
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, n.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, n.jsx)(d.ClanBadge, {
            id: T,
            badge: A,
            width: 64,
            height: 64,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          }), (0, n.jsx)("canvas", {
            ref: v,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}