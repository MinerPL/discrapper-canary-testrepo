var i = n(981631), l = n(689938);
t.Z = {
    getStatus: function (e) {
        let t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
        case i.hes.CONNECTING:
            t = i.QKv.CONNECTING, n = l.Z.Messages.CONNECTION_STATUS_CONNECTING;
            break;
        case i.hes.AUTHENTICATING:
            t = i.QKv.CONNECTING, n = l.Z.Messages.CONNECTION_STATUS_AUTHENTICATING;
            break;
        case i.hes.AWAITING_ENDPOINT:
            t = i.QKv.CONNECTING, n = l.Z.Messages.CONNECTION_STATUS_AWAITING_ENDPOINT;
            break;
        case i.hes.RTC_CONNECTED:
            t = i.QKv.CONNECTED, n = r ? l.Z.Messages.CONNECTION_STATUS_VIDEO_CONNECTED : l.Z.Messages.CONNECTION_STATUS_VOICE_CONNECTED;
            break;
        case i.hes.RTC_CONNECTING:
            t = i.QKv.CONNECTING, n = l.Z.Messages.CONNECTION_STATUS_RTC_CONNECTING;
            break;
        case i.hes.ICE_CHECKING:
            t = i.QKv.CONNECTING, n = l.Z.Messages.CONNECTION_STATUS_ICE_CHECKING;
            break;
        case i.hes.DTLS_CONNECTING:
            t = i.QKv.CONNECTING, n = l.Z.Messages.CONNECTION_STATUS_DTLS_CONNECTING;
            break;
        case i.hes.NO_ROUTE:
            t = i.QKv.ERROR, n = l.Z.Messages.CONNECTION_STATUS_NO_ROUTE;
            break;
        case i.hes.RTC_DISCONNECTED:
            t = i.QKv.ERROR, n = l.Z.Messages.CONNECTION_STATUS_RTC_DISCONNECTED;
            break;
        case i.hes.DISCONNECTED:
        default:
            t = i.QKv.ERROR, n = l.Z.Messages.CONNECTION_STATUS_DISCONNECTED;
        }
        return {
            connectionStatus: t,
            connectionStatusText: n
        };
    },
    getShortHostname: function (e) {
        return null == e ? '' : e.split('.')[0];
    }
};
