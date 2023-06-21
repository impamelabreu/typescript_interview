// ------------ 1er Ejercicio ------------ //

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



// ------------ 2do Ejercicio ------------ //

function shortestDist(s: string, c: string): number[] {
    const distances: number[] = [];
    let prevIdx = -Infinity;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            distances.push(0);
            prevIdx = i;
        } else {
            distances.push(i - prevIdx);
        }
    }
    
    prevIdx = Infinity;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            prevIdx = i;
        } else {
            distances[i] = Math.min(distances[i], prevIdx - i);
        }
    }
    
    return distances;
}

const s: string = 'Pamela';
const c: string = 'a';

console.log(shortestDist(s, c)); 



// ------------ 3er Ejercicio ------------ //

function encontrarSubarreglo(nums: number[], S: number): number {
    
    let longitudMinima = Infinity;
    let sumaActual = 0;
    let inicio = 0;
    
    for (let fin = 0; fin < nums.length; fin++) {
        sumaActual += nums[fin];
        
        while (sumaActual >= S) {
            longitudMinima = Math.min(longitudMinima, fin - inicio + 1);
            sumaActual -= nums[inicio];
            inicio++;
        }
    }
    
    if (longitudMinima === Infinity) {
        return 0;
    } else {
        return longitudMinima;
    }
}

const nums1 = [2, 1, 5, 2, 3, 2];
const S1 = 7;
console.log(encontrarSubarreglo(nums1, S1));


const nums2 = [2, 1, 5, 2, 8];
const S2 = 7;
console.log(encontrarSubarreglo(nums2, S2));


