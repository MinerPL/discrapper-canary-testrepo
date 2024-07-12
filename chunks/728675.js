
function r(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
{
  onBeforeBatch: r
} = n,
i = new Set();

  function a(e) {
null != e.channel_id && i.has(e.channel_id) && t(e);
  }

  function o(e) {
let {
  message: t
} = e;
if (null != t.channel_id && !!i.has(t.channel_id))
  null == r || r(), a(t);
  }

  function s(e) {
let {
  channelId: t,
  messages: n
} = e;
i.add(t), null == r || r(), n.forEach(e => a(e));
  }

  function l(e) {
null == r || r(), e.messages.forEach(e => {
  e.forEach(e => t(e));
});
  }
  e.actions = {
...e.actions,
POST_CONNECTION_OPEN: function() {
  i.clear();
},
MESSAGE_CREATE: {
  callback: o,
  autoSubscribe: !1
},
MESSAGE_UPDATE: o,
LOAD_MESSAGES_SUCCESS: s,
LOAD_MESSAGES_AROUND_SUCCESS: s,
LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
  let {
    messages: n
  } = e;
  null == r || r(), n.forEach(e => t(e));
},
LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
  let {
    messages: n
  } = e;
  null == r || r(), n.forEach(e => t(e));
},
SEARCH_FINISH: l,
MOD_VIEW_SEARCH_FINISH: l,
CHANNEL_SELECT: {
  callback: function(e) {
    let {
      channelId: t
    } = e;
    null != t && i.add(t);
  },
  autoSubscribe: !1
}
  };
}
n.d(t, {
  Z: function() {
return r;
  }
}), n(47120);