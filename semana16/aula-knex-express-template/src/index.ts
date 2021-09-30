import app from "./app";
import connection from "./connection";

const getActorByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}";
        `);
        console.log(result[0][0]);
        return result[0][0];
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
    };
};