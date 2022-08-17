const base_url = "https://cae-bootstore.herokuapp.com";

const getAll = async () => {
    const res = await fetch(base_url + "/book");
    if (!res.ok) return;
    const json = await res.json();
    console.log(json)
}

// getAll();

const login = async (username, password) => {
    const res = await fetch(base_url + "/login", {
        headers: {
            BasicAuth: `${username}:${password}`
        }
    });
    console.log(res)
    const json = await res.json();
}
login("cobyyliniemi@gmail.com", "yliniemi");