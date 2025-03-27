import { playerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";


const dataBase: playerModel[] = [
        {
            id: 1,
            name: "Kylian Mbappé",
            club: "Real Madrid",
            nationality: "France",
            position: "Forward",
            statistics: {
                overall: 92,
                pace: 97,
                shooting: 90,
                passing: 85,
                dribbling: 94,
                defending: 40,
                physical: 80,
            }
        },
        {
            id: 2,
            name: "Erling Haaland",
            club: "Manchester City",
            nationality: "Norway",
            position: "Forward",
            statistics: {
                overall: 91,
                pace: 89,
                shooting: 94,
                passing: 78,
                dribbling: 86,
                defending: 45,
                physical: 88,
            }
        },
        {
            id: 3,
            name: "Vinícius Júnior",
            club: "Real Madrid",
            nationality: "Brazil",
            position: "Winger",
            statistics: {
                overall: 90,
                pace: 96,
                shooting: 84,
                passing: 82,
                dribbling: 93,
                defending: 40,
                physical: 75,
            }
        },
        {
            id: 4,
            name: "Kevin De Bruyne",
            club: "Manchester City",
            nationality: "Belgium",
            position: "Midfielder",
            statistics: {
                overall: 92,
                pace: 76,
                shooting: 88,
                passing: 95,
                dribbling: 89,
                defending: 65,
                physical: 80,
            }
        },
        {
            id: 5,
            name: "Jude Bellingham",
            club: "Real Madrid",
            nationality: "England",
            position: "Midfielder",
            statistics: {
                overall: 89,
                pace: 84,
                shooting: 82,
                passing: 86,
                dribbling: 90,
                defending: 78,
                physical: 85,
            }
        }
];

export const findAllPlayers = async (): Promise<playerModel[]> => {
    return dataBase;
}

export const findPlayerById = async (id:number): Promise<playerModel | undefined> =>{
    return dataBase.find((player) => player.id === id);
}

export const insertPlayer = async(player: playerModel)=>{
    dataBase.push(player);
}

export const deleteOnePlayer = async(id: number) => {
    const index = dataBase.findIndex(p => p.id === id);

    if(index !== -1){
        dataBase.splice(index, 1);
        return true;
    }

    return false;

}

export const findAndModifyPlayer = async (id: number, statistics: statisticsModel): Promise<playerModel> => {
    const playerIndex = dataBase.findIndex((player) => player.id === id);

    if(playerIndex !== -1){
        dataBase[playerIndex].statistics = statistics;
    }

    return dataBase[playerIndex];
};



