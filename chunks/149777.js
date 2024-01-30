"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("483366"),
  d = l.n(o),
  r = l("969176"),
  u = l.n(r),
  C = l("65597"),
  c = l("77078"),
  f = l("305961"),
  m = l("627490"),
  E = l("745633"),
  M = l("980428"),
  h = l("83900"),
  _ = l("875436"),
  T = l("772280"),
  x = l("71216"),
  S = l("741919"),
  A = l("178406"),
  g = l("645266"),
  p = l("835257"),
  H = l("561909"),
  N = l("49111"),
  L = l("782340"),
  I = l("579550"),
  R = l("946032");
let v = [p.JoinSourceType.DISCOVERY, p.JoinSourceType.VANITY_URL, p.JoinSourceType.BOT, p.JoinSourceType.HUB];

function b(e) {
  let {
    type: t,
    text: l,
    size: n,
    vanityUrl: s,
    isFocused: o
  } = e, d = null != n ? n : 16, r = function(e, t) {
    switch (e) {
      case p.JoinSourceType.BOT:
        return (0, a.jsx)(x.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(S.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(m.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.HUB:
        return (0, a.jsx)(E.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.INVITE:
      case p.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(h.default, {
          className: I.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, d), u = (0, p.getJoinSourceTypeLabel)(t, s);
  return (0, a.jsxs)("div", {
    className: i(I.labelWithIconContainer),
    "aria-label": u,
    children: [null != r ? r : null, (0, a.jsx)(c.Text, {
      variant: 12 === d ? "text-xs/medium" : "text-sm/medium",
      className: i(I.labelText, {
        [I.focused]: o
      }),
      children: l
    })]
  })
}

function j(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, C.default)([A.default], () => A.default.getSearchStateByGuildId(t), [t], u), {
    inviteCodes: o
  } = (0, H.useGuildInvites)(t), r = (0, C.default)([f.default], () => f.default.getGuild(t)), m = null == r ? void 0 : r.vanityURLCode, [E, h] = n.useState(!1), {
    selectedSourceInviteCode: x,
    selectedJoinSourceType: S
  } = s, j = null != S && S !== p.JoinSourceType.UNSPECIFIED, D = n.useCallback(e => {
    let l = e.trim();
    (0, g.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: "" !== l ? l : void 0,
      selectedJoinSourceType: void 0
    })
  }, [t, s]), O = n.useCallback(e => {
    e === S ? (0, g.updateSearchState)(t, {
      selectedSourceInviteCode: void 0,
      selectedJoinSourceType: void 0
    }) : (0, g.updateSearchState)(t, {
      selectedSourceInviteCode: null,
      selectedJoinSourceType: e
    }), h(!1)
  }, [t, S]), V = n.useCallback(d(D, 300), [D]), B = n.useCallback(e => {
    V(e)
  }, [V]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": L.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: N.NOOP,
    children: E ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => h(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: I.customLabelContainer,
          children: [(0, a.jsx)(M.default, {
            width: 16,
            height: 16,
            className: I.caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: L.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), v.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(b, {
          ...t,
          type: e,
          vanityUrl: m,
          text: (0, p.getJoinSourceTypeLabel)(e, m)
        }),
        checked: S === e,
        disabled: !1,
        action: () => O(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, a.jsx)(c.MenuSearchControl, {
          ...e,
          query: null != x ? x : "",
          onChange: B,
          ref: t,
          placeholder: L.default.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: L.default.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == x && null == S,
        disabled: !1,
        action: () => O(null),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), o.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(b, {
          ...t,
          type: p.JoinSourceType.INVITE,
          vanityUrl: m,
          text: e
        }),
        checked: x === e,
        disabled: !1,
        action: () => D(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuItem, {
        id: "other-join-methods",
        action: () => h(!0),
        render: e => (0, a.jsxs)("div", {
          className: i(I.containerWithRightCaret, I.customLabelContainer),
          children: [(0, a.jsxs)("div", {
            className: i(R.label),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              className: i(I.selectedRadio, I.labelText, {
                [I.focused]: e.isFocused
              }),
              children: L.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), j ? (0, a.jsx)("div", {
              className: I.selectedOption,
              children: (0, a.jsx)(b, {
                ...e,
                size: 12,
                text: (0, p.getJoinSourceTypeLabel)(S, m),
                type: S,
                vanityUrl: m
              })
            }) : null]
          }), j ? (0, a.jsx)(_.default, {
            background: I.radio,
            foreground: I.radioSelection,
            width: 16,
            height: 16
          }) : (0, a.jsx)(T.default, {
            width: 16,
            height: 16,
            className: I.caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}