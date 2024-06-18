"use strict";
t.d(s, {
  C: function() {
    return X
  },
  K: function() {
    return Y
  }
}), t(47120), t(390547);
var n, i, l = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(77866),
  d = t(149765),
  u = t(866442),
  E = t(442837),
  _ = t(902704),
  I = t(477690),
  T = t(481060),
  N = t(596454),
  m = t(471445),
  S = t(605436),
  h = t(339085),
  g = t(518738),
  x = t(131704),
  C = t(324067),
  R = t(430824),
  L = t(153124),
  O = t(259580),
  A = t(93879),
  p = t(263704),
  M = t(486511),
  f = t(241820),
  v = t(176278),
  D = t(624138),
  Z = t(817460),
  j = t(166803),
  U = t(629262),
  G = t(686807),
  P = t(981631),
  b = t(689938),
  B = t(364268);
let y = (0, L.hQ)(),
  F = (0, L.hQ)(),
  w = (0, D.Mg)(I.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function k(e) {
  var s;
  let {
    emojiId: t,
    emojiName: n,
    className: i
  } = e, a = (0, E.e7)([h.Z], () => null != t ? h.Z.getCustomEmojiById(t) : void 0);
  return (0, l.jsx)(N.Z, {
    emojiId: t,
    emojiName: n,
    animated: null !== (s = null == a ? void 0 : a.animated) && void 0 !== s && s,
    className: i
  })
}

function H(e) {
  let {
    icon: s,
    children: t,
    checked: n,
    disabled: i = !1,
    onChange: a
  } = e, r = n || i;
  return (0, l.jsxs)("label", {
    className: o()(B.row, {
      [B.checked]: r,
      [B.disabled]: i
    }),
    children: [(0, l.jsx)("div", {
      className: B.rowIconWrapper,
      children: s
    }), (0, l.jsx)("div", {
      className: B.rowText,
      children: t
    }), (0, l.jsxs)("div", {
      className: B.rowCheckbox,
      children: [(0, l.jsx)(T.FocusRing, {
        children: (0, l.jsx)("input", {
          type: "checkbox",
          checked: r,
          disabled: i,
          className: B.checkboxInput,
          onChange: function(e) {
            a(e.target.checked)
          }
        })
      }), (0, l.jsx)("div", {
        className: B.checkboxDisplay,
        children: (0, l.jsx)(p.Z, {
          className: B.checkboxIcon,
          "aria-hidden": !0
        })
      })]
    })]
  })
}

function V(e) {
  let {
    title: s,
    selectAllText: t,
    benefits: n,
    dupeBenefits: i,
    selectedBenefits: a,
    onToggleBenefit: r
  } = e, o = n.every(e => a.has(e));
  return n.length > 0 ? (0, l.jsxs)(T.FormSection, {
    title: s,
    className: B.section,
    children: [n.length - i.size > 1 && (0, l.jsx)("div", {
      className: B.list,
      children: (0, l.jsx)(H, {
        icon: (0, l.jsx)(M.Z, {
          className: B.rowIcon
        }),
        checked: o,
        onChange: function(e) {
          for (let s of n) !i.has(s) && r(s, e)
        },
        children: (0, l.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: t
        })
      })
    }), (0, l.jsx)("div", {
      className: B.list,
      children: n.map(e => (0, l.jsxs)(H, {
        icon: (0, l.jsx)(k, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: B.rowIcon
        }),
        checked: a.has(e),
        disabled: i.has(e),
        onChange: s => r(e, s),
        children: [(0, l.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, G.Z)(e)
        }), (0, l.jsx)(T.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, Z.ab)(e)))
    })]
  }) : null
}

