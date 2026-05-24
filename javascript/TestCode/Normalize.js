let normalize = function normalizeJsBasicsLabel(label) {

    let labelText = label.trim().toLowerCase();

    const result = labelText.replace(/\s/g, "-");

    return "js-basic-" + result;


}

console.log(normalize(' Login Button '));