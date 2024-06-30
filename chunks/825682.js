var i = n(735250), s = n(470079), a = n(788307), r = n(280234), l = n(509275), o = n(51144), c = n(166896);
t.Z = function (e) {
    let {
            hovered: t,
            activities: n,
            applicationStream: d,
            status: u,
            user: _,
            lastOnlineTimestamp: E,
            experimentLocation: h = 'status_text'
        } = e, I = n.length > 0, {
            isRecentlyOnlineShowable: m,
            isRecentlyOnlineTrackable: p
        } = (0, r.$)(E);
    if (s.useEffect(() => {
            p && !I && r.Z.trackExposure({ location: h });
        }, [
            p,
            I,
            h
        ]), I)
        return (0, i.jsx)(a.Z, {
            className: c.activity,
            textClassName: c.text,
            emojiClassName: c.customStatusEmoji,
            activities: n,
            applicationStream: d,
            animate: t,
            user: _
        });
    if (!m)
        return (0, i.jsx)('div', {
            className: c.text,
            children: (0, o.u5)(u)
        });
    {
        let e = (0, l.H)(E);
        return (0, i.jsx)('div', {
            className: c.text,
            children: e
        });
    }
};
