n.d(t, {
  D: function() {
return a;
  }
});
var r = n(823379),
  i = n(228168);
let a = e => {
  switch (e) {
case i.N9.ACTIVITY:
  return {
    sendReact: 'SEND_REACT_ACTIVITY',
      pressReact: 'PRESS_REACT_ACTIVITY',
      sendReply: 'SEND_REPLY_ACTIVITY',
      pressReply: 'PRESS_REPLY_ACTIVITY'
  };
case i.N9.AVATAR:
  return {
    sendReact: 'SEND_REACT_AVATAR',
      pressReact: 'PRESS_REACT_AVATAR',
      sendReply: 'SEND_REPLY_AVATAR',
      pressReply: 'PRESS_REPLY_AVATAR'
  };
case i.N9.STATUS:
  return {
    sendReact: 'SEND_REACT_CUSTOM_STATUS',
      pressReact: 'PRESS_REACT_CUSTOM_STATUS',
      sendReply: 'SEND_REPLY_CUSTOM_STATUS',
      pressReply: 'PRESS_REPLY_CUSTOM_STATUS'
  };
default:
  (0, r.vE)(e);
  }
};