# array-2-csv
Node app that converts an array into a CSV prompting the user which fields they want to include as the headers.

## Features

- **Dynamic Field Selection**: Users can choose which properties from their objects should be included in the CSV.
- **Customizable Output File**: Users can specify the desired name and path for the output CSV file.
- **Interactive Interface**: The script uses command line prompts to guide the user through the setup process.

## Getting Started

### Prerequisites

- Node.js (Version 12.0 or higher recommended). You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/array-2-csv.git
   cd array-2-csv
   ```

2. Install the dependencies:
   ```bash
    npm install
    ```

## Usage
Run the script using the following command:
```bash
node index.js
```

Follow the prompts to select the fields you want to include in the CSV and specify the output file name and path.

## Data Format
Ensure that the input data is an array of objects. For example:
```javascript
const data = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 35, city: 'Los Angeles' },
];
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue to propose changes or add new features.

## License
This project is licensed under the MIT License
