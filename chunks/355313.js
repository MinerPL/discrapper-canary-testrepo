"use strict";
a.r(t), a.d(t, {
  getFullRowId: function() {
    return m
  },
  default: function() {
    return C
  }
}), a("222007"), a("808653");
var l = a("37983"),
  n = a("884691"),
  r = a("414456"),
  s = a.n(r),
  i = a("974667"),
  d = a("77078"),
  o = a("507453"),
  u = a("79798"),
  c = a("145131"),
  S = a("476263"),
  f = a("476765"),
  A = a("682344"),
  T = a("454273"),
  _ = a("191458"),
  E = a("606762"),
  I = a("782340"),
  g = a("129647");
let R = (0, f.uid)(),
  h = (0, f.uid)();

function m(e) {
  return "".concat(e.rowType, ":").concat(e.id)
}

function D(e) {
  return (0, l.jsx)(d.FormTitle, {
    tag: "h5",
    className: s(g.sectionTitle, g.rowHeight),
    children: e
  }, e)
}

function v(e) {
  let {
    id: t,
    children: a,
    rowLabel: n,
    checked: r,
    onSelect: o,
    disabled: u,
    showCheckbox: S,
    selected: f,
    onMouseEnter: A,
    "aria-posinset": T,
    "aria-setsize": _
  } = e, E = (0, i.useListItem)(t);
  return (0, l.jsx)(d.Clickable, {
    ...E,
    id: t,
    className: s(g.addMemberRow, {
      [g.selectedRow]: f
    }),
    onClick: e => {
      !u && (e.preventDefault(), o())
    },
    onMouseEnter: A,
    role: "option",
    "aria-disabled": u,
    "aria-selected": r,
    "aria-setsize": _,
    "aria-posinset": T,
    children: (0, l.jsxs)(c.default, {
      justify: c.default.Justify.BETWEEN,
      align: c.default.Align.CENTER,
      children: [S ? (0, l.jsx)(d.Checkbox, {
        displayOnly: !0,
        size: 18,
        value: r,
        type: d.Checkbox.Types.INVERTED,
        disabled: u,
        children: (0, l.jsx)("div", {
          className: g.checkboxLabel,
          children: a
        })
      }) : a, null != n ? (0, l.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: n
      }) : null]
    })
  })
}

