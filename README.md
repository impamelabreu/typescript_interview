# Pamela Abreu 2020-0671 

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

### Explicacion del código

### Big O


## 2. Uber preguntó recientemente el problema:
Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena.

Aquí hay un ejemplo y un código de inicio:
distancia_más_corta(s, c)

Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:
shortest_dist('helloworld', 'l')

h e l l o w o r l d                                                                                                                                                        
[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]                                                                                                                                              
0 1 2 3 4 5 6 7 8 9

### Explicacion del código

La función shortestDist calcula las distancias más cortas entre cada aparición de un carácter específico (c) en una cadena de texto (s) y el carácter anterior o siguiente más cercano. Devuelve un array que contiene estas distancias.

El algoritmo utiliza dos bucles for. En el primer bucle, itera sobre cada carácter en la cadena s y verifica si el carácter es igual a c. Si es así, agrega un 0 al array distances para representar que la distancia al carácter actual es cero y actualiza la variable prevIdx con el índice actual. Si el carácter no es igual a c, calcula la distancia entre el carácter actual y el carácter anterior más cercano (i - prevIdx) y la agrega al array distances.

Después de completar el primer bucle, se reinicia la variable prevIdx con Infinity. Luego, se inicia el segundo bucle en sentido inverso, desde el último carácter de la cadena s. Dentro de este bucle, se actualiza la variable prevIdx con el índice actual cuando se encuentra un carácter igual a c. Si el carácter no es igual a c, se calcula la distancia más corta entre el carácter actual y el carácter siguiente más cercano. Esta distancia se calcula como el mínimo entre la distancia ya almacenada en distances[i] y la diferencia entre prevIdx e i. La distancia más corta se actualiza en distances[i].

Finalmente, la función devuelve el array distances, que contiene las distancias más cortas para cada aparición del carácter c en la cadena s. En el código de ejemplo se utiliza la cadena 'Pamela' y el carácter 'a', y el resultado se imprime en la consola utilizando console.log.

### Big O


## 3. Facebook preguntó recientemente el problema: (Slider Window)
Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo

Input: [2, 1, 5, 2, 3, 2], S=7                                                                                                                                          
Output: 2                                                                                                                                                          
Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2].

Input: [2, 1, 5, 2, 8], S=7                                                                                                                                              
Output: 1                                                                                                                                                          
Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8].

Nota: No puedes usar ciclos anidados para resolver el problema.

### Explicacion del código

### Big O
