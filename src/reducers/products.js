let initialState = [
    {
        id: 1,
        name: "Iphone 7plus",
        image: "https://bucket.nhanh.vn/store1/40857/ps/20190714/636159465566553014_ip7p_jet_2.jpg",
        description: "Hai camera đầu tiên của Apple",
        price: 400,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: "Iphone 8plus",
        image: "https://product.hstatic.net/200000112257/product/636459041871523220_2_1ac65bf4d38248549a2a482ca14dc16d_master.jpg",
        description: "Mặt kính lưng",
        price: 500,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: "Iphone X",
        image: "https://didongviet.vn/pub/media/catalog/product/i/p/iphone-x-64gb_2.jpg",
        description: "Tai thỏ",
        price: 700,
        inventory: 20,
        rating: 5
    },
];

const products = (state=initialState, action) => {
    switch(action.type) {
        case 1: 
            return action;
        default:
            return [...state];
    }
}

export default products;
