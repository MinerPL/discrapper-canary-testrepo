n.d(t, {
    Q: function () {
        return a;
    }
});
var r = n(823379),
    i = n(228168);
let a = (e) => {
    switch (e) {
        case i.n_.ACTIVITY:
            return {
                sendReact: 'SEND_REACT_ACTIVITY',
                pressReact: 'PRESS_REACT_ACTIVITY',
                sendReply: 'SEND_REPLY_ACTIVITY',
                pressReply: 'PRESS_REPLY_ACTIVITY'
            };
        case i.n_.AVATAR:
            return {
                sendReact: 'SEND_REACT_AVATAR',
                pressReact: 'PRESS_REACT_AVATAR',
                sendReply: 'SEND_REPLY_AVATAR',
                pressReply: 'PRESS_REPLY_AVATAR'
            };
        case i.n_.STATUS:
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
