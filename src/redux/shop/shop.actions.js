import ShopActionTypes from './shop.types';

export const fetchShopData = () => ({
  type: ShopActionTypes.FETCH_SHOP_DATA
});

export const fetchShopDataError = error => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_ERROR,
  payload: error
});