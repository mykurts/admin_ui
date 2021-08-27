export function signOutUser(url) {
  
    const method = 'DELETE';
    const headers = {
      'Content-Type': 'application/json'
    }
    return HttpRequest(url, method, headers);
}

export function getCurrentUser(url) {
  
    const method = 'GET';
    const headers = {
      'Content-Type': 'application/json'
    }
    return HttpRequest(url, method, headers);
}

export function SignInUser(action, url) {
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "*"
    }
    const body = JSON.stringify(action.payload.data);
    return HttpRequest(url, method, headers, body);
}


function HttpRequest(url, method, headers, body=null)
  {
    return fetch(url, {
              method: method,
              headers: headers,
              body: body
            })
            .then(res => res.json())
            .catch(xhr => {

                  throw xhr.status;

              });
  }