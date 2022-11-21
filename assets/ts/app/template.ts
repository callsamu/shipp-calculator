export function renderTemplate(template: string, data: Object) {
    for (let [k, v] of Object.entries(data)) {
        const regex = new RegExp(`{% ?${k} ?%}`);
        template = template.replace(regex, v);
    }

    return template;
}
