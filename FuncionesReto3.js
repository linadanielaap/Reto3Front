function traerInformacionCategory (){
    $.ajax({
        url:"http://132.226.163.197:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerDatosCategory(respuesta);
            llenarCategoria(respuesta);
        }
        });
}

function obtenerDatosCategory (respuesta){
    let tablaCategory = "<table border='1px solid' width='500px' style='margin-left:50%'>";
    tablaCategory += "<thead>" + "<tr>" + "<th>Nombre</th>"+"<th>Descripción</th>"+ "</tr>"+"</thead>"+"<tbody>";
    for (i=0;i<respuesta.length;i++){
        tablaCategory += "<tr>";
        tablaCategory+= "<td id=''>"+respuesta[i].name + "</td>";
        tablaCategory += "<td>"+respuesta[i].desCategory + "</td>";
        tablaCategory += "</tr>";
    }
    tablaCategory += "</tbody>";
    tablaCategory += "</table>";
    $("#resultadoC").html(tablaCategory);
}

function guardarInformacionCategory(){
    let nuevo ={
        name:$("#nameC").val(),
        desCategory:$("#descriptionC").val(),
    };
    if (nuevo.name == "" || nuevo.desCategory =="") {
        alert("Todos los campos son obligatorios");
    }else{
        $.ajax({
            type:"POST",
            contentType: "application/json; charset=utf-8",
            datatype:"JSON",
            data: JSON.stringify(nuevo),
            url:"http://132.226.163.197:8080/api/Category/save",
            success:function(respuesta){
                console.log(respuesta);
                alert("Se ha agregado nueva categoría");
                traerInformacionCategory();
                window.location.reload()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se guardo correctamente");
    
            }
        });
    }
    
}

function traerInformacionBarco (){
    $.ajax({
        url:"http://localhost:8080/api/Boat/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerDatosBarco(respuesta);
        }
        });
}

function obtenerDatosBarco (respuesta){
    let tablaBarco = "<table border='1px solid' width='500px' style='margin-left:50%'>";
    tablaBarco += "<thead>" + "<tr>" +"<th>Nombre</th>"+"<th>Marca</th>"+"<th>Modelo</th>"+"<th>Descripción</th>" +"</tr>"+"</thead>"+"<tbody>";
    for (i=0;i<respuesta.length;i++){
        tablaBarco += "<tr>";
        tablaBarco += "<td>"+respuesta[i].nameBoat + "</td>";
        tablaBarco += "<td>"+respuesta[i].brand + "</td>";
        tablaBarco += "<td>"+respuesta[i].year + "</td>";
        tablaBarco += "<td>"+respuesta[i].description + "</td>"; 
        tablaBarco += "</tr>";
    }
    tablaBarco += "</tbody>";
    tablaBarco+= "</table>";
    $("#resultadoB").html(tablaBarco);
}

function guardarInformacionBarco(){
    let nuevo ={
        brand:$("#brand").val(),
        year:$("#model").val(),
        description:$("#descriptionB").val(),
        nameBoat:$("#nameB").val(),
    };
    if(nuevo.brand=="" || nuevo.year==""|| nuevo.description==""|| nuevo.nameBoat=="" ){
        alert("Todos los campos son obligatorios")
    }else{
        $.ajax({
            type:"POST",
            contentType: "application/json; charset=utf-8",
            datatype:"JSON",
            data: JSON.stringify(nuevo),
            url:"http:/132.226.163.197:8080/api/Boat/save",
            success:function(respuesta){
                console.log(respuesta);
                alert("Se ha agregado nuevo barco");
                traerInformacionBarco();
                window.location.reload()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se guardo correctamente");
    
            }
        });
    }
    
}

function llenarCategoria(respuesta){
    let opciones="";
    for(i=0; i<respuesta.length; i++){
        opciones += "<option>" + respuesta[i].name + "</option>"
    }
    $("#boatC").append(opciones);
}

function traerInformacion (){
    $.ajax({
        url:"http://132.226.163.197:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerDatosCliente(respuesta);
        }
        });
}

function obtenerDatosCliente (respuesta){
    let tablaCliente = "<table border='1px solid' width='500px' style='margin-left:50%'>";
    tablaCliente += "<thead>" + "<tr>" +"<th>Nombre</th>"+"<th>Email</th>"+"<th>Edad</th>"+ "</tr>"+"</thead>"+"<tbody>";
    for (i=0;i<respuesta.length;i++){
        tablaCliente += "<tr>";
        tablaCliente += "<td>"+respuesta[i].nameClient + "</td>";
        tablaCliente += "<td>"+respuesta[i].emailClient + "</td>";
        tablaCliente += "<td>"+respuesta[i].age + "</td>";
        tablaCliente += "</tr>";
    }
    tablaCliente += "</tbody>";
    tablaCliente += "</table>";
    $("#resultado").html(tablaCliente);
}

function guardarInformacion(){
    let nuevo ={
        nameClient:$("#name").val(),
        emailClient:$("#email").val(),
        age:$("#age").val(),
        passwordClient:$("#passwordC").val(),
    };
    if (nuevo.nameClient=="" || nuevo.emailClient=="" || nuevo.passwordClient=="" || nuevo.age=="") {
        alert("Todos los campos son obligatorios")
    } else {
        $.ajax({
            type:"POST",
            contentType: "application/json; charset=utf-8",
            datatype:"JSON",
            data: JSON.stringify(nuevo),
            url:"http://132.226.163.197:8080/api/Client/save",
            success:function(respuesta){
                console.log(respuesta);
                alert("Se ha agregado nuevo cliente");
                traerInformacion();
                window.location.reload()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se guardo correctamente");
    
            }
        });
    }
    
}

