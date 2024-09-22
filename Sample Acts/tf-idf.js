// Function to calculate Term Frequency (TF)
function calculateTF(document) {
    const tf = {};
    const words = document.split(' ');
    const wordCount = words.length;
    
    words.forEach(word => {
        tf[word] = (tf[word] || 0) + 1 / wordCount;
    });
    
    return tf;
}

// Function to calculate Inverse Document Frequency (IDF)
function calculateIDF(documents) {
    const idf = {};
    const totalDocuments = documents.length;
    
    documents.forEach(document => {
        const words = new Set(document.split(' '));
        
        words.forEach(word => {
            idf[word] = (idf[word] || 0) + 1;
        });
    });
    
    Object.keys(idf).forEach(word => {
        idf[word] = Math.log(totalDocuments / (idf[word] + 1));
    });
    
    return idf;
}

// Function to calculate TF-IDF
function calculateTFIDF(document, documents) {
    const tf = calculateTF(document);
    const idf = calculateIDF(documents);
    const tfidf = {};
    
    Object.keys(tf).forEach(word => {
        tfidf[word] = tf[word] * idf[word];
    });
    
    return tfidf;
}

// Example usage
const documents = [
    'This is the first document',
    'This document is the second document',
    'And this is the third one',
    'Is this the first document',
];

const document = 'This is the first document';

const tfidf = calculateTFIDF(document, documents);
console.log(tfidf);


const tf = calculateTF(document);
console.log(tf);    