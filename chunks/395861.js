n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: `Prika\u{17E}i prijedloge`,
    countAnnouncement: (e, t) =>
        `Dostupno jo\u{161}: ${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} opcija`,
            other: () => `${t.number(e.optionCount)} opcije/a`
        })}.`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} opcijom`,
                        other: () => `${t.number(e.groupCount)} opcije/a`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: ', odabranih',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Prijedlozi',
    selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