function traerInformacionMensaje(){
    $.ajax({
        url:"http://132.226.163.197:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerDatosMensaje(respuesta);
        }
        });
}

function obtenerDatosMensaje (respuesta){
    let tablaMensaje = "<table border='1px solid' width='500px' style='margin-left:50%'>";
    tablaMensaje += "<thead>" + "<tr>"+"<th>Mensaje</th>"+"</tr>"+"</thead>"+"<tbody>";
    for (i=0;i<respuesta.length;i++){
        tablaMensaje += "<tr>";
        tablaMensaje += "<td>"+respuesta[i].text + "</td>";
        tablaMensaje += "</tr>";
    }
    tablaMensaje += "</tbody>";
    tablaMensaje+= "</table>";
    $("#resultadoM").html(tablaMensaje);
}

function guardarInformacionMensaje(){
    let nuevo ={
       text:$("#m").val(),
    };
    if (nuevo.text=="") {
        alert("Todos los campos son obligatorios")
    } else {
        $.ajax({
            type:"POST",
            contentType: "application/json; charset=utf-8",
            datatype:"JSON",
            data: JSON.stringify(nuevo),
            url:"http://132.226.163.197:8080/api/Message/save",
            success:function(respuesta){
                console.log(respuesta);
                alert("Se ha agregado nuevo mensaje");
                traerInformacionMensaje();
                window.location.reload()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se guardo correctamente");
    
            }
        });
    }
    
}

function traerInformacionAdmin(){
    $.ajax({
        url:"http://132.226.163.197:8080/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerDatosAdmin(respuesta);
        }
        });
}

function obtenerDatosAdmin (respuesta){
    let tablaAdmin = "<table border='1px solid' width='500px' style='margin-left:50%'>";
    tablaAdmin += "<thead>" + "<tr>" +"<th>Nombre</th>"+"<th>Email</th>"+"</tr>"+"</thead>"+"<tbody>";
    for (i=0;i<respuesta.length;i++){
        tablaAdmin += "<tr>";
        tablaAdmin += "<td>"+respuesta[i].nameAdmin + "</td>";
        tablaAdmin += "<td>"+respuesta[i].emailAdmin + "</td>";
        tablaAdmin += "</tr>";
    }
    tablaAdmin += "</tbody>";
    tablaAdmin += "</table>";
    $("#resultadoA").html(tablaAdmin);
}

function guardarInformacionAdmin(){
    let nuevo ={
        nameAdmin:$("#nameA").val(),
        emailAdmin:$("#emailA").val(),
        passwordAdmin:$("#passwordA").val(),
    };
    if (nuevo.nameAdmin=="" || nuevo.passwordAdmin=="" || nuevo.emailAdmin=="") {
        alert("Todos los campos son obligatorios")
    } else {
        $.ajax({
            type:"POST",
            contentType: "application/json; charset=utf-8",
            datatype:"JSON",
            data: JSON.stringify(nuevo),
            url:"http://132.226.163.197:8080/api/Admin/save",
            success:function(respuesta){
                console.log(respuesta);
                alert("Se ha agregado nuevo usuario");
                traerInformacionAdmin();
                window.location.reload()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se guardo correctamente");
    
            }
        });
    }
    
}

function traerInformacionReserva(){
    $.ajax({
        url:"http://132.226.163.197:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerDatosReserva(respuesta);
        }
        });
}

function obtenerDatosReserva(respuesta){
    let tablaReserva = "<table border='1px solid' width='500px' style='margin-left:50%'>";
    tablaReserva += "<thead>" + "<tr>"+"<th>ID</th>" +"<th>Fecha Inicio</th>"+"<th>Fecha Devolución</th>"+ "<th>Status</th>"+"</tr>"+"</thead>"+"<tbody>";
    for (i=0;i<respuesta.length;i++){
        tablaReserva += "<tr>";
        tablaReserva += "<td>"+respuesta[i].idReserva + "</td>";
        tablaReserva += "<td>"+respuesta[i].startDate + "</td>";
        tablaReserva += "<td>"+respuesta[i].endDate + "</td>";
        tablaReserva += "<td>"+respuesta[i].status + "</td>";
        tablaReserva += "</tr>";
    }
    tablaReserva += "</tbody>";
    tablaReserva += "</table>";
    $("#resultadoR").html(tablaReserva);
}

function guardarInformacionReserva(){
    let nuevo ={
        startDate:$("#Sdate").val(),
        endDate:$("#Edate").val(),
    };
    if (nuevo.startDate=="" || nuevo.endDate=="") {
        alert("Todos los campos son obligatorios")
    } else {
        $.ajax({
            type:"POST",
            contentType: "application/json; charset=utf-8",
            datatype:"JSON",
            data: JSON.stringify(nuevo),
            url:"http://132.226.163.197:8080/api/Reservation/save",
            success:function(respuesta){
                console.log(respuesta);
                alert("Se ha agregado nueva reserva");
                traerInformacionReserva();
                window.location.reload()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se guardo correctamente");
    
            }
        });
    }
    
}