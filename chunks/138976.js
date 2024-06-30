t.d(n, {
    O: function () {
        return E;
    }
});
var i = t(904245), l = t(306680), o = t(944486);
let E = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.Z.getChannelId();
        if (null != e) {
            let n = l.ZP.ackMessageId(e);
            null != n && l.ZP.getOldestUnreadTimestamp(e) > 0 && i.Z.jumpToMessage({
                channelId: e,
                messageId: n,
                offset: 1,
                context: 'Keyboard Shortcut'
            });
        }
        return !1;
    }
};
