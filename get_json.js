let set = { index: 0 };
async function onLoad() {
    let data = "data.json"
    await $.get(data, function (json) {
        set.data = json.sfCurve;
        localStorage.setItem('json data', JSON.stringify(json.sfCurve));
    });
}

onLoad();