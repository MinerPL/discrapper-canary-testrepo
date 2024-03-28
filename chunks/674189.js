"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
}), i("47120");
var l = i("735250"),
  s = i("470079"),
  u = i("512722"),
  a = i.n(u),
  d = i("481060"),
  n = i("560067"),
  r = i("434404"),
  o = i("430824"),
  c = i("682864"),
  S = i("153124"),
  I = i("313741"),
  E = i("526079"),
  f = i("689938"),
  G = i("876133");

function T(e) {
  let {
    className: t,
    guildId: i,
    onChange: s,
    isGuildIncluded: u
  } = e, {
    options: a
  } = (0, E.default)({
    isGuildIncluded: u
  });
  return (0, l.jsx)(d.SearchableSelect, {
    className: t,
    onChange: s,
    value: i,
    options: a,
    placeholder: f.default.Messages.GUILD_SELECT
  })
}

function p(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: u,
    section: E,
    subsection: f
  } = e, p = (0, S.useUID)(), {
    canCreateGuild: C,
    createGuildCta: g,
    createGuildDescription: _,
    selectGuildCta: R,
    title: m,
    description: L,
    isGuildSupported: N
  } = (0, I.useGuildSettingsPickerFeature)(u), [b, M] = s.useState(), [O, h] = s.useState(!1), v = async () => {
    var e;
    h(!0);
    let t = await new Promise(e => {
      n.default.openCreateGuildModal({
        onSuccess: e
      })
    });
    await (e = t, new Promise(t => {
      o.default.addChangeListener(function i() {
        null != o.default.getGuild(e) && (o.default.removeChangeListener(i), t())
      })
    })), r.default.open(t, E, void 0, f), null == i || i()
  };
  return (0, l.jsxs)(d.ModalRoot, {
    transitionState: t,
    "aria-labelledby": p,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: G.modalHeader,
      separator: !1,
      children: [(0, l.jsx)(d.Heading, {
        id: p,
        variant: "heading-lg/medium",
        children: m
      }), (0, l.jsx)(d.ModalCloseButton, {
        onClick: i
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: G.modalContent,
      children: [(0, l.jsx)(d.Text, {
        variant: "text-md/medium",
        children: L
      }), (0, l.jsx)(c.default, {
        size: 16
      }), (0, l.jsxs)("div", {
        className: G.guildSelection,
        children: [(0, l.jsx)("div", {
          className: G.guildSelectorContainer,
          children: (0, l.jsx)(T, {
            guildId: b,
            onChange: M,
            isGuildIncluded: N
          })
        }), (0, l.jsx)(d.Button, {
          onClick: () => {
            a()(null != b, "Guild ID must not be null on click"), r.default.open(b, E, void 0, f), null == i || i()
          },
          disabled: null == b,
          children: R
        })]
      }), C && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.default, {
          size: 32
        }), (0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          children: _
        }), (0, l.jsx)(c.default, {
          size: 8
        }), (0, l.jsx)(d.Button, {
          onClick: v,
          submitting: O,
          children: g
        })]
      })]
    })]
  })
}