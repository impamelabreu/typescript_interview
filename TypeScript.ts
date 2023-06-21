// ---------- 1er Ejercicio ---------- //

function countUniqueSteps(N: number, X: number[]): number {
    const memo: number[] = [1];

    for (let i = 1; i <= N; i++) {                                                                
        let total = 0;                                                                              
        for (let j = 0; j < X.length; j++) {                                                          
            if (i - X[j] >= 0) {                                                                      
                total += memo[i - X[j]];
            }
        }
        memo[i] = total;
    }
    return memo[N];                                                                                  
}

function printUniqueSteps(N: number, X: number[]): void {
    const uniqueSteps = countUniqueSteps(N, X);
    console.log(`El número de formas únicas de subir la escalera es: ${uniqueSteps}`);
    
    console.log("Formas de subir la escalera:");
    generateUniqueSteps(N, X, "");
}

function generateUniqueSteps(N: number, X: number[], path: string): void {
    if (N === 0) {
        console.log(path);
        return;
    }
    
    for (let i = 0; i < X.length; i++) {
        if (N - X[i] >= 0) {
            generateUniqueSteps(N - X[i], X, path + X[i] + " ");
        }
    }
}

const N1: number = 4;
const X1: number[] = [1, 2];
printUniqueSteps(N1, X1);
console.log("-----------------")

const N2: number = 6;
const X2: number[] = [1, 3, 5];
printUniqueSteps(N2, X2);

// ---------- 2do Ejercicio ---------- //


// ---------- 3er Ejercicio ---------- //


