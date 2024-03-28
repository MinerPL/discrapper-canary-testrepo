"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("374470"),
  o = n("481060"),
  u = n("239091"),
  d = n("294218"),
  c = n("592125"),
  f = n("689938"),
  h = n("583038");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends l.PureComponent {
  render() {
    let {
      result: e,
      listItemProps: t,
      searchOffset: n,
      index: l,
      totalResults: s
    } = this.props, r = i().find(e, e => e.isSearchHit);
    if (null == r) return null;
    let u = c.default.getChannel(r.channel_id);
    if (null == u) return null;
    let m = "search-result-".concat(r.id);
    return (0, a.jsx)(o.FocusRing, {
      ringTarget: this.hitRef,
      ringClassName: h.__invalid_searchResultFocusRing,
      offset: 4,
      children: (0, a.jsxs)("li", {
        className: h.container,
        ...t,
        "aria-posinset": 1 + n + l,
        "aria-setsize": s,
        "aria-labelledby": m,
        children: [(0, a.jsx)(o.Clickable, {
          tabIndex: -1,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: h.searchResult,
          focusProps: {
            enabled: !1
          },
          children: (0, a.jsx)("div", {
            ref: this.hitRef,
            className: h.message,
            children: (0, a.jsx)(d.default, {
              id: m,
              message: r,
              channel: u,
              onContextMenu: e => this.handleContextMenu(e, r),
              animateAvatar: !1,
              subscribeToComponentDispatch: !1,
              trackAnnouncementViews: !0
            })
          }, r.id)
        }), (0, a.jsx)("div", {
          className: h.buttonsContainer,
          "aria-hidden": !0,
          children: (0, a.jsx)(o.Clickable, {
            className: h.button,
            onClick: this.jumpTo,
            children: f.default.Messages.JUMP
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), m(this, "containerRef", l.createRef()), m(this, "hitRef", l.createRef()), m(this, "handleContextMenu", (e, t) => {
      let l = c.default.getChannel(t.channel_id);
      null != l && (e.stopPropagation(), (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("53809").then(n.bind(n, "858341"));
        return n => (0, a.jsx)(e, {
          ...n,
          message: t,
          channel: l
        })
      }))
    }), m(this, "jumpTo", e => {
      null != e && (e.preventDefault(), e.stopPropagation());
      let {
        onJump: t,
        result: n
      } = this.props, a = n.find(e => e.isSearchHit);
      null != a && t(a)
    }), m(this, "handleMessageClick", e => {
      if (function(e, t) {
          var n;
          let a = null === (n = window) || void 0 === n ? void 0 : n.getSelection();
          if (null != a && !a.isCollapsed) return !0;
          if (null == e || null == t) return !1;
          for (;
            (0, r.isElement)(e) && e !== t;) {
            ;
            let {
              tagName: t
            } = e;
            if ("A" === t || "IMG" === t || "BUTTON" === t) return !0;
            e = e.parentNode
          }
          return !1
        }(e.target, this.containerRef.current)) {
        e.stopPropagation();
        return
      }
      this.jumpTo(e)
    })
  }
}