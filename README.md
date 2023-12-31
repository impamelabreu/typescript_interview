# Pamela Abreu 2020-0671 

## Ejercicio No. 1

Este problema fue pedido por Amazon.

Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa.

Por ejemplo, si N es 4, entonces hay 5 formas únicas:                                                                                                                      
1, 1, 1, 1                                                                                                                                                                  
2, 1, 1                                                                                                                                                                    
1, 2, 1                                                                                                                                                                    
1, 1, 2                                                                                                                                                                    
2, 2

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez.

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.

- ### Explicación del código

La función countUniqueSteps calcula el número de formas únicas de subir una escalera de tamaño N usando los pasos en el array X. Se inicializa una matriz memo con el primer elemento establecido en 1, ya que hay una única forma de subir una escalera vacía. Se utiliza un bucle for para iterar desde 1 hasta N. Dentro del bucle, se calcula el número total de formas únicas para el tamaño actual de la escalera, verificando cada paso en el array X y agregando las formas únicas de los tamaños de escalera anteriores almacenados en memo. El resultado se almacena en memo[N] y se devuelve.

La función printUniqueSteps muestra el número de formas únicas de subir la escalera y genera y muestra todas las formas únicas. Se llama a countUniqueSteps para obtener el número de formas únicas y se muestra en la consola. Luego, se imprime un mensaje indicando que se mostrarán las formas de subir la escalera. Se llama a la función generateUniqueSteps para generar y mostrar todas las formas únicas de subir la escalera.

La función generateUniqueSteps genera y muestra todas las formas únicas de subir la escalera. Si el tamaño actual de la escalera (N) es 0, significa que se ha alcanzado la parte superior de la escalera, por lo que se muestra el camino (path) actual en la consola. Dentro de un bucle for, se considera cada paso posible en el array X. Si la diferencia entre el tamaño actual de la escalera y el paso actual (N - X[i]) es mayor o igual a 0, se llama a la función generateUniqueSteps de manera recursiva con un tamaño de escalera reducido (N - X[i]), el mismo array de pasos (X), y se agrega el paso actual al camino (path). Esto se repite para todos los pasos posibles, generando todas las formas únicas de subir la escalera.

Al final del código, se declaran dos tamaños de escalera (N1 y N2) y arrays de pasos posibles (X1 y X2). Se llaman a printUniqueSteps dos veces con los respectivos valores de N y X, y los resultados se muestran en la consola.

- ### Big O

La función countUniqueSteps utiliza la función auxiliar helper para calcular el número de formas únicas de subir una escalera. Helper tiene una complejidad de O(N * M) debido a un bucle for que recorre los elementos de X, y utiliza un array memo para memoizar los cálculos y evitar repeticiones de longitud N, lo que tiene una complejidad adicional de O(N). En general, countUniqueSteps tiene una complejidad aproximada de O(N * M).

La función printUniqueSteps llama a countUniqueSteps una vez, por lo que su complejidad también es O(N * M).

La función generateUniqueSteps es llamada por printUniqueSteps y realiza un bucle for que recorre los elementos de X. La complejidad de generateUniqueSteps es O(M) ya que se realiza una llamada recursiva por cada elemento de X.

Por lo cual, la complejidad general del programa puede aproximarse a O(N * M), donde N es el número de escalones y M es el tamaño del array X. Esto significa que el tiempo de ejecución aumentará proporcionalmente al número de escalones y al tamaño del conjunto de pasos posibles.

## Ejercicio No. 2

Uber preguntó recientemente el problema:

Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena.

Aquí hay un ejemplo y un código de inicio:
distancia_más_corta(s, c)

Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:
shortest_dist('helloworld', 'l')

h e l l o w o r l d                                                                                                                                                        
[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]                                                                                                                                              
0 1 2 3 4 5 6 7 8 9

- ### Explicación del código

En la función shortestDist esta lo que hará es calcular las distancias más cortas entre cada aparición de un carácter específico (c) en una cadena de texto (s) y el carácter anterior o siguiente más cercano. Luego, devuelve un array que contiene estas distancias.

Se tiliza dos bucles for. En el primer bucle, itera sobre cada carácter en la cadena s y verifica si el carácter es igual a c. Si es así, agrega un 0 al array distances para representar que la distancia al carácter actual es cero y actualiza la variable prevIdx con el índice actual. Si el carácter no es igual a c, calcula la distancia entre el carácter actual y el carácter anterior más cercano (i - prevIdx) y la agrega al array distances.

