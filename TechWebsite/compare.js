function findSmartphonesData(csvPath, smartphone1, smartphone2) {
    // Read the CSV file content
    const csvFile = fs.readFileSync(csvPath, 'utf-8');

    // Parse the CSV data using PapaParse
    Papa.parse(csvFile, {
        header: true, // Treat the first row as headers
        skipEmptyLines: true, // Skip empty lines in the CSV
        dynamicTyping: true, // Automatically convert numbers
        complete: function(result) {
            // Filter data for the two smartphones
            const filteredData = result.data.filter(row => {
                return row.Name === smartphone1 || row.Name === smartphone2;
            });

            // If both smartphones are found, return their data
            if (filteredData.length === 2) {
                return filteredData;
            } else {
                console.log("One or both smartphones not found.");
                return null;
            }
        }
    });
}

// Example usage:
const csvPath = 'smartphones.csv'; // Path to your CSV file
const smartphone1 = 'iPhone 13';
const smartphone2 = 'Samsung Galaxy S21';

const data = findSmartphonesData(csvPath, smartphone1, smartphone2);
console.log(data);