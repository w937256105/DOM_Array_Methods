const add_user = document.getElementById('add-user');
const list_title = document.getElementById('list');
const double_money = document.getElementById('double-money');
const sort_list = document.getElementById('sort');
const calculate = document.getElementById('calculate');

add_user.onclick = function () {
    let username;
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            //console.log(data.results[0].name.first);
            username = data.results[0].name.first;
            let money = Math.floor(Math.random()*1000000);
            let div = document.createElement('div');
            div.className = 'nav-size-list-body';
            div.innerHTML = `<span>${username}</span> <span class="money">${money}</span>`;
            list_title.append(div);
        })
};

double_money.onclick = function () {
    const elem = document.querySelectorAll('.money');
    //console.log(elem[1].innerHTML);
    elem.forEach(data =>{
        data.innerHTML *= 2;
    })
};

sort_list.onclick = function () {
    let elem2 = document.querySelectorAll('.nav-size-list-body');
    console.log(elem2[0].lastChild.innerHTML);
    let flag = false;
    for (let i = 0; i < elem2.length; i++){
        flag = true;
        for (let j = i; j < elem2.length-1; j++){
            if (+elem2[j].lastChild.innerHTML < +elem2[j+1].lastChild.innerHTML){
                let temp = elem2[j].lastChild.innerHTML;
                let temp2 = elem2[j].firstChild.innerHTML;
                elem2[j].lastChild.innerHTML = elem2[j+1].lastChild.innerHTML;
                elem2[j].firstChild.innerHTML =elem2[j+1].firstChild.innerHTML;
                elem2[j+1].lastChild.innerHTML = temp;
                elem2[j+1].firstChild.innerHTML = temp2;
                flag = false;
            }
        }
        if (flag) break;
    }
};
