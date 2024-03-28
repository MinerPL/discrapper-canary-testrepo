"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("866442"),
  o = s("481060"),
  d = s("393238"),
  u = s("44315"),
  c = s("663993"),
  E = s("703685"),
  _ = s("263704"),
  I = s("214623"),
  T = s("981631"),
  S = s("689938"),
  f = s("286794");
let m = (0, c.makeLazy)({
  createPromise: () => s.e("5609").then(s.bind(s, "336231")),
  webpackId: "336231"
});

function N(e) {
  let t = (0, r.getDarkness)(e) > .25;
  return (0, u.getColor)(t ? T.Color.WHITE_500 : T.Color.PRIMARY_530)
}

function g(e) {
  let {
    value: t,
    onChange: s,
    disabled: n = !1
  } = e, [d, u] = l.useState(t);

  function c() {
    s(d)
  }

  function m(e) {
    s(e), u(e)
  }
  let g = t === T.DEFAULT_ROLE_COLOR,
    h = g ? d : t,
    C = (0, a.jsx)(_.default, {
      width: 32,
      height: 24,
      color: N(t)
    }),
    R = (0, o.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: n
    }),
    x = (0, o.useRadioItem)({
      isSelected: g,
      label: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT_BUTTON.format({
        colorHex: (0, r.int2hex)(T.DEFAULT_ROLE_COLOR)
      })
    }),
    L = (0, o.useRadioItem)({
      isSelected: !g,
      label: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM_BUTTON.format({
        colorHex: (0, r.int2hex)(t)
      })
    });
  return (0, a.jsxs)("div", {
    className: f.buttonsContainer,
    "aria-label": S.default.Messages.USER_SETTINGS_PROFILE_COLOR,
    ...R,
    children: [(0, a.jsx)("div", {
      className: i()(f.colorSwatch, {
        [f.disabled]: n
      }),
      children: (0, a.jsxs)(o.Clickable, {
        onClick: n ? void 0 : function() {
          s(T.DEFAULT_ROLE_COLOR)
        },
        "aria-disabled": n,
        ...x,
        children: [(0, a.jsx)("div", {
          className: f.swatch,
          style: {
            backgroundColor: (0, r.int2hex)(T.DEFAULT_ROLE_COLOR)
          },
          children: g ? C : null
        }), (0, a.jsx)(o.Text, {
          className: f.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT
        })]
      })
    }), (0, a.jsxs)("div", {
      className: i()(f.colorSwatch, {
        [f.disabled]: n
      }),
      children: [(0, a.jsxs)(o.Clickable, {
        onClick: n ? void 0 : c,
        "aria-disabled": n,
        ...L,
        children: [(0, a.jsx)("div", {
          className: i()(f.customSwatch, {
            [f.defaultSwatch]: h === T.DEFAULT_ROLE_COLOR
          }),
          style: {
            "--custom-color": (0, r.int2hex)(h)
          },
          children: g ? null : C
        }), (0, a.jsx)(o.Text, {
          className: f.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM
        })]
      }), !n && (0, a.jsx)(o.Popout, {
        onRequestOpen: c,
        renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
          ...e,
          value: t,
          onChange: m
        }),
        children: e => (0, a.jsx)(o.Clickable, {
          ...e,
          className: f.dropperIconButton,
          "aria-label": S.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          children: (0, a.jsx)(I.default, {
            className: f.dropperIcon,
            width: 14,
            height: 14,
            color: N(h)
          })
        })
      })]
    })]
  })
}

function h(e) {
  let t, {
      value: s,
      onChange: l,
      disabled: n = !1
    } = e,
    {
      ref: i,
      width: r
    } = (0, d.default)();
  return t = null == r || r < 440 ? (0, a.jsx)(g, {
    value: s,
    onChange: l,
    disabled: n
  }) : (0, a.jsx)(m, {
    defaultColor: T.DEFAULT_ROLE_COLOR,
    colors: T.ROLE_COLORS,
    value: s,
    onChange: l,
    disabled: n
  }), (0, a.jsx)("div", {
    ref: i,
    children: t
  })
}