$.ajax({
    url: 'https://panorbit.in/api/users.json',
    type: "get",
    dataType: "json",
   
    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data.users[i].name);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); 
    row.append($("<td>" + rowData.users[0].id + "</td>"));
    row.append($("<td>" + rowData.users[0].name + "</td>"));
    row.append($("<td>" + rowData.users[0].username+ "</td>"));
}
{/* <script>
    var url="https://panorbit.in/api/users.json";
    $.getJSON(url, function(data)
    {

        for(var key in data.users)
        {
            "/n"
            document.write(data.users[key].name+ '  '  + '<img src="'+data.users[key].profilepicture+'">') ;
           
            // document.getElementById('img').innerHTML =data.users[key].profilepicture;+ '<img src="'+data.users[key].profilepicture+'">'
            // console.log(data.users[key].name)
            // print(data.users[key].name)
            // console.log(data.users[key].profilepicture)
        }
    })

    
</script> */}