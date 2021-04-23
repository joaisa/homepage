export default function ShortenName(name, maxNameLength) {
    const len = name.length;

    var newName = name;

    if(len > maxNameLength) {
        newName = `${name.substring(0, maxNameLength)}...`;
    }

    return newName;
}