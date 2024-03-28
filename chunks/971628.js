"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  },
  getFullRowId: function() {
    return x
  }
}), a("47120"), a("724458");
var l = a("735250"),
  s = a("470079"),
  n = a("803997"),
  r = a.n(n),
  i = a("924826"),
  o = a("481060"),
  d = a("631969"),
  u = a("467679"),
  c = a("285952"),
  S = a("346656"),
  f = a("153124"),
  T = a("241820"),
  A = a("605436"),
  m = a("537383"),
  _ = a("71080"),
  g = a("689938"),
  R = a("803826");
let E = (0, f.uid)(),
  h = (0, f.uid)();

function x(e) {
  return "".concat(e.rowType, ":").concat(e.id)
}

function I(e) {
  return (0, l.jsx)(o.FormTitle, {
    tag: "h5",
    className: r()(R.sectionTitle, R.rowHeight),
    children: e
  }, e)
}

function v(e) {
  let {
    id: t,
    children: a,
    rowLabel: s,
    checked: n,
    onSelect: d,
    disabled: u,
    showCheckbox: S,
    selected: f,
    onMouseEnter: T,
    "aria-posinset": A,
    "aria-setsize": m
  } = e, _ = (0, i.useListItem)(t);
  return (0, l.jsx)(o.Clickable, {
    ..._,
    id: t,
    className: r()(R.addMemberRow, {
      [R.selectedRow]: f
    }),
    onClick: e => {
      !u && (e.preventDefault(), d())
    },
    onMouseEnter: T,
    role: "option",
    "aria-disabled": u,
    "aria-selected": n,
    "aria-setsize": m,
    "aria-posinset": A,
    children: (0, l.jsxs)(c.default, {
      justify: c.default.Justify.BETWEEN,
      align: c.default.Align.CENTER,
      children: [S ? (0, l.jsx)(o.Checkbox, {
        displayOnly: !0,
        size: 18,
        value: n,
        type: o.Checkbox.Types.INVERTED,
        disabled: u,
        children: (0, l.jsx)("div", {
          className: R.checkboxLabel,
          children: a
        })
      }) : a, null != s ? (0, l.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: s
      }) : null]
    })
  })
}

