n.d(t, {
  CF: function() {
return i;
  },
  Es: function() {
return r;
  },
  z5: function() {
return a;
  }
}), n(47120);
let r = (0, n(652874).Z)(() => ({
  currentToast: null,
  queuedToasts: []
}));

function i(e) {
  r.setState(t => null != t.currentToast ? {
...t,
queuedToasts: [
  ...t.queuedToasts,
  e
]
  } : {
currentToast: e,
queuedToasts: []
  });
}

function a() {
  r.setState(e => {
let t = e.queuedToasts;
return t.length > 0 ? {
  currentToast: t[0],
  queuedToasts: t.slice(1)
} : {
  currentToast: null,
  queuedToasts: []
};
  });
}