let r, i;
n(653041), n(47120), n(411104), n(724458);
var a, s, o, l = n(392711),
  u = n.n(l),
  c = n(772848),
  d = n(442837),
  _ = n(433517),
  E = n(570140),
  f = n(131792),
  h = n(252982),
  p = n(434529),
  m = n(981631);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(o = a || (a = {})).REQUIRED = 'REQUIRED', o.OPTIONAL = 'OPTIONAL', o.OPTIONAL_DEFAULT = 'OPTIONAL_DEFAULT';
let T = 'migrated',
  g = {
[m.Odu.GUILDS]: {
  minSize: {
    width: 312,
    height: 300
  },
  resizeX: !1,
  resizeY: !0,
  dragAnywhere: !1,
  layoutPolicy: 'OPTIONAL',
  defaultSettings: {
    anchor: {
      left: 0.175,
      top: 0.15,
      bottom: null,
      right: null
    },
    size: {
      width: 'auto',
      height: 0.65
    },
    pinned: !1
  }
},
[m.Odu.TEXT]: {
  minSize: {
    width: 430,
    height: 300
  },
  resizeX: !0,
  resizeY: !0,
  dragAnywhere: !1,
  layoutPolicy: 'OPTIONAL',
  defaultSettings: {
    anchor: {
      left: 0.26,
      top: 0.15,
      bottom: null,
      right: null
    },
    size: {
      width: 0.565,
      height: 0.65
    },
    pinned: !0
  }
},
[m.Odu.VOICE]: {
  minSize: {
    width: 272,
    height: 100
  },
  resizeX: !1,
  resizeY: !1,
  dragAnywhere: !0,
  layoutPolicy: 'REQUIRED',
  defaultSettings: {
    anchor: {
      left: 0.011,
      top: 0.011,
      bottom: null,
      right: null
    },
    size: {
      width: 'auto',
      height: 'auto'
    },
    pinned: !0
  }
},
[m.Odu.GUILDS_TEXT]: {
  minSize: {
    height: 300,
    width: 610
  },
  resizeX: !0,
  resizeY: !0,
  dragAnywhere: !1,
  layoutPolicy: 'OPTIONAL_DEFAULT',
  defaultSettings: {
    anchor: {
      left: 0.15,
      top: 0.15,
      bottom: null,
      right: null
    },
    size: {
      width: 0.7,
      height: 0.65
    },
    pinned: !1
  }
}
  };

function S(e, t) {
  let n = i[e];
  if (null == n)
return !1;
  let a = r[n.layoutId];
  return null != a && t(n, a);
}

