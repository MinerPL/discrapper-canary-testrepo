var r = n(424706), i = n(14160), a = n(247123), o = n(207662);
t.Z = {
    id: 'button-name',
    selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
    tags: [
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.a',
        'ACT'
    ],
    metadata: {
        description: 'Ensures buttons have discernible text',
        help: ''
    },
    check: function (e) {
        return '' !== (0, r.AB)(e) || (0, o.Uu)(e) || !(0, i.p)(e) ? a.w : 'button\'s accessible name is empty.';
    }
};
