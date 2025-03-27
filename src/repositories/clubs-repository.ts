import { clubsModel } from "../models/clubs-model";
import fs from "fs/promises";




export const findAllClubs = async (): Promise<clubsModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: clubsModel[] = JSON.parse(data);
    return clubs;
}