function A(e) {
  var t;
  return null === (t = g[e]) || void 0 === t ? void 0 : t.defaultSettings;
}
class N extends(s = d.ZP.PersistedStore) {
  initialize(e) {
null != e && null != e.layouts && null != e.widgets ? (r = function(e) {
  let t = {};
  return u().forEach(e, (e, n) => {
    t[n] = new f.Z(e);
  }), t;
}(e.layouts), i = function(e) {
  let t = {};
  return u().forEach(e, (e, n) => {
    t[n] = new h.Z(e);
  }), t;
}(e.widgets)) : (r = {}, i = {});
let t = !1,
  n = [];
u().forEach(g, (e, t) => {
  'REQUIRED' === e.layoutPolicy && n.push(t);
}), u().forEach(r, (e, a) => {
  let s = this.getWidgetsForLayout(a),
    o = !1;
  for (let e of n) {
    let n = s.find(t => t.type === e);
    if (null != n)
      continue;
    o = t = !0;
    let r = (0, c.Z)();
    n = new h.Z({
      ...this.getWidgetDefaultSettings(e),
      type: e,
      id: r,
      layoutId: a,
      zIndex: s.length
    }), s.push(n), i = {
      ...i,
      [r]: n
    };
  }
  o && (e = e.set('widgets', s.map(e => {
    let {
      id: t
    } = e;
    return t;
  })), r = {
    ...r,
    [a]: e
  });
}), u().forEach(i, (e, n) => {
  let a = r[e.layoutId];
  (null == a || 0 > a.widgets.indexOf(n)) && (i = {
    ...i
  }, delete i[n], t = !0);
}), t && (this.persist(), this.emitChange());
  }
  getState() {
return {
  layouts: r,
  widgets: i
};
  }
  getLayouts() {
return r;
  }
  getLayout(e) {
return r[e];
  }
  getAllWidgets() {
return i;
  }
  getWidget(e) {
return i[e];
  }
  getWidgetsForLayout(e) {
let t = this.getLayout(e);
return null == t ? [] : t.widgets.reduce((e, t) => {
  let n = this.getWidget(t);
  return null != n && e.push(n), e;
}, []);
  }
  getWidgetConfig(e) {
return g[e];
  }
  getWidgetDefaultSettings(e) {
return A(e);
  }
  getWidgetType(e) {
let t = i[e];
return null != t ? t.type : '';
  }
  getRegisteredWidgets() {
return g;
  }
  getDefaultLayout(e) {
let t = [];
return u().forEach(this.getRegisteredWidgets(), (n, r) => {
  switch (n.layoutPolicy) {
    case 'REQUIRED':
    case 'OPTIONAL_DEFAULT':
      t.push({
        ...n.defaultSettings,
        type: r,
        id: (0, c.Z)(),
        layoutId: e
      });
  }
}), t;
  }
}
I(N, 'displayName', 'LayoutStore'), I(N, 'persistKey', 'LayoutStore'), I(N, 'migrations', [
  () => {
let {
  pinnedWidgets: e,
  positions: t,
  sizes: n,
  v: r
} = {
  ..._.K.get('OverlayStore')
};
if (5 === r && e) {
  let r = [],
    i = e.map(e => {
      let i = null != t ? t[e] : null,
        a = null != n ? n[e] : null,
        s = {
          id: e,
          layoutId: T,
          type: e,
          anchor: i || {
            top: -1,
            left: -1,
            bottom: null,
            right: null
          },
          size: a || {
            width: -1,
            height: -1
          },
          pinned: !0,
          zIndex: 0
        };
      return r.push([
        s.id,
        s
      ]), s.id;
    });
  return {
    layouts: [
      [
        T,
        {
          id: T,
          widgets: i
        }
      ]
    ],
    widgets: r
  };
}
return {
  layouts: [],
  widgets: []
};
  },
  e => {
let {
  layouts: t,
  widgets: n
} = e, r = new Set(Object.keys(m.Odu)), i = Array.from(n).filter(e => {
  let [t] = e;
  return !r.has(t);
}), a = Array.from(t).filter(e => {
  let [t] = e;
  return t !== T;
});
return a.forEach(e => {
  let [t, n] = e, r = null, a = null;
  if (n.widgets.find(e => {
      let n = i.find(n => {
        let [r, i] = n;
        return r === e && i.layoutId === t;
      });
      return null != n && (null == a && n[1].type === m.Odu.VOICE && (a = n[0]), null == r && n[1].type === m.Odu.TEXT && (r = n[1].pinned), null != r && null != a || void 0);
    }), r || null == a)
    return;
  let s = (0, c.Z)();
  n.widgets = [
    a,
    s
  ], i.push([
    s,
    {
      ...A(m.Odu.GUILDS_TEXT),
      type: m.Odu.GUILDS_TEXT,
      id: s,
      layoutId: t,
      zIndex: 2
    }
  ]);
}), {
  widgets: i,
  layouts: a
};
  },
  e => {
let {
  layouts: t,
  widgets: n
} = e, r = t.reduce((e, t) => {
  let [n, r] = t;
  return e[n] = r, e;
}, {});
return {
  layouts: r,
  widgets: n.reduce((e, t) => {
    let [n, r] = t;
    return e[n] = r, e;
  }, {})
};
  }
]), t.Z = new N(E.Z, {
  LAYOUT_CREATE: function(e) {
let {
  layoutId: t,
  widgets: n,
  defaultResolution: a
} = e;
if (null != r[t])
  return !1;
let s = [];
n.forEach((e, t) => {
  let n = function(e) {
      let t = r[T];
      if (null != t)
        for (let n of t.widgets) {
          let t = i[n];
          if (null != t && t.type === e)
            return t;
        }
      return null;
    }(e.type),
    o = {
      ...e,
      zIndex: t
    };
  '' === o.id && (o.id = (0, c.Z)()), null != n && (o.pinned = n.pinned, -1 !== n.anchor.left && (o.anchor = (0, p.jL)(n.anchor, a)), -1 !== n.size.width && (o.size = (0, p.Ox)(n.size, a))), i = {
    ...i,
    [o.id]: new h.Z(o)
  }, s.push(o.id);
}), r = {
  ...r,
  [t]: new f.Z({
    id: t,
    widgets: s
  })
};
  },
  LAYOUT_SET_PINNED: function(e) {
let {
  widgetId: t
} = e;
return S(t, (e, t) => {
  (function(e) {
    i = {
      ...i,
      [e.id]: e.set('pinned', !e.pinned)
    };
  }(e));
});
  },
  LAYOUT_UPDATE_WIDGET: function(e) {
let {
  widgetId: t,
  anchor: n,
  size: r
} = e;
return S(t, (e, t) => function(e, t, n) {
  i = {
    ...i,
    [e.id]: e.merge({
      anchor: t,
      size: n
    })
  };
}(e, n, r));
  },
  LAYOUT_SET_TOP_WIDGET: function(e) {
let {
  widgetId: t
} = e;
return S(t, (e, t) => function(e, t) {
  let n = function(e) {
    let t = [];
    return e.widgets.forEach(e => {
      let n = i[e];
      null != n && t.push(n);
    }), t;
  }(e);
  n.sort((e, t) => e.zIndex - t.zIndex);
  let r = n.findIndex(e => e.id === t);
  if (r === n.length - 1)
    return !1;
  n.push(n.splice(r, 1)[0]);
  for (let e = 0; e < n.length; e++)
    (function(e, t) {
      i = {
        ...i,
        [e.id]: e.set('zIndex', t)
      };
    }(n[e], e));
  return !0;
}(t, e.id));
  },
  LAYOUT_DELETE_WIDGET: function(e) {
let {
  widgetId: t
} = e;
i = {
  ...i
}, delete i[t], u().forEach(r, (e, n) => {
  if (n === T)
    return;
  let i = e.widgets.indexOf(t);
  if (i >= 0) {
    let t = [...e.widgets];
    t.splice(i, 1), r = {
      ...r,
      [n]: e.set('widgets', t)
    };
  }
});
  },
  LAYOUT_DELETE_ALL_WIDGETS: function(e) {
let {
  layoutId: t
} = e, n = r[t];
if (null == n)
  return !1;
n.widgets.forEach(e => {
  i = {
    ...i
  }, delete i[e];
}), r = {
  ...r,
  [n.id]: n.set('widgets', [])
};
  },
  LAYOUT_CREATE_WIDGETS: function(e) {
let {
  widgetConfigs: t
} = e;
t.forEach(e => {
  let t = new h.Z(e),
    n = r[t.layoutId];
  if (null == n)
    throw Error('LayoutStore - handleAddWidget: Invalid layoutId');
  t = t.set('zIndex', n.widgets.length), i = {
    ...i,
    [t.id]: t
  };
  let a = [
    ...n.widgets,
    t.id
  ];
  r = {
    ...r,
    [n.id]: n.set('widgets', a)
  };
});
  }
});