function D(e) {
  let {
    listClassName: t,
    pendingAdditions: a,
    query: n,
    onQueryChange: i,
    onClickRow: f,
    onRemovePendingAddition: D,
    roles: M = [],
    members: p = [],
    users: C = [],
    guilds: N = [],
    placeholderText: w,
    disabledText: L,
    hintText: y,
    searchTitleText: b,
    renderEmptyText: U,
    focusSearchAfterReady: O,
    isReady: G,
    maxCount: j,
    hideRowLabel: B = !1
  } = e, F = s.useRef(null), k = s.useRef(null), z = [M.length, p.length, C.length, N.length], [H, P] = s.useState(!1), [X, W] = s.useState(0), [V, q] = s.useState(-1);
  s.useEffect(() => {
    var e;
    null === (e = F.current) || void 0 === e || e.focus()
  }, []);
  let Q = s.useCallback(function(e, t) {
      let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      if (W(e), q(t), a) {
        var l;
        null === (l = k.current) || void 0 === l || l.scrollToIndex({
          section: null != e ? e : 0,
          row: null != t ? t : 0,
          padding: 8
        })
      }
    }, []),
    Y = s.useCallback((e, t) => {
      if (null == t) return;
      i("");
      let a = (e === _.AudienceSelectorSections.ROLES ? M : [])[t];
      a.rowType !== _.RowType.EMPTY_STATE && f(a)
    }, [M, f, i]),
    J = s.useCallback(e => {
      var t;
      null != e && e.rowType !== _.RowType.EMPTY_STATE && (f(e), i(""), null === (t = F.current) || void 0 === t || t.focus())
    }, [f, i]),
    Z = s.useMemo(() => Object.keys(a), [a]),
    K = s.useMemo(() => p.some(e => !e.disabled) || M.some(e => !e.disabled) || C.some(e => !e.disabled) || N.some(e => !e.disabled), [p, M, C, N]) || "" === n.trim();

  function $() {
    var e;
    P(!(null === (e = k.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && K)
  }
  return s.useEffect(() => {
    $()
  }), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: r()(R.searchBox, {
        [R.scrollSeparator]: H
      }),
      children: [null != b && (0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: b
      }), (0, l.jsx)(m.default, {
        ref: F,
        query: n,
        onQueryChange: i,
        selectedSection: X,
        selectedRow: V,
        onSelectionChange: Q,
        onSelect: Y,
        tags: Z.map(e => a[e].display),
        sections: z,
        onRemoveTag: function(e) {
          D(Z[e])
        },
        placeholder: w,
        focusAfterReady: O,
        isReady: G,
        "aria-labelledby": E,
        "aria-controls": h
      }), null != y ? (0, l.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: y
      }) : null]
    }), K ? (0, l.jsx)(o.List, {
      ref: k,
      className: r()(R.roleMemberList, t),
      sections: z,
      renderRow: e => {
        let t, s, {
            section: n,
            row: i
          } = e,
          d = null,
          c = !1,
          f = !1,
          m = !1,
          g = null != j && Object.keys(a).length >= j;
        switch (n) {
          case _.AudienceSelectorSections.ROLES:
            c = (s = x(d = M[i])) in a || d.disabled, f = d.disabled || g, m = X === _.AudienceSelectorSections.ROLES && V === i, t = (0, l.jsxs)("div", {
              className: R.rowBody,
              children: [(0, l.jsx)("div", {
                className: r()(R.rowHeight, R.alignCenter),
                children: (0, l.jsx)(T.default, {
                  color: d.colorString,
                  height: 20
                })
              }), (0, l.jsxs)("div", {
                className: R.rowLabel,
                children: [(0, l.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  className: R.__invalid_rowTitle,
                  color: d.rowType === _.RowType.EMPTY_STATE ? "text-muted" : "text-normal",
                  children: d.name
                }), d.disabled && null != L ? (0, l.jsx)(o.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: L
                }) : null]
              })]
            });
            break;
          case _.AudienceSelectorSections.MEMBERS:
            c = (s = x(d = p[i])) in a || d.disabled, f = d.disabled || g, m = X === _.AudienceSelectorSections.MEMBERS && V === i, t = (0, l.jsxs)("div", {
              className: R.rowBody,
              children: [(0, l.jsx)(o.Avatar, {
                src: d.avatarURL,
                size: o.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, l.jsx)(o.Text, {
                className: R.rowLabel,
                variant: "text-sm/normal",
                children: d.name
              }), null != d.nickname ? (0, l.jsx)(o.Text, {
                color: "text-muted",
                className: R.rowLabelSubText,
                variant: "text-sm/normal",
                "aria-hidden": !0,
                children: d.username
              }) : null, d.bot && (0, l.jsx)(u.default, {
                verified: d.verifiedBot
              })]
            });
            break;
          case _.AudienceSelectorSections.USERS:
            c = (s = x(d = C[i])) in a || d.disabled, f = d.disabled || g, m = X === _.AudienceSelectorSections.USERS && V === i, t = (0, l.jsxs)("div", {
              className: R.rowBody,
              children: [(0, l.jsx)(o.Avatar, {
                src: d.avatarURL,
                size: o.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, l.jsxs)("div", {
                className: R.rowLabel,
                children: [(0, l.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: d.name
                }), d.disabled && null != L ? (0, l.jsx)(o.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: L
                }) : null]
              })]
            });
            break;
          case _.AudienceSelectorSections.GUILDS:
            c = (s = x(d = N[i])) in a || d.disabled, f = d.disabled || g, m = X === _.AudienceSelectorSections.GUILDS && V === i, t = (0, l.jsxs)("div", {
              className: R.rowBody,
              children: [(0, l.jsx)(S.default, {
                guild: d.guild,
                active: !0,
                size: S.default.Sizes.SMALLER
              }), (0, l.jsx)("div", {
                className: R.rowLabel,
                children: (0, l.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: d.name
                })
              })]
            })
        }
        return null == d ? null : (0, l.jsx)(v, {
          id: "user-row-".concat(i),
          rowLabel: B ? null : A.getRowTypeLabel(d.rowType),
          checked: c,
          disabled: f,
          onSelect: () => J(d),
          showCheckbox: d.rowType !== _.RowType.EMPTY_STATE,
          onMouseEnter: () => Q(n, i, !1),
          selected: m,
          "aria-posinset": i + 1,
          "aria-setsize": z.reduce((e, t) => e + t, 0),
          children: t
        }, s)
      },
      rowHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e;
        switch (t) {
          case _.AudienceSelectorSections.ROLES:
            return I(g.default.Messages.ROLES);
          case _.AudienceSelectorSections.MEMBERS:
            return I(g.default.Messages.MEMBERS);
          case _.AudienceSelectorSections.USERS:
            return I(g.default.Messages.USERS);
          case _.AudienceSelectorSections.GUILDS:
            return I(g.default.Messages.SERVERS)
        }
      },
      sectionHeight: 32,
      onScroll: $,
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
      children: [(0, l.jsx)(d.default, {
        className: R.noResultIcon
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: U(n)
      })]
    })]
  })
}