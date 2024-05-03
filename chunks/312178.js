"use strict";
n.r(t), n("411104"), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("442837"),
  s = n("765250"),
  o = n("13245"),
  r = n("26229"),
  d = n("355863"),
  u = n("237997"),
  c = n("451478"),
  f = n("583883"),
  h = n("434529"),
  p = n("145597"),
  g = n("382790"),
  m = n("990673"),
  E = n("906037"),
  S = n("430036"),
  v = n("839434"),
  y = n("981631");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = {
  [y.OverlayWidgets.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: a,
      dragStart: l
    } = e;
    return (0, i.jsx)(S.default, {
      dragStart: l,
      locked: n,
      pinned: a,
      dragging: t
    })
  },
  [y.OverlayWidgets.GUILDS](e) {
    let {
      locked: t,
      dragStart: n
    } = e;
    return (0, i.jsx)(g.default, {
      dragStart: n,
      locked: t
    })
  },
  [y.OverlayWidgets.VOICE](e) {
    let {
      id: t,
      anchor: n,
      isPreviewingInGame: a,
      locked: l,
      pinned: s
    } = e;
    return (0, i.jsx)(v.default, {
      anchor: n,
      id: t,
      locked: l,
      pinned: s,
      widget: y.OverlayWidgets.VOICE,
      isPreviewingInGame: a
    })
  },
  [y.OverlayWidgets.GUILDS_TEXT](e) {
    let {
      dragging: t,
      locked: n,
      dragStart: a
    } = e;
    return (0, i.jsx)(m.default, {
      dragStart: a,
      dragging: t,
      locked: n,
      pinned: !1
    })
  }
};
class C extends a.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.default.track(y.AnalyticEvents.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
      lastLayoutUpdate: null
    }))
  }
  renderWidget(e, t, n) {
    let {
      props: {
        locked: i,
        isPreviewingInGame: a
      },
      state: {
        dragging: l
      }
    } = this, s = T[e.type];
    if (null == s) throw Error("OverlayLayout: Widget does not exist in WidgetMap");
    return o => s({
      id: e.id,
      locked: i,
      pinned: e.pinned,
      dragging: l,
      isPreviewingInGame: a,
      anchor: t,
      size: n,
      dragStart: o
    })
  }
  render() {
    let {
      widget: e,
      widgetConfig: t,
      layoutSize: n,
      locked: a,
      isPreviewingInGame: l,
      isActiveRegion: s
    } = this.props;
    if (null == e || null == t) return null;
    let {
      id: o,
      pinned: r,
      zIndex: d,
      size: u,
      anchor: c
    } = e, p = (0, h.getSizeFromLayoutSize)(u, n), g = (0, h.getAnchorCoordsFromLayoutSize)(c, n), {
      minSize: m,
      resizeX: S,
      resizeY: v,
      dragAnywhere: y
    } = t, O = (0, E.isWidgetContainerVisible)({
      locked: a,
      isPreviewingInGame: l,
      pinned: r
    }), T = {
      minX: 0,
      minY: 0,
      maxX: n.width,
      maxY: n.height
    };
    return (0, i.jsx)(f.default, {
      id: o,
      size: p,
      anchor: g,
      container: T,
      minSize: m,
      hidden: !O,
      resizeX: S,
      resizeY: v,
      style: {
        zIndex: d
      },
      dragAnywhere: y,
      active: !a || s,
      onUpdate: this.handleUpdate,
      onClick: this.handleFocus,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      children: this.renderWidget(e, g, p)
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      lastLayoutUpdate: null,
      dragging: !1
    }), O(this, "handleUpdate", (e, t, n, i, a) => {
      let {
        props: {
          layoutSize: l
        },
        state: {
          lastLayoutUpdate: o
        }
      } = this;
      if (!(0, p.validResolution)(l)) return;
      let r = (0, h.getAnchorPercentageFromLayoutSize)(n, l),
        u = (0, h.getSizePercentageFromSize)(i, l);
      (0, s.setTopWidget)(t), (0, s.setWidgetLayout)(t, r, u);
      let c = e === f.Operations.MOVE,
        g = (0, h.getFullCoordsFromAnchorCoords)(n, l.width, l.height, a.width, a.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != o && o.was_resized || !c,
          was_dragged: null != o && o.was_dragged || c,
          widget_type: d.default.getWidgetType(t),
          window_width: l.width,
          window_height: l.height,
          widget_width: a.width,
          widget_height: a.height,
          widget_left: g.left,
          widget_top: g.top
        }
      })
    }), O(this, "handleFocus", e => {
      let {
        layoutSize: t
      } = this.props;
      (0, p.validResolution)(t) && (0, s.setTopWidget)(e)
    }), O(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.default.setPreviewInGameMode(!0), this.setState({
        dragging: !0
      }))
    }), O(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.default.setPreviewInGameMode(!1), this.setState({
        dragging: !1
      }))
    })
  }
}
let N = l.default.connectStores([d.default, u.default], e => {
  let {
    widgetId: t
  } = e, n = d.default.getWidget(t), i = u.default.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? d.default.getWidgetConfig(n.type) : null,
    locked: u.default.isInstanceUILocked(),
    isPreviewingInGame: u.default.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === y.OverlayWidgets.TEXT && i.has(y.OverlayActiveRegions.TEXT_WIDGET)
  }
})(C);

function I(e, t) {
  return (0, i.jsx)(N, {
    widgetId: e,
    layoutSize: t
  }, e)
}
t.default = l.default.connectStores([d.default, c.default], () => ({
  layout: d.default.getLayout(p.OVERLAY_LAYOUT_ID),
  layoutSize: c.default.windowSize(),
  renderWidget: I
}))(r.default)