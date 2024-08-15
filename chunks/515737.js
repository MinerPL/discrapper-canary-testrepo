r.d(t, {
  t: function() {
return E;
  }
});
var n = r(151122),
  a = r(370336),
  o = r(688838),
  i = r(163162);
let _ = [
'EventTarget',
'Window',
'Node',
'ApplicationCache',
'AudioTrackList',
'BroadcastChannel',
'ChannelMergerNode',
'CryptoOperation',
'EventSource',
'FileReader',
'HTMLUnknownElement',
'IDBDatabase',
'IDBRequest',
'IDBTransaction',
'KeyOperation',
'MediaController',
'MessagePort',
'ModalWindow',
'Notification',
'SVGElementInstance',
'Screen',
'SharedWorker',
'TextTrack',
'TextTrackCue',
'TextTrackList',
'WebSocket',
'WebSocketWorker',
'Worker',
'XMLHttpRequest',
'XMLHttpRequestEventTarget',
'XMLHttpRequestUpload'
  ],
  E = (0, n._I)((e = {}) => {
let t = {
  XMLHttpRequest: !0,
  eventTarget: !0,
  requestAnimationFrame: !0,
  setInterval: !0,
  setTimeout: !0,
  ...e
};
return {
  name: 'BrowserApiErrors',
  setupOnce() {
    t.setTimeout && (0, a.hl)(i.m9, 'setTimeout', s), t.setInterval && (0, a.hl)(i.m9, 'setInterval', s), t.requestAnimationFrame && (0, a.hl)(i.m9, 'requestAnimationFrame', c), t.XMLHttpRequest && 'XMLHttpRequest' in i.m9 && (0, a.hl)(XMLHttpRequest.prototype, 'send', I);
    let e = t.eventTarget;
    e && (Array.isArray(e) ? e : _).forEach(u);
  }
};
  });

function s(e) {
  return function(...t) {
let r = t[0];
return t[0] = (0, i.re)(r, {
  mechanism: {
    data: {
      function: (0, o.$P)(e)
    },
    handled: !1,
    type: 'instrument'
  }
}), e.apply(this, t);
  };
}

function c(e) {
  return function(t) {
return e.apply(this, [(0, i.re)(t, {
  mechanism: {
    data: {
      function: 'requestAnimationFrame',
      handler: (0, o.$P)(e)
    },
    handled: !1,
    type: 'instrument'
  }
})]);
  };
}

function I(e) {
  return function(...t) {
let r = this;
return [
  'onload',
  'onerror',
  'onprogress',
  'onreadystatechange'
].forEach(e => {
  e in r && 'function' == typeof r[e] && (0, a.hl)(r, e, function(t) {
    let r = {
        mechanism: {
          data: {
            function: e,
            handler: (0, o.$P)(t)
          },
          handled: !1,
          type: 'instrument'
        }
      },
      n = (0, a.HK)(t);
    return n && (r.mechanism.data.handler = (0, o.$P)(n)), (0, i.re)(t, r);
  });
}), e.apply(this, t);
  };
}

function u(e) {
  let t = i.m9,
r = t[e] && t[e].prototype;
  if (!!r && !!r.hasOwnProperty && !!r.hasOwnProperty('addEventListener'))
(0, a.hl)(r, 'addEventListener', function(t) {
  return function(r, n, a) {
    try {
      'function' == typeof n.handleEvent && (n.handleEvent = (0, i.re)(n.handleEvent, {
        mechanism: {
          data: {
            function: 'handleEvent',
            handler: (0, o.$P)(n),
            target: e
          },
          handled: !1,
          type: 'instrument'
        }
      }));
    } catch (e) {}
    return t.apply(this, [
      r,
      (0, i.re)(n, {
        mechanism: {
          data: {
            function: 'addEventListener',
            handler: (0, o.$P)(n),
            target: e
          },
          handled: !1,
          type: 'instrument'
        }
      }),
      a
    ]);
  };
}), (0, a.hl)(r, 'removeEventListener', function(e) {
  return function(t, r, n) {
    try {
      let a = r && r.__sentry_wrapped__;
      a && e.call(this, t, a, n);
    } catch (e) {}
    return e.call(this, t, r, n);
  };
});
}