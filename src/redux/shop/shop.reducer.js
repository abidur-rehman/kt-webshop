import ShopActionTypes from './shop.types';

const normalize = (sections) => {
  const result = sections.reduce(function(result, item) {
    let key = item.routeName;
    result[key] = item;
    return result;
  }, {});
  return result;
}

const shopReducer = (state = {}, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_SHOP_DATA_SUCCESS:
      return {
        ...state,
        collections: normalize(action.payload)
      };
    default:
      return state;
  }
};

export default shopReducer;
