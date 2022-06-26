const list = [
    "> returns.random(min, max)\n- Losuje liczby w zakresie od wartości \"min\" do \"max\"",
    "> returns.phpCommandExist(variable)\n- Zapisuje ciąg window.location.search w zmiennej"
]

export function help() {
    var text = "Pomoc do modułu \"javakit\"\n\n"
    var iSum = 0
    for (var i=0; i<list["length"]; i++){
        text = `${list[iSum]}\n`
        iSum++
    }

    console.log(text)
}

export const statements = {
    random: function(min = Number(1), max = Number(10)) {
        return Math.round(Math.random() * (max - min)) + min
    },
    phpCommandExist: function(variable){
        let i
        let iSum = 0
        variable = window.location.search
            .slice(1)
            .split("&")

        for (i=0;i<variable.length;i++) {
            variable[iSum] = variable[iSum].split("&")
            iSum++
        }
    }
}