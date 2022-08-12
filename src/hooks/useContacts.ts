import { useEffect, useState } from 'react';
import Contacts, { Contact } from 'react-native-contacts';
import { changeContact } from '../stores/features/contact/contactSlicer';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { handleContactsPermission } from '../utils/permission';

const useContacts = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector((state) => state.contact.value);
    const getAllContacts = () => {
        Contacts.getAllWithoutPhotos().then((value) => {
            dispatch(changeContact(value));
        })
    }
    const getContactPermission = async () => {
        let permission = await handleContactsPermission("request");
        if (permission === "granted") {
            getAllContacts();
        }
    }
    useEffect(() => {
        getContactPermission();
    }, []);
    return { contacts }
}

export default useContacts;