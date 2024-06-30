s.d(n, {
    Z: function () {
        return m;
    }
}), s(47120);
var l = s(735250), i = s(470079), t = s(692547), r = s(481060), a = s(697426), c = s(603074), o = s(689938), u = s(770771);
let d = [
    54,
    8,
    8,
    8
];
function _(e) {
    let {
            onSelect: n,
            sound: s
        } = e, [_, m] = i.useState(!1);
    function I(e) {
        m(!1), null == n || n(e);
    }
    let E = e => (0, l.jsxs)('div', {
        className: u.customGiftHeader,
        children: [
            (0, l.jsxs)('div', {
                className: u.__invalid_customGiftHeaderText,
                children: [
                    (0, l.jsx)(r.Text, {
                        variant: 'text-md/bold',
                        children: o.Z.Messages.GIFT_SELECT_SOUND
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: o.Z.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: u.searchAndSound,
                children: e
            })
        ]
    });
    return (0, l.jsx)(r.Popout, {
        shouldShow: _,
        position: 'bottom',
        align: 'left',
        onRequestClose: () => m(!1),
        renderPopout: e => {
            let {closePopout: n} = e;
            return (0, l.jsx)(r.Dialog, {
                children: (0, l.jsx)(c.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: n,
                    onSelect: I,
                    analyticsSource: 'gift soundboard',
                    soundButtonOverlay: a.Pb.ADD,
                    listPadding: d,
                    renderHeader: E,
                    defaultSoundsOnly: !0
                })
            });
        },
        children: () => (0, l.jsx)(r.Clickable, {
            className: u.sound,
            onClick: () => m(!0),
            children: null == s ? (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.SoundboardIcon, {
                        size: 'custom',
                        color: t.Z.colors.WHITE,
                        className: u.soundIcon,
                        width: 14,
                        height: 14
                    }),
                    (0, l.jsx)(r.Text, {
                        className: u.text,
                        variant: 'text-sm/semibold',
                        children: o.Z.Messages.GIFT_SELECT_SOUND
                    })
                ]
            }) : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.Text, {
                        className: u.textSelected,
                        variant: 'text-sm/semibold',
                        children: s.emojiName
                    }),
                    (0, l.jsx)(r.Text, {
                        className: u.text,
                        variant: 'text-sm/semibold',
                        children: s.name
                    })
                ]
            })
        })
    });
}
function m(e) {
    let {
        sound: n,
        onSelect: s
    } = e;
    return (0, l.jsx)('div', {
        className: u.container,
        children: (0, l.jsx)(_, {
            onSelect: s,
            sound: n
        })
    });
}
