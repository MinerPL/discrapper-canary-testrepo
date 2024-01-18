"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("483366"),
  d = l.n(o),
  u = l("969176"),
  r = l.n(u),
  C = l("65597"),
  c = l("77078"),
  f = l("305961"),
  m = l("627490"),
  E = l("745633"),
  M = l("980428"),
  h = l("83900"),
  T = l("71216"),
  x = l("741919"),
  _ = l("178406"),
  H = l("645266"),
  A = l("835257"),
  p = l("49111"),
  S = l("782340"),
  L = l("579550");
let g = [A.JoinSourceType.DISCOVERY, A.JoinSourceType.VANITY_URL, A.JoinSourceType.BOT, A.JoinSourceType.HUB];

function N(e) {
  let {
    type: t,
    vanityUrl: l,
    size: n,
    isFocused: s
  } = e, o = null != n ? n : 16, d = (0, A.getJoinSourceTypeLabel)(t, l), u = function(e, t) {
    switch (e) {
      case A.JoinSourceType.BOT:
        return (0, a.jsx)(T.default, {
          className: L.icon,
          height: t,
          width: t
        });
      case A.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(x.default, {
          className: L.icon,
          height: t,
          width: t
        });
      case A.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(m.default, {
          className: L.icon,
          height: t,
          width: t
        });
      case A.JoinSourceType.HUB:
        return (0, a.jsx)(E.default, {
          className: L.icon,
          height: t,
          width: t
        });
      case A.JoinSourceType.INVITE:
        return null;
      case A.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(h.default, {
          className: L.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, o);
  return (0, a.jsxs)("div", {
    className: i(L.radioLabelContainer),
    "aria-label": d,
    children: [null != u ? u : null, (0, a.jsx)(c.Text, {
      variant: 12 === o ? "text-xs/medium" : "text-sm/medium",
      className: i(L.labelText, {
        [L.focused]: s
      }),
      children: d
    })]
  })
}

function v(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, C.default)([_.default], () => _.default.getSearchStateByGuildId(t), [t], r), o = (0, C.default)([f.default], () => f.default.getGuild(t)), u = null == o ? void 0 : o.vanityURLCode, [m, E] = n.useState(!1), {
    selectedSourceInviteCode: h,
    selectedJoinSourceType: T
  } = s, x = null != T && T !== A.JoinSourceType.UNSPECIFIED, v = n.useCallback(e => {
    let l = e.trim();
    (0, H.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: "" !== l ? l : void 0,
      selectedJoinSourceType: void 0
    })
  }, [t, s]), I = n.useCallback(e => {
    e === T ? (0, H.updateSearchState)(t, {
      ...s,
      selectedJoinSourceType: void 0
    }) : (0, H.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: void 0,
      selectedJoinSourceType: e
    }), E(!1)
  }, [t, s, T]), R = n.useCallback(d(v, 300), [v]), j = n.useCallback(e => {
    R(e)
  }, [R]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": S.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: p.NOOP,
    children: m ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => E(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: L.nagivateBackContainer,
          children: [(0, a.jsx)(M.default, {
            width: 16,
            height: 16,
            className: L.caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: S.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: S.default.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == T,
        disabled: !1,
        action: () => I(void 0),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), g.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(N, {
          ...t,
          type: e,
          vanityUrl: u
        }),
        checked: T === e,
        disabled: !1,
        action: () => I(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, a.jsx)(c.MenuSearchControl, {
          ...e,
          query: null != h ? h : "",
          onChange: j,
          ref: t,
          placeholder: S.default.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, a.jsx)(c.MenuRadioItem, {
        id: "other-join-methods",
        group: "join-source-type-options",
        checked: x,
        action: () => E(!0),
        label: e => (0, a.jsxs)("span", {
          children: [(0, a.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: i(L.selectedRadio, L.labelText, {
              [L.focused]: e.isFocused
            }),
            children: S.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          }), x ? (0, a.jsx)("div", {
            className: L.selectedOption,
            children: (0, a.jsx)(N, {
              ...e,
              size: 12,
              type: T,
              vanityUrl: u
            })
          }) : null]
        })
      }, "other-join-methods")]
    })
  })
}