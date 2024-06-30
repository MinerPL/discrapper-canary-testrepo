n(47120);
var r = n(570140), i = n(147913), a = n(703656), o = n(70956), s = n(654769), l = n(742989), u = n(802463), c = n(981631);
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class _ extends i.Z {
    constructor(...e) {
        super(...e), d(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }), d(this, 'handlePostConnectionOpen', () => {
            !function e() {
                l.Z.getCurrentConfig({ location: '8fe27d_1' }, { autoTrackExposure: !1 }).showReminders && (u.Z.getMessageReminders().filter(e => null != e.dueAt && new Date() > e.dueAt).filter(e => !u.Z.hasSentNotification(e.messageId)).forEach(e => {
                    var t, n;
                    s.Z.showNotification(null, 'Overdue reminder in '.concat(e.channelSummary), null !== (n = null !== (t = e.notes) && void 0 !== t ? t : e.messageSummary) && void 0 !== n ? n : '', {
                        notif_type: 'OVERDUE_MESSAGE_REMINDER',
                        notif_user_id: e.authorId,
                        message_id: e.messageId,
                        channel_id: e.channelId,
                        guild_id: e.guildId
                    }, {
                        omitViewTracking: !0,
                        tag: e.messageId,
                        onClick() {
                            (0, a.uL)(c.Z5c.CHANNEL(e.guildId, e.channelId, e.messageId));
                        }
                    }), r.Z.dispatch({
                        type: 'MESSAGE_REMINDER_NOTIFIED',
                        messageId: e.messageId
                    });
                }), setTimeout(() => {
                    e();
                }, 5 * o.Z.Millis.MINUTE));
            }();
        });
    }
}
t.Z = new _();
