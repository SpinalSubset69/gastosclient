const token = localStorage.getItem('token');
const baseUrl = "http://18.221.132.174:4000/api";

export const IsValidToken = async() => {
    if(!token){
        return false;
    }    
    //Verify token on backend
    const fetchApi = await fetch(`${baseUrl}/auth/verifytoken`, {
        method: "POST",
        headers: {
          "x-access-token": token,
        },
      });
      const response = await fetchApi.json();          

      return response.statusCode !== 200 ? false : true;
}

export const UploadImg = async (formData, userId) =>{
    const fetchApi = await fetch(`${baseUrl}/user/uploadimage/${userId}`, {
        method: 'POST',
        body: formData
    })

    const response = await fetchApi.json();

    return response;
}

export const FetchUser = async () => {
    
    const fetchUser = await fetch(`${baseUrl}/user`, {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      });

      const response = await fetchUser.json();
      
      return response.statusCode === 200 ? response.data : null
}

export const SignIn = async (data) => {
    const fetchSginIn = await fetch(`${baseUrl}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const response = await fetchSginIn.json();
    console.log(response);

    return response;
}

export const FetchPutExpense = async (data) => {
    //Put expense on database
    const putExpense = await fetch(`${baseUrl}/user/createexpense`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify(data),
      });
      const response = await putExpense.json();   
      return response;
}

export const FetchPutAmount = async (data) => {
    const fetchAmount = await fetch(`${baseUrl}/user/addammount`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'x-access-token' : token
        },
        body: JSON.stringify(data)
    })

    const response = await fetchAmount.json();
    
    return response;
}

export const FetchRemoveExponse = async (data) => {
    const fetcRemoveExpense = await fetch(`${baseUrl}/user/deleteexpense`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'x-access-token' : token
        },
        body: JSON.stringify(data)
    });

    const response = await fetcRemoveExpense.json();

    return response;
}

export const FetchCreateUser = async (data) => {
    const fetchCreateUser = await fetch(`${baseUrl}/user/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await fetchCreateUser.json();

    return response;
}

export const FetchResetAmmount = async () => {
    const fetchRemoveAmmount = await fetch(`${baseUrl}/user/resetammount`, {
        method: 'PUT',
        headers: {
            'x-access-token' : token
        }
    });

    const response = await fetchRemoveAmmount.json();

    return response;
}