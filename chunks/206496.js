"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("70102"), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("446674"),
  s = n("640583"),
  o = n("539405"),
  r = n("634175"),
  d = n("505507"),
  u = n("901165"),
  c = n("471671"),
  f = n("959479"),
  h = n("80687"),
  p = n("819068"),
  g = n("233102"),
  E = n("628480"),
  m = n("37207"),
  S = n("880584"),
  v = n("440899"),
  y = n("522019"),
  O = n("49111");
let T = {
  [O.OverlayWidgets.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: a,
      dragStart: l
    } = e;
    return (0, i.jsx)(v.default, {
      dragStart: l,
      locked: n,
      pinned: a,
      dragging: t
    })
  },
  [O.OverlayWidgets.GUILDS](e) {
    let {
      locked: t,
      dragStart: n
    } = e;
    return (0, i.jsx)(g.default, {
      dragStart: n,
      locked: t
    })
  },
  [O.OverlayWidgets.VOICE](e) {
    let {
      id: t,
      anchor: n,
      isPreviewingInGame: a,
      locked: l,
      pinned: s
    } = e;
    return (0, i.jsx)(y.default, {
      anchor: n,
      id: t,
      locked: l,
      pinned: s,
      widget: O.OverlayWidgets.VOICE,
      isPreviewingInGame: a
    })
  },
  [O.OverlayWidgets.GUILDS_TEXT](e) {
    let {
      dragging: t,
      locked: n,
      dragStart: a
    } = e;
    return (0, i.jsx)(E.default, {
      dragStart: a,
      dragging: t,
      locked: n,
      pinned: !1
    })
  },
  [O.OverlayWidgets.LOBBY_VOICE](e) {
    let {
      id: t,
      anchor: n,
      isPreviewingInGame: a,
      locked: l,
      pinned: s
    } = e;
    return (0, i.jsx)(m.default, {
      anchor: n,
      id: t,
      locked: l,
      pinned: s,
      widget: O.OverlayWidgets.LOBBY_VOICE,
      isPreviewingInGame: a
    })
  }
};
class C extends a.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.default.track(O.AnalyticEvents.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
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
      minSize: E,
      resizeX: m,
      resizeY: v,
      dragAnywhere: y
    } = t, O = (0, S.isWidgetContainerVisible)({
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
      minSize: E,
      hidden: !O,
      resizeX: m,
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
    super(...e), this.state = {
      lastLayoutUpdate: null,
      dragging: !1
    }, this.handleUpdate = (e, t, n, i, a) => {
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
    }, this.handleFocus = e => {
      let {
        layoutSize: t
      } = this.props;
      (0, p.validResolution)(t) && (0, s.setTopWidget)(e)
    }, this.handleDragStart = () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.default.setPreviewInGameMode(!0), this.setState({
        dragging: !0
      }))
    }, this.handleDragEnd = () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.default.setPreviewInGameMode(!1), this.setState({
        dragging: !1
      }))
    }
  }
}
let I = l.default.connectStores([d.default, u.default], e => {
  let {
    widgetId: t
  } = e, n = d.default.getWidget(t), i = u.default.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? d.default.getWidgetConfig(n.type) : null,
    locked: u.default.isInstanceUILocked(),
    isPreviewingInGame: u.default.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === O.OverlayWidgets.TEXT && i.has(O.OverlayActiveRegions.TEXT_WIDGET)
  }
})(C);

function N(e, t) {
  return (0, i.jsx)(I, {
    widgetId: e,
    layoutSize: t
  }, e)
}
var _ = l.default.connectStores([d.default, c.default], () => ({
  layout: d.default.getLayout(p.OVERLAY_LAYOUT_ID),
  layoutSize: c.default.windowSize(),
  renderWidget: N
}))(r.default)