const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
function estaAprobado(alumno)
{
    let contadorAprobados = 0;
    contadorAprobados= alumno.T1 ? ++contadorAprobados : contadorAprobados;
    contadorAprobados= alumno.T2 ? ++contadorAprobados : contadorAprobados;
    contadorAprobados= alumno.T3 ? ++contadorAprobados : contadorAprobados;
    if (contadorAprobados >= 2) return true;
    else return false;
}

for(let i=0; i<alumns.length; i++) {
    alumns[i].isAppoved = estaAprobado(alumns[i]);
}
console.log(alumns);