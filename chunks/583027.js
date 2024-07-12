t.d(n, {
  As: function() {
return r;
  },
  HJ: function() {
return a;
  },
  Mo: function() {
return s;
  },
  SC: function() {
return c;
  },
  _U: function() {
return o;
  }
}), t(47120);
var i = t(652874),
  l = t(868888);
let a = (0, i.Z)((0, l.XR)(() => ({
  channelTextAreaHeight: void 0,
  commandAnalyticsContext: new Map()
})));

function r(e) {
  a.setState({
channelTextAreaHeight: e
  });
}

function s(e) {
  let {
command: n,
location: t,
sectionName: i
  } = e, {
commandAnalyticsContext: l
  } = a.getState(), r = l.get(n);
  if (null == r || r.location !== t || r.sectionName !== i) {
let e = new Map(l);
e.set(n, {
  location: t,
  sectionName: i
}), a.setState({
  commandAnalyticsContext: e
});
  }
}

function o(e) {
  let {
commandAnalyticsContext: n
  } = a.getState();
  return n.get(e);
}

function c(e) {
  let {
commandAnalyticsContext: n
  } = a.getState();
  if (n.has(e)) {
let t = new Map(n);
t.delete(e), a.setState({
  commandAnalyticsContext: t
});
  }
}