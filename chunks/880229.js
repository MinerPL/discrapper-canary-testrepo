"use strict";
s.r(t), s.d(t, {
  ImportBenefitsFromRoleModal: function() {
    return Q
  },
  ImportBenefitsFromSubscriptionListingModal: function() {
    return W
  }
}), s("47120"), s("390547");
var a, l, n = s("735250"),
  i = s("470079"),
  r = s("803997"),
  o = s.n(r),
  d = s("207561"),
  u = s("149765"),
  c = s("866442"),
  E = s("442837"),
  _ = s("902704"),
  I = s("477690"),
  T = s("481060"),
  S = s("596454"),
  f = s("471445"),
  m = s("605436"),
  N = s("339085"),
  g = s("518738"),
  h = s("131704"),
  C = s("324067"),
  R = s("430824"),
  x = s("153124"),
  L = s("259580"),
  O = s("93879"),
  A = s("263704"),
  p = s("486511"),
  M = s("241820"),
  D = s("176278"),
  v = s("624138"),
  j = s("817460"),
  G = s("166803"),
  U = s("629262"),
  P = s("686807"),
  b = s("981631"),
  B = s("689938"),
  y = s("276900");
let F = (0, x.uid)(),
  H = (0, x.uid)(),
  k = (0, v.cssValueToNumber)(I.default.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function w(e) {
  var t;
  let {
    emojiId: s,
    emojiName: a,
    className: l
  } = e, i = (0, E.useStateFromStores)([N.default], () => null != s ? N.default.getCustomEmojiById(s) : void 0);
  return (0, n.jsx)(S.default, {
    emojiId: s,
    emojiName: a,
    animated: null !== (t = null == i ? void 0 : i.animated) && void 0 !== t && t,
    className: l
  })
}

function V(e) {
  let {
    icon: t,
    children: s,
    checked: a,
    disabled: l = !1,
    onChange: i
  } = e, r = a || l;
  return (0, n.jsxs)("label", {
    className: o()(y.row, {
      [y.checked]: r,
      [y.disabled]: l
    }),
    children: [(0, n.jsx)("div", {
      className: y.rowIconWrapper,
      children: t
    }), (0, n.jsx)("div", {
      className: y.rowText,
      children: s
    }), (0, n.jsxs)("div", {
      className: y.rowCheckbox,
      children: [(0, n.jsx)(T.FocusRing, {
        children: (0, n.jsx)("input", {
          type: "checkbox",
          checked: r,
          disabled: l,
          className: y.checkboxInput,
          onChange: function(e) {
            i(e.target.checked)
          }
        })
      }), (0, n.jsx)("div", {
        className: y.checkboxDisplay,
        children: (0, n.jsx)(A.default, {
          className: y.checkboxIcon,
          "aria-hidden": !0
        })
      })]
    })]
  })
}

function Y(e) {
  let {
    title: t,
    selectAllText: s,
    benefits: a,
    dupeBenefits: l,
    selectedBenefits: i,
    onToggleBenefit: r
  } = e, o = a.every(e => i.has(e));
  return a.length > 0 ? (0, n.jsxs)(T.FormSection, {
    title: t,
    className: y.section,
    children: [a.length - l.size > 1 && (0, n.jsx)("div", {
      className: y.list,
      children: (0, n.jsx)(V, {
        icon: (0, n.jsx)(p.default, {
          className: y.rowIcon
        }),
        checked: o,
        onChange: function(e) {
          for (let t of a) !l.has(t) && r(t, e)
        },
        children: (0, n.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: s
        })
      })
    }), (0, n.jsx)("div", {
      className: y.list,
      children: a.map(e => (0, n.jsxs)(V, {
        icon: (0, n.jsx)(w, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: y.rowIcon
        }),
        checked: i.has(e),
        disabled: l.has(e),
        onChange: t => r(e, t),
        children: [(0, n.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, P.default)(e)
        }), (0, n.jsx)(T.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, j.getBenefitKey)(e)))
    })]
  }) : null
}

