export async function GET(){
    const races = [
        { round: 1, grand_prix: "Australian Grand Prix", circuit: "Albert Park Circuit, Melbourne", date: "2025-03-16T05:00:00+01:00" },
        { round: 2, grand_prix: "Chinese Grand Prix", circuit: "Shanghai International Circuit", date: "2025-03-23T08:00:00+01:00" },
        { round: 3, grand_prix: "Japanese Grand Prix", circuit: "Suzuka International Racing Course", date: "2025-04-06T06:00:00+01:00" },
        { round: 4, grand_prix: "Bahrain Grand Prix", circuit: "Bahrain International Circuit", date: "2025-04-13T16:00:00+01:00" },
        { round: 5, grand_prix: "Saudi Arabian Grand Prix", circuit: "Jeddah Corniche Circuit", date: "2025-04-20T18:00:00+01:00" },
        { round: 6, grand_prix: "Miami Grand Prix", circuit: "Miami International Autodrome", date: "2025-05-04T21:00:00+01:00" },
        { round: 7, grand_prix: "Emilia-Romagna Grand Prix", circuit: "Autodromo Enzo e Dino Ferrari, Imola", date: "2025-05-18T14:00:00+01:00" },
        { round: 8, grand_prix: "Monaco Grand Prix", circuit: "Circuit de Monaco, Monte Carlo", date: "2025-05-25T14:00:00+01:00" },
        { round: 9, grand_prix: "Spanish Grand Prix", circuit: "Circuit de Barcelona-Catalunya", date: "2025-06-01T14:00:00+01:00" },
        { round: 10, grand_prix: "Canadian Grand Prix", circuit: "Circuit Gilles Villeneuve, Montreal", date: "2025-06-15T19:00:00+01:00" },
        { round: 11, grand_prix: "Austrian Grand Prix", circuit: "Red Bull Ring, Spielberg", date: "2025-06-29T14:00:00+01:00" },
        { round: 12, grand_prix: "British Grand Prix", circuit: "Silverstone Circuit", date: "2025-07-06T14:00:00+01:00" },
        { round: 13, grand_prix: "Belgian Grand Prix", circuit: "Circuit de Spa-Francorchamps", date: "2025-07-27T14:00:00+01:00" },
        { round: 14, grand_prix: "Hungarian Grand Prix", circuit: "Hungaroring, Mogyoród", date: "2025-08-03T14:00:00+01:00" },
        { round: 15, grand_prix: "Dutch Grand Prix", circuit: "Circuit Zandvoort", date: "2025-08-31T14:00:00+01:00" },
        { round: 16, grand_prix: "Italian Grand Prix", circuit: "Autodromo Nazionale di Monza", date: "2025-09-07T14:00:00+01:00" },
        { round: 17, grand_prix: "Azerbaijan Grand Prix", circuit: "Baku City Circuit", date: "2025-09-21T14:00:00+01:00" },
        { round: 18, grand_prix: "Singapore Grand Prix", circuit: "Marina Bay Street Circuit", date: "2025-10-05T13:00:00+01:00" },
        { round: 19, grand_prix: "United States Grand Prix", circuit: "Circuit of the Americas, Austin", date: "2025-10-19T20:00:00+01:00" },
        { round: 20, grand_prix: "Mexico City Grand Prix", circuit: "Autódromo Hermanos Rodríguez", date: "2025-10-26T21:00:00+01:00" },
        { round: 21, grand_prix: "São Paulo Grand Prix", circuit: "Autódromo José Carlos Pace", date: "2025-11-09T18:00:00+01:00" },
        { round: 22, grand_prix: "Las Vegas Grand Prix", circuit: "Las Vegas Strip Circuit", date: "2025-11-22T05:00:00+01:00" },
        { round: 23, grand_prix: "Qatar Grand Prix", circuit: "Lusail International Circuit", date: "2025-11-30T17:00:00+01:00" },
        { round: 24, grand_prix: "Abu Dhabi Grand Prix", circuit: "Yas Marina Circuit", date: "2025-12-07T14:00:00+01:00" }
    ];


    const instantDate = new Date();
    const playedRaces = races.filter(race => new Date(race.date)< instantDate);
    const upcomingRaces = races.filter(race => new Date(race.date) > instantDate);

    return new Response(JSON.stringify({upcomingRaces, playedRaces}),{
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}