function Y(e) {
  let {
    transitionState: s,
    fromSubscriptionListing: t,
    existingChannelBenefits: n,
    existingIntangibleBenefits: i,
    onSubmit: r,
    onClose: o
  } = e, c = t.role_benefits.benefits, [d, u] = a.useState(() => new Set(c)), E = a.useMemo(() => c.filter(Z.rC), [c]), I = (0, U.Z)(E), N = a.useMemo(() => c.filter(Z.lL), [c]), m = a.useMemo(() => new Set(I.filter(e => n.some(s => s.ref_id === e.ref_id))), [I, n]), S = a.useMemo(() => new Set(N.filter(e => i.some(s => (0, _.Z)(e, s)))), [i, N]), h = (0, L.Dt)();

  function g(e, s) {
    u(t => {
      let n = new Set(t);
      return s ? n.add(e) : n.delete(e), n
    })
  }
  return (0, l.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault();
      let s = c.filter(e => d.has(e)),
        t = s.filter(Z.rC).filter(e => !m.has(e));
      r(t, s.filter(Z.lL).filter(e => !S.has(e))), o()
    },
    children: (0, l.jsxs)(T.ModalRoot, {
      transitionState: s,
      "aria-labelledby": h,
      children: [(0, l.jsxs)(T.ModalHeader, {
        children: [(0, l.jsx)(T.Heading, {
          id: h,
          variant: "heading-md/semibold",
          children: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_MODAL_HEADER.format({
            tierName: t.name
          })
        }), (0, l.jsx)(T.ModalCloseButton, {
          className: B.modalCloseButton,
          onClick: o
        })]
      }), (0, l.jsxs)(T.ModalContent, {
        className: B.modalContent,
        children: [(0, l.jsx)(V, {
          title: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
          selectAllText: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS,
          benefits: I,
          dupeBenefits: m,
          selectedBenefits: d,
          onToggleBenefit: g
        }), (0, l.jsx)(V, {
          title: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
          selectAllText: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_INTANGIBLE_BENEFITS,
          benefits: N,
          dupeBenefits: S,
          selectedBenefits: d,
          onToggleBenefit: g
        })]
      }), (0, l.jsxs)(T.ModalFooter, {
        children: [(0, l.jsx)(T.Button, {
          type: "submit",
          children: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_CONFIRM_BUTTON
        }), (0, l.jsx)(T.Button, {
          look: T.Button.Looks.LINK,
          color: T.Button.Colors.PRIMARY,
          onClick: o,
          children: b.Z.Messages.CANCEL
        })]
      })]
    })
  })
}

function W(e) {
  var s;
  let {
    guildId: t,
    role: n,
    channelCount: i,
    onSelect: a
  } = e, r = (0, g.p9)({
    guildId: t,
    roleId: n.id,
    size: w
  });
  return (0, l.jsxs)(T.Clickable, {
    className: B.roleRow,
    onClick: a,
    children: [(0, l.jsx)("div", {
      className: B.rowIconWrapper,
      children: null != r ? (0, l.jsx)(v.Z, {
        ...r
      }) : (0, l.jsx)(f.Z, {
        color: null !== (s = n.colorString) && void 0 !== s ? s : (0, u.Rf)(P.p6O),
        className: B.roleRowIconDefault
      })
    }), (0, l.jsxs)("div", {
      className: B.rowText,
      children: [(0, l.jsx)(T.Text, {
        color: "header-primary",
        variant: "text-md/normal",
        className: B.__invalid_benefitTitle,
        children: n.name
      }), (0, l.jsx)(T.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: b.Z.Messages.NUM_CHANNELS.format({
          num: i
        })
      })]
    }), (0, l.jsx)("div", {
      className: B.rowCheckbox,
      children: (0, l.jsx)(O.Z, {
        direction: O.Z.Directions.RIGHT
      })
    })]
  })
}

function K(e) {
  let {
    guild: s,
    onSelect: t
  } = e, n = (0, E.e7)([R.Z], () => R.Z.getRoles(s.id)), i = (0, E.e7)([C.Z], () => C.Z.getCategories(s.id)), r = a.useMemo(() => i._categories.flatMap(e => i[e.channel.id].filter(e => {
    let {
      channel: s
    } = e;
    return x.zS.has(s.type)
  }).map(e => {
    let {
      channel: s
    } = e;
    return s
  })), [i]), o = a.useMemo(() => Object.values(n).flatMap(e => {
    var t;
    if ((0, S.pM)(s.id, e.id) || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null || d.Db(e.permissions, P.TC2)) return [];
    let n = (0, j.Z)(r, e).length;
    return n > 0 ? {
      role: e,
      channelCount: n
    } : []
  }), [s, n, r]);
  return o.length > 0 ? (0, l.jsx)("div", {
    className: B.list,
    children: o.map(e => (0, l.jsx)(W, {
      guildId: s.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => t(e.role)
    }, e.role.id))
  }) : (0, l.jsx)(T.Text, {
    variant: "text-md/normal",
    children: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE_EMPTY
  })
}

