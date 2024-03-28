"use strict";
s.r(t), s("653041"), s("47120"), s("724458");
var l, a = s("735250"),
  n = s("470079"),
  i = s("803997"),
  r = s.n(i),
  o = s("442837"),
  d = s("481060"),
  u = s("607070"),
  c = s("251625"),
  h = s("226951"),
  m = s("981631"),
  E = s("689938"),
  f = s("752565");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class S extends(l = n.Component) {
  getSelectedSection(e) {
    let {
      selectedSection: t
    } = this.state;
    if (null != t) return t;
    for (let t = 0; t < e.length; t++)
      if (e[t].length > 0) return t;
    return 0
  }
  componentDidMount() {
    this.focus()
  }
  render() {
    let {
      position: e
    } = this.props, t = this.getRows(), s = [];
    if (this.isEmpty()) s.push(1);
    else
      for (let e of t) s.push(e.length);
    return (0, a.jsxs)(d.Dialog, {
      className: r()(f.container, function(e) {
        if ("bottom" === e) return f.positionBottom;
        return f.positionTop
      }(e)),
      "aria-label": this.props["aria-label"],
      children: [(0, a.jsx)("div", {
        className: f.autocompleteShadow
      }), (0, a.jsx)("div", {
        className: f.autocompleteArrowWrapper,
        children: (0, a.jsx)("div", {
          className: f.autocompleteArrow
        })
      }), (0, a.jsxs)("header", {
        className: f.header,
        children: [(0, a.jsx)("div", {
          className: f.autocompleteHeaderBackground
        }), (0, a.jsx)("div", {
          className: f.headerText,
          children: this.props.label
        }), (0, a.jsx)("input", {
          type: "text",
          className: f.input,
          placeholder: this.props.placeholder,
          ref: this.inputRef,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown
        })]
      }), (0, a.jsx)("section", {
        className: f.sectionTag,
        children: (0, a.jsx)(d.List, {
          className: f.autocompleteScroller,
          fade: !0,
          sections: s,
          sectionHeight: this.getSectionHeight,
          rowHeight: 40,
          renderRow: this.renderRow,
          renderSection: this.renderSection
        })
      })]
    })
  }
  focus() {
    null != this.inputRef.current && this.inputRef.current.focus()
  }
  constructor(...e) {
    super(...e), g(this, "inputRef", n.createRef()), g(this, "state", {
      query: null,
      selectedSection: null,
      selectedRow: 0
    }), g(this, "memoizedGetRows", (0, c.cachedFunction)((e, t, s) => {
      let l = RegExp("^".concat(h.default.escape(null != e ? e.trim() : "")), "i"),
        a = e => l.test(e);
      return s.map((e, s) => t(a, s))
    })), g(this, "getRows", () => {
      let {
        onFilterResults: e,
        sections: t
      } = this.props, {
        query: s
      } = this.state;
      return this.memoizedGetRows(s, e, t)
    }), g(this, "handleChange", e => {
      var t, s;
      let l = e.target.value;
      null === (t = (s = this.props).onQueryChange) || void 0 === t || t.call(s, l), this.setState({
        query: l,
        selectedSection: null,
        selectedRow: 0
      })
    }), g(this, "handleMouseEnter", (e, t) => {
      this.setState({
        selectedSection: e,
        selectedRow: t
      })
    }), g(this, "handleClick", (e, t) => {
      let s = this.getRows();
      this.props.onSelect(s[e][t], e), this.props.onClose()
    }), g(this, "handleKeyDown", e => {
      let {
        keyboardModeEnabled: t
      } = this.props, {
        selectedRow: s
      } = this.state, l = this.getRows(), a = this.getSelectedSection(l);
      switch (e.keyCode) {
        case m.KeyboardKeys.TAB:
          if (t) break;
        case m.KeyboardKeys.ARROW_DOWN:
          e.preventDefault(), this.props.sections.length > a && ++s >= l[a].length && (++a >= this.props.sections.length && (a = 0), s = 0), this.setState({
            selectedSection: a,
            selectedRow: s
          });
          break;
        case m.KeyboardKeys.ARROW_UP:
          e.preventDefault(), --s < 0 && (--a < 0 && (a = this.props.sections.length - 1), s = l[a].length - 1), this.setState({
            selectedSection: a,
            selectedRow: s
          });
          break;
        case m.KeyboardKeys.ENTER:
          e.preventDefault(), this.props.sections.length > a && l[a].length > s && (this.props.onSelect(l[a][s], a), this.props.onClose());
          break;
        case m.KeyboardKeys.ESCAPE:
          e.preventDefault(), this.props.onSelect(null, null), this.props.onClose()
      }
    }), g(this, "isEmpty", () => 0 === this.getRows().reduce((e, t) => e + t.length, 0)), g(this, "getSectionHeight", e => {
      let t = this.props.sections[e];
      return this.isEmpty() || null == t ? 0 : 44
    }), g(this, "renderSection", e => {
      let {
        section: t
      } = e, s = this.props.sections[t];
      return this.isEmpty() || null == s ? null : (0, a.jsx)("div", {
        className: f.section,
        children: s
      }, t)
    }), g(this, "renderRow", e => {
      var t;
      let {
        section: s,
        row: l
      } = e, {
        selectedRow: n
      } = this.state;
      if (this.isEmpty()) return (0, a.jsxs)("div", {
        className: f.empty,
        children: [(0, a.jsx)("p", {
          className: f.noResultsHeader,
          children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
        }), (0, a.jsx)("p", {
          children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
        })]
      }, "empty");
      let i = this.getRows(),
        o = this.getSelectedSection(i),
        u = null === (t = i[s]) || void 0 === t ? void 0 : t[l];
      return (0, a.jsx)(d.Clickable, {
        onClick: this.handleClick.bind(this, s, l),
        onMouseEnter: this.handleMouseEnter.bind(this, s, l),
        className: r()(f.row, {
          [f.selected]: o === s && n === l
        }),
        children: (0, a.jsx)("div", {
          className: f.rowInner,
          children: this.props.onRenderResult(u, s)
        })
      }, "".concat(s, "-").concat(l))
    })
  }
}
g(S, "defaultProps", {
  sections: [null]
}), t.default = o.default.connectStores([u.default], () => ({
  keyboardModeEnabled: u.default.keyboardModeEnabled
}))(S)