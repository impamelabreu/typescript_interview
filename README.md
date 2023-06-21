# 2020-0671 

## 1. Este problema fue pedido por Amazon.
Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa.

Por ejemplo, si N es 4, entonces hay 5 formas únicas:
1, 1, 1, 1

2, 1, 1

1, 2, 1

1, 1, 2

2, 2

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez.

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.

### ---------- Código del ejercicio ----------

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




## 2. Uber preguntó recientemente el problema:
Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena.

Aquí hay un ejemplo y un código de inicio:
distancia_más_corta(s, c)

Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:
shortest_dist('helloworld', 'l')

h e l l o w o r l d

[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

0 1 2 3 4 5 6 7 8 9

### ---------- Código del ejercicio ----------

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




## 3. Facebook preguntó recientemente el problema: (Slider Window)
Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2].

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8].

Nota: No puedes usar ciclos anidados para resolver el problema.

### ---------- Código del ejercicio ----------

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
