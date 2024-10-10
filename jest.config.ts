// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts$': 'ts-jest', // Transforme les fichiers TypeScript
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Extensions de fichier à utiliser
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore les fichiers de production
    // Si vous utilisez des modules ESM, décommentez la ligne suivante
    // transformIgnorePatterns: ['/node_modules/(?!your-esm-module)'],
};
