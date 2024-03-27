"use strict";
l.r(t), l.d(t, {
  roleToPendingAddition: function() {
    return B
  },
  channelToPendingAddition: function() {
    return V
  },
  default: function() {
    return w
  }
}), l("222007");
var a, s, n, o, i, r, d = l("37983"),
  u = l("884691"),
  C = l("414456"),
  c = l.n(C),
  m = l("448105"),
  E = l.n(m),
  f = l("446674"),
  M = l("77078"),
  h = l("137223"),
  _ = l("679653"),
  T = l("419830"),
  S = l("405645"),
  x = l("19766"),
  A = l("42203"),
  p = l("305961"),
  L = l("27618"),
  H = l("697218"),
  N = l("476765"),
  g = l("483093"),
  I = l("782340"),
  R = l("761394");
let j = (0, N.uid)(),
  v = (0, N.uid)(),
  D = "text-sm/medium";

function b(e) {
  return 1 === e.type
}

function O(e) {
  return 0 === e.type
}

function B(e) {
  let t = "".concat(e.name.includes(x.EVERYONE_ID) ? "" : "@").concat(e.name);
  return {
    tag: {
      type: h.RichTagTypes.ROLE,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 1,
      record: e
    }
  }
}

function V(e) {
  let t = (0, _.computeChannelName)(e, H.default, L.default);
  return {
    tag: {
      type: h.RichTagTypes.CHANNEL,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 0,
      record: e
    }
  }
}(o = a || (a = {}))[o.CHANNEL = 0] = "CHANNEL", o[o.ROLE = 1] = "ROLE";
let F = u.memo(function(e) {
  var t;
  let {
    row: l,
    guildId: a,
    className: s
  } = e, {
    id: n,
    name: o
  } = l.record, i = (0, S.useRoleIcon)({
    guildId: a,
    roleId: n,
    size: 16
  }), r = (0, f.useStateFromStores)([p.default], () => p.default.getRole(a, n)), u = o.includes(x.EVERYONE_ID) ? "" : "@", C = (0, M.useToken)(M.tokens.unsafe_rawColors.PRIMARY_300).hsl(), m = null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : C;
  return (0, d.jsxs)("div", {
    className: c(R.rowLabel, R.roleTagContainer, s),
    children: [(0, d.jsx)(M.RoleDot, {
      className: R.roleDot,
      color: m,
      background: !1,
      tooltip: !1
    }), null != i ? (0, d.jsx)(g.default, {
      className: R.roleTagIcon,
      ...i,
      enableTooltip: !1
    }) : u, (0, d.jsx)(M.Text, {
      variant: D,
      className: R.roleTagLabel,
      children: o
    })]
  })
});

function y(e) {
  let {
    channel: t,
    row: l,
    className: a
  } = e, s = null != t.parent_id, n = (0, T.getChannelIconComponent)(t);
  return (0, d.jsxs)("div", {
    className: c(R.rowLabel, R.channelLabel, {
      [R.hasParent]: s
    }, a),
    children: [null != n && (0, d.jsx)(n, {
      width: 16,
      height: 16,
      className: R.channelIcon
    }), (0, d.jsx)(M.Text, {
      variant: t.isCategory() ? "eyebrow" : D,
      children: l.display
    })]
  })
}

function U(e, t, l) {
  return b(e) ? (0, d.jsx)(F, {
    row: e,
    guildId: t,
    className: l
  }, e.record.id) : O(e) ? (0, d.jsx)(y, {
    row: e,
    channel: e.record,
    className: l
  }, e.record.id) : null
}

