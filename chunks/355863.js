"use strict";
let i, r;
n(653041), n(47120), n(411104), n(724458);
var s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(772848),
  d = n(442837),
  c = n(433517),
  E = n(570140),
  I = n(131792),
  T = n(252982),
  h = n(434529),
  S = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = s || (s = {})).REQUIRED = "REQUIRED", a.OPTIONAL = "OPTIONAL", a.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
let N = "migrated",
  A = {
    [S.Odu.GUILDS]: {
      minSize: {
        width: 312,
        height: 300
      },
      resizeX: !1,
      resizeY: !0,
      dragAnywhere: !1,
      layoutPolicy: "OPTIONAL",
      defaultSettings: {
        anchor: {
          left: .175,
          top: .15,
          bottom: null,
          right: null
        },
        size: {
          width: "auto",
          height: .65
        },
        pinned: !1
      }
    },
    [S.Odu.TEXT]: {
      minSize: {
        width: 430,
        height: 300
      },
      resizeX: !0,
      resizeY: !0,
      dragAnywhere: !1,
      layoutPolicy: "OPTIONAL",
      defaultSettings: {
        anchor: {
          left: .26,
          top: .15,
          bottom: null,
          right: null
        },
        size: {
          width: .565,
          height: .65
        },
        pinned: !0
      }
    },
    [S.Odu.VOICE]: {
      minSize: {
        width: 272,
        height: 100
      },
      resizeX: !1,
      resizeY: !1,
      dragAnywhere: !0,
      layoutPolicy: "REQUIRED",
      defaultSettings: {
        anchor: {
          left: .011,
          top: .011,
          bottom: null,
          right: null
        },
        size: {
          width: "auto",
          height: "auto"
        },
        pinned: !0
      }
    },
    [S.Odu.GUILDS_TEXT]: {
      minSize: {
        height: 300,
        width: 610
      },
      resizeX: !0,
      resizeY: !0,
      dragAnywhere: !1,
      layoutPolicy: "OPTIONAL_DEFAULT",
      defaultSettings: {
        anchor: {
          left: .15,
          top: .15,
          bottom: null,
          right: null
        },
        size: {
          width: .7,
          height: .65
        },
        pinned: !1
      }
    }
  };

function m(e, t) {
  let n = r[e];
  if (null == n) return !1;
  let s = i[n.layoutId];
  return null != s && t(n, s)
}

