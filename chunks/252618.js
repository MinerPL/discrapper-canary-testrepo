n.d(t, {
  EM: function() {
return d;
  },
  PR: function() {
return c;
  },
  Tt: function() {
return E;
  },
  ZD: function() {
return h;
  },
  yY: function() {
return f;
  }
}), n(47120);
var r = n(470079),
  i = n(652874),
  a = n(731965);
let s = {
base: n(358085).isPlatformEmbedded ? void 0 : 'Discord'
  },
  o = 0,
  l = {
count: 3,
onlyWhenBlurred: !1,
interval: 1000
  },
  u = (0, i.Z)(() => ({
titles: [s],
notificationCount: void 0,
flashQueue: []
  }));

function c(e) {
  (0, a.j)(() => u.setState({
notificationCount: e
  }));
}

function d(e) {
  let t = {
...l,
...e,
id: o++
  };
  return t.count = Math.max(t.count, t.messages.length), u.setState(e => ({
flashQueue: [
  ...e.flashQueue,
  t
]
  })), () => _(t.id);
}

function _(e) {
  u.setState(t => ({
flashQueue: t.flashQueue.filter(t => t.id !== e)
  }));
}

function E(e) {
  r.useEffect(() => {
var t;
return t = e, (0, a.j)(() => u.setState(e => ({
  titles: [
    t,
    ...e.titles
  ]
}))), () => {
  (0, a.j)(() => u.setState(e => ({
    titles: e.titles.filter(e => e !== t)
  })));
};
  }, [...Object.values(e)]);
}

function f(e) {
  return E(e), null;
}

function h() {
  let {
skipsSettingDefaultPageTitle: e
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  r.useEffect(() => {
function e() {
  u.setState({
    flashQueue: []
  });
}
return document.addEventListener('focusin', e, {
  capture: !0
}), () => document.removeEventListener('focusin', e, {
  capture: !0
});
  }, []);
  let t = function() {
let [e, t] = u(e => {
  let {
    flashQueue: t
  } = e, n = function(e) {
    let t, n, r;
    for (let i of e.titles) {
      if (null != t && null != n)
        break;
      t = null != t ? t : i.base, n = null != n ? n : i.location, r = null != r ? r : i.subsection;
    }
    return [
      t,
      r,
      n
    ];
  }(e).filter(e => null != e).join(' | '), r = function(e) {
    let {
      notificationCount: t
    } = e;
    return null == t || 0 === t ? '' : t < 0 ? '\u2022 ' : '('.concat(t, ') ');
  }(e);
  return [
    ''.concat(r).concat(n),
    t[0]
  ];
}), [n, i] = r.useState(!1), a = r.useRef(0), s = null == t ? void 0 : t.messages[a.current % t.messages.length];
return r.useEffect(() => {
  if (null == t) {
    a.current = 0, i(!1);
    return;
  }
  if (document.hasFocus() && t.onlyWhenBlurred) {
    _(t.id), i(!1);
    return;
  }
  let e = setInterval(() => {
    if (a.current >= t.count) {
      _(t.id), i(!1);
      return;
    }
    i(e => !e || (a.current += 1, !1));
  }, t.interval);
  return () => clearInterval(e);
}, [t]), n ? s : e;
  }();
  r.useEffect(() => {
let n = t === s.base;
if (!e || !n)
  document.title = t;
  }, [
e,
t
  ]);
}