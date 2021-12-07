const news = (data = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        // case "ADD_NEWS":
        //     return [...data, action.payload];
        // case "DELETE_NEWS":
        //     return data.filter(news => news.id !== action.payload);
        default:
            return data;
    };
};

export default news;