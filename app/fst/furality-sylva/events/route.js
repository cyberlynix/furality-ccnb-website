import path from "path";
import fs from "fs";

export async function GET(request) {
    try {
        // Define the path to the JSON file
        const jsonDirectory = path.join(process.cwd(), 'data');
        const filePath = path.join(jsonDirectory, 'schedule.json'); // Va chercher le fichier schedule.json dans le dossier data
    
        // Read the JSON file
        const fileContents = await fs.promises.readFile(filePath, 'utf8');

        return new Response(fileContents); // Retourne le contenu du fichier schedule.json

      } catch (error) {
        console.error('Error reading JSON file:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }));
      }
}