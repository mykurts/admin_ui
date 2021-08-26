const headers = {
  'Content-Type': 'application/json'
};

export function signOutUser(url) {
  
    const method = 'DELETE';
    return HttpRequest(url, method, headers);
}

export function getCurrentUser(url) {
  
    const method = 'GET';
    return HttpRequest(url, method, headers);
}

export function SignInUser(action, url) {
    const method = 'POST';
    const body = JSON.stringify(action.payload.data);
    return HttpRequest(url, method, headers, body);
}


function HttpRequest(url, method, headers, body=null)
  {
    return fetch(url, {
              method: method,
              credentials: 'include',
              headers: headers,
              body: body
            })
            .then(res => res.json())
            .catch(xhr => {

                  throw xhr.status;

              });
  }