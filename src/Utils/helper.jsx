export const findKey = (arrayToFind=[],key) =>{

const data = arrayToFind?.find((item) => item?.key === key)

return data?.value;

}

