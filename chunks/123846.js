"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  o = l.n(n),
  i = l("954955"),
  r = l.n(i),
  d = l("498607"),
  u = l.n(d),
  C = l("399606"),
  c = l("481060"),
  m = l("430824"),
  E = l("246946"),
  f = l("104259"),
  _ = l("206017"),
  M = l("292937"),
  h = l("757698"),
  T = l("553826"),
  S = l("692437"),
  x = l("912527"),
  A = l("202597"),
  p = l("893966"),
  L = l("527379"),
  g = l("327999"),
  H = l("734557"),
  N = l("981631"),
  I = l("689938"),
  R = l("299563"),
  v = l("989608");
let j = [g.JoinSourceType.DISCOVERY, g.JoinSourceType.VANITY_URL, g.JoinSourceType.BOT, g.JoinSourceType.HUB];

function D(e) {
  let {
    type: t,
    text: l,
    size: s,
    vanityUrl: n,
    isFocused: i
  } = e, r = null != s ? s : 16, d = function(e, t) {
    switch (e) {
      case g.JoinSourceType.BOT:
        return (0, a.jsx)(x.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(A.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(f.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.HUB:
        return (0, a.jsx)(_.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.INVITE:
      case g.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(h.default, {
          className: R.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, r), u = (0, g.getJoinSourceTypeLabel)(t, n);
  return (0, a.jsxs)("div", {
    className: o()(R.labelWithIconContainer),
    "aria-label": u,
    children: [null != d ? d : null, (0, a.jsx)(c.Text, {
      variant: 12 === r ? "text-xs/medium" : "text-sm/medium",
      className: o()(R.labelText, {
        [R.focused]: i
      }),
      children: l
    })]
  })
}

function b(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, C.useStateFromStores)([p.default], () => p.default.getSearchStateByGuildId(t), [t], u()), {
    inviteCodes: i
  } = (0, H.useGuildInvites)(t), d = (0, C.useStateFromStores)([m.default], () => m.default.getGuild(t)), f = null == d ? void 0 : d.vanityURLCode, [_, h] = s.useState(!1), {
    selectedSourceInviteCode: x,
    selectedJoinSourceType: A
  } = n, b = null != A && A !== g.JoinSourceType.UNSPECIFIED, O = (0, C.useStateFromStores)([E.default], () => E.default.hideInstantInvites, []);
  O && (i = []);
  let B = s.useCallback(e => {
      let l = e.trim();
      (0, L.updateSearchState)(t, {
        ...n,
        selectedSourceInviteCode: "" !== l ? l : void 0,
        selectedJoinSourceType: void 0
      })
    }, [t, n]),
    V = s.useCallback(e => {
      e === A ? (0, L.updateSearchState)(t, {
        selectedSourceInviteCode: void 0,
        selectedJoinSourceType: void 0
      }) : (0, L.updateSearchState)(t, {
        selectedSourceInviteCode: null,
        selectedJoinSourceType: e
      }), h(!1)
    }, [t, A]),
    F = s.useCallback(r()(B, 300), [B]),
    y = s.useCallback(e => {
      F(e)
    }, [F]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": I.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: N.NOOP,
    children: _ ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => h(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: R.customLabelContainer,
          children: [(0, a.jsx)(M.default, {
            width: 16,
            height: 16,
            className: R.__invalid_caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), j.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(D, {
          ...t,
          type: e,
          vanityUrl: f,
          text: (0, g.getJoinSourceTypeLabel)(e, f, O)
        }),
        checked: A === e,
        disabled: !1,
        action: () => V(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, a.jsx)(c.MenuSearchControl, {
          ...e,
          query: null != x ? x : "",
          onChange: y,
          ref: t,
          placeholder: I.default.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: I.default.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == x && null == A,
        disabled: !1,
        action: () => V(null),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), i.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(D, {
          ...t,
          type: g.JoinSourceType.INVITE,
          vanityUrl: f,
          text: e
        }),
        checked: x === e,
        disabled: !1,
        action: () => B(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuItem, {
        id: "other-join-methods",
        action: () => h(!0),
        render: e => (0, a.jsxs)("div", {
          className: o()(R.containerWithRightCaret, R.customLabelContainer),
          children: [(0, a.jsxs)("div", {
            className: o()(v.label),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              className: o()(R.__invalid_selectedRadio, R.labelText, {
                [R.focused]: e.isFocused
              }),
              children: I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), b ? (0, a.jsx)("div", {
              className: R.selectedOption,
              children: (0, a.jsx)(D, {
                ...e,
                size: 12,
                text: (0, g.getJoinSourceTypeLabel)(A, f, O),
                type: A,
                vanityUrl: f
              })
            }) : null]
          }), b ? (0, a.jsx)(T.default, {
            background: R.__invalid_radio,
            foreground: R.radioSelection,
            width: 16,
            height: 16
          }) : (0, a.jsx)(S.default, {
            width: 16,
            height: 16,
            className: R.__invalid_caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}