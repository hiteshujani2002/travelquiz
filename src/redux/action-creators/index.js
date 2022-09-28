export const addoption = (id,kanan) =>{
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: id,
            position:kanan
        })
    }
}

export const deleteoption = (id,kanan) =>{
    console.log(kanan)
    return (dispatch) =>{
        dispatch({
            type: 'delete',
            payload:id,
            position:kanan
        })
    }
}