"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("222007");
var a = l("37983"),
  s = l("884691"),
  n = l("414456"),
  o = l.n(n),
  i = l("483366"),
  r = l.n(i),
  d = l("969176"),
  u = l.n(d),
  C = l("65597"),
  c = l("77078"),
  m = l("305961"),
  E = l("102985"),
  f = l("627490"),
  M = l("745633"),
  h = l("980428"),
  _ = l("83900"),
  T = l("875436"),
  S = l("772280"),
  x = l("71216"),
  A = l("741919"),
  p = l("178406"),
  L = l("645266"),
  H = l("835257"),
  N = l("561909"),
  g = l("49111"),
  I = l("782340"),
  R = l("655295"),
  j = l("639826");
let v = [H.JoinSourceType.DISCOVERY, H.JoinSourceType.VANITY_URL, H.JoinSourceType.BOT, H.JoinSourceType.HUB];

function D(e) {
  let {
    type: t,
    text: l,
    size: s,
    vanityUrl: n,
    isFocused: i
  } = e, r = null != s ? s : 16, d = function(e, t) {
    switch (e) {
      case H.JoinSourceType.BOT:
        return (0, a.jsx)(x.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case H.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(A.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case H.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(f.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case H.JoinSourceType.HUB:
        return (0, a.jsx)(M.default, {
          className: R.icon,
          height: t,
          width: t
        });
      case H.JoinSourceType.INVITE:
      case H.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(_.default, {
          className: R.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, r), u = (0, H.getJoinSourceTypeLabel)(t, n);
  return (0, a.jsxs)("div", {
    className: o(R.labelWithIconContainer),
    "aria-label": u,
    children: [null != d ? d : null, (0, a.jsx)(c.Text, {
      variant: 12 === r ? "text-xs/medium" : "text-sm/medium",
      className: o(R.labelText, {
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
  } = e, n = (0, C.useStateFromStores)([p.default], () => p.default.getSearchStateByGuildId(t), [t], u), {
    inviteCodes: i
  } = (0, N.useGuildInvites)(t), d = (0, C.useStateFromStores)([m.default], () => m.default.getGuild(t)), f = null == d ? void 0 : d.vanityURLCode, [M, _] = s.useState(!1), {
    selectedSourceInviteCode: x,
    selectedJoinSourceType: A
  } = n, b = null != A && A !== H.JoinSourceType.UNSPECIFIED, O = (0, C.useStateFromStores)([E.default], () => E.default.hideInstantInvites, []);
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
      }), _(!1)
    }, [t, A]),
    F = s.useCallback(r(B, 300), [B]),
    y = s.useCallback(e => {
      F(e)
    }, [F]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": I.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: g.NOOP,
    children: M ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => _(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: R.customLabelContainer,
          children: [(0, a.jsx)(h.default, {
            width: 16,
            height: 16,
            className: R.caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), v.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(D, {
          ...t,
          type: e,
          vanityUrl: f,
          text: (0, H.getJoinSourceTypeLabel)(e, f, O)
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
          type: H.JoinSourceType.INVITE,
          vanityUrl: f,
          text: e
        }),
        checked: x === e,
        disabled: !1,
        action: () => B(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuItem, {
        id: "other-join-methods",
        action: () => _(!0),
        render: e => (0, a.jsxs)("div", {
          className: o(R.containerWithRightCaret, R.customLabelContainer),
          children: [(0, a.jsxs)("div", {
            className: o(j.label),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              className: o(R.selectedRadio, R.labelText, {
                [R.focused]: e.isFocused
              }),
              children: I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), b ? (0, a.jsx)("div", {
              className: R.selectedOption,
              children: (0, a.jsx)(D, {
                ...e,
                size: 12,
                text: (0, H.getJoinSourceTypeLabel)(A, f, O),
                type: A,
                vanityUrl: f
              })
            }) : null]
          }), b ? (0, a.jsx)(T.default, {
            background: R.radio,
            foreground: R.radioSelection,
            width: 16,
            height: 16
          }) : (0, a.jsx)(S.default, {
            width: 16,
            height: 16,
            className: R.caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}