function C(e) {
  let {
    listClassName: t,
    pendingAdditions: a,
    query: r,
    onQueryChange: i,
    onClickRow: f,
    onRemovePendingAddition: C,
    roles: x = [],
    members: N = [],
    users: L = [],
    guilds: B = [],
    placeholderText: w,
    disabledText: M,
    hintText: p,
    searchTitleText: O,
    renderEmptyText: y,
    focusSearchAfterReady: U,
    isReady: b,
    maxCount: G,
    hideRowLabel: j = !1
  } = e, F = n.useRef(null), k = n.useRef(null), P = [x.length, N.length, L.length, B.length], [H, V] = n.useState(!1), [Y, z] = n.useState(0), [W, X] = n.useState(-1);
  n.useEffect(() => {
    var e;
    null === (e = F.current) || void 0 === e || e.focus()
  }, []);
  let q = n.useCallback(function(e, t) {
      let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      if (z(e), X(t), a) {
        var l;
        null === (l = k.current) || void 0 === l || l.scrollToIndex({
          section: null != e ? e : 0,
          row: null != t ? t : 0,
          padding: 8
        })
      }
    }, []),
    Q = n.useCallback((e, t) => {
      if (null == t) return;
      i("");
      let a = e === E.AudienceSelectorSections.ROLES ? x : [],
        l = a[t];
      l.rowType !== E.RowType.EMPTY_STATE && f(l)
    }, [x, f, i]),
    J = n.useCallback(e => {
      var t;
      null != e && e.rowType !== E.RowType.EMPTY_STATE && (f(e), i(""), null === (t = F.current) || void 0 === t || t.focus())
    }, [f, i]),
    K = n.useMemo(() => Object.keys(a), [a]),
    Z = n.useMemo(() => N.some(e => !e.disabled) || x.some(e => !e.disabled) || L.some(e => !e.disabled) || B.some(e => !e.disabled), [N, x, L, B]),
    $ = Z || "" === r.trim();

  function ee() {
    var e;
    V(!(null === (e = k.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && $)
  }
  return n.useEffect(() => {
    ee()
  }), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: s(g.searchBox, {
        [g.scrollSeparator]: H
      }),
      children: [null != O && (0, l.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        children: O
      }), (0, l.jsx)(_.default, {
        ref: F,
        query: r,
        onQueryChange: i,
        selectedSection: Y,
        selectedRow: W,
        onSelectionChange: q,
        onSelect: Q,
        tags: K.map(e => a[e].display),
        sections: P,
        onRemoveTag: function(e) {
          C(K[e])
        },
        placeholder: w,
        focusAfterReady: U,
        isReady: b,
        "aria-labelledby": R,
        "aria-controls": h
      }), null != p ? (0, l.jsx)(d.Text, {
        variant: "text-xs/normal",
        children: p
      }) : null]
    }), $ ? (0, l.jsx)(d.List, {
      ref: k,
      className: s(g.roleMemberList, t),
      sections: P,
      renderRow: e => {
        let t, n, {
            section: r,
            row: i
          } = e,
          o = null,
          c = !1,
          f = !1,
          _ = !1,
          I = !c && null != G && Object.keys(a).length >= G;
        switch (r) {
          case E.AudienceSelectorSections.ROLES:
            c = (n = m(o = x[i])) in a || o.disabled, f = o.disabled || I, _ = Y === E.AudienceSelectorSections.ROLES && W === i, t = (0, l.jsxs)("div", {
              className: g.rowBody,
              children: [(0, l.jsx)("div", {
                className: s(g.rowHeight, g.alignCenter),
                children: (0, l.jsx)(A.default, {
                  color: o.colorString,
                  height: 20
                })
              }), (0, l.jsxs)("div", {
                className: g.rowLabel,
                children: [(0, l.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  className: g.rowTitle,
                  color: o.rowType === E.RowType.EMPTY_STATE ? "text-muted" : "text-normal",
                  children: o.name
                }), o.disabled && null != M ? (0, l.jsx)(d.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: M
                }) : null]
              })]
            });
            break;
          case E.AudienceSelectorSections.MEMBERS:
            c = (n = m(o = N[i])) in a || o.disabled, f = o.disabled || I, _ = Y === E.AudienceSelectorSections.MEMBERS && W === i, t = (0, l.jsxs)("div", {
              className: g.rowBody,
              children: [(0, l.jsx)(d.Avatar, {
                src: o.avatarURL,
                size: d.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, l.jsx)(d.Text, {
                className: g.rowLabel,
                variant: "text-sm/normal",
                children: o.name
              }), null != o.nickname ? (0, l.jsx)(d.Text, {
                color: "text-muted",
                className: g.rowLabelSubText,
                variant: "text-sm/normal",
                "aria-hidden": !0,
                children: o.username
              }) : null, o.bot && (0, l.jsx)(u.default, {
                verified: o.verifiedBot
              })]
            });
            break;
          case E.AudienceSelectorSections.USERS:
            c = (n = m(o = L[i])) in a || o.disabled, f = o.disabled || I, _ = Y === E.AudienceSelectorSections.USERS && W === i, t = (0, l.jsxs)("div", {
              className: g.rowBody,
              children: [(0, l.jsx)(d.Avatar, {
                src: o.avatarURL,
                size: d.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, l.jsxs)("div", {
                className: g.rowLabel,
                children: [(0, l.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: o.name
                }), o.disabled && null != M ? (0, l.jsx)(d.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: M
                }) : null]
              })]
            });
            break;
          case E.AudienceSelectorSections.GUILDS:
            c = (n = m(o = B[i])) in a || o.disabled, f = o.disabled || I, _ = Y === E.AudienceSelectorSections.GUILDS && W === i, t = (0, l.jsxs)("div", {
              className: g.rowBody,
              children: [(0, l.jsx)(S.default, {
                guild: o.guild,
                active: !0,
                size: S.default.Sizes.SMALLER
              }), (0, l.jsx)("div", {
                className: g.rowLabel,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: o.name
                })
              })]
            })
        }
        return null == o ? null : (0, l.jsx)(v, {
          id: "user-row-".concat(i),
          rowLabel: j ? null : T.getRowTypeLabel(o.rowType),
          checked: c,
          disabled: f,
          onSelect: () => J(o),
          showCheckbox: o.rowType !== E.RowType.EMPTY_STATE,
          onMouseEnter: () => q(r, i, !1),
          selected: _,
          "aria-posinset": i + 1,
          "aria-setsize": P.reduce((e, t) => e + t, 0),
          children: t
        }, n)
      },
      rowHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e;
        switch (t) {
          case E.AudienceSelectorSections.ROLES:
            return D(I.default.Messages.ROLES);
          case E.AudienceSelectorSections.MEMBERS:
            return D(I.default.Messages.MEMBERS);
          case E.AudienceSelectorSections.USERS:
            return D(I.default.Messages.USERS);
          case E.AudienceSelectorSections.GUILDS:
            return D(I.default.Messages.SERVERS)
        }
      },
      sectionHeight: 32,
      onScroll: ee,
      role: void 0,
      innerRole: "listbox",
      innerId: h,
      innerAriaMultiselectable: !0,
      innerAriaOrientation: "vertical"
    }) : (0, l.jsxs)(c.default, {
      className: t,
      align: c.default.Align.CENTER,
      justify: c.default.Justify.CENTER,
      direction: c.default.Direction.VERTICAL,
      children: [(0, l.jsx)(o.default, {
        className: g.noResultIcon
      }), (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: y(r)
      })]
    })]
  })
}