function O(e) {
  var t;
  return null === (t = A[e]) || void 0 === t ? void 0 : t.defaultSettings
}
class R extends(o = d.ZP.PersistedStore) {
  initialize(e) {
    null != e && null != e.layouts && null != e.widgets ? (i = function(e) {
      let t = {};
      return u().forEach(e, (e, n) => {
        t[n] = new I.Z(e)
      }), t
    }(e.layouts), r = function(e) {
      let t = {};
      return u().forEach(e, (e, n) => {
        t[n] = new T.Z(e)
      }), t
    }(e.widgets)) : (i = {}, r = {});
    let t = !1,
      n = [];
    u().forEach(A, (e, t) => {
      "REQUIRED" === e.layoutPolicy && n.push(t)
    }), u().forEach(i, (e, s) => {
      let o = this.getWidgetsForLayout(s),
        a = !1;
      for (let e of n) {
        let n = o.find(t => t.type === e);
        if (null != n) continue;
        a = t = !0;
        let i = (0, _.Z)();
        n = new T.Z({
          ...this.getWidgetDefaultSettings(e),
          type: e,
          id: i,
          layoutId: s,
          zIndex: o.length
        }), o.push(n), r = {
          ...r,
          [i]: n
        }
      }
      a && (e = e.set("widgets", o.map(e => {
        let {
          id: t
        } = e;
        return t
      })), i = {
        ...i,
        [s]: e
      })
    }), u().forEach(r, (e, n) => {
      let s = i[e.layoutId];
      (null == s || 0 > s.widgets.indexOf(n)) && (r = {
        ...r
      }, delete r[n], t = !0)
    }), t && (this.persist(), this.emitChange())
  }
  getState() {
    return {
      layouts: i,
      widgets: r
    }
  }
  getLayouts() {
    return i
  }
  getLayout(e) {
    return i[e]
  }
  getAllWidgets() {
    return r
  }
  getWidget(e) {
    return r[e]
  }
  getWidgetsForLayout(e) {
    let t = this.getLayout(e);
    return null == t ? [] : t.widgets.reduce((e, t) => {
      let n = this.getWidget(t);
      return null != n && e.push(n), e
    }, [])
  }
  getWidgetConfig(e) {
    return A[e]
  }
  getWidgetDefaultSettings(e) {
    return O(e)
  }
  getWidgetType(e) {
    let t = r[e];
    return null != t ? t.type : ""
  }
  getRegisteredWidgets() {
    return A
  }
  getDefaultLayout(e) {
    let t = [];
    return u().forEach(this.getRegisteredWidgets(), (n, i) => {
      switch (n.layoutPolicy) {
        case "REQUIRED":
        case "OPTIONAL_DEFAULT":
          t.push({
            ...n.defaultSettings,
            type: i,
            id: (0, _.Z)(),
            layoutId: e
          })
      }
    }), t
  }
}
f(R, "displayName", "LayoutStore"), f(R, "persistKey", "LayoutStore"), f(R, "migrations", [() => {
  let {
    pinnedWidgets: e,
    positions: t,
    sizes: n,
    v: i
  } = {
    ...c.K.get("OverlayStore")
  };
  if (5 === i && e) {
    let i = [],
      r = e.map(e => {
        let r = null != t ? t[e] : null,
          s = null != n ? n[e] : null,
          o = {
            id: e,
            layoutId: N,
            type: e,
            anchor: r || {
              top: -1,
              left: -1,
              bottom: null,
              right: null
            },
            size: s || {
              width: -1,
              height: -1
            },
            pinned: !0,
            zIndex: 0
          };
        return i.push([o.id, o]), o.id
      });
    return {
      layouts: [
        [N, {
          id: N,
          widgets: r
        }]
      ],
      widgets: i
    }
  }
  return {
    layouts: [],
    widgets: []
  }
}, e => {
  let {
    layouts: t,
    widgets: n
  } = e, i = new Set(Object.keys(S.Odu)), r = Array.from(n).filter(e => {
    let [t] = e;
    return !i.has(t)
  }), s = Array.from(t).filter(e => {
    let [t] = e;
    return t !== N
  });
  return s.forEach(e => {
    let [t, n] = e, i = null, s = null;
    if (n.widgets.find(e => {
        let n = r.find(n => {
          let [i, r] = n;
          return i === e && r.layoutId === t
        });
        return null != n && (null == s && n[1].type === S.Odu.VOICE && (s = n[0]), null == i && n[1].type === S.Odu.TEXT && (i = n[1].pinned), null != i && null != s || void 0)
      }), i || null == s) return;
    let o = (0, _.Z)();
    n.widgets = [s, o], r.push([o, {
      ...O(S.Odu.GUILDS_TEXT),
      type: S.Odu.GUILDS_TEXT,
      id: o,
      layoutId: t,
      zIndex: 2
    }])
  }), {
    widgets: r,
    layouts: s
  }
}, e => {
  let {
    layouts: t,
    widgets: n
  } = e, i = t.reduce((e, t) => {
    let [n, i] = t;
    return e[n] = i, e
  }, {});
  return {
    layouts: i,
    widgets: n.reduce((e, t) => {
      let [n, i] = t;
      return e[n] = i, e
    }, {})
  }
}]), t.Z = new R(E.Z, {
  LAYOUT_CREATE: function(e) {
    let {
      layoutId: t,
      widgets: n,
      defaultResolution: s
    } = e;
    if (null != i[t]) return !1;
    let o = [];
    n.forEach((e, t) => {
      let n = function(e) {
          let t = i[N];
          if (null != t)
            for (let n of t.widgets) {
              let t = r[n];
              if (null != t && t.type === e) return t
            }
          return null
        }(e.type),
        a = {
          ...e,
          zIndex: t
        };
      "" === a.id && (a.id = (0, _.Z)()), null != n && (a.pinned = n.pinned, -1 !== n.anchor.left && (a.anchor = (0, h.jL)(n.anchor, s)), -1 !== n.size.width && (a.size = (0, h.Ox)(n.size, s))), r = {
        ...r,
        [a.id]: new T.Z(a)
      }, o.push(a.id)
    }), i = {
      ...i,
      [t]: new I.Z({
        id: t,
        widgets: o
      })
    }
  },
  LAYOUT_SET_PINNED: function(e) {
    let {
      widgetId: t
    } = e;
    return m(t, (e, t) => {
      (function(e) {
        r = {
          ...r,
          [e.id]: e.set("pinned", !e.pinned)
        }
      })(e)
    })
  },
  LAYOUT_UPDATE_WIDGET: function(e) {
    let {
      widgetId: t,
      anchor: n,
      size: i
    } = e;
    return m(t, (e, t) => (function(e, t, n) {
      r = {
        ...r,
        [e.id]: e.merge({
          anchor: t,
          size: n
        })
      }
    })(e, n, i))
  },
  LAYOUT_SET_TOP_WIDGET: function(e) {
    let {
      widgetId: t
    } = e;
    return m(t, (e, t) => (function(e, t) {
      let n = function(e) {
        let t = [];
        return e.widgets.forEach(e => {
          let n = r[e];
          null != n && t.push(n)
        }), t
      }(e);
      n.sort((e, t) => e.zIndex - t.zIndex);
      let i = n.findIndex(e => e.id === t);
      if (i === n.length - 1) return !1;
      n.push(n.splice(i, 1)[0]);
      for (let e = 0; e < n.length; e++)(function(e, t) {
        r = {
          ...r,
          [e.id]: e.set("zIndex", t)
        }
      })(n[e], e);
      return !0
    })(t, e.id))
  },
  LAYOUT_DELETE_WIDGET: function(e) {
    let {
      widgetId: t
    } = e;
    r = {
      ...r
    }, delete r[t], u().forEach(i, (e, n) => {
      if (n === N) return;
      let r = e.widgets.indexOf(t);
      if (r >= 0) {
        let t = [...e.widgets];
        t.splice(r, 1), i = {
          ...i,
          [n]: e.set("widgets", t)
        }
      }
    })
  },
  LAYOUT_DELETE_ALL_WIDGETS: function(e) {
    let {
      layoutId: t
    } = e, n = i[t];
    if (null == n) return !1;
    n.widgets.forEach(e => {
      r = {
        ...r
      }, delete r[e]
    }), i = {
      ...i,
      [n.id]: n.set("widgets", [])
    }
  },
  LAYOUT_CREATE_WIDGETS: function(e) {
    let {
      widgetConfigs: t
    } = e;
    t.forEach(e => {
      let t = new T.Z(e),
        n = i[t.layoutId];
      if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
      t = t.set("zIndex", n.widgets.length), r = {
        ...r,
        [t.id]: t
      };
      let s = [...n.widgets, t.id];
      i = {
        ...i,
        [n.id]: n.set("widgets", s)
      }
    })
  }
})