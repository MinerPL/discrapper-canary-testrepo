n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: 'Kuva soovitused',
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} valik`,
            other: () => `${t.number(e.optionCount)} valikud`
        })} saadaval.`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} valik`,
                        other: () => `${t.number(e.groupCount)} valikud`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: ', valitud',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Soovitused',
    selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
