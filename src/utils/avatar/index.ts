import { colors } from "../../assets/colors";

export const getAvatarLabel = (str: string) => {
    var acronym = str.split(' ').map(word => word[0]).join('');
    return acronym;
}

export const randomAvatarColor = (array: []) => {
    let colorData = [colors.blue, colors.red, colors.yellow, colors.green];
    let arrayData = array;
    let colorIndex = 0;
    let result = [];
    for (var i = 0; i < arrayData.length; i++) {
        result[i] = colorData[colorIndex];
        colorIndex++;
        if (colorIndex === colorData.length) {
            colorIndex = 0;
        }
    }
    return result;
}