function W(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: s,
    existingChannelBenefits: a,
    existingIntangibleBenefits: l,
    onSubmit: r,
    onClose: o
  } = e, d = s.role_benefits.benefits, [u, c] = i.useState(() => new Set(d)), E = i.useMemo(() => d.filter(j.isChannelBenefit), [d]), I = (0, U.default)(E), S = i.useMemo(() => d.filter(j.isIntangibleBenefit), [d]), f = i.useMemo(() => new Set(I.filter(e => a.some(t => t.ref_id === e.ref_id))), [I, a]), m = i.useMemo(() => new Set(S.filter(e => l.some(t => (0, _.default)(e, t)))), [l, S]), N = (0, x.useUID)();

  function g(e, t) {
    c(s => {
      let a = new Set(s);
      return t ? a.add(e) : a.delete(e), a
    })
  }
  return (0, n.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault();
      let t = d.filter(e => u.has(e)),
        s = t.filter(j.isChannelBenefit).filter(e => !f.has(e));
      r(s, t.filter(j.isIntangibleBenefit).filter(e => !m.has(e))), o()
    },
    children: (0, n.jsxs)(T.ModalRoot, {
      transitionState: t,
      "aria-labelledby": N,
      children: [(0, n.jsxs)(T.ModalHeader, {
        children: [(0, n.jsx)(T.Heading, {
          id: N,
          variant: "heading-md/semibold",
          children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_MODAL_HEADER.format({
            tierName: s.name
          })
        }), (0, n.jsx)(T.ModalCloseButton, {
          className: y.modalCloseButton,
          onClick: o
        })]
      }), (0, n.jsxs)(T.ModalContent, {
        className: y.modalContent,
        children: [(0, n.jsx)(Y, {
          title: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
          selectAllText: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS,
          benefits: I,
          dupeBenefits: f,
          selectedBenefits: u,
          onToggleBenefit: g
        }), (0, n.jsx)(Y, {
          title: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
          selectAllText: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_INTANGIBLE_BENEFITS,
          benefits: S,
          dupeBenefits: m,
          selectedBenefits: u,
          onToggleBenefit: g
        })]
      }), (0, n.jsxs)(T.ModalFooter, {
        children: [(0, n.jsx)(T.Button, {
          type: "submit",
          children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_CONFIRM_BUTTON
        }), (0, n.jsx)(T.Button, {
          look: T.Button.Looks.LINK,
          color: T.Button.Colors.PRIMARY,
          onClick: o,
          children: B.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function z(e) {
  var t;
  let {
    guildId: s,
    role: a,
    channelCount: l,
    onSelect: i
  } = e, r = (0, g.useRoleIcon)({
    guildId: s,
    roleId: a.id,
    size: k
  });
  return (0, n.jsxs)(T.Clickable, {
    className: y.roleRow,
    onClick: i,
    children: [(0, n.jsx)("div", {
      className: y.rowIconWrapper,
      children: null != r ? (0, n.jsx)(D.default, {
        ...r
      }) : (0, n.jsx)(M.default, {
        color: null !== (t = a.colorString) && void 0 !== t ? t : (0, c.int2hex)(b.DEFAULT_ROLE_COLOR),
        className: y.roleRowIconDefault
      })
    }), (0, n.jsxs)("div", {
      className: y.rowText,
      children: [(0, n.jsx)(T.Text, {
        color: "header-primary",
        variant: "text-md/normal",
        className: y.__invalid_benefitTitle,
        children: a.name
      }), (0, n.jsx)(T.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: B.default.Messages.NUM_CHANNELS.format({
          num: l
        })
      })]
    }), (0, n.jsx)("div", {
      className: y.rowCheckbox,
      children: (0, n.jsx)(L.default, {
        direction: L.default.Directions.RIGHT
      })
    })]
  })
}

function K(e) {
  let {
    guild: t,
    onSelect: s
  } = e, a = (0, E.useStateFromStores)([R.default], () => R.default.getRoles(t.id)), l = (0, E.useStateFromStores)([C.default], () => C.default.getCategories(t.id)), r = i.useMemo(() => l._categories.flatMap(e => l[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return h.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [l]), o = i.useMemo(() => Object.values(a).flatMap(e => {
    var s;
    if ((0, m.isEveryoneRoleId)(t.id, e.id) || (null === (s = e.tags) || void 0 === s ? void 0 : s.subscription_listing_id) != null || u.hasAny(e.permissions, b.ElevatedPermissions)) return [];
    let a = (0, G.default)(r, e).length;
    return a > 0 ? {
      role: e,
      channelCount: a
    } : []
  }), [t, a, r]);
  return o.length > 0 ? (0, n.jsx)("div", {
    className: y.list,
    children: o.map(e => (0, n.jsx)(z, {
      guildId: t.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => s(e.role)
    }, e.role.id))
  }) : (0, n.jsx)(T.Text, {
    variant: "text-md/normal",
    children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE_EMPTY
  })
}

function Z(e) {
  let {
    onClose: t,
    guildId: s,
    onSelect: a
  } = e, l = (0, E.useStateFromStores)([R.default], () => R.default.getGuild(s));
  return null == l ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(T.ModalHeader, {
      children: [(0, n.jsx)(T.Heading, {
        id: F,
        variant: "heading-md/semibold",
        children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_1
      }), (0, n.jsx)(T.ModalCloseButton, {
        className: y.modalCloseButton,
        onClick: t
      })]
    }), (0, n.jsx)(T.ModalContent, {
      className: y.modalContent,
      children: (0, n.jsx)(K, {
        guild: l,
        onSelect: a
      })
    })]
  })
}

function X(e) {
  let {
    onClose: t,
    guildId: s,
    role: a,
    onCancel: l,
    onImport: r
  } = e, o = i.useRef(a);
  null != a && (o.current = a);
  let u = null != a ? a : o.current,
    c = (0, d.useLazyValue)(() => {
      let e = C.default.getCategories(s);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return h.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    E = i.useMemo(() => (0, G.default)(c, u), [c, u]),
    [_, I] = i.useState(() => new Set(E.map(e => e.id)));

  function S(e, t) {
    I(s => {
      let a = new Set(s);
      return t ? a.add(e) : a.delete(e), a
    })
  }
  return (0, n.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), r(E.map(e => e.id).filter(e => _.has(e))), t()
    },
    className: y.slideForm,
    children: [(0, n.jsxs)(T.ModalHeader, {
      children: [(0, n.jsx)(T.Heading, {
        id: H,
        variant: "heading-md/semibold",
        children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_2.format({
          roleName: u.name
        })
      }), (0, n.jsx)(T.ModalCloseButton, {
        className: y.modalCloseButton,
        onClick: t
      })]
    }), (0, n.jsxs)(T.ModalContent, {
      className: y.modalContent,
      children: [E.length > 1 && (0, n.jsx)("div", {
        className: y.list,
        children: (0, n.jsx)(V, {
          icon: (0, n.jsx)(p.default, {}),
          checked: _.size === E.length,
          onChange: function(e) {
            for (let t of E) S(t.id, e)
          },
          children: (0, n.jsx)(T.Text, {
            color: "header-primary",
            variant: "text-md/normal",
            children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS
          })
        })
      }), (0, n.jsx)("div", {
        className: y.list,
        children: E.map(e => {
          var t;
          let s = null !== (t = (0, f.getSimpleChannelIconComponent)(e.type)) && void 0 !== t ? t : O.default;
          return (0, n.jsx)(V, {
            icon: (0, n.jsx)("div", {
              className: y.rowIcon,
              children: (0, n.jsx)(s, {
                width: "100%",
                height: "100%"
              })
            }),
            checked: _.has(e.id),
            onChange: t => S(e.id, t),
            children: (0, n.jsx)(T.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              className: y.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, n.jsxs)(T.ModalFooter, {
      children: [(0, n.jsx)(T.Button, {
        type: "submit",
        children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_CONFIRM_BUTTON
      }), (0, n.jsx)(T.Button, {
        look: T.Button.Looks.LINK,
        color: T.Button.Colors.PRIMARY,
        onClick: l,
        children: B.default.Messages.CANCEL
      })]
    })]
  })
}

function Q(e) {
  let {
    transitionState: t,
    guildId: s,
    onClose: a,
    onImport: l
  } = e, [r, o] = i.useState();
  return (0, n.jsx)(T.ModalRoot, {
    transitionState: t,
    "aria-labelledby": null == r ? F : H,
    children: (0, n.jsxs)(T.Slides, {
      contentDisplay: "flex",
      activeSlide: null == r ? 0 : 1,
      width: 440,
      children: [(0, n.jsx)(T.Slide, {
        id: 0,
        children: (0, n.jsx)(Z, {
          onClose: a,
          guildId: s,
          onSelect: o
        })
      }), (0, n.jsx)(T.Slide, {
        id: 1,
        children: (0, n.jsx)(X, {
          onClose: a,
          guildId: s,
          role: r,
          onCancel: () => o(void 0),
          onImport: l
        })
      })]
    })
  })
}(l = a || (a = {}))[l.SELECT_ROLE = 0] = "SELECT_ROLE", l[l.SELECT_CHANNELS = 1] = "SELECT_CHANNELS"