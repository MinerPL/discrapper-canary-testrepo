t.d(n, {
  Mo: function() {
return r;
  },
  SC: function() {
return c;
  },
  _U: function() {
return s;
  }
}), t(47120);
var i = t(652874),
  a = t(868888),
  l = t(731965);
let o = (0, i.Z)((0, a.XR)(() => ({
  commandAnalyticsContext: new Map()
})));

function r(e) {
  let {
command: n,
location: t,
sectionName: i
  } = e, {
commandAnalyticsContext: a
  } = o.getState(), r = a.get(n);
  if (null == r || r.location !== t || r.sectionName !== i) {
let e = new Map(a);
e.set(n, {
  location: t,
  sectionName: i
}), (0, l.j)(() => o.setState({
  commandAnalyticsContext: e
}));
  }
}

function s(e) {
  let {
commandAnalyticsContext: n
  } = o.getState();
  return n.get(e);
}

function c(e) {
  let {
commandAnalyticsContext: n
  } = o.getState();
  if (n.has(e)) {
let t = new Map(n);
t.delete(e), (0, l.j)(() => o.setState({
  commandAnalyticsContext: t
}));
  }
}