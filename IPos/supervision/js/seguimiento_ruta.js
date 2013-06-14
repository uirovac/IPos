$("#be").live("click",function() {
	fi = moment($("#fecha_inicio").val(),"DD/MM/YYYYY").format("YYYY-MM-DD HH:MM:SS");
	ft = moment($("#fecha_termino").val(),"DD/MM/YYYYY").format("YYYY-MM-DD HH:MM:SS");
	ka = 3;
	$.getJSON("http://www.anywhere.cl/wsanywhere/services/p2s/querys/ejecutivosporka/" + fi + "/" + ft + "/" + ka,{},getEjecutivos);
});

function getEjecutivos(data) {
	$.each(data, function(key, val) {
		$.each(val, function(key2, val2) {
			$('#ejecutivo').append($('<option>', {value : val2[4].value}).text(val2[5].value));
		});
	});	
}