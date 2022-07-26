
let resultData = [];
    const db1 = {
        "1": {id: 1,sex: 'M',pic: '👷'},
        "4": {id: 4,sex: 'F',pic: '👷‍♀️'},
        "6": {id: 6,sex: 'M',pic: '💂‍♂️'},
    }
    const db2 = {
        "2": {id: 2,sex: 'F',pic: '👮‍♀️'},
        "5": {id: 5,sex: 'M',pic: '👮'},
    }
    const db3 = {
        "3": {d: 3,sex: 'M',pic: '👨‍🎓'},
    }
    const metaData = {
        "1": "db1",
        "2": "db2",
        "3": "db3",
        "4": "db1",
        "5": "db2",
        "6": "db1",
    }
    const userData = {
        "1": {name: "AAA",age: 16,private: false},
        "2": {name: "BBB",age: 17,private: true},
        "3": {name: "CCC",age: 17,private: false},
        "4": {name: "DDD",age: 18,private: true},
        "5": {name: "EEE",age: 19,private: true},
        "6": {name: "FFF",age: 20,private: false},
    }
    const retrieveData = async function() {
        let results = await Promise.all([db1, db2, db3, metaData, userData])
        return results;
    }();

    const disMsg = (index, input_id) => {
        document.getElementsByClassName('result')[0].style.fontSize = '16px'
        document.getElementsByClassName('result')[0].innerHTML = `<table>` +
            `<tr>` +
            `<th>ID        </th>` +
            `<th>Gender </th>` +
            `<th>Profile   </th>` +
            `<th>Name    </th>` +
            `<th>Age       </th>` +
            `</tr>` +
            `<tr>` +
            `<td>${resultData[index][input_id].id}</td>` +
            `<td>${resultData[index][input_id].sex}</td>` +
            `<td>${resultData[index][input_id].pic}</td>` +
            `<td>${resultData[4][input_id].name}</td>` +
            `<td>${resultData[4][input_id].age}</td>` +
            `</tr>` +
            `</table>`
    }
    const errorMsg = () => {
        document.getElementsByClassName('result')[0].innerHTML = `Opps, this user is in private. We can not display😆`;
        document.getElementsByClassName('result')[0].style.fontSize = '24px'
    }

    document.getElementById('search').addEventListener('click', function() {
        const input_id = document.getElementById('input').value;

        retrieveData.then(async(arrJson) => {
            resultData = arrJson;
            console.log(resultData);

            console.log(resultData[3][`${input_id}`])
                if (resultData[3][`${input_id}`] == "db1") {
                    if (resultData[4][`${input_id}`].private == false) {
                        disMsg(0, input_id);
                    } else {
                        errorMsg();
                    }
                } else if (resultData[3][`${input_id}`] == "db2") {
                    if (resultData[4][`${input_id}`].private == false) {
                        disMsg(1, input_id);
                    } else {
                        errorMsg();
                    }
                } else if (resultData[3][`${input_id}`] == "db3") {
                    if (resultData[4][`${input_id}`].private == false) {
                        disMsg(2, input_id);
                    } else {
                        errorMsg();
                    }
                } else {
                    alert("Input out of range. It should be 1 to 6!");
                }
        });
    });