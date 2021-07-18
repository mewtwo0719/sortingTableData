
console.log(data[0].first_name)

var dataspreadsheet = document.getElementById("data");

fillTable();

function sort(sortBy, ascDesc){

    var isAsc = false;

    if(ascDesc == 'asc') isAsc = true;

    resetTable();

    switch(sortBy){
        case "first_name":
            first_name_sort(isAsc);
            break;
        case "last_name":
            last_name_sort(isAsc);
    }

    console.log(data);

    fillTable();

}

function fillTable(){
    for(var i = 0; i < data.length; i++){
        var newRow = document.createElement('tr');
        newRow.classList.add("row");
        newRow.innerHTML = `
        <td class="id">${data[i].id}</td>
        <td class="first_name">${data[i].first_name}</td>
        <td class="first_name">${data[i].last_name}</td>
        `,
        dataspreadsheet.appendChild(newRow);
    }
}

function resetTable(){
    dataspreadsheet.innerHTML = `
    <tr>
    <th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
</tr>
<tr class="row">
    <td>
        <Button disabled=true>Sort</Button>
    </td>
    <td>
        <Button onclick="sort('first_name', 'asc')">Asc</Button>
        <Button onclick="sort('first_name', 'desc')">Desc</Button>
    </td>
    <td>
        <Button onclick="sort('last_name', 'asc')">Asc</Button>
        <Button onclick="sort('last_name', 'desc')">Desc</Button>
    </td>
</tr>
`;
}

function first_name_sort(asc){
    for(var i = 1; i < data.length; i++){
        if(asc){
        if(data[i-1].first_name > data[i].first_name){
            var temp = data[i-1];
            data[i-1]= data[i];
            data[i] = temp;

            i = 0;
            }
        }else{
            if(data[i-1].first_name < data[i].first_name){
                var temp = data[i-1];
                data[i-1]= data[i];
                data[i] = temp;
    
                i = 0;
                }
        }
    }
}
function last_name_sort(asc){
    for(var i = 1; i < data.length; i++){
        if(asc){
        if(data[i-1].last_name > data[i].last_name){
            var temp = data[i-1];
            data[i-1]= data[i];
            data[i] = temp;

            i = 0;
            }
        }else{
            if(data[i-1].last_name < data[i].last_name){
                var temp = data[i-1];
                data[i-1]= data[i];
                data[i] = temp;
    
                i = 0;
                }
        }
    }
}

