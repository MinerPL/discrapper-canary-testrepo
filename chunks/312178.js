"use strict";
n(411104), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(765250),
  o = n(13245),
  r = n(26229),
  d = n(355863),
  c = n(237997),
  u = n(451478),
  h = n(583883),
  p = n(434529),
  f = n(145597),
  E = n(382790),
  Z = n(990673),
  g = n(906037),
  m = n(430036),
  _ = n(839434),
  I = n(981631);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let v = {
  [I.Odu.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: s,
      dragStart: l
    } = e;
    return (0, i.jsx)(m.Z, {
      dragStart: l,
      locked: n,
      pinned: s,
      dragging: t
    })
  },
  [I.Odu.GUILDS](e) {
    let {
      locked: t,
      dragStart: n
    } = e;
    return (0, i.jsx)(E.Z, {
      dragStart: n,
      locked: t
    })
  },
  [I.Odu.VOICE](e) {
    let {
      id: t,
      anchor: n,
      isPreviewingInGame: s,
      locked: l,
      pinned: a
    } = e;
    return (0, i.jsx)(_.Z, {
      anchor: n,
      id: t,
      locked: l,
      pinned: a,
      widget: I.Odu.VOICE,
      isPreviewingInGame: s
    })
  },
  [I.Odu.GUILDS_TEXT](e) {
    let {
      dragging: t,
      locked: n,
      dragStart: s
    } = e;
    return (0, i.jsx)(Z.Z, {
      dragStart: s,
      dragging: t,
      locked: n,
      pinned: !1
    })
  }
};
class C extends s.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.Z.track(I.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
      lastLayoutUpdate: null
    }))
  }
  renderWidget(e, t, n) {
    let {
      props: {
        locked: i,
        isPreviewingInGame: s
      },
      state: {
        dragging: l
      }
    } = this, a = v[e.type];
    if (null == a) throw Error("OverlayLayout: Widget does not exist in WidgetMap");
    return o => a({
      id: e.id,
      locked: i,
      pinned: e.pinned,
      dragging: l,
      isPreviewingInGame: s,
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
      locked: s,
      isPreviewingInGame: l,
      isActiveRegion: a
    } = this.props;
    if (null == e || null == t) return null;
    let {
      id: o,
      pinned: r,
      zIndex: d,
      size: c,
      anchor: u
    } = e, f = (0, p.w_)(c, n), E = (0, p.KR)(u, n), {
      minSize: Z,
      resizeX: m,
      resizeY: _,
      dragAnywhere: I
    } = t, S = (0, g.eM)({
      locked: s,
      isPreviewingInGame: l,
      pinned: r
    }), v = {
      minX: 0,
      minY: 0,
      maxX: n.width,
      maxY: n.height
    };
    return (0, i.jsx)(h.Z, {
      id: o,
      size: f,
      anchor: E,
      container: v,
      minSize: Z,
      hidden: !S,
      resizeX: m,
      resizeY: _,
      style: {
        zIndex: d
      },
      dragAnywhere: I,
      active: !s || a,
      onUpdate: this.handleUpdate,
      onClick: this.handleFocus,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      children: this.renderWidget(e, E, f)
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      lastLayoutUpdate: null,
      dragging: !1
    }), S(this, "handleUpdate", (e, t, n, i, s) => {
      let {
        props: {
          layoutSize: l
        },
        state: {
          lastLayoutUpdate: o
        }
      } = this;
      if (!(0, f.Te)(l)) return;
      let r = (0, p.jL)(n, l),
        c = (0, p.Ox)(i, l);
      (0, a.Os)(t), (0, a.nv)(t, r, c);
      let u = e === h.B.MOVE,
        E = (0, p.PY)(n, l.width, l.height, s.width, s.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != o && o.was_resized || !u,
          was_dragged: null != o && o.was_dragged || u,
          widget_type: d.Z.getWidgetType(t),
          window_width: l.width,
          window_height: l.height,
          widget_width: s.width,
          widget_height: s.height,
          widget_left: E.left,
          widget_top: E.top
        }
      })
    }), S(this, "handleFocus", e => {
      let {
        layoutSize: t
      } = this.props;
      (0, f.Te)(t) && (0, a.Os)(e)
    }), S(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.Z.setPreviewInGameMode(!0), this.setState({
        dragging: !0
      }))
    }), S(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.Z.setPreviewInGameMode(!1), this.setState({
        dragging: !1
      }))
    })
  }
}
let x = l.ZP.connectStores([d.Z, c.Z], e => {
  let {
    widgetId: t
  } = e, n = d.Z.getWidget(t), i = c.Z.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
    locked: c.Z.isInstanceUILocked(),
    isPreviewingInGame: c.Z.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === I.Odu.TEXT && i.has(I.O0n.TEXT_WIDGET)
  }
})(C);

function N(e, t) {
  return (0, i.jsx)(x, {
    widgetId: e,
    layoutSize: t
  }, e)
}
t.Z = l.ZP.connectStores([d.Z, u.Z], () => ({
  layout: d.Z.getLayout(f.qU),
  layoutSize: u.Z.windowSize(),
  renderWidget: N
}))(r.Z)