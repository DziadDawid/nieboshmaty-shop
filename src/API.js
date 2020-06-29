import axios from "axios";

export const getKoszuleczka = async () => {
    const response = await axios.get(
        "http://192.168.1.100:1337/categories?name=Koszuleczka"
    );

    return response;
};

export const getTorebeczka = async () => {
    const response = await axios.get(
        "http://192.168.1.100:1337/categories?name=Torebeczka"
    );

    return response;
};

export const getInne = async () => {
    const response = await axios.get(
        "http://192.168.1.100:1337/categories?name=Inne"
    );

    return response;
};
