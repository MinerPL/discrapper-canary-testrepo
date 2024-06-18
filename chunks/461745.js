"use strict";
n.d(t, {
  BK: function() {
    return A
  },
  Fj: function() {
    return i
  }
}), n(653041), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(481060),
  d = n(346656),
  c = n(465670),
  E = n(664800),
  I = n(792125),
  T = n(981631),
  h = n(689938),
  S = n(949817);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = Object.freeze({
  SMALL: S.small,
  MEDIUM: S.medium,
  LARGE: S.large
});
(s = i || (i = {})).MEMBER = "MEMBER", s.ROLE = "ROLE", s.CHANNEL = "CHANNEL", s.GUILD = "GUILD", s.USER = "USER";
let A = e => {
  let {
    hasContent: t,
    onClear: n,
    className: i,
    themeOverride: r,
    size: s = N.SMALL
  } = e;
  return (0, o.jsx)(_.Clickable, {
    className: u()(i, S.iconLayout, s, (0, I.Q)(r), {
      [S.clear]: t
    }),
    onClick: e => {
      e.stopPropagation(), null != n && n(e)
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    tabIndex: t ? 0 : -1,
    "aria-hidden": !t,
    "aria-label": h.Z.Messages.SEARCH_CLEAR,
    focusProps: {
      offset: 4
    },
    children: (0, o.jsxs)("div", {
      className: S.iconContainer,
      children: [(0, o.jsx)(E.Z, {
        className: u()({
          [S.icon]: !0,
          [S.visible]: !t
        })
      }), (0, o.jsx)(c.Z, {
        className: u()({
          [S.icon]: !0,
          [S.visible]: t
        })
      })]
    })
  })
};
class m extends(r = a.Component) {
  componentDidUpdate(e) {
    let {
      focusAfterReady: t,
      isReady: n
    } = this.props;
    t && !e.isReady && n && this.focus()
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: n,
      sections: i,
      query: r,
      tags: s,
      onSelectionChange: o,
      onSelect: a,
      onRemoveTag: l,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== i.length) {
      switch (e.keyCode) {
        case T.yXg.BACKSPACE:
          (null == r || 0 === r.length) && null != s && s.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(s.length - 1));
          break;
        case T.yXg.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
          break;
        case T.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
          break;
        case T.yXg.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
          break;
        case T.yXg.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
          break;
        case T.yXg.ENTER:
          if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
          null != a && a(t, n, e);
          return;
        case T.yXg.ESCAPE:
          e.preventDefault(), u && e.stopPropagation(), null != a && a(null, null, e);
          return;
        default:
          return
      }
      null != o && o(t, n)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: n,
      selectedRow: i,
      onSelect: r,
      onSelectionChange: s,
      query: o,
      tags: a,
      preventEscapePropagation: l
    } = this.props, {
      current: u
    } = this.ref;
    if (null != u) switch (e.keyCode) {
      case T.yXg.BACKSPACE:
        if ((null == o || 0 === o.length) && null != a && a.length > 0) {
          var _, d;
          e.preventDefault(), e.stopPropagation(), null === (_ = (d = this.props).onRemoveTag) || void 0 === _ || _.call(d, a.length - 1)
        }
        break;
      case T.yXg.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > n && ++i >= t[n] && (++n >= t.length && (n = 0), i = 0), null == s || s(n, i);
        break;
      case T.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --i < 0 && (--n < 0 && (n = t.length - 1), i = t[n] - 1), null == s || s(n, i);
        break;
      case T.yXg.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > i && (null == r || r(n, i, e));
        break;
      case T.yXg.ESCAPE:
        e.preventDefault(), l && e.stopPropagation(), null == r || r(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: n = h.Z.Messages.DM_SEARCH_PLACEHOLDER,
      themeOverride: i,
      disabled: r,
      onClear: s,
      size: a,
      maxHeight: l,
      tags: E,
      onActivate: T,
      className: f,
      inputProps: N,
      focusAfterReady: m
    } = this.props, O = null != t && t.length > 0, R = !1, C = [];
    return null != E && E.length > 0 && ("string" == typeof E[0] ? E.forEach((e, t) => C.push((0, o.jsxs)(_.Anchor, {
      focusProps: {
        offset: 4
      },
      className: S.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, o.jsx)(c.Z, {
        className: S.close,
        "aria-label": h.Z.Messages.REMOVE
      })]
    }, t))) : (R = !0, E.forEach((e, t) => C.push((0, o.jsxs)(_.Anchor, {
      className: u()(S.tag, S.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, o.jsx)(_.Avatar, {
        src: e.avatar,
        "aria-hidden": !0,
        size: _.AvatarSizes.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, o.jsx)("span", {
        className: S.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, o.jsx)(d.Z, {
        guild: e.guild,
        active: !0,
        size: d.Z.Sizes.SMOL
      }), (0, o.jsx)("span", {
        className: S.tagLabel,
        children: e.label
      }), (0, o.jsx)(c.Z, {
        className: S.close,
        "aria-label": h.Z.Messages.REMOVE
      })]
    }, t))))), (0, o.jsx)(_.FocusRing, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, o.jsx)("div", {
        ref: this.containerRef,
        className: u()(f, S.container, a, (0, I.Q)(i), {
          [S.disabled]: r
        }),
        children: (0, o.jsxs)(_.ScrollerThin, {
          className: S.inner,
          style: {
            maxHeight: l
          },
          children: [C, (0, o.jsx)("input", {
            className: u()(S.input, {
              [S.richTagInput]: R
            }),
            type: "text",
            ref: this.ref,
            spellCheck: "false",
            placeholder: n,
            value: t,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            disabled: r,
            "aria-disabled": r,
            autoFocus: !m && e,
            onMouseDown: T,
            ...this.defaultInputProps,
            ...N
          }), null != s ? (0, o.jsx)(A, {
            size: a,
            themeOverride: i,
            hasContent: O,
            onClear: this.handleClear
          }) : null]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), f(this, "ref", a.createRef()), f(this, "containerRef", a.createRef()), f(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: n,
        onQueryChange: i,
        useKeyboardNavigation: r
      } = this.props;
      null != n && n(e);
      let {
        current: s
      } = this.ref;
      if (null == s || null != t) {
        e.keyCode !== T.yXg.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === T.yXg.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
        s.value = "", null != i && i("");
        return
      }
      r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), f(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), f(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), f(this, "handleClear", () => {
      let {
        onClear: e
      } = this.props, {
        current: t
      } = this.ref;
      null != e && e(), null != t && t.focus()
    }), f(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), f(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
f(m, "Sizes", N), f(m, "defaultProps", {
  size: N.SMALL,
  query: "",
  sections: [],
  selectedSection: 0,
  selectedRow: -1,
  selectedColumn: -1,
  gridResults: !1,
  disabled: !1,
  autoFocus: !1,
  preventEscapePropagation: !0,
  useKeyboardNavigation: !0
}), t.ZP = m