function w(e) {
  let {
    guildId: t,
    roleRows: l = [],
    channelRows: a = [],
    selectedChannelIds: s = new Set,
    selectedRoleIds: n = new Set,
    onChange: o,
    placeholder: i,
    helperText: r,
    className: C
  } = e, m = (0, f.useStateFromStores)([p.default], () => p.default.getRoles(t)), _ = u.useMemo(() => (function(e, t, l) {
    if (null == e) return {};
    let a = {};
    return e.forEach(e => {
      let t = A.default.getChannel(e);
      null != t && (a[e] = V(t))
    }), t.forEach(e => {
      e in l && (a[e] = B(l[e]))
    }), a
  })(s, n, m), [s, n, m]), T = u.useMemo(() => Object.keys(_), [_]), [S, x] = u.useState(""), [L, H] = u.useState(!1), [N, g] = u.useState(!1), [D, F] = u.useState(!1), y = u.useRef(null), {
    sections: w,
    sectionCounts: k
  } = u.useMemo(() => {
    let e = "" !== S ? a.filter(e => E(S, e.display.toLocaleLowerCase())) : a,
      t = "" !== S ? l.filter(e => E(S, e.display.toLocaleLowerCase())) : l,
      s = [],
      n = [];
    return s[0] = e, n[0] = e.length, s[1] = t, n[1] = t.length, {
      sections: s,
      sectionCounts: n
    }
  }, [S, a, l]), P = u.useCallback(e => {
    let t = Object.values(e),
      l = t.filter(e => {
        let {
          row: t
        } = e;
        return O(t)
      }).map(e => e.row.record.id),
      a = t.filter(e => {
        let {
          row: t
        } = e;
        return b(t)
      }).map(e => e.row.record.id);
    o(new Set(l), new Set(a))
  }, [o]), Z = () => {
    H(!1), g(!1)
  };
  u.useEffect(() => {
    let e = setTimeout(() => {
      F(L || N)
    }, 32);
    return () => {
      clearTimeout(e)
    }
  }, [L, N]);
  let Y = (e, t, l) => {
      l.stopPropagation(), l.preventDefault(), 2 === t ? H(e) : (1 === t || H(e), g(e))
    },
    G = u.useCallback(e => {
      let t = {
        ..._
      };
      O(e) ? t[e.id] = V(e.record) : b(e) && (t[e.id] = B(e.record)), P(t), x(""), Z(), setTimeout(() => {
        var e;
        let t = null === (e = y.current) || void 0 === e ? void 0 : e.containerRef.current,
          l = null == t ? void 0 : t.firstChild;
        null != l && l.scrollTo({
          top: l.scrollHeight,
          behavior: "smooth"
        })
      }, 16)
    }, [P, _]),
    J = u.useCallback(e => {
      let {
        section: l,
        row: a
      } = e, s = w[l][a];
      return (0, d.jsx)(M.Clickable, {
        className: c(R.selectableSearchRow, R.rowHeight),
        onClick: e => {
          e.stopPropagation(), G(s)
        },
        children: (0, d.jsx)("div", {
          className: R.rowContainer,
          children: U(s, t, R.searchRowLabel)
        })
      }, s.id)
    }, [t, G, w]),
    q = u.useMemo(() => T.map(e => {
      var l, a;
      return l = _[e], a = t, {
        ...l.tag,
        label: U(l.row, a, R.noIndent)
      }
    }), [_, T, t]);
  return (0, d.jsxs)("div", {
    className: c(R.searchContainer, C),
    children: [(0, d.jsxs)("div", {
      className: R.searchBox,
      children: [(0, d.jsx)(h.default, {
        tags: q,
        maxHeight: 98,
        size: h.default.Sizes.MEDIUM,
        query: S,
        ref: y,
        onRemoveTag: e => {
          let t = T[e],
            {
              [t]: l,
              ...a
            } = _;
          P(a), x(""), Z()
        },
        onQueryChange: e => {
          x(e.trim().toLocaleLowerCase())
        },
        placeholder: null != i ? i : I.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_PLACEHOLDER,
        sections: [T.length],
        inputProps: {
          "aria-labelledby": j,
          "aria-controls": v,
          "aria-expanded": D,
          onFocus: e => Y(!0, 2, e),
          onBlur: e => Y(!1, 2, e)
        }
      }), D && (0, d.jsx)("div", {
        className: R.resultsListParent,
        onFocus: e => Y(!0, 1, e),
        onBlur: e => Y(!1, 1, e),
        tabIndex: -1,
        children: (0, d.jsx)(M.ListAuto, {
          className: R.resultsListContainer,
          innerClassName: R.resultsList,
          sections: k,
          renderRow: J,
          rowHeight: 34,
          renderSection: e => {
            let {
              section: t
            } = e;
            return 0 === t ? (0, d.jsx)(M.FormTitle, {
              tag: "h5",
              className: c(R.sectionTitle, R.sectionHeight),
              children: I.default.Messages.CHANNELS
            }, I.default.Messages.CHANNELS) : 1 === t ? (0, d.jsx)(M.FormTitle, {
              tag: "h5",
              className: c(R.sectionTitle, R.sectionHeight),
              children: I.default.Messages.ROLES
            }, I.default.Messages.ROLES) : null
          },
          renderFooter: e => {
            let {
              section: t
            } = e;
            if (0 === t) return 0 === k[1] && k[0] > 0 ? null : (0, d.jsx)("div", {
              className: R.sectionFooter,
              children: (0, d.jsx)(M.FormDivider, {})
            });
            return null
          },
          sectionHeight: 24,
          footerHeight: e => {
            if (0 === e) return 0 === k[1] && k[0] > 0 ? 0 : 32;
            return 0
          },
          role: void 0,
          innerRole: "listbox",
          innerId: v,
          innerAriaOrientation: "vertical"
        })
      })]
    }), null != r && (0, d.jsx)(M.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: R.helperText,
      children: r
    })]
  })
}(i = s || (s = {}))[i.CHANNELS = 0] = "CHANNELS", i[i.ROLES = 1] = "ROLES", (r = n || (n = {}))[r.NONE = 0] = "NONE", r[r.LIST = 1] = "LIST", r[r.INPUT = 2] = "INPUT"