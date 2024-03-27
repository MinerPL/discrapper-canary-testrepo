"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("917351"),
  d = n.n(u),
  c = n("866227"),
  f = n.n(c),
  h = n("868233"),
  E = n("446674"),
  m = n("77078"),
  p = n("378438"),
  S = n("425773"),
  g = n("76385"),
  N = n("955513"),
  _ = n("679653"),
  T = n("419830"),
  I = n("42203"),
  C = n("26989"),
  A = n("27618"),
  M = n("712611"),
  v = n("18494"),
  R = n("162771"),
  x = n("102985"),
  L = n("697218"),
  O = n("834179"),
  b = n("689476"),
  y = n("228220"),
  j = n("659500"),
  F = n("701909"),
  D = n("751520"),
  U = n("158998"),
  P = n("200745"),
  k = n("49111"),
  w = n("782340"),
  G = n("484354");
let B = f("2015-05-15").local(),
  H = (0, h.makeLazy)({
    createPromise: () => n.el("201959").then(n.bind(n, "201959")),
    webpackId: "201959"
  }),
  V = (e, t, n) => {
    var l, s, i;
    let {
      user: r,
      text: o
    } = n;
    if (null == r) return (0, a.jsx)("strong", {
      children: o
    });
    let u = L.default.getUser(r.id),
      d = I.default.getChannel(e),
      c = (null == d ? void 0 : d.isPrivate()) ? A.default.getNickname(r.id) : null,
      f = null !== (s = null !== (l = C.default.getNick(e, r.id)) && void 0 !== l ? l : c) && void 0 !== s ? s : U.default.getName(r),
      h = null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== i ? i : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
    return [(0, a.jsx)("img", {
      alt: "",
      className: G.displayAvatar,
      src: h
    }, "avatar-".concat(t, "-").concat(r.id)), (0, a.jsx)("span", {
      className: G.displayedNick,
      children: f
    }, "display-nick-".concat(t, "-").concat(r.id)), (0, a.jsx)("span", {
      className: G.displayUsername,
      children: U.default.getUserTag(r, {
        identifiable: x.default.enabled && x.default.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(r.id))]
  },
  Y = (e, t, n) => {
    let {
      channel: l,
      text: s
    } = n;
    if (null == l) return (0, a.jsx)("strong", {
      children: s
    });
    let i = I.default.getChannel(l.parent_id),
      r = (0, T.getChannelIconComponent)(l);
    return (0, a.jsxs)("div", {
      className: G.resultChannel,
      children: [null != r ? (0, a.jsx)(r, {
        className: G.searchResultChannelIcon
      }) : null, (0, a.jsx)("strong", {
        children: (0, _.computeChannelName)(l, L.default, A.default)
      }), null != i ? (0, a.jsx)("span", {
        className: G.searchResultChannelCategory,
        children: (0, _.computeChannelName)(i, L.default, A.default)
      }) : null]
    })
  },
  z = e => {
    let t, n, {
      id: l,
      searchId: s,
      result: r,
      group: o,
      className: u,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      onSelect: h,
      onFocus: E,
      showFilter: p,
      renderResult: S
    } = e;
    if (p) {
      var g, _;
      t = (0, a.jsx)("span", {
        className: G.filter,
        children: null !== (_ = null === (g = N.default[o]) || void 0 === g ? void 0 : g.key) && void 0 !== _ ? _ : "addme:"
      })
    }
    return n = null != S ? S(s, o, r) : (0, a.jsx)("strong", {
      children: r.text
    }), (0, a.jsxs)(m.Clickable, {
      tag: "li",
      className: i(G.option, u),
      onClick: h,
      onFocus: E,
      id: l,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      children: [t, n, (0, a.jsx)(b.default, {
        className: G.plusIcon
      })]
    })
  },
  K = e => (0, a.jsx)(z, {
    ...e,
    className: G.user,
    renderResult: V
  }),
  W = {
    [k.SearchTokenTypes.FILTER_FROM]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_FROM,
      component: K
    },
    [k.SearchTokenTypes.FILTER_MENTIONS]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
      component: K
    },
    [k.SearchTokenTypes.FILTER_HAS]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_HAS
    },
    [k.SearchTokenTypes.FILTER_FILE_TYPE]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
    },
    [k.SearchTokenTypes.FILTER_IN]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
      component: e => (0, a.jsx)(z, {
        ...e,
        renderResult: Y
      })
    },
    [k.SearchAutocompleteGroups.DATES]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_DATES
    },
    [k.SearchAutocompleteGroups.HISTORY]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
      groupTip(e) {
        let {
          searchId: t
        } = e;
        return (0, a.jsx)(m.Tooltip, {
          text: w.default.Messages.SEARCH_CLEAR_HISTORY,
          position: "left",
          children: e => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = e;
            return (0, a.jsx)(m.Clickable, {
              onClick: () => (0, p.clearHistory)(t),
              onMouseEnter: n,
              onMouseLeave: l,
              className: G.searchClearHistory,
              title: w.default.Messages.SEARCH_CLEAR_HISTORY,
              "aria-label": w.default.Messages.SEARCH_CLEAR_HISTORY,
              children: (0, a.jsx)(y.default, {})
            })
          }
        })
      },
      component: function(e) {
        let {
          onSelect: t,
          onFocus: n,
          result: s,
          showFilter: r,
          searchId: o,
          renderResult: u,
          group: d,
          ...c
        } = e, f = "", h = l.useMemo(() => (function(e) {
          let t = D.tokenizeQuery(e).map((e, t, n) => D.filterHasAnswer(e, n[t + 1]) ? e : new g.Token(e.getFullMatch(), g.NON_TOKEN_TYPE));
          return t
        })(s.text), [s.text]), E = h.map(e => {
          let t = e.getFullMatch();
          if ("" === t.trim()) return null;
          let n = k.IS_SEARCH_FILTER_TOKEN.test(e.type),
            l = k.IS_SEARCH_ANSWER_TOKEN.test(e.type);
          return f += t, (0, a.jsx)("span", {
            className: i({
              [G.filter]: n,
              [G.answer]: l,
              [G.nonText]: !n && !l
            }),
            children: t
          }, e.type + t)
        });
        return (0, a.jsxs)(m.Clickable, {
          className: i(G.option, G.history),
          onClick: t,
          onFocus: n,
          ...c,
          "aria-label": w.default.Messages.SEARCH_FROM_SUGGESTIONS.format({
            suggestion: f
          }),
          children: [E, (0, a.jsx)(b.default, {
            className: G.plusIcon
          })]
        })
      }
    },
    [k.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
      groupTip: () => (0, a.jsx)(m.Tooltip, {
        text: w.default.Messages.LEARN_MORE,
        position: "left",
        children: e => (0, a.jsx)("div", {
          className: G.searchLearnMore,
          ...e,
          children: (0, a.jsx)(m.Anchor, {
            href: F.default.getArticleURL(k.HelpdeskArticles.USING_SEARCH),
            title: w.default.Messages.LEARN_MORE,
            children: (0, a.jsx)(O.default, {})
          })
        })
      }),
      component: function(e) {
        var t;
        let {
          result: n,
          onSelect: l,
          onFocus: s,
          showFilter: r,
          searchId: o,
          ...u
        } = e, d = D.getSearchOptionAnswer(null !== (t = n.token) && void 0 !== t ? t : "");
        return (0, a.jsxs)(m.Clickable, {
          className: i(G.option, G.searchOption),
          onClick: l,
          onFocus: s,
          ...u,
          children: [(0, a.jsx)("span", {
            className: G.filter,
            children: n.text
          }), (0, a.jsx)("span", {
            className: i({
              [G.answer]: d
            }),
            children: d
          }), (0, a.jsx)(b.default, {
            className: G.plusIcon
          })]
        })
      }
    }
  };
