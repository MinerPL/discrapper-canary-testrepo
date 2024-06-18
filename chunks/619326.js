"use strict";
t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(866442),
  o = t(481060),
  c = t(393238),
  d = t(44315),
  u = t(663993),
  E = t(263704),
  _ = t(214623),
  I = t(981631),
  T = t(689938),
  N = t(694036);
let m = (0, u.Un)({
  createPromise: () => t.e("5609").then(t.bind(t, 336231)),
  webpackId: 336231
});

function S(e) {
  let s = (0, r.Bd)(e) > .25;
  return (0, d.Lq)(s ? I.Ilk.WHITE_500 : I.Ilk.PRIMARY_530)
}

function h(e) {
  let {
    value: s,
    onChange: t,
    disabled: l = !1
  } = e, [c, d] = i.useState(s);

  function u() {
    t(c)
  }

  function m(e) {
    t(e), d(e)
  }
  let h = s === I.p6O,
    g = h ? c : s,
    x = (0, n.jsx)(E.Z, {
      width: 32,
      height: 24,
      color: S(s)
    }),
    C = (0, o.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: l
    }),
    R = (0, o.useRadioItem)({
      isSelected: h,
      label: T.Z.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT_BUTTON.format({
        colorHex: (0, r.Rf)(I.p6O)
      })
    }),
    L = (0, o.useRadioItem)({
      isSelected: !h,
      label: T.Z.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM_BUTTON.format({
        colorHex: (0, r.Rf)(s)
      })
    });
  return (0, n.jsxs)("div", {
    className: N.buttonsContainer,
    "aria-label": T.Z.Messages.USER_SETTINGS_PROFILE_COLOR,
    ...C,
    children: [(0, n.jsx)("div", {
      className: a()(N.colorSwatch, {
        [N.disabled]: l
      }),
      children: (0, n.jsxs)(o.Clickable, {
        onClick: l ? void 0 : function() {
          t(I.p6O)
        },
        "aria-disabled": l,
        ...R,
        children: [(0, n.jsx)("div", {
          className: N.swatch,
          style: {
            backgroundColor: (0, r.Rf)(I.p6O)
          },
          children: h ? x : null
        }), (0, n.jsx)(o.Text, {
          className: N.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: T.Z.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT
        })]
      })
    }), (0, n.jsxs)("div", {
      className: a()(N.colorSwatch, {
        [N.disabled]: l
      }),
      children: [(0, n.jsxs)(o.Clickable, {
        onClick: l ? void 0 : u,
        "aria-disabled": l,
        ...L,
        children: [(0, n.jsx)("div", {
          className: a()(N.customSwatch, {
            [N.defaultSwatch]: g === I.p6O
          }),
          style: {
            "--custom-color": (0, r.Rf)(g)
          },
          children: h ? null : x
        }), (0, n.jsx)(o.Text, {
          className: N.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: T.Z.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM
        })]
      }), !l && (0, n.jsx)(o.Popout, {
        onRequestOpen: u,
        renderPopout: e => (0, n.jsx)(o.CustomColorPicker, {
          ...e,
          value: s,
          onChange: m
        }),
        children: e => (0, n.jsx)(o.Clickable, {
          ...e,
          className: N.dropperIconButton,
          "aria-label": T.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          children: (0, n.jsx)(_.Z, {
            className: N.dropperIcon,
            width: 14,
            height: 14,
            color: S(g)
          })
        })
      })]
    })]
  })
}

function g(e) {
  let s, {
      value: t,
      onChange: i,
      disabled: l = !1
    } = e,
    {
      ref: a,
      width: r
    } = (0, c.Z)();
  return s = null == r || r < 440 ? (0, n.jsx)(h, {
    value: t,
    onChange: i,
    disabled: l
  }) : (0, n.jsx)(m, {
    defaultColor: I.p6O,
    colors: I.pmI,
    value: t,
    onChange: i,
    disabled: l
  }), (0, n.jsx)("div", {
    ref: a,
    children: s
  })
}