Después de completar el primer bucle, se reinicia la variable prevIdx con Infinity. Luego, se inicia el segundo bucle en sentido inverso, desde el último carácter de la cadena s. Dentro de este bucle, se actualiza la variable prevIdx con el índice actual cuando se encuentra un carácter igual a c. Si el carácter no es igual a c, se calcula la distancia más corta entre el carácter actual y el carácter siguiente más cercano. Esta distancia se calcula como el mínimo entre la distancia ya almacenada en distances[i] y la diferencia entre prevIdx e i. La distancia más corta se actualiza en distances[i].

Finalmente, la función devuelve el array distances, que contiene las distancias más cortas para cada aparición del carácter c en la cadena s. En el código de ejemplo se utiliza la cadena 'Pamela' y el carácter 'a', y el resultado se imprime en la consola utilizando console.log.

- ### Big O

El código tiene una big o de tiempo cuadrática, O(n^2), donde "n" es el número de caracteres en la cadena de entrada "s". Esto se debe a que utiliza dos bucles "for" anidados: uno para recorrer cada carácter en la cadena y otro para encontrar la distancia mínima entre el carácter actual y el carácter objetivo "c".

El primer bucle "for" tiene una complejidad de O(n), ya que recorre la cadena "s" completa una vez. Dentro de este bucle, el segundo bucle "for" también tiene una complejidad de O(n), ya que también recorre la cadena "s" completa en cada iteración del primer bucle.

Dado que ambos bucles "for" están anidados, la complejidad total del algoritmo es O(n * n) = O(n^2).

Por ende, el tiempo de ejecución del algoritmo aumenta cuadráticamente a medida que crece el tamaño de la cadena de entrada "s".

## Ejercicio No. 3

Facebook preguntó recientemente el problema: (Slider Window)

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo

Input: [2, 1, 5, 2, 3, 2], S=7                                                                      
Output: 2                                                                               
Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2].

Input: [2, 1, 5, 2, 8], S=7                                                                         
Output: 1                                                                               
Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8].

Nota: No puedes usar ciclos anidados para resolver el problema.

- ### Explicación del código

En la función encontrarSubarreglo está busca la longitud mínima de un subarreglo cuya suma sea mayor o igual a un número objetivo en un array dado. El código inicializa variables para realizar un seguimiento de la longitud mínima, la suma acumulada y el índice de inicio del subarreglo actual. Luego, utiliza bucles for y while para recorrer el array y calcular la longitud mínima del subarreglo.

En el bucle for, se suma cada elemento al valor de sumaActual. Cuando sumaActual supera o iguala el número objetivo, se actualiza la longitud mínima tomando el mínimo entre la longitud actual y la longitud del subarreglo actual. Luego, se resta el elemento en el índice de inicio de nums de sumaActual y se incrementa el índice de inicio.

Después de completar el bucle for, se verifica si la longitud mínima sigue siendo Infinity. Si es así, significa que no se encontró ningún subarreglo que cumpla con la condición y se devuelve 0. De lo contrario, se devuelve la longitud mínima.

Fuera de la función, se declaran arrays de números y números objetivo para probar la función. Se llama a la función encontrarSubarreglo con los parámetros correspondientes y se imprime el resultado en la consola.

- ### Big O

El codigo utiliza el enfoque de ventana deslizante para resolver el problema de encontrar la longitud mínima de un subarreglo cuya suma sea mayor o igual a un valor objetivo "S". Este enfoque se basa en el uso de dos punteros que delimitan la ventana en el arreglo. El bucle principal se ejecuta una vez por cada elemento en el arreglo, lo que da lugar a una complejidad de O(N), donde N es el número de elementos en el arreglo.

Dentro de este bucle, se realizan operaciones constantes como sumar y restar elementos del arreglo, actualizar la longitud mínima y mover los punteros de la ventana. Estas operaciones tienen una complejidad de O(1), ya que no dependen del tamaño del arreglo.

En el peor de los casos, el bucle principal se ejecutará N veces y, en cada iteración, el bucle interno se ejecutará mientras la suma de la ventana sea mayor o igual a "S". Sin embargo, el número total de iteraciones del bucle interno no superará N, ya que los punteros solo se mueven hacia adelante y nunca retroceden en el arreglo.

En conjunto, el código tiene una complejidad de O(N), lo que implica que el tiempo de ejecución aumenta linealmente a medida que crece el tamaño del arreglo de entrada. Esto lo hace una solución eficiente para el problema en consideración.
