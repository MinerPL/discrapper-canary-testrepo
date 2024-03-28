"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("653041"), a("47120");
var r = a("735250");
a("470079");
var n = a("392711"),
  i = a.n(n),
  l = a("481060"),
  s = a("481250"),
  o = a("513547"),
  d = a("689938"),
  u = a("299552"),
  c = a("794711");
let m = {
  userId: 1,
  dataType: 2,
  savedKB: 3,
  numFrames: 4,
  startTimestampMs: 5,
  endTimestampMs: 6,
  width: 7,
  height: 8,
  audioChannels: 9,
  sampleRate: 10
};

function f(e) {
  let {
    clips: t
  } = e;
  if (null == t) return (0, r.jsx)(l.Spinner, {
    type: l.Spinner.Type.SPINNING_CIRCLE
  });
  let a = i().map(t, (e, t) => {
    if (void 0 !== e && "buffers" !== t) return (0, r.jsx)(o.Item, {
      label: t,
      value: e
    }, t)
  });
  return a.push((0, r.jsx)(o.Item, {
    label: "Frames Per Second",
    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
  }, "framerate")), (0, r.jsxs)(l.FormSection, {
    tag: l.FormTitleTags.H2,
    title: d.default.Messages.RTC_DEBUG_CLIPS,
    children: [(0, s.renderTwoColumns)(a), function(e) {
      if (null != e.buffers) return e.buffers.map(e => {
        let t = [];
        for (let a of Object.keys(e).sort((e, t) => {
            let a = m[e],
              r = m[t];
            if (a !== r) return void 0 === a ? 1 : void 0 === r ? -1 : a - r;
            return e > t ? 1 : -1
          })) {
          let n = e[a];
          null !== n && "key" !== a && t.push((0, r.jsx)(o.Item, {
            label: a,
            value: n
          }, a))
        }
        return (0, r.jsx)(l.FormSection, {
          className: c.marginBottom40,
          title: "Buffer: ".concat(e.key),
          titleClassName: u.title,
          children: (0, s.renderTwoColumns)(t)
        }, "Buffer: ".concat(e.key))
      })
    }(t)]
  })
}