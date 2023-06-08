import path from "path";
import fs from "fs";

export async function GET(request) {
    try {
        // Define the path to the JSON file
        const jsonDirectory = path.join(process.cwd(), 'data');
        const filePath = path.join(jsonDirectory, 'weather.json'); // Va chercher le fichier weather.json dans le dossier data
    
        // Read the JSON file
        const fileContents = await fs.promises.readFile(filePath, 'utf8');

        return new Response(fileContents); // Retourne le contenu du fichier weather.json

      } catch (error) {
        console.error('Error reading JSON file:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' })
        );
      }
}