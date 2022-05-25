export default function toggleArray(prevArray, value) {
    const currentIndex = prevArray.indexOf(value);
    const newArray = [...prevArray];
    if (currentIndex === -1) {
        newArray.push(value);
        return newArray;
    }
    newArray.splice(currentIndex, 1);
    return newArray;
}
