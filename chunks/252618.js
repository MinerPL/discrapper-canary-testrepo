n.d(t, {
  EM: function() {
return c;
  },
  PR: function() {
return u;
  },
  Tt: function() {
return _;
  },
  ZD: function() {
return f;
  },
  yY: function() {
return E;
  }
}), n(47120);
var r = n(470079),
  i = n(652874);
let a = {
base: n(358085).isPlatformEmbedded ? void 0 : 'Discord'
  },
  o = 0,
  s = {
count: 3,
onlyWhenBlurred: !1,
interval: 1000
  },
  l = (0, i.Z)(() => ({
titles: [a],
notificationCount: void 0,
flashQueue: []
  }));

function u(e) {
  l.setState({
notificationCount: e
  });
}

function c(e) {
  let t = {
...s,
...e,
id: o++
  };
  return t.count = Math.max(t.count, t.messages.length), l.setState(e => ({
flashQueue: [
  ...e.flashQueue,
  t
]
  })), () => d(t.id);
}

function d(e) {
  l.setState(t => ({
flashQueue: t.flashQueue.filter(t => t.id !== e)
  }));
}

function _(e) {
  r.useEffect(() => {
var t;
return t = e, l.setState(e => ({
  titles: [
    t,
    ...e.titles
  ]
})), () => {
  l.setState(e => ({
    titles: e.titles.filter(e => e !== t)
  }));
};
  }, [...Object.values(e)]);
}

function E(e) {
  return _(e), null;
}

function f() {
  let {
skipsSettingDefaultPageTitle: e
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  r.useEffect(() => {
function e() {
  l.setState({
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
let [e, t] = l(e => {
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
}), [n, i] = r.useState(!1), a = r.useRef(0), o = null == t ? void 0 : t.messages[a.current % t.messages.length];
return r.useEffect(() => {
  if (null == t) {
    a.current = 0, i(!1);
    return;
  }
  if (document.hasFocus() && t.onlyWhenBlurred) {
    d(t.id), i(!1);
    return;
  }
  let e = setInterval(() => {
    if (a.current >= t.count) {
      d(t.id), i(!1);
      return;
    }
    i(e => !e || (a.current += 1, !1));
  }, t.interval);
  return () => clearInterval(e);
}, [t]), n ? o : e;
  }();
  r.useEffect(() => {
let n = t === a.base;
if (!e || !n)
  document.title = t;
  }, [
e,
t
  ]);
}