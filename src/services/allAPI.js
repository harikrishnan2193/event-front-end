import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commenAPI"


//register api
export const registerAPI =async(users)=>{
    return await commonAPI('POST',`${BASE_URL}/users/register`,users,"")
}

//login api
export const loginAPI =async(users)=>{
    return await commonAPI('POST',`${BASE_URL}/users/login`,users,"")
}

//get all foods
export const allFoodAPI =async()=>{
    return await commonAPI('GET',`${BASE_URL}/foods/all-foods`)
}

//get all stages
export const allStageAPI =async()=>{
    return await commonAPI('GET',`${BASE_URL}/stages/all-stages`)
}

//add number of participence
export const addParticipenceAPI =async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/participens/add`,reqBody,reqHeader)
}

//get number of participents
export const getParticipentsAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/participens/get`,"",reqHeader)
}

//add food orders to cart
export const addToCartAPI =async(item,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/cart-food/add`,item,reqHeader)
}

//add stage orders to cart
export const addStageToCartAPI =async(item,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/cart-stage/add`,item,reqHeader)
}

//get all destination
export const allDestinationAPI =async()=>{
    return await commonAPI('GET',`${BASE_URL}/destination/all-destination`)
}

//get all hillstaion
export const allHillstationAPI =async()=>{
    return await commonAPI('GET',`${BASE_URL}/destination/hillstaion`)
}

//add destination to cart
export const addDestinationToCartAPI =async(item,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/cart-destination/add`,item,reqHeader)
}

//get destination from cart
export const getDestinationFromCartAPI =async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/destination/cart`,"",reqHeader)
}

//get stage from cart
export const getstageFromCartAPI =async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/stage/cart`,"",reqHeader)
}

//get food from cart
export const getFoodFromCartAPI =async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/food/cart`,"",reqHeader)
}

//delete destination
export const deleteOrderAPI =async(orderId,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/order/delete/${orderId}`,{},reqHeader)
}

//delete stage
export const deleteStageAPI =async(orderId,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/stage/delete/${orderId}`,{},reqHeader)
}

//delete food
export const deleteFoodAPI =async(orderId,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/food/delete/${orderId}`,{},reqHeader)
}

//edit profile
export const editProfileAPI =async(newNumberOfPerson,reqHeader)=>{
    return await commonAPI('PUT',`${BASE_URL}/order/edit`,newNumberOfPerson,reqHeader)
}