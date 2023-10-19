const testApi = async () =>{
    const url = 'https://mobile-phone-specs-database.p.rapidapi.com/gsm/all-brands';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65d950ebc4mshc5dd131020edbb9p19229ejsn75588926f807',
            'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

testApi();