function z(e) {
  let {
    onClose: s,
    guildId: t,
    onSelect: n
  } = e, i = (0, E.e7)([R.Z], () => R.Z.getGuild(t));
  return null == i ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(T.ModalHeader, {
      children: [(0, l.jsx)(T.Heading, {
        id: y,
        variant: "heading-md/semibold",
        children: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_1
      }), (0, l.jsx)(T.ModalCloseButton, {
        className: B.modalCloseButton,
        onClick: s
      })]
    }), (0, l.jsx)(T.ModalContent, {
      className: B.modalContent,
      children: (0, l.jsx)(K, {
        guild: i,
        onSelect: n
      })
    })]
  })
}

function q(e) {
  let {
    onClose: s,
    guildId: t,
    role: n,
    onCancel: i,
    onImport: r
  } = e, o = a.useRef(n);
  null != n && (o.current = n);
  let d = null != n ? n : o.current,
    u = (0, c.Z)(() => {
      let e = C.Z.getCategories(t);
      return e._categories.flatMap(s => e[s.channel.id].filter(e => {
        let {
          channel: s
        } = e;
        return x.zS.has(s.type)
      }).map(e => {
        let {
          channel: s
        } = e;
        return s
      }))
    }),
    E = a.useMemo(() => (0, j.Z)(u, d), [u, d]),
    [_, I] = a.useState(() => new Set(E.map(e => e.id)));

  function N(e, s) {
    I(t => {
      let n = new Set(t);
      return s ? n.add(e) : n.delete(e), n
    })
  }
  return (0, l.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), r(E.map(e => e.id).filter(e => _.has(e))), s()
    },
    className: B.slideForm,
    children: [(0, l.jsxs)(T.ModalHeader, {
      children: [(0, l.jsx)(T.Heading, {
        id: F,
        variant: "heading-md/semibold",
        children: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_2.format({
          roleName: d.name
        })
      }), (0, l.jsx)(T.ModalCloseButton, {
        className: B.modalCloseButton,
        onClick: s
      })]
    }), (0, l.jsxs)(T.ModalContent, {
      className: B.modalContent,
      children: [E.length > 1 && (0, l.jsx)("div", {
        className: B.list,
        children: (0, l.jsx)(H, {
          icon: (0, l.jsx)(M.Z, {}),
          checked: _.size === E.length,
          onChange: function(e) {
            for (let s of E) N(s.id, e)
          },
          children: (0, l.jsx)(T.Text, {
            color: "header-primary",
            variant: "text-md/normal",
            children: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS
          })
        })
      }), (0, l.jsx)("div", {
        className: B.list,
        children: E.map(e => {
          var s;
          let t = null !== (s = (0, m.Th)(e.type)) && void 0 !== s ? s : A.Z;
          return (0, l.jsx)(H, {
            icon: (0, l.jsx)("div", {
              className: B.rowIcon,
              children: (0, l.jsx)(t, {
                width: "100%",
                height: "100%"
              })
            }),
            checked: _.has(e.id),
            onChange: s => N(e.id, s),
            children: (0, l.jsx)(T.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              className: B.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, l.jsxs)(T.ModalFooter, {
      children: [(0, l.jsx)(T.Button, {
        type: "submit",
        children: b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_CONFIRM_BUTTON
      }), (0, l.jsx)(T.Button, {
        look: T.Button.Looks.LINK,
        color: T.Button.Colors.PRIMARY,
        onClick: i,
        children: b.Z.Messages.CANCEL
      })]
    })]
  })
}

function X(e) {
  let {
    transitionState: s,
    guildId: t,
    onClose: n,
    onImport: i
  } = e, [r, o] = a.useState();
  return (0, l.jsx)(T.ModalRoot, {
    transitionState: s,
    "aria-labelledby": null == r ? y : F,
    children: (0, l.jsxs)(T.Slides, {
      contentDisplay: "flex",
      activeSlide: null == r ? 0 : 1,
      width: 440,
      children: [(0, l.jsx)(T.Slide, {
        id: 0,
        children: (0, l.jsx)(z, {
          onClose: n,
          guildId: t,
          onSelect: o
        })
      }), (0, l.jsx)(T.Slide, {
        id: 1,
        children: (0, l.jsx)(q, {
          onClose: n,
          guildId: t,
          role: r,
          onCancel: () => o(void 0),
          onImport: i
        })
      })]
    })
  })
}(i = n || (n = {}))[i.SELECT_ROLE = 0] = "SELECT_ROLE", i[i.SELECT_CHANNELS = 1] = "SELECT_CHANNELS"