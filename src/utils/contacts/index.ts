import { Contact } from "react-native-contacts";

export const groupedContacts = (array: Contact[], user: string) => {
    let groupedArray = [...array].sort((a, b) => {
        var textA = a.displayName.toUpperCase();
        var textB = b.displayName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    .filter((contact) => contact.displayName.includes(user) && contact.phoneNumbers.length > 0);
    return groupedArray;
}