class Q extends l.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: n,
      totalResults: a
    } = this.props, {
      mode: l
    } = n, {
      resultsState: s
    } = e;
    null != l.filter && null == s.mode.filter && a > 0 ? this.setSelectedIndex(0) : l.type === k.SearchPopoutModes.FILTER_ALL && s.mode.type !== l.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    }, () => this.props.onSelectedIndexChanged(e))
  }
  render() {
    let {
      selectedIndex: e
    } = this.state, {
      navId: t,
      resultsState: n,
      totalResults: l,
      searchId: s
    } = this.props;
    return (0, a.jsx)(S.default, {
      numResults: l,
      query: n.query,
      navId: t,
      hideQuery: !this.shouldShowSearchQuery(),
      focusedIndex: e,
      renderCustomResults: this.renderAutocompletes,
      renderInitialState: this.renderAutocompletes,
      onHighlightQuery: () => this.focusOption(-1),
      onSelectQuery: this.performSearch,
      onSelectSearchEverywhere: () => this.performSearch({
        searchEverywhere: !0
      }),
      renderNoResults: () => null,
      searchFavorites: s === k.FAVORITES && (0, P.isFavoriteSearchEnabled)()
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.state = {
      dateHint: (0, N.getRandomDateShortcut)(),
      selectedIndex: -1
    }, this.handleDateChange = e => {
      this.setSearchQuery(e.format(k.SEARCH_DATE_FORMAT) + " ", !0)
    }, this.keepCurrentOptionSelected = (e, t) => {
      let {
        selectedIndex: n
      } = this.state, {
        resultsState: a,
        totalResults: l
      } = this.props, {
        mode: s,
        autocompletes: i
      } = a, {
        resultsState: r
      } = e;
      if (s.type !== r.mode.type) this.setSelectedIndex(-1);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== i.length)) {
        let e = D.getFlattenedStringArray(r.autocompletes, r.mode.type),
          n = e[t.selectedIndex - 1],
          a = D.getFlattenedStringArray(i, s.type),
          o = a.indexOf(n); - 1 !== o ? this.setSelectedIndex(o) : t.selectedIndex >= l && this.setSelectedIndex(l - 1)
      }
    }, this.focusNextOption = () => {
      this.focusOtherOption(1)
    }, this.focusPreviousOption = () => {
      this.focusOtherOption(-1)
    }, this.focusOtherOption = e => {
      let {
        selectedIndex: t
      } = this.state, {
        resultsState: n
      } = this.props;
      !D.showDatePicker(n.mode.filter) && this.focusOption(t + e)
    }, this.focusOption = e => {
      let t = e,
        {
          autocompletes: n
        } = this.props.resultsState,
        a = this.shouldShowSearchQuery();
      t < -1 || !a && t < 0 ? t = D.getTotalResults(n) - 1 : a && t >= D.getTotalResults(n) ? t = -1 : !a && t >= D.getTotalResults(n) && (t = 0), this.setSelectedIndex(t)
    }, this.selectOption = e => {
      let t = e;
      if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
      let {
        autocompletes: n,
        mode: a
      } = this.props.resultsState;
      if (D.showDatePicker(a.filter)) return;
      let l = D.getFlattenedStringArray(n, a.type);
      if (t >= l.length) return !1;
      let s = l[t],
        i = function(e) {
          let t = !0,
            n = e.trim();
          return d(N.default).forOwn(e => {
            "" !== e.key && null != e.key && n === e.key && (t = !1)
          }), t
        }(s);
      return this.setSearchQuery(s, i), !0
    }, this.setSearchQuery = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          mode: a,
          cursorScope: l
        } = t.props.resultsState,
        s = 0;
      null != a.token ? s = a.token.start : (null == l ? void 0 : l.currentToken) != null && (s = l.currentToken.end);
      let i = null != a.token ? a.token.end : s;
      j.ComponentDispatch.dispatch(k.ComponentActions.SET_SEARCH_QUERY, {
        query: e,
        anchor: s,
        focus: i,
        performSearch: n
      }), t.setSelectedIndex(-1)
    }, this.shouldShowSearchQuery = () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== k.SearchPopoutModes.FILTER && e.type !== k.SearchPopoutModes.EMPTY && !D.showDatePicker(e.filter)
    }, this.renderDatePicker = () => (0, a.jsxs)("div", {
      className: G.datePicker,
      children: [(0, a.jsx)(H, {
        onSelect: this.handleDateChange,
        maxDate: f().local(),
        minDate: B
      }), (0, a.jsxs)("div", {
        className: G.datePickerHint,
        children: [(0, a.jsxs)("span", {
          className: G.hint,
          children: [w.default.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
        }), (0, a.jsx)(m.Clickable, {
          tag: "span",
          className: G.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    }), this.handleHintClick = () => {
      this.setSearchQuery(this.state.dateHint, !0)
    }, this.performSearch = e => {
      j.ComponentDispatch.dispatch(k.ComponentActions.PERFORM_SEARCH, null != e ? e : {})
    }, this.renderAutocompletes = () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchId: n
      } = this.props, {
        autocompletes: l,
        mode: s
      } = this.props.resultsState;
      if (D.showDatePicker(s.filter)) return this.renderDatePicker();
      let i = -1;
      return l.map(l => {
        var r, o, u;
        let d, c;
        if (null == l || 0 === l.results.length) return null;
        let f = null !== (r = W[l.group]) && void 0 !== r ? r : {};
        null != f.titleText && (c = "".concat(l.group, "-header"), d = (0, a.jsx)("div", {
          id: c,
          className: G.header,
          children: f.titleText()
        }));
        let h = null !== (o = f.groupTip) && void 0 !== o ? o : null,
          E = null != h ? (0, a.jsx)(h, {
            searchId: n
          }) : null,
          m = null !== (u = f.component) && void 0 !== u ? u : z,
          p = s.type === k.SearchPopoutModes.FILTER_ALL;
        return (0, a.jsxs)("ul", {
          role: "group",
          "aria-labelledby": c,
          className: G.resultsGroup,
          children: [d, E, l.results.map(s => {
            var r, o;
            if (null == s || null == l) return null;
            i += 1;
            let u = e === i;
            return (0, a.jsx)(m, {
              searchId: n,
              group: null !== (r = s.group) && void 0 !== r ? r : l.group,
              result: s,
              showFilter: p,
              onSelect: this.selectOption.bind(null, i),
              onFocus: this.focusOption.bind(null, i),
              ...(0, S.getListboxOptionProps)(t, i, u)
            }, "".concat(l.group, "-").concat(s.text, "-").concat(null !== (o = s.key) && void 0 !== o ? o : ""))
          })]
        }, l.group)
      })
    }
  }
}
var X = l.forwardRef((e, t) => {
  let [n, l, s] = (0, E.useStateFromStoresArray)([R.default, v.default, M.default], () => {
    let e = R.default.getGuildId(),
      t = v.default.getChannelId(),
      n = null != e ? e : t;
    o(null != n, "SearchPopout.getStateFromStores - invalid searchId");
    let a = M.default.getState(n),
      l = D.getTotalResults(a.autocompletes);
    return [n, a, l]
  });
  return (0, a.jsx)(Q, {
    ...e,
    searchId: n,
    resultsState: l,
    totalResults: s,
    ref: t
  })
})