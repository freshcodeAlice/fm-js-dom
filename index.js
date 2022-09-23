const url = 'https://randomuser.me/api/';

async function loadData(url) {
    const p = fetch(url);
    const res = await p;
    // p.then((data) =>  {
    //     return data});
    console.log(res);
    return res;
}


loadData().then();