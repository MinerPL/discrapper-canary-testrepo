"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("47120");
var s = l("735250"),
  n = l("470079"),
  a = l("803997"),
  r = l.n(a),
  u = l("442837"),
  o = l("481060"),
  i = l("24124"),
  c = l("461745"),
  d = l("212819"),
  p = l("43267"),
  m = l("447003"),
  A = l("933557"),
  T = l("606206"),
  h = l("93879"),
  f = l("535321"),
  E = l("277942"),
  I = l("585483"),
  C = l("981631"),
  N = l("689938"),
  _ = l("924987"),
  y = l("794711");

function v(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let R = e => {
    let {
      channel: t,
      categoryName: l,
      guildName: n
    } = e, a = h.default;
    return (0, m.default)(t) ? a = f.default : t.isNSFW() && (a = E.default), (0, s.jsxs)("div", {
      className: _.result,
      children: [(0, s.jsx)(a, {
        className: _.resultIcon,
        background: _.resultIconBackground,
        width: 16,
        height: 16
      }), (0, s.jsxs)("div", {
        className: _.resultText,
        children: [(0, s.jsx)("span", {
          children: t.name
        }), (0, s.jsx)("span", {
          className: _.resultCategoryName,
          children: l
        })]
      }), (0, s.jsx)("div", {
        className: _.resultGuildName,
        children: n
      })]
    })
  },
  g = e => {
    let {
      channel: t
    } = e, l = (0, A.default)(t);
    return (0, s.jsxs)("div", {
      className: _.result,
      children: [(0, s.jsx)(o.Avatar, {
        src: (0, p.getChannelIconURL)(t),
        "aria-label": null != l ? l : "",
        className: _.resultAvatar,
        size: o.AvatarSizes.SIZE_32
      }), (0, s.jsx)("div", {
        className: _.resultText,
        children: l
      })]
    })
  },
  L = e => {
    let t, {
      user: l,
      comparator: n,
      status: a
    } = e;
    if (null != n && n === l.tag) {
      let e = n.split("#");
      e.pop(), t = e.join("#")
    } else t = null != n && "" !== n ? n : l.username;
    return (0, s.jsxs)("div", {
      className: _.result,
      children: [(0, s.jsx)(o.Avatar, {
        src: l.getAvatarURL(void 0, 32),
        "aria-label": l.username,
        className: _.resultAvatar,
        size: o.AvatarSizes.SIZE_32,
        status: a
      }), (0, s.jsxs)("div", {
        className: _.resultText,
        children: [(0, s.jsx)("span", {
          children: t
        }), (0, s.jsx)("span", {
          className: _.resultUsername,
          children: l.tag
        })]
      })]
    })
  };
class S extends n.Component {
  render() {
    let e, t;
    let {
      result: l,
      selected: n,
      sending: a
    } = this.props;
    switch (l.type) {
      case d.AutocompleterResultTypes.GROUP_DM:
        e = (0, s.jsx)(g, {
          channel: l.data.record
        });
        break;
      case d.AutocompleterResultTypes.TEXT_CHANNEL: {
        let {
          categoryName: t,
          guildName: n
        } = l;
        e = (0, s.jsx)(R, {
          channel: l.data.record,
          categoryName: t,
          guildName: n
        });
        break
      }
      case d.AutocompleterResultTypes.USER: {
        let {
          data: {
            comparator: t,
            record: n
          },
          status: a
        } = l;
        e = (0, s.jsx)(L, {
          comparator: t,
          user: n,
          status: a
        })
      }
    }
    return t = l.sent ? (0, s.jsx)(o.Button, {
      className: _.inviteButton,
      look: o.Button.Looks.LINK,
      size: o.Button.Sizes.SMALL,
      disabled: !0,
      color: o.Button.Colors.WHITE,
      children: N.default.Messages.ACTIVITY_INVITE_MODAL_SENT
    }) : (0, s.jsx)(o.Button, {
      color: o.Button.Colors.GREEN,
      look: n ? o.Button.Looks.FILLED : o.Button.Looks.OUTLINED,
      className: _.inviteButton,
      size: o.Button.Sizes.SMALL,
      submitting: a,
      onClick: this.handleClick,
      children: N.default.Messages.ACTIVITY_INVITE_MODAL_INVITE
    }), (0, s.jsxs)("div", {
      className: r()(_.resultWrapper, {
        [_.resultWrapperSelected]: n
      }),
      onMouseEnter: this.handleMouseEnter,
      children: [e, t]
    })
  }
  constructor(...e) {
    super(...e), v(this, "handleClick", () => {
      let {
        onInvite: e,
        row: t
      } = this.props;
      e(t)
    }), v(this, "handleMouseEnter", () => {
      let {
        onMouseEnter: e,
        row: t
      } = this.props;
      e(t)
    })
  }
}

function M(e) {
  let {
    transitionState: t,
    onClose: l
  } = e, {
    results: a,
    query: r,
    activity: p
  } = (0, u.useStateFromStoresObject)([T.default], () => ({
    results: T.default.getResults(),
    query: T.default.getQuery(),
    activity: T.default.getActivity()
  }), []), [m, A] = n.useState(r), [h, f] = n.useState(0), [E, v] = n.useState([]), [R, g] = n.useState(!1), L = n.useRef(null), M = n.useCallback(() => {
    var e;
    null === (e = L.current) || void 0 === e || e.scrollPageUp({
      animate: !0
    })
  }, [L]), O = n.useCallback(() => {
    var e;
    null === (e = L.current) || void 0 === e || e.scrollPageDown({
      animate: !0
    })
  }, [L]);
  n.useEffect(() => (I.ComponentDispatch.subscribe(C.ComponentActions.SCROLL_PAGE_UP, M), () => {
    I.ComponentDispatch.unsubscribe(C.ComponentActions.SCROLL_PAGE_UP, M)
  }), [M]), n.useEffect(() => (I.ComponentDispatch.subscribe(C.ComponentActions.SCROLL_PAGE_DOWN, O), () => {
    I.ComponentDispatch.unsubscribe(C.ComponentActions.SCROLL_PAGE_DOWN, O)
  }), [O]), n.useEffect(() => {
    null == p && l()
  }, [l, p]), n.useEffect(() => {
    var e;
    null === (e = L.current) || void 0 === e || e.scrollToTop(), f(0)
  }, [L, a]);
  let x = n.useCallback(e => {
      let {
        data: t,
        data: {
          record: {
            id: l
          }
        }
      } = a[e];
      if (!(null == l || E.includes(l))) switch (v([...E, l]), t.type) {
        case d.AutocompleterResultTypes.GROUP_DM:
        case d.AutocompleterResultTypes.TEXT_CHANNEL:
          (0, i.inviteChannel)(t.record.id);
          break;
        case d.AutocompleterResultTypes.USER:
          (0, i.inviteUser)(t.record.id)
      }
    }, [a, E]),
    D = n.useCallback(e => {
      f(e)
    }, [f]),
    b = () => {
      j("")
    },
    j = e => {
      A(e), (0, i.updateQuery)(e)
    };
  return null == p ? null : (0, s.jsxs)(o.ModalRoot, {
    transitionState: t,
    size: o.ModalSize.SMALL,
    "aria-label": N.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
      name: p.name
    }),
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: R,
      children: [(0, s.jsx)(o.ModalCloseButton, {
        className: _.closeButton,
        onClick: l
      }), (0, s.jsxs)("div", {
        className: _.header,
        children: [(0, s.jsx)(o.FormTitle, {
          tag: "h2",
          className: y.marginBottom8,
          children: N.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
            name: p.name
          })
        }), (0, s.jsx)(c.default, {
          size: c.default.Sizes.MEDIUM,
          query: m,
          selectedSection: 0,
          selectedRow: h,
          sections: [a.length],
          className: y.marginTop4,
          onSelect: (e, t) => {
            null == t ? b() : x(t)
          },
          onSelectionChange: (e, t) => {
            var l;
            f(t), null === (l = L.current) || void 0 === l || l.scrollIntoViewRect({
              start: 44 * t,
              end: 44 * t + 44
            })
          },
          onQueryChange: j,
          placeholder: N.default.Messages.ACTIVITY_INVITE_MODAL_SEARCH_PLACEHOLDER,
          autoFocus: !0,
          onClear: b
        })]
      })]
    }), (0, s.jsx)(o.ModalListContent, {
      scrollerRef: L,
      className: 0 === a.length ? _.noResults : _.results,
      paddingBottom: 8,
      sections: [a.length],
      sectionHeight: 0,
      renderSection: C.NOOP_NULL,
      rowHeight: (e, t) => e > 0 ? 0 : null != a[t] ? 44 : 0,
      renderRow: e => {
        let {
          section: t,
          row: l
        } = e;
        if (t > 0) return null;
        let n = a[l];
        return null == n ? null : (0, s.jsx)(S, {
          row: l,
          result: n,
          sending: null != n.data.record.id && E.includes(n.data.record.id),
          selected: l === h,
          onMouseEnter: D,
          onInvite: x
        }, n.data.record.id)
      },
      onScroll: e => {
        let t = e.currentTarget.scrollTop > 0;
        R !== t && g(t)
      }